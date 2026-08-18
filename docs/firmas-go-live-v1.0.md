# Registro de firmas — go-live v1.0

**Autoridad:** DEC-ROADMAP-03 · ADR-0025 · issue [#64](https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/issues/64)  
**Estado:** **Firmado por el decisor el 18-08-2026** (P8-2 + Fases 5–8). Pendiente: P8-6.5 PROMOTE → postprod → tag.

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

## 1. Firma P8-2 — Auditoría a11y MITL ✅

**Documento detallado:** [docs/p8-2-a11y-audit.md](./p8-2-a11y-audit.md)

| Campo | Valor |
| --- | --- |
| **Dictamen AA global rutas P0** | **Aprobado** |
| **Hallazgos bloqueantes** | Ninguno |
| **Firmado por** | Alexendros (decisor) |
| **Fecha** | 18-08-2026 |
| **Preview revisada** | https://nuevowebsite-alexendrosdev-ifq50j8q2-alexendros-team.vercel.app |
| **SHA** | `ffd975d77d79a815c237954842eed092ec2c0d94` |

---

## 2. Firmas de cierre de fase (P8-6.4) ✅

| Fase | Criterio de salida (resumen) | Firma |
| --- | --- | --- |
| **5** — Captación | Inicio, servicios, contacto P0; formulario probado | ✅ 18-08-2026 |
| **6** — Portfolio | Proyectos/stack/sobre-mi; OBJ-003; P6-R3 confidencialidad | ✅ 18-08-2026 |
| **7** — Legal | Aviso + privacidad; ADR-0027 no bloquea | ✅ 18-08-2026 |
| **7.z** — Pipelines | P7z-1…8; dominio ADR-0029 migrado | ✅ 18-08-2026 |
| **8** — Hardening | P8-1…P8-5 + P8-2 firmado; R-P0 cerrados | ✅ 18-08-2026 |

**Registro GitHub:** comentario decisor en [#64](https://github.com/Iniciativas-Alexendros/nuevowebsite-alexendrosdev/issues/64) (18-08-2026).

---

## 3. Post-firmas

| Paso | Gate | Estado |
| --- | --- | --- |
| P8-6.5 | Deploy fase production + `confirmation=PROMOTE` | ☐ |
| P8-6.6 | Smoke postprod `https://alexendros.dev` | ☐ post-PROMOTE |
| P8-6.7 | Release tag `v1.0.0` mismo SHA | ☐ post-PROMOTE |
| Cierre | Archivar evidencias; cerrar #64 | ☐ |

---

## Relacionado

- [release-checklist.md](./release-checklist.md)
- [handoff-p8-6.md](./handoff-p8-6.md)
- [p8-2-a11y-audit.md](./p8-2-a11y-audit.md)
