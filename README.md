# README.md

Abrir cuando: Orientación, pulso y enrutado.
Aprobado: 13 de agosto de 2026
Audiencia: Agente, Dirección
Autoridad: Lectura
Clase: Obligatorio
Días para revisión: 9
En repo: No
Estado: Vigente
Orden: 1
Propósito: Punto de entrada de lectura: pulso, pendiente, programado y qué leer después.
Reforma: Operativa
Responsable: Alexendros
Revisión: 24 de agosto de 2026
Rol: Entrada
Ruta: http://README.md

<aside>
📌

**Propósito**

Este archivo es el punto de entrada de lectura del proyecto. Te dice qué leer después, en qué estado está el trabajo, qué falta y cómo se ejecuta. No sustituye a [[CONSTITUTION.md](http://CONSTITUTION.md)](https://app.notion.com/p/CONSTITUTION-md-b088505105114630aa34c5252a9df4e9?pvs=21): esa sigue siendo la norma de mayor autoridad. Hasta que este archivo te redirija, trátalo como el documento que manda la sesión.

</aside>

<aside>
⚖️

**Autoridad frente a lectura**

- **Leer primero:** este README.
- **Prevalece si hay conflicto:** [[CONSTITUTION.md](http://CONSTITUTION.md)](https://app.notion.com/p/CONSTITUTION-md-b088505105114630aa34c5252a9df4e9?pvs=21).
- **Contrato del agente de código:** [[AGENTS.md](http://AGENTS.md)](https://app.notion.com/p/AGENTS-md-992fcc485cc74127ba395c8680c3df20?pvs=21).
</aside>

---

# Estado en una mirada

**Pulso:** 13 de agosto de 2026.

**Fase activa:** 0 — marco documental cerrado; falta el repositorio.

**Siguiente acción:** crear el repositorio privado, `.env.example` y las plantillas de issue/PR.

**Objetivo de producto:** v1.0 el 24 de agosto de 2026.

| Capa | Estado |
| --- | --- |
| Documentación canónica | Aprobada el 13-08-2026 |
| Código del sitio nuevo | No iniciado |
| Repositorio nuevo | No creado. Privado hasta el lanzamiento (ADR-0017) |
| Sitio anterior | Se archiva en solo lectura. Sin redirecciones (ADR-0013) |
| Contenido editorial | Por redactar de cero (CONTENT §12) |

---

# Qué es este proyecto

Portfolio técnico, presentación de servicios y canal de captación profesional de AlexendrosDev. Dominio previsto: `alexendros.dev`.

NO DEBE tratarse como plataforma SaaS ni como e-commerce.

**Conversión principal:** formulario de contacto. **Alternativa:** agenda en [Cal.com](http://Cal.com). **Idioma del MVP:** español.

**Servicios P0:** desarrollo web, landing pages, automatización/IA, auditoría web.

**Proyectos P0:** FRONT Valencia, Gráficas Nasve, vcf-cribador, [alexendros.me](http://alexendros.me).

**Stack cerrado:** Next.js App Router, TypeScript estricto, pnpm 10, Node 22, Tailwind + tokens OKLCH + shadcn/ui, Vitest + Playwright, Vercel, Proton SMTP para el único endpoint.

El MVP NO incluye autenticación, base de datos, CMS, checkout, Prisma, Supabase, newsletter ni analítica.

---

# Qué leer a continuación

Lee solo lo que cierra la tarea. No leas los ocho documentos de cabo a rabo.

## Por intención

| Si necesitas | Abre | Aún no |
| --- | --- | --- |
| Orientación, pulso y enrutado | Este archivo | El resto |
| Lo no negociable | [[CONSTITUTION.md](http://CONSTITUTION.md)](https://app.notion.com/p/CONSTITUTION-md-b088505105114630aa34c5252a9df4e9?pvs=21) | SPECS o DESIGN |
| Qué se entrega y cómo se acepta | [[SPECS.md](http://SPECS.md)](https://app.notion.com/p/SPECS-md-11d854a9f6f947049bf7c54f5e35f80a?pvs=21) | ARCHITECTURE |
| Por qué se eligió una solución | [[DECISIONS.md](http://DECISIONS.md)](https://app.notion.com/p/DECISIONS-md-15ba382177024fdaaf64a4caa03652c4?pvs=21) | Código |
| Cómo se ve y se comporta | [[DESIGN.md](http://DESIGN.md)](https://app.notion.com/p/DESIGN-md-e0be2f8a52cd4ba28327e69e99e74f9a?pvs=21) | CONTENT |
| Cómo se organiza y opera el software | [[ARCHITECTURE.md](http://ARCHITECTURE.md)](https://app.notion.com/p/ARCHITECTURE-md-a4603a2448124904ac3bb0fc3bac1efc?pvs=21) | DESIGN |
| Textos, entidades y tono | [[CONTENT.md](http://CONTENT.md)](https://app.notion.com/p/CONTENT-md-df82a3c5a5184b69b78305e3ff925244?pvs=21) | DESIGN |
| Orden, calendario y fases | [[ROADMAP.md](http://ROADMAP.md)](https://app.notion.com/p/ROADMAP-md-07e7e374ee774f39a44d0eaa742db39d?pvs=21) | AGENTS, salvo que implementes |
| Cómo implementa la IA | [[AGENTS.md](http://AGENTS.md)](https://app.notion.com/p/AGENTS-md-992fcc485cc74127ba395c8680c3df20?pvs=21) | El ROADMAP entero |
| Cerrar o reabrir un documento | [Plan de verificación y desarrollo de documentos pendientes — Baterías de decisión](https://app.notion.com/p/Plan-de-verificaci-n-y-desarrollo-de-documentos-pendientes-Bater-as-de-decisi-n-4a063a3c9cea43da853f7630458401f6?pvs=21) | — |

## Primera sesión

1. Este README entero.
2. Si vas a escribir código: [[AGENTS.md](http://AGENTS.md)](https://app.notion.com/p/AGENTS-md-992fcc485cc74127ba395c8680c3df20?pvs=21) §§1–6 y §9.
3. La fase activa de [[ROADMAP.md](http://ROADMAP.md)](https://app.notion.com/p/ROADMAP-md-07e7e374ee774f39a44d0eaa742db39d?pvs=21) (hoy: resto de Fase 0 y arranque de Fase 1).
4. Solo el ancla que cite la tarea: un `REQ`, un `NFR` o un `ADR`.
5. [[CONSTITUTION.md](http://CONSTITUTION.md)](https://app.notion.com/p/CONSTITUTION-md-b088505105114630aa34c5252a9df4e9?pvs=21) solo si tocas alcance, integraciones, secretos o capacidades nuevas.

## Si vas a implementar ahora

1. Este README — pulso y exclusiones.
2. [[AGENTS.md](http://AGENTS.md)](https://app.notion.com/p/AGENTS-md-992fcc485cc74127ba395c8680c3df20?pvs=21) — ficha §3, autonomía y DoD.
3. La tarea de la fase activa en [[ROADMAP.md](http://ROADMAP.md)](https://app.notion.com/p/ROADMAP-md-07e7e374ee774f39a44d0eaa742db39d?pvs=21).
4. Los REQ/NFR de la traza en [[SPECS.md](http://SPECS.md)](https://app.notion.com/p/SPECS-md-11d854a9f6f947049bf7c54f5e35f80a?pvs=21).
5. [[DESIGN.md](http://DESIGN.md)](https://app.notion.com/p/DESIGN-md-e0be2f8a52cd4ba28327e69e99e74f9a?pvs=21), [[ARCHITECTURE.md](http://ARCHITECTURE.md)](https://app.notion.com/p/ARCHITECTURE-md-a4603a2448124904ac3bb0fc3bac1efc?pvs=21) o [[CONTENT.md](http://CONTENT.md)](https://app.notion.com/p/CONTENT-md-df82a3c5a5184b69b78305e3ff925244?pvs=21) según toques UI, estructura o textos.
6. [[DECISIONS.md](http://DECISIONS.md)](https://app.notion.com/p/DECISIONS-md-15ba382177024fdaaf64a4caa03652c4?pvs=21) antes de una dependencia, un secreto, un proveedor o un cambio estructural.

Si falta un ancla, paras y preguntas. NO inventas requisitos.

---

# Normas que ya aplican

Estas reglas bastan para empezar. El texto íntegro vive en [[CONSTITUTION.md](http://CONSTITUTION.md)](https://app.notion.com/p/CONSTITUTION-md-b088505105114630aa34c5252a9df4e9?pvs=21). Si choca con este resumen, gana la Constitución.

- Toda tarea implementada DEBE trazarse a uno o más requisitos de [[SPECS.md](http://SPECS.md)](https://app.notion.com/p/SPECS-md-11d854a9f6f947049bf7c54f5e35f80a?pvs=21).
- El proyecto DEBE empezar con la menor superficie posible. La primera versión NO DEBE asumir autenticación, base de datos, CMS, checkout, Prisma, Supabase ni newsletter.
- Incorporar un proveedor, un secreto, datos personales, un coste recurrente o un cambio de arquitectura REQUIERE ADR en [[DECISIONS.md](http://DECISIONS.md)](https://app.notion.com/p/DECISIONS-md-15ba382177024fdaaf64a4caa03652c4?pvs=21).
- El agente NO DEBE auto-fusionar, declarar fases cerradas ni introducir dependencias, secretos, rutas o esquemas sin confirmación del decisor (ADR-0019).
- Los documentos canónicos DEBEN residir en la raíz del repositorio, en Markdown, sin secretos.
- Reformar la Constitución REQUIERE decisión explícita y un ADR. NO se reforma de pasada en un PR de implementación.

---

# Cómo se trabaja

El sitio lo implementa un agente de código. El humano dirige, revisa diffs, hace QA visual y firma fases. No implementa a mano salvo corrección puntual (ADR-0019).

**Unidad de trabajo.** Una ficha de [[AGENTS.md](http://AGENTS.md)](https://app.notion.com/p/AGENTS-md-992fcc485cc74127ba395c8680c3df20?pvs=21) §3 = un PR pequeño. Objetivo, traza, alcance, exclusiones, dependencias, pruebas y criterio de cierre. Si el humano no entrega la ficha, el agente la reconstruye y la confirma antes de escribir código.

**Git.** Trunk-based. Ramas cortas `feat/`, `fix/`, `chore/` hacia `main` protegida. Conventional Commits. El cuerpo cita `REQ-*`, `ADR-*` y la fase. El agente no se auto-fusiona.

**Calidad.** Antes de pedir revisión: typecheck, lint, tests afectados y build en verde. UI en claro/oscuro, teclado, foco, responsive y `prefers-reduced-motion`. Sin estilos arbitrarios si existe token. Sin P1/P2 dentro de P0. Sin copiar el repositorio anterior.

**Comandos** (contrato; el scaffold de Fase 1 DEBE crearlos):

- `pnpm check` — typecheck + lint
- `pnpm test` — Vitest
- `pnpm test:e2e` — Playwright
- `pnpm build` — build de producción
- `pnpm ci` — check + test + build

**Umbrales.** Lighthouse ≥90 en las cuatro categorías en móvil. axe-core bloqueante. Cobertura mínima 70 % en `src/lib/` y validaciones.

**Herramientas autorizadas:** OpenCode Desktop, Kimi Code CLI, Hermes Desktop.

**El humano no delega:** hechos y confidencialidad, textos legales finales, aceptación de dependencias, firma de cada fase y cualquier ADR nuevo.

---

# Pendiente ahora

El marco documental no bloquea. Bloquea la ausencia de repositorio.

## Cierre de Fase 0 — 14 de agosto de 2026, ~4 h

- [ ]  Crear el repositorio privado en GitHub (ADR-0017).
- [ ]  Configurar propiedad, visibilidad, licencia y `main` protegida con CI en verde.
- [ ]  Crear `.env.example` con las 10 variables de ARCHITECTURE §9.2 (ADR-0008).
- [ ]  Copiar la ficha de AGENTS §3 a la plantilla de issue/PR.
- [ ]  Convertir cada fase en épica/issues. Cada issue DEBE usar la ficha §3, no un título suelto.

## Inmediatamente después — Fase 1, 14–15 ago

Scaffold de Next.js App Router, TypeScript estricto, pnpm 10, CI verde y preview en Vercel. Sin código de producto heredado.

## Documentos de apoyo aún no creados

- [ ]  [CONTRIBUTING.md](./CONTRIBUTING.md)
- [ ]  [SECURITY.md](./SECURITY.md)
- [ ]  [docs/quality-gates.md](./docs/quality-gates.md)
- [ ]  [docs/release-checklist.md](./docs/release-checklist.md)
- [ ]  [docs/testing-strategy.md](./docs/testing-strategy.md)

---

# Programado

Capacidad: 50 h/semana de dirección y revisión humana. Ventana: 14–24 ago 2026. Sin holgura. Nunca recortar DoD, accesibilidad, seguridad, tests ni el formulario.

| Fase | Ventana | Hito |
| --- | --- | --- |
| 0 resto | vie 14 ago | Repo privado, `.env.example`, plantillas |
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

El detalle de tareas vive en [[ROADMAP.md](http://ROADMAP.md)](https://app.notion.com/p/ROADMAP-md-07e7e374ee774f39a44d0eaa742db39d?pvs=21). Este README no lo duplica.

---

# Índice canónico

El catálogo vivo está en [Documentos canónicos](https://app.notion.com/p/1939f8efd763473fae548c009e4abb8d?pvs=21). Cada fila es el archivo. No copies aquí propósito ni estado.

En el repositorio este archivo DEBE vivir en la raíz, junto al resto del canon.

---

# Mantenimiento

- Actualiza el pulso al cambiar de fase, al crear el repositorio y al lanzar.
- Tras crear el repositorio (Fase 0), la fuente de verdad del canon es el repositorio. Las páginas de Notion quedan como espejo de consulta: cada sincronización se registra en la propiedad `Sincronizado el` del índice y toda reforma se hace primero en el repo.
- Enruta. NO copies aquí normas que viven en la Constitución, SPECS o AGENTS.
- Una reforma de autoridad se hace en [[CONSTITUTION.md](http://CONSTITUTION.md)](https://app.notion.com/p/CONSTITUTION-md-b088505105114630aa34c5252a9df4e9?pvs=21) y en un ADR, no en este README.