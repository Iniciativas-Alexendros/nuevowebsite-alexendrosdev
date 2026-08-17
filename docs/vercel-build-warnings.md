# Warnings de build / deploy Vercel (17-08-2026)

**Traza:** ADR-0002 · ADR-0025 · Fase 8 · remediación go-live  
**Proyecto:** `nuevowebsite-alexendrosdev` (`prj_cZGp4fGW2WG9mAlkVWjNQIXwKjYt`)

## Hallazgos (logs + API proyecto)

| ID | Síntoma | Causa | Solución definitiva | Estado |
| --- | --- | --- | --- | --- |
| **VW-1** | `Warning: Detected "engines": { "node": ">=…" } … will automatically upgrade` | `package.json` tenía `>=22.0.0`; Vercel mapea rangos abiertos al **último major** (hoy 24.x) | `engines.node: "22.x"` alineado con `.nvmrc` / ADR-0002 | ✅ repo |
| **VW-2** | Proyecto Vercel en **Node 24.x** mientras el contrato es Node 22 | Settings del proyecto desalineados; `>=22` no fijaba 22 | Pin `22.x` en `package.json` (override). **Decisor:** Settings → Node.js Version → **22.x** para eliminar el warning de mismatch UI↔engines | ✅ repo · ☐ panel |
| **VW-3** | `Warning: Next.js ignored pnpm-lock.yaml in … outside the current Git repository` / pedir `turbopack.root` | Lockfile padre (`~/pnpm-lock.yaml`) hace que Turbopack infiera mal la raíz | `turbopack.root` + `outputFileTracingRoot` = raíz del paquete en [`next.config.ts`](../next.config.ts) | ✅ repo |
| **VW-4** | Deployments GitHub en estado **CANCELED** («Ignored Build Step») en cada push/PR | `vercel.json` → `ignoreCommand: exit 0` (ADR-0025: sin preview por PR) | **Intencional.** No es fallo. Deploy real solo vía workflow **Deploy fase** | ✅ doc |
| **VW-5** | `framework: null` en API del proyecto pese a `"framework": "nextjs"` en `vercel.json` | Metadato de proyecto legacy / prebuilt CLI | Mantener `framework` en `vercel.json`. Si el panel muestra «Other», fijar Framework Preset = Next.js (decisor) | ☐ panel opcional |

## Qué no apareció

- Runtime errors en ventana 7d (API Vercel): ninguno.
- Build logs del deploy prebuilt en Vercel: solo «Using prebuilt build artifacts» (el `next build` ocurre en Actions / `vercel build` local).

## Cómo verificar

```bash
pnpm build   # no DEBE mostrar ⚠ de lockfile ni turbopack.root
# Tras merge: Deploy fase → summary sin warning de engines >=
```

## Verificación panel (17-08-2026, post-ajuste decisor)

Fuente: API `GET /v9/projects/…` (Build & Deployment / Framework Settings).

| Setting | Valor actual | Esperado | Veredicto |
| --- | --- | --- | --- |
| Framework | `nextjs` | Next.js | OK (VW-5 cerrado) |
| Node.js Version | `22.x` | 22.x (ADR-0002) | OK (VW-2 cerrado) |
| Build Command | `null` (default Next) | Override vacío | OK |
| Install Command | `null` (pnpm vía `packageManager`) | Override vacío | OK |
| Output Directory | `null` (`.next`) | Override vacío | OK |
| Root Directory | `null` (raíz repo) | Override vacío | OK |
| Dev Command | `null` | Override vacío | OK |
| Ignore Build Step (API proyecto) | `null` | — | OK: manda `vercel.json` → `ignoreCommand: exit 0` (ADR-0025); CANCELED en PR lo confirma |
| Production Branch | `main` | `main` | OK |
| Function region | `iad1` | cualquiera estable | OK |
| **Web Analytics** | **habilitado** (id presente) | MVP: sin analítica | **Desviar / apagar** (CONSTITUTION / SPECS) |
| **Speed Insights** | **habilitado** (id presente, sin datos) | MVP: sin analítica | **Desviar / apagar** |

### Acción residual (decisor)

En el mismo panel (o Product → Analytics / Speed Insights): **desactivar** Web Analytics y Speed Insights hasta que exista disparador P1 + ADR. No son Framework Settings estrictos, pero viven en el proyecto y contradicen el alcance P0.
