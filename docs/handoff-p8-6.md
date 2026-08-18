# Handoff P8-6 — gates humanos v1.0

**Fecha:** 18-08-2026  
**Issue:** https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/issues/64  
**Checklist:** [docs/release-checklist.md](./release-checklist.md)  
**Firmas:** [docs/firmas-go-live-v1.0.md](./firmas-go-live-v1.0.md)  
**Dictamen:** No firmar Fase 8 ni `PROMOTE` hasta MITL firmada + gates P8-6.4–6.7.

**SHA candidato (inmutable):** `bcee86683a3326cad523bf2fa9c5cb4fafaaee54`  
**Preview MITL:** https://nuevowebsite-alexendrosdev-j6yxr9hji-alexendros-team.vercel.app

## Hecho por el agente (código/docs)

- Remediación P0: `expected_sha` en Deploy/Release; rollback (SHA/tag/dpl); smoke SMTP (URL pública); LCP 2500 ms; secuencia única
- `/sobre-mi` completo; E2E portfolio OBJ-003 + launch
- Taxonomía asuntos + claims servicios
- CONTRIBUTING.md, SECURITY.md, ADR-0028, ADR-0029
- Actions pin SHA + checksum gitleaks
- `vercel.json`: www→apex + headers seguridad
- Lighthouse CI 8 rutas P0 (umbral LCP canónico OBJ-005)
- Metadata GitHub (description + topics)
- **18-08:** simulacro rollback R-P0-02 OK; preview MITL desplegada; Playwright 97 tests en preview; smoke SMTP API + bandeja `operaciones@`; allowlist smokes `*-alexendros-team.vercel.app`

## Secuencia canónica (única — R-P0-05)

1. ~~Cerrar R-P0-01…R-P0-05 (incl. simulacro rollback en preview).~~ ✅
2. ~~Anotar SHA candidato inmutable en release-checklist + #64.~~ ✅ (#75)
3. ~~Confirmar CI verde para ese SHA.~~ ✅ [run 32084007480](https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/actions/runs/32084007480)
4. ~~Migrar `alexendros.dev` (+www) → `nuevowebsite-alexendrosdev` (ADR-0029).~~ ✅ (hub 18-08)
5. ~~Deploy fase preview (`expected_sha=bcee866`).~~ ✅ [run 32085344740](https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/actions/runs/32085344740)
6. QA MITL + a11y: bloques 0–1 decisor ✅; Playwright preview ✅ — **firma formal pendiente** (`docs/p8-2-a11y-audit.md` · plantilla `docs/firmas-go-live-v1.0.md`).
7. ~~Smoke SMTP → bandeja `operaciones@`.~~ ✅ 18-08 (From=`operaciones@`, Reply-To=email formulario; ADR-0011)
8. Firmar Fases 5, 6, 7, 7.z, 8 (P6-R3 confidencialidad). ☐ **decisor** — plantilla `docs/firmas-go-live-v1.0.md` §2.
9. Deploy fase `target=production`, mismo `expected_sha`, `confirmation=PROMOTE`. ☐ **decisor**
10. Smoke postproducción. ☐
11. Actions → **Release (tag)** `version=1.0.0` + mismo `expected_sha`. ☐
12. Archivar evidencia en #64 / Notion; cerrar #64. ☐

## Pendiente decisor (bloquea go-live)

- [ ] Firma MITL / P8-2 — completar `docs/p8-2-a11y-audit.md` + `docs/firmas-go-live-v1.0.md` §1
- [ ] Firmas épicas Fases 5–8 — `docs/firmas-go-live-v1.0.md` §2 + comentario #64 + Notion
- [ ] `PROMOTE` + smoke postprod + tag `v1.0.0` (nunca auto)

## No hacer

- Auto-PROMOTE
- Tag sin firmas MITL + SMTP
- Deploy/Release sin `expected_sha` o con SHA distinto al candidato
- Pegar secretos en issues

## Comandos útiles (preview MITL)

```bash
PREVIEW_URL=https://nuevowebsite-alexendrosdev-j6yxr9hji-alexendros-team.vercel.app pnpm test:e2e:preview
TARGET_URL="$PREVIEW_URL" bash scripts/smoke-post-deploy.sh
```
