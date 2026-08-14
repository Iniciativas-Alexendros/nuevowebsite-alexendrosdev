# ARCHITECTURE.md

Abrir cuando: Estructura, frontera server/client, endpoint, secretos o despliegue.
Aprobado: 13 de agosto de 2026
Audiencia: Agente
Autoridad: Derivada
Clase: Obligatorio
Días para revisión: 90
En repo: Sí
Estado: Aprobado
Orden: 6
Propósito: Define cómo se organiza y opera el software.
Reforma: ADR + decisor
Responsable: Alexendros
Revisión: 13 de noviembre de 2026
Rol: Arquitectura
Ruta: ./ARCHITECTURE.md

<aside>
📌

**Propósito**

ARCHITECTURE.md definirá la estructura del software, los límites de responsabilidad, el modelo de renderizado, las convenciones de módulos, las integraciones, la estrategia de datos, la gestión de secretos, la calidad y el despliegue.

Debe permitir crear el proyecto desde cero sin arrastrar la complejidad del repositorio anterior.

La arquitectura se basará en Next.js con App Router y TypeScript en modo estricto. Next.js usa `app/` para App Router, permite `src/` como raíz opcional del código y reserva `public/` para recursos estáticos; esta propuesta empleará `src/` para separar con claridad la aplicación del resto de configuración y documentación. [context7:10]

</aside>

# 1. Objetivo arquitectónico

- Construir una web pública rápida, mantenible, accesible, segura y optimizada para contenido profesional.
- Priorizar HTML renderizado en servidor, contenido estático y un mínimo de JavaScript en cliente.
- Usar Server Components por defecto.
- Declarar `"use client"` únicamente cuando el componente requiera interactividad en el navegador, estado local, APIs web, listeners o dependencias incompatibles con el servidor.
- Mantener una frontera explícita entre interfaz, dominio, contenido, infraestructura y proveedores externos.
- Evitar introducir persistencia, autenticación o APIs complejas hasta que [SPECS.md](./SPECS.md) lo requiera.

---

# 2. Decisiones tecnológicas iniciales

- Framework: Next.js App Router. **(ADR-0001, aceptada)**
- Lenguaje: TypeScript en modo estricto. **(ADR-0002, aceptada)**
- Runtime: Node.js 22 LTS, fijado con `.nvmrc` y campo `engines`. **(batería 4.3, resuelta 13-08-2026)**
- Gestor de paquetes: pnpm 10, fijado con `packageManager`. **(ADR-0002, aceptada)**
- Estilos: Tailwind CSS y tokens semánticos CSS en OKLCH. **(ADR-0004, aceptada)**
- Componentes base: shadcn/ui incorporado como código propio, personalizado exclusivamente vía tokens, sin forks profundos. **(ADR-0004, aceptada)**
- Tipografías: Inter Variable + JetBrains Mono Variable, self-hosted vía `next/font/local`. **(ADR-0016, aceptada)**
- Validación: Zod con un único esquema compartido cliente/servidor en límites de confianza; el servidor es la fuente de verdad. (REQ-FORM-CONTACT-001)
- Formularios: Route Handler `POST /api/contact` con adaptador de envío por Proton SMTP submission. **(ADR-0007 y ADR-0011, aceptadas)**
- Pruebas unitarias e integración: Vitest. **(ADR-0009, aceptada)**
- Pruebas E2E: Playwright para navegación crítica y envío de formulario. **(ADR-0009, aceptada)**
- Lint y formato: ESLint y Prettier.
- Hooks Git: Husky o alternativa, solo si su coste de mantenimiento se justifica.
- Despliegue: Vercel, con runtime Node.js y sin Edge. **(ADR-0017, aceptada)**

<aside>
🚫

**No incluidos por defecto:** analítica, monitorización externa, newsletter, pagos, base de datos y CMS. El envío de email queda limitado al formulario de contacto (ADR-0011).

</aside>

---

# 3. Estructura de directorios

La estructura inicial recomendada será:

```
.
├── .github/
│   └── workflows/
│       └── ci.yml
├── docs/
│   ├── adr/
│   ├── quality-gates.md
│   ├── release-checklist.md
│   └── testing-strategy.md
├── public/
│   ├── images/
│   ├── fonts/
│   └── icons/
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── page.tsx
│   │   │   ├── servicios/
│   │   │   │   └── page.tsx
│   │   │   ├── proyectos/
│   │   │   │   └── page.tsx
│   │   │   ├── stack/
│   │   │   │   └── page.tsx
│   │   │   ├── sobre-mi/
│   │   │   │   └── page.tsx
│   │   │   └── contacto/
│   │   │       └── page.tsx
│   │   ├── (legal)/
│   │   │   ├── aviso-legal/
│   │   │   │   └── page.tsx
│   │   │   └── privacidad/
│   │   │       └── page.tsx
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   └── opengraph-image.tsx
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── domain/
│   ├── content/
│   │   ├── projects/
│   │   ├── services/
│   │   ├── technologies/
│   │   ├── legal/
│   │   └── site.ts
│   ├── lib/
│   │   ├── env/
│   │   ├── seo/
│   │   ├── server/
│   │   │   └── email/
│   │   ├── validations/
│   │   ├── constants.ts
│   │   └── utils.ts
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── themes.css
│   │   └── utilities.css
│   └── types/
├── tests/
│   ├── unit/
│   ├── integration/
│   ├── e2e/
│   ├── fixtures/
│   └── helpers/
├── .env.example
├── .nvmrc
├── README.md
├── AGENTS.md
├── ARCHITECTURE.md
├── CONTENT.md
├── DECISIONS.md
├── DESIGN.md
├── ROADMAP.md
├── SPECS.md
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
├── playwright.config.ts
├── vitest.config.ts
└── vercel.json
```

<aside>
🚫

Las carpetas que no sean necesarias para una funcionalidad aprobada no deben crearse de forma anticipada. Por ejemplo, `src/lib/db`, `prisma/`, `supabase/`, `src/emails/` o `checkout/` solo aparecerán cuando una decisión y una especificación las justifiquen.

**Depuración aplicada (verificación 4.1, ADR-0006):** retirados del árbol `api/newsletter/`, `api/webhooks/`, `servicios/[slug]/`, `proyectos/[slug]/`, `lib/analytics/`, `instrumentation.ts`, `docs/templates/` y `preview-checks.yml`. Cada uno se creará cuando su requisito P1/P2 se active mediante ADR.

</aside>

---

# 4. Responsabilidades y reglas de importación

## 4.1. src/app

- Gestiona rutas, layouts, metadata, loading, error boundaries, Route Handlers y composición de página.
- No contiene lógica de negocio reutilizable compleja.
- No contiene componentes UI compartidos.
- No contiene acceso directo a proveedores externos, salvo una orquestación mínima y validada desde un Route Handler.
- Cada ruta debe ser intencionalmente estática, dinámica o revalidada, con una estrategia documentada.

## 4.2. src/components/ui

- Contiene primitivas visuales y componentes base.
- No conoce entidades como proyecto, servicio, contacto, precio, cliente o tecnología.
- No realiza peticiones HTTP ni lee variables de entorno.
- No importa módulos de servidor.
- Mantiene la accesibilidad y las variantes del componente.

## 4.3. src/components/layout

- Contiene el shell, la navegación, el footer, los contenedores y otros elementos estructurales compartidos.
- Puede consumir componentes UI y configuración pública del sitio.
- No debe contener contenido editorial extenso ni lógica de proveedor.

## 4.4. src/components/sections

- Contiene secciones reutilizables de páginas de marketing.
- Debe recibir el contenido por props o mediante módulos de contenido tipados.
- No debe convertirse en un contenedor de componentes específicos de una única página sin una reutilización razonable.

## 4.5. src/components/domain

- Contiene componentes que representan conceptos de producto: proyectos, servicios, tecnologías, formularios y bloques de conversión.
- Puede consumir `ui`, `layout`, `content` y `lib` seguro para el entorno correspondiente.
- Nunca debe ser importado por `ui`.

## 4.6. src/content

- Contiene contenido editorial tipado, estable y versionado en Git.
- No contiene JSX ni lógica de renderizado.
- Cada elemento de contenido debe validarse mediante un esquema.
- Debe permitir una migración posterior a un CMS o a una fuente externa sin alterar el contrato de los componentes consumidores.

## 4.7. src/lib

- Contiene utilidades puras, esquemas, configuración, clientes de proveedor, adaptadores y lógica transversal.
- Debe separar explícitamente los módulos de cliente y servidor.
- Las utilidades de servidor deberán residir bajo `lib/server/` o usar una barrera equivalente.
- Las funciones con I/O, secretos o acceso a proveedores no se importarán desde Client Components.

## 4.8. src/styles

- Contiene tokens, temas, utilidades globales y capas CSS justificadas.
- No contiene estilos de componentes de dominio dispersos.
- La arquitectura de estilos debe ser compatible con el modelo de tokens definido por [DESIGN.md](./DESIGN.md).

## 4.9. Frontera server/client declarada

Declaración obligatoria por tipo de módulo (ADR-0005; verificable en revisión de PR):

| Módulo | Entorno por defecto | Excepciones permitidas |
| --- | --- | --- |
| `src/app` | Servidor (Server Components) | Ninguna en layouts y páginas; la interactividad se delega en componentes hijos |
| `src/components/ui` | Servidor | `"use client"` solo en primitivas con interacción demostrable (diálogo, menú, toggle de tema) |
| `src/components/layout` | Servidor | MobileNavigation y Navigation como Client Components (gestión de foco y Escape, y `aria-current`, REQ-LAYOUT-HEADER-001) |
| `src/components/sections` | Servidor | Ninguna |
| `src/components/domain` | Servidor | ContactForm como Client Component con esquema de validación compartido |
| `src/content` | Solo servidor (build-time) | Ninguna |
| `src/lib` | Compartido | `lib/server/**` y `lib/env` exclusivos de servidor, con barrera `server-only` |

---

# 5. Rutas públicas previstas

- `/`: presentación principal, propuesta de valor, servicios destacados, proyectos destacados, stack y CTA de contacto (SPECS §6.1).
- `/servicios`: catálogo de los cuatro servicios aprobados (DEC-SPECS-02).
- `/servicios/[slug]`: P1 condicional (SPECS §6.3); su carpeta se creará al activarse el bloque.
- `/proyectos`: índice de los cuatro proyectos publicables (DEC-SPECS-03); sin filtros, por volumen insuficiente.
- `/proyectos/[slug]`: casos de estudio completos, P1 (SPECS §6.5); su carpeta se creará al activarse el bloque.
- `/stack`: tecnologías, herramientas, prácticas y áreas de especialidad.
- `/sobre-mi`: perfil profesional, enfoque y experiencia.
- `/contacto`: formulario según REQ-FORM-CONTACT-001 y enlace a agenda [Cal.com](https://cal.com) (ADR-0007).
- `/aviso-legal`: aviso legal (ADR-0015); debe reflejar la situación real del prestador y actualizarse al formalizar el alta.
- `/privacidad`: política de privacidad (ADR-0015).
- `/cookies`: no existe en el MVP; se publicará junto al banner de consentimiento al activar la analítica P1 (ADR-0010).

<aside>
🚫

- `/newsletter`: no se creará como ruta independiente, salvo necesidad editorial.
- `/checkout`: no se creará hasta definir una oferta comprable, términos, proveedor de pago, impuestos, devoluciones y ciclo de cumplimiento.
- `/proximamente`: solo existirá si cumple una función comunicativa real; nunca como sustituto de una ruta incompleta.
</aside>

---

# 6. Renderizado, caché y datos

- Estrategia confirmada (13-08-2026): SSG para todas las rutas públicas del MVP; el único punto dinámico es `POST /api/contact`, ejecutado en el runtime Node.js de Vercel (ADR-0017). Sin ISR ni revalidación mientras el contenido viva en Git (ADR-0003).
- Las páginas de contenido estable deben renderizarse estáticamente por defecto.
- Las rutas que dependan de una fuente externa deberán documentar caché, revalidación, errores y fallback.
- Las páginas no deberán pasar datos sensibles al cliente.
- El contenido local versionado debe cargarse desde servidor.
- Las interacciones en cliente deben limitarse a lo estrictamente necesario.
- Las imágenes se servirán con `next/image`, formatos AVIF/WebP y tamaños responsivos declarados. Las capturas de proyectos se alojan self-hosted en `public/images/`, sin CDN de imágenes de terceros (NFR-PERF-003; coherente con el self-hosting de ADR-0016).
- Los recursos pesados deben cargarse bajo demanda cuando no afecten al contenido principal.
- Cualquier estrategia ISR, revalidación por tag o webhook deberá estar ligada a una fuente de datos real y protegida por secreto. La documentación de Next.js muestra una validación explícita de tokens de entorno y respuestas estructuradas para handlers protegidos. [context7:10]

---

# 7. Formularios, Route Handlers y límites de confianza

- Cada formulario debe validar en cliente para la experiencia de usuario y en servidor como fuente de verdad.
- Cada payload debe validarse mediante esquema antes de cualquier uso.
- Los Route Handlers deben devolver respuestas consistentes, tipadas y sin filtrar detalles internos.
- Los errores deben distinguir, como mínimo, entre entrada inválida, no autorizado, limitado por abuso, fallo temporal y error interno.
- El único endpoint del MVP es `POST /api/contact` (ADR-0007): esquema Zod compartido, honeypot con respuesta neutra y rate limit de 5 envíos por IP y hora (REQ-FORM-CONTACT-001, OBJ-007). Sin CAPTCHA en el MVP: Turnstile solo se incorporará mediante ADR si se detecta spam real (resuelto 13-08-2026; NFR-PERF-005).
- El rate limit se implementará sin proveedor adicional (ventana deslizante en memoria por instancia). Si las funciones serverless de Vercel no garantizan eficacia suficiente, la incorporación de un almacén externo requerirá ADR (ADR-0006).
- El envío usa un adaptador de email sobre Proton SMTP submission con token dedicado de servidor (ADR-0011); el adaptador es sustituible sin afectar a la interfaz pública (REQ-GLOBAL-010). Ante fallo del proveedor: timeout y mensaje de error claro sin detalles técnicos (criterio 6.8), sin PII innecesaria en logs (NFR-SEC-006).
- Si en el futuro existieran endpoints de webhook, deberán verificar firma, timestamp cuando aplique, idempotencia y origen.
- Los proveedores externos deben encapsularse en adaptadores.
- Una caída de proveedor no debe romper la navegación pública ni revelar configuración interna.
- Las operaciones con efectos externos deberán incluir observabilidad y manejo explícito de reintentos cuando sea necesario.

---

# 8. Modelo de contenido

Definir tipos de dominio independientes de la fuente:

- SiteConfig.
- NavigationItem.
- SocialLink.
- Service.
- Project.
- ProjectImage.
- Technology.
- TechnologyGroup.
- Testimonial o ProofPoint, solo si son verificables.
- LegalDocument.
- ContactChannel.
- CTA.
- SEO metadata.

Cada tipo incluirá:

- Identificador estable.
- Slug cuando sea publicable.
- Título.
- Resumen.
- Contenido principal.
- Estado editorial: draft, published, archived.
- Fecha de creación y actualización, si aplica.
- Metadatos SEO.
- Imagen u Open Graph, cuando aplique.
- Validación de esquema.
- Reglas para relaciones entre entidades.

---

# 9. Environment variables y secretos

## 9.1. Principios

- `.env.example` debe enumerar todas las variables posibles e indicar obligatoriedad, entorno, propietario, formato y finalidad.
- Los valores reales no se almacenan en Git.
- Las variables públicas se reservarán exclusivamente para información segura destinada al navegador y usarán el prefijo `NEXT_PUBLIC_`.
- Las variables sin ese prefijo son privadas y solo pueden leerse desde servidor.
- Se validarán en el arranque o en el primer punto de uso mediante módulos tipados.
- Las variables necesarias para una funcionalidad opcional no deberán bloquear el arranque cuando esa funcionalidad esté desactivada.
- Las variables críticas de producción deben existir antes del despliegue.
- Las variables nunca se imprimirán en logs, errores, respuestas HTTP ni interfaces de administración.

## 9.2. Variables aprobadas para el MVP

Únicas variables con integración aprobada (ADR-0008 y ADR-0011). Propietario de todas: Alexendros.

| Variable | Tipo | Entorno | Condición de existencia |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Pública · build-time | Local, preview y producción | Siempre |
| `NEXT_PUBLIC_SITE_NAME` | Pública · build-time | Local, preview y producción | Siempre |
| `CONTACT_TO_EMAIL` | Privada · runtime | Servidor (preview y producción) | Endpoint de contacto activo |
| `SMTP_HOST` | Privada · runtime | Servidor (preview y producción) | Endpoint de contacto activo (ADR-0011) |
| `SMTP_PORT` | Privada · runtime | Servidor (preview y producción) | Endpoint de contacto activo (ADR-0011) |
| `SMTP_USER` | Privada · runtime | Servidor (preview y producción) | Endpoint de contacto activo (ADR-0011) |
| `SMTP_TOKEN` | Secreto · runtime | Solo servidor; nunca en cliente, logs ni repositorio | Endpoint de contacto activo (ADR-0011); rotación documentada |
| `EMAIL_FROM_ADDRESS` | Privada · runtime | Servidor (preview y producción) | Endpoint de contacto activo |
| `EMAIL_REPLY_TO` | Privada · runtime | Servidor (preview y producción) | Opcional |
| `CONTACT_RATE_LIMIT_MAX` | Privada · runtime | Servidor (preview y producción) | Opcional; por defecto 5 envíos/IP/hora |

<aside>
🚫

Retiradas de la tabla todas las variables de newsletter, pagos, CMS, analítica, monitorización, captcha y revalidación por ser anticipadas (ADR-0006). Cada grupo se incorporará a `.env.example` con el ADR que apruebe su integración (ADR-0010 para analítica; ADR-0012 para pagos).

</aside>

<aside>
⚠️

No se añadirá ninguna variable al ejemplo hasta que una integración esté aprobada. Next.js permite leer variables runtime de forma segura en el servidor durante renderizado dinámico y sus ejemplos recomiendan comprobar explícitamente la presencia de secretos antes de procesar operaciones sensibles.

</aside>

---

# 10. Seguridad

- TypeScript estricto y validación de cualquier entrada externa.
- No confiar en datos del cliente (parámetros de URL, cabeceras, formularios o webhooks) sin validación.
- No exponer secretos mediante props, serialización, logs, errores ni bundles de cliente.
- Aplicar cabeceras de seguridad definidas en la configuración.
- Definir Content Security Policy cuando la composición de scripts, analítica y proveedores esté estabilizada.
- Limitar los orígenes permitidos de imágenes y conexiones externas.
- Aplicar redirecciones seguras y validar las URLs de retorno.
- Implementar rate limiting en endpoints susceptibles de abuso.
- Evitar dependencia de middleware global salvo necesidad transversal clara.
- Mantener dependencias actualizadas y revisar vulnerabilidades en CI.
- Ejecutar escaneo de secretos antes de incorporar material heredado del proyecto anterior.
- Documentar el proceso de divulgación de vulnerabilidades en [SECURITY.md](./SECURITY.md).

---

# 11. SEO, metadata y datos estructurados

- Metadata global en el layout.
- Metadata específica por página y entidad.
- Canonical URL por ruta indexable.
- `robots.ts` y `sitemap.ts` generados a partir de rutas y contenido publicado.
- Open Graph y Twitter/X cards según la audiencia real.
- JSON-LD solo para entidades con semántica justificada y datos exactos.
- Las páginas de proyectos y servicios deben tener títulos, descripciones y slugs estables.
- No indexar borradores, endpoints, páginas de confirmación, previews ni duplicados.
- Revisar redirecciones y URLs antiguas del proyecto previo antes de publicar para decidir si se preservan, redirigen o eliminan.

---

# 12. Observabilidad y analítica

- La analítica es P1, con cookies y banner de consentimiento previo que bloquea la carga de scripts (ADR-0010); el MVP se lanza sin analítica.
- La monitorización de errores es P1 (SPECS §9). En P0 se usan los logs y dashboards de Vercel, sin proveedor adicional (resuelto 13-08-2026). Si al activar P1 se requiere mayor detalle, Sentry free tier es el candidato; su incorporación exigirá ADR propio.
- Medir solo eventos con utilidad concreta: visualización de página, clic de contacto, envío válido de formulario, clic de proyecto y conversión definida.
- No medir datos sensibles ni el texto de los formularios.
- Los eventos tendrán nombres versionados y documentados.
- Registrar errores de servidor y cliente con contexto técnico mínimo y sin PII.
- Las alertas deben tener propietario, severidad y procedimiento de respuesta.
- El sitio debe seguir siendo funcional si falla la analítica u observabilidad.

---

# 13. Calidad y CI

Pipeline confirmado (13-08-2026): GitHub Actions, con gates bloqueantes de merge — typecheck, lint, test, build y axe-core (ADR-0009, OBJ-006) — más Lighthouse CI sobre el despliegue preview (OBJ-005).

Todo pull request debe ejecutar:

- Instalación reproducible con lockfile.
- Typecheck.
- Lint.
- Formato o comprobación de formato.
- Pruebas unitarias.
- Pruebas de integración cuando se modifique una integración o un Route Handler.
- Build de producción.
- Pruebas E2E de rutas críticas cuando cambien navegación, formularios y el flujo de conversión.
- Auditoría de dependencias.
- Escaneo de secretos.
- Revisión visual o capturas comparativas cuando cambie UI relevante.
- Revisión de accesibilidad automatizada y manual proporcional al cambio.

---

# 14. Despliegue y entornos

- Plataforma: Vercel (ADR-0017); previews automáticas por pull request y producción desde la rama protegida `main`.
- Repositorio: público en GitHub (`Iniciativas-Alexendros/nuevowebsite-alexendrosdev`). La cláusula de ADR-0017 «privado hasta el lanzamiento» queda **revocada por el decisor el 14-08-2026** para habilitar previews de Vercel en plan Hobby con repositorio de organización; el resto de ADR-0017 (runtime Node.js, sin Edge) permanece vigente. El repositorio anterior queda archivado en solo lectura (resuelto 13-08-2026).
- Entornos mínimos: local, preview y producción.
- Cada pull request debe disponer de preview cuando el proveedor lo permita.
- Producción solo se desplegará desde una rama protegida y con CI en verde.
- Las variables se gestionarán por entorno.
- Los cambios de esquema, proveedores o redirecciones deberán incluir un plan de rollback.
- El despliegue debe ser reproducible desde el repositorio, sin pasos manuales opacos.
- El documento de release debe comprobar metadatos, formularios, cookies, sitemap, robots, 404, errores, rendimiento y rutas críticas.