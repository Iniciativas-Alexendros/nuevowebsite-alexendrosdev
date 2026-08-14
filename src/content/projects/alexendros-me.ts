import { projectSchema } from "@/lib/validations/content";

export const alexendrosMe = projectSchema.parse({
  id: "alexendros-me",
  slug: "alexendros-me",
  title: "alexendros.me",
  shortDescription: "Contenido en borrador pendiente de redacción.",
  summary: "Contenido en borrador pendiente de redacción.",
  status: "draft",
  visibility: "publico",
  role: "Contenido en borrador pendiente de redacción.",
  technologies: ["next-js"],
  publishedAt: "2026-08-14",
  metadata: {
    title: "alexendros.me",
    description: "Contenido en borrador pendiente de redacción.",
  },
});
