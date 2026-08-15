import { siteConfigSchema } from "@/lib/validations/content";

export const siteConfig = siteConfigSchema.parse({
  siteName: "Alexendros",
  siteUrl: "https://alexendros.dev",
  defaultTitle: "Alexendros — Desarrollo web, automatización y auditoría técnica",
  defaultDescription:
    "Desarrollo web (Next.js, Astro), landing pages, automatización IA (MCP, Rust) y auditoría técnica (rendimiento, WCAG, SEO). Código mantenible, CI verificado, despliegue Vercel.",
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
  socialLinks: [
    { label: "GitHub", href: "https://github.com/Iniciativas-Alexendros" },
    { label: "LinkedIn", href: "https://linkedin.com/in/alexendros" },
    { label: "Email", href: "mailto:hola@alexendros.dev" },
  ],
  person: {
    name: "Alexendros",
    role: "Desarrollador web, automatización y auditoría técnica",
    url: "https://alexendros.dev",
  },
});
