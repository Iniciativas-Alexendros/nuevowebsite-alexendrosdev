# Handoff P8-6 — gates humanos v1.0

**Fecha:** 18-08-2026  
**Issue:** https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/issues/64  
**Checklist:** [docs/release-checklist.md](./release-checklist.md)  
**Firmas:** [docs/firmas-go-live-v1.0.md](./firmas-go-live-v1.0.md)  
**Dictamen:** MITL + firmas **firmadas 18-08-2026**. PROMOTE disparado 03-09-2026 — **pendiente aprobación entorno GitHub `Production`**.

**SHA candidato (inmutable):** `ffd975d77d79a815c237954842eed092ec2c0d94`  
**Preview MITL:** https://nuevowebsite-alexendrosdev-ifq50j8q2-alexendros-team.vercel.app  
**PROMOTE run (waiting):** https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/actions/runs/33809704201  
**HEAD `main` posterior (#78 CI):** `2f34eac1273eb9cfac8ce763016590ad5e1c8af6` — no invalida el artefacto firmado `ffd975d` para este PROMOTE.

## Secuencia canónica (única — R-P0-05)

1. ~~Cerrar R-P0-01…R-P0-05.~~ ✅
2. ~~SHA candidato + #64.~~ ✅
3. ~~CI verde.~~ ✅ [32094397955](https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/actions/runs/32094397955)
4. ~~Migrar dominio ADR-0029.~~ ✅
5. ~~Deploy preview `ffd975d`.~~ ✅ [32094766662](https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/actions/runs/32094766662)
6. ~~QA MITL + a11y + firma P8-2.~~ ✅ decisor 18-08-2026
7. ~~Smoke SMTP.~~ ✅ GHA [32094878105](https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/actions/runs/32094878105)
8. ~~Firmas Fases 5–8.~~ ✅ decisor 18-08-2026
9. Deploy fase `target=production`, `expected_sha=ffd975d`, `confirmation=PROMOTE`. ☐ **waiting** aprobación Environment `Production` — [run 33809704201](https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/actions/runs/33809704201)
10. Smoke postproducción. ☐
11. Release tag `v1.0.0` + mismo `expected_sha`. ☐
12. Archivar evidencia; cerrar #64. ☐

## Pendiente decisor

- [ ] **Aprobar** el job «Producción tras MITL» en el entorno GitHub `Production` ([run 33809704201](https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/actions/runs/33809704201))
- [ ] Smoke postprod `https://alexendros.dev`
- [ ] Tag `v1.0.0` (workflow Release) con `expected_sha=ffd975d77d79a815c237954842eed092ec2c0d94`
- [ ] Event types Cal.com: [docs/cal-event-types.md](./cal-event-types.md)

## Comandos post-PROMOTE

```bash
TARGET_URL=https://alexendros.dev bash scripts/smoke-post-deploy.sh
# Release: Actions → Release (tag) version=1.0.0 expected_sha=ffd975d77d79a815c237954842eed092ec2c0d94
```
