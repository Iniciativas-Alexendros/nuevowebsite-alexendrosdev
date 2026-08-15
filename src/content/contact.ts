import { contactChannelsSchema } from "@/lib/validations/content";

export const contactChannels = contactChannelsSchema.parse([
  {
    type: "form",
    label: "Formulario de contacto",
    href: "/contacto",
    visible: true,
    priority: 1,
  },
  {
    type: "calendar",
    label: "Agendar una llamada",
    href: "https://cal.com/alexendros",
    visible: true,
    priority: 2,
    external: true,
    availability: "Reserva un hueco en el calendario.",
  },
  {
    type: "email",
    label: "Email",
    href: "mailto:hola@alexendros.dev",
    visible: true,
    priority: 3,
    external: true,
  },
]);
