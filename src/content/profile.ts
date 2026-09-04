import { profileSchema } from "@/lib/validations/content";

export const profile = profileSchema.parse({
  id: "alexendros",
  name: "Alexendros",
  title:
    "Desarrollador web y consultor tecnológico. Next.js, Astro, Rust, TS. Accesibilidad y rendimiento por defecto.",
  summary:
    "Produzco sitios web completos, audito rendimiento y accesibilidad, y acompaño decisiones tecnológicas con diagnóstico y plan documentado. Stack moderno, código mantenible, calidad verificada en CI. Sin plantillas genéricas ni dependencias innecesarias.",
  bio: [
    "Llevo años desarrollando software para clientes y productos propios. Mi foco: web profesional (Next.js, Astro), tooling en Rust/Go, automatización con MCP/LLMs y auditoría de rendimiento y accesibilidad (WCAG 2.2 AA/AAA, Core Web Vitals).",
    "Creo en código que se entiende, se prueba y se mantiene. TypeScript estricto, Zod en fronteras, tests unitarias/E2E, CI con gates bloqueantes (typecheck, lint, test, build, axe-core, Lighthouse CI). Despliegue en Vercel por cierre de fase (preview MITL, luego producción), desde rama protegida.",
    "Proyectos públicos: FRONT Valencia (Astro + Payload CMS, i18n, WCAG AA), Gráficas Nasve (Next.js + Stripe, motor de precios 200+ reglas), vcf-cribador (CLI Rust para contactos), alexendros.me (sitio personal, SSG, privacidad por defecto).",
    "Servicios: producción de sitios web (diseño, desarrollo y publicación de webs y landing pages), auditorías técnicas (rendimiento, accesibilidad, SEO técnico, seguridad proporcional) y consultoría tecnológica (diagnóstico, arquitectura, plan de implementación). Conversión principal: formulario de contacto validado en cliente y servidor.",
    "No vendo humo: ni plazos imposibles, ni precios ocultos, ni garantías sin métricas. Si encajas, escríbeme. Si no, te lo digo en la primera llamada.",
  ],
  method: [
    "Definición de alcance: objetivos, contenido disponible y criterios de éxito antes de escribir código.",
    "Arquitectura primero: decisiones registradas (ADRs), modelo de contenido tipado y validado con Zod en las fronteras.",
    "Desarrollo con TypeScript estricto y componentes accesibles; nada se fusiona sin revisión en PR.",
    "Validación continua: tests unitarias y E2E, CI con gates bloqueantes (typecheck, lint, test, build, axe-core, Lighthouse CI con umbral ≥ 90 en móvil).",
    "Despliegue en Vercel por cierre de fase: preview de validación y producción solo desde rama protegida, con plan de rollback.",
    "Documentación y transferencia: guías de mantenimiento para que el proyecto no dependa de una sola persona.",
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
    title: "Sobre mí — Alexendros: producción web, auditorías, consultoría",
    description:
      "Desarrollador web (Next.js, Astro), auditoría (WCAG, CWV) y consultoría tecnológica. Proyectos: FRONT Valencia, Gráficas Nasve, vcf-cribador, alexendros.me. Código mantenible, CI, Vercel.",
  },
});
