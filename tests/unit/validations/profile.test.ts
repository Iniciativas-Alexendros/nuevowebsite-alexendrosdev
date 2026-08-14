import { describe, expect, it } from "vitest";

import { profileSchema } from "@/lib/validations/content";

const validProfile = {
  id: "alexendros",
  name: "Alexendros",
  title: "Desarrollador web full-stack",
  summary: "Resumen profesional.",
  bio: ["Párrafo uno.", "Párrafo dos."],
  status: "published",
  metadata: {
    title: "Sobre mí",
    description: "Perfil profesional de Alexendros.",
  },
};

describe("profileSchema", () => {
  it("acepta un perfil válido", () => {
    expect(profileSchema.safeParse(validProfile).success).toBe(true);
  });

  it("acepta campos opcionales completos", () => {
    expect(
      profileSchema.safeParse({
        ...validProfile,
        location: "Madrid, España",
        languages: ["es", "en"],
        links: [{ label: "GitHub", href: "https://github.com/alexendros" }],
      }).success
    ).toBe(true);
  });

  it("rechaza id ausente", () => {
    const { id: _omitted, ...rest } = validProfile;
    void _omitted;
    expect(profileSchema.safeParse(rest).success).toBe(false);
  });

  it("rechaza name vacío", () => {
    expect(profileSchema.safeParse({ ...validProfile, name: "" }).success).toBe(false);
  });

  it("rechaza title de más de 120 caracteres", () => {
    expect(profileSchema.safeParse({ ...validProfile, title: "t".repeat(121) }).success).toBe(
      false
    );
  });

  it("rechaza bio vacío", () => {
    expect(profileSchema.safeParse({ ...validProfile, bio: [] }).success).toBe(false);
  });

  it("rechaza links con href vacío", () => {
    expect(
      profileSchema.safeParse({
        ...validProfile,
        links: [{ label: "GitHub", href: "" }],
      }).success
    ).toBe(false);
  });

  it("rechaza status ajeno al enum", () => {
    expect(profileSchema.safeParse({ ...validProfile, status: "borrador" }).success).toBe(false);
  });

  it("rechaza metadata inválido", () => {
    expect(
      profileSchema.safeParse({
        ...validProfile,
        metadata: { title: "t".repeat(81), description: "ok" },
      }).success
    ).toBe(false);
  });
});
