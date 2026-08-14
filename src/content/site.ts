import { siteConfigSchema } from "@/lib/validations/content";

export const siteConfig = siteConfigSchema.parse({
  siteName: "Alexendros",
  siteUrl: "https://alexendros.dev",
  defaultTitle: "Alexendros",
  defaultDescription: "Sitio web de Alexendros.",
  locale: "es",
  ogLocale: "es_ES",
  defaultOpenGraphImage: "/opengraph-image",
  navigation: [
    { label: "Servicios", href: "/servicios" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Stack", href: "/stack" },
    { label: "Sobre mí", href: "/sobre-mi" },
    { label: "Contacto", href: "/contacto" },
  ],
  footerNavigation: [
    { label: "Aviso legal", href: "/aviso-legal" },
    { label: "Privacidad", href: "/privacidad" },
  ],
});
