# Checklist de Release — nuevowebsite-alexendrosdev

**Fase:** 8 — Hardening → v1.0  
**Fecha:** 16-08-2026  
**Objetivo:** Validar que todo está listo para `PROMOTE` a producción y tag `v1.0.0`  
**Responsable:** Decisor (aprobación final) + Agente (preparación)

**SHA candidato:** _(rellenar tras fusionar a `main`)_  
**Issue de seguimiento:** [#64 Release v1.0.0](https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/issues/64)  
**Workflows:** [CI](../.github/workflows/ci.yml) · [Deploy fase](../.github/workflows/deploy-phase.yml) · [Smoke SMTP](../.github/workflows/smoke-smtp.yml) · [Release tag](../.github/workflows/release.yml)

---

## P8-1: Checklist de Release

| Item | Descripción | Estado | Comentario |
|------|-------------|--------|------------|
| **P8-1.1** | `docs/release-checklist.md` creado y vigente | ✅ | Este archivo |
| **P8-1.2** | Revisado por decisor | ☐ | Firma manual |
| **P8-1.3** | MITL Fases 5–7 en preview | ☐ | Deploy fase Vercel |
| **P8-1.4** | Smoke SMTP real | ☐ | `operaciones@` + HTTP 200 |
| **P8-1.5** | Tag `v1.0.0` vía `release.yml` | ☐ | ADR-0026 |
| **P8-1.6** | Redirecciones legacy | ✅ | N/A (ADR-0013) |
| **P8-1.7** | Rollback documentado | ✅ | Redeploy tag anterior / Deploy fase |

### Rollback

1. Identificar último tag estable (`vX.Y.Z`) o deployment READY previo.
2. `Deploy fase` con el SHA/tag estable (sin `PROMOTE` si solo es preview).
3. Si producción falló tras `PROMOTE`: redeploy del tag anterior a Production con confirmación explícita.
4. No borrar el tag fallido; documentar en este checklist.

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
| **P8-3.2** | LCP ≤2,7 s lab (OBJ-005 &lt;2,5 s); CLS &lt; 0,1 | ☐ | assertions LHCI |
| **P8-3.3** | DES-07 diferido | ✅ | ADR-0028 |

---

## P8-4: SEO / Seguridad

| Item | Descripción | Estado | Comentario |
|------|-------------|--------|------------|
| **P8-4.1** | Meta / canonical / OG rutas P0 | ✅ código | Verificar en preview |
| **P8-4.2** | robots + sitemap (sin `/catalog`) | ✅ | E2E `seo.spec.ts` |
| **P8-4.3** | Headers (HSTS, CSP, XCTO, Referrer, Permissions, frame) | ✅ | `vercel.json` |
| **P8-4.4** | Rate-limit + honeypot contacto | ✅ | unit + `launch.spec.ts` |

---

## P8-5: E2E

| Item | Descripción | Estado | Comentario |
|------|-------------|--------|------------|
| **P8-5.1** | Suite E2E verde | ☐ | Tras CI del SHA |
| **P8-5.2** | Portfolio OBJ-003 | ✅ | `portfolio.spec.ts` |
| **P8-5.3** | Launch (legales, honeypot, 429/503, móvil) | ✅ | `launch.spec.ts` |
| **P8-5.4** | DES-07 | ✅ diferido | ADR-0028 |

---

## P8-6: Path to v1.0 (GATE)

| Item | Descripción | Estado | Quien | Comentario |
|------|-------------|--------|-------|------------|
| **P8-6.1** | MITL preview aprobada | ☐ | Decisor | |
| **P8-6.2** | Smoke SMTP | ☐ | Decisor + agente dispatch | |
| **P8-6.3** | Firmas Fases 5, 6, 7, 7.z, 8 | ☐ | Decisor | Incl. P6-R3 confidencialidad |
| **P8-6.4** | `PROMOTE` production | ☐ | Decisor | ADR-0025 |
| **P8-6.5** | Tag + GitHub Release `v1.0.0` | ☐ | Agente tras OK | ADR-0026 |
| **P8-6.6** | Migrar dominio a este proyecto | ☐ | Decisor | ADR-0029 |
| **P8-6.7** | Smoke postproducción | ☐ | Decisor | |

---

## Gates

| Gate | Quien | Bloquea |
|------|-------|---------|
| MITL + firmas | Decisor | v1.0 |
| Smoke SMTP | Decisor | go-live |
| Migración dominio ADR-0029 | Decisor | producción en apex |
| PROMOTE | Decisor | Production |
| CONTRIBUTING/SECURITY | — | ✅ P7z-7/8 en repo |

---

## Comandos

```bash
pnpm check && pnpm test && pnpm test:e2e && pnpm build
# Actions → Deploy fase (preview) → Smoke SMTP → (firma) → PROMOTE → Release (tag) v1.0.0
```
