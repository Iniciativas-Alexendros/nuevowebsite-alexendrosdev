import nodemailer from "nodemailer";

import type { ContactEmailConfig } from "@/lib/env";
import type { ContactFormData } from "@/lib/validations/contact-form";

export type SendContactEmailInput = {
  config: ContactEmailConfig;
  data: ContactFormData;
  /** Inyectable en tests; por defecto crea transporter SMTP de Proton. */
  sendMail?: (options: nodemailer.SendMailOptions) => Promise<unknown>;
};

export type SendContactEmailResult = { ok: true } | { ok: false; reason: "timeout" | "provider" };

const SEND_TIMEOUT_MS = 15_000;

function buildBody(data: ContactFormData): string {
  const lines = [
    `Nombre: ${data.name}`,
    `Email: ${data.email}`,
    data.company ? `Empresa: ${data.company}` : null,
    data.subject ? `Asunto: ${data.subject}` : null,
    "",
    "Mensaje:",
    data.message,
  ];
  return lines.filter((line) => line !== null).join("\n");
}

/**
 * Adaptador de envío Proton SMTP (ADR-0011).
 * Sustituible sin cambiar la interfaz pública (REQ-GLOBAL-010).
 */
export async function sendContactEmail(
  input: SendContactEmailInput
): Promise<SendContactEmailResult> {
  const { config, data } = input;

  const sendMail =
    input.sendMail ??
    (() => {
      const transporter = nodemailer.createTransport({
        host: config.smtpHost,
        port: config.smtpPort,
        secure: false,
        requireTLS: true,
        auth: {
          user: config.smtpUser,
          pass: config.smtpToken,
        },
        connectionTimeout: SEND_TIMEOUT_MS,
        greetingTimeout: SEND_TIMEOUT_MS,
        socketTimeout: SEND_TIMEOUT_MS,
      });

      return (options: nodemailer.SendMailOptions) => transporter.sendMail(options);
    })();

  const mailOptions: nodemailer.SendMailOptions = {
    from: config.fromAddress,
    to: config.toEmail,
    replyTo: data.email,
    subject: data.subject ? `[Contacto] ${data.subject}` : `[Contacto] Mensaje de ${data.name}`,
    text: buildBody(data),
  };

  try {
    await Promise.race([
      sendMail(mailOptions),
      new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error("timeout")), SEND_TIMEOUT_MS);
      }),
    ]);
    return { ok: true };
  } catch (error) {
    const isTimeout = error instanceof Error && error.message === "timeout";
    // Sin PII ni detalles del proveedor en logs (NFR-SEC-006).
    console.error(
      isTimeout ? "[contact] fallo de envío: timeout" : "[contact] fallo de envío: proveedor"
    );
    return { ok: false, reason: isTimeout ? "timeout" : "provider" };
  }
}
