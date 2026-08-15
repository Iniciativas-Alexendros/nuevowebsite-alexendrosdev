import { describe, expect, it } from "vitest";

import { legalDocumentSchema } from "@/lib/validations/content";

const validDocument = {
  id: "aviso-legal",
  slug: "aviso-legal",
  title: "Aviso legal",
  status: "review",
  updatedAt: "2026-08-15",
  sections: [
    {
      heading: "Datos del prestador",
      paragraphs: ["Titular: ejemplo.", "NIF: [PENDIENTE: NIF]."],
    },
  ],
  metadata: {
    title: "Aviso legal",
    description: "Información del prestador conforme a la LSSI-CE.",
  },
};

describe("legalDocumentSchema", () => {
  it("acepta un documento legal válido", () => {
    expect(legalDocumentSchema.safeParse(validDocument).success).toBe(true);
  });

  it("acepta secciones sin heading", () => {
    expect(
      legalDocumentSchema.safeParse({
        ...validDocument,
        sections: [{ paragraphs: ["Párrafo único."] }],
      }).success
    ).toBe(true);
  });

  it("rechaza sections vacío", () => {
    expect(legalDocumentSchema.safeParse({ ...validDocument, sections: [] }).success).toBe(false);
  });

  it("rechaza paragraphs vacío en una sección", () => {
    expect(
      legalDocumentSchema.safeParse({
        ...validDocument,
        sections: [{ heading: "Vacía", paragraphs: [] }],
      }).success
    ).toBe(false);
  });

  it("rechaza slug inválido", () => {
    expect(legalDocumentSchema.safeParse({ ...validDocument, slug: "Aviso Legal" }).success).toBe(
      false
    );
  });

  it("rechaza status fuera del enum", () => {
    expect(legalDocumentSchema.safeParse({ ...validDocument, status: "pending" }).success).toBe(
      false
    );
  });
});
