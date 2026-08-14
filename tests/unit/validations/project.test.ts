import { describe, expect, it } from "vitest";

import {
  projectImageSchema,
  projectLinkSchema,
  projectSchema,
  projectVisibilitySchema,
} from "@/lib/validations/content";

const validProject = {
  id: "proyecto-web",
  slug: "plataforma-web",
  title: "Plataforma Web",
  shortDescription: "Plataforma web de gestión.",
  summary: "Resumen del proyecto.",
  status: "published",
  visibility: "publico",
  role: "Desarrollador full-stack",
  technologies: ["next-js"],
  publishedAt: "2026-08-14",
  metadata: { title: "Plataforma Web", description: "Descripción del proyecto." },
};

describe("projectVisibilitySchema", () => {
  it.each(["publico", "limitado", "privado"])("acepta la visibilidad %s", (value) => {
    expect(projectVisibilitySchema.safeParse(value).success).toBe(true);
  });

  it("rechaza un valor ajeno al enum", () => {
    expect(projectVisibilitySchema.safeParse("oculto").success).toBe(false);
  });
});

describe("projectImageSchema", () => {
  it("acepta una imagen válida", () => {
    expect(projectImageSchema.safeParse({ src: "/img/proyecto.png", alt: "Captura" }).success).toBe(
      true
    );
  });

  it("rechaza src vacío", () => {
    expect(projectImageSchema.safeParse({ src: "", alt: "Captura" }).success).toBe(false);
  });

  it("rechaza alt vacío", () => {
    expect(projectImageSchema.safeParse({ src: "/img/p.png", alt: "" }).success).toBe(false);
  });
});

describe("projectLinkSchema", () => {
  it("acepta un enlace válido", () => {
    expect(projectLinkSchema.safeParse({ label: "Repositorio", href: "/repo" }).success).toBe(true);
  });

  it("rechaza href vacío", () => {
    expect(projectLinkSchema.safeParse({ label: "Repositorio", href: "" }).success).toBe(false);
  });

  it("rechaza label de más de 40 caracteres", () => {
    expect(projectLinkSchema.safeParse({ label: "l".repeat(41), href: "/repo" }).success).toBe(
      false
    );
  });
});

describe("projectSchema", () => {
  it("acepta un proyecto público válido sin confidentialityNotice", () => {
    expect(projectSchema.safeParse(validProject).success).toBe(true);
  });

  it("acepta un proyecto no público con confidentialityNotice", () => {
    expect(
      projectSchema.safeParse({
        ...validProject,
        visibility: "privado",
        confidentialityNotice: "Proyecto confidencial.",
      }).success
    ).toBe(true);
  });

  it("rellena featured con default false", () => {
    const result = projectSchema.safeParse(validProject);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.featured).toBe(false);
    }
  });

  it("rechaza visibilidad limitado sin confidentialityNotice", () => {
    const result = projectSchema.safeParse({
      ...validProject,
      visibility: "limitado",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(
        result.error.issues.some(
          (issue) => issue.path.join(".") === "confidentialityNotice" && issue.code === "custom"
        )
      ).toBe(true);
    }
  });

  it("rechaza visibilidad privado sin confidentialityNotice", () => {
    const result = projectSchema.safeParse({
      ...validProject,
      visibility: "privado",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(
        result.error.issues.some((issue) => issue.path.join(".") === "confidentialityNotice")
      ).toBe(true);
    }
  });

  it("rechaza publishedAt que no es fecha ISO", () => {
    expect(
      projectSchema.safeParse({
        ...validProject,
        publishedAt: "2026-08-14T00:00:00.000Z",
      }).success
    ).toBe(false);
  });

  it("rechaza publishedAt en formato no ISO", () => {
    expect(projectSchema.safeParse({ ...validProject, publishedAt: "14/08/2026" }).success).toBe(
      false
    );
  });

  it("rechaza updatedAt que no es fecha ISO", () => {
    expect(
      projectSchema.safeParse({
        ...validProject,
        updatedAt: "14/08/2026",
      }).success
    ).toBe(false);
  });

  it("rechaza technologies vacío", () => {
    expect(projectSchema.safeParse({ ...validProject, technologies: [] }).success).toBe(false);
  });

  it("rechaza slug inválido", () => {
    expect(projectSchema.safeParse({ ...validProject, slug: "Plataforma Web" }).success).toBe(
      false
    );
  });

  it("rechaza metadata inválido", () => {
    expect(
      projectSchema.safeParse({
        ...validProject,
        metadata: { title: "", description: "ok" },
      }).success
    ).toBe(false);
  });
});
