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

**Pulso:** 16 de agosto de 2026.

**Fase activa:** 8 — Hardening de calidad y lanzamiento (P8-1…P8-6). En paralelo: **Fase 7.z** — residuales y pipelines pre-hardening (P7z-1…P7z-6). Fases 5–7 código en `main`, estado Notion: implementadas (pendiente MITL + firma).

**Siguiente acción:** completar Fase 7.z (pipelines/docs) y unidades P8-1…P8-5; gate humano P8-6 (MITL Fases 5–7, smoke SMTP, `PROMOTE` + v1.0). Capturas DES-07 siguen pendientes.

**Objetivo de producto:** v1.0 el 24 de agosto de 2026.

| Capa | Estado |
| --- | --- |
| Documentación canónica | Aprobada el 13-08-2026; pulso alineado 16-08 |
| Código del sitio nuevo | Fases 1–7 en `main`; Fase 8 en curso (hardening → v1.0) |
| Repositorio nuevo | Creado: `Iniciativas-Alexendros/nuevowebsite-alexendrosdev`. Público desde el 14-08-2026 (ADR-0017 revocada) |
| Sitio anterior | Se archiva en solo lectura. Sin redirecciones (ADR-0013) |
| Contenido editorial | Hechos firmados (REQ-GLOBAL-008); aviso legal y privacidad `published`; asesoría externa residual **post-v1.0** (ADR-0027); capturas DES-07 pendientes |

---

# Qué es este proyecto

Portfolio técnico, presentación de servicios y canal de captación profesional de AlexendrosDev. Dominio previsto: `alexendros.dev` (**desviación P7z-5, 16-08:** aún no ligado al proyecto Vercel `nuevowebsite-alexendrosdev`; v1.0 puede ir en `*.vercel.app` hasta añadirlo en el panel).

NO DEBE tratarse como plataforma SaaS ni como e-commerce.

**Conversión principal:** formulario de contacto. **Alternativa:** agenda en [Cal.com](https://cal.com). **Idioma del MVP:** español.

**Servicios P0:** desarrollo web, landing pages, automatización/IA, auditoría web.

**Proyectos P0:** FRONT Valencia, Gráficas Nasve, vcf-cribador, [alexendros.me](https://alexendros.me).

**Stack cerrado:** Next.js App Router, TypeScript estricto, pnpm 10, Node 22, Tailwind + tokens OKLCH + shadcn/ui, Vitest + Playwright, Vercel, Proton SMTP para el único endpoint.

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

Fases 1–7 en `main`. Fases 5–7: implementadas, pendientes de preview MITL + firma (ADR-0025 / DEC-ROADMAP-03). **Activa:** Fase 8 (hardening → v1.0 lun 24-08) + Fase 7.z (pipelines). Residuales: smoke SMTP, dominio (P7z-5), asesoría legal post-v1.0 (ADR-0027), capturas DES-07.

## Fase 8 — Hardening y lanzamiento (activa)

Unidades en Notion / ROADMAP §10: P8-1 `docs/release-checklist.md` · P8-2 a11y · P8-3 rendimiento · P8-4 SEO/seguridad/observabilidad · P8-5 E2E/responsive · P8-6 gate humano (MITL, SMTP, `PROMOTE`, tag v1.0; asesoría = post-v1.0).

## Residuales humanos (no bloquean P8-1…P8-5)

- [ ]  Preview MITL Fases 5–7 (`Deploy fase`) y firma de épicas.
- [ ]  Smoke SMTP real tras sync-env + redeploy ([runbook](./docs/runbook-smoke-smtp.md)).
- [ ]  Asesoría externa de textos legales **post-v1.0** (ADR-0027; no bloquea `PROMOTE`).
- [ ]  Ligar `alexendros.dev` al proyecto Vercel `nuevowebsite-alexendrosdev` (desviación P7z-5: hoy solo `*.vercel.app`).
- [ ]  Capturas DES-07 (omitir `images[]` hasta assets reales).
- [ ]  Convertir cada fase en épica/issues (pospuesto 14-08-2026).

## Documentos de apoyo aún no creados

- [ ]  [CONTRIBUTING.md](./CONTRIBUTING.md)
- [ ]  [SECURITY.md](./SECURITY.md)
- [x]  [docs/quality-gates.md](./docs/quality-gates.md) — **P7z-1**
- [ ]  [docs/release-checklist.md](./docs/release-checklist.md) — **P8-1**
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