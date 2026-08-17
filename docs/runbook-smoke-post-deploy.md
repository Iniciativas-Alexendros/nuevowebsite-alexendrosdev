# Runbook — smoke post-deploy (P1-3)

**Traza:** P1-3 · ADR-0030 · NFR-SEC-002/006 · R-P0-03.

Comprueba un deployment ya publicado: ocho rutas P0 (200), cabeceras de seguridad (CSP **sin** `unsafe-eval`, HSTS con `includeSubDomains` y `preload`), SEO mínimo (`lang`, canonical, sitemap) y `POST /api/contact` sintético (honeypot → 200, o 503 si SMTP no está configurado).

**No** es gate de PR. **No** sustituye el [smoke SMTP](./runbook-smoke-smtp.md) (ese confirma el correo en `operaciones@`).

## Cómo ejecutarlo

1. Preview MITL o producción con SHA conocido.
2. GitHub Actions → **Smoke post-deploy** → `workflow_dispatch`.
3. `target_url`: origen `https://host` **sin path** (misma allowlist que el smoke SMTP).

El job no imprime el cuerpo de `POST /api/contact`.

## Criterio de OK

- Ocho rutas P0 → HTTP 200.
- Headers: `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, CSP presente y sin `unsafe-eval`, HSTS con `includeSubDomains` y `preload`.
- En apex `alexendros.dev`: `www` redirige (301/302/307/308).
- Home con `lang="es"` y `rel="canonical"`; `/sitemap.xml` es un `urlset`.
- `POST /api/contact` honeypot → 200 o 503.

## Si falla

| Señal | Qué revisar |
| --- | --- |
| 401/403 | Deployment Protection activa; deshabilitar o usar URL pública |
| CSP con `unsafe-eval` | `vercel.json` / `src/lib/security-headers.ts` (ADR-0030) |
| HSTS incompleto | Mismo módulo; no enviar a hstspreload.org hasta migrar el dominio (ADR-0029) |
| Contacto ≠ 200/503 | Logs de función **sin** pegar PII; no es el smoke SMTP |
