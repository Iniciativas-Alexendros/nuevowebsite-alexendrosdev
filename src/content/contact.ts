import { contactChannelsSchema } from "@/lib/validations/content";

export const contactChannels = contactChannelsSchema.parse([
  {
    type: "form",
    label: "Formulario de contacto",
    href: "/contacto",
    visible: true,
    priority: 1,
  },
]);
