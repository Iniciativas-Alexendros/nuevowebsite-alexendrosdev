# Warnings de build / deploy Vercel (17-08-2026; Node 24 — ADR-0031 enmienda 18-08-2026)

**Traza:** ADR-0002 · ADR-0025 · ADR-0031 · Fase 8 · remediación go-live  
**Proyecto:** `nuevowebsite-alexendrosdev` (`prj_cZGp4fGW2WG9mAlkVWjNQIXwKjYt`)

## Hallazgos (logs + API proyecto)

| ID | Síntoma | Causa | Solución definitiva | Estado |
| --- | --- | --- | --- | --- |
| **VW-1** | `Warning: Detected "engines": { "node": ">=…" } … will automatically upgrade` | Rangos abiertos en `engines`; Vercel mapea al último major | `engines.node: "24.x"` alineado con `.nvmrc` / ADR-0031 | ✅ repo |
| **VW-2** | Mismatch panel Vercel ↔ `engines` / `.nvmrc` | Settings del proyecto desalineados del pin del repo | Pin `24.x` en `package.json` + **decisor:** Settings → Node.js Version → **24.x** | ✅ repo · ☐ panel |
| **VW-3** | `Warning: Next.js ignored pnpm-lock.yaml in … outside the current Git repository` / pedir `turbopack.root` | Lockfile padre (`~/pnpm-lock.yaml`) hace que Turbopack infiera mal la raíz | `turbopack.root` + `outputFileTracingRoot` = raíz del paquete en [`next.config.ts`](../next.config.ts) | ✅ repo |
| **VW-4** | Deployments GitHub en estado **CANCELED** («Ignored Build Step») en cada push/PR | `vercel.json` → `ignoreCommand: exit 0` (ADR-0025: sin preview por PR) | **Intencional.** No es fallo. Deploy real solo vía workflow **Deploy fase** | ✅ doc |
| **VW-5** | `framework: null` en API del proyecto pese a `"framework": "nextjs"` en `vercel.json` | Metadato de proyecto legacy / prebuilt CLI | Mantener `framework` en `vercel.json`. Si el panel muestra «Other», fijar Framework Preset = Next.js (decisor) | ☐ panel opcional |

## Qué no apareció

- Runtime errors en ventana 7d (API Vercel): ninguno.
- Build logs del deploy prebuilt en Vercel: solo «Using prebuilt build artifacts» (el `next build` ocurre en Actions / `vercel build` local).

## Cómo verificar

```bash
node -v   # DEBE ser 24.x (local y CI vía .nvmrc)
pnpm build   # no DEBE mostrar ⚠ de lockfile ni turbopack.root
# Tras merge: Deploy fase → summary sin warning de engines >=
```

## Verificación panel (actualizar tras enmienda ADR-0031)

Fuente: API `GET /v9/projects/…` (Build & Deployment / Framework Settings).

| Setting | Valor actual | Esperado | Veredicto |
| --- | --- | --- | --- |
| Framework | `nextjs` | Next.js | OK (VW-5 cerrado) |
| Node.js Version | _(verificar)_ | **24.x** (ADR-0031) | ☐ decisor: alinear panel |
| Build Command | `null` (default Next) | Override vacío | OK |
| Install Command | `null` (pnpm vía `packageManager`) | Override vacío | OK |
| Output Directory | `null` (`.next`) | Override vacío | OK |
| Root Directory | `null` (raíz repo) | Override vacío | OK |
| Dev Command | `null` | Override vacío | OK |
| Ignore Build Step (API proyecto) | `null` | — | OK: manda `vercel.json` → `ignoreCommand: exit 0` (ADR-0025); CANCELED en PR lo confirma |
| Production Branch | `main` | `main` | OK |
| Function region | `iad1` | cualquiera estable | OK |
| **Web Analytics** | **desactivado** | MVP: sin analítica | OK |
| **Speed Insights** | **desactivado** | MVP: sin analítica | OK |

### Acción residual (decisor)

**VW-2:** Settings → Node.js Version → **24.x** (alinear con `.nvmrc` y `engines`).

Si el panel sigue mostrando «Awaiting Data», confirmar con **Disable** en Analytics / Speed Insights (UI). En código no hay paquetes de analítica; los toggles API ya están en `false`.
