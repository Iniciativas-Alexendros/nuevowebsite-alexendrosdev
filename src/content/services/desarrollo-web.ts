import { serviceSchema } from "@/lib/validations/content";

export const desarrolloWeb = serviceSchema.parse({
  id: "desarrollo-web",
  slug: "desarrollo-web",
  title: "Desarrollo web a medida",
  shortDescription: "Contenido en borrador pendiente de redacción.",
  description: "Contenido en borrador pendiente de redacción.",
  audience: "Contenido en borrador pendiente de redacción.",
  problemsSolved: ["Contenido en borrador pendiente de redacción."],
  scope: ["Contenido en borrador pendiente de redacción."],
  deliverables: ["Contenido en borrador pendiente de redacción."],
  cta: { label: "Contactar", href: "/contacto" },
  status: "draft",
  metadata: {
    title: "Desarrollo web a medida",
    description: "Contenido en borrador pendiente de redacción.",
  },
});
