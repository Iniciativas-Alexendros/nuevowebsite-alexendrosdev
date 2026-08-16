import { profileSchema } from "@/lib/validations/content";

export const profile = profileSchema.parse({
  id: "alexendros",
  name: "Alexendros",
  title:
    "Desarrollador web, automatización y auditoría. Next.js, Astro, Rust, TS. Accesibilidad y rendimiento por defecto.",
  summary:
    "Diseño y construyo webs a medida, landing pages de conversión, automatizaciones con IA y auditorías técnicas. Stack moderno, código mantenible, calidad verificada en CI. Sin plantillas genéricas ni dependencias innecesarias.",
  bio: [
    "Llevo años desarrollando software para clientes y productos propios. Mi foco: web profesional (Next.js, Astro), tooling en Rust/Go, automatización con MCP/LLMs y auditoría de rendimiento y accesibilidad (WCAG 2.2 AA/AAA, Core Web Vitals).",
    "Creo en código que se entiende, se prueba y se mantiene. TypeScript estricto, Zod en fronteras, tests unitarias/E2E, CI con gates bloqueantes (typecheck, lint, test, build, axe-core, Lighthouse CI). Despliegue en Vercel por cierre de fase (preview MITL, luego producción), desde rama protegida.",
    "Proyectos públicos: FRONT Valencia (Astro + Payload CMS, i18n, WCAG AA), Gráficas Nasve (Next.js + Stripe, motor de precios 200+ reglas), vcf-cribador (CLI Rust para contactos), alexendros.me (sitio personal, SSG, privacidad por defecto).",
    "Servicios: desarrollo web a medida, landing pages orientadas a conversión, automatización y agentes IA (MCP, CLI locales), auditoría web (rendimiento, accesibilidad, SEO técnico, seguridad). Conversión principal: formulario de contacto validado en cliente y servidor.",
    "No vendo humo: ni plazos imposibles, ni precios ocultos, ni garantías sin métricas. Si encajas, escríbeme. Si no, te lo digo en la primera llamada.",
  ],
  location: "Valencia, España",
  languages: ["Español (nativo)", "Inglés (técnico fluido)"],
  links: [
    { label: "GitHub", href: "https://github.com/Iniciativas-Alexendros" },
    { label: "LinkedIn", href: "https://linkedin.com/in/alexendros" },
    { label: "Email", href: "mailto:hola@alexendros.dev" },
    { label: "Cal.com", href: "https://cal.com/alexendros" },
  ],
  status: "published",
  metadata: {
    title: "Sobre mí — Alexendros: desarrollo web, automatización, auditoría",
    description:
      "Desarrollador web (Next.js, Astro), automatización (Rust, MCP), auditoría (WCAG, CWV). Proyectos: FRONT Valencia, Gráficas Nasve, vcf-cribador, alexendros.me. Código mantenible, CI, Vercel.",
  },
});
