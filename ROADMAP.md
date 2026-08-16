# ROADMAP.md

Abrir cuando: Fase activa, calendario, hitos o criterio de salida.
Aprobado: 13 de agosto de 2026
Audiencia: Agente, Dirección
Autoridad: Operativa
Clase: Obligatorio
Días para revisión: 9
En repo: Sí
Estado: Aprobado
Orden: 8
Propósito: Define el orden de ejecución.
Reforma: Operativa
Responsable: Alexendros
Revisión: 24 de agosto de 2026
Rol: Plan
Ruta: ./ROADMAP.md

<aside>
📌

**Propósito**

[ROADMAP.md](./ROADMAP.md) transforma [SPECS.md](./SPECS.md) en unidades de trabajo para un agente de código. Cada fase produce un resultado verificable y potencialmente desplegable. El humano dirige, revisa y firma; la IA implementa. Las tareas se redactan como fichas ejecutables, no como recordatorios vagos.

</aside>

# 1. Reglas del roadmap

<aside>
⚠️

**Reglas del roadmap**

- Cada épica debe referenciar requisitos concretos de [SPECS.md](./SPECS.md).
- Cada tarea DEBE caber en la ficha de [AGENTS.md](./AGENTS.md) §3: objetivo, traza, alcance, exclusiones, dependencias, pruebas y criterio de cierre.
- Todo el código del sitio lo produce un agente de código. El humano no implementa a mano salvo corrección puntual en revisión (ADR-0019).
- Ningún bloque se cierra si hay deuda crítica de accesibilidad, seguridad, pruebas o documentación.
- Las fases se ejecutan en orden, salvo tareas explícitamente paralelizables.
- Las integraciones **P1**/**P2** no deben bloquear el lanzamiento **P0**.
- Toda desviación relevante del roadmap debe registrarse en [DECISIONS.md](./DECISIONS.md).
- La estimación se expresa en tamaño relativo (S/M/L). El calendario de esta versión se deriva de DEC-ROADMAP-01 (50 h/semana, objetivo 24-08-2026) y no admite holgura.
</aside>

---

# 1.1 Calendario del MVP (DEC-ROADMAP-01)

<aside>
⚠️

**Capacidad:** 50 h/semana de dirección y revisión humana. La IA comprime la implementación; el riesgo es deuda de calidad, no velocidad de tecleo.

**Ventana:** vie 14 – lun 24 ago 2026 (~71 h útiles). **Objetivo:** v1.0 el 24-08-2026.

Camino crítico ~70 h con solape de Fase 4. Sin holgura humana de revisión. Recorte permitido: catálogo visual de Fase 2 o no crítico de Fase 6. Nunca recortar DoD, a11y, seguridad, tests ni el formulario.

</aside>

| Fase | Tamaño | Horas | Ventana | Hito |
| --- | --- | --- | --- | --- |
| 0 (resto) | S | 4 | vie 14 ago | Repositorio, `.env.example`, plantillas |
| 1 | M | 10 | vie 14 – sáb 15 ago | App vacía, CI verde, preview |
| 2 | L | 16 | sáb 15 – lun 17 ago | Design system operable |
| 4 (paralela) | M | 10 | vie 14 – lun 17 ago | Contenido tipado y validado |
| 3 | M | 10 | lun 17 – mar 18 ago | Shell, navegación y SEO técnico |
| 5 | L | 16 | mar 18 – jue 20 ago | **Hito:** landing mínima pública |
| 6 | M | 8 | vie 21 ago | Portfolio, stack y sobre-mí |
| 7 | S | 4 | vie 21 – sáb 22 ago | Aviso legal y privacidad |
| 8 | M | 10 | sáb 22 – lun 24 ago | **Lanzamiento v1.0** |
| 9 | — | — | posterior al 24-08 | P1/P2 solo con disparador + ADR |

---

# 1.2 Cómo se ejecuta una fase con el agente

1. El humano abre la épica de la fase y entrega, por cada tarea, la ficha de [AGENTS.md](./AGENTS.md) §3 (o apunta a la tarea ya fichada aquí).
2. El agente lee las fuentes de [AGENTS.md](./AGENTS.md) §2, implementa solo el alcance, deja CI verde y abre un PR pequeño.
3. El humano revisa el diff. Si hay UI, hace QA visual (claro/oscuro, teclado, 360 y 1280). Fusiona o devuelve.
4. El agente no declara la fase cerrada. El decisor firma el checklist de la épica (DEC-ROADMAP-03).
5. Una tarea = un PR. No se agrupan fases. No se adelanta P1/P2.

**Redacción de tareas:** verbo en infinitivo + artefacto + ancla (REQ/ADR) + exclusión si hay riesgo de sobrealcance. Prohibido “mejorar”, “preparar” o “tener en cuenta” sin criterio observable.

---

# 2. Fase 0 — Descubrimiento, limpieza y decisiones fundacionales

**Depende de:** — (fase inicial)

**Objetivo:** definir el alcance real de la versión inicial y evitar herencia tecnológica no justificada.

**Traza:** SPECS §3 y §9; DEC-SPECS-01–08; reglas de gobierno de [DECISIONS.md](./DECISIONS.md).

**Tamaño relativo:** S restante (M documental ya cerrado el 13-08-2026).

**Calendario:** vie 14 ago 2026 (~4 h).

**Tareas:**

- [x]  Crear el nuevo repositorio (GitHub, privado hasta el lanzamiento; ADR-0017). — **Resuelto:** creado `Iniciativas-Alexendros/nuevowebsite-alexendrosdev`; la cláusula «privado» de ADR-0017 queda revocada el 14-08-2026 (repositorio público para habilitar Vercel en plan Hobby).
- [x]  Configurar propiedad, visibilidad, licencia y ramas protegidas (`main` protegida con CI en verde; ADR-0017). — **Resuelto:** propiedad organización Iniciativas-Alexendros; visibilidad pública; licencia MIT; `main` protegida con los 7 checks de CI.
- [x]  Inventariar funcionalidad recuperable del repositorio actual. — **Resuelto:** no se hereda stack ni contenido; todo se redacta de cero (ADR-0006; CONTENT §12).
- [x]  Clasificar cada activo actual en: conservar como requisito, conservar como contenido, rediseñar, sustituir o descartar. — **Resuelto:** descarte íntegro del stack anterior (ADR-0006); el repositorio anterior queda archivado en solo lectura (ADR-0017).
- [x]  Identificar rutas antiguas y potenciales redirecciones. — **Resuelto:** lanzamiento limpio sin redirecciones (ADR-0013).
- [x]  Crear los documentos base: [README.md](./README.md), [DESIGN.md](./DESIGN.md), [ARCHITECTURE.md](./ARCHITECTURE.md), [SPECS.md](./SPECS.md), [ROADMAP.md](./ROADMAP.md), [DECISIONS.md](./DECISIONS.md), [CONTENT.md](./CONTENT.md) y [AGENTS.md](./AGENTS.md). — **Resuelto:** los ocho existen; README es la entrada de lectura; el resto está “Aprobado” (13-08-2026).
- [x]  Aprobar decisiones iniciales: framework (Next.js App Router, ADR-0001), package manager (pnpm, ADR-0002), modelo de contenido (Git + TS tipado + Zod, ADR-0003/0018), plataforma de despliegue (Vercel, ADR-0017), política de integraciones (ADR-0006) y estrategia de formularios (ADR-0007/0011).
- [x]  Definir alcance **P0**/**P1**/**P2**. — **Resuelto:** matriz de priorización en SPECS §9.
- [ ]  Crear `.env.example` vacío o mínimo y política de secretos (10 variables aprobadas en ARCHITECTURE §9.2; ADR-0008).
- [x]  Cerrar [AGENTS.md](./AGENTS.md) como contrato del agente (ficha §3, autonomía, DoD, comandos) antes de escribir código de producto. — **Resuelto (13-08-2026).**
- [ ]  Definir criterios de calidad y plantilla de issue/PR en el repo, copiando la ficha de [AGENTS.md](./AGENTS.md) §3.

**Entregable:** repositorio documentalmente preparado, sin código de producto heredado.

**Criterio de salida:**

- Todos los documentos base tienen estructura aprobada. *(Siete documentos “Aprobados”, 13-08-2026.)*
- No existe dependencia heredada sin decisión explícita. *(Cumplido: ADR-0006.)*
- La lista de rutas de la versión inicial está confirmada. *(Cumplido: SPECS §6 y matriz §9.)*
- Riesgos de datos personales, pagos y contenido legal están identificados. *(Cumplido: ADR-0012 condicional y ADR-0015.)*

---

# 3. Fase 1 — Bootstrap técnico reproducible

**Depende de: Fase 0** aprobada

**Objetivo:** disponer de una aplicación vacía, moderna, limpia, validada y desplegable, generada por el agente según [AGENTS.md](./AGENTS.md).

**Traza:** OBJ-008; NFR-MAINT-001; NFR-SEC-002/005; ADR-0001, ADR-0002, ADR-0004, ADR-0008, ADR-0009, ADR-0017.

**Tamaño relativo:** M (~10 h).

**Calendario:** vie 14 – sáb 15 ago 2026.

**Tareas:**

- [ ]  Inicializar Next.js con App Router y TypeScript estricto (`strict: true`, sin `any` implícito; ADR-0001, ADR-0002). El agente ejecuta el scaffold; el humano no pega plantillas a mano.
- [ ]  Configurar pnpm 10 y lockfile; fijar Node 22 LTS con `.nvmrc`, `engines` y `packageManager` (ADR-0002, ADR-0017).
- [ ]  Configurar Tailwind CSS (ADR-0004).
- [ ]  Inicializar shadcn/ui sin importar componentes innecesarios (ADR-0004).
- [ ]  Configurar alias de importación.
- [ ]  Configurar ESLint, Prettier y reglas TypeScript.
- [ ]  Configurar Vitest (unitarias e integración; ADR-0009).
- [ ]  Configurar Playwright (E2E crítica; ADR-0009).
- [ ]  Configurar CI en GitHub Actions con gates bloqueantes de merge: typecheck, lint, test, build, axe-core y Lighthouse CI.
- [ ]  Configurar preview deployment en Vercel por pull request; producción desde `main` protegida (ADR-0017).
- [ ]  Añadir health check técnico o página temporal mínima.
- [ ]  Configurar gestión segura de environment variables según ARCHITECTURE §9.2, con validación de entorno en arranque (ADR-0008).
- [ ]  Añadir escaneo de secretos y auditoría de dependencias (NFR-SEC-005).
- [ ]  Configurar páginas de error, 404 y layout raíz mínimos.

**Entregable:** aplicación que instala, valida, prueba, compila y despliega de forma reproducible.

**Criterio de salida:**

- CI verde.
- Preview funcional.
- No hay secretos en repositorio.
- Typecheck, lint y build obligatorios.
- Estructura de carpetas conforme a [ARCHITECTURE.md](./ARCHITECTURE.md).

---

# 4. Fase 2 — Fundamentos del design system

**Depende de: Fase 1**

**Objetivo:** construir la infraestructura visual antes de implementar páginas de negocio.

**Traza:** REQ-GLOBAL-004; REQ-UI-BUTTON-001, REQ-UI-LINK-001, REQ-UI-FIELD-001; NFR-A11Y-001–007; ADR-0004, ADR-0016 (DESIGN §§4–7).

**Tamaño relativo:** L (~16 h).

**Calendario:** sáb 15 – lun 17 ago 2026. — **Implementada el 14-08-2026** (adelantada, dentro de la ventana de Fase 1).

**Tareas:**

- [x]  Definir tokens primitivos OKLCH con los valores aprobados en DESIGN §4 (ADR-0016). — **Resuelto:** `src/styles/tokens.css` (PR #12).
- [x]  Definir tokens semánticos para tema claro y oscuro (tabla DESIGN §4.3). — **Resuelto:** `src/styles/themes.css` (PR #12).
- [x]  Configurar vínculo de variables CSS con utilidades de Tailwind. — **Resuelto:** `@theme inline` en `themes.css` (PR #12).
- [x]  Configurar tipografía y carga de fuentes: Inter Variable + JetBrains Mono Variable, self-hosted vía `next/font/local` (ADR-0016). — **Resuelto:** `src/lib/fonts.ts` + `src/fonts/` (PR #13).
- [x]  Configurar layout base, container, grid y espaciado según los breakpoints de DESIGN §6. — **Resuelto:** `Container` y `Section` (PR #18); grid 4/8/12 sin código propio (se apoya en utilidades Tailwind, coincidentes con los breakpoints de DESIGN §6).
- [x]  Implementar modo claro/oscuro según preferencia del sistema (`prefers-color-scheme`; ADR-0016). — **Resuelto:** media query en `themes.css`, sin flash (PR #12).
- [x]  Configurar Lucide como set único de iconos, con nombre accesible en cada icono (ADR-0016). — **Resuelto:** `lucide-react` + `src/components/ui/icon.tsx` (PR #14).
- [x]  Implementar Button, Link, IconButton, Badge, Input, Textarea, Label, Field, Alert, Skeleton, Separator y Spinner. — **Resuelto:** PR #15 (Button/Link/IconButton/Badge), #16 (Input/Textarea/Label/Field/FieldError), #17 (Alert/Skeleton/Separator/Spinner).
- [x]  Implementar Dialog, Sheet, Tooltip, Toast, Navigation primitives si son necesarios. — **Excluidos justificadamente:** el MVP no tiene flujos modales, async ni de navegación que los requieran; se difieren a la fase que los necesite (documentado en PR #20).
- [x]  Implementar foco visible (tokens `--ring`/`--focus`), `prefers-reduced-motion` y utilidades táctiles (NFR-A11Y-002/005). — **Resuelto:** `globals.css` (focus-visible) + `utilities.css` (reduced-motion, `.min-tap-target`).
- [x]  Crear página interna o catálogo temporal de componentes para comprobación visual. — **Resuelto:** `/catalog` con `robots: noindex` (PR #19).
- [x]  Añadir pruebas de componentes críticos. — **Resuelto:** unitarias de `buttonVariants` e `icon` + E2E de catálogo con axe-core (PR #20).
- [x]  Validar contraste (AA global; AAA ≥ 7:1 en cuerpo de texto largo, ADR-0016), teclado y responsive. — **Resuelto:** AA cubierto por axe-core en CI; contraste AAA en cuerpo largo y QA visual humana quedan como verificación manual del decisor.

**Entregable:** sistema de diseño mínimo operable. — **Entregado:** 11 PRs mergeados a `main` (#10–#20).

**Criterio de salida:**

- Todos los tokens y componentes base definidos en [DESIGN.md](./DESIGN.md) tienen implementación inicial o exclusión justificada. *(Cumplido; exclusión de Dialog/Sheet/Tooltip/Toast/Navigation documentada.)*
- No existen colores arbitrarios en componentes de producción. *(Cumplido: fuente 100 % OKLCH, cero hex/rgb/hsl.)*
- Temas claro y oscuro son funcionales. *(Cumplido vía `prefers-color-scheme`.)*
- Los controles base cumplen criterios de accesibilidad. *(Cumplido: axe-core sin violaciones críticas/serias en CI.)*

**Cierre:** pendiente de firma del decisor (DEC-ROADMAP-03). El agente no declara la fase cerrada.

---

# 5. Fase 3 — Shell, navegación y SEO técnico

**Depende de: Fase 2**

**Objetivo:** crear la estructura común que soportará todas las rutas públicas.

**Traza:** OBJ-002; REQ-GLOBAL-001/003/005/006; REQ-LAYOUT-HEADER-001, REQ-LAYOUT-FOOTER-001, REQ-PAGE-404-001; NFR-SEO-001–003; ADR-0014.

**Tamaño relativo:** M (~10 h).

**Calendario:** lun 17 – mar 18 ago 2026.

**Tareas:**

- [ ]  Implementar SiteHeader con landmark nombrado y `aria-current="page"` en la ruta activa (REQ-LAYOUT-HEADER-001).
- [ ]  Implementar navegación de escritorio.
- [ ]  Implementar navegación móvil accesible: foco gestionado, cierre con Escape y retorno de foco.
- [ ]  Implementar SiteFooter con landmark `contentinfo` y enlaces legales de SPECS §6.9 (REQ-LAYOUT-FOOTER-001).
- [ ]  Implementar layout de marketing y layout legal si procede.
- [ ]  Implementar SkipLink como primer elemento enfocable de la página.
- [ ]  Implementar Container, Section y PageHeader.
- [ ]  Configurar favicon, metadata global (`lang="es"`, ADR-0014), Open Graph base y canonical, centralizados en `src/lib/seo` (ADR-0018).
- [ ]  Implementar `robots.ts`.
- [ ]  Implementar `sitemap.ts` derivado del contenido publicado (CONTENT §9).
- [ ]  Implementar `not-found.tsx` con código 404 real, navegación completa y enlaces sugeridos a las rutas principales (REQ-PAGE-404-001, DEC-SPECS-08).
- [ ]  Implementar error boundaries necesarios.
- [ ]  Definir estrategia de enlaces externos: `rel="noopener noreferrer"` e indicación accesible de apertura en otra pestaña (REQ-UI-LINK-001).
- [ ]  Añadir JSON-LD base únicamente si los datos son exactos (NFR-SEO-004).
- [ ]  Probar navegación, foco, escape, menú móvil y enlaces; la navegación esencial funciona sin JavaScript (REQ-GLOBAL-003).

**Entregable:** cascarón navegable y accesible de la web.

**Criterio de salida:**

- Todas las rutas planeadas son alcanzables o tienen placeholder de contenido definido.
- La navegación funciona por teclado, móvil y lector de pantalla.
- Metadata global y SEO técnico básico están disponibles.
- 404 y estados de error son coherentes.

---

# 6. Fase 4 — Modelo editorial y contenidos base

**Depende de: Fase 1**; puede desarrollarse parcialmente en paralelo con **Fase 2** y **Fase 3**

**Objetivo:** separar definitivamente contenido de presentación e introducir datos reales verificables.

**Traza:** OBJ-004; REQ-GLOBAL-007/008; DEC-SPECS-02/03; CONTENT §§2–12; ADR-0003, ADR-0018.

**Tamaño relativo:** M (~10 h).

**Calendario:** vie 14 – lun 17 ago 2026, en paralelo parcial con Fases 2 y 3.

**Tareas:**

- [x]  Definir esquemas Zod para SiteConfig, Service, Project, Technology y ContactChannel en `src/lib/validations/content/`, con fuente TS tipada en `src/content/` (ADR-0018). — **Resuelto:** también Profile y LegalDocument.
- [x]  Crear contenido base de los 4 servicios aprobados: `desarrollo-web`, `landing-pages`, `automatizacion-ia` y `auditoria-web` (DEC-SPECS-02). El agente redacta el borrador; el humano verifica hechos (REQ-GLOBAL-008). — **Firmado por el decisor el 15-08-2026.**
- [x]  Crear contenido base de los 4 proyectos aprobados: FRONT Valencia, Gráficas Nasve, vcf-cribador y alexendros.me (DEC-SPECS-03); redacción de cero, sin anonimización. El agente no publica afirmaciones sin revisión humana. — **Firmado por el decisor el 15-08-2026. Capturas DES-07 pospuestas (sin `images[]` hasta assets reales).**
- [x]  Crear contenido base de stack.
- [x]  Crear contenido base de perfil profesional.
- [x]  Definir imágenes y recursos por entidad: capturas reales de proyectos y OG images con plantilla generada (`opengraph-image.tsx`; ADR-0016/0018). — **Parcial:** `src/app/opengraph-image.tsx` implementado (#37); capturas reales pendientes (DES-07).
- [x]  Configurar validación del contenido en build: contenido inválido rompe el build, como gate de CI (ADR-0018).
- [x]  Crear guías de redacción y convenciones de slug: primera persona con tuteo, guía de tono de CONTENT §11. — **Resuelto:** `docs/guia-redaccion.md`.
- [x]  Definir tratamiento de borradores: enum `status`, selectores `getPublished*()`, sitemap y rutas derivados, test bloqueante en CI (CONTENT §9; REQ-GLOBAL-007). — **Sitemap solo rutas estáticas P0 hasta activar `[slug]` P1 (#37).**
- [x]  Revisar exactitud de afirmaciones profesionales y técnicas (REQ-GLOBAL-008). Tarea no delegable: firma humana obligatoria. — **Firmado por el decisor el 15-08-2026 (servicios, proyectos, stack, perfil y site). Legales cerrados en Fase 7.**
- [x]  Preparar contenido legal según funcionalidades **P0** confirmadas: aviso legal y privacidad, sin cookies (ADR-0010, ADR-0015). — **Completado en Fase 7:** `published` con datos reales; asesoría externa residual pre-PROMOTE.

**Entregable:** conjunto de contenido tipado, validado y listo para renderizar.

**Criterio de salida:**

- No hay contenido crítico embebido de forma dispersa en componentes.
- Cada entidad tiene identificador, slug, metadata y estado editorial cuando aplique.
- No hay testimonios, cifras ni promesas sin verificación.

---

# 7. Fase 5 — MVP de captación: inicio, servicios y contacto

**Depende de: Fase 2**, **Fase 3** y **Fase 4**

**Objetivo:** lanzar un flujo completo desde descubrimiento hasta contacto.

**Traza:** OBJ-001, OBJ-002, OBJ-007; REQ-GLOBAL-002; REQ-DOMAIN-HERO-001, REQ-DOMAIN-SERVICECARD-001, REQ-DOMAIN-CTA-001; REQ-FORM-CONTACT-001; ADR-0007, ADR-0011, ADR-0017.

**Tamaño relativo:** L (~16 h).

**Calendario:** mar 18 – jue 20 ago 2026. Landing mínima pública el jue 20. *(Adelantada: implementación 15-08; código en `main`.)*

**Estado (16-08-2026):** implementada en `main` (#39, #40); pendiente MITL + firma (ADR-0025). Residual: smoke SMTP real.

**Tareas:**

- [x]  Implementar inicio con propuesta de valor y CTA visibles sin scroll en 360×640 y 1280×800 (OBJ-001). — **PR #40.**
- [x]  Implementar Hero: único H1 de la página, propuesta de valor en texto y contenido desde entidades tipadas (REQ-DOMAIN-HERO-001). — **PR #40.**
- [x]  Implementar secciones de servicios, proyectos destacados, stack destacado y CTA (REQ-DOMAIN-CTA-001). — **PR #40.**
- [x]  Implementar `/servicios` con los 4 servicios aprobados (SPECS §6.2). — **PR #40.**
- [x]  Implementar ServiceCard y componentes relacionados (REQ-DOMAIN-SERVICECARD-001; sin precios, plazos ni garantías no confirmados). — **PR #40.**
- [x]  Implementar `/contacto` con canales, formulario y enlace a [Cal.com](https://cal.com/alexendros) como alternativa de llamada (DEC-SPECS-06; sin script de terceros). — **PR #40.**
- [x]  Implementar ContactForm (aprobado, DEC-SPECS-06) con los campos y validaciones de REQ-FORM-CONTACT-001: nombre, email, empresa, asunto, mensaje de 20–2.000 caracteres, consentimiento no premarcado y honeypot. — **PR #40.**
- [x]  Implementar validación cliente/servidor con esquema Zod único compartido; el servidor es la fuente de verdad (ARCHITECTURE §7). — **PR #39.**
- [x]  Implementar `POST /api/contact` como único punto dinámico del sitio; el resto es SSG puro con runtime Node.js 22 (ADR-0017). — **PR #39.**
- [x]  Configurar proveedor de email solo si es necesario. — **Resuelto:** Proton Mail vía SMTP submission con token dedicado exclusivo de servidor y adaptador sustituible (ADR-0011; REQ-GLOBAL-010; PRs #39/#49).
- [x]  Implementar antiabuso: honeypot con respuesta neutra + rate limit 5 envíos/IP/hora; sin CAPTCHA en el MVP (ARCHITECTURE §7; Turnstile solo ante spam real, vía ADR). — **PR #39.**
- [x]  Implementar estados de carga, éxito y error, con degradación clara ante fallo del proveedor (OBJ-007). — **PR #40.**
- [x]  Redactar y enlazar política de privacidad (`/privacidad`): el formulario trata datos personales (ADR-0015). — **Enlazado en Fase 5; textos `published` en Fase 7 (#48).**
- [x]  Añadir conversiones o eventos únicamente si existe consentimiento y decisión de analítica. — **Resuelto:** sin analítica ni cookies no esenciales en el MVP (ADR-0010).
- [x]  Crear pruebas E2E del flujo de contacto y tests de integración del endpoint en CI (OBJ-007; ADR-0009). — **PRs #39/#40.**
- [ ]  **RESIDUAL:** smoke SMTP real tras sync-env + redeploy (pre-PROMOTE).
- [ ]  **RESIDUAL:** preview MITL + firma del decisor (ADR-0025 / DEC-ROADMAP-03).

**Entregable:** versión MVP capaz de presentar servicios y recibir contactos.

**Hito intermedio (DEC-ROADMAP-02):** al cierre de esta fase se publica una landing mínima (inicio + servicios + contacto) como primer despliegue público, antes de completar Fases 6–8.

**Criterio de salida:**

- Inicio, servicios y contacto cumplen los requisitos **P0**.
- Formulario probado en éxito, error, validación y abuso básico.
- Las rutas tienen metadata.
- Los datos personales tienen tratamiento documentado.
- No hay dependencia crítica de JavaScript para leer contenido o navegar.

---

# 8. Fase 6 — Portfolio, proyectos y stack

**Depende de: Fase 2**, **Fase 3** y **Fase 4**

**Objetivo:** completar la evidencia profesional y técnica.

**Traza:** OBJ-003; REQ-DOMAIN-PROJECTCARD-001, REQ-DOMAIN-TECHBADGE-001; SPECS §6.4, §6.6 y §6.7; DEC-SPECS-03.

**Tamaño relativo:** M (~8 h).

**Calendario:** vie 21 ago 2026. *(Adelantada: implementación 15-08; código en `main`.)*

**Estado (16-08-2026):** implementada en `main` (#42→#43→#44); pendiente MITL + firma. Residuales: confidencialidad humana; DES-07.

**Tareas:**

- [x]  Implementar `/proyectos` con los 4 proyectos aprobados; sin filtro en el MVP por volumen insuficiente (DEC-SPECS-03, SPECS §6.4). — **PR #42.**
- [x]  Implementar ProjectCard y ProjectGrid (REQ-DOMAIN-PROJECTCARD-001; tarjetas operables con teclado, imágenes con texto alternativo). — **PR #42;** sin placeholders DES-07.
- ~~Implementar `/proyectos/[slug]`, ProjectMeta, galerías, metadata por proyecto y pruebas de rutas dinámicas.~~ **Trasladado al bloque P1 de la Fase 9:** los casos de estudio completos (SPECS §6.5) son P1 y no debe adelantarse trabajo P1 en Fases 0–8 (regla de gobierno; MDX vía ADR, ADR-0018).
- [x]  Implementar `/stack` (SPECS §6.6). — **PR #43.**
- [x]  Implementar agrupación de tecnologías y TechnologyBadge (REQ-DOMAIN-TECHBADGE-001; sin porcentajes ni niveles subjetivos). — **PR #43.**
- [x]  Implementar `/sobre-mi` (SPECS §6.7). — **PR #44.**
- [x]  Implementar componentes de credibilidad solo con contenido verificable (REQ-GLOBAL-008). — **PR #44.**
- [ ]  Validar imágenes, contenido confidencial y enlaces externos (revisión de confidencialidad antes de publicar cada proyecto). — **RESIDUAL humano.**
- [x]  Añadir metadata específica por ruta: `/proyectos`, `/stack` y `/sobre-mi` (NFR-SEO-001). — **PRs #42–#44.**
- [x]  Revisar navegación cruzada entre servicios, proyectos y stack (OBJ-003: alcanzables en ≤2 interacciones). — **E2E PR #44.**
- [ ]  **RESIDUAL:** capturas DES-07 (`images[]` omitidas hasta assets reales).
- [ ]  **RESIDUAL:** preview MITL + firma del decisor (ADR-0025 / DEC-ROADMAP-03).

**Entregable:** portfolio navegable y mantenible.

**Criterio de salida:**

- Los proyectos se generan desde contenido tipado.
- No se expone información confidencial.
- Stack y perfil profesional son accesibles y legibles.
- Las rutas cumplen SEO y responsive (NFR-SEO-001, NFR-COMPAT-002).
- Servicios, proyectos y stack son alcanzables en ≤2 interacciones (OBJ-003).

---

# 9. Fase 7 — Legal, privacidad y cumplimiento operativo

**Depende de: Fase 5** y decisiones de proveedores

**Objetivo:** alinear el sitio publicado con su funcionamiento efectivo.

**Traza:** SPECS §6.9; DEC-SPECS-05; ADR-0010, ADR-0015.

**Tamaño relativo:** S (~4 h).

**Calendario:** vie 21 – sáb 22 ago 2026. *(Adelantada: published en `main` vía #48 el 15-08.)*

**Estado (16-08-2026):** implementada en `main` (#48); pendiente MITL + firma. Residual: asesoría externa pre-PROMOTE.

**Tareas:**

- [x]  Redactar aviso legal (`/aviso-legal`): identificación del prestador conforme al art. 10 LSSI-CE, reflejando la situación real sin alta de autónomo, con actualización obligatoria al formalizar el alta (ADR-0015, DEC-SPECS-05). — **Hecho:** `published` con datos firmados por el decisor (15-08-2026).
- [x]  Redactar política de privacidad (`/privacidad`): responsable, finalidad, base jurídica, conservación y derechos (art. 13 RGPD). — **Hecho:** base art. 6.1.b; conservación máx. 12 meses; Proton/Vercel/DPF+SCC.
- [x]  Determinar necesidad de política y mecanismo de cookies. — **Resuelto:** sin cookies no esenciales, sin página ni banner en el MVP; se publican al activar la analítica P1 (ADR-0010).
- [x]  Revisar proveedores, transferencias, formularios y analítica: Proton Mail (ADR-0011) y Vercel (ADR-0017) como únicos proveedores del MVP. — **Reflejado en privacidad**; Cal.com solo si el usuario abre el enlace.
- [x]  Implementar banner o gestión de consentimiento solo cuando sea necesario. — **No aplica en el MVP;** condición de activación definida en ADR-0010.
- [x]  Verificar enlaces legales en footer y formularios (REQ-LAYOUT-FOOTER-001).
- [x]  Revisar textos de consentimiento (checkbox no premarcado; REQ-FORM-CONTACT-001).
- [x]  Definir proceso de actualización cuando se añada una integración (criterio SPECS 6.9). — **Documentado en CONTENT.md §10.1.**
- [ ]  Validar los textos legales con asesoría antes de producción (riesgo regulatorio residual del criterio SMI, ADR-0015). — **RESIDUAL pre-PROMOTE:** no bloquea merge ni `published` en repo; sí bloquea promoción a producción (ADR-0025 / Fase 8).
- [ ]  **RESIDUAL:** preview MITL + firma del decisor (ADR-0025 / DEC-ROADMAP-03).

**Entregable:** información legal coherente con la operación real del sitio.

**Criterio de salida:**

- No hay política genérica desconectada de las tecnologías reales.
- Todos los tratamientos de datos implementados están reflejados.
- El contacto y las cookies cumplen el flujo definido.
- **Residual explícito:** asesoría externa antes de `PROMOTE` a producción.

---

# 9.z. Fase 7.z — Residuales y pipelines pre-hardening

**Depende de:** Fases 5, 6 y 7 (código en `main`; firma MITL sigue en esas fichas).

**Objetivo:** cerrar residuales documentales/operativos y pipelines que no son hardening de producto, antes de (o en paralelo a) P8-1…P8-6.

**Traza:** DEC-GO-01…12 (16-08-2026) · ADR-0015 · ADR-0025 · AGENTS §8 · ARCHITECTURE §3 · ficha Notion 7.z.

**Tamaño relativo:** M (~6 h).

**Calendario:** dom 16 – vie 21 ago 2026.

**Estado (16-08-2026):** en curso. **No** firma el cierre de Fases 5–7 (sigue MITL + decisor).

**Tareas:**

- [x]  **P7z-1** `docs/quality-gates.md` — resume gates de merge; fuente AGENTS §8 (no relaja).
- [x]  **P7z-2** `docs/testing-strategy.md` — capas unit / integración / E2E; mock SMTP en CI.
- [x]  **P7z-3** Smoke SMTP en pipeline (workflow_dispatch + runbook; gate go-live, no cada PR).
- [x]  **P7z-4** Versionado/tag automático desde CI + ADR-0026 (versionado ≠ `PROMOTE`; ADR-0025 intacto).
- [x]  **P7z-5** Dominio `alexendros.dev` — **DESVIACIÓN (16-08-2026):** `get_project` del proyecto Vercel `nuevowebsite-alexendrosdev` (`prj_cZGp4fGW2WG9mAlkVWjNQIXwKjYt`) solo lista `nuevowebsite-alexendrosdev-alexendros-team.vercel.app` y `nuevowebsite-alexendrosdev-git-main-alexendros-team.vercel.app`. **No** aparece `alexendros.dev`. DEC-GO-11 lo da por conectado; verificación técnica falla. **v1.0 PUEDE publicarse en `*.vercel.app`** hasta que el decisor añada el dominio (y `www` si aplica) en el panel Vercel de este proyecto. `NEXT_PUBLIC_SITE_URL=https://alexendros.dev` en sync-env sigue siendo URL canónica de contenido/SEO; no implica DNS ligado.
- [ ]  **P7z-6** Desviación ADR-0015: asesoría externa post-v1.0; no bloquea `PROMOTE` (DEC-GO-03).
- [ ]  **P7z-7** `CONTRIBUTING.md` + plantillas — **BLOQUEADA** (batería 9.3 abierta).
- [ ]  **P7z-8** `SECURITY.md` — **BLOQUEADA** (batería 10.3 abierta).

**Entregable:** docs de calidad/tests, smoke go-live, tag automático sin auto-PROMOTE, dominio verificado o desviado, ADR-0015 alineado.

**Criterio de salida:**

- Unidades P7z-1…P7z-6 cerradas en repo (PR fusionados).
- P7z-7/8 solo tras respuesta del decisor a baterías 9.3 y 10.3.
- Ningún umbral de AGENTS §8 relajado; ningún auto-`PROMOTE`.

---

# 10. Fase 8 — Hardening de calidad y lanzamiento

**Depende de: Fase 5**, **Fase 6** y **Fase 7**

**Objetivo:** preparar una primera publicación estable y verificable.

**Traza:** OBJ-005, OBJ-006, OBJ-008; Definition of Done (SPECS §11); ADR-0013.

**Tamaño relativo:** M (~10 h).

**Calendario:** sáb 22 – lun 24 ago 2026. Etiqueta v1.0 el lun 24. *(Organización Notion adelantada 16-08; unidades P8-1…P8-6 en ficha de fase.)*

**Estado (16-08-2026):** fase activa. Código de Fases 5–7 en `main`; hardening pendiente.

**Tareas:**

- [ ]  **P8-1** Crear checklist de publicación y rollback (`docs/release-checklist.md`; ARCHITECTURE §14).
- [ ]  **P8-2** Auditoría manual de accesibilidad (AA global; AAA en cuerpo de texto largo; complementa axe-core, OBJ-006).
- [ ]  **P8-2** Auditoría de navegación por teclado (NFR-A11Y-001/002).
- [ ]  **P8-2** Auditoría de contraste (NFR-A11Y-003).
- [ ]  **P8-5** Pruebas E2E de rutas y formularios críticos (OBJ-002, OBJ-003, OBJ-007).
- [ ]  **P8-3** Revisión de rendimiento contra OBJ-005: Lighthouse ≥90 en las cuatro categorías en móvil, LCP <2,5 s, CLS <0,1, INP <200 ms (Lighthouse CI **local** tras `pnpm build`; ADR-0025).
- [ ]  **P8-3** Revisión de imágenes (`next/image`, AVIF/WebP, self-hosted; ARCHITECTURE §6), fuentes y scripts de terceros.
- [ ]  **P8-4** Revisión de SEO: títulos, descripciones, canonical, sitemap, robots, OG y enlaces.
- [ ]  **P8-4** Revisión de seguridad: headers, secretos, endpoints y dependencias (NFR-SEC-001–006; `SMTP_TOKEN` exclusivo de servidor).
- [ ]  **P8-4** Revisión de errores y observabilidad con logs y dashboards de Vercel (P0; ADR-0017).
- [ ]  **P8-5** Revisión de responsive en dispositivos representativos.
- [ ]  **P8-5** Revisión de contenido, enlaces y ortografía.
- [x]  Configuración de redirecciones desde dominio o rutas anteriores. — **Resuelto:** no aplica, lanzamiento limpio (ADR-0013); tras el lanzamiento se revisan los 404 en los logs de plataforma.
- [ ]  **P8-6** Preview MITL Fases 5–7 → firmas; asesoría legal; smoke SMTP; `Deploy fase` + `PROMOTE`; etiquetar versión inicial (v1.0). — **Solo decisor (ADR-0025).**

**Entregable:** versión 1.0 lista para producción.

**Criterio de salida:**

- Todos los requisitos **P0** aprobados.
- CI verde.
- No existen incidencias críticas abiertas.
- Se han probado formularios y rutas críticas en producción o entorno equivalente.
- Documentación, release checklist y secretos están actualizados.

---

# 11. Fase 9 — Mejoras posteriores priorizadas

**Depende de:** — (posterior al lanzamiento)

<aside>
ℹ️

Cada bloque P1 se activa solo con su disparador cumplido y su ADR registrado (ADR-0006). Los tres disparadores fueron ratificados el 13-08-2026 (DEC-ROADMAP-05).

</aside>

## Bloque P1: newsletter

- **Restricción registrada:** Proton SMTP submission no cubre envíos masivos; requiere ADR sustituto de ADR-0011 (proveedor, doble opt-in, baja, privacidad).
- **Disparador (ratificado):** existencia de contenido periódico real que justifique el envío.
- [ ]  Decidir proveedor, consentimiento, doble opt-in, baja, privacidad, endpoint, manejo de errores y analítica.
- [ ]  Implementar solo tras ADR y especificación.

## Bloque P1: analítica, monitorización y observabilidad

- **Marco decidido:** analítica con cookies y banner de consentimiento previo que bloquee los scripts hasta la aceptación; publicar política de cookies (`/cookies`) al activarla (ADR-0010).
- **Disparador (ratificado):** primera campaña de captación activa o necesidad de medir la conversión del formulario.
- [ ]  Elegir herramienta de analítica.
- [ ]  Integrar gestor de consentimiento y política de cookies.
- [ ]  Documentar eventos y retención.
- [ ]  Implementar degradación sin bloqueo (NFR-PERF-005).
- [ ]  Evaluar Sentry free tier para monitorización de errores mediante ADR propio (ADR-0017).

## Bloque P1: detalle ampliado de servicios y casos de estudio

- **Alcance:** `/servicios/[slug]` (SPECS §6.3) y `/proyectos/[slug]` (SPECS §6.5), con ProjectMeta, galerías, metadata individual y pruebas de rutas dinámicas y slugs inexistentes (trasladado desde la Fase 6).
- **Requisito técnico:** incorporación de MDX mediante ADR propio (ADR-0018).
- **Disparador (ratificado):** contenido redactado suficiente para ≥2 casos de estudio completos.
- [ ]  Añadir páginas individuales cuando exista contenido suficiente.

## Bloque P2: CMS

- **Corrección de prioridad:** el CMS es **P2** según la matriz de SPECS §9, no P1.
- [ ]  Evaluar cuando el mantenimiento editorial en Git resulte insuficiente (p. ej. incorporación de un editor no técnico; ADR-0003).
- [ ]  Migrar mediante adaptador sin alterar componentes (los esquemas Zod se conservan como contrato; ADR-0018).

## Bloque P2: pagos o checkout

<aside>
🚫

- Requiere definición de producto, condiciones contractuales, fiscalidad, términos, proveedor, webhooks, idempotencia, soporte y políticas de reembolso.
- No debe reutilizarse el flujo actual de checkout sin una auditoría funcional, jurídica y técnica.
</aside>

## Bloque P2: multiidioma

- Requiere decisión de idiomas, contenido, estrategia de URLs, traducción, SEO internacional y mantenimiento.
- Requiere ADR sustituto de ADR-0014 (el MVP es español único); se activará solo con demanda internacional verificable.

## Bloque P2: blog

- Requiere estrategia editorial, modelo de contenido, periodicidad y plan de mantenimiento.

---

# 12. Decisiones abiertas (batería ROADMAP)

<aside>
⚠️

Batería 6.3 del [Plan de verificación y desarrollo de documentos pendientes — Baterías de decisión](https://app.notion.com/p/Plan-de-verificaci-n-y-desarrollo-de-documentos-pendientes-Bater-as-de-decisi-n-4a063a3c9cea43da853f7630458401f6?pvs=21). **Estado (13-08-2026):** 6 de 6 resueltas. Documento **Aprobado**.

</aside>

| ID | Decisión pendiente | Afecta a | Estado |
| --- | --- | --- | --- |
| DEC-ROADMAP-01 | Capacidad disponible (horas/semana) y fecha objetivo del MVP. | Tamaños relativos y calendario de todas las fases | **Resuelta (13-08-2026):** 50 h/semana; v1.0 el 24-08-2026. Calendario en §1.1. |
| DEC-ROADMAP-02 | ¿Hito intermedio publicable (landing mínima) antes del MVP completo? | Fases 3–5 | **Resuelta (13-08-2026):** sí; landing mínima publicable al cierre de la Fase 5. |
| DEC-ROADMAP-03 | Quién firma el criterio de salida de cada fase y dónde se registra. | Todas las fases | **Resuelta (13-08-2026):** checklist en la épica de GitHub, firmada por el decisor único (Convenciones de DECISIONS.md). |
| DEC-ROADMAP-04 | Fase 4 en paralelo parcial con Fases 2–3 o secuencial estricto. | Fases 2–4 | **Resuelta (13-08-2026):** paralelo parcial, como recoge la Fase 4. |
| DEC-ROADMAP-05 | Disparadores objetivos de los bloques P1 (newsletter, analítica, casos de estudio). | Fase 9 | **Resuelta (13-08-2026):** ratificados los tres disparadores anotados en la Fase 9. |
| DEC-ROADMAP-06 | Fecha límite externa por hosting o dominio del sitio anterior. | Calendario | **Resuelta (13-08-2026):** sin condicionante externo; lanzamiento limpio (ADR-0013). |

**Verificaciones §6.1 (cerradas 13-08-2026):**

- [x]  Cada fase traza requisitos de SPECS (campo Traza).
- [x]  Dependencias acíclicas: 0 → 1 → 2 → 3; 4 parte de 1 y solapa 2–3; 5 depende de 2–4; 6 de 2–4; 7 de 5; 8 de 5–7; 9 posterior.
- [x]  Cada fase tiene un entregable y un criterio de salida verificable.
- [x]  Ningún trabajo P1/P2 se adelanta en Fases 0–8 (`/proyectos/[slug]` trasladado a Fase 9).

**Desarrollos pendientes tras el cierre:**

- [ ]  Convertir cada fase en épica/issues de GitHub al crear el repositorio (Fase 0). Cada issue DEBE usar la ficha de [AGENTS.md](./AGENTS.md) §3, no un título suelto.
- [x]  Asignar calendario a las fases (DEC-ROADMAP-01).