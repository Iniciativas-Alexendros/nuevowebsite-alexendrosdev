import { projectSchema } from "@/lib/validations/content";

export const frontValencia = projectSchema.parse({
  id: "front-valencia",
  slug: "front-valencia",
  title: "FRONT Valencia",
  shortDescription: "Contenido en borrador pendiente de redacción.",
  summary: "Contenido en borrador pendiente de redacción.",
  status: "draft",
  visibility: "publico",
  role: "Contenido en borrador pendiente de redacción.",
  technologies: ["astro"],
  publishedAt: "2026-08-14",
  metadata: {
    title: "FRONT Valencia",
    description: "Contenido en borrador pendiente de redacción.",
  },
});
