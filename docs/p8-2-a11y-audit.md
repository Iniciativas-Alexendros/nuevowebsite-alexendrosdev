# 🎯 P8-2: Auditoría a11y Manual

**Estado:** Matriz pre-rellenada con evidencia automatizada + MITL visual; **firma formal pendiente del decisor**.  
**Objetivo:** Validar accesibilidad manual complementando axe-core CI  
**Nivel objetivo:** AA global + AAA en cuerpos largos  
**Responsable:** Decisor QA + Agente (preparación checklist)

**Registro canónico de firmas:** [docs/firmas-go-live-v1.0.md](./firmas-go-live-v1.0.md)

---

## 📝 Checklist de Auditoría Manual

### **Nivel AA Global** (requerido para v1.0)

Evidencia base: axe E2E CI + Playwright preview (97 tests, 18-08) + MITL bloques 0–1 (decisor). El decisor confirma o corrige cada fila tras revisar la preview vigente.

| # | Criterio | Cómo verificar | Rutas a tester | Estado |
|---|----------|----------------|----------------|--------|
| **AA-1** | Contraste de color mínimo 4.5:1 para texto normal | DevTools → Accessibility → Contrast Ratio | Home, /servicios, /contacto, /proyectos | ✅ evidencia CI + fix #72 |
| **AA-2** | Contraste 3:1 para texto grande (≥18px o ≥14px negrita) | Mismo método AA-1 | Todas las rutas | ✅ evidencia CI |
| **AA-3** | Enfoque visible en todos los elementos interactivos | Tab por toda página, verificar outline focus | Home, formularios, navegación | ✅ Playwright + MITL 0–1 |
| **AA-4** | Orden de tabulación lógico y significativo | Tab desde inicio hasta fin | Todo el sitio | ✅ Playwright + MITL 0–1 |
| **AA-5** | Enlaces tienen texto descriptivo (no "click aquí") | Revisar HTML, ARIA si aplica | Todo el sitio | ✅ axe CI |
| **AA-6** | Botones e inputs tienen nombre accesible | `<label>` o `aria-label` | Formularios, CTA | ✅ axe CI |
| **AA-7** | Formularios: asociación etiqueta-input correcta | Envío solo con teclado | /contacto | ✅ E2E contacto |
| **AA-8** | Errores de formulario descriptivos y asociados | Datos inválidos | /contacto | ✅ fix foco #73 + E2E |
| **AA-9** | Imágenes: alt vacío o descriptivo | Revisar `<img>` | Todo el sitio | ✅ sin placeholders DES-07 |
| **AA-10** | Skip links funcionan | Tab → saltar al contenido | Todas las páginas | ✅ E2E shell |

### **Nivel AAA Opcional** (recomendado pero no bloqueante)

| # | Criterio | Cómo verificar | Rutas a tester | Estado |
|---|----------|----------------|----------------|--------|
| **AAA-1** | Contraste 7:1 texto normal | Mismo método AA | Opcional | ☐ decisor |
| **AAA-2** | Tamaño texto mínimo 18px (o 14px negrita) | CSS / inspección | Global | ☐ decisor |
| **AAA-3** | Lectores pantalla: orden lógico | Narrator/VoiceOver | Home, /servicios | ☐ opcional |
| **AAA-4** | Márgenes y padding consistentes | CSS variables | Global | ☐ decisor |

---

## 📋 Resultados por ruta (preview MITL)

| Ruta | AA Global | AAA | Observaciones |
|------|-----------|-----|---------------|
| **Home** | ✅ Aprobado (evidencia) | ☐ opcional | axe + Playwright preview 18-08 |
| **/servicios** | ✅ Aprobado (evidencia) | ☐ opcional | idem |
| **/contacto** | ✅ Aprobado (evidencia) | ☐ opcional | foco primer error #73 |
| **/proyectos** | ✅ Aprobado (evidencia) | ☐ opcional | idem |
| **/stack**, **/sobre-mi**, legales | ✅ Aprobado (evidencia) | — | incluidos en suite 8 rutas P0 |

---

## ✅ Criterio de Cierre P8-2

> **P8-2 se considera completado cuando:**
> 1. AA global aprobado en **todas las rutas P0**
> 2. AAA en cuerpos largos registrado (opcional)
> 3. Este checklist documentado
> 4. Hallazgos críticos atendidos o con decisión del decisor
> 5. **Firma formal del decisor** (bloque siguiente)

---

## ✍️ Firma decisor (P8-2 / P8-6.2)

> Completar tras revisar la **preview del SHA candidato vigente** (ver [firmas-go-live-v1.0.md](./firmas-go-live-v1.0.md)).

| Campo | Valor |
| --- | --- |
| **Firmado por** | `[DECISOR: Alexendros]` |
| **Fecha** | `[DECISOR: DD-MM-YYYY]` |
| **Preview MITL** | `[DECISOR: URL]` |
| **SHA candidato** | `[DECISOR: 40 hex]` |
| **Dictamen** | `[DECISOR: AA global aprobado en rutas P0. Sin hallazgos bloqueantes para v1.0.]` |

---

## 🛠️ Comandos de Apoyo

```bash
# Preview MITL (sin webServer local):
PREVIEW_URL=https://…-alexendros-team.vercel.app pnpm test:e2e:preview

# CI local (misma suite que PR):
pnpm test:e2e
```

---
