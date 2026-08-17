# Backlog P1 post-remediación P0 (orden canónico)

Tras cerrar R-P0-01…R-P0-05 y **antes** de ampliar post-v1. Un PR = una unidad verificable (AGENTS §7).

**Estado P0:** ver [release-checklist.md](./release-checklist.md).  
**No bloquean** el cierre de remediación P0; sí mejoran go-live y operación.

| Orden | Unidad | Notas | Estado |
| --- | --- | --- | --- |
| 1 | `Retry-After` en 429 de `POST /api/contact` | Usa `retryAfterMs` existente; sin almacén externo | ✅ en remediación |
| 2 | Completar checklist con SHA, runs, deployment ID, resultados y firmas | Campos en release-checklist; rellenar en go-live | ☐ humano |
| 3 | Smoke post-deploy (rutas, headers, redirects, SEO, endpoint) | Workflow dispatch; [runbook-smoke-post-deploy.md](./runbook-smoke-post-deploy.md) | ✅ código |
| 4 | `package.json` `0.1.0` ↔ tag `v1.0.0` | **Decisión:** independencia documentada (ADR-0026); no exigir bump npm | ✅ doc |
| 5 | Eliminar `unsafe-eval` de CSP; evaluar nonces/hashes | CSP sin eval; `'unsafe-inline'` se mantiene (ADR-0030) | ✅ |
| 6 | Revisar `includeSubDomains` + `preload` HSTS antes de definitivo | Confirmado; no hstspreload.org hasta ADR-0029 | ✅ código / residual dominio |
| 7 | Legales: schema Zod estructurado + firma humana | Además de firma; no sustituye ADR-0027 | ☐ |
| 8 | Revisar alta/SMI, base jurídica, DPF/SCC, exposición datos personales | Humano / asesoría residual post-v1 | ☐ |
| 9 | E2E WebKit + perfil móvil real; Firefox periódico | Chromium + Pixel 5 en cada PR; WebKit en CI; Firefox semanal/`workflow_dispatch` | ✅ |
| 10 | Scripts `ci:fast` y `ci:full` | `package.json`; umbrales §8 intactos | ✅ |
| 11 | Crawlability sobre producción (no solo LHCI local) | Hoy `skipAudits: is-crawlable` en lab | ☐ |
| 12 | Sustituir pruebas regex débiles por validaciones semánticas | Tests API/E2E | ✅ |

## P2 (proceso / docs)

- Placeholders Notion → enlaces válidos
- OpenCode/Cursor y ubicación de skills
- Matriz auditoría WCAG técnica
- Volver a PR pequeños
- Firmar hechos/confidencialidad perfil y proyectos
- Valorar `security@`, CODEOWNERS, aprobaciones especiales

## Post-v1 (ampliaciones)

- Monitorización disponibilidad/errores sin PII
- Lighthouse periódico contra producción
- Comprobador de enlaces rotos
- Regresión visual / matriz multinavegador
- Rate limit distribuido o Vercel Firewall si hay abuso
- Casos de estudio + datos estructurados con contenido firmado
- Analítica y consentimiento solo con disparador P1
