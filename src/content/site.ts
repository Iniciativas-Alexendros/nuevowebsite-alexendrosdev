import { siteConfigSchema } from "@/lib/validations/content";

export const siteConfig = siteConfigSchema.parse({
  siteName: "Alexendros",
  siteUrl: "https://alexendros.dev",
  defaultTitle: "Alexendros — Producción de sitios web, auditorías y consultoría tecnológica",
  defaultDescription:
    "Producción de sitios web (Next.js, Astro), auditorías técnicas (rendimiento, WCAG, SEO) y consultoría tecnológica. Código mantenible, CI verificado, despliegue Vercel.",
  locale: "es",
  ogLocale: "es_ES",
  defaultOpenGraphImage: "/opengraph-image",
  navigation: [
    { label: "Servicios", href: "/servicios" },
    { label: "Sobre mí", href: "/sobre-mi" },
    { label: "Contacto", href: "/contacto" },
  ],
  footerNavigation: [
    { label: "Aviso legal", href: "/aviso-legal" },
    { label: "Privacidad", href: "/privacidad" },
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/Iniciativas-Alexendros" },
    { label: "LinkedIn", href: "https://linkedin.com/in/alexendros" },
    { label: "Email", href: "mailto:hola@alexendros.dev" },
  ],
  person: {
    name: "Alexendros",
    role: "Desarrollador web, auditorías y consultoría tecnológica",
    url: "https://alexendros.dev",
  },
});
