import { describe, expect, it } from "vitest";

import { getPublishedServices } from "@/lib/content";
import { getPublishedProjects } from "@/lib/content";
import { getPublishedTechnologies } from "@/lib/content";
import { getPublishedProfile } from "@/lib/content";
import { getServiceBySlug } from "@/lib/content";
import { getProjectBySlug } from "@/lib/content";
import { getTechnologiesByCategory } from "@/lib/content";
import { getFeaturedServices } from "@/lib/content";
import { getTechnologyById } from "@/lib/content";
import { getRelatedTechnologies } from "@/lib/content";
import { getPublishedLegalDocuments } from "@/lib/content";
import { getLegalDocumentBySlug } from "@/lib/content";

describe("selectores de contenido publicado", () => {
  it("getPublishedServices solo devuelve servicios con status 'published'", () => {
    const services = getPublishedServices();

    expect(services.length).toBeGreaterThan(0);
    for (const service of services) {
      expect(service.status).toBe("published");
    }
  });

  it("getPublishedProjects solo devuelve proyectos con status 'published' y visibility 'publico'", () => {
    const projects = getPublishedProjects();

    expect(projects.length).toBeGreaterThan(0);
    for (const project of projects) {
      expect(project.status).toBe("published");
      expect(project.visibility).toBe("publico");
    }
  });

  it("getPublishedTechnologies solo devuelve tecnologías con status 'published'", () => {
    const technologies = getPublishedTechnologies();

    expect(technologies.length).toBeGreaterThan(0);
    for (const tech of technologies) {
      expect(tech.status).toBe("published");
    }
  });

  it("getPublishedProfile devuelve profile solo si status es 'published'", () => {
    const profile = getPublishedProfile();

    expect(profile).not.toBeNull();
    if (profile) {
      expect(profile.status).toBe("published");
    }
  });

  it("getServiceBySlug devuelve servicio publicado por slug", () => {
    const service = getServiceBySlug("produccion-sitios-web");

    expect(service).toBeDefined();
    expect(service?.slug).toBe("produccion-sitios-web");
    expect(service?.status).toBe("published");
  });

  it("getServiceBySlug devuelve undefined para slugs inexistentes o borradores", () => {
    const service = getServiceBySlug("servicio-inexistente");
    expect(service).toBeUndefined();
  });

  it("getProjectBySlug devuelve proyecto publicado por slug", () => {
    const project = getProjectBySlug("front-valencia");

    expect(project).toBeDefined();
    expect(project?.slug).toBe("front-valencia");
    expect(project?.status).toBe("published");
    expect(project?.visibility).toBe("publico");
  });

  it("getProjectBySlug devuelve undefined para slugs inexistentes o borradores", () => {
    const project = getProjectBySlug("proyecto-inexistente");
    expect(project).toBeUndefined();
  });

  it("getTechnologiesByCategory filtra por categoría", () => {
    const lenguajes = getTechnologiesByCategory("lenguaje");
    const frameworks = getTechnologiesByCategory("framework");
    const herramientas = getTechnologiesByCategory("herramienta");

    expect(lenguajes.length).toBeGreaterThan(0);
    expect(frameworks.length).toBeGreaterThan(0);
    expect(herramientas.length).toBeGreaterThan(0);

    for (const tech of lenguajes) {
      expect(tech.category).toBe("lenguaje");
    }
    for (const tech of frameworks) {
      expect(tech.category).toBe("framework");
    }
    for (const tech of herramientas) {
      expect(tech.category).toBe("herramienta");
    }
  });

  it("getTechnologiesByCategory devuelve array vacío para categoría sin tecnologías", () => {
    const result = getTechnologiesByCategory("cms");
    expect(Array.isArray(result)).toBe(true);
  });

  it("getFeaturedServices solo devuelve servicios featured", () => {
    const featured = getFeaturedServices();

    expect(featured.length).toBeGreaterThan(0);
    for (const service of featured) {
      expect(service.featured).toBe(true);
      expect(service.status).toBe("published");
    }
  });

  it("getTechnologyById devuelve tecnología por id", () => {
    const tech = getTechnologyById("next-js");

    expect(tech).toBeDefined();
    expect(tech?.id).toBe("next-js");
    expect(tech?.status).toBe("published");
  });

  it("getTechnologyById devuelve undefined para id inexistente", () => {
    const tech = getTechnologyById("tecnologia-inexistente");
    expect(tech).toBeUndefined();
  });

  it("getRelatedTechnologies filtra por relatedProjects y relatedServices", () => {
    const related = getRelatedTechnologies(["front-valencia"], ["produccion-sitios-web"]);

    expect(related.length).toBeGreaterThan(0);
    for (const tech of related) {
      const hasProject = tech.relatedProjects?.some((p) => p === "front-valencia") ?? false;
      const hasService = tech.relatedServices?.some((s) => s === "produccion-sitios-web") ?? false;
      expect(hasProject || hasService).toBe(true);
    }
  });

  it("getRelatedTechnologies devuelve array vacío si no hay coincidencias", () => {
    const related = getRelatedTechnologies(["proyecto-inexistente"], ["servicio-inexistente"]);
    expect(related).toEqual([]);
  });

  it("getRelatedTechnologies maneja arrays undefined en relatedProjects/relatedServices", () => {
    const related = getRelatedTechnologies([], []);
    expect(related).toEqual([]);
  });

  it("getPublishedLegalDocuments incluye aviso-legal y privacidad publicados", () => {
    const published = getPublishedLegalDocuments();
    const slugs = published.map((doc) => doc.slug).sort();

    expect(slugs).toEqual(["aviso-legal", "privacidad"]);
    expect(published.every((doc) => doc.status === "published")).toBe(true);
  });

  it("getLegalDocumentBySlug carga aviso-legal y privacidad publicados sin placeholders", () => {
    const aviso = getLegalDocumentBySlug("aviso-legal");
    const privacidad = getLegalDocumentBySlug("privacidad");

    expect(aviso?.status).toBe("published");
    expect(privacidad?.status).toBe("published");
    expect(aviso?.sections.length).toBeGreaterThan(0);
    expect(privacidad?.sections.length).toBeGreaterThan(0);

    const paragraphs = [...(aviso?.sections ?? []), ...(privacidad?.sections ?? [])].flatMap(
      (section) => section.paragraphs
    );
    expect(paragraphs.some((paragraph) => paragraph.includes("[PENDIENTE:"))).toBe(false);
  });
});
