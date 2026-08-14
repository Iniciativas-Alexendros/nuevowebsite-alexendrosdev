---
name: alexendros-dev-session
description: Protocolo de sesión del proyecto Alexendros.Dev (repositorio nuevowebsite-alexendrosdev). Usar al iniciar o cerrar cada sesión de trabajo en este repositorio, al dudar del procedimiento o del enrutado a un documento canónico (AGENTS.md, CONSTITUTION.md, ROADMAP.md, ARCHITECTURE.md, README.md), o al fijar el objetivo de la sesión y sus líneas rojas. Aplica a cualquier tarea del proyecto, con o sin código.
---

# Skill de sesión — Alexendros.Dev

Protocolo operativo de cada sesión de trabajo en este repositorio. Fija el objetivo de la sesión, enruta al documento canónico correcto, aplica el procedimiento de trabajo y deja registro. No añade norma: deriva de `CONSTITUTION.md` y del resto del canon. Si hay conflicto, gana el canon.

## Cuándo se carga

- Al arrancar toda sesión de trabajo del proyecto y al cerrarla, con o sin código.
- Al dudar del procedimiento o del enrutado a un documento canónico.
- La fuente de verdad es el repositorio (desde la Fase 0). Toda reforma se hace primero aquí y luego se refleja en Notion.

## 1. Arranque de sesión

Se ejecuta en orden. NO se escribe código ni se edita documento alguno antes del paso 4.

1. **Pulso.** Lee `README.md` («Estado en una mirada») y la fase activa de `ROADMAP.md`. Confirma fase activa, próximo hito y tarea del día.
2. **Objetivo de sesión.** Redáctalo con la ficha de la sección 2 y confírmalo con el decisor si hay ambigüedad.
3. **Lectura mínima.** Abre solo lo que cierra la tarea según el índice de la sección 3. NO leas el canon entero.
4. **Anclas.** Localiza los `REQ-*`, `NFR-*` o `ADR-*` que trazan la tarea en `SPECS.md` o `DECISIONS.md`. Si falta un ancla, paras y preguntas. NO inventas requisitos.
5. **Modo.** Si hay implementación, carga además la ficha §3, la autonomía y el DoD de `AGENTS.md`.

## 2. Objetivo de sesión

Toda sesión produce exactamente un objetivo verificable antes de trabajar.

- **Objetivo:** una frase con resultado observable.
- **Traza:** `REQ-*`, `NFR-*`, `ADR-*` o fase de `ROADMAP.md`.
- **Entregable:** diff, documento, decisión o registro concreto.
- **Criterio de cierre:** cómo se verifica que está hecho.

Reglas:

- Sin objetivo confirmado no hay sesión. Si excede una sesión, se divide y se agenda el resto.
- El objetivo DEBE respetar la fase activa y las exclusiones del MVP. Nada de P1/P2 dentro de P0.
- Toda desviación del plan se registra como ADR; no se absorbe en silencio.

## 3. Índice de conocimiento

Mapa de enrutado del canon. Cada documento es un archivo Markdown en la raíz del repositorio.

| Documento | Rol | Autoridad | Ábrelo cuando |
| --- | --- | --- | --- |
| `README.md` | Entrada | Lectura | Orientación, pulso y enrutado |
| `CONSTITUTION.md` | Norma | Suprema | Alcance, integraciones, secretos o conflicto entre documentos |
| `SPECS.md` | Producto | Producto | Requisitos, aceptación, prioridades o DoD |
| `DECISIONS.md` | Decisiones | Derivada | Por qué se eligió algo; antes de proveedor, secreto o cambio estructural |
| `DESIGN.md` | Diseño | Derivada | Tokens, componentes, temas, accesibilidad visual o movimiento |
| `ARCHITECTURE.md` | Arquitectura | Derivada | Estructura, server/client, endpoint, secretos o despliegue |
| `CONTENT.md` | Contenido | Derivada | Textos, entidades, tono, slugs o validación editorial |
| `ROADMAP.md` | Plan | Operativa | Fase activa, calendario, hitos o criterio de salida |
| `AGENTS.md` | Contrato | Operativa | Vas a escribir código: ficha, autonomía, DoD y comandos |

Nota: `SPECS.md`, `DECISIONS.md`, `DESIGN.md` y `CONTENT.md` aún no están en el repositorio (siguen en Notion); cuando se exporten, este índice se actualiza.

Apoyo (pendiente de crear): `CONTRIBUTING.md`, `SECURITY.md`, `docs/quality-gates.md`, `docs/release-checklist.md`, `docs/testing-strategy.md`.

## 4. Procedimiento de trabajo

- **Unidad de trabajo.** Una ficha de AGENTS §3 = un PR pequeño: objetivo, traza, alcance, exclusiones, dependencias, pruebas y criterio de cierre. Si el decisor no la entrega, la reconstruyes y la confirmas antes de escribir código.
- **Trazabilidad.** Toda tarea implementada DEBE trazarse a uno o más requisitos de SPECS. Los commits citan `REQ-*`, `ADR-*` y fase (Conventional Commits).
- **Calidad antes de revisión.** `pnpm check`, `pnpm test` y `pnpm build` en verde. Cobertura ≥70 % en `src/lib/` y validaciones. axe-core sin violaciones críticas o serias. Lighthouse ≥90 en las cuatro categorías en móvil.
- **Git.** Trunk-based: ramas cortas `feat/`, `fix/`, `chore/` hacia `main` protegida. PRs pequeños con revisión diaria del decisor.
- **UI.** Tokens antes que estilos arbitrarios; claro/oscuro, teclado, foco, responsive y `prefers-reduced-motion`.
- **Notion.** Ediciones mínimas y dirigidas; conserva bloques de base de datos y menciones. Tras cada sincronización con el repositorio, actualiza «Sincronizado el» en el índice.

## 5. Líneas rojas

Derivadas de `CONSTITUTION.md` y de los ADR. Si una petición las cruza, paras y elevas al decisor.

- El agente NO DEBE auto-fusionar, declarar fases cerradas ni introducir dependencias, secretos, rutas o esquemas sin confirmación (ADR-0019).
- Incorporar un proveedor, un secreto, datos personales, un coste recurrente o un cambio de arquitectura REQUIERE ADR previo.
- El MVP NO incluye autenticación, base de datos, CMS, checkout, Prisma, Supabase, newsletter ni analítica.
- NO se copia código del repositorio anterior, archivado en solo lectura (ADR-0006, ADR-0017).
- Hechos, textos legales finales y confidencialidad son verificación humana indelegable (REQ-GLOBAL-008).
- Los documentos canónicos DEBEN residir en la raíz del repositorio, en Markdown, sin secretos.
- Reformar la Constitución REQUIERE decisión explícita y un ADR. Nunca de pasada en un PR.

## 6. Cierre de sesión

- [ ] Entregable verificado contra el criterio de cierre de la sección 2.
- [ ] Pulso actualizado si cambió fase, repositorio o lanzamiento: página madre y `README.md`.
- [ ] Registro de pulsos: una fila con fecha, pulso y desviación.
- [ ] Toda desviación relevante del plan registrada como ADR en `DECISIONS.md`.
- [ ] Índice de documentos al día si se creó o reformó un archivo.
- [ ] Lo pendiente convertido en issue o en «Pendiente ahora» del `README.md`. Nada queda solo en memoria.
- [ ] Resumen final al decisor: hecho, pendiente, riesgos y objetivo propuesto para la próxima sesión.

## Mantenimiento

- Reforma operativa: esta skill se actualiza sin ADR siempre que no contradiga el canon; si contradice, primero se reforma el canon.
- Revisión prevista: 24-08-2026, con el lanzamiento de v1.0.
- Responsable: Alexendros.
