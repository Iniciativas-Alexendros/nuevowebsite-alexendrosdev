import { describe, expect, it } from "vitest";

import { CONTACT_SUBJECTS } from "@/content/contact-subjects";
import { contactFormSchema } from "@/lib/validations/contact-form";

const validPayload = {
  name: "Alex Cliente",
  email: "alex@example.com",
  company: "Acme",
  subject: CONTACT_SUBJECTS[0],
  message: "Necesito ayuda con un proyecto de software a medida para mi empresa.",
  consent: true as const,
  website: "",
};

describe("contactFormSchema", () => {
  it("acepta un payload válido completo", () => {
    const result = contactFormSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.company).toBe("Acme");
      expect(result.data.subject).toBe(CONTACT_SUBJECTS[0]);
    }
  });

  it("acepta company y subject vacíos como undefined", () => {
    const result = contactFormSchema.safeParse({
      ...validPayload,
      company: "",
      subject: "",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.company).toBeUndefined();
      expect(result.data.subject).toBeUndefined();
    }
  });

  it("rechaza nombre corto", () => {
    expect(contactFormSchema.safeParse({ ...validPayload, name: "A" }).success).toBe(false);
  });

  it("rechaza email inválido", () => {
    expect(contactFormSchema.safeParse({ ...validPayload, email: "no-es-email" }).success).toBe(
      false
    );
  });

  it("rechaza mensaje corto", () => {
    expect(
      contactFormSchema.safeParse({ ...validPayload, message: "demasiado corto" }).success
    ).toBe(false);
  });

  it("rechaza consentimiento false o ausente", () => {
    expect(contactFormSchema.safeParse({ ...validPayload, consent: false }).success).toBe(false);
    const { consent: _omit, ...rest } = validPayload;
    void _omit;
    expect(contactFormSchema.safeParse(rest).success).toBe(false);
  });

  it("rechaza asunto fuera de la lista cerrada", () => {
    expect(contactFormSchema.safeParse({ ...validPayload, subject: "Otro tema" }).success).toBe(
      false
    );
  });

  it("rechaza honeypot con valor", () => {
    expect(
      contactFormSchema.safeParse({ ...validPayload, website: "https://spam.test" }).success
    ).toBe(false);
  });
});
