import { serviceSchema } from "@/lib/validations/content";

export const auditoriaWeb = serviceSchema.parse({
  id: "auditoria-web",
  slug: "auditoria-web",
  title: "Auditoría web",
  shortDescription: "Contenido en borrador pendiente de redacción.",
  description: "Contenido en borrador pendiente de redacción.",
  audience: "Contenido en borrador pendiente de redacción.",
  problemsSolved: ["Contenido en borrador pendiente de redacción."],
  scope: ["Contenido en borrador pendiente de redacción."],
  deliverables: ["Contenido en borrador pendiente de redacción."],
  cta: { label: "Contactar", href: "/contacto" },
  status: "draft",
  metadata: {
    title: "Auditoría web",
    description: "Contenido en borrador pendiente de redacción.",
  },
});
