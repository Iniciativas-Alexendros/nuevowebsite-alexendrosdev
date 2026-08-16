# 🧪 P8-5: E2E / Responsive / Ortografía

**Fecha:** 16-08-2026  
**Objetivo:** Validar testing end-to-end, diseño responsive y ortografía en todo el sitio  
**Responsable:** Agente (ejecución tests) + Decisor (validación visual y de contenido)

---

## 🎯 E2E Testing (Playwright)

| # | Test | Descripción | Archivo | Estado |
|---|------|-------------|---------|--------|
| **E2E-1** | Home page load | Verificar que `/` carga correctamente y elementos clave visibles | `home.spec.ts` | ☐ |
| **E2E-2** | Navigation mobile | Menú hamburguesa en móvil, apertura/closure, enlaces funcionales | `navigation.spec.ts` | ☐ |
| **E2E-3** | Formulario contacto | Enviar formulario `/contacto` con datos inválidos y válidos; mensajes de error | `contact-form.spec.ts` | ☐ |
| **E2E-4** | Servicios page | Navegar a `/servicios`, verificar tarjetas y enlaces | `services.spec.ts` | ☐ |
| **E2E-5** | Proyectos page | Navegar a `/proyectos`, filtrar y ver tarjetas | `projects.spec.ts` | ☐ |
| **E2E-6** | Footer links | Todos los enlaces del footer abren destinos correctos (no rotos) | `footer.spec.ts` | ☐ |
| **E2E-6** | Error pages | `404` y `500` pages renderizan correctamente | `error-pages.spec.ts` | ☐ |

---

## 📱 Responsive Testing

| # | Breakpoint | Descripción | Herramienta | Estado |
|---|------------|-------------|-------------|--------|
| **RSP-1** | ≤640px (mobile) | Home: hero visible, nav hamburguesa, CTA accessible, formulario apilado | `pnpm test:e2e --project=chromium` | ☐ |
| **RSP-2** | ≥768px (tablet) | Layout de 2 columnas, imagen hero proporcional, sidebars correctos | mismo comando | ☐ |
| **RSP-3** | ≥1024px (desktop) | Layout completo, sidebar visible, contraste AA, texto legible | mismo comando | ☐ |
| **RSP-4** | ≥1440px (large) | Sin overflow, ancho máximo contenido, lectura cómoda 70-80 chars/line | mismo comando | ☐ |

**Comando completo:**
```bash
pnpm test:e2e   # ejecuta en todos los projects (chromium, firefox, webkit)
# O especificar:
npx playwright test --project=chromium
```

---

## ✍️ Ortografía y Gramática

| # | Elemento | Descripción | Rutas a revisar | Estado |
|---|----------|-------------|-----------------|--------|
| **OR-1** | Títulos y headers | Revisar ortografía en H1, H2, H3 de todas las páginas | Home, /servicios, /proyectos, /contacto | ☐ |
| **OR-2** | Textos de formulario | Labels, placeholders, mensajes de error | /contacto POST route | ☐ |
| **OR-3** | CTA y botones | Texto de botones (CTA, submit, cancelar) | Todo el sitio | ☐ |
| **OR-4** | Contenido editorial | Artículos, descripciones, stack, sobre-mi | `/content/` carpeta, `ROADMAP.md` | ☐ |
| **OR-5** | Idiomas (ES/EN) | Si hay versión inglesa, revisar ambas | Si multi-idioma | ☐ |

**Herramientas sugeridas:**
- `pnpm spellcheck` (si está configurado)
- Revisar manualmente o usar extensión de spell checker del IDE
- Revisar `src/content/*` archivos typados

---

## 📐 Consistencia Visual (Complemento a E2E)

| # | Aspecto | Qué verificar | Estado |
|---|---------|---------------|--------|
| **VIS-1** | Colores consistentes | Variables CSS `--color-...` sin hardcodeados | ☐ |
| **VIS-2** | Tipografía consistente | `font-family`, `font-size`, `line-height` por tipo de elemento | ☐ |
| **VIS-3** | Espaciado consistente | `margin`, `padding` usando `var(--spacing-...)` o tailwind `spacing` scale | ☐ |
| **VIS-4** | Modo oscuro/claro | Si hay `dark` mode, verificar que ambos estados sean coherentes | ☐ |
| **VIS-5** | Componentes UI | `shadcn` components con `className` consistentes, sin overrides locales | ☐ |

---

## 📋 Checklist de Ejecución Rápida

```bash
# 1. Build primero (some checks requieren build previo)
pnpm build

# 2. Ejecutar E2E tests
pnpm test:e2e

# 3. Verificar reportes
# Después de los tests, se generan en playwright-report/
# Abrir: ./playwright-report/index.html

# 4. Revisar responsive manualmente
# - Abrir en navegador, cambiar width del developer tools
# - Probar cada breakpoint: 375px, 768px, 1440px

# 5. Revisar ortografía manual
# - Ir a cada página y leer títulos/texto en voz alta
# - O usar extensión LanguageTool/Grammerly

# 7. Consolidar resultados en este checklist (prellenado)
```

---

## ✅ Criterio de Cierre P8-5

> **P8-5 se considera completado cuando:**
> 1. **E2E suite verde** en todas las rutas críticas (home, servicios, contacto, proyectos)
> 2. **Sin violations de axe-core** en tests E2E (acceso a `setup.node` o `expect(page).toHaveAccessibleRole`)
> 3. **Responsive aprobado** en 3 breakpoints mínimo (mobile/tablet/desktop)
> 4. **Ortografía aprobada** en todos los textos visibles (títulos, labels, CTA, contenido editorial)
> 5. **Reporte de tests guardado** (`./playwright-report/` o equivalente)
> 6. **Hallazgos críticos** atendidos o decisión del decisor registrada

---

## 🛠️ Problemas Comunes y Soluciones

| Problema | Frecuencia | Solución |
|----------|------------|----------|
| Selectores E2E caducados (DOM cambia) | Alta | Usar `data-testid` attributes en lugar de clases CSS |
| Tests flaky (intermitentes) | Media | Aumentar `timeout`, usar `waitFor` en lugar de `sleep` |
| Elementos fuera de viewport | Media | Añadir `await page.waitForSelector` o scroll automático |
| Datos de test inconsistentes | Media | Fixed data en fixtures, no depender de estado dinámico |

---