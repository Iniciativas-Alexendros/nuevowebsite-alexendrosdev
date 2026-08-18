# Handoff P8-6 — gates humanos v1.0

**Fecha:** 18-08-2026  
**Issue:** https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/issues/64  
**Checklist:** [docs/release-checklist.md](./release-checklist.md)  
**Dictamen:** No firmar Fase 8 ni `PROMOTE` hasta cerrar R-P0-01…R-P0-05.

## Hecho por el agente (código/docs)

- Remediación P0: `expected_sha` en Deploy/Release; rollback (SHA/tag/dpl); smoke SMTP (URL pública); LCP 2500 ms; secuencia única
- `/sobre-mi` completo; E2E portfolio OBJ-003 + launch
- Taxonomía asuntos + claims servicios
- CONTRIBUTING.md, SECURITY.md, ADR-0028, ADR-0029
- Actions pin SHA + checksum gitleaks
- `vercel.json`: www→apex + headers seguridad
- Lighthouse CI 8 rutas P0 (umbral LCP canónico OBJ-005)
- Metadata GitHub (description + topics)

## Secuencia canónica (única — R-P0-05)

1. Cerrar R-P0-01…R-P0-05 (incl. simulacro rollback en preview).
2. Anotar SHA candidato inmutable en [release-checklist.md](./release-checklist.md) + issue #64.
3. Confirmar CI verde para ese SHA.
4. Migrar `alexendros.dev` (+www) de `website-alexendrosdev` → `nuevowebsite-alexendrosdev` (ADR-0029).
5. Actions → **Deploy fase** (`target=preview`, `expected_sha=<SHA>`).
6. QA MITL + auditoría a11y manual (`docs/p8-2-a11y-audit.md`).
7. Actions → **Smoke SMTP** → confirmar bandeja `operaciones@` ([runbook](./runbook-smoke-smtp.md)).
8. Firmar Fases 5, 6, 7, 7.z, 8 (P6-R3 confidencialidad).
9. Deploy fase `target=production`, mismo `expected_sha`, `confirmation=PROMOTE`.
10. Smoke postproducción.
11. Actions → **Release (tag)** `version=1.0.0` + mismo `expected_sha`.
12. Archivar evidencia en #64 / Notion; cerrar #64.

## Pendiente decisor (bloquea go-live)

- [ ] Completar simulacro rollback en preview ([runbook-rollback.md](./runbook-rollback.md))
- [ ] Migración dominio ADR-0029
- [ ] MITL + firmas + PROMOTE (nunca auto)

## No hacer

- Auto-PROMOTE
- Tag sin firmas MITL + SMTP
- Deploy/Release sin `expected_sha` o con SHA distinto al candidato
- Pegar secretos en issues
