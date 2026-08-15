import type { Service } from "@/lib/validations/content";
import type { Project } from "@/lib/validations/content";
import type { Technology } from "@/lib/validations/content";
import type { Profile } from "@/lib/validations/content";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { technologies } from "@/content/technologies";
import { profile } from "@/content/profile";

export function getPublishedServices(): Service[] {
  return services.filter((s) => s.status === "published");
}

export function getPublishedProjects(): Project[] {
  return projects.filter((p) => p.status === "published" && p.visibility === "publico");
}

export function getPublishedTechnologies(): Technology[] {
  return technologies.filter((t) => t.status === "published");
}

export function getPublishedProfile(): Profile | null {
  return profile.status === "published" ? profile : null;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return getPublishedServices().find((s) => s.slug === slug);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getPublishedProjects().find((p) => p.slug === slug);
}

export function getTechnologiesByCategory(category: Technology["category"]): Technology[] {
  return getPublishedTechnologies().filter((t) => t.category === category);
}

export function getFeaturedServices(): Service[] {
  return getPublishedServices().filter((s) => s.featured);
}

export function getFeaturedProjects(): Project[] {
  return getPublishedProjects().filter((p) => p.featured);
}

export function getFeaturedTechnologies(): Technology[] {
  return getPublishedTechnologies().filter((t) => t.featured);
}

export function getTechnologyById(id: string): Technology | undefined {
  return getPublishedTechnologies().find((t) => t.id === id);
}

export function getRelatedTechnologies(
  projectSlugs: string[],
  serviceSlugs: string[]
): Technology[] {
  const published = getPublishedTechnologies();
  return published.filter(
    (t) =>
      (t.relatedProjects?.some((p) => projectSlugs.includes(p)) ?? false) ||
      (t.relatedServices?.some((s) => serviceSlugs.includes(s)) ?? false)
  );
}
