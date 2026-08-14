import { profileSchema } from "@/lib/validations/content";

export const profile = profileSchema.parse({
  id: "alexendros",
  name: "Alexendros",
  title: "Contenido en borrador pendiente de redacción.",
  summary: "Contenido en borrador pendiente de redacción.",
  bio: ["Contenido en borrador pendiente de redacción."],
  status: "draft",
  metadata: {
    title: "Sobre mí",
    description: "Contenido en borrador pendiente de redacción.",
  },
});
