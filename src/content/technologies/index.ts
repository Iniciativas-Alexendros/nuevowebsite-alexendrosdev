import { technologySchema } from "@/lib/validations/content";
import type { Technology } from "@/lib/validations/content";

export const technologies: Technology[] = [
  technologySchema.parse({
    id: "next-js",
    name: "Next.js",
    category: "framework",
    description:
      "Framework React con App Router, Server Components, SSG/ISR y streaming. Uso Next.js 15+ para aplicaciones web completas y sitios de contenido.",
    icon: "code",
    website: "https://nextjs.org",
    relevance:
      "Framework principal para proyectos web (FRONT Valencia, Gráficas Nasve, alexendros.me, este sitio). App Router, Server Components por defecto, TypeScript estricto.",
    featured: true,
    status: "published",
    relatedProjects: ["front-valencia", "graficas-nasve", "alexendros-me"],
    relatedServices: ["desarrollo-web", "landing-pages"],
  }),
  technologySchema.parse({
    id: "astro",
    name: "Astro",
    category: "framework",
    description:
      "Generador de sitios estáticos con islas de interactividad. Ideal para sitios de contenido con rendimiento extremo y cero JavaScript por defecto.",
    icon: "rocket",
    website: "https://astro.build",
    relevance:
      "Usado en FRONT Valencia para web de restaurante con Payload CMS. View Transitions, i18n nativo, Astro Assets para imágenes.",
    featured: true,
    status: "published",
    relatedProjects: ["front-valencia"],
    relatedServices: ["desarrollo-web"],
  }),
  technologySchema.parse({
    id: "typescript",
    name: "TypeScript",
    category: "lenguaje",
    description:
      "JavaScript con tipos estáticos. Modo estricto (`strict: true`, sin `any` implícito) en todos los proyectos. Tipos como documentación viva y refactoring seguro.",
    icon: "file-code",
    website: "https://typescriptlang.org",
    relevance:
      "Base de todo el stack. Validación en build, tipos compartidos cliente/servidor (Zod), contratos de API, modelos de contenido.",
    featured: true,
    status: "published",
    relatedProjects: ["front-valencia", "graficas-nasve", "vcf-cribador", "alexendros-me"],
    relatedServices: ["desarrollo-web", "landing-pages", "automatizacion-ia", "auditoria-web"],
  }),
  technologySchema.parse({
    id: "rust",
    name: "Rust",
    category: "lenguaje",
    description:
      "Lenguaje de sistemas con seguridad de memoria sin garbage collection. Para CLIs de alto rendimiento, tooling y servicios críticos.",
    icon: "cog",
    website: "https://rust-lang.org",
    relevance:
      "vcf-cribador (CLI de contactos), agentes MCP, tooling de automatización. Binarios únicos, multiplataforma, sin runtime.",
    featured: true,
    status: "published",
    relatedProjects: ["vcf-cribador"],
    relatedServices: ["automatizacion-ia"],
  }),
  technologySchema.parse({
    id: "go",
    name: "Go",
    category: "lenguaje",
    description:
      "Lenguaje compilado, concurrencia nativa, binarios estáticos. Para microservicios, workers y tooling de infraestructura.",
    icon: "terminal",
    website: "https://go.dev",
    relevance:
      "Workers de validación de archivos (Gráficas Nasve), agentes MCP, APIs internas. Simplicidad operativa y despliegue trivial.",
    featured: false,
    status: "published",
    relatedProjects: ["graficas-nasve"],
    relatedServices: ["automatizacion-ia"],
  }),
  technologySchema.parse({
    id: "tailwind-css",
    name: "Tailwind CSS",
    category: "estilo",
    description:
      "Framework CSS utility-first con tokens semánticos personalizados. Configuración vía `@theme` y variables CSS OKLCH para temas claro/oscuro.",
    icon: "palette",
    website: "https://tailwindcss.com",
    relevance:
      "Design system de todos los proyectos web. Tokens primitivos y semánticos OKLCH, temas por `prefers-color-scheme`, sin estilos arbitrarios.",
    featured: true,
    status: "published",
    relatedProjects: ["front-valencia", "graficas-nasve", "alexendros-me"],
    relatedServices: ["desarrollo-web", "landing-pages", "auditoria-web"],
  }),
  technologySchema.parse({
    id: "shadcn-ui",
    name: "shadcn/ui",
    category: "estilo",
    description:
      "Colección de componentes accesibles (Radix UI) como código propio. Personalización exclusiva vía tokens CSS, sin forks profundos.",
    icon: "square",
    website: "https://ui.shadcn.com",
    relevance:
      "Primitivas UI base (Button, Input, Dialog, etc.) en todos los proyectos web. Accesibilidad WCAG 2.2 AA de fábrica, variantes por tokens.",
    featured: true,
    status: "published",
    relatedProjects: ["front-valencia", "graficas-nasve", "alexendros-me"],
    relatedServices: ["desarrollo-web", "landing-pages"],
  }),
  technologySchema.parse({
    id: "payload-cms",
    name: "Payload CMS",
    category: "cms",
    description:
      "Headless CMS TypeScript-first, autohospedado, con UI de edición visual y API REST/GraphQL. Colecciones tipadas, acceso granular, webhooks.",
    icon: "database",
    website: "https://payloadcms.com",
    relevance:
      "FRONT Valencia: gestión de menús, eventos, horarios por el cliente sin tocar código. Autohospedado en VPS, PostgreSQL.",
    featured: true,
    status: "published",
    relatedProjects: ["front-valencia"],
    relatedServices: ["desarrollo-web"],
  }),
  technologySchema.parse({
    id: "postgresql",
    name: "PostgreSQL",
    category: "herramienta",
    description:
      "Base de datos relacional avanzada. JSONB, índices parciales, RLS, extensiones. Para datos transaccionales y estructurados.",
    icon: "server",
    website: "https://postgresql.org",
    relevance:
      "Gráficas Nasve (pedidos, productos, usuarios), Payload CMS (FRONT Valencia). Migraciones con Prisma/SQL nativo.",
    featured: false,
    status: "published",
    relatedProjects: ["graficas-nasve", "front-valencia"],
    relatedServices: ["desarrollo-web"],
  }),
  technologySchema.parse({
    id: "prisma",
    name: "Prisma",
    category: "herramienta",
    description:
      "ORM TypeScript-first para PostgreSQL, MySQL, SQLite. Schema declarativo, migraciones tipadas, cliente seguro por defecto.",
    icon: "layers",
    website: "https://prisma.io",
    relevance:
      "Gráficas Nasve: modelo de datos de catálogo, precios, pedidos, pagos. Type-safe queries, migraciones en CI.",
    featured: false,
    status: "published",
    relatedProjects: ["graficas-nasve"],
    relatedServices: ["desarrollo-web"],
  }),
  technologySchema.parse({
    id: "stripe",
    name: "Stripe",
    category: "herramienta",
    description:
      "Plataforma de pagos. Checkout Sessions, PaymentIntents, webhooks, portal de cliente. PCI SAQ-A sin tocar datos de tarjeta.",
    icon: "credit-card",
    website: "https://stripe.com",
    relevance:
      "Gráficas Nasve: checkout B2B/B2C, webhooks idempotentes, reembolsos desde panel admin. Sin almacenar datos sensibles.",
    featured: false,
    status: "published",
    relatedProjects: ["graficas-nasve"],
    relatedServices: ["desarrollo-web"],
  }),
  technologySchema.parse({
    id: "zod",
    name: "Zod",
    category: "herramienta",
    description:
      "Validación de esquemas TypeScript-first. Inferencia de tipos, parsing seguro, composable. Esquema único compartido cliente/servidor.",
    icon: "shield-check",
    website: "https://zod.dev",
    relevance:
      "Validación de formularios, contenido (build-time), variables de entorno, webhooks, APIs. Fuente de verdad única por entidad.",
    featured: true,
    status: "published",
    relatedProjects: ["front-valencia", "graficas-nasve", "vcf-cribador", "alexendros-me"],
    relatedServices: ["desarrollo-web", "landing-pages", "automatizacion-ia", "auditoria-web"],
  }),
  technologySchema.parse({
    id: "vitest",
    name: "Vitest",
    category: "herramienta",
    description:
      "Test runner nativo VIT, compatible con API de Jest. Rápido, ESM nativo, coverage V8, watch mode, UI integrada.",
    icon: "check-circle",
    website: "https://vitest.dev",
    relevance:
      "Tests unitarias y de integración en todos los proyectos. Cobertura ≥ 70 % en `src/lib/` y validaciones. CI gate bloqueante.",
    featured: true,
    status: "published",
    relatedProjects: ["front-valencia", "graficas-nasve", "vcf-cribador", "alexendros-me"],
    relatedServices: ["desarrollo-web", "landing-pages", "automatizacion-ia", "auditoria-web"],
  }),
  technologySchema.parse({
    id: "playwright",
    name: "Playwright",
    category: "herramienta",
    description:
      "E2E testing cross-browser (Chromium, Firefox, WebKit). Auto-waiting, tracing, codegen, CI nativo. Accesibilidad con @axe-core/playwright.",
    icon: "browser",
    website: "https://playwright.dev",
    relevance:
      "Tests E2E críticos: navegación, formularios, flujos de compra, accesibilidad (axe-core). CI gate bloqueante en PRs.",
    featured: true,
    status: "published",
    relatedProjects: ["front-valencia", "graficas-nasve", "alexendros-me"],
    relatedServices: ["desarrollo-web", "landing-pages", "auditoria-web"],
  }),
  technologySchema.parse({
    id: "mcp",
    name: "Model Context Protocol (MCP)",
    category: "herramienta",
    description:
      "Protocolo abierto para conectar LLMs con herramientas, datos y APIs. Servidores MCP en TypeScript/Rust/Go para exponer capacidades de forma segura.",
    icon: "plug",
    website: "https://modelcontextprotocol.io",
    relevance:
      "Automatización y agentes IA: servidores MCP que conectan LLMs con GitHub, Notion, filesystem, bases de datos, APIs internas.",
    featured: true,
    status: "published",
    relatedProjects: [],
    relatedServices: ["automatizacion-ia"],
  }),
  technologySchema.parse({
    id: "ollama",
    name: "Ollama",
    category: "herramienta",
    description:
      "Ejecución local de LLMs (Llama, Mistral, CodeLlama, Phi). API compatible OpenAI, sin datos saliendo de tu infraestructura.",
    icon: "cpu",
    website: "https://ollama.com",
    relevance:
      "Agentes IA con modelos locales: privacidad total, coste cero por token, latencia controlada. Evaluación comparativa vs APIs remotas.",
    featured: false,
    status: "published",
    relatedProjects: [],
    relatedServices: ["automatizacion-ia"],
  }),
  technologySchema.parse({
    id: "lighthouse-ci",
    name: "Lighthouse CI",
    category: "herramienta",
    description:
      "Auditoría automatizada de rendimiento, accesibilidad, SEO y best practices en CI. Budgets de Core Web Vitals, regressions detection.",
    icon: "gauge",
    website: "https://github.com/GoogleChrome/lighthouse-ci",
    relevance:
      "Gate de CI en todos los proyectos web: Lighthouse ≥ 90 en móvil (Performance, Accessibility, Best Practices, SEO). Budgets LCP/CLS/INP.",
    featured: true,
    status: "published",
    relatedProjects: ["front-valencia", "graficas-nasve", "alexendros-me"],
    relatedServices: ["desarrollo-web", "landing-pages", "auditoria-web"],
  }),
  technologySchema.parse({
    id: "axe-core",
    name: "axe-core",
    category: "herramienta",
    description:
      "Motor de pruebas de accesibilidad automatizado (Deque). Integración en Vitest, Playwright, CI. WCAG 2.2 AA/AAA, best practices.",
    icon: "eye",
    website: "https://github.com/dequelabs/axe-core",
    relevance:
      "Gate de CI bloqueante: cero violaciones críticas/serias en rutas públicas. Tests unitarias de componentes + E2E con @axe-core/playwright.",
    featured: true,
    status: "published",
    relatedProjects: ["front-valencia", "graficas-nasve", "alexendros-me"],
    relatedServices: ["desarrollo-web", "landing-pages", "auditoria-web"],
  }),
  technologySchema.parse({
    id: "vercel",
    name: "Vercel",
    category: "herramienta",
    description:
      "Plataforma de despliegue para Next.js. Previews por PR, producción desde rama protegida, Edge/Node runtime, logs y analytics integrados.",
    icon: "globe",
    website: "https://vercel.com",
    relevance:
      "Despliegue de todos los proyectos Next.js (este sitio, Gráficas Nasve, alexendros.me). CI/CD nativo, variables por entorno, rollback instantáneo.",
    featured: true,
    status: "published",
    relatedProjects: ["graficas-nasve", "alexendros-me"],
    relatedServices: ["desarrollo-web", "landing-pages"],
  }),
  technologySchema.parse({
    id: "github-actions",
    name: "GitHub Actions",
    category: "herramienta",
    description:
      "CI/CD nativo de GitHub. Workflows matrix, caches, secrets, environments, reusable workflows. Gates bloqueantes de merge.",
    icon: "git-branch",
    website: "https://github.com/features/actions",
    relevance:
      "Pipeline completo: typecheck, lint, format, test, build, E2E, axe-core, Lighthouse CI, auditoría de dependencias, escaneo de secretos.",
    featured: true,
    status: "published",
    relatedProjects: ["front-valencia", "graficas-nasve", "vcf-cribador", "alexendros-me"],
    relatedServices: ["desarrollo-web", "landing-pages", "automatizacion-ia", "auditoria-web"],
  }),
];

export const technologyCategories = [
  { id: "lenguaje", label: "Lenguajes" },
  { id: "framework", label: "Frameworks" },
  { id: "cms", label: "CMS" },
  { id: "estilo", label: "Estilo y UI" },
  { id: "herramienta", label: "Herramientas e infraestructura" },
] as const;
