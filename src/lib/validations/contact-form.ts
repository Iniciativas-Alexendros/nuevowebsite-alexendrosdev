import { z } from "zod";

import { CONTACT_SUBJECTS } from "@/content/contact-subjects";

export const contactSubjectSchema = z.enum(CONTACT_SUBJECTS);

/**
 * Esquema único cliente/servidor del formulario de contacto.
 * El servidor es la fuente de verdad (ARCHITECTURE §7; REQ-FORM-CONTACT-001).
 *
 * El honeypot (`website`) se inspecciona en el route handler antes de este
 * esquema; aquí solo se admite vacío o ausente.
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres.")
    .max(100, "El nombre no debe superar 100 caracteres."),
  email: z.email("Introduce un email válido.").max(254, "El email no debe superar 254 caracteres."),
  company: z
    .string()
    .trim()
    .max(100, "La empresa no debe superar 100 caracteres.")
    .optional()
    .transform((value) => (value === "" || value === undefined ? undefined : value)),
  subject: z
    .union([contactSubjectSchema, z.literal("")])
    .optional()
    .transform((value) => (value === "" || value === undefined ? undefined : value)),
  message: z
    .string()
    .trim()
    .min(20, "El mensaje debe tener al menos 20 caracteres.")
    .max(2000, "El mensaje no debe superar 2.000 caracteres."),
  consent: z.literal(true, {
    error: "Debes aceptar el tratamiento de datos para enviar el formulario.",
  }),
  website: z.string().max(0, "Campo no permitido.").optional().or(z.literal("")),
});

export type ContactFormInput = z.input<typeof contactFormSchema>;
export type ContactFormData = z.output<typeof contactFormSchema>;

export type ContactApiSuccess = {
  ok: true;
  message: string;
};

export type ContactApiError = {
  ok: false;
  code: "validation" | "rate_limit" | "unavailable" | "provider" | "internal";
  message: string;
  fieldErrors?: Record<string, string[]>;
};

export type ContactApiResponse = ContactApiSuccess | ContactApiError;
