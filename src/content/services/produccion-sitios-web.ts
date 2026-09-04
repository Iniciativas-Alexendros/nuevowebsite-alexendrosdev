import { serviceSchema } from "@/lib/validations/content";

export const produccionSitiosWeb = serviceSchema.parse({
  id: "produccion-sitios-web",
  slug: "produccion-sitios-web",
  title: "Producción de sitios web",
  shortDescription:
    "Diseño, desarrollo y publicación de webs, landing pages y productos digitales de alcance proporcional: accesibles, rápidas y mantenibles desde el primer despliegue.",
  description:
    "Produzco sitios web completos, desde la web corporativa hasta la landing de campaña o el producto digital acotado, con una única oferta que cubre el ciclo entero: análisis, estructura, diseño de experiencia, desarrollo, pruebas y despliegue. Trabajo con Next.js (App Router, Server Components) y Astro sobre TypeScript estricto, Tailwind con tokens OKLCH y primitivas accesibles, con CI que bloquea lo que no pasa los gates de calidad. No uso plantillas genéricas ni themes de mercado: el código se escribe para tu caso y queda documentado para que tu equipo pueda mantenerlo.",
  audience:
    "Empresas, fundadores y equipos de marketing o producto que necesitan una web profesional, una landing de conversión o un producto digital acotado, sin depender de un CMS pesado ni de SaaS de páginas que encarecen cada cambio.",
  problemsSolved: [
    "Webs lentas, inaccesibles o difíciles de mantener heredadas de WordPress o page builders.",
    "Landing pages genéricas que no comunican el valor diferencial ni convierten.",
    "Formularios que dejan pasar spam, no validan en servidor o exponen datos.",
    "Falta de visibilidad orgánica por SEO técnico descuidado.",
    "Costes de mantenimiento altos por código acoplado, sin tests ni documentación.",
  ],
  scope: [
    "Análisis inicial: objetivos, audiencia, contenido disponible y criterios de éxito.",
    "Definición de estructura y alcance: arquitectura de información, páginas y modelo de contenido tipado.",
    "Diseño de experiencia de usuario: jerarquía de mensajes, wireframes y design system funcional con tokens propios.",
    "Desarrollo web con Next.js o Astro, TypeScript estricto y componentes accesibles (WCAG 2.2 AA).",
    "Adaptación responsive y verificación en móvil, escritorio, teclado y lector de pantalla.",
    "Accesibilidad, rendimiento (objetivo medible Lighthouse ≥ 90 en móvil, OBJ-005) y SEO técnico: metadata, sitemap, robots y JSON-LD.",
    "Formularios con validación compartida en cliente y servidor, honeypot y limitación de abuso.",
    "Pruebas: unitarias, E2E de flujos críticos y axe-core sin violaciones bloqueantes en CI.",
    "Despliegue en Vercel/Netlify/Cloudflare con preview de validación y producción desde rama protegida.",
    "Documentación técnica y guía de mantenimiento para evolucionar el sitio sin depender de mí.",
  ],
  deliverables: [
    "Aplicación funcional, accesible, responsive y desplegada, con CI verde (typecheck, lint, test, build, axe-core, Lighthouse CI).",
    "Repositorio Git con historial limpio, convenciones de commit y plantillas de PR/Issue.",
    "Informe de accesibilidad (axe-core) y rendimiento (Lighthouse CI) del estado de entrega.",
    "Guía de contenido: cómo añadir páginas o editar textos sin tocar código de presentación.",
  ],
  process: [
    "Kickoff: alcance, métricas de éxito, contenido disponible y calendario.",
    "Arquitectura: decisiones de stack, estructura, modelo de contenido y validación.",
    "Implementación por fases con revisión en PR: el cliente revisa diffs y hace QA visual en preview antes de fusionar.",
    "Lanzamiento: checklist de producción, plan de rollback y monitorización inicial.",
    "Entrega: repositorio, credenciales de despliegue, documentación y 30 días de soporte post-lanzamiento.",
  ],
  technologies: [
    "next-js",
    "astro",
    "typescript",
    "tailwind-css",
    "shadcn-ui",
    "zod",
    "vitest",
    "playwright",
  ],
  exclusions: [
    "No incluye CMS gestionado (Payload, Sanity, Contentful): el contenido vive en Git validado con Zod. Si necesitas edición no técnica, se evalúa como alcance aparte.",
    "No incluye autenticación, área privada, pagos, newsletter, analítica con cookies ni pruebas A/B gestionadas: son bloques con disparadores y decisión propios.",
    "No incluye migración de datos masiva desde WordPress u otros CMS: requiere un proyecto aparte de ingeniería de datos.",
    "No incluye diseño gráfico de marca (logo, identidad completa): se entrega wordmark tipográfico y design system funcional.",
  ],
  cta: { label: "Contactar", href: "/contacto" },
  featured: true,
  status: "published",
  metadata: {
    title: "Producción de sitios web — Next.js, Astro, accesibilidad y SEO técnico",
    description:
      "Diseño, desarrollo y publicación de webs y landing pages accesibles, rápidas y mantenibles. TypeScript estricto, pruebas E2E, CI con gates y despliegue documentado.",
  },
  openGraphImage: "/opengraph-image",
});
