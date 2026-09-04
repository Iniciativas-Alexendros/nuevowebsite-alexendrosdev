import { serviceSchema } from "@/lib/validations/content";

export const auditorias = serviceSchema.parse({
  id: "auditorias",
  slug: "auditorias",
  title: "Auditorías",
  shortDescription:
    "Diagnóstico técnico de tu sitio o aplicación: rendimiento, accesibilidad, SEO técnico, calidad y seguridad proporcional, con hallazgos priorizados y plan de remediación.",
  description:
    "Analizo tu sitio con herramientas automatizadas (Lighthouse CI, axe-core, pa11y, scripts propios) y revisión manual experta. Una auditoría identifica, clasifica y prioriza oportunidades de mejora: cada hallazgo incluye impacto en usuario y negocio, evidencia reproducible (captura, traza de red, DOM), severidad y esfuerzo estimado de corrección. El resultado es un diagnóstico accionable, no una lista de observaciones descontextualizadas: sales con un plan de remediación priorizado que tu equipo puede ejecutar o contratar aparte.",
  audience:
    "CTOs, tech leads, product owners y agencias que necesitan una foto real del estado técnico de su web antes de un rediseño, una migración, un lanzamiento o la negociación de un SLA con su proveedor.",
  problemsSolved: [
    "Desconocimiento real del estado de rendimiento, accesibilidad y SEO de la web en producción.",
    "Backlog técnico inflado por issues de baja prioridad; falta de criterio para decidir qué corregir primero.",
    "Auditorías de agencia que entregan PDFs genéricos sin evidencias reproducibles ni plan de acción.",
    "Riesgo legal o regulatorio por accesibilidad (WCAG) o privacidad sin visibilidad técnica.",
  ],
  scope: [
    "Rendimiento: Lighthouse CI (móvil/escritorio), Core Web Vitals (LCP, INP, CLS), waterfall de red, presupuesto de JS/CSS/imágenes y terceros.",
    "Accesibilidad: axe-core automatizado y revisión manual (teclado, lector de pantalla, contraste, landmarks, formularios, gestión del foco).",
    "SEO técnico: metadata, canonical, sitemap, robots, JSON-LD, indexabilidad, encabezados, enlaces rotos y redirecciones.",
    "Calidad y mantenibilidad: stack, estructura, TypeScript, CI/CD, estrategia de testing y acoplamientos.",
    "Seguridad proporcional al alcance: headers (CSP, HSTS, X-Frame-Options, Referrer-Policy), cookies, formularios y dependencias vulnerables (npm audit, OSV).",
    "Priorización de hallazgos por severidad, impacto y esfuerzo, con quick wins identificados.",
    "Plan de remediación: orden de corrección, responsable sugerido y criterio de aceptación por hallazgo.",
    "Informe técnico comprensible, con evidencias y lectura guiada para perfiles no especialistas.",
  ],
  deliverables: [
    "Informe navegable con hallazgos categorizados, capturas, trazas y enlaces a líneas de código (si hay acceso al repo).",
    "Hoja de priorización con severidad, impacto, esfuerzo, responsable sugerido y criterio de aceptación.",
    "Scripts de reproducción (Lighthouse, axe, pa11y) configurados para que tu equipo reejecute la auditoría en CI.",
    "Sesión de lectura (1 h): walkthrough del informe, dudas y definición del siguiente paso.",
  ],
  process: [
    "Alcance: URLs a auditar, entorno, acceso opcional al repo, herramientas permitidas y restricciones.",
    "Ejecución automatizada: Lighthouse CI, axe-core en todas las rutas, pa11y, npm audit y scripts propios.",
    "Revisión manual: teclado, lector de pantalla, contraste, formularios y viewport móvil.",
    "Análisis y priorización: deduplicación de hallazgos, estimación de esfuerzo y quick wins.",
    "Entrega: informe, hoja de priorización, scripts y sesión de lectura.",
    "Seguimiento opcional: verificación de correcciones (re-auditoría parcial) a 30/60/90 días.",
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
    "No incluye la implementación de correcciones: la auditoría diagnostica y prioriza; la corrección es un proyecto de desarrollo aparte.",
    "No garantiza la corrección automática de los problemas detectados: entrega evidencias, prioridad y plan de remediación.",
    "No incluye test de penetración (pentest) ni auditoría de lógica de negocio: la seguridad se acota al alcance acordado.",
    "No incluye certificación oficial WCAG: el informe es evidencia técnica; la conformidad legal requiere auditoría acreditada.",
  ],
  cta: { label: "Contactar", href: "/contacto" },
  featured: true,
  status: "published",
  metadata: {
    title: "Auditorías web — Rendimiento, accesibilidad WCAG, SEO técnico y seguridad",
    description:
      "Diagnóstico técnico con evidencias, hallazgos priorizados y plan de remediación. Lighthouse CI, axe-core, pa11y, headers y dependencias. Informe y sesión de lectura incluidos.",
  },
  openGraphImage: "/opengraph-image",
});
