# Estrategia de pruebas

Este documento describe las **capas de prueba** del MVP y dónde viven. Deriva de [ADR-0009](../DECISIONS.md) y de [ARCHITECTURE.md](../ARCHITECTURE.md) §3. Los umbrales que bloquean merge están en [AGENTS.md](../AGENTS.md) §8 y se resumen en [quality-gates.md](./quality-gates.md).

**Traza:** ADR-0009 · AGENTS §8 · ARCHITECTURE §3 · DEC-GO-04 · Fase 7.z / P7z-2 · NFR-SEC-002/006.

---

## 1. Capas

| Capa | Qué valida | Dónde (hoy) | Runner |
| --- | --- | --- | --- |
| Unitaria | `src/lib/` y validaciones Zod | `tests/unit/` | Vitest (`pnpm test`; CI con `--coverage`) |
| Integración | `POST /api/contact` (adaptador SMTP mockeado) | `tests/unit/api-contact.test.ts` | Vitest |
| E2E | Navegación crítica, formulario, 404, legales, SEO; axe-core | `tests/e2e/` | Playwright (`pnpm test:e2e`) |

La estructura recomendada en ARCHITECTURE §3 incluye también `tests/integration/`, `tests/fixtures/` y `tests/helpers/`. **No** se crean carpetas vacías “por si acaso” (P1/P2). Cuando un test de integración deje de encajar en `tests/unit/`, se mueve a `tests/integration/` en el PR que lo requiera.

---

## 2. Unitarias

- Alcance de cobertura gate: `src/lib/**` (incl. `src/lib/validations/`).
- Umbral: ≥70 % statements/branches/functions/lines (`vitest.config.ts`; DEC-AGENTS-04).
- Sin red, sin Proton, sin PII reales.

---

## 3. Integración — contacto

- El endpoint `POST /api/contact` se prueba con el adaptador de correo **mockeado** (nunca SMTP real en CI).
- Casos típicos: validación Zod, honeypot, rate limit, degradación 503 sin config, envío ok con mock.
- El smoke real a Proton es **otro** proceso (go-live); ver [runbook-smoke-smtp.md](./runbook-smoke-smtp.md) (P7z-3).

---

## 4. E2E (MVP)

Playwright corre en **cada PR** (check requerido en `ci.yml`): Chromium escritorio + perfil **Pixel 5**. **WebKit** se añade en CI (`CI=1`). Firefox es periódico (`E2E_FIREFOX=1`, workflow semanal / `workflow_dispatch`); no bloquea merge.

Alcance E2E del MVP (DEC-GO / batería 13):

- Navegación crítica (cascarón, rutas P0)
- Formulario de contacto (API mockeada en E2E; no Proton)
- 404
- Páginas legales (`/aviso-legal`, `/privacidad`)
- Complementos ya presentes: catálogo, captación, SEO técnico

### axe-core

- Integrado en specs E2E (`@axe-core/playwright`), helper `tests/e2e/helpers/axe.ts`.
- Violaciones `critical` / `serious` fallan el job.
- Cubre las **8 rutas P0** en cada PR (`tests/e2e/a11y.spec.ts`, OBJ-006). `/catalog` es extra no-P0.

---

## 5. Datos de prueba

- **Siempre sintéticos:** nombres, emails y mensajes inventados.
- **Nunca** PII reales, tokens SMTP, ni secretos de producción en fixtures, logs o aserciones (NFR-SEC-002/006, ADR-0009).
- Capturas de proyectos reales (DES-07) no son fixtures de test; no anticipar assets P1.

---

## 6. Qué no corre en cada PR

| Prueba | Cuándo |
| --- | --- |
| Smoke SMTP real a Proton | Gate de go-live (DEC-GO-04); workflow manual / runbook |
| Smoke post-deploy (rutas, headers, SEO, endpoint) | Gate de go-live (P1-3); [runbook-smoke-post-deploy.md](./runbook-smoke-post-deploy.md) |
| Auditoría a11y manual AA/AAA | Fase 8 (P8-2) |
| Lighthouse en preview Vercel | Sustituido por Lighthouse CI **local** (ADR-0025) |

---

## 7. Comandos

```bash
pnpm test          # Vitest unit/integración
pnpm test:e2e      # Playwright (+ axe)
pnpm ci            # check + test + build (sin E2E ni Lighthouse; esos van en CI)
pnpm ci:fast       # alias de pnpm ci
pnpm ci:full       # ci + test:e2e (Lighthouse permanece en GHA)
```

---

## 8. Relacionados

- [docs/quality-gates.md](./quality-gates.md) — qué bloquea merge
- [AGENTS.md](../AGENTS.md) §8 — umbrales
- [ARCHITECTURE.md](../ARCHITECTURE.md) §3 — árbol `tests/`
- [ADR-0009](../DECISIONS.md) — decisión de capas
