import { serviceSchema } from "@/lib/validations/content";

export const desarrolloWeb = serviceSchema.parse({
  id: "desarrollo-web",
  slug: "desarrollo-web",
  title: "Desarrollo web a medida",
  shortDescription:
    "Sitios y aplicaciones web con Next.js y Astro, optimizados para SEO, accesibilidad y rendimiento desde el primer commit.",
  description:
    "Diseño y construyo webs a medida usando Next.js (App Router, Server Components) y Astro (islas, SSG). Cada proyecto parte de una base limpia: TypeScript estricto, Tailwind con tokens OKLCH, shadcn/ui como primitivas accesibles y CI con gates de calidad bloqueantes. No uso plantillas genéricas ni themes de mercado: el código se escribe para tu caso, no para el de todos.",
  audience:
    "Empresas y equipos que necesitan una web profesional, mantenible y rápida sin depender de un CMS pesado ni de plugins que ralentizan el sitio.",
  problemsSolved: [
    "Webs lentas, inaccesibles o difíciles de mantener heredadas de WordPress o page builders.",
    "Falta de visibilidad orgánica por SEO técnico descuidado.",
    "Costes de mantenimiento altos por código acoplado, sin tests ni documentación.",
    "Experiencia de usuario inconsistente entre dispositivos y navegadores.",
  ],
  scope: [
    "Arquitectura y scaffold del proyecto (Next.js o Astro, TypeScript, Tailwind, CI/CD).",
    "Implementación de páginas, componentes y patrones de UI accesibles (WCAG 2.2 AA).",
    "SEO técnico: metadata, sitemap, robots, JSON-LD, Core Web Vitals ≥ 90 en móvil.",
    "Integración de formularios, analítica respetuosa y proveedores de email (p. ej. Proton SMTP).",
    "Despliegue en Vercel/Netlify/Cloudflare con previews por PR y producción desde rama protegida.",
    "Documentación técnica y guía de mantenimiento para que tu equipo siga evolucionando el sitio.",
  ],
  deliverables: [
    "Repositorio Git con historial limpio, convenciones de commit y plantillas de PR/Issue.",
    "Aplicación funcional, probada (unitarias, integración, E2E crítica) y desplegada.",
    "Informe de auditoría de accesibilidad (axe-core) y rendimiento (Lighthouse CI).",
    "Guía de contenido: cómo añadir páginas, servicios o proyectos sin tocar código de presentación.",
  ],
  process: [
    "Kickoff: definimos alcance, métricas de éxito, contenido disponible y calendario.",
    "Diseño de arquitectura: decisiones de stack, estructura de carpetas, modelo de contenido y validación.",
    "Implementación por fases: scaffold → design system → shell/SEO → contenido tipado → landing → portfolio → legal → hardening.",
    "Revisiones en PR: el cliente revisa diffs y hace QA visual en previews de Vercel antes de fusionar.",
    "Lanzamiento: checklist de producción, rollback plan y monitorización inicial (logs Vercel).",
    "Entrega: repo público/privado, credenciales de despliegue, documentación y 30 días de soporte post-lanzamiento.",
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
    "No incluye CMS gestionado (Payload, Sanity, Contentful): el contenido vive en Git validado con Zod. Si necesitas editor no técnico, evaluamos CMS en P1 (ADR-0003).",
    "No incluye autenticación, área privada, pagos, newsletter ni analítica con cookies: son bloques P1/P2 con disparadores propios (SPECS §9).",
    "No incluye migración de datos masiva desde WordPress u otros CMS: requiere proyecto aparte de ingeniería de datos.",
    "No incluye diseño gráfico de marca (logo, identity system): se entrega wordmark tipográfico y design system funcional; la identidad visual completa es alcance aparte.",
  ],
  cta: { label: "Contactar", href: "/contacto" },
  featured: true,
  status: "published",
  metadata: {
    title: "Desarrollo web a medida — Next.js, Astro, TypeScript, Tailwind",
    description:
      "Webs profesionales, accesibles y rápidas con stack moderno. SEO técnico, CI/CD, diseño system propio. Sin plantillas genéricas ni dependencias innecesarias.",
  },
  openGraphImage: "/opengraph-image",
});
