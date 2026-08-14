import { describe, expect, it } from "vitest";

import { serviceSchema } from "@/lib/validations/content";

const validService = {
  id: "servicio-desarrollo-web",
  slug: "desarrollo-web",
  title: "Desarrollo Web",
  shortDescription: "Creación de sitios web a medida.",
  description: "Descripción extensa del servicio.",
  audience: "Negocios que necesitan presencia digital.",
  problemsSolved: ["Falta de presencia online"],
  scope: ["Diseño y desarrollo"],
  deliverables: ["Sitio web entregado"],
  cta: { label: "Solicitar presupuesto", href: "/contacto" },
  status: "published",
  metadata: {
    title: "Desarrollo Web",
    description: "Servicios de desarrollo web.",
  },
};

describe("serviceSchema", () => {
  it("acepta un servicio válido", () => {
    expect(serviceSchema.safeParse(validService).success).toBe(true);
  });

  it("acepta campos opcionales y featured con default", () => {
    const result = serviceSchema.safeParse(validService);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.featured).toBe(false);
    }
  });

  it("acepta featured explícito", () => {
    expect(serviceSchema.safeParse({ ...validService, featured: true }).success).toBe(true);
  });

  it("rechaza id ausente", () => {
    const { id: _omitted, ...rest } = validService;
    void _omitted;
    expect(serviceSchema.safeParse(rest).success).toBe(false);
  });

  it("rechaza slug inválido", () => {
    expect(serviceSchema.safeParse({ ...validService, slug: "Desarrollo Web" }).success).toBe(
      false
    );
  });

  it("rechaza title de más de 80 caracteres", () => {
    expect(serviceSchema.safeParse({ ...validService, title: "t".repeat(81) }).success).toBe(false);
  });

  it("rechaza shortDescription de más de 200 caracteres", () => {
    expect(
      serviceSchema.safeParse({
        ...validService,
        shortDescription: "s".repeat(201),
      }).success
    ).toBe(false);
  });

  it("rechaza problemsSolved vacío", () => {
    expect(serviceSchema.safeParse({ ...validService, problemsSolved: [] }).success).toBe(false);
  });

  it("rechaza status ajeno al enum", () => {
    expect(serviceSchema.safeParse({ ...validService, status: "borrador" }).success).toBe(false);
  });

  it("rechaza cta ausente", () => {
    const { cta: _omitted, ...rest } = validService;
    void _omitted;
    expect(serviceSchema.safeParse(rest).success).toBe(false);
  });

  it("rechaza metadata inválido", () => {
    expect(
      serviceSchema.safeParse({
        ...validService,
        metadata: { title: "t".repeat(81), description: "ok" },
      }).success
    ).toBe(false);
  });

  it("rechaza technologies con slug inválido", () => {
    expect(
      serviceSchema.safeParse({
        ...validService,
        technologies: ["next-js", "React"],
      }).success
    ).toBe(false);
  });
});
