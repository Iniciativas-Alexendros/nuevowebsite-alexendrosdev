# Registro de firmas — go-live v1.0

**Autoridad:** DEC-ROADMAP-03 · ADR-0025 · issue [#64](https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/issues/64)  
**Estado:** SHA candidato registrado — **pendiente firma del decisor** (campos `[DECISOR]` en bloques §1–§2).

---

## Artefacto MITL (vigente 18-08 post-#76)

| Campo | Valor |
| --- | --- |
| **SHA candidato** | `ffd975d77d79a815c237954842eed092ec2c0d94` (merge PR #76) |
| **CI run URL** | https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/actions/runs/32094397955 |
| **Preview MITL URL** | https://nuevowebsite-alexendrosdev-ifq50j8q2-alexendros-team.vercel.app |
| **Preview deploy run** | https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/actions/runs/32094766662 |
| **SHA previo (invalidado)** | `bcee86683a3326cad523bf2fa9c5cb4fafaaee54` (merge #74) |

---

## 1. Firma P8-2 — Auditoría a11y MITL

**Documento detallado:** [docs/p8-2-a11y-audit.md](./p8-2-a11y-audit.md)

**Evidencia previa (preview `bcee866`, válida salvo headers #76):**

- Playwright preview: 97 tests (chromium + Pixel 5), axe 8/8 rutas P0
- MITL visual bloques 0–1: decisor ✅
- Fixes en `ffd975d`: allowlist smokes, `browsing-topics` Permissions-Policy

| Campo | Valor |
| --- | --- |
| **Dictamen AA global rutas P0** | `[DECISOR: Aprobado / Rechazado]` |
| **Hallazgos bloqueantes** | `[DECISOR: ninguno / describir]` |
| **Firmado por** | `[DECISOR: Alexendros]` |
| **Fecha** | `[DECISOR: DD-MM-YYYY]` |
| **Preview revisada** | https://nuevowebsite-alexendrosdev-ifq50j8q2-alexendros-team.vercel.app |
| **SHA** | `ffd975d77d79a815c237954842eed092ec2c0d94` |

---

## 2. Firmas de cierre de fase (P8-6.4)

| Fase | Criterio de salida (resumen) | Firma |
| --- | --- | --- |
| **5** — Captación | Inicio, servicios, contacto P0; formulario probado | ☐ `[DECISOR]` |
| **6** — Portfolio | Proyectos/stack/sobre-mi; OBJ-003; P6-R3 | ☐ `[DECISOR]` |
| **7** — Legal | Aviso + privacidad; ADR-0027 no bloquea | ☐ `[DECISOR]` |
| **7.z** — Pipelines | P7z-1…8; dominio ADR-0029 migrado | ☐ `[DECISOR]` |
| **8** — Hardening | P8-1…P8-5 + P8-2 firmado; R-P0 cerrados | ☐ `[DECISOR]` |

**Bloque de firma unificado (copiar a #64 y Notion):**

```markdown
## Firmas de cierre de fase — DEC-ROADMAP-03

**Decisor:** Alexendros
**Fecha:** DD-MM-YYYY
**SHA candidato:** ffd975d77d79a815c237954842eed092ec2c0d94
**Preview MITL:** https://nuevowebsite-alexendrosdev-ifq50j8q2-alexendros-team.vercel.app
**CI verde:** https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/actions/runs/32094397955

Confirmo haber revisado la preview MITL y apruebo el criterio de salida de las Fases 5, 6, 7, 7.z y 8.

Autorizo continuar con P8-6.5 PROMOTE sobre el mismo SHA.
```

---

## 3. Post-firmas

| Paso | Gate |
| --- | --- |
| P8-6.5 | Deploy fase production + `confirmation=PROMOTE` |
| P8-6.6 | Smoke postprod `https://alexendros.dev` |
| P8-6.7 | Release tag `v1.0.0` mismo SHA |
| Cierre | Archivar evidencias; cerrar #64 |

---

## 4. Dónde registrar

| Canal | Enlace |
| --- | --- |
| **GitHub #64** | Comentario con bloque §2 |
| **Notion** | [Registro de firmas go-live v1.0](https://app.notion.com/p/3c07ded224cb818a951cf5e6c3146def) |

---

## Relacionado

- [release-checklist.md](./release-checklist.md)
- [handoff-p8-6.md](./handoff-p8-6.md)
- [p8-2-a11y-audit.md](./p8-2-a11y-audit.md)
