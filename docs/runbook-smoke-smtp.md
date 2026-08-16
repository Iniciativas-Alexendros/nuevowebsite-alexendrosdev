# Smoke SMTP real (go-live)

Gate de **go-live** (DEC-GO-04): envío real a Proton vía el deployment. **No** es check de cada PR. En CI de PR el adaptador SMTP sigue mockeado ([testing-strategy.md](./testing-strategy.md)).

**Traza:** P7z-3 · DEC-GO-04 · NFR-SEC-002/006 · ADR-0011 · ADR-0025 · Fase 7.z.

---

## Criterio observable

1. El workflow `Smoke SMTP (go-live)` termina en verde (HTTP **200** y cuerpo `{ "ok": true, ... }`).
2. Llega un correo a **`operaciones@alexendros.dev`** (misma bandeja To/From del sync-env) con el asunto/cuerpo del smoke sintético.

Sin (2), el gate de go-live **no** está cumplido aunque el job sea verde.

---

## Prerrequisitos

1. Secretos org `PROTON_*` y repo `VERCEL_*` configurados.
2. Workflow **Sync env → Vercel** (`sync-env-vercel.yml`) ejecutado con éxito.
3. Redeploy del entorno objetivo (**Deploy fase** preview MITL o production tras `PROMOTE`) para que el runtime cargue las vars.
4. URL pública del deployment READY (no asumir alias `git-main` sin verificar).

---

## Cómo ejecutar

1. Actions → **Smoke SMTP (go-live)** → Run workflow.
2. Input `target_url`: origen del deployment, p. ej. `https://….vercel.app` (sin barra final obligatoria; el job normaliza).
3. Revisar el summary del job: status HTTP y `ok`.
4. Abrir la bandeja de `operaciones@` y confirmar el mensaje sintético.

El runner **no** recibe `SMTP_TOKEN` ni `PROTON_*`. Solo hace `POST` a `/api/contact` del deployment (NFR-SEC-002/006).

---

## Payload sintético

Campos mínimos válidos (Zod): nombre, email de prueba, asunto de la lista cerrada, mensaje ≥20 caracteres, `consent: true`, honeypot `website` vacío. Sin PII reales ni tokens.

---

## Diagnóstico rápido

| HTTP | Significado habitual | Acción |
| --- | --- | --- |
| 503 `unavailable` | Vars SMTP ausentes en el runtime | Sync-env + redeploy |
| 502 / provider | Token/host/rechazo Proton | Revisar org secrets (sin pegar valores en logs) |
| 429 | Rate limit | Esperar o otra IP/URL |
| 200 + sin correo | Entrega diferida o filtro | Revisar spam; no reintentar en bucle |

---

## Relacionados

- Workflow: [`.github/workflows/smoke-smtp.yml`](../.github/workflows/smoke-smtp.yml)
- Sync: [`.github/workflows/sync-env-vercel.yml`](../.github/workflows/sync-env-vercel.yml)
- Deploy: [`.github/workflows/deploy-phase.yml`](../.github/workflows/deploy-phase.yml)
- Gate humano v1.0: ROADMAP P8-6
