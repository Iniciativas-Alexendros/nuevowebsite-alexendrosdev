import { describe, expect, it } from "vitest";

import { getPublishedServices } from "@/lib/content";
import { getPublishedProjects } from "@/lib/content";
import { getPublishedTechnologies } from "@/lib/content";
import { getPublishedProfile } from "@/lib/content";

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

  it("getServiceBySlug devuelve undefined para slugs inexistentes o borradores", async () => {
    const { getServiceBySlug } = await import("@/lib/content");
    const service = getServiceBySlug("servicio-inexistente");
    expect(service).toBeUndefined();
  });

  it("getProjectBySlug devuelve undefined para slugs inexistentes o borradores", async () => {
    const { getProjectBySlug } = await import("@/lib/content");
    const project = getProjectBySlug("proyecto-inexistente");
    expect(project).toBeUndefined();
  });
});
