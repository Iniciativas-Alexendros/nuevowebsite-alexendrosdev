import { serviceSchema } from "@/lib/validations/content";

export const auditoriaWeb = serviceSchema.parse({
  id: "auditoria-web",
  slug: "auditoria-web",
  title: "Auditoría web",
  shortDescription:
    "Auditoría técnica completa: rendimiento (Core Web Vitals), accesibilidad (WCAG 2.2 AA/AAA), SEO técnico, seguridad y arquitectura. Entregas con evidencias, priorización y plan de acción.",
  description:
    "Analizo tu sitio o aplicación con herramientas automatizadas (Lighthouse CI, axe-core, pa11y, custom scripts) y revisión manual experta. El informe no es una lista de advertencias genéricas: cada hallazgo incluye impacto en usuario/negocio, evidencia reproducible (captura, traza de red, DOM), severidad y esfuerzo estimado de corrección. Priorizo lo que mueve la aguja: LCP, INP, CLS, contraste, navegación por teclado, metadata, headers de seguridad y deuda técnica que bloquea escalar.",
  audience:
    "CTOs, tech leads, product owners y agencias que necesitan una foto real del estado técnico de su web antes de un rediseño, migración, lanzamiento o negociación de SLA con proveedor.",
  problemsSolved: [
    "Desconocimiento real del estado de rendimiento, accesibilidad y SEO de la web en producción.",
    "Backlog técnico inflado por issues de baja prioridad; falta de criterio para priorizar qué corregir primero.",
    "Dependencia de auditorías de agencias que entregan PDFs genéricos sin evidencias reproducibles ni plan de acción.",
    "Riesgo legal/regulatorio por incumplimiento de accesibilidad (WCAG) o privacidad (cookies, formularios) sin visibilidad.",
  ],
  scope: [
    "Rendimiento: Lighthouse CI (móvil/escritorio), Core Web Vitals (LCP, INP, CLS), waterfall de red, budget JS/CSS/imágenes, análisis de third-parties.",
    "Accesibilidad: axe-core automatizado + revisión manual (teclado, lector de pantalla, contraste AA/AAA, landmarks, formularios, focus management).",
    "SEO técnico: metadata, canonical, sitemap, robots, JSON-LD, indexabilidad, estructura de encabezados, enlaces rotos, redirecciones.",
    "Seguridad: headers (CSP, HSTS, X-Frame-Options, Referrer-Policy), cookies, formularios, dependencias vulnerables (npm audit, OSV), secretos en cliente.",
    "Arquitectura y deuda: stack, estructura de carpetas, TypeScript strict, CI/CD, testing strategy, acoplamientos, migrabilidad a CMS/SSG.",
    "Informe ejecutivo + técnico: hallazgos priorizados (crítico/alto/medio/bajo), evidencias, esfuerzo estimado, quick wins y roadmap de corrección.",
  ],
  deliverables: [
    "Informe PDF/HTML navegable con hallazgos categorizados, capturas, trazas y enlaces a líneas de código (si repo accesible).",
    "Hoja de cálculo priorizada (Notion/Excel) con severidad, impacto, esfuerzo, responsable sugerido y criterio de aceptación de la corrección.",
    "Scripts de reproducción: comandos Lighthouse/axe/pa11y configurados para que tu equipo ejecute la auditoría en CI tras cada cambio.",
    "Sesión de lectura (1 h): walkthrough del informe, dudas, negociación de prioridades y definición de siguiente paso.",
  ],
  process: [
    "Alcance: URLs a auditar, entorno (producción/staging), acceso a repo (opcional), herramientas permitidas y restricciones legales.",
    "Ejecución automatizada: Lighthouse CI (10 runs), axe-core (todas las rutas), pa11y, npm audit, custom scripts (metadata, headers, CWV).",
    "Revisión manual: navegación por teclado, NVDA/VoiceOver, contraste en Prose, formularios, focus order, mobile viewport 360×640.",
    "Análisis y priorización: cruce de hallazgos automáticos + manuales, deduplicación, estimación de esfuerzo, quick wins (< 2 h).",
    "Entrega: informe + hoja de priorización + scripts + sesión de lectura.",
    "Seguimiento opcional: verificación de correcciones implementadas (re-auditoría parcial) a 30/60/90 días.",
  ],
  technologies: [
    "lighthouse-ci",
    "axe-core",
    "pa11y",
    "npm-audit",
    "typescript",
    "vitest",
    "playwright",
  ],
  exclusions: [
    "No incluye implementación de correcciones: la auditoría diagnostica; la corrección es un proyecto de desarrollo aparte (puede contratarlo como desarrollo web a medida).",
    "No incluye test de penetración (pentest) ni revisión de código fuente por vulnerabilidades de lógica de negocio: alcance de seguridad distinto.",
    "No incluye auditoría de contenido editorial (copy, tono, estrategia de contenido): foco técnico.",
    "No incluye certificación oficial WCAG: el informe es evidencia técnica; la conformidad legal requiere auditoría acreditada.",
  ],
  cta: { label: "Contactar", href: "/contacto" },
  featured: true,
  status: "published",
  metadata: {
    title: "Auditoría web — Rendimiento, Accesibilidad WCAG, SEO técnico, Seguridad",
    description:
      "Auditoría completa con evidencias y plan priorizado. Lighthouse CI, axe-core, pa11y, headers, dependencias. Informe + hoja priorización + scripts CI. Sesión incluida.",
  },
  openGraphImage: "/opengraph-image",
});
