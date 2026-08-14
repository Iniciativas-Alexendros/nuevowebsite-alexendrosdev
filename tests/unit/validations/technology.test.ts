import { describe, expect, it } from "vitest";

import { technologyCategorySchema, technologySchema } from "@/lib/validations/content";

const validTechnology = {
  id: "next-js",
  name: "Next.js",
  category: "framework",
  description: "Framework de React para producción.",
  status: "published",
};

describe("technologyCategorySchema", () => {
  it.each(["lenguaje", "framework", "cms", "estilo", "herramienta"])(
    "acepta la categoría %s",
    (value) => {
      expect(technologyCategorySchema.safeParse(value).success).toBe(true);
    }
  );

  it("rechaza un valor ajeno al enum", () => {
    expect(technologyCategorySchema.safeParse("base-de-datos").success).toBe(false);
  });
});

describe("technologySchema", () => {
  it("acepta una tecnología válida", () => {
    expect(technologySchema.safeParse(validTechnology).success).toBe(true);
  });

  it("rellena featured con default false", () => {
    const result = technologySchema.safeParse(validTechnology);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.featured).toBe(false);
    }
  });

  it("acepta website opcional válido", () => {
    expect(
      technologySchema.safeParse({
        ...validTechnology,
        website: "https://nextjs.org",
      }).success
    ).toBe(true);
  });

  it("rechaza website que no es URL", () => {
    expect(
      technologySchema.safeParse({
        ...validTechnology,
        website: "no-es-url",
      }).success
    ).toBe(false);
  });

  it("rechaza id slug inválido", () => {
    expect(technologySchema.safeParse({ ...validTechnology, id: "Next.js" }).success).toBe(false);
  });

  it("rechaza name de más de 40 caracteres", () => {
    expect(technologySchema.safeParse({ ...validTechnology, name: "n".repeat(41) }).success).toBe(
      false
    );
  });

  it("rechaza category ajeno al enum", () => {
    expect(
      technologySchema.safeParse({
        ...validTechnology,
        category: "base-de-datos",
      }).success
    ).toBe(false);
  });

  it("rechaza description vacío", () => {
    expect(technologySchema.safeParse({ ...validTechnology, description: "" }).success).toBe(false);
  });

  it("rechaza status ajeno al enum", () => {
    expect(technologySchema.safeParse({ ...validTechnology, status: "borrador" }).success).toBe(
      false
    );
  });
});
