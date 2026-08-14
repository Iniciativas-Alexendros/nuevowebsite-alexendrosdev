import { serviceSchema } from "@/lib/validations/content";

export const landingPages = serviceSchema.parse({
  id: "landing-pages",
  slug: "landing-pages",
  title: "Landing pages",
  shortDescription: "Contenido en borrador pendiente de redacción.",
  description: "Contenido en borrador pendiente de redacción.",
  audience: "Contenido en borrador pendiente de redacción.",
  problemsSolved: ["Contenido en borrador pendiente de redacción."],
  scope: ["Contenido en borrador pendiente de redacción."],
  deliverables: ["Contenido en borrador pendiente de redacción."],
  cta: { label: "Contactar", href: "/contacto" },
  status: "draft",
  metadata: {
    title: "Landing pages",
    description: "Contenido en borrador pendiente de redacción.",
  },
});
