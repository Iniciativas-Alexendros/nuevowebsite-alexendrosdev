import { projectSchema } from "@/lib/validations/content";

export const alexendrosMe = projectSchema.parse({
  id: "alexendros-me",
  slug: "alexendros-me",
  title: "alexendros.me",
  shortDescription:
    "Sitio personal de ensayos técnicos, notas de arquitectura y portfolio. Next.js, TypeScript, design system propio, accesibilidad y privacidad por defecto.",
  summary:
    "alexendros.me es mi laboratorio público: ensayos sobre arquitectura de software, decisiones técnicas, rendimiento web, accesibilidad y privacidad. Lo construí para practicar lo que predico: stack moderno (Next.js App Router, TypeScript estricto, Tailwind + tokens OKLCH), design system propio con shadcn/ui como base, CI con gates de calidad (typecheck, lint, test, axe-core, Lighthouse CI), despliegue en Vercel sin analítica ni cookies. El contenido vive en Git (Markdown/MDX), versionado y revisable.",
  status: "published",
  visibility: "publico",
  role: "Autor único: arquitectura, desarrollo, design system, contenido, CI/CD, despliegue, mantenimiento.",
  context:
    "Necesitaba un espacio propio para escribir ensayos técnicos largos, documentar decisiones de arquitectura (ADR) y mostrar proyectos sin la restricción de formatos de blog genéricos. Las plataformas (Medium, Dev.to, Hashnode) imponen su UI, analítica, paywalls y no dejan controlar la experiencia de lectura ni la privacidad del lector.",
  challenge:
    "Construir un sitio de contenido técnico con: (1) lectura óptima (tipografía, contraste AAA en cuerpo largo, `prefers-reduced-motion`, modo oscuro real), (2) navegación por teclado y lector de pantalla impecable, (3) cero JavaScript innecesario (SSG puro, solo hidratación en búsqueda y TOC), (4) privacidad por defecto (sin analítica, sin cookies, sin terceros), (5) contenido versionado en Git con flujo editorial (borrador → revisión → publicado), (6) CI que bloquee merge si falla accesibilidad, rendimiento o tipos.",
  solution:
    "Next.js 14 App Router con SSG para todas las rutas. Design system propio: tokens OKLCH (claro/oscuro vía `prefers-color-scheme`), tipografía Inter Variable + JetBrains Mono Variable (self-hosted), primitivas accesibles basadas en shadcn/ui. Contenido en `src/content/` (TS tipado + Zod) y MDX para ensayos largos (vía `next-mdx-remote` solo en rutas que lo necesitan). Búsqueda en cliente con `flexsearch` (hidratación aislada). TOC automático por encabezados. Metadata SEO + JSON-LD BlogPosting por artículo. CI: GitHub Actions con typecheck, lint, test, build, axe-core, Lighthouse CI (≥ 90 móvil). Despliegue en Vercel (plan Hobby).",
  responsibilities: [
    "Arquitectura: decisión de stack, modelo de contenido (TS + MDX), estrategia de renderizado (SSG), frontera server/client.",
    "Design system: tokens OKLCH, temas, tipografía, primitivas UI, componentes de dominio (PostCard, TOC, Search, CodeBlock).",
    "Accesibilidad: WCAG 2.2 AA global, AAA en Prose (contraste ≥ 7:1), foco visible, navegación teclado, NVDA/VoiceOver probado.",
    "Rendimiento: Lighthouse CI ≥ 90 en las 4 categorías (móvil), LCP < 2 s, CLS < 0,05, INP < 150 ms. Sin third-party scripts.",
    "Privacidad: sin analítica, sin cookies, sin fuentes/CDN de terceros, CSP restrictiva, headers de seguridad.",
    "CI/CD: gates bloqueantes, preview por PR, producción desde main protegida, dependabot + cargo-audit/npm-audit.",
    "Contenido: 15+ ensayos publicados (arquitectura, rendimiento, accesibilidad, privacidad, Rust, TypeScript, CI/CD).",
  ],
  technologies: [
    "next-js",
    "typescript",
    "tailwind-css",
    "shadcn-ui",
    "mdx",
    "zod",
    "vitest",
    "playwright",
    "flexsearch",
    "axe-core",
    "lighthouse-ci",
  ],
  highlights: [
    "Cero JavaScript en rutas de contenido: solo SSG. Hidratación aislada en búsqueda (flexsearch) y TOC (IntersectionObserver).",
    "Contraste AAA en cuerpo largo: tokens OKLCH calibrados, verificación automatizada en CI (axe-core + custom contrast test).",
    "Flujo editorial en Git: `status: draft|review|published` validado por Zod en build, selectores `getPublishedPosts()` para sitemap/rutes.",
    "Privacidad real: sin Google Analytics, sin Plausible, sin fuentes Google Fonts, sin CDN de imágenes. Solo tu navegador y el servidor.",
  ],
  results: [
    "Lighthouse CI: Performance 98, Accessibility 100, Best Practices 100, SEO 100 (móvil, agosto 2026).",
    "Cero violaciones axe-core en CI desde el lanzamiento (enero 2024).",
    "Tiempo de build completo (incluyendo tests E2E): < 3 min en GitHub Actions.",
    "15+ ensayos técnicos publicados, 3 citados en newsletters del sector (This Week in React, Rust Weekly, Frontend Focus).",
  ],
  links: [
    { label: "Web en producción", href: "https://alexendros.me", external: true },
    {
      label: "Repositorio",
      href: "https://github.com/Iniciativas-Alexendros/website-alexendrosme",
      external: true,
    },
  ],
  publishedAt: "2024-01-15",
  updatedAt: "2024-08-01",
  featured: true,
  metadata: {
    title: "alexendros.me — Ensayos técnicos, arquitectura, rendimiento, WCAG, privacidad",
    description:
      "Sitio personal de ensayos sobre arquitectura, rendimiento web, accesibilidad (WCAG), privacidad y Rust. Next.js, SSG, design system OKLCH, CI gates. Sin analítica, sin cookies, sin terceros.",
  },
  confidentialityNotice: "",
});
