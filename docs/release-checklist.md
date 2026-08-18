# Checklist de Release — nuevowebsite-alexendrosdev

**Fase:** 8 — Hardening → v1.0  
**Fecha:** 18-08-2026  
**Objetivo:** Validar que todo está listo para `PROMOTE` a producción y tag `v1.0.0`  
**Responsable:** Decisor (aprobación final) + Agente (preparación)

**Dictamen:** No firmar Fase 8 ni ejecutar `PROMOTE` hasta MITL firmada (P8-2) y gates P8-6.4–6.7. El SHA candidato es **inmutable** (`bcee866`); un commit de **código** nuevo lo invalida (docs-only no).

**SHA candidato (40 hex):** `bcee86683a3326cad523bf2fa9c5cb4fafaaee54` (merge de #74)  
**Preview MITL (artefacto activo):** https://nuevowebsite-alexendrosdev-j6yxr9hji-alexendros-team.vercel.app  
**Issue de seguimiento:** [#64 Release v1.0.0](https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/issues/64)  
**Workflows:** [CI](../.github/workflows/ci.yml) · [Deploy fase](../.github/workflows/deploy-phase.yml) · [Smoke SMTP](../.github/workflows/smoke-smtp.yml) · [Smoke post-deploy](../.github/workflows/smoke-post-deploy.yml) · [Release tag](../.github/workflows/release.yml)

### Evidencias (rellenar en go-live)

| Campo | Valor |
| --- | --- |
| SHA candidato | `bcee86683a3326cad523bf2fa9c5cb4fafaaee54` |
| CI run URL (verde) | https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/actions/runs/32084007480 |
| Preview deploy run / URL | [32085344740](https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/actions/runs/32085344740) · https://nuevowebsite-alexendrosdev-j6yxr9hji-alexendros-team.vercel.app (restaurada tras rollback [32085542656](https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/actions/runs/32085542656)) |
| Simulacro rollback (fecha, SHA_A/B, resultado) | 18-08-2026 · A=`bcee866` B=`3d461da` · OK · [#64](https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/issues/64#issuecomment-5322010931) |
| Smoke SMTP preprod (API + bandeja) | 18-08-2026 · HTTP 200 `{ok:true}` · correo en `operaciones@` (From=`operaciones@`, Reply-To=email formulario) |
| Smoke post-deploy preprod | 18-08-2026 · manual 8/8 rutas + headers + honeypot 200 (script; GHA tras fix allowlist) |
| MITL Playwright preview | 18-08-2026 · 97 tests (chromium + Pixel 5) · `pnpm test:e2e:preview` |
| Firmas Fases 5 / 6 / 7 / 7.z / 8 | ☐ decisor |
| PROMOTE run / Production deployment_id | ☐ post-firmas |
| Smoke postprod | ☐ post-PROMOTE |
| Release `v1.0.0` (tag = mismo SHA) | ☐ post-PROMOTE |

---

## Secuencia canónica (única — R-P0-05)

1. Cerrar R-P0-01…R-P0-05 (código/docs + simulacro rollback).
2. Registrar el SHA candidato inmutable en este checklist y en el issue #64.
3. Confirmar CI verde para ese SHA.
4. Preparar dominio y entorno conforme a ADR-0029.
5. Desplegar exactamente el SHA candidato a preview MITL (`expected_sha`).
6. Completar QA MITL y auditoría manual de accesibilidad.
7. Ejecutar smoke SMTP preproducción (correo en `operaciones@`).
8. Firmar Fases 5, 6, 7, 7.z y 8.
9. Ejecutar `PROMOTE` del mismo artefacto (`expected_sha` + `confirmation=PROMOTE`).
10. Ejecutar smoke postproducción.
11. Crear tag y GitHub Release `v1.0.0` sobre el mismo SHA (`expected_sha`).
12. Archivar evidencias y cerrar issue #64.

---

## Remediación P0

| ID | Acción | Estado | Comentario |
| --- | --- | --- | --- |
| **R-P0-01** | `expected_sha` en Deploy fase y Release | ✅ código | Preview / Production / tag = mismo SHA |
| **R-P0-02** | Rollback por SHA / tag / deployment ID | ✅ código + runbook + simulacro | Preview 18-08 OK (#64) |
| **R-P0-03** | Bypass seguro smoke SMTP | N/A — Vercel Hobby: sin Deployment Protection (feature Pro) | — |
| **R-P0-04** | LCP máx. 2500 ms (OBJ-005) | ✅ | `lighthouserc.json`; sin relajación 2700 |
| **R-P0-05** | Secuencia única en README / handoff / checklist / #64 / Notion | ✅ docs | Este archivo + handoff |

---

## P8-1: Checklist de Release

| Item | Descripción | Estado | Comentario |
|------|-------------|--------|------------|
| **P8-1.1** | `docs/release-checklist.md` creado y vigente | ✅ | Este archivo |
| **P8-1.2** | Revisado por decisor | ☐ | Firma manual |
| **P8-1.3** | MITL Fases 5–7 en preview | ☐ firma | Deploy ✅; Playwright preview ✅; firma decisor P8-2 pendiente |
| **P8-1.4** | Smoke SMTP real | ✅ | `operaciones@` 18-08 + HTTP 200 |
| **P8-1.5** | Tag `v1.0.0` vía `release.yml` | ☐ | ADR-0026 + `expected_sha`; post-PROMOTE |
| **P8-1.6** | Redirecciones legacy | ✅ | N/A (ADR-0013) |
| **P8-1.7** | Rollback documentado y ensayable | ✅ | Runbook + simulacro 18-08 |

### Rollback

Ver [runbook-rollback.md](./runbook-rollback.md). Resumen:

1. Identificar SHA / tag `vX.Y.Z` / `deployment_id` estable.
2. `Deploy fase` con `expected_sha` (+ `rollback_ref` si aplica); preview sin `PROMOTE`.
3. Production: mismo SHA + `confirmation=PROMOTE`.
4. No borrar el tag fallido; documentar en evidencias.

---

## P8-2: Auditoría a11y Manual

| Item | Descripción | Estado | Comentario |
|------|-------------|--------|------------|
| **P8-2.1** | Matriz en `docs/p8-2-a11y-audit.md` | ☐ | Firma decisor |
| **P8-2.2** | Teclado / foco / zoom / temas / reduced-motion | ☐ firma | Playwright preview ✅; visual 0–1 decisor ✅ |
| **P8-2.3** | axe CI sin violaciones bloqueantes | ✅ | 8/8 P0 preview + CI SHA candidato |

---

## P8-3: Lighthouse / Perf

| Item | Descripción | Estado | Comentario |
|------|-------------|--------|------------|
| **P8-3.1** | ≥90 en 4 categorías (8 rutas P0) | ✅ | CI run 32084007480 (LHCI) |
| **P8-3.2** | LCP ≤2500 ms lab (OBJ-005); CLS &lt; 0,1 | ✅ | assertions LHCI SHA candidato |
| **P8-3.3** | DES-07 diferido | ✅ | ADR-0028 |

---

## P8-4: SEO / Seguridad

| Item | Descripción | Estado | Comentario |
|------|-------------|--------|------------|
| **P8-4.1** | Meta / canonical / OG rutas P0 | ✅ | Playwright `seo.spec.ts` en preview |
| **P8-4.2** | robots + sitemap (sin `/catalog`) | ✅ | E2E `seo.spec.ts` |
| **P8-4.3** | Headers (HSTS, CSP, XCTO, Referrer, Permissions, frame) | ✅ | `vercel.json` |
| **P8-4.4** | Rate-limit + honeypot + `Retry-After` | ✅ | unit + `launch.spec.ts` |

---

## P8-5: E2E

| Item | Descripción | Estado | Comentario |
|------|-------------|--------|------------|
| **P8-5.1** | Suite E2E verde | ✅ | 97 tests preview MITL + CI SHA candidato |
| **P8-5.2** | Portfolio OBJ-003 | ✅ | `portfolio.spec.ts` |
| **P8-5.3** | Launch (legales, honeypot, 429/503, móvil) | ✅ | `launch.spec.ts` |
| **P8-5.4** | DES-07 | ✅ diferido | ADR-0028 |

---

## P8-6: Path to v1.0 (GATE) — orden canónico

| Item | Descripción | Estado | Quien | Comentario |
|------|-------------|--------|-------|------------|
| **P8-6.0** | R-P0 cerrados + SHA registrado + CI verde | ✅ | Simulacro + evidencias 18-08 |
| **P8-6.1** | Migrar dominio a este proyecto (ADR-0029) | ✅ | Hub decisor 18-08 |
| **P8-6.2** | MITL preview (`expected_sha`) aprobada | ☐ firma | Preview lista; Playwright OK |
| **P8-6.3** | Smoke SMTP preprod | ✅ | Bandeja 18-08 |
| **P8-6.4** | Firmas Fases 5, 6, 7, 7.z, 8 | ☐ | Decisor |
| **P8-6.5** | `PROMOTE` production (mismo SHA) | ☐ | Decisor · ADR-0025 |
| **P8-6.6** | Smoke postproducción | ☐ | Post-PROMOTE |
| **P8-6.7** | Tag + GitHub Release `v1.0.0` (mismo SHA) | ☐ | Post-PROMOTE · ADR-0026 |

---

## Gates

| Gate | Quien | Bloquea |
|------|-------|---------|
| R-P0-01…05 | Agente + decisor (simulacro) | arranque secuencia |
| MITL + firmas | Decisor | v1.0 |
| Smoke SMTP | Decisor | go-live |
| Migración dominio ADR-0029 | Decisor | producción en apex |
| PROMOTE | Decisor | Production |
| CONTRIBUTING/SECURITY | — | ✅ P7z-7/8 en repo |

---

## Comandos

```bash
pnpm check && pnpm test && pnpm build
# Preview MITL (sin webServer local):
PREVIEW_URL=https://nuevowebsite-alexendrosdev-j6yxr9hji-alexendros-team.vercel.app pnpm test:e2e:preview
TARGET_URL="$PREVIEW_URL" bash scripts/smoke-post-deploy.sh
# Secuencia go-live: firmas → PROMOTE → smoke postprod → Release expected_sha=<SHA> version=1.0.0
```

## Relacionado

- [handoff-p8-6.md](./handoff-p8-6.md)
- [runbook-rollback.md](./runbook-rollback.md)
- [runbook-smoke-smtp.md](./runbook-smoke-smtp.md)
- [remediation-p1-backlog.md](./remediation-p1-backlog.md)
