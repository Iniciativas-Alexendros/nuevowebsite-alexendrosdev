# DECISIONS.md

Abrir cuando: Por qué se eligió una solución; antes de un proveedor, secreto o cambio estructural.
Aprobado: 13 de agosto de 2026
Audiencia: Dirección, Agente
Autoridad: Derivada
Clase: Complementario
Días para revisión: 90
En repo: Sí
Estado: Aprobado
Orden: 4
Propósito: Conserva las decisiones relevantes (ADR).
Reforma: ADR + decisor
Responsable: Alexendros
Revisión: 13 de noviembre de 2026
Rol: Decisiones
Ruta: ./DECISIONS.md

<aside>
📌

**Propósito**

[DECISIONS.md](./DECISIONS.md) conservará decisiones que afecten de forma significativa al producto, código, seguridad, datos, proveedores, coste de mantenimiento o experiencia de usuario. Su finalidad es evitar discusiones repetidas y explicar por qué se eligió una solución.

</aside>

# Convenciones

<aside>
⚠️

**Convenciones**

- Cada decisión tendrá identificador secuencial **ADR-XXXX**.
- Cada decisión debe tener estado: propuesta, aceptada, sustituida, rechazada o retirada.
- Cada decisión debe incluir fecha.
- Una decisión aceptada no se modifica retrospectivamente: si cambia, se crea otra que la sustituya.
- Las decisiones pequeñas y reversibles no requieren ADR.
- Las decisiones que incorporen un proveedor, secreto, datos personales, coste recurrente o cambio de arquitectura sí requieren ADR.
- **Decisores (13-08-2026):** Alexendros como decisor único, con contraste previo del asistente IA como revisor.
- **Cadencia de revisión (13-08-2026):** 3 meses desde la aceptación, salvo que el ADR fije una fecha o evento específico.

</aside>

---

# Plantilla

<details>
<summary>**ADR-0001** — [Título breve]</summary>

- Estado: propuesta | aceptada | sustituida | rechazada | retirada
- Fecha: YYYY-MM-DD
- Decisores: [personas o rol]
- Relacionado con: [SPECS, ROADMAP, PR, issue]
- Contexto:
	- [Problema y restricciones]
- Decisión:
	- [Qué se adopta]
- Alternativas consideradas:
	- [Alternativa y motivo de descarte]
- Consecuencias positivas:
	- [Beneficios]
- Consecuencias negativas:
	- [Costes, riesgos y deuda]
- Plan de implementación:
	- [Pasos]
- Plan de reversión:
	- [Cómo se deshace si es necesario]
- Seguridad y privacidad:
	- [Impacto, secretos y datos]
- Fecha de revisión:
	- [Si aplica]

</details>

---

# Decisiones iniciales propuestas

- **ADR-0001** — Next.js App Router como framework principal. *(aceptada, 13-08-2026)*
- **ADR-0002** — TypeScript estricto y pnpm como base de desarrollo. *(aceptada, 13-08-2026)*
- **ADR-0003** — Contenido editorial versionado en Git para MVP. *(aceptada, 13-08-2026)*
- **ADR-0004** — Tailwind CSS, tokens CSS OKLCH y shadcn/ui como base del design system. *(aceptada, 13-08-2026)*
- **ADR-0005** — Server Components por defecto y Client Components solo para interacción necesaria. *(aceptada, 13-08-2026)*
- **ADR-0006** — Ausencia inicial de base de datos, autenticación y CMS. *(aceptada, 13-08-2026)*
- **ADR-0007** — Formularios de contacto como primera integración externa prioritaria. *(aceptada, 13-08-2026)*
- **ADR-0008** — Separación entre variables públicas, privadas, build-time y runtime. *(aceptada, 13-08-2026)*
- **ADR-0009** — Estrategia de pruebas: unitarias, integración y E2E crítica. *(aceptada, 13-08-2026)*
- **ADR-0010** — Política de analítica y consentimiento. *(aceptada, 13-08-2026)*
- **ADR-0011** — Política de proveedores de email/newsletter. *(aceptada, 13-08-2026: Proton Mail para el formulario)*
- **ADR-0012** — Decisión de pagos/checkout, solo si se aprueba funcionalmente.
- **ADR-0013** — Política de redirecciones y migración desde el sitio anterior. *(aceptada, 13-08-2026)*
- **ADR-0014** — Idiomas del sitio. *(aceptada, 13-08-2026)*
- **ADR-0015** — Marco legal del prestador y páginas legales. *(aceptada, 13-08-2026)*
- **ADR-0016** — Identidad visual: tema, tipografía, iconografía y objetivo de accesibilidad. *(aceptada, 13-08-2026)*
- **ADR-0017** — Vercel como plataforma de despliegue, con runtime Node.js. *(aceptada, 13-08-2026)* — cláusula «repositorio privado» sustituida por ADR-0020 (14-08-2026).
- **ADR-0018** — Formato fuente y validación del contenido editorial. *(aceptada, 13-08-2026)*
- **ADR-0019** — Implementación del sitio por agente de código. *(aceptada, 13-08-2026)*
- **ADR-0020** — Repositorio público durante el desarrollo. *(aceptada, 14-08-2026)*
- **ADR-0021** — Gestión del entorno vía GitHub (secrets y variables), no en archivos. *(aceptada, 14-08-2026)*
- **ADR-0022** — Etiquetas temáticas en pull requests. *(aceptada, 14-08-2026)*
- **ADR-0023** — Autorebase en cadena de pull requests apiladas, sin auto-merge. *(aceptada, 14-08-2026)*
- **ADR-0024** — Excepción puntual al gate de CI por rate limit de Vercel (14-08-2026). *(aceptada, 14-08-2026)*
- **ADR-0025** — Despliegue Vercel por cierre de fase (preview MITL → producción confirmada). *(aceptada, 15-08-2026)* — sustituye las previews automáticas por PR de ADR-0017.

---

# Decisiones registradas

<details>
<summary>**ADR-0001** — Next.js App Router como framework principal</summary>

- Estado: aceptada
- Fecha: 2026-08-13
- Decisores: Alexendros (con contraste del asistente IA)
- Relacionado con: SPECS §3, OBJ-004, ARCHITECTURE
- Contexto:
	- El sitio es esencialmente estático con un único punto dinámico (endpoint de contacto) y existe experiencia previa del equipo en Next.js.
- Decisión:
	- Next.js con App Router como framework único del proyecto.
- Alternativas consideradas:
	- Astro: excelente para estático, descartado por continuidad de stack y por integrar el endpoint sin servicio aparte; reconsiderable vía ADR sustituto.
	- Remix: menor experiencia previa y sin ventaja clara para este alcance.
- Consecuencias positivas:
	- Ecosistema maduro, SSG/ISR nativos, experiencia previa reutilizable.
- Consecuencias negativas:
	- Peso base del framework superior a un generador estático puro; vigilar acoplamientos específicos de plataforma.
- Plan de implementación:
	- Scaffold en Fase 1 con App Router y rutas P0.
- Plan de reversión:
	- Migración costosa; requeriría ADR sustituto con plan propio.
- Seguridad y privacidad:
	- Sin impacto directo.
- Fecha de revisión:
	- 3 meses (cadencia por defecto).

</details>

<details>
<summary>**ADR-0002** — TypeScript estricto y pnpm como base de desarrollo</summary>

- Estado: aceptada
- Fecha: 2026-08-13
- Decisores: Alexendros (con contraste del asistente IA)
- Relacionado con: AGENTS.md (Working Agreement), DoD de SPECS §10
- Contexto:
	- Se necesita una base de desarrollo determinista y verificable en CI.
- Decisión:
	- TypeScript en modo estricto (`strict: true`, sin `any` implícito) y pnpm como gestor de paquetes único.
- Alternativas consideradas:
	- JavaScript con JSDoc: menor garantía de tipos en un proyecto asistido por IA.
	- npm/yarn/bun: pnpm ofrece instalaciones deterministas y eficientes ya conocidas por el equipo.
- Consecuencias positivas:
	- Errores detectados en compilación; builds reproducibles.
- Consecuencias negativas:
	- Fricción inicial en tipados complejos.
- Plan de implementación:
	- `tsconfig` estricto y `packageManager` fijado desde el primer commit; typecheck como gate de CI.
- Plan de reversión:
	- Relajar flags concretos mediante ADR sustituto justificado.
- Seguridad y privacidad:
	- Sin impacto directo.
- Fecha de revisión:
	- 3 meses (cadencia por defecto).

</details>

<details>
<summary>**ADR-0003** — Contenido editorial versionado en Git para el MVP</summary>

- Estado: aceptada
- Fecha: 2026-08-13
- Decisores: Alexendros (con contraste del asistente IA)
- Relacionado con: CONTENT.md, ADR-0006, batería DECISIONS pregunta 2
- Contexto:
	- No existe editor no técnico; el propietario domina Git y prioriza trazabilidad y mínima infraestructura.
- Decisión:
	- Todo el contenido editorial vive versionado en el repositorio, tipado y validado en build; sin CMS en el MVP.
- Alternativas consideradas:
	- CMS headless (p. ej. Payload, usado en website-frontvalencia): descartado por añadir servicio, persistencia y coste operativo sin necesidad funcional actual.
- Consecuencias positivas:
	- Trazabilidad completa, revisión por PR, cero infraestructura adicional.
- Consecuencias negativas:
	- Editar contenido exige flujo Git; el flujo Borrador→Publicado debe resolverse con mecanismo técnico en CONTENT.md.
- Plan de implementación:
	- Formato y esquemas según CONTENT.md; validación en build como gate de CI.
- Plan de reversión:
	- Incorporar CMS mediante ADR sustituto si aparece un editor no técnico.
- Seguridad y privacidad:
	- Sin datos personales en contenido; sin secretos en el repositorio.
- Fecha de revisión:
	- 3 meses (cadencia por defecto).

</details>

<details>
<summary>**ADR-0004** — Tailwind CSS, tokens OKLCH y shadcn/ui como base del design system</summary>

- Estado: aceptada
- Fecha: 2026-08-13
- Decisores: Alexendros (con contraste del asistente IA)
- Relacionado con: DESIGN.md, REQ-UI-*, NFR de accesibilidad
- Contexto:
	- Se necesita un design system rápido de ejecutar con accesibilidad de base y personalización controlada.
- Decisión:
	- Tailwind CSS + tokens semánticos CSS en OKLCH + shadcn/ui, con personalización exclusivamente vía tokens.
- Alternativas consideradas:
	- CSS Modules puro: más lento sin beneficio proporcional.
	- Kits de UI cerrados: menor control de marca y de accesibilidad.
- Consecuencias positivas:
	- Velocidad, coherencia por tokens, componentes accesibles de partida.
- Consecuencias negativas:
	- Requiere disciplina anti estilos arbitrarios (regla de AGENTS.md).
- Plan de implementación:
	- Tokens claro/oscuro definidos en DESIGN.md antes de construir componentes.
- Plan de reversión:
	- Coste medio; los tokens semánticos amortiguan una migración de utilidades.
- Seguridad y privacidad:
	- Sin impacto.
- Fecha de revisión:
	- 3 meses (cadencia por defecto).

</details>

<details>
<summary>**ADR-0005** — Server Components por defecto</summary>

- Estado: aceptada
- Fecha: 2026-08-13
- Decisores: Alexendros (con contraste del asistente IA)
- Relacionado con: OBJ-004 (Core Web Vitals), AGENTS.md
- Contexto:
	- Los objetivos de rendimiento exigen minimizar JavaScript en cliente.
- Decisión:
	- Server Components por defecto; `"use client"` solo con necesidad de interacción demostrable.
- Alternativas consideradas:
	- Client Components generalizados: descartado por coste en LCP/INP.
- Consecuencias positivas:
	- Menos JS enviado, mejores Core Web Vitals.
- Consecuencias negativas:
	- Exige disciplina en la frontera server/client (verificable en revisión de PR).
- Plan de implementación:
	- Frontera declarada por tipo de módulo en ARCHITECTURE.md.
- Plan de reversión:
	- Puntual por componente, sin ADR salvo cambio de política general.
- Seguridad y privacidad:
	- Evita exponer lógica y variables de servidor al cliente.
- Fecha de revisión:
	- 3 meses (cadencia por defecto).

</details>

<details>
<summary>**ADR-0006** — Sin base de datos, autenticación ni CMS iniciales</summary>

- Estado: aceptada
- Fecha: 2026-08-13
- Decisores: Alexendros (con contraste del asistente IA)
- Relacionado con: CONSTITUTION.md (superficie y dependencias), ADR-0003, ADR-0012
- Contexto:
	- El repositorio anterior acumuló capacidades (Prisma, Supabase, checkout, newsletter) sin necesidad funcional documentada.
- Decisión:
	- El MVP no incluye base de datos, autenticación, CMS ni checkout. Cada capacidad futura requiere ADR con necesidad, propietario, estrategia de fallo y requisito en SPECS.
- Alternativas consideradas:
	- Heredar el stack anterior: descartado por deuda y superficie de ataque innecesaria.
- Consecuencias positivas:
	- Superficie mínima, coste cero, despliegue simple.
- Consecuencias negativas:
	- Toda ampliación exige decisión formal (efecto intencional).
- Plan de implementación:
	- Verificación 4.1 del plan: sin carpetas ni dependencias anticipadas.
- Plan de reversión:
	- No aplica; las capacidades se añaden vía ADR.
- Seguridad y privacidad:
	- Sin persistencia de datos personales en el MVP más allá del envío de contacto.
- Fecha de revisión:
	- 3 meses (cadencia por defecto).

</details>

<details>
<summary>**ADR-0008** — Separación de variables públicas, privadas, build-time y runtime</summary>

- Estado: aceptada
- Fecha: 2026-08-13
- Decisores: Alexendros (con contraste del asistente IA)
- Relacionado con: NFR-SEC-002, ARCHITECTURE (tabla de variables), ADR-0011
- Contexto:
	- Los documentos y el repositorio no deben contener secretos; el token SMTP de Proton será el primer secreto real.
- Decisión:
	- Clasificación obligatoria de toda variable (pública/privada × build-time/runtime), `.env.example` documentado y secretos exclusivamente en entorno servidor.
- Alternativas consideradas:
	- Gestión informal: descartada; origen de fugas habituales.
- Consecuencias positivas:
	- Auditoría simple; cada variable con propietario y condición de existencia.
- Consecuencias negativas:
	- Burocracia leve al añadir variables.
- Plan de implementación:
	- Tabla de variables en ARCHITECTURE.md; validación de entorno en arranque.
- Plan de reversión:
	- No aplica.
- Seguridad y privacidad:
	- Regla directa de NFR-SEC-002; rotación de secretos documentada.
- Fecha de revisión:
	- 3 meses (cadencia por defecto).

</details>

<details>
<summary>**ADR-0009** — Estrategia de pruebas: unitarias, integración y E2E crítica</summary>

- Estado: aceptada
- Fecha: 2026-08-13
- Decisores: Alexendros (con contraste del asistente IA)
- Relacionado con: DoD de SPECS §10, OBJ-005, OBJ-007, AGENTS.md
- Contexto:
	- El DoD exige pruebas ejecutables antes de declarar tareas terminadas.
- Decisión:
	- Unitarias para `lib/` y validaciones; integración para el endpoint de contacto; E2E crítica para navegación y envío de formulario; axe-core en CI para accesibilidad (OBJ-005).
- Alternativas consideradas:
	- Solo E2E: lenta y frágil como única capa.
	- Sin E2E: no verificaría OBJ-007 de extremo a extremo.
- Consecuencias positivas:
	- Cobertura proporcional al riesgo con mantenimiento contenido.
- Consecuencias negativas:
	- Coste de mantenimiento de suites; los umbrales de cobertura se fijarán en AGENTS.md.
- Plan de implementación:
	- Gates de CI: typecheck, lint, test, build, axe-core.
- Plan de reversión:
	- Ajustar capas mediante ADR sustituto.
- Seguridad y privacidad:
	- Tests sin datos personales reales.
- Fecha de revisión:
	- 3 meses (cadencia por defecto).

</details>

<details>
<summary>**ADR-0007** — Formulario de contacto + [Cal.com](https://cal.com) como canal de conversión</summary>

- Estado: aceptada
- Fecha: 2026-08-13
- Decisores: Alexendros
- Relacionado con: SPECS §6.8, REQ-FORM-CONTACT-001, OBJ-007, DEC-SPECS-01 y DEC-SPECS-06
- Contexto:
	- La conversión principal del sitio es el formulario de contacto; se necesita además una alternativa de agenda de llamada con baja fricción.
- Decisión:
	- Formulario con esquema de validación compartido entre cliente y servidor, honeypot y rate limit, según REQ-FORM-CONTACT-001.
	- Enlace a [Cal.com](https://cal.com) como alternativa de llamada desde el MVP.
	- El proveedor de envío de email queda pendiente y se resolverá en ADR propio antes de la implementación del endpoint.
- Alternativas consideradas:
	- Solo email directo: más fricción, expone la dirección al spam y no estructura datos.
	- Solo agenda de llamada: excluye consultas asíncronas y solicitudes con documentación.
- Consecuencias positivas:
	- Datos estructurados, protección antiabuso y verificación medible (OBJ-007).
- Consecuencias negativas:
	- Único punto dinámico del sitio; dependencia futura de un proveedor de email; la integración de [Cal.com](https://cal.com) puede añadir script de terceros (evaluar contra NFR-PERF-005).
- Plan de implementación:
	- Endpoint de contacto con esquema compartido, honeypot, rate limit, tests de integración y enlace a agenda.
- Plan de reversión:
	- Sustituir el formulario por email directo y retirar el enlace de agenda sin afectar a la interfaz pública (REQ-GLOBAL-010).
- Seguridad y privacidad:
	- Datos personales mínimos, consentimiento informado, sin PII innecesaria en logs (NFR-SEC-006).
- Fecha de revisión:
	- Al decidir el proveedor de email. — Resuelta el 13-08-2026 mediante ADR-0011 (Proton Mail).

</details>

<details>
<summary>**ADR-0011** — Proton Mail como proveedor de envío del formulario de contacto</summary>

- Estado: aceptada
- Fecha: 2026-08-13
- Decisores: Alexendros
- Relacionado con: ADR-0007, SPECS §6.8, NFR-SEC-002, NFR-SEC-006
- Contexto:
	- El endpoint de contacto necesita un proveedor de envío de email. El correo profesional ya opera sobre Proton, lo que evita incorporar un proveedor nuevo.
- Decisión:
	- Proton Mail como proveedor de envío, mediante SMTP submission con token dedicado sobre el dominio propio.
- Alternativas consideradas:
	- Resend o Amazon SES: descartadas para no añadir un proveedor adicional y por coherencia con la orientación de privacidad del proyecto.
	- SMTP propio autogestionado: descartado por coste operativo y reputación de entrega.
- Consecuencias positivas:
	- Sin proveedor nuevo ni coste adicional; alineado con la identidad de privacidad; un único punto de gestión del correo.
- Consecuencias negativas:
	- SMTP submission de Proton requiere plan de pago con dominio propio y no ofrece API transaccional ni webhooks de entrega.
	- Límites de envío ajustados: suficientes para un formulario de contacto, no para newsletter (que requerirá ADR sustituto si se aprueba).
	- Proton Mail Bridge no es apto para entorno servidor; la integración debe ser SMTP directo.
- Plan de implementación:
	- Token SMTP dedicado como secreto exclusivo de servidor (NFR-SEC-002); adaptador de envío sustituible (REQ-GLOBAL-010); timeout y mensaje de error controlado ante fallo del proveedor (criterio 6.8).
- Plan de reversión:
	- Sustituir el adaptador por otro proveedor sin cambios en la interfaz pública.
- Seguridad y privacidad:
	- Token solo en entorno seguro de servidor; sin PII innecesaria en logs; revocación inmediata del token si se compromete.
- Fecha de revisión:
	- Si el volumen de envíos supera los límites de SMTP submission o se aprueba la newsletter.

</details>

<details>
<summary>**ADR-0010** — Analítica con cookies y consentimiento previo</summary>

- Estado: aceptada
- Fecha: 2026-08-13
- Decisores: Alexendros
- Relacionado con: SPECS §6.9, matriz de prioridades (analítica P1), DEC-SPECS-05
- Contexto:
	- Se aprueba analítica para el bloque P1 y se acepta que use cookies.
- Decisión:
	- El MVP se lanza sin analítica ni cookies no esenciales, sin página de cookies ni banner.
	- Al activar la analítica en P1 se publicarán la política de cookies y un banner de consentimiento previo que bloquee la carga de scripts hasta la aceptación.
- Alternativas consideradas:
	- Analítica sin cookies (Plausible/Umami): descartada por decisión explícita; reconsiderable mediante ADR sustituto.
- Consecuencias positivas:
	- Métricas completas de comportamiento y conversión.
- Consecuencias negativas:
	- Fricción del banner, obligaciones RGPD/LSSI adicionales y script de terceros con impacto en rendimiento.
- Plan de implementación:
	- Elegir herramienta al activar P1; integrar gestor de consentimiento; actualizar políticas.
- Plan de reversión:
	- Desactivar la analítica y retirar banner y política de cookies.
- Seguridad y privacidad:
	- Ningún script de analítica se carga sin consentimiento previo.
- Fecha de revisión:
	- Al activar el bloque P1.

</details>

<details>
<summary>**ADR-0014** — Idiomas: español único en el MVP</summary>

- Estado: aceptada
- Fecha: 2026-08-13
- Decisores: Alexendros
- Relacionado con: SPECS §3, DEC-SPECS-07
- Contexto:
	- El multiidioma está fuera de alcance inicial salvo decisión ADR.
- Decisión:
	- El MVP se publica solo en español. La incorporación del inglés requerirá un ADR sustituto que defina contenido, URLs y SEO internacional.
- Alternativas consideradas:
	- Solo inglés: descartado, la audiencia inicial es local.
	- Bilingüe desde el MVP: descartado, duplica el coste editorial sin contenido traducido disponible.
- Consecuencias positivas:
	- Menor coste editorial y lanzamiento más rápido.
- Consecuencias negativas:
	- Alcance limitado para clientes internacionales hasta el ADR sustituto.
- Plan de implementación:
	- Contenido y metadata con `lang="es"`; sin infraestructura i18n anticipada.
- Plan de reversión:
	- No aplica; la ampliación se gestiona mediante ADR sustituto.
- Seguridad y privacidad:
	- Sin impacto.
- Fecha de revisión:
	- Cuando exista demanda internacional verificable.

</details>

<details>
<summary>**ADR-0015** — Marco legal del prestador y páginas legales</summary>

- Estado: aceptada
- Fecha: 2026-08-13
- Decisores: Alexendros
- Relacionado con: SPECS §6.9, DEC-SPECS-05
- Contexto:
	- La actividad se ejerce sin alta de autónomo hasta que la facturación supere el SMI anual.
- Decisión:
	- Publicar aviso legal (`/aviso-legal`) y política de privacidad (`/privacidad`) que reflejen la situación real del prestador; sin página de cookies en el MVP (véase ADR-0010).
	- Actualización obligatoria del aviso legal al formalizar el alta.
- Alternativas consideradas:
	- Omitir páginas legales hasta el alta: descartado; el formulario ya trata datos personales y la LSSI-CE aplica a la actividad económica efectiva.
- Consecuencias positivas:
	- Cumplimiento proporcional desde el lanzamiento.
- Consecuencias negativas:
	- El umbral del SMI es un criterio práctico habitual, no una exención normativa expresa; existe riesgo regulatorio residual que debe validarse con asesoría antes de producción.
- Plan de implementación:
	- Redactar ambas páginas, enlazarlas desde el footer y revisarlas antes de producción (criterio 6.9).
- Plan de reversión:
	- Actualizar o sustituir los textos legales; no hay dependencia técnica.
- Seguridad y privacidad:
	- Registro mínimo de datos del formulario conforme a la política publicada.
- Fecha de revisión:
	- Al formalizar el alta de autónomo o antes del paso a producción.

</details>

<details>
<summary>**ADR-0013** — Lanzamiento limpio sin redirecciones desde el sitio anterior</summary>

- Estado: aceptada
- Fecha: 2026-08-13
- Decisores: Alexendros (con contraste del asistente IA)
- Relacionado con: REQ-PAGE-404-001, batería DECISIONS pregunta 5
- Contexto:
	- El propietario confirma que el dominio actual no tiene URLs indexadas relevantes que preservar.
- Decisión:
	- Lanzamiento limpio: sin tabla de redirecciones ni trabajo de migración SEO.
- Alternativas consideradas:
	- Auditoría previa con Search Console: innecesaria dada la confirmación del propietario.
- Consecuencias positivas:
	- Cero trabajo de migración; arranque SEO sin herencias.
- Consecuencias negativas:
	- El eventual tráfico residual aterrizará en 404; mitigado por la página 404 con enlaces sugeridos (REQ-PAGE-404-001).
- Plan de implementación:
	- Ninguna acción; mantener 404 útil.
- Plan de reversión:
	- Añadir redirects en configuración si se detectan URLs con tráfico real.
- Seguridad y privacidad:
	- Sin impacto.
- Fecha de revisión:
	- Tras el lanzamiento, revisar los 404 en logs de plataforma.

</details>

<details>
<summary>**ADR-0016** — Identidad visual: tema, tipografía, iconografía y accesibilidad</summary>

- Estado: aceptada
- Fecha: 2026-08-13
- Decisores: Alexendros (con contraste del asistente IA)
- Relacionado con: DESIGN.md, ADR-0004, batería DESIGN 3.3 del plan de verificación
- Contexto:
	- DESIGN.md tenía estructura de tokens sin identidad visual cerrada; la batería de decisión exigía fijar marca, tema, tipografía, tono, movimiento, iconografía y objetivo de accesibilidad.
- Decisión:
	- Marca desde cero; el logo se diseña como entregable propio (wordmark tipográfico provisional).
	- Tema claro/oscuro según preferencia del sistema (`prefers-color-scheme`).
	- Tipografía geométrica de licencia libre, self-hosted: Inter Variable (sans) + JetBrains Mono Variable (mono), ambas SIL OFL, vía `next/font/local`.
	- Tono visual sobrio corporativo de alto contraste; sin gradientes ni glow; estética terminal limitada a componentes específicos.
	- Microinteracciones breves con respeto a `prefers-reduced-motion`.
	- Lucide como set único de iconos; capturas reales de proyectos, sin fotografía personal en el MVP.
	- Objetivo WCAG 2.2 AA global con AAA (contraste ≥ 7:1) en cuerpo de texto largo.
- Alternativas consideradas:
	- Geist como sans: más técnica, descartada por el tono corporativo elegido.
	- Tema oscuro fijo: descartado; la preferencia del sistema respeta al usuario final.
	- AAA global: coste desproporcionado frente al beneficio; se limita al texto largo.
- Consecuencias positivas:
	- Identidad visual cerrada; DESIGN.md puede aprobarse; cero dependencia de terceros en fuentes e iconos.
- Consecuencias negativas:
	- El diseño del logo queda como tarea pendiente con wordmark provisional; AAA en texto largo restringe la paleta utilizable en `Prose`.
- Plan de implementación:
	- Valores OKLCH, escala tipográfica, breakpoints y grid registrados en DESIGN §§3–7, 10 y 12; validación de contraste antes de marcar la verificación 3.1.
- Plan de reversión:
	- Cambios de fuente, set de iconos o tema requieren ADR sustituto; el resto se ajusta vía tokens sin romper API de componentes.
- Seguridad y privacidad:
	- Self-hosting de fuentes evita fugas de datos a CDN de terceros.
- Fecha de revisión:
	- 3 meses (cadencia por defecto).

</details>

<details>
<summary>**ADR-0017** — Vercel como plataforma de despliegue, con runtime Node.js</summary>

- Estado: aceptada
- Fecha: 2026-08-13
- Decisores: Alexendros (con contraste del asistente IA)
- Relacionado con: ARCHITECTURE §2, §6 y §14, OBJ-008, batería ARCHITECTURE 4.3 del plan de verificación
- Contexto:
	- El sitio es SSG con un único endpoint dinámico (`POST /api/contact`, ADR-0007/0011). Se requieren previews por pull request y despliegue reproducible en menos de 10 minutos (OBJ-008), sin coste inicial.
- Decisión:
	- Vercel como plataforma de despliegue: runtime Node.js 22 (sin Edge).
	- Monitorización P0 con logs y dashboards de la propia plataforma; Sentry free tier como candidato para P1 mediante ADR propio.
	- Repositorio privado en GitHub hasta el lanzamiento; el repositorio anterior queda archivado en solo lectura. *(Cláusula sustituida el 14-08-2026 por ADR-0020 — repositorio público.)*
	- *(Cláusula «previews automáticas por PR y producción desde `main`» sustituida el 15-08-2026 por ADR-0025 — despliegue por cierre de fase.)*
- Alternativas consideradas:
	- Netlify: paridad de funciones sin ventaja diferencial y menor integración con Next.js.
	- Cloudflare Pages/Workers: runtime workerd con incompatibilidades para SMTP y APIs Node.
	- VPS propio: coste operativo y de seguridad desproporcionado para un sitio estático.
- Consecuencias positivas:
	- Despliegue sin configuración opaca, previews nativas por PR, coste cero en plan Hobby y compatibilidad total con App Router.
- Consecuencias negativas:
	- Riesgo de lock-in (mitigado evitando APIs propietarias fuera de `vercel.json`); el uso comercial sostenido puede exigir plan Pro.
- Plan de implementación:
	- Conectar el repositorio, fijar Node 22 y pnpm 10 (`.nvmrc`, `engines`, `packageManager`), configurar variables por entorno y proteger `main` con CI en verde.
- Plan de reversión:
	- Migrar a Netlify o VPS: el proyecto no usa APIs específicas de Vercel fuera de la configuración aislada.
- Seguridad y privacidad:
	- Secretos gestionados por entorno en la plataforma; `SMTP_TOKEN` exclusivo de servidor (NFR-SEC-002).
- Fecha de revisión:
	- 3 meses (cadencia por defecto), o antes si los límites del plan Hobby se alcanzan.

</details>

<details>
<summary>**ADR-0018** — Formato fuente y validación del contenido editorial</summary>

- Estado: aceptada
- Fecha: 2026-08-13
- Decisores: Alexendros (con contraste del asistente IA)
- Relacionado con: CONTENT.md §§9–12, ADR-0003, ARCHITECTURE §4.6, batería CONTENT 5.3 del plan de verificación
- Contexto:
	- ADR-0003 fijó contenido en Git sin CMS, pero faltaba concretar el formato fuente, la validación de esquemas y el mecanismo técnico del flujo editorial.
- Decisión:
	- TypeScript tipado en `src/content/` como único formato del MVP; MDX se incorporará solo con `/proyectos/[slug]` (P1) mediante ADR propio.
	- Esquemas Zod por entidad en `src/lib/validations/content/`, ejecutados en build: contenido inválido rompe el build.
	- Flujo editorial aplicado en código: enum `status`, selectores `getPublished*()`, sitemap y rutas derivados, test bloqueante en CI (CONTENT §9).
	- Metadata centralizada en `src/lib/seo`; OG images con plantilla generada (`opengraph-image.tsx`).
- Alternativas consideradas:
	- Todo MDX: sobrecoste de loaders para contenido mayoritariamente estructurado.
	- Mixto TS + MDX desde el MVP: complejidad anticipada sin textos largos en P0.
	- Solo tipos TS sin Zod: sin garantía en build frente a datos inválidos.
- Consecuencias positivas:
	- Contenido tipado y verificable en CI; migración futura a CMS sin romper el contrato de los componentes (ARCHITECTURE §4.6).
- Consecuencias negativas:
	- Editar contenido exige tocar código TS; los casos de estudio largos quedan condicionados al ADR de MDX.
- Plan de implementación:
	- Esquemas, selectores y test de no-publicación de borradores en la fase de contenido del ROADMAP, como gates de CI.
- Plan de reversión:
	- Introducir MDX o CMS mediante ADR sustituto; los esquemas Zod se conservan como contrato.
- Seguridad y privacidad:
	- Sin datos personales en el contenido; sin secretos en el repositorio.
- Fecha de revisión:
	- 3 meses (cadencia por defecto).

</details>

<details>
<summary>**ADR-0019** — Implementación del sitio por agente de código</summary>

- Estado: aceptada
- Fecha: 2026-08-13
- Decisores: Alexendros
- Relacionado con: AGENTS.md, ROADMAP §1.2, NFR-MAINT, NFR-SEC
- Contexto:
	- El sitio se desarrollará íntegramente con un agente de código. El cuello de botella pasa de teclear a revisar calidad, hechos y cumplimiento.
- Decisión:
	- Todo el código lo produce un agente bajo el contrato de AGENTS.md.
	- El humano dirige con fichas §3, revisa diffs, hace QA visual y firma fases. No implementa a mano salvo corrección puntual.
	- El agente no se auto-mergea, no declara fases cerradas y no introduce dependencias, secretos, rutas o esquemas sin confirmación.
- Alternativas consideradas:
	- Implementación manual: más lenta y peor encaje con el calendario del 24-08.
	- Agente autónomo con auto-merge: superficie de error y de secretos inaceptable.
- Consecuencias positivas:
	- Velocidad de implementación compatible con el MVP; instrucciones ejecutables y PRs pequeños.
- Consecuencias negativas:
	- Riesgo de deuda de calidad y alucinación de requisitos; se mitiga con CI, ficha §3, autonomía restringida y firma humana.
- Plan de implementación:
	- AGENTS.md como contrato; ROADMAP §1.2 como flujo; issues con ficha §3; ADR de cualquier excepción.
- Plan de reversión:
	- Volver a implementación manual no requiere cambio de arquitectura; sí actualizar AGENTS.md y este ADR.
- Seguridad y privacidad:
	- Prohibido pegar secretos o PII en el repo, el chat del agente o los logs. Revisión humana de diffs que toquen env, endpoint o legal.
- Fecha de revisión:
	- Al cerrar Fase 1 (primer scaffold real) y a los 3 meses.

</details>

<details>
<summary>**ADR-0020** — Repositorio público durante el desarrollo</summary>

- Estado: aceptada
- Fecha: 2026-08-14
- Decisores: Alexendros (con contraste del asistente IA)
- Relacionado con: ADR-0017 (sustituye parcialmente), ADR-0019, [AGENTS.md](./AGENTS.md)
- Contexto:
	- ADR-0017 fijó «repositorio privado en GitHub hasta el lanzamiento». Al conectar Vercel en plan Hobby, la integración Git rechazó repositorios privados de organización, lo que bloqueaba las previews por PR y el despliegue desde `main`.
- Decisión:
	- Repositorio público (`Iniciativas-Alexendros/nuevowebsite-alexendrosdev`) desde el 14-08-2026.
	- Queda sustituida únicamente la cláusula «privado hasta el lanzamiento» de ADR-0017; el resto de ADR-0017 (Vercel, runtime Node.js 22, sin Edge) permanece vigente.
- Alternativas consideradas:
	- Upgrade a Vercel Pro: descartado por coste recurrente sin necesidad funcional.
	- Mover el repositorio a cuenta personal: descartado; se prefiere mantener la organización.
	- Despliegue solo por CLI sin integración Git: descartado; pierde previews automáticas por PR (OBJ-008).
- Consecuencias positivas:
	- Preview por PR y producción desde `main` con plan Hobby, sin coste.
- Consecuencias negativas:
	- El código queda visible públicamente antes del lanzamiento; el contenido editorial (aún no redactado) no debe contener secretos ni PII (ya prohibido por NFR-SEC-002/006 y ADR-0008).
- Plan de implementación:
	- Repositorio ya público y conectado a Vercel; documentado en ARCHITECTURE §14, README y ROADMAP el 14-08-2026.
- Plan de reversión:
	- Volver a privado con `gh repo edit --visibility private` si se contrata Vercel Pro o se muda a cuenta personal.
- Seguridad y privacidad:
	- Sin cambio en la política de secretos; el token SMTP sigue exclusivo de servidor (NFR-SEC-002).
- Fecha de revisión:
	- En el lanzamiento o al evaluar Vercel Pro.

</details>

<details>
<summary>**ADR-0021** — Gestión del entorno vía GitHub (secrets y variables), no en archivos</summary>

- Estado: aceptada
- Fecha: 2026-08-14
- Decisores: Alexendros (con contraste del asistente IA)
- Relacionado con: ADR-0008, ADR-0017, ADR-0020, ARCHITECTURE §9.2
- Contexto:
	- El repositorio es público desde el 14-08-2026 (ADR-0020), por lo que ningún secreto, token, ID o URL específica de entorno puede vivir en archivos versionados.
	- El job de CI de Lighthouse y el despliegue ya requieren credenciales de Vercel (`VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`).
- Decisión:
	- Toda configuración de entorno — secretos, tokens, IDs y URLs que varían por entorno — se gestiona en GitHub: Actions secrets para valores secretos y variables de repositorio o de entorno para valores no secretos compartidos, y en la plataforma de despliegue (Vercel) para runtime. Nunca en archivos versionados.
	- Único archivo de entorno versionado: `.env.example`, como plantilla documental con valores vacíos (ADR-0008). `.env.local` (gitignored) queda reservado exclusivamente para desarrollo local.
- Alternativas consideradas:
	- Archivos `.env` versionados con valores reales: rechazado; fuga de secretos en un repositorio público (ADR-0020, NFR-SEC-002).
	- Secretos cifrados en el repositorio (SOPS/age): rechazado; sobrecoste operativo sin necesidad funcional.
- Consecuencias positivas:
	- Cero secretos en Git; auditoría y rotación centralizadas en GitHub; previews y despliegue reproducibles.
- Consecuencias negativas:
	- Los secretos se configuran fuera del flujo de PR; su ausencia puede romper jobs de CI (p. ej. Lighthouse) hasta que el decisor los configure.
- Plan de implementación:
	- Mantener `VERCEL_TOKEN`, `VERCEL_ORG_ID` y `VERCEL_PROJECT_ID` como Actions secrets; añadir el resto de secretos (SMTP) y variables al integrar el contacto (Fase 5); conservar `.env.example` como plantilla.
- Plan de reversión:
	- Migrar a otro gestor de secretos o plataforma sin cambios de código, solo de configuración.
- Seguridad y privacidad:
	- Secretos exclusivamente en GitHub (cifrados) y en Vercel; sin PII en archivos ni en logs (NFR-SEC-002/006).
- Fecha de revisión:
	- 3 meses (cadencia por defecto).

</details>

<details>
<summary>**ADR-0022** — Etiquetas temáticas en pull requests</summary>

- Estado: aceptada
- Fecha: 2026-08-14
- Decisores: Alexendros (con contraste del asistente IA)
- Relacionado con: ADR-0019, ADR-0023, DEC-AGENTS-03, [AGENTS.md](./AGENTS.md) §7
- Contexto:
	- La cadena de PRs de Fase 4 (A1–A4, B1–B8) crece en volumen y solapa temáticas (SEO, a11y, diseño, contenido, CI, documentación). Sin clasificación visible, la previsualización y la evaluación de cada PR exigen abrir el diff una a una.
- Decisión:
	- Toda PR lleva al menos una etiqueta temática que indica su materia (`ci`, `seo`, `accesibilidad`, `diseño`, `contenido`, `documentación`), asignada al crearla por el agente y revisable por el decisor.
	- Las etiquetas clasifican por temática, no por fase ni prioridad; la traza a REQ/ADR/fase sigue yendo en el cuerpo del commit y de la PR (DEC-AGENTS-02).
- Alternativas consideradas:
	- Prefijos en el título más allá de Conventional Commits: rechazado; redundante con el tipo del commit y peor para filtrar.
	- Proyectos/milestones de GitHub: rechazado; sobrecoste de gestión para un único decisor.
- Consecuencias positivas:
	- Previsualización y filtrado rápido de PRs por materia; revisión del decisor más ágil.
- Consecuencias negativas:
	- Mantenimiento mínimo del catálogo de etiquetas; riesgo de etiquetas huérfanas si no se aplican con disciplina.
- Plan de implementación:
	- Crear las etiquetas temáticas en el repositorio y aplicarlas a las PRs abiertas; el agente etiqueta cada PR nueva al abrirla.
- Plan de reversión:
	- Borrar las etiquetas; no afecta al código ni al historial.
- Seguridad y privacidad:
	- Sin impacto; metadatos de forja sin secretos ni PII.
- Fecha de revisión:
	- 3 meses (cadencia por defecto).

</details>

<details>
<summary>**ADR-0023** — Autorebase en cadena de pull requests apiladas, sin auto-merge</summary>

- Estado: aceptada
- Fecha: 2026-08-14
- Decisores: Alexendros (con contraste del asistente IA)
- Relacionado con: ADR-0019, ADR-0022, DEC-AGENTS-03, PR #31, [AGENTS.md](./AGENTS.md) §7
- Contexto:
	- Las correcciones de Fase 3 y el contenido de Fase 4 se entregan como PRs apiladas (A1→A4, B1→B8). Con fusión squash, cada fusión deja la siguiente rama con commits duplicados que hay que rebasar y re-empujar a mano antes de poder revisarla.
- Decisión:
	- Un workflow propio (`.github/workflows/autorebase.yml`), sin acciones de terceros, rebasa sobre `main` las ramas de las PRs abiertas tras cada fusión y las empuja con `--force-with-lease`; en conflicto aborta y avisa.
	- Queda explícitamente descartado el auto-merge: el decisor revisa el diff y fusiona cada PR a mano (AGENTS §7, ADR-0019).
- Alternativas consideradas:
	- Auto-merge de GitHub (`gh pr merge --auto`): rechazado; fusionaría sin revisión humana del diff.
	- Merge queue de GitHub: rechazado; exige cambiar la protección de rama y los triggers de CI para un beneficio equivalente al autorebase.
	- Acción de terceros de autoupdate: rechazado; nueva dependencia de CI innecesaria (ADR-0019).
- Consecuencias positivas:
	- La cadena de PRs apiladas se mantiene revisable sin intervención manual; historial limpio tras fusión squash.
- Consecuencias negativas:
	- Cada rebase dispara un run completo de CI por PR (coste de minutos); un conflicto detiene la cadena hasta intervención manual.
- Plan de implementación:
	- Ya implementado en PR #31 (`ci: autorebase de PRs apiladas tras cada fusión a main`), fusionada el 14-08-2026.
- Plan de reversión:
	- Borrar `.github/workflows/autorebase.yml`; el flujo vuelve al rebase manual.
- Seguridad y privacidad:
	- Usa `GITHUB_TOKEN` con permisos mínimos (`contents: write`); sin secretos nuevos (ADR-0021).
- Fecha de revisión:
	- 3 meses (cadencia por defecto).

</details>
<details>
<summary>**ADR-0024** — Excepción puntual al gate de CI por rate limit de Vercel (14-08-2026)</summary>

- Estado: aceptada
- Fecha: 2026-08-14
- Decisores: Alexendros (delegación explícita al agente para ejecutar los merges)
- Relacionado con: ADR-0017, ADR-0023, DEC-AGENTS-04, AGENTS §8, PRs #27–#30
- Contexto:
	- El 14-08-2026 el plan Hobby de Vercel agotó su cuota de despliegues («Deployment rate limited — retry in 24 hours») por la tormenta de previews de la cadena de PRs apiladas (rebases de ADR-0023 + re-firmas SSH).
	- Sin preview de Vercel, el job de Lighthouse CI no puede medir y falla en cascada. Los otros seis checks (Typecheck, Lint, Test+cobertura, Build, E2E+axe, Secretos) pasan en todas las PRs afectadas.
- Decisión:
	- Fusionar con override de administrador las PRs #27, #28, #29 y #30 aceptando como fallos ambientales únicamente «Vercel» y «Lighthouse CI (preview de Vercel)», con los seis checks de código en verde.
	- Excepción puntual, limitada a esta fecha y a estas PRs: no rebaja los umbrales de DEC-AGENTS-04 ni crea precedente.
	- El deploy de producción queda pendiente hasta que Vercel restaure la cuota; se forzará con un commit vacío o «Redeploy» en el dashboard.
- Alternativas consideradas:
	- Esperar ~24 h al reset de la cuota: rechazado; detiene la cadena de Fase 4 sin riesgo de código que lo justifique.
	- Rebajar temporalmente el umbral de Lighthouse: rechazado; DEC-AGENTS-04 prohíbe rebajar umbrales.
- Consecuencias positivas:
	- La cadena A3→B2 completa su fusión sin esperar 24 h; Fase 4 continúa.
- Consecuencias negativas:
	- Lighthouse queda sin medir en estas cuatro PRs (ninguna toca rendimiento: a11y, favicon SVG, docs y esquemas/datos de contenido); producción no se redepliega hasta el reset.
- Plan de implementación:
	- Merge admin secuencial #27→#28→#29→#30 ejecutado por el agente con delegación del decisor; re-firma SSH de las ramas restantes tras cada autorebase; forzar deploy de producción cuando Vercel restaure la cuota.
- Plan de reversión:
	- No aplica (fusión ya ejecutada); si surgiera una regresión de rendimiento, se detectará en el primer run de Lighthouse post-reset y se corregirá en una `fix/performance`.
- Seguridad y privacidad:
	- Sin impacto; el check de «Secretos + auditoría» pasó en todas las PRs.
- Fecha de revisión:
	- Al restaurarse la cuota de Vercel: verificar que el deploy de producción y Lighthouse vuelven a verde.

</details>

<details>
<summary>**ADR-0025** — Despliegue Vercel por cierre de fase (preview MITL → producción confirmada)</summary>

- Estado: aceptada
- Fecha: 2026-08-15
- Decisores: Alexendros
- Relacionado con: ADR-0017 (sustituye previews automáticas por PR), ADR-0020, ADR-0021, ADR-0024, OBJ-005, OBJ-008, DEC-ROADMAP-03, ARCHITECTURE §13–§14, [AGENTS.md](./AGENTS.md) §7–§9
- Contexto:
	- Las previews automáticas por cada PR (y el job de Lighthouse que redeployaba en cada push) agotaron la cuota Hobby de Vercel (`api-deployments-free-per-day`) y bloquearon CI sin fallo de código (ADR-0024).
	- El decisor exige man-in-the-loop: visualizar el resultado de una fase completa firmada en Preview y solo entonces promover a Producción.
- Decisión:
	- **No hay despliegue Vercel por PR ni por push automático a `main`.** Los builds disparados por la integración Git se ignoran (`vercel.json` → `ignoreCommand: exit 0`). El CLI/`workflow_dispatch` sigue pudiendo desplegar.
	- **Momento de deploy:** solo tras integrar en `main` todos los PR de la fase y **firma del criterio de salida** por el decisor (DEC-ROADMAP-03).
	- **Paso 1 — Preview MITL:** workflow `Deploy fase (Vercel)` con `target=preview` desde `main` (entorno GitHub `phase-preview`). El decisor revisa la URL de preview.
	- **Paso 2 — Producción:** el mismo workflow con `target=production` y `confirmation=PROMOTE`, más aprobación del entorno GitHub `Production` (required reviewers). Sin `PROMOTE` el job aborta.
	- **Lighthouse en PR (OBJ-005):** se mide contra servidor local post-`pnpm build` (`lighthouserc.json` + job `Lighthouse CI (local)`). No consume cuota de Vercel. Los umbrales DEC-AGENTS-04 no se rebajan.
	- Los gates de código de CI (typecheck, lint, test, build, e2e/axe, secretos) siguen bloqueantes de merge en cada PR.
- Alternativas consideradas:
	- Seguir con preview por PR + Lighthouse remoto: rechazado; agota Hobby y no aporta el gate MITL de fase.
	- Desplegar a producción automáticamente al fusionar a `main`: rechazado; salta la confirmación visual del decisor.
	- Solo dashboard Vercel manual: rechazado; menos auditable y reproducible que Actions + CLI.
- Consecuencias positivas:
	- Cuota Vercel bajo control; QA visual por fase; producción solo con confirmación explícita; Lighthouse estable en CI sin depender del proveedor.
- Consecuencias negativas:
	- No hay URL de preview por PR individual (la revisión de PR es por diff + CI local).
	- Requiere que el decisor dispare el workflow tras firmar la fase y configure los entornos GitHub `phase-preview` / `production`.
- Plan de implementación:
	- `vercel.json` con `ignoreCommand: exit 0`.
	- Job Lighthouse local en `.github/workflows/ci.yml`.
	- Workflow `.github/workflows/deploy-phase.yml` (`workflow_dispatch`).
	- Actualizar ARCHITECTURE §13–§14 y AGENTS §§7–9; anotar ADR-0017.
	- Crear en GitHub Environments: `phase-preview` (opcional) y `production` con required reviewers = decisor.
- Plan de reversión:
	- ADR sustituto que restablezca previews por PR; quitar `ignoreCommand` y restaurar deploy en el job Lighthouse.
- Seguridad y privacidad:
	- Secretos Vercel solo en Actions (ADR-0021); producción protegida por entorno y confirmación `PROMOTE`; sin secretos en el repo.
- Fecha de revisión:
	- Al evaluar plan Pro de Vercel, o a los 3 meses.

</details>
