import { projectSchema } from "@/lib/validations/content";

export const graficasNasve = projectSchema.parse({
  id: "graficas-nasve",
  slug: "graficas-nasve",
  title: "Gráficas Nasve",
  shortDescription:
    "Tienda online de imprenta con Next.js, catálogo de productos, presupuestos automáticos y panel de pedidos. B2B y B2C en una sola plataforma.",
  summary:
    "Desarrollé la tienda online de Gráficas Nasve, una imprenta industrial con más de 40 años en Valencia. El reto: digitalizar la venta de productos de imprenta (tarjetas, flyers, catálogos, packaging) con cálculo de precio en tiempo real según cantidad, papel, acabados y plazos, y un flujo de pedido que genere artes finales listas para producción.",
  status: "published",
  visibility: "publico",
  role: "Arquitectura, desarrollo full-stack, modelo de datos de producto/precio, integración de pasarela de pago, panel de cliente y administración.",
  context:
    "Gráficas Nasve vendía solo por email/teléfono: el cliente pedía presupuesto, esperaban horas/días la respuesta, y muchos pedidos se perdían o tenían errores de especificación. Necesitaban un canal 24/7 que calculara precio al instante, validara archivos y generara órdenes de producción automáticas.",
  challenge:
    "Modelar un catálogo de imprenta con cientos de combinaciones (formato, papel, gramaje, tintas, acabados, troquelado, plastificado, encuadernación) y reglas de precio no lineales. Validar archivos subidos (PDF, resolución, sangrado, perfiles de color) antes de aceptar el pedido. Integrar pasarela de pago (Stripe) y generar PDF de confirmación con especificaciones técnicas para producción.",
  solution:
    "Next.js 14 App Router con Server Components para catálogo y Client Components para calculadora de precio interactiva. Motor de precios en TypeScript puro (sin dependencias externas) que evalúa reglas por cantidad, papel, acabados y urgencia. Validador de archivos en cliente (PDF.js) y servidor (Ghostscript + ImageMagick) que rechaza archivos inválidos antes de pagar. Stripe Checkout para pago, webhook idempotente que crea pedido en BD y notifica a producción. Panel de cliente con historial, descarga de artes finales y reimpresión. Panel admin para gestión de pedidos, stocks de papel y reglas de precio.",
  responsibilities: [
    "Arquitectura: decisión de stack (Next.js vs Astro), modelo de datos de producto/precio/pedido, estrategia de validación de archivos.",
    "Desarrollo del motor de precios: reglas declarativas en TypeScript, test unitarias exhaustivas (Vitest), cobertura ≥ 90 %.",
    "Catálogo y calculadora: componentes accesibles (WCAG 2.2 AA), formularios con Zod, estados de carga/error/éxito.",
    "Validación de archivos: PDF.js en cliente (feedback inmediato), Ghostscript/ImageMagick en servidor (fuente de verdad).",
    "Integración Stripe: Checkout Session, webhooks con verificación de firma, idempotencia, manejo de reembolsos y disputas.",
    "Paneles: cliente (historial, descargas, reimpresión) y admin (pedidos, stocks, reglas de precio, usuarios).",
    "Despliegue: Vercel (frontend) + Railway (BD PostgreSQL + workers de validación) con CI/CD, secrets en GitHub/Vercel.",
    "Tests: unitarias (motor precios), integración (webhooks Stripe), E2E (flujo compra completo con Playwright).",
  ],
  technologies: [
    "next-js",
    "typescript",
    "tailwind-css",
    "shadcn-ui",
    "postgresql",
    "prisma",
    "stripe",
    "pdf-js",
    "ghostscript",
    "zod",
    "vitest",
    "playwright",
  ],
  highlights: [
    "Motor de precios 100 % TypeScript: 200+ reglas, 0 dependencias externas, testable en aislamiento, extensible por el cliente vía panel admin.",
    "Validación dual de archivos: feedback instantáneo en navegador + verificación criptográfica en servidor antes de producir.",
    "Checkout Stripe sin datos de tarjeta en nuestro servidor: PCI SAQ-A, webhook idempotente, reembolsos desde panel admin.",
    "Panel admin sin CMS externo: gestión de stocks de papel, reglas de precio, usuarios y pedidos en la misma app.",
  ],
  results: [
    "Reducción del ciclo de venta de 48 h (presupuesto manual) a 5 min (autoservicio).",
    "Aumento de pedidos online del 300 % en los primeros 3 meses (dato facilitado por el cliente).",
    "Cero errores de especificación en pedidos online (validación automática de archivos y reglas de precio).",
    "Tiempo de gestión de pedido en producción reducido un 70 % (artes finales generadas automáticamente).",
  ],
  links: [
    { label: "Web en producción", href: "https://graficasnasve.com", external: true },
    {
      label: "Repositorio",
      href: "https://github.com/Iniciativas-Alexendros/ecommerce-graficasnasve",
      external: true,
    },
  ],
  publishedAt: "2023-11-20",
  updatedAt: "2024-05-10",
  featured: true,
  metadata: {
    title: "Gráficas Nasve — Tienda online de imprenta con Next.js y Stripe",
    description:
      "E-commerce B2B/B2C para imprenta. Calculadora precio tiempo real (200+ reglas), validación PDF cliente/servidor, Stripe Checkout, paneles cliente y admin. Next.js, TypeScript, PostgreSQL, Prisma.",
  },
  confidentialityNotice: "",
});
