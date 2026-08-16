# Gates de calidad (merge)

Este documento **resume** los umbrales que bloquean merge a `main`. La fuente normativa de umbrales es [AGENTS.md](../AGENTS.md) §8 (DEC-AGENTS-04). **No** relaja ni sustituye AGENTS, SPECS ni los ADR citados.

**Traza:** AGENTS §8 · DEC-AGENTS-04 · OBJ-005 · OBJ-006 · NFR-SEC-005 · ADR-0025 · DEC-GO (batería 11) · Fase 7.z / P7z-1.

---

## 1. Principio

- Los gates de esta página son **bloqueantes de merge** en `main` (checks requeridos).
- Cualquier excepción requiere **aprobación explícita del decisor documentada en el PR** (sin override silencioso).
- El presupuesto de JS “extra” **no** es gate (DEC-AGENTS-04).

---

## 2. Comandos canónicos (local)

| Comando | Qué cubre |
| --- | --- |
| `pnpm check` | typecheck + lint + format:check |
| `pnpm test` | Vitest (sin cobertura en el script; CI usa `--coverage`) |
| `pnpm test:e2e` | Playwright + axe-core |
| `pnpm build` | Build de producción |
| `pnpm ci` | check + test + build |

Antes de pedir revisión: typecheck, lint, tests afectados y build en verde (AGENTS §5–§6).

---

## 3. Checks requeridos en CI

Workflow: [`.github/workflows/ci.yml`](../.github/workflows/ci.yml). Dispara en `pull_request` y en `push` a `main`.

| # | Job | Criterio bloqueante |
| --- | --- | --- |
| 1 | Typecheck | `pnpm typecheck` |
| 2 | Lint | `pnpm lint` + `pnpm format:check` |
| 3 | Test (Vitest + cobertura) | Vitest con cobertura; umbrales §4 |
| 4 | Build | `pnpm build` |
| 5 | E2E + axe-core | Playwright; violaciones axe `critical`/`serious` fallan |
| 6 | Secretos + auditoría | gitleaks + `pnpm audit --prod --audit-level=high` |
| 7 | Lighthouse CI | ≥90 en las cuatro categorías (móvil); §5 |

Son **siete** checks requeridos desde el scaffold de Fase 1 (histórico: gate Lighthouse en preview Vercel #11; warm-up local #24; medición actual **local** tras `pnpm build`, ADR-0025).

---

## 4. Cobertura (DEC-AGENTS-04)

- **Umbral:** ≥ **70 %** en statements, branches, functions y lines.
- **Alcance:** `src/lib/**` (incluye validaciones bajo `src/lib/validations/`).
- **Config:** [`vitest.config.ts`](../vitest.config.ts).
- Vigente desde el scaffold; bloqueante de merge.

---

## 5. Lighthouse (OBJ-005)

- **Umbral:** ≥ **90** en performance, accessibility, best-practices y SEO (móvil).
- **Dónde:** CI local tras `pnpm build` + servidor `pnpm start` (no despliega Vercel por PR; ADR-0025).
- **Config:** [`lighthouserc.json`](../lighthouserc.json).

---

## 6. Accesibilidad automatizada (OBJ-006)

- **axe-core** integrado en E2E Playwright sobre las rutas **P0** en **cada PR**.
- Violaciones de severidad `critical` o `serious` bloquean el job E2E.
- Complementa (no sustituye) auditorías manuales AA/AAA de Fase 8.

---

## 7. Seguridad en CI (NFR-SEC-005)

- **Secretos:** gitleaks (`detect --exit-code 1 --redact`).
- **Dependencias:** `pnpm audit --prod --audit-level=high`.

---

## 8. Qué no es gate de merge

| Ítem | Rol |
| --- | --- |
| Presupuesto JS “extra” | No es gate (DEC-AGENTS-04) |
| Smoke SMTP real a Proton | Gate de **go-live** (DEC-GO-04); ver runbook / workflow manual |
| Preview MITL + firma de épica | Gate humano (ADR-0025 / DEC-ROADMAP-03) |
| `PROMOTE` a Production | Confirmación explícita del decisor (ADR-0025) |
| Tag / Release | Versionado ≠ promoción (ADR de versionado en Fase 7.z) |

---

## 9. Cómo añadir un gate

1. Decidir el umbral en un **ADR** nuevo o en **AGENTS.md §8** (DEC-AGENTS-04).
2. Implementarlo en CI (workflow o config) de forma bloqueante.
3. Actualizar **este documento** para que el resumen no quede desfasado.

No se introducen gates “por si acasa” sin ancla canónica.

---

## 10. Relacionados

- [AGENTS.md](../AGENTS.md) §8 — umbrales ejecutables
- [docs/testing-strategy.md](./testing-strategy.md) — capas de prueba (cuando exista)
- [ARCHITECTURE.md](../ARCHITECTURE.md) — estructura `tests/`
- [ADR-0025](../DECISIONS.md) — despliegue por fase; Lighthouse local
