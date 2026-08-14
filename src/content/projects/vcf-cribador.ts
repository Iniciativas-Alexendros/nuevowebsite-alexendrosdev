import { projectSchema } from "@/lib/validations/content";

export const vcfCribador = projectSchema.parse({
  id: "vcf-cribador",
  slug: "vcf-cribador",
  title: "vcf-cribador",
  shortDescription: "Contenido en borrador pendiente de redacción.",
  summary: "Contenido en borrador pendiente de redacción.",
  status: "draft",
  visibility: "publico",
  role: "Contenido en borrador pendiente de redacción.",
  technologies: ["rust"],
  publishedAt: "2026-08-14",
  metadata: {
    title: "vcf-cribador",
    description: "Contenido en borrador pendiente de redacción.",
  },
});
