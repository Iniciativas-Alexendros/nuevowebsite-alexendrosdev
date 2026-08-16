import { serviceSchema } from "@/lib/validations/content";

export const landingPages = serviceSchema.parse({
  id: "landing-pages",
  slug: "landing-pages",
  title: "Landing pages",
  shortDescription:
    "Webs navegables desde una única página central, con integración de pruebas sobre el código para garantizar que tus formularios y pasarelas de pago funcionan desde que su incorporación.",
  description:
    "Construyo landing pages que venden: una propuesta de valor clara, un formulario que valida en cliente y servidor (honeypot + rate limit), y un CTA que funciona sin JavaScript. Uso Next.js con SSG para que la página cargue en milisegundos, y el único punto dinámico es el envío del formulario (Proton SMTP). Incluyo variante de prueba A/B controlada por cookie de primera parte (solo tras consentimiento) y métricas de conversión reales, no vanidad.",
  audience:
    "Equipos de marketing, fundadores y product owners que necesitan validar una oferta, captar leads o lanzar una campaña sin depender de plantillas de Unbounce, Webflow o HubSpot.",
  problemsSolved: [
    "Landing pages genéricas que no comunican el valor diferencial del producto.",
    "Formularios que dejan pasar spam, no validan en servidor o exponen la email al público.",
    "Dependencia de herramientas SaaS caras para cambios de copy o pruebas A/B simples.",
    "Páginas lentas por JavaScript innecesario, fuentes externas y trackers bloqueantes.",
  ],
  scope: [
    "Diseño e implementación de la landing (Hero, propuesta de valor, pruebas sociales, FAQ, CTA).",
    "Formulario de contacto/lead con validación Zod compartida, honeypot, rate limit y respuesta neutra ante abuso.",
    "Prueba A/B nativa: dos variantes de Hero/CTA servidas estáticamente, sin proveedor externo, activable tras consentimiento.",
    "SEO técnico completo: metadata, OG, JSON-LD, sitemap, robots, Core Web Vitals ≥ 90 en móvil.",
    "Integración opcional con Cal.com (enlace, no script) y proveedor de email transaccional (Proton SMTP).",
    "Despliegue en Vercel con preview por PR y producción desde main protegida.",
  ],
  deliverables: [
    "Landing page funcional, accesible (WCAG 2.2 AA), responsive y probada (E2E formulario + navegación).",
    "Código fuente en repositorio Git con CI verde (typecheck, lint, test, build, axe-core, Lighthouse CI).",
    "Informe de conversión: envíos válidos, tasa de rebote, tiempo en página, variante ganadora (si A/B activo).",
    "Guía para editar copy, imágenes y variantes sin tocar código de presentación.",
  ],
  process: [
    "Brief: objetivo de conversión, audiencia, propuesta de valor, evidencias disponibles (logos, métricas, testimonios verificables).",
    "Wireframe y copy: estructura de secciones, jerarquía de mensajes, CTA principal y secundario.",
    "Implementación: scaffold → componentes → formulario → variante B (si aplica) → SEO → tests → deploy.",
    "Revisión en preview: QA visual (claro/oscuro, móvil, teclado), test de envío real, verificación de analytics (si activa).",
    "Lanzamiento: DNS, checklist de producción, monitorización de envíos y errores (logs Vercel).",
    "Iteración: análisis de datos a 7/30 días, propuesta de cambios basados en evidencia, nueva variante si procede.",
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
    "No incluye herramienta de A/B testing gestionada (VWO, Optimizely): la variante nativa cubre tests simples sin coste recurrente.",
    "No incluye CRM, automatización de marketing ni lead scoring: son integraciones P1/P2 con ADR propio.",
    "No incluye diseño de marca ni ilustraciones custom: se usan tokens del design system, iconos Lucide y capturas reales.",
    "No incluye multiidioma: el MVP es español único (ADR-0014).",
  ],
  cta: { label: "Contactar", href: "/contacto" },
  featured: true,
  status: "published",
  metadata: {
    title: "Landing pages de conversión — Next.js, SSG, A/B nativo, formulario validado",
    description:
      "Landing pages rápidas, accesibles y orientadas a resultados. Formulario con validación servidor, honeypot, rate limit. Prueba A/B sin proveedor externo. Despliegue en Vercel.",
  },
  openGraphImage: "/opengraph-image",
});
