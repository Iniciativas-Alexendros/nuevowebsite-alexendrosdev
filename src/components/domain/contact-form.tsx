"use client";

import { useEffect, useId, useState, type FormEvent } from "react";

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link } from "@/components/ui/link";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contactChannels } from "@/content/contact";
import { CONTACT_SUBJECTS, type ContactSubject } from "@/content/contact-subjects";
import { contactFormSchema, type ContactApiResponse } from "@/lib/validations/contact-form";

type FormStatus =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string; fieldErrors?: Record<string, string[]> };

const FIELD_ORDER = ["name", "email", "company", "subject", "message", "consent"] as const;

function buildInitialValues(subject: "" | ContactSubject = "") {
  return {
    name: "",
    email: "",
    company: "",
    subject,
    message: "",
    consent: false,
    website: "",
  };
}

const calendarChannel = contactChannels.find(
  (channel) => channel.type === "calendar" && channel.visible
);

export type ContactFormProps = {
  /** Asunto preseleccionado desde `?subject=` (resuelto en el Server Component). */
  initialSubject?: "" | ContactSubject;
};

/**
 * Formulario de contacto (REQ-FORM-CONTACT-001).
 * Única excepción "use client" en domain (ARCHITECTURE §4.9).
 */
export function ContactForm({ initialSubject = "" }: ContactFormProps) {
  const formId = useId();
  const [values, setValues] = useState(() => buildInitialValues(initialSubject));
  const [status, setStatus] = useState<FormStatus>({ kind: "idle" });

  const fieldErrors = status.kind === "error" ? (status.fieldErrors ?? {}) : {};

  // P8-2 Fase 4 / NFR-A11Y-007: mover el foco al primer control inválido.
  useEffect(() => {
    if (status.kind !== "error" || !status.fieldErrors) return;
    const first = FIELD_ORDER.find((key) => status.fieldErrors?.[key]?.length);
    if (!first) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(`${formId}-${first}`)?.focus();
    });
    return () => cancelAnimationFrame(frame);
  }, [status, formId]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.kind === "loading") return;

    const parsed = contactFormSchema.safeParse({
      ...values,
      consent: values.consent ? true : false,
    });

    if (!parsed.success) {
      const nextErrors: Record<string, string[]> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key !== "string") continue;
        if (!nextErrors[key]) nextErrors[key] = [];
        nextErrors[key].push(issue.message);
      }
      setStatus({
        kind: "error",
        message: "Revisa los campos del formulario.",
        fieldErrors: nextErrors,
      });
      return;
    }

    setStatus({ kind: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const payload = (await response.json()) as ContactApiResponse;

      if (!payload.ok) {
        setStatus({
          kind: "error",
          message: payload.message,
          fieldErrors: payload.fieldErrors,
        });
        return;
      }

      setValues(buildInitialValues());
      setStatus({ kind: "success", message: payload.message });
    } catch {
      setStatus({
        kind: "error",
        message: "No he podido enviar el mensaje. Inténtalo de nuevo o usa otro canal de contacto.",
      });
    }
  }

  return (
    <form
      className="relative flex flex-col gap-6"
      onSubmit={onSubmit}
      noValidate
      aria-busy={status.kind === "loading" || undefined}
    >
      {status.kind === "success" ? (
        <Alert variant="success" title="Mensaje enviado">
          <div className="flex flex-col gap-3">
            <p>{status.message}</p>
            {calendarChannel ? (
              <p>
                ¿Prefieres hablar ya?{" "}
                <Link href={calendarChannel.href} variant="inline">
                  {calendarChannel.label}
                </Link>
              </p>
            ) : null}
          </div>
        </Alert>
      ) : null}

      {status.kind === "error" ? (
        <Alert variant="destructive" title="No se pudo enviar">
          {status.message}
        </Alert>
      ) : null}

      <Field id={`${formId}-name`} label="Nombre" required error={fieldErrors.name?.[0]}>
        <Input
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
          disabled={status.kind === "loading"}
        />
      </Field>

      <Field id={`${formId}-email`} label="Email" required error={fieldErrors.email?.[0]}>
        <Input
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
          disabled={status.kind === "loading"}
        />
      </Field>

      <Field
        id={`${formId}-company`}
        label="Empresa u organización"
        error={fieldErrors.company?.[0]}
      >
        <Input
          name="company"
          autoComplete="organization"
          value={values.company}
          onChange={(event) => setValues((prev) => ({ ...prev, company: event.target.value }))}
          disabled={status.kind === "loading"}
        />
      </Field>

      <Field
        id={`${formId}-subject`}
        label="Asunto o tipo de consulta"
        error={fieldErrors.subject?.[0]}
      >
        <Select
          name="subject"
          value={values.subject}
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              subject: event.target.value as "" | ContactSubject,
            }))
          }
          disabled={status.kind === "loading"}
        >
          <option value="">Selecciona una opción (opcional)</option>
          {CONTACT_SUBJECTS.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </Select>
      </Field>

      <Field
        id={`${formId}-message`}
        label="Mensaje"
        required
        help="Entre 20 y 2.000 caracteres."
        error={fieldErrors.message?.[0]}
      >
        <Textarea
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
          disabled={status.kind === "loading"}
        />
      </Field>

      {/* Honeypot: oculto visualmente; no anunciar a AT. */}
      <div className="honeypot-offscreen" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Sitio web</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => setValues((prev) => ({ ...prev, website: event.target.value }))}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-3 text-sm text-foreground">
          <Checkbox
            id={`${formId}-consent`}
            name="consent"
            checked={values.consent}
            onChange={(event) => setValues((prev) => ({ ...prev, consent: event.target.checked }))}
            disabled={status.kind === "loading"}
            aria-invalid={fieldErrors.consent ? true : undefined}
            aria-describedby={fieldErrors.consent ? `${formId}-consent-error` : undefined}
          />
          <span>
            He leído la{" "}
            <Link href="/privacidad" variant="inline">
              política de privacidad
            </Link>{" "}
            y acepto el tratamiento de mis datos para responder a esta solicitud.
          </span>
        </label>
        {fieldErrors.consent?.[0] ? (
          <p id={`${formId}-consent-error`} className="text-sm text-destructive" role="alert">
            {fieldErrors.consent[0]}
          </p>
        ) : null}
      </div>

      <div>
        <Button type="submit" loading={status.kind === "loading"}>
          Enviar mensaje
        </Button>
      </div>
    </form>
  );
}
