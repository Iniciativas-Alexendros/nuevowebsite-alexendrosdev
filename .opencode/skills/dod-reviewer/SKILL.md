---
name: dod-reviewer
description: Revisa un cambio contra el Definition of Done del proyecto antes de pedir revisión humana. Usar cuando el usuario pida "revisar esta rama", "¿está listo el PR?", "dod check", o antes de crear un PR en el repositorio nuevowebsite-alexendrosdev.
metadata:
  source: Adaptado de mattpocock/skills@code-review y addyosmani/agent-skills@code-review-and-quality
  version: "1.0"
  project: nuevowebsite-alexendrosdev
---

# DoD Reviewer

Revisión de cambios en **tres ejes paralelos** para verificar que una unidad de trabajo cumple el Definition of Done antes de que el decisor la revise:

1. **Spec** — ¿implementa lo que pedía SPECS/ROADMAP/la ficha de sesión?
2. **Standards** — ¿respeta el canon del repo (AGENTS.md, CONSTITUTION.md, DESIGN.md, ARCHITECTURE.md, CONTENT.md)?
3. **Gates** — ¿pasan `pnpm check`, `pnpm test`, `pnpm build`, Lighthouse ≥90 móvil y axe-core sin violaciones bloqueantes?

## Cuándo usar

- Antes de pedir revisión humana de un PR/rama.
- Cuando el usuario pregunte "¿está listo?", "revisa desde X", "dod check" o "¿cumple el criterio de cierre?".
- Después de terminar una ficha de AGENTS.md §3.

## Proceso

### 0. Precondiciones

- Confirma que estás dentro de un repositorio git: `git rev-parse --is-inside-work-tree`.
- Verifica que `package.json` existe y que los scripts `check`, `test` y `build` están definidos.
- Si falta alguna precondición, detente y avisa antes de continuar.

### 1. Fijar el punto de comparación

Pregunta si no lo dio el usuario. Acepta rama, tag, SHA o `main`. Usa diff de tres puntos:

```bash
git diff <punto>...HEAD
git log <punto>..HEAD --oneline
```

Confirma que el ref existe (`git rev-parse <punto>`) y que el diff no está vacío. Si está vacío, no lanzas sub-agentes.

### 2. Identificar la fuente de Spec

Busca en este orden:

1. Referencias en commits (`#123`, `Closes REQ-…`, fase de `ROADMAP.md`).
2. Ficha de sesión activa (objetivo, traza, criterio de cierre).
3. Archivo en `SPECS.md`, `ROADMAP.md` o `docs/` que coincida con la rama/funcionalidad.
4. Pregunta al usuario si no se encuentra. Si no hay spec, el eje Spec se salta y se indica.

### 3. Identificar fuentes de Standards

Lee solo los documentos canónicos relevantes:

- `AGENTS.md` — ficha §3, autonomía §4, Working Agreement §5, DoD §6, comandos §8.
- `CONSTITUTION.md` — alcance, exclusiones MVP, líneas rojas.
- `DESIGN.md` — tokens, componentes, a11y, modo claro/oscuro, responsive, reduced-motion.
- `ARCHITECTURE.md` — frontera server/client, rutas, endpoints, secretos.
- `CONTENT.md` — entidades, tono, validación editorial.

Además, aplica la **línea base de olores** (Fowler, _Refactoring_, cap. 3) como heurística, salvo que el repo lo anule:

- Nombres misteriosos, código duplicado, envidia de atributos, agrupaciones de datos, obsesión por primitivos, switches repetidos, cirugía de escopeta, cambio divergente, generalidad especulativa, cadenas de mensajes, intermediario, herencia rechazada.

### 4. Ejecutar los Gates

Usa los scripts definidos en `package.json`. En este proyecto:

```bash
pnpm check   # typecheck + lint + format:check
pnpm test    # Vitest
pnpm build   # Next.js
```

Para accesibilidad, el proyecto ya tiene tests E2E con `@axe-core/playwright`:

```bash
pnpm test:e2e
```

Para Lighthouse, preferir la configuración existente (`lighthouserc.json`):

```bash
npx lhci autorun
```

Si `lighthouserc.json` no existe, arranca el servidor y escanea:

```bash
pnpm build && pnpm start &
npx lighthouse http://localhost:3000 --preset=mobile --output=json
```

Umbrales del proyecto (AGENTS.md §8):

- Lighthouse ≥ 90 en las cuatro categorías en móvil.
- axe-core sin violaciones bloqueantes (`critical`/`serious`).
- Cobertura ≥ 70 % en `src/lib/` y validaciones.
- `pnpm check`, `pnpm test` y `pnpm build` en verde.

### 5. Lanzar sub-agentes en paralelo

Cada sub-agente recibe el diff, la lista de commits y su brief; no deben contaminarse entre sí.

**Spec sub-agent**

> Revisa el diff contra la spec proporcionada. Reporta: (a) requisitos que faltan o están parciales; (b) comportamiento añadido fuera de alcance (scope creep); (c) requisitos implementados pero con lógica incorrecta. Cita la línea de la spec. Máx. 400 palabras.

**Standards sub-agent**

> Revisa el diff contra los documentos canónicos listados y la línea base de olores. Reporta: (a) violaciones a estándares documentados (cita archivo + regla); (b) olores de código con el hunk citado. Distingue violaciones duras de juicios. Salta lo que ya valida una herramienta. Máx. 400 palabras.

**Gates sub-agent**

> Ejecuta `pnpm check`, `pnpm test` y `pnpm build`. Si hay UI, añade Lighthouse móvil y axe-core. Reporta: comandos ejecutados, salida relevante, si cada umbral se cumple, y bloqueos de merge. Máx. 400 palabras.

### 6. Agregar

Presenta tres secciones independientes:

```markdown
## Spec
...
## Standards
...
## Gates
...
## Resumen
- Spec: X hallazgos. El más grave: ...
- Standards: Y hallazgos. El más grave: ...
- Gates: ✅/❌ bloqueantes. ...
## Recomendación
Mergeable / Necesita cambios / Bloqueado por gates.
```

No mezcles ni reordenes los hallazgos entre ejes: un cambio puede pasar Spec y fallar Gates, o viceversa.

## Qué NO hacer

- No reescribas código: solo reporta.
- No ignores un gate rojo por tener pocos hallazgos de Standards.
- No inventes requisitos si la spec no está clara.
