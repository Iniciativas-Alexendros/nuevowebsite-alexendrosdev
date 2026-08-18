# Checklist de Release — nuevowebsite-alexendrosdev

**Fase:** 8 — Hardening → v1.0  
**Fecha:** 17-08-2026  
**Objetivo:** Validar que todo está listo para `PROMOTE` a producción y tag `v1.0.0`  
**Responsable:** Decisor (aprobación final) + Agente (preparación)

**Dictamen:** No firmar Fase 8 ni ejecutar `PROMOTE` hasta cerrar R-P0-01…R-P0-05 **y** fusionar los PRs de cierre backend (#68 dedup, #69 gates, #70 polish). El SHA `0cee846` queda **invalidado** al integrar esos PRs; el candidato de go-live es el tip de `main` con CI verde **después** del merge.

**SHA candidato (40 hex):** _(rellenar tras fusionar #68–#70 a `main`; no usar `0cee846`)_  
**Issue de seguimiento:** [#64 Release v1.0.0](https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/issues/64)  
**Workflows:** [CI](../.github/workflows/ci.yml) · [Deploy fase](../.github/workflows/deploy-phase.yml) · [Smoke SMTP](../.github/workflows/smoke-smtp.yml) · [Smoke post-deploy](../.github/workflows/smoke-post-deploy.yml) · [Release tag](../.github/workflows/release.yml)

### Evidencias (rellenar en go-live)

| Campo | Valor |
| --- | --- |
| SHA candidato | |
| CI run URL (verde) | |
| Preview deploy run / URL / deployment_id | |
| Simulacro rollback (fecha, SHA_A/B o dpl, resultado) | |
| Smoke SMTP preprod (run + correo OK) | |
| Firmas Fases 5 / 6 / 7 / 7.z / 8 | |
| PROMOTE run / Production deployment_id | |
| Smoke postprod | |
| Release `v1.0.0` (tag = mismo SHA) | |

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
| **R-P0-02** | Rollback por SHA / tag / deployment ID | ✅ código + runbook | Simulacro preview ☐ (humano/agente tras merge) |
| **R-P0-03** | Bypass seguro smoke SMTP | N/A — Vercel Hobby: sin Deployment Protection (feature Pro) | — |
| **R-P0-04** | LCP máx. 2500 ms (OBJ-005) | ✅ | `lighthouserc.json`; sin relajación 2700 |
| **R-P0-05** | Secuencia única en README / handoff / checklist / #64 / Notion | ✅ docs | Este archivo + handoff |

---

## P8-1: Checklist de Release

| Item | Descripción | Estado | Comentario |
|------|-------------|--------|------------|
| **P8-1.1** | `docs/release-checklist.md` creado y vigente | ✅ | Este archivo |
| **P8-1.2** | Revisado por decisor | ☐ | Firma manual |
| **P8-1.3** | MITL Fases 5–7 en preview | ☐ | Deploy fase + `expected_sha` |
| **P8-1.4** | Smoke SMTP real | ☐ | `operaciones@` + HTTP 200 |
| **P8-1.5** | Tag `v1.0.0` vía `release.yml` | ☐ | ADR-0026 + `expected_sha` |
| **P8-1.6** | Redirecciones legacy | ✅ | N/A (ADR-0013) |
| **P8-1.7** | Rollback documentado y ensayable | ✅ / ☐ | Runbook ✅; simulacro preview ☐ |

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
| **P8-2.2** | Teclado / foco / zoom / temas / reduced-motion | ☐ | MITL |
| **P8-2.3** | axe CI sin violaciones bloqueantes | ☐ | Job E2E CI |

---

## P8-3: Lighthouse / Perf

| Item | Descripción | Estado | Comentario |
|------|-------------|--------|------------|
| **P8-3.1** | ≥90 en 4 categorías (8 rutas P0) | ☐ | `lighthouserc.json` |
| **P8-3.2** | LCP ≤2500 ms lab (OBJ-005); CLS &lt; 0,1 | ☐ | assertions LHCI (sin relajación 2700) |
| **P8-3.3** | DES-07 diferido | ✅ | ADR-0028 |

---

## P8-4: SEO / Seguridad

| Item | Descripción | Estado | Comentario |
|------|-------------|--------|------------|
| **P8-4.1** | Meta / canonical / OG rutas P0 | ✅ código | Verificar en preview |
| **P8-4.2** | robots + sitemap (sin `/catalog`) | ✅ | E2E `seo.spec.ts` |
| **P8-4.3** | Headers (HSTS, CSP, XCTO, Referrer, Permissions, frame) | ✅ | `vercel.json` |
| **P8-4.4** | Rate-limit + honeypot + `Retry-After` | ✅ | unit + `launch.spec.ts` |

---

## P8-5: E2E

| Item | Descripción | Estado | Comentario |
|------|-------------|--------|------------|
| **P8-5.1** | Suite E2E verde | ☐ | Tras CI del SHA |
| **P8-5.2** | Portfolio OBJ-003 | ✅ | `portfolio.spec.ts` |
| **P8-5.3** | Launch (legales, honeypot, 429/503, móvil) | ✅ | `launch.spec.ts` |
| **P8-5.4** | DES-07 | ✅ diferido | ADR-0028 |

---

## P8-6: Path to v1.0 (GATE) — orden canónico

| Item | Descripción | Estado | Quien | Comentario |
|------|-------------|--------|-------|------------|
| **P8-6.0** | R-P0 cerrados + SHA registrado + CI verde | ☐ | Agente + decisor | Pre-gate |
| **P8-6.1** | Migrar dominio a este proyecto (ADR-0029) | ☐ | Decisor | Antes del preview go-live |
| **P8-6.2** | MITL preview (`expected_sha`) aprobada | ☐ | Decisor | |
| **P8-6.3** | Smoke SMTP preprod | ☐ | Decisor + agente dispatch | Bandeja |
| **P8-6.4** | Firmas Fases 5, 6, 7, 7.z, 8 | ☐ | Decisor | Incl. P6-R3 confidencialidad |
| **P8-6.5** | `PROMOTE` production (mismo SHA) | ☐ | Decisor | ADR-0025 |
| **P8-6.6** | Smoke postproducción | ☐ | Decisor | |
| **P8-6.7** | Tag + GitHub Release `v1.0.0` (mismo SHA) | ☐ | Agente tras OK | ADR-0026 |

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
pnpm check && pnpm test && pnpm test:e2e && pnpm build
# Secuencia: ver «Secuencia canónica» arriba (no acortar).
# Deploy fase: expected_sha=<SHA> · Smoke SMTP · firmas · PROMOTE · Release expected_sha=<SHA> version=1.0.0
```

## Relacionado

- [handoff-p8-6.md](./handoff-p8-6.md)
- [runbook-rollback.md](./runbook-rollback.md)
- [runbook-smoke-smtp.md](./runbook-smoke-smtp.md)
- [remediation-p1-backlog.md](./remediation-p1-backlog.md)
