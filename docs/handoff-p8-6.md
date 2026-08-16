# Handoff P8-6 — gates humanos v1.0

**Fecha:** 16-08-2026  
**Issue:** https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/issues/64  
**Checklist:** [docs/release-checklist.md](./release-checklist.md)

## Hecho por el agente (código/docs)

- `/sobre-mi` completo; E2E portfolio OBJ-003 + launch
- Taxonomía asuntos + claims servicios
- CONTRIBUTING.md, SECURITY.md, ADR-0028, ADR-0029
- Actions pin SHA + checksum gitleaks
- `vercel.json`: www→apex + headers seguridad
- Lighthouse CI 8 rutas P0
- `pnpm check` + `pnpm test` + `pnpm test:e2e` (42) verdes en local
- Metadata GitHub (description + topics)
- Notion Fase 8 actualizada

## Siguiente (solo decisor)

1. Revisar/fusionar PR(s) del working tree a `main`
2. Anotar SHA candidato en release-checklist + issue #64
3. Migrar `alexendros.dev` (+www) de `website-alexendrosdev` → `nuevowebsite-alexendrosdev` (ADR-0029)
4. Actions → **Deploy fase** (preview MITL)
5. QA MITL + auditoría a11y manual (`docs/p8-2-a11y-audit.md`)
6. Actions → **Smoke SMTP** → confirmar bandeja `operaciones@`
7. Firmar Fases 5, 6, 7, 7.z, 8 (P6-R3 confidencialidad)
8. Deploy fase `confirmation=PROMOTE`
9. Actions → **Release (tag)** `v1.0.0`
10. Smoke postproducción; archivar evidencia en #64 / Notion

## No hacer

- Auto-PROMOTE
- Tag sin firmas MITL + SMTP
- Pegar secretos en issues
