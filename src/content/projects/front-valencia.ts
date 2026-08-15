import { projectSchema } from "@/lib/validations/content";

export const frontValencia = projectSchema.parse({
  id: "front-valencia",
  slug: "front-valencia",
  title: "FRONT Valencia",
  shortDescription:
    "Web de restaurante con Astro, i18n ES/EN, Payload CMS y WCAG AA. Menú dinámico, reservas online y gestión de contenidos por el cliente.",
  summary:
    "Diseñé y construí la web de FRONT Valencia, un restaurante de autor en Valencia. El proyecto partía de una web en WordPress lenta, inaccesible y difícil de mantener. La nueva web usa Astro (islas, SSG), Payload CMS para que el cliente gestione menús, eventos y horarios sin tocar código, e internacionalización nativa español/inglés. Cumple WCAG 2.2 AA en todas las rutas públicas.",
  status: "published",
  visibility: "publico",
  role: "Arquitectura, desarrollo frontend y backend, configuración CMS, despliegue, auditoría de accesibilidad y rendimiento.",
  context:
    "FRONT Valencia necesitaba renovar su presencia digital para reflejar la calidad de su cocina y facilitar la gestión diaria de menús, eventos y reservas. La web anterior en WordPress tenía problemas de rendimiento (LCP > 4 s), accesibilidad (contraste, teclado) y mantenimiento (plugins obsoletos, PHP 7.4).",
  challenge:
    "Migrar contenido y funcionalidad a un stack moderno sin tiempo de inactividad, manteniendo el SEO existente, y entregando al cliente una herramienta de edición visual (Payload) que no requiriera conocimientos técnicos.",
  solution:
    "Astro 4 con View Transitions para navegación instantánea, Payload CMS autohospedado con colecciones tipadas para menú, eventos, horarios y equipo. i18n nativa (ES/EN) con routing por prefijo. Formulario de reservas con validación Zod y envío a email del restaurante. Imágenes optimizadas con Astro Assets (AVIF/WebP, tamaños responsivos).",
  responsibilities: [
    "Arquitectura técnica: decisión de stack (Astro vs Next.js), modelo de contenido en Payload, estrategia de despliegue.",
    "Desarrollo completo: layout, componentes, islas interactivas (reservas, menú filtrado), internacionalización.",
    "Configuración de Payload CMS: colecciones, campos, acceso, previews, webhooks de revalidación.",
    "Accesibilidad: auditoría axe-core + manual, corrección de contraste, foco, landmarks, formularios. WCAG 2.2 AA verificado.",
    "Rendimiento: Lighthouse CI ≥ 90 en móvil (Performance, Accessibility, Best Practices, SEO). LCP < 2,5 s, CLS < 0,1, INP < 200 ms.",
    "Despliegue: Vercel (frontend) + VPS (Payload CMS) con CI/CD, previews por PR, variables de entorno segregadas.",
    "Documentación y formación: guía de edición para el cliente, runbooks de despliegue y backup.",
  ],
  technologies: [
    "astro",
    "payload-cms",
    "typescript",
    "tailwind-css",
    "react",
    "zod",
    "vitest",
    "playwright",
  ],
  highlights: [
    "Migración zero-downtime desde WordPress conservando URLs y SEO (sitemap 1:1, redirecciones en middleware Astro).",
    "Editor visual en Payload: el cliente cambia platos, precios, horarios y eventos sin tocar código ni abrir GitHub.",
    "Accesibilidad real: navegación por teclado completa, foco visible, contraste AA/AAA, lectores de pantalla probados con NVDA.",
    "Rendimiento medido: LCP 1,8 s (móvil), CLS 0,02, INP 140 ms. Sin JavaScript bloqueante en ruta crítica.",
  ],
  results: [
    "Mejora de 65 % en LCP (de 5,2 s a 1,8 s en móvil).",
    "Cero violaciones críticas/serias de accesibilidad en axe-core (CI).",
    "Aumento de reservas online del 40 % en el primer mes (dato facilitado por el cliente).",
    "Tiempo de edición de menú reducido de 30 min (WordPress + page builder) a 3 min (Payload).",
  ],
  images: [
    {
      src: "/images/projects/front-valencia-home.webp",
      alt: "Página de inicio de FRONT Valencia con hero, menú destacado y CTA de reserva",
    },
    {
      src: "/images/projects/front-valencia-menu.webp",
      alt: "Vista del menú dinámico con filtros por categoría y precios",
    },
    {
      src: "/images/projects/front-valencia-cms.webp",
      alt: "Interfaz de Payload CMS mostrando la colección de platos con campos de precio, alérgenos y traducción",
    },
  ],
  links: [
    { label: "Web en producción", href: "https://frontvalencia.com", external: true },
    {
      label: "Repositorio",
      href: "https://github.com/Iniciativas-Alexendros/website-frontvalencia",
      external: true,
    },
  ],
  publishedAt: "2024-03-15",
  updatedAt: "2024-06-20",
  featured: true,
  metadata: {
    title: "FRONT Valencia — Web de restaurante con Astro, Payload CMS, i18n y WCAG AA",
    description:
      "Web de restaurante de autor en Valencia. Astro, Payload CMS, internacionalización ES/EN, accesibilidad WCAG 2.2 AA, Core Web Vitals ≥ 90. Menú dinámico, reservas online, gestión de contenidos visual.",
  },
  confidentialityNotice: "",
});
