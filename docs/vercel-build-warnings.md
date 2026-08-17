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

## Relacionado

- [release-checklist.md](./release-checklist.md)
- [handoff-p8-6.md](./handoff-p8-6.md)
- ADR-0025 (ignoreCommand) · ADR-0002 (Node 22 / pnpm 10)
