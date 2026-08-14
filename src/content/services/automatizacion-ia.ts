import { serviceSchema } from "@/lib/validations/content";

export const automatizacionIa = serviceSchema.parse({
  id: "automatizacion-ia",
  slug: "automatizacion-ia",
  title: "Automatización y agentes IA",
  shortDescription: "Contenido en borrador pendiente de redacción.",
  description: "Contenido en borrador pendiente de redacción.",
  audience: "Contenido en borrador pendiente de redacción.",
  problemsSolved: ["Contenido en borrador pendiente de redacción."],
  scope: ["Contenido en borrador pendiente de redacción."],
  deliverables: ["Contenido en borrador pendiente de redacción."],
  cta: { label: "Contactar", href: "/contacto" },
  status: "draft",
  metadata: {
    title: "Automatización y agentes IA",
    description: "Contenido en borrador pendiente de redacción.",
  },
});
