# Runbook de rollback (R-P0-02)

**Traza:** ADR-0025 · ADR-0026 · P8-1.7 · R-P0-01/02  
**Workflow:** [Deploy fase (Vercel)](../.github/workflows/deploy-phase.yml)

---

## Principio

Preview, Production y el tag `vX.Y.Z` DEBEN usar el **mismo** `expected_sha` (40 hex) aprobado en el checklist y en el issue #64. El rollback reinstala un SHA/tag/deployment **ya conocido**, no inventa un tip móvil de `main`.

---

## Modos

| Modo | `expected_sha` | `rollback_ref` | Qué hace |
| --- | --- | --- | --- |
| Deploy normal | SHA candidato | _(vacío)_ | Checkout del SHA → build → deploy |
| Rollback por tag | SHA al que apunta el tag | `vX.Y.Z` | Verifica que el tag = SHA → build → deploy |
| Rollback por deployment | SHA del artefacto a restaurar | `dpl_…` o URL `*.vercel.app` | `vercel redeploy --target <preview\|production>` (sin rebuild) |

Production **siempre** exige `confirmation=PROMOTE` (ADR-0025), también en rollback. El job `preview` fuerza `--target preview` para que un `dpl_*` de Production no se redeploye a production sin gate.

---

## Simulacro obligatorio en preview (cierre R-P0-02)

Antes de firmar Fase 8 / PROMOTE:

1. Anotar `SHA_A` (candidato o tip de `main` en el ensayo) y desplegar preview:
   - Actions → **Deploy fase** → `target=preview`, `expected_sha=SHA_A`, `rollback_ref` vacío.
   - Registrar URL y `deployment_id` del summary (`DPL_A`).
2. Desplegar un segundo preview con otro SHA en `main` (`SHA_B`) **o** usar un deployment previo `DPL_B` / tag estable.
3. Rollback en preview hacia el artefacto estable:
   - Por SHA: `expected_sha=SHA_A`, `rollback_ref` vacío (rebuild del SHA_A).
   - Por deployment: `expected_sha=SHA_A`, `rollback_ref=DPL_A` (o URL del preview A).
   - Por tag (si existe): `expected_sha=<sha del tag>`, `rollback_ref=vX.Y.Z`.
4. Verificar que la URL de preview sirve el contenido esperado del artefacto restaurado.
5. Registrar en [release-checklist.md](./release-checklist.md) y en el issue #64: fecha, `SHA_A`/`SHA_B`, run IDs, `deployment_id`, resultado (OK/FAIL).

Sin este simulacro documentado, **R-P0-02 no está cerrado**.

---

## Rollback de Production (solo tras incidente post-PROMOTE)

1. Identificar último SHA/tag/deployment READY bueno.
2. Actions → **Deploy fase** → `target=production`, `expected_sha=<SHA bueno>`, `rollback_ref` según modo, `confirmation=PROMOTE`.
3. Aprobación del entorno GitHub `Production`.
4. Smoke SMTP + smoke postproducción.
5. No borrar el tag fallido; documentar en el checklist.

---

## Fallos frecuentes

| Síntoma | Causa habitual |
| --- | --- |
| `expected_sha DEBE ser SHA completo` | SHA corto o con espacios |
| `no está en origin/main` | SHA de otra rama / no fusionado |
| Tag apunta a otro SHA | `rollback_ref` y `expected_sha` inconsistentes |
| `redeploy` falla | ID/URL incorrectos o token sin permiso |

---

## Relacionado

- [release-checklist.md](./release-checklist.md) — evidencias y firmas
- [runbook-smoke-smtp.md](./runbook-smoke-smtp.md) — smoke tras rollback
- [handoff-p8-6.md](./handoff-p8-6.md) — secuencia canónica de lanzamiento
