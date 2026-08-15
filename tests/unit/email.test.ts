import { afterEach, describe, expect, it, vi } from "vitest";

import { sendContactEmail } from "@/lib/server/email";
import type { ContactEmailConfig } from "@/lib/env";
import { CONTACT_SUBJECTS } from "@/content/contact-subjects";

const config: ContactEmailConfig = {
  toEmail: "hola@alexendros.dev",
  smtpHost: "smtp.protonmail.ch",
  smtpPort: 587,
  smtpUser: "hola@alexendros.dev",
  smtpToken: "token",
  fromAddress: "hola@alexendros.dev",
  replyTo: null,
  rateLimitMax: 5,
};

const data = {
  name: "Alex",
  email: "alex@example.com",
  company: undefined,
  subject: CONTACT_SUBJECTS[1],
  message: "Mensaje de prueba con longitud suficiente para validar el envío.",
  consent: true as const,
  website: "",
};

afterEach(() => {
  vi.restoreAllMocks();
});

describe("sendContactEmail", () => {
  it("devuelve ok cuando el transporte envía", async () => {
    const sendMail = vi.fn().mockResolvedValue({ messageId: "1" });
    const result = await sendContactEmail({ config, data, sendMail });
    expect(result).toEqual({ ok: true });
    expect(sendMail).toHaveBeenCalledOnce();
    const options = sendMail.mock.calls[0]?.[0];
    expect(options.to).toBe(config.toEmail);
    expect(options.replyTo).toBe(data.email);
    expect(options.subject).toContain(CONTACT_SUBJECTS[1]);
  });

  it("devuelve provider ante fallo del transporte", async () => {
    const sendMail = vi.fn().mockRejectedValue(new Error("smtp down"));
    const result = await sendContactEmail({ config, data, sendMail });
    expect(result).toEqual({ ok: false, reason: "provider" });
  });
});
