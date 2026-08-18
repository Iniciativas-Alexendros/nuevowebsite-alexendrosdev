# README.md

Abrir cuando: Orientación, pulso y enrutado.
Aprobado: 13 de agosto de 2026
Audiencia: Agente, Dirección
Autoridad: Lectura
Clase: Obligatorio
Días para revisión: 9
En repo: Sí
Estado: Vigente
Orden: 1
Propósito: Punto de entrada de lectura: pulso, pendiente, programado y qué leer después.
Reforma: Operativa
Responsable: Alexendros
Revisión: 24 de agosto de 2026
Rol: Entrada
Ruta: ./README.md

<aside>
📌

**Propósito**

Este archivo es el punto de entrada de lectura del proyecto. Te dice qué leer después, en qué estado está el trabajo, qué falta y cómo se ejecuta. No sustituye a [CONSTITUTION.md](./CONSTITUTION.md): esa sigue siendo la norma de mayor autoridad. Hasta que este archivo te redirija, trátalo como el documento que manda la sesión.

</aside>

<aside>
⚖️

**Autoridad frente a lectura**

- **Leer primero:** este README.
- **Prevalece si hay conflicto:** [CONSTITUTION.md](./CONSTITUTION.md).
- **Contrato del agente de código:** [AGENTS.md](./AGENTS.md).
</aside>

---

# Estado en una mirada

**Pulso:** 18 de agosto de 2026 — remediación P0 go-live; PR #74 en revisión (R-P0-03 N/A Hobby, Node 24 unificado, ADR-0031); **no firmar Fase 8 ni PROMOTE** hasta cerrar R-P0 + secuencia canónica.

**Fase activa:** 8 — Hardening (P8-1…P8-6). En paralelo: **Fase 7.z** (P7z-1…P7z-8). Fases 5–7 en `main`, pendientes MITL + firma.

**Siguiente acción (secuencia única):** firmas MITL P8-2 + épicas 5–8 → `PROMOTE` → smoke postprod → tag `v1.0.0`. SHA candidato `ffd975d` · preview activa. Detalle: [docs/handoff-p8-6.md](./docs/handoff-p8-6.md).

**Objetivo de producto:** v1.0 el 24 de agosto de 2026.

| Capa | Estado |
| --- | --- |
| Documentación canónica | Aprobada el 13-08-2026; pulso alineado 16-08 |
| Código del sitio nuevo | Fases 1–7 en `main`; Fase 8 hardening en curso |
| Repositorio nuevo | `Iniciativas-Alexendros/nuevowebsite-alexendrosdev` (público) |
| Sitio anterior | Solo lectura; sin redirecciones legacy (ADR-0013) |
| Contenido editorial | Hechos firmados; legales `published`; asesoría externa post-v1.0 (ADR-0027); DES-07 diferido (ADR-0028) |

---

# Qué es este proyecto

Portfolio técnico, presentación de servicios y canal de captación profesional de AlexendrosDev. Canónico: `https://alexendros.dev` (apex). **ADR-0029:** el dominio sigue ligado al proyecto Vercel legacy `website-alexendrosdev`; el decisor DEBE migrarlo a `nuevowebsite-alexendrosdev` antes del `PROMOTE` final. Redirect `www` → apex y headers de seguridad están en [`vercel.json`](./vercel.json).

NO DEBE tratarse como plataforma SaaS ni como e-commerce.

**Conversión principal:** formulario de contacto. **Alternativa:** agenda en [Cal.com](https://cal.com). **Idioma del MVP:** español.

**Servicios P0:** desarrollo web, landing pages, automatización/IA, auditoría web.

**Proyectos P0:** FRONT Valencia, Gráficas Nasve, vcf-cribador, [alexendros.me](https://alexendros.me).

**Stack cerrado:** Next.js App Router, TypeScript estricto, pnpm 10, Node 24, Tailwind + tokens OKLCH + shadcn/ui, Vitest + Playwright, Vercel, Proton SMTP para el único endpoint.

El MVP NO incluye autenticación, base de datos, CMS, checkout, Prisma, Supabase, newsletter ni analítica.

---

# Qué leer a continuación

Lee solo lo que cierra la tarea. No leas los ocho documentos de cabo a rabo.

## Por intención

| Si necesitas | Abre | Aún no |
| --- | --- | --- |
| Orientación, pulso y enrutado | Este archivo | El resto |
| Lo no negociable | [CONSTITUTION.md](./CONSTITUTION.md) | SPECS o DESIGN |
| Qué se entrega y cómo se acepta | [SPECS.md](./SPECS.md) | ARCHITECTURE |
| Por qué se eligió una solución | [DECISIONS.md](./DECISIONS.md) | Código |
| Cómo se ve y se comporta | [DESIGN.md](./DESIGN.md) | CONTENT |
| Cómo se organiza y opera el software | [ARCHITECTURE.md](./ARCHITECTURE.md) | DESIGN |
| Textos, entidades y tono | [CONTENT.md](./CONTENT.md) | DESIGN |
| Orden, calendario y fases | [ROADMAP.md](./ROADMAP.md) | AGENTS, salvo que implementes |
| Cómo implementa la IA | [AGENTS.md](./AGENTS.md) | El ROADMAP entero |
| Cerrar o reabrir un documento | [Plan de verificación y desarrollo de documentos pendientes — Baterías de decisión](https://app.notion.com/p/Plan-de-verificaci-n-y-desarrollo-de-documentos-pendientes-Bater-as-de-decisi-n-4a063a3c9cea43da853f7630458401f6?pvs=21) | — |

## Primera sesión

1. Este README entero.
2. Si vas a escribir código: [AGENTS.md](./AGENTS.md) §§1–6 y §9.
3. La fase activa de [ROADMAP.md](./ROADMAP.md) (hoy: Fase 8 — hardening y lanzamiento v1.0; Fases 5–7 implementadas pendientes de MITL + firma).
4. Solo el ancla que cite la tarea: un `REQ`, un `NFR` o un `ADR`.
5. [CONSTITUTION.md](./CONSTITUTION.md) solo si tocas alcance, integraciones, secretos o capacidades nuevas.

## Si vas a implementar ahora

1. Este README — pulso y exclusiones.
2. [AGENTS.md](./AGENTS.md) — ficha §3, autonomía y DoD.
3. La tarea de la fase activa en [ROADMAP.md](./ROADMAP.md).
4. Los REQ/NFR de la traza en [SPECS.md](./SPECS.md).
5. [DESIGN.md](./DESIGN.md), [ARCHITECTURE.md](./ARCHITECTURE.md) o [CONTENT.md](./CONTENT.md) según toques UI, estructura o textos.
6. [DECISIONS.md](./DECISIONS.md) antes de una dependencia, un secreto, un proveedor o un cambio estructural.

Si falta un ancla, paras y preguntas. NO inventas requisitos.

---

# Normas que ya aplican

Estas reglas bastan para empezar. El texto íntegro vive en [CONSTITUTION.md](./CONSTITUTION.md). Si choca con este resumen, gana la Constitución.

- Toda tarea implementada DEBE trazarse a uno o más requisitos de [SPECS.md](./SPECS.md).
- El proyecto DEBE empezar con la menor superficie posible. La primera versión NO DEBE asumir autenticación, base de datos, CMS, checkout, Prisma, Supabase ni newsletter.
- Incorporar un proveedor, un secreto, datos personales, un coste recurrente o un cambio de arquitectura REQUIERE ADR en [DECISIONS.md](./DECISIONS.md).
- El agente NO DEBE auto-fusionar, declarar fases cerradas ni introducir dependencias, secretos, rutas o esquemas sin confirmación del decisor (ADR-0019).
- Los documentos canónicos DEBEN residir en la raíz del repositorio, en Markdown, sin secretos.
- Reformar la Constitución REQUIERE decisión explícita y un ADR. NO se reforma de pasada en un PR de implementación.

---

# Cómo se trabaja

El sitio lo implementa un agente de código. El humano dirige, revisa diffs, hace QA visual y firma fases. No implementa a mano salvo corrección puntual (ADR-0019).

**Unidad de trabajo.** Una ficha de [AGENTS.md](./AGENTS.md) §3 = un PR pequeño. Objetivo, traza, alcance, exclusiones, dependencias, pruebas y criterio de cierre. Si el humano no entrega la ficha, el agente la reconstruye y la confirma antes de escribir código.

**Git.** Trunk-based. Ramas cortas `feat/`, `fix/`, `chore/` hacia `main` protegida. Conventional Commits. El cuerpo cita `REQ-*`, `ADR-*` y la fase. El agente no se auto-fusiona.

**Calidad.** Antes de pedir revisión: typecheck, lint, tests afectados y build en verde. UI en claro/oscuro, teclado, foco, responsive y `prefers-reduced-motion`. Sin estilos arbitrarios si existe token. Sin P1/P2 dentro de P0. Sin copiar el repositorio anterior.

**Comandos** (contrato; el scaffold de Fase 1 DEBE crearlos):

- `pnpm check` — typecheck + lint
- `pnpm test` — Vitest
- `pnpm test:e2e` — Playwright
- `pnpm build` — build de producción
- `pnpm ci` — check + test + build

**Umbrales.** Lighthouse ≥90 en las cuatro categorías en móvil (CI local, ADR-0025). axe-core bloqueante. Cobertura mínima 70 % en `src/lib/` y validaciones. **Deploy Vercel:** tras integrar la fase en `main` → preview MITL → firma de cierre → production con PROMOTE (ADR-0025).

**Herramientas autorizadas:** OpenCode Desktop, Kimi Code CLI, Hermes Desktop.

**El humano no delega:** hechos y confidencialidad, textos legales finales, aceptación de dependencias, firma de cada fase y cualquier ADR nuevo.

---

# Pendiente ahora

Fases 1–7 en `main`. **Activa:** Fase 8 + 7.z. Preview MITL `ffd975d` desplegada; **firmas decisor pendientes**. No PROMOTE hasta P8-2 + P8-6.4.

## Fase 8 — Hardening y lanzamiento (activa)

Unidades: P8-1 checklist · P8-2 a11y · P8-3 Lighthouse multipágina · P8-4 SEO/headers · P8-5 E2E · P8-6 gate humano. Remediación P0: [docs/release-checklist.md](./docs/release-checklist.md).

## Residuales humanos (bloquean go-live / PROMOTE)

- [x]  Simulacro rollback en preview (R-P0-02; 18-08).
- [x]  SHA candidato `ffd975d` + CI verde + Deploy preview MITL (18-08 post-#76).
- [x]  Smoke SMTP real + correo en `operaciones@` (18-08).
- [x]  Migrar `alexendros.dev` (+ `www`) → `nuevowebsite-alexendrosdev` (ADR-0029; hub 18-08).
- [ ]  Firma MITL P8-2 + firmas Fases 5, 6, 7, 7.z, 8 → `PROMOTE` → smoke postprod → tag `v1.0.0`.
- [ ]  Asesoría externa de textos legales **post-v1.0** (ADR-0027; no bloquea `PROMOTE`).
- [ ]  Rotar `SMTP_TOKEN` y registrar operación (sin valor) — [SECURITY.md](./SECURITY.md).
- [ ]  Activar secret scanning / Dependabot en GitHub si el plan lo permite.

Workflows: [Deploy fase](./.github/workflows/deploy-phase.yml) · [Smoke SMTP](./.github/workflows/smoke-smtp.yml) · [Smoke post-deploy](./.github/workflows/smoke-post-deploy.yml) · [Release tag](./.github/workflows/release.yml) · [Rollback](./docs/runbook-rollback.md).

## Documentos de apoyo

- [x]  [CONTRIBUTING.md](./CONTRIBUTING.md) — **P7z-7**
- [x]  [SECURITY.md](./SECURITY.md) — **P7z-8**
- [x]  [docs/quality-gates.md](./docs/quality-gates.md) — **P7z-1**
- [x]  [docs/release-checklist.md](./docs/release-checklist.md) — **P8-1**
- [x]  [docs/handoff-p8-6.md](./docs/handoff-p8-6.md) — secuencia canónica go-live
- [x]  [docs/runbook-rollback.md](./docs/runbook-rollback.md) — R-P0-02
- [x]  [docs/runbook-smoke-smtp.md](./docs/runbook-smoke-smtp.md) — R-P0-03
- [x]  [docs/remediation-p1-backlog.md](./docs/remediation-p1-backlog.md) — P1 ordenado
- [x]  [docs/vercel-build-warnings.md](./docs/vercel-build-warnings.md) — warnings Vercel y fixes
- [x]  [docs/testing-strategy.md](./docs/testing-strategy.md) — **P7z-2**

---

# Programado

Capacidad: 50 h/semana de dirección y revisión humana. Ventana: 14–24 ago 2026. Sin holgura. Nunca recortar DoD, accesibilidad, seguridad, tests ni el formulario.

| Fase | Ventana | Hito |
| --- | --- | --- |
| 0 resto | vie 14 ago | Repositorio, `.env.example`, plantillas |
| 1 | vie 14 – sáb 15 | App vacía, CI verde, preview |
| 2 | sáb 15 – lun 17 | Design system operable |
| 4 (paralela) | vie 14 – lun 17 | Contenido tipado y validado |
| 3 | lun 17 – mar 18 | Shell, navegación y SEO técnico |
| 5 | mar 18 – jue 20 | **Hito:** landing mínima pública |
| 6 | vie 21 | Portfolio, stack y sobre-mí |
| 7 | vie 21 – sáb 22 | Aviso legal y privacidad |
| 8 | sáb 22 – lun 24 | **Lanzamiento v1.0** |
| 9 | después del 24-08 | P1/P2 solo con disparador + ADR |

**Disparadores P1** (no adelantar trabajo):

- Newsletter: existe contenido periódico real que justifique el envío.
- Analítica: primera campaña de captación o necesidad de medir la conversión del formulario.
- Casos de estudio (`/proyectos/[slug]`, `/servicios/[slug]`): hay contenido suficiente para al menos dos casos completos.

El detalle de tareas vive en [ROADMAP.md](./ROADMAP.md). Este README no lo duplica.

---

# Índice canónico

El catálogo vive en este repositorio (raíz): `CONSTITUTION.md`, `SPECS.md`, `DECISIONS.md`, `DESIGN.md`, `ARCHITECTURE.md`, `CONTENT.md`, `ROADMAP.md` y `AGENTS.md`. El espejo de consulta en Notion está en [Documentos canónicos](https://app.notion.com/p/1939f8efd763473fae548c009e4abb8d?pvs=21). No copies aquí propósito ni estado.

En el repositorio este archivo DEBE vivir en la raíz, junto al resto del canon.

---

# Mantenimiento

- Actualiza el pulso al cambiar de fase, al crear el repositorio y al lanzar.
- Tras crear el repositorio (Fase 0), la fuente de verdad del canon es el repositorio. Las páginas de Notion quedan como espejo de consulta: cada sincronización se registra en la propiedad `Sincronizado el` del índice y toda reforma se hace primero en el repo.
- Enruta. NO copies aquí normas que viven en la Constitución, SPECS o AGENTS.
- Una reforma de autoridad se hace en [CONSTITUTION.md](./CONSTITUTION.md) y en un ADR, no en este README.