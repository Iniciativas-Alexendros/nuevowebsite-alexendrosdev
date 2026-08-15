---
name: canonical-docs-sync
description: Después de un cambio de código, detecta qué documentos canónicos del repositorio pueden estar desfasados y propone actualizaciones. Usar al cerrar una sesión, antes de mergear un PR o cuando el usuario pida "actualizar documentación", "sincronizar docs" o "¿qué docs hay que tocar?" en nuevowebsite-alexendrosdev.
metadata:
  source: Adaptado de addyosmani/agent-skills@documentation-and-adrs
  version: "1.0"
  project: nuevowebsite-alexendrosdev
---

# Canonical Docs Sync

Mantiene alineados el código y los documentos canónicos del proyecto. No escribe documentación por documentar: actualiza solo cuando el cambio afecta el contrato, la arquitectura, el diseño, el contenido o el procedimiento operativo.

## Cuándo usar

- Al cerrar una sesión de trabajo.
- Antes de crear un PR que toque API, rutas, componentes, tokens, entidades de contenido o flujos de trabajo.
- Cuando el usuario pregunte "¿qué documentos hay que tocar?", "actualiza docs" o "sincroniza documentación".

## Mapa de documentos canónicos

| Documento | Ámbito | Actualízalo si cambias… |
| --- | --- | --- |
| `README.md` | Pulso, enrutado, exclusiones | Estado del proyecto, instrucciones de arranque, hitos próximos. |
| `CONSTITUTION.md` | Alcance, integraciones, secretos, capacidades | Alcance del MVP, exclusiones, líneas rojas. |
| `SPECS.md` | Requisitos y aceptación | REQ, criterios de aceptación, prioridades. |
| `DECISIONS.md` | Decisiones arquitectónicas | Nuevos ADR, cambios de ADR aceptados. |
| `ARCHITECTURE.md` | Estructura, server/client, endpoints | Rutas, endpoints, secretos, despliegue, fronteras. |
| `DESIGN.md` | Tokens, componentes, a11y | Tokens, componentes canónicos, temas, movimiento. |
| `CONTENT.md` | Textos, entidades, tono | Slugs, entidades, validación editorial, tono. |
| `ROADMAP.md` | Fases, hitos, criterio de salida | Fase activa, hitos completados, exclusiones. |
| `AGENTS.md` | Contrato operativo de agentes | Procedimiento, autonomía, comandos, DoD. |

## Proceso

### 0. Precondiciones

- Estar en un repositorio git.
- Verificar que los documentos canónicos existen antes de leerlos. Si alguno falta, anótalo en lugar de fallar.

### 1. Analizar el diff

```bash
git status --short
git diff --name-only
```

Mapea áreas afectadas a documentos canónicos:

- `src/app/**` → `ARCHITECTURE.md`, `DESIGN.md`, `CONTENT.md`.
- `src/components/**` → `DESIGN.md`, `CONTENT.md`.
- `src/lib/**` → `ARCHITECTURE.md`, `SPECS.md`.
- `src/content/**` → `CONTENT.md`.
- `.github/workflows/**`, `package.json`, scripts → `README.md`, `AGENTS.md`, `ARCHITECTURE.md`.
- Nuevo ADR → `DECISIONS.md`.

Solo analiza los documentos que realmente existan.

### 2. Detectar desfases

Por cada documento relevante, pregunta:

- ¿El cambio introduce una nueva convención no reflejada aquí?
- ¿El documento describe un comportamiento que ya no existe?
- ¿Faltan enlaces a REQ/ADR/fase?
- ¿El README sigue reflejando el estado actual?

### 3. Proponer actualizaciones

No edites documentos canónicos sin indicar por qué. Para cada propuesta:

- Cita el archivo y la sección.
- Explica el desfase.
- Muestra el cambio concreto (diff o texto).
- Indica si requiere aprobación humana (especialmente `CONSTITUTION.md`, textos legales o confidenciales).

### 4. Actualizar índices

- Si creas un ADR, actualiza el índice de `DECISIONS.md`.
- Si cambias un comando canónico (`pnpm ci`, `pnpm check`, etc.), actualiza `AGENTS.md` §8 y `README.md`.
- Si completas un hito, actualiza `ROADMAP.md`.

### 5. Confirmación humana

No actualices:

- `CONSTITUTION.md` sin decisión explícita y ADR.
- Textos legales o confidenciales (`REQ-GLOBAL-008`).
- Decisiones de proveedor, secreto o arquitectura sin confirmación.

## Qué NO hacer

- No añadas comentarios que solo repitan el código.
- No actualices documentos por cambios triviales que no alteran contratos.
- No declares una fase como cerrada: eso es decisión del decisor (`AGENTS.md` §6).
