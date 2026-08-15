import { serviceSchema } from "@/lib/validations/content";

export const automatizacionIa = serviceSchema.parse({
  id: "automatizacion-ia",
  slug: "automatizacion-ia",
  title: "Automatización y agentes IA",
  shortDescription:
    "Automatización de flujos repetitivos como extracción y análisis de datos. Toma de decisiones y asistencia guiada por modelos de IA de código abierto y auditable.",
  description:
    "Diseño e implemento automatizaciones a medida usando Model Context Protocol (MCP) para conectar LLMs con tus herramientas (GitHub, Notion, filesystem, bases de datos, APIs), CLI en Rust/Go/Node para tareas de alto rendimiento, y flujos de trabajo orquestados sin vendor lock-in. El código es tuyo, se ejecuta en tu infraestructura y se audita igual que cualquier otra parte de tu stack. No vendo 'IA mágica': entrego sistemas deterministas, testeados y observables que resuelven problemas concretos.",
  audience:
    "Equipos de ingeniería, operaciones y producto que pierden tiempo en tareas manuales repetitivas (revisión de PRs, generación de reportes, migración de datos, triaje de issues, enriquecimiento de leads) y quieren control total sobre datos, costes y comportamiento.",
  problemsSolved: [
    "Procesos manuales frágiles que escalan mal y dependen de conocimiento tribal.",
    "Dependencia de SaaS de automatización (Zapier, Make, n8n cloud) con costes por ejecución y datos en terceros.",
    "Falta de observabilidad y depuración en flujos de 'low-code' opacos.",
    "Integración de LLMs sin control de prompts, versiones, costes ni privacidad de datos.",
  ],
  scope: [
    "Diseño de arquitectura de agentes: definición de tools, memoria, bucles de decisión y guardrails.",
    "Implementación de servidores MCP (TypeScript/Rust/Go) que exponen tus APIs/datos a LLMs de forma segura.",
    "CLIs de automatización: vcf-cribador (limpieza de contactos), agentes de migración, validadores, generadores de código.",
    "Orquestación de flujos: encadenamiento de herramientas, reintentos, idempotencia, logging estructurado y métricas.",
    "Evaluación de modelos: comparación de proveedores (OpenAI, Anthropic, locales vía Ollama/Llama.cpp) por coste, latencia y calidad en tu tarea.",
    "Observabilidad: logs estructurados, tracing de decisiones del agente, alertas en fallos críticos.",
  ],
  deliverables: [
    "Código fuente de agentes/CLIs/MCP servers en repositorio Git con CI (test, lint, build, security scan).",
    "Documentación técnica: arquitectura, prompts, herramientas expuestas, límites y procedimientos de fallback.",
    "Guía de operación: cómo desplegar, rotar claves, monitorizar costes y extender capacidades.",
    "Benchmark de modelos para tu caso de uso con criterios de decisión documentados.",
  ],
  process: [
    "Descubrimiento: mapeo de tareas candidatas, volumen, frecuencia, datos involucrados y criterios de éxito.",
    "Prueba de concepto (1-2 semanas): agente/CLI mínimo que resuelve un subconjunto real, medido contra baseline manual.",
    "Evaluación: decisión de continuar, pivotar o detener basada en ROI, coste por ejecución y mantenibilidad.",
    "Implementación completa: hardening, tests, observabilidad, documentación, despliegue en tu infra (VM, Kubernetes, serverless).",
    "Transferencia: code walkthrough, runbooks, escalado y 30 días de soporte post-entrega.",
  ],
  technologies: [
    "mcp",
    "typescript",
    "rust",
    "go",
    "node-js",
    "ollama",
    "llama-cpp",
    "zod",
    "vitest",
  ],
  exclusions: [
    "No incluye plataforma de orquestación gestionada (LangGraph Cloud, AutoGen Studio): el código se ejecuta en tu infraestructura.",
    "No incluye entrenamiento/fine-tuning de modelos: trabajo con modelos base vía API o inferencia local.",
    "No incluye datos de entrenamiento propietarios ni modelos cerrados sin auditoría posible.",
    "No incluye casos de uso de alto riesgo (médico, legal, financiero regulado) sin revisión de cumplimiento previa.",
  ],
  cta: { label: "Contactar", href: "/contacto" },
  featured: true,
  status: "published",
  metadata: {
    title: "Automatización y agentes IA — MCP, CLI, LLMs locales/remotos",
    description:
      "Agentes y flujos a medida con MCP, CLIs Rust/Go/Node, LLMs locales/remotos. Código propio, auditable, en tu infra. Observabilidad y control de costes.",
  },
  openGraphImage: "/opengraph-image",
});
