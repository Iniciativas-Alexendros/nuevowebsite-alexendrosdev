import { describe, expect, it } from "vitest";

import {
  contentStatusSchema,
  ctaSchema,
  seoMetadataSchema,
  slugSchema,
} from "@/lib/validations/content";

describe("slugSchema", () => {
  it("acepta un slug kebab-case válido", () => {
    expect(slugSchema.safeParse("desarrollo-web").success).toBe(true);
  });

  it("acepta un slug de un solo segmento", () => {
    expect(slugSchema.safeParse("web").success).toBe(true);
  });

  it("acepta un slug con números", () => {
    expect(slugSchema.safeParse("seo2-2026").success).toBe(true);
  });

  it("rechaza mayúsculas y espacios", () => {
    expect(slugSchema.safeParse("Desarrollo Web").success).toBe(false);
  });

  it("rechaza guiones bajos", () => {
    expect(slugSchema.safeParse("desarrollo_web").success).toBe(false);
  });

  it("rechaza una cadena de un solo carácter", () => {
    expect(slugSchema.safeParse("a").success).toBe(false);
  });

  it("rechaza un guion inicial", () => {
    expect(slugSchema.safeParse("-inicio").success).toBe(false);
  });

  it("rechaza un guion final", () => {
    expect(slugSchema.safeParse("fin-").success).toBe(false);
  });

  it("rechaza la cadena vacía", () => {
    expect(slugSchema.safeParse("").success).toBe(false);
  });

  it("rechaza un slug de más de 64 caracteres", () => {
    expect(slugSchema.safeParse("a".repeat(65)).success).toBe(false);
  });

  it("rechaza un valor que no es string", () => {
    expect(slugSchema.safeParse(123).success).toBe(false);
  });
});

describe("contentStatusSchema", () => {
  it.each(["draft", "review", "published", "archived"])("acepta el estado %s", (value) => {
    expect(contentStatusSchema.safeParse(value).success).toBe(true);
  });

  it("rechaza un valor ajeno al enum", () => {
    expect(contentStatusSchema.safeParse("borrador").success).toBe(false);
  });

  it("rechaza un valor no string", () => {
    expect(contentStatusSchema.safeParse(1).success).toBe(false);
  });
});

describe("seoMetadataSchema", () => {
  it("acepta metadatos válidos", () => {
    expect(
      seoMetadataSchema.safeParse({
        title: "Servicios de desarrollo web",
        description: "Descripción breve de servicios.",
      }).success
    ).toBe(true);
  });

  it("rechaza title ausente", () => {
    expect(seoMetadataSchema.safeParse({ description: "Solo descripción" }).success).toBe(false);
  });

  it("rechaza description ausente", () => {
    expect(seoMetadataSchema.safeParse({ title: "Solo título" }).success).toBe(false);
  });

  it("rechaza title vacío", () => {
    expect(seoMetadataSchema.safeParse({ title: "", description: "ok" }).success).toBe(false);
  });

  it("rechaza title de más de 80 caracteres", () => {
    expect(
      seoMetadataSchema.safeParse({
        title: "t".repeat(81),
        description: "descripción válida",
      }).success
    ).toBe(false);
  });

  it("rechaza description de más de 200 caracteres", () => {
    expect(
      seoMetadataSchema.safeParse({
        title: "título válido",
        description: "d".repeat(201),
      }).success
    ).toBe(false);
  });

  it("rechaza title no string", () => {
    expect(seoMetadataSchema.safeParse({ title: 42, description: "ok" }).success).toBe(false);
  });
});

describe("ctaSchema", () => {
  it("acepta una llamada a la acción válida", () => {
    expect(ctaSchema.safeParse({ label: "Solicitar presupuesto", href: "/contacto" }).success).toBe(
      true
    );
  });

  it("rechaza label ausente", () => {
    expect(ctaSchema.safeParse({ href: "/contacto" }).success).toBe(false);
  });

  it("rechaza href ausente", () => {
    expect(ctaSchema.safeParse({ label: "Contactar" }).success).toBe(false);
  });

  it("rechaza label vacío", () => {
    expect(ctaSchema.safeParse({ label: "", href: "/contacto" }).success).toBe(false);
  });

  it("rechaza label de más de 40 caracteres", () => {
    expect(ctaSchema.safeParse({ label: "l".repeat(41), href: "/contacto" }).success).toBe(false);
  });

  it("rechaza href vacío", () => {
    expect(ctaSchema.safeParse({ label: "Contactar", href: "" }).success).toBe(false);
  });
});
