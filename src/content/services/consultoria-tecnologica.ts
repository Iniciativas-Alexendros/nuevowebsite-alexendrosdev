import { serviceSchema } from "@/lib/validations/content";

export const consultoriaTecnologica = serviceSchema.parse({
  id: "consultoria-tecnologica",
  slug: "consultoria-tecnologica",
  title: "Consultoría tecnológica",
  shortDescription:
    "Diagnóstico, arquitectura y planificación técnica para decidir bien antes de construir: automatización, IA aplicada, stack, integraciones y modernización.",
  description:
    "Acompaño a equipos que tienen que tomar decisiones técnicas con impacto en coste, mantenibilidad y velocidad: qué automatizar, qué stack elegir, cómo integrar IA con control de datos y costes, o cómo modernizar una web heredada. La consultoría es trabajo de diagnóstico y diseño: analizo tu contexto, evalúo alternativas con criterios explícitos, defino prioridades y entrego una arquitectura y un plan de implementación documentados que tu equipo (o yo, como proyecto aparte) puede ejecutar.",
  audience:
    "Equipos de ingeniería, operaciones y producto —y pymes sin equipo técnico— que necesitan criterio experto para decidir sobre automatización, IA, stack o modernización antes de comprometer presupuesto en desarrollo.",
  problemsSolved: [
    "Decisiones de stack o proveedor tomadas por moda o por presión comercial, sin evaluación de alternativas.",
    "Procesos manuales repetitivos candidatos a automatización, sin mapa de volumen, coste ni retorno esperado.",
    "Iniciativas de IA sin control de prompts, versiones, costes ni privacidad de datos.",
    "Deuda técnica percibida pero no cuantificada: nadie sabe qué modernizar primero ni por qué.",
  ],
  scope: [
    "Consultoría y diagnóstico: estado actual, restricciones, volumen de procesos y criterios de éxito.",
    "Diseño de arquitectura: componentes, integraciones, modelo de datos y límites de responsabilidad.",
    "Evaluación de alternativas: comparativa de stacks, proveedores o modelos (incluidos LLMs remotos o locales) por coste, latencia, calidad y mantenibilidad.",
    "Definición de prioridades: qué abordar primero, qué diferir y qué descartar, con criterio documentado.",
    "Planificación de implementación: fases, dependencias, riesgos, esfuerzo estimado y plan de rollback.",
    "Documentación: decisiones (ADRs), diagramas, runbooks y criterios de aceptación ejecutables.",
  ],
  deliverables: [
    "Documento de diagnóstico con hallazgos, restricciones y oportunidades priorizadas.",
    "Arquitectura objetivo con decisiones registradas (ADRs) y alternativas descartadas con su motivo.",
    "Plan de implementación por fases con esfuerzo estimado, riesgos y criterios de salida.",
    "Sesión de lectura y transferencia: walkthrough de conclusiones y resolución de dudas del equipo.",
  ],
  process: [
    "Descubrimiento: entrevistas, revisión de sistemas y métricas disponibles, y definición de criterios de éxito.",
    "Diagnóstico: mapa del estado actual, cuellos de botella y deuda relevante.",
    "Evaluación: alternativas comparadas con criterios explícitos y evidencia (benchmarks, pruebas de concepto acotadas si procede).",
    "Diseño y plan: arquitectura objetivo, prioridades, fases y estimación.",
    "Entrega y transferencia: documentación, sesión de lectura y acompañamiento inicial de la decisión.",
  ],
  technologies: ["typescript", "node-js", "rust", "go", "mcp", "ollama", "llama-cpp", "zod"],
  exclusions: [
    "No incluye el desarrollo de automatizaciones, agentes IA, servidores MCP ni integraciones: la consultoría define y planifica; la implementación es un proyecto de desarrollo aparte.",
    "No incluye despliegue ni operación de infraestructura: el plan indica cómo hacerlo; la ejecución se contrata aparte o la ejecuta tu equipo.",
    "No incluye entrenamiento ni fine-tuning de modelos: la evaluación trabaja con modelos base vía API o inferencia local.",
    "No incluye casos de uso de alto riesgo (médico, legal, financiero regulado) sin revisión de cumplimiento previa.",
  ],
  cta: { label: "Contactar", href: "/contacto" },
  featured: true,
  status: "published",
  metadata: {
    title: "Consultoría tecnológica — Diagnóstico, arquitectura y plan de implementación",
    description:
      "Decide antes de construir: diagnóstico técnico, evaluación de alternativas, arquitectura con ADRs y plan de implementación priorizado. Automatización, IA aplicada y modernización.",
  },
  openGraphImage: "/opengraph-image",
});
