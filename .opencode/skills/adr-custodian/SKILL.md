---
name: adr-custodian
description: Decide si un cambio requiere un ADR, redacta el registro siguiendo el canon del proyecto y actualiza DECISIONS.md. Usar ante nuevas dependencias, secretos, rutas, entidades, proveedores, auth, pagos, CMS o cualquier cambio estructural en nuevowebsite-alexendrosdev.
metadata:
  source: Adaptado de wshobson/agents@architecture-decision-records y addyosmani/agent-skills@documentation-and-adrs
  version: "1.0"
  project: nuevowebsite-alexendrosdev
---

# ADR Custodian

Custodio de las decisiones arquitectónicas del proyecto. Determina si un cambio requiere ADR, lo redacta con el formato del repo y se asegura de que `DECISIONS.md` y su índice queden coherentes.

## Cuándo activar esta skill

- El usuario propone una dependencia, herramienta, variable de entorno, ruta, entidad de contenido, esquema Zod, proveedor, capacidad de auth/pagos/CMS, o cambio estructural.
- Antes de aceptar un cambio que toque `ARCHITECTURE.md`, `CONSTITUTION.md` o el alcance del MVP.
- Cuando el usuario pida "registrar esta decisión", "escribir ADR" o "¿necesita ADR?".

## Regla de oro

Si el cambio está en la columna "REQUIERE confirmación explícita" de `AGENTS.md` §4, **necesita ADR** (salvo que ya exista uno aceptado que lo cubra).

## Proceso

### 0. Precondiciones

- `DECISIONS.md` debe existir. Si no, no se crean ADRs fuera del canon.
- El cambio propuesto debe estar suficientemente claro para documentar contexto, opciones y consecuencias.

### 1. Detectar si se requiere ADR

Revisa el cambio propuesto contra esta lista derivada de `AGENTS.md` §4 y `CONSTITUTION.md`:

Requiere ADR:

- Nueva dependencia, herramienta o script de terceros.
- Nueva variable de entorno o cambio de `.env.example`.
- Nueva ruta, entidad de contenido o esquema Zod.
- Directiva de cliente fuera de la frontera de `ARCHITECTURE.md` §4.9.
- Afirmaciones profesionales, cifras, legales o nombres de cliente.
- Cualquier P1/P2 o trabajo "por si acaso".
- Alterar un ADR aceptado.
- Auth, base de datos, CMS, checkout, Prisma, Supabase, newsletter, analítica (actualmente fuera del MVP salvo ADR).

No requiere ADR:

- Implementación de un requisito ya aceptado en SPECS/ROADMAP.
- Corrección de tipos, lint o fallos de CI causados por tu propio cambio.
- Refactor local sin cambiar API pública ni contratos Zod.
- Tests que fijan comportamiento ya aceptado.

Si dudas, **para y pregunta** al decisor; no asumas.

### 2. Buscar ADRs existentes

Lee `DECISIONS.md`. Identifica:

- Número siguiente en la secuencia (actualmente ADR-0022 en adelante).
- ADRs relacionados que deban citarse o que este nuevo ADR sustituya.
- Plantilla vigente del proyecto (sección `# Plantilla` de `DECISIONS.md`).

### 3. Redactar el ADR con la plantilla del proyecto

El proyecto guarda los ADRs dentro de `DECISIONS.md` usando bloques `<details>`. Usa exactamente el formato existente:

```markdown
<details>
<summary>**ADR-NNNN** — Título breve</summary>

- Estado: propuesta | aceptada | sustituida | rechazada | retirada
- Fecha: YYYY-MM-DD
- Decisores: [personas o rol]
- Relacionado con: [REQ-, ADR-, ROADMAP, PR, issue]
- Contexto:
  - [Problema y restricciones del MVP]
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
  - [3 meses por defecto o fecha específica]

</details>
```

### 4. Insertar y actualizar índices

1. Añade una línea de resumen en la sección `# Decisiones iniciales propuestas`:
   ```markdown
   - **ADR-NNNN** — Título breve. *(propuesta, YYYY-MM-DD)*
   ```
2. Inserta el bloque `<details>` completo en la sección `# Decisiones registradas`, al final o junto a ADRs relacionados.
3. Si sustituye un ADR anterior, actualiza el estado del antiguo a `sustituida` y añade referencia cruzada en ambos.

### 5. Confirmación humana

No marques un ADR como `Accepted` sin confirmación explícita del decisor. En `AGENTS.md` §4 las decisiones de ese nivel son indelegables.

## Qué NO hacer

- No modifiques un ADR ya aceptado; escribe uno nuevo que lo supere.
- No uses ADRs para detalles de implementación sin trascendencia arquitectónica.
- No omitas las consecuencias negativas.
