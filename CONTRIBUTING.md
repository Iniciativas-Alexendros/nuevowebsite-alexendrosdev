# Contribuir a nuevowebsite-alexendrosdev

Contrato operativo: [AGENTS.md](./AGENTS.md). Este documento resume cómo preparar un PR conforme; si hay conflicto, gana AGENTS.

## Antes de escribir código

Toda unidad de trabajo DEBE caber en la ficha AGENTS §3:

```
Objetivo: <resultado verificable en una frase>
Traza: <IDs SPECS / ADR>
Alcance: <archivos o rutas que SÍ tocas>
Exclusiones: <lo que NO harás>
Dependencias: <fase, ADR o PR previo>
Pruebas: <comandos y casos>
Criterio de cierre: <observable: CI, captura, ruta>
```

Si no hay ficha, reconstruye y confirma con el decisor antes de implementar.

## Setup local

1. Clona el repositorio.
2. Node 22 + pnpm 10 (`corepack enable` / `.nvmrc`).
3. `pnpm install --frozen-lockfile`
4. Comandos canónicos: `pnpm check`, `pnpm test`, `pnpm test:e2e`, `pnpm build`, `pnpm ci`.

No hace falta `.env.local` para desarrollo ni para la suite de tests. Sin SMTP, `POST /api/contact` degrada a 503 (esperado).

## Ramas (DEC-AGENTS-03)

Trunk-based hacia `main` protegida:

- `feat/` — funcionalidad
- `fix/` — corrección
- `chore/` — mantenimiento
- `test/` — pruebas
- `docs/` — documentación

Ramas cortas. Un PR = una unidad de trabajo.

## Commits (DEC-AGENTS-02)

Conventional Commits. Cuerpo con IDs `REQ-*` / `ADR-*` / fase tocados.

Tipos: `feat`, `fix`, `test`, `chore`, `docs`.

Email de autor en commits: `operaciones@alexendros.dev`.

## Definition of Done

Antes de pedir revisión:

1. Ficha §3 satisfecha.
2. `pnpm check`, `pnpm test`, `pnpm build` en verde (e2e afectados si tocas UI/flujos).
3. Sin secretos ni archivos irrelevantes en el diff.
4. Rutas/componentes nuevos con traza a un REQ.
5. UI: claro/oscuro, teclado, foco, responsive, `prefers-reduced-motion` cuando aplique.
6. El agente NO marca la fase como cerrada ni se auto-mergea.

## Proceso de PR

1. Abre PR a `main` con la plantilla (`.github/PULL_REQUEST_TEMPLATE.md`).
2. Etiqueta temática obligatoria (ADR-0022).
3. CI verde es condición de merge.
4. El decisor revisa el diff y fusiona.
5. No hay auto-merge (ADR-0023: rebase de PRs apiladas, sin auto-merge).

## Contribuciones externas

- Issues y PRs son bienvenidos si respetan AGENTS §4 (autonomía) y no introducen P1/P2 ni dependencias nuevas sin confirmación del decisor.
- No pegues secretos, tokens ni PII en issues, PRs ni logs (ver [SECURITY.md](./SECURITY.md)).
- Cambios de contenido factual (clientes, cifras, legales) requieren firma del decisor (REQ-GLOBAL-008).

## Traza obligatoria

Todo PR DEBE citar los IDs `REQ-*` / `ADR-*` / fase relevantes en descripción y commits. No inventes requisitos: si falta ancla, pregunta.

## Fuentes de verdad

Orden de lectura: README → AGENTS → CONSTITUTION (si aplica) → ROADMAP (fase activa) → SPECS → DESIGN / ARCHITECTURE / CONTENT → DECISIONS.
