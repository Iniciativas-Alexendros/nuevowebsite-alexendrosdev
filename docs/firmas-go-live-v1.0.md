# Registro de firmas — go-live v1.0

**Autoridad:** DEC-ROADMAP-03 · ADR-0025 · issue [#64](https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/issues/64)  
**Estado:** Plantilla preparada — **pendiente confirmación del decisor** (no equivale a firma hasta completar los campos marcados con `[DECISOR]`).

---

## Artefacto MITL (completar tras merge #76 + redeploy)

| Campo | Valor |
| --- | --- |
| **SHA candidato** | `[DECISOR: 40 hex tras merge #76 + CI verde]` |
| **CI run URL** | `[DECISOR: enlace run verde]` |
| **Preview MITL URL** | `[DECISOR: URL tras Deploy fase expected_sha]` |
| **Preview deploy run** | `[DECISOR: enlace Actions Deploy fase]` |
| **SHA previo (invalidado por #76)** | `bcee86683a3326cad523bf2fa9c5cb4fafaaee54` |

> Tras fusionar PR #76 hay cambio de código (headers). **No firmar** contra `bcee866` ni su preview anterior sin redeploy.

---

## 1. Firma P8-2 — Auditoría a11y MITL

**Documento detallado:** [docs/p8-2-a11y-audit.md](./p8-2-a11y-audit.md)

**Evidencia agente (18-08, preview `bcee866`):**

- Playwright preview: 97 tests (chromium + Pixel 5), axe 8/8 rutas P0
- MITL visual bloques 0–1: decisor ✅ (sesión previa)
- Fixes mergeados: contraste `--foreground-subtle` (#72), menú móvil + `aria-current` (#72), foco primer error contacto (#73)

| Campo | Valor |
| --- | --- |
| **Dictamen AA global rutas P0** | `[DECISOR: Aprobado / Rechazado]` |
| **Hallazgos bloqueantes** | `[DECISOR: ninguno / describir]` |
| **Firmado por** | `[DECISOR: Alexendros]` |
| **Fecha** | `[DECISOR: DD-MM-YYYY]` |
| **Preview revisada** | `[DECISOR: URL]` |
| **SHA** | `[DECISOR: 40 hex]` |

**Instrucción decisor:** revisar preview → completar matriz en `p8-2-a11y-audit.md` → rellenar tabla anterior → marcar P8-2.1 / P8-2.2 / P8-6.2 en [release-checklist.md](./release-checklist.md).

---

## 2. Firmas de cierre de fase (P8-6.4)

Una sola preview MITL valida Fases 5, 6, 7, 7.z y 8 (código integrado en `main`).

| Fase | Criterio de salida (resumen) | Confidencialidad / exclusiones | Firma |
| --- | --- | --- | --- |
| **5** — Captación | Inicio, servicios, contacto P0; formulario probado; metadata; sin JS crítico | Smoke SMTP ✅ 18-08 | ☐ `[DECISOR]` |
| **6** — Portfolio | Proyectos/stack/sobre-mi tipados; OBJ-003; SEO/responsive | P6-R3 confidencialidad revisada; DES-07 diferido (ADR-0028) | ☐ `[DECISOR]` |
| **7** — Legal | Aviso + privacidad coherentes; footer/form OK | Asesoría externa post-v1.0 (ADR-0027; no bloquea) | ☐ `[DECISOR]` |
| **7.z** — Pipelines | P7z-1…8 en repo; sin auto-PROMOTE; dominio ADR-0029 migrado | No sustituye firmas 5–7 | ☐ `[DECISOR]` |
| **8** — Hardening | P8-1…P8-5 + P8-2 firmado; R-P0 cerrados | No PROMOTE hasta esta fila completa | ☐ `[DECISOR]` |

**Bloque de firma unificado (copiar a #64 y Notion):**

```markdown
## Firmas de cierre de fase — DEC-ROADMAP-03

**Decisor:** [DECISOR: Alexendros]
**Fecha:** [DECISOR: DD-MM-YYYY]
**SHA candidato:** [DECISOR: 40 hex]
**Preview MITL:** [DECISOR: URL]
**CI verde:** [DECISOR: URL run]

Confirmo haber revisado la preview MITL y apruebo el criterio de salida de las Fases 5, 6, 7, 7.z y 8.

**Exclusiones explícitas:** DES-07 (ADR-0028); asesoría legal externa post-v1.0 (ADR-0027).

Autorizo continuar con P8-6.5 PROMOTE sobre el mismo SHA (ejecución separada).
```

---

## 3. Post-firmas (no ejecutar antes de §1 y §2)

| Paso | Gate | Responsable |
| --- | --- | --- |
| P8-6.5 | Deploy fase `target=production`, `expected_sha`, `confirmation=PROMOTE` | Decisor |
| P8-6.6 | Smoke postprod (`TARGET_URL=https://alexendros.dev bash scripts/smoke-post-deploy.sh`) | Decisor |
| P8-6.7 | Release tag `v1.0.0` mismo SHA (ADR-0026) | Decisor |
| Cierre | Archivar evidencias; cerrar #64 | Decisor |

---

## 4. Dónde registrar (checklist DEC-ROADMAP-03)

| Canal | Acción |
| --- | --- |
| **GitHub [#64](https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/issues/64)** | Comentario con bloque §2 + enlace a este archivo |
| **Repo** | Actualizar este archivo + `release-checklist.md` + `p8-2-a11y-audit.md` + `ROADMAP.md` (residuales) |
| **Notion** | [Registro de firmas go-live v1.0](https://app.notion.com/p/3c07ded224cb818a951cf5e6c3146def) + sección en cada ficha de fase |
| **Hub proyecto** | Actualizar «Próximo hito» y orden de ejecución |

---

## Relacionado

- [release-checklist.md](./release-checklist.md)
- [handoff-p8-6.md](./handoff-p8-6.md)
- [p8-2-a11y-audit.md](./p8-2-a11y-audit.md)
