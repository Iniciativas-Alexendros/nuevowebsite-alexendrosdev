import { serviceSchema } from "@/lib/validations/content";

export const landingPages = serviceSchema.parse({
  id: "landing-pages",
  slug: "landing-pages",
  title: "Landing pages",
  shortDescription:
    "Webs navegables desde una única página central, con integración de pruebas sobre el código para garantizar que tus formularios y pasarelas de pago funcionan desde que su incorporación.",
  description:
    "Construyo landing pages orientadas a conversión: una propuesta de valor clara, un formulario que valida en cliente y servidor (honeypot + rate limit), y un CTA usable sin JavaScript. Uso Next.js con SSG para carga rápida; el único punto dinámico típico es el envío del formulario (p. ej. Proton SMTP). Las pruebas A/B y la analítica de conversión son alcance opcional (P1), no parte del MVP de este sitio.",
  audience:
    "Equipos de marketing, fundadores y product owners que necesitan validar una oferta, captar leads o lanzar una campaña sin depender de plantillas de Unbounce, Webflow o HubSpot.",
  problemsSolved: [
    "Landing pages genéricas que no comunican el valor diferencial del producto.",
    "Formularios que dejan pasar spam, no validan en servidor o exponen la email al público.",
    "Dependencia de herramientas SaaS caras para cambios de copy o tests de variante simples.",
    "Páginas lentas por JavaScript innecesario, fuentes externas y trackers bloqueantes.",
  ],
  scope: [
    "Diseño e implementación de la landing (Hero, propuesta de valor, pruebas sociales, FAQ, CTA).",
    "Formulario de contacto/lead con validación Zod compartida, honeypot, rate limit y respuesta neutra ante abuso.",
    "SEO técnico: metadata, OG, JSON-LD, sitemap, robots; objetivo medible Core Web Vitals ≥ 90 en móvil (OBJ-005), no garantía universal en cualquier red o dispositivo.",
    "Integración opcional con Cal.com (enlace, no script) y proveedor de email transaccional (Proton SMTP).",
    "Despliegue en Vercel: preview por cierre de fase (MITL) y producción desde main protegida (ADR-0025).",
  ],
  deliverables: [
    "Landing page funcional, accesible (WCAG 2.2 AA), responsive y probada (E2E formulario + navegación).",
    "Código fuente en repositorio Git con CI verde (typecheck, lint, test, build, axe-core, Lighthouse CI).",
    "Informe de envíos válidos del formulario (logs operativos sin PII); analítica de conversión y variantes A/B solo si se contratan como P1.",
    "Guía para editar copy e imágenes sin tocar código de presentación.",
  ],
  process: [
    "Brief: objetivo de conversión, audiencia, propuesta de valor, evidencias disponibles (logos, métricas, testimonios verificables).",
    "Wireframe y copy: estructura de secciones, jerarquía de mensajes, CTA principal y secundario.",
    "Implementación: scaffold → componentes → formulario → SEO → tests → deploy.",
    "Revisión en preview: QA visual (claro/oscuro, móvil, teclado) y test de envío real.",
    "Lanzamiento: DNS, checklist de producción, monitorización de envíos y errores (logs Vercel).",
    "Iteración: propuesta de cambios basada en evidencia operativa; variantes A/B solo si se acuerdan en alcance.",
  ],
  technologies: [
    "next-js",
    "typescript",
    "tailwind-css",
    "shadcn-ui",
    "zod",
    "vitest",
    "playwright",
  ],
  exclusions: [
    "No incluye herramienta de A/B testing gestionada (VWO, Optimizely) ni variante nativa en el MVP: las pruebas A/B son P1 con ADR propio.",
    "No incluye CRM, automatización de marketing, lead scoring ni analítica con cookies: son integraciones P1/P2 (ADR-0010).",
    "No incluye diseño de marca ni ilustraciones custom: se usan tokens del design system, iconos Lucide y capturas reales.",
    "No incluye multiidioma: el MVP es español único (ADR-0014).",
  ],
  cta: { label: "Contactar", href: "/contacto" },
  featured: true,
  status: "published",
  metadata: {
    title: "Landing pages de conversión — Next.js, SSG, formulario validado",
    description:
      "Landing pages rápidas, accesibles y orientadas a resultados. Formulario con validación servidor, honeypot y rate limit. Despliegue en Vercel.",
  },
  openGraphImage: "/opengraph-image",
});
