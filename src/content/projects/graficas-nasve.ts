import { projectSchema } from "@/lib/validations/content";

export const graficasNasve = projectSchema.parse({
  id: "graficas-nasve",
  slug: "graficas-nasve",
  title: "Gráficas Nasve",
  shortDescription: "Contenido en borrador pendiente de redacción.",
  summary: "Contenido en borrador pendiente de redacción.",
  status: "draft",
  visibility: "publico",
  role: "Contenido en borrador pendiente de redacción.",
  technologies: ["next-js"],
  publishedAt: "2026-08-14",
  metadata: {
    title: "Gráficas Nasve",
    description: "Contenido en borrador pendiente de redacción.",
  },
});
