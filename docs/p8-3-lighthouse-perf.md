# 🧪 P8-3: Lighthouse / Performance / Imágenes

**Fecha:** 16-08-2026  
**Objetivo:** Validar métricas de performance y optimización de recursos  
**Meta:** Lighthouse ≥90 en las 4 categorías (móvil)  
**Responsable:** Agente (reporte) + Decisor (validación visual)

---

## 📊 Checklist Lighthouse ≥90 (Móvil)

| Categoría | Métrica | Umbral Mínimo | Herramienta | Estado |
|-----------|---------|---------------|-------------|--------|
| **Performance** | **Performance Score** | ≥90 | Lighthouse CI | ☐ |
| **Performance** | **FCP (First Contentful Paint)** | ≤1.8s | Lighthouse Report | ☐ |
| **Performance** | **LCP (Largest Contentful Paint)** | ≤2.5s | Lighthouse Report | ☐ |
| **Performance** | **TTI (Time to Interactive)** | ≤3.5s | Lighthouse Report | ☐ |
| **Performance** | **TBT (Total Blocking Time)** | ≤150ms | Lighthouse Report | ☐ |
| **Accessibility** | **A11y Score** | ≥90 | Lighthouse Report | ☐ |
| **Best Practices** | **Score** | ≥90 | Lighthouse Report | ☐ |
| **SEO** | **Score** | ≥90 | Lighthouse Report | ☐ |
| **Progressive Web App** | **Score** | ≥90 (opcional) | Lighthouse Report | ☐ |

---

## 🖼️ Optimización de Imágenes

| # | Acción | Formato Objetivo | Herramienta | Estado |
|---|--------|------------------|-------------|--------|
| **IMG-1** | Convertir todas las fotos a WebP/AVIF | WebP + fallback JPEG | `cwebp`, `avifenc` | ☐ |
| **IMG-2** | Imágenes decorativas: `srcset` con tamaños | WebP variants | Configurar en Next.js `<Image>` | ☐ |
| **IMG-3** | Imágenes optimizar `loading="lazy"` | native loading | Uso en galería / abajo de fold | ☐ |
| **IMG-4** | Favicon e iconos en SVG | SVG | Redibujar si son PNG | ☐ |
| **IMG-5** | Imágenes hero comprimidas (<200KB) | WebP/Optimized JPEG | Squoosh, ImageOptim | ☐ |

---

## 📦 Formatos y Fuentes

| # | Elemento | Formato Objetivo | Estado |
|---|----------|------------------|--------|
| **FT-1** | Fuentes: `font-display: swap` en todas | CSS variable | ☐ |
| **FT-2** | Subconjunto de fuentes solo glifos usados | `font-face` `unicode-range` | ☐ |
| **FT-3** | No loading de fuentes innecesarias | `font-display: optional` para secundarias | ☐ |
| **FT-3** | `font-display: swap` en `next/font` | Configurado en `src/app/layout` | ☐ |

---

## 📱 Responsive Breakpoints a Verificar

| Breakpoint | Ancho | Elementos a tester | Estado |
|------------|-------|--------------------|--------|
| **Mobile** | ≤640px | Home hero, nav, tarjetas servicios, formulario contacto | ☐ |
| **Tablet** | ≥768px | Layout de 2 columnas, imagen hero ajustada | ☐ |
| **Desktop** | ≥1024px | Layout completo, sidebar visible, contraste | ☐ |
| **Large** | ≥1440px | Ancho máximo, sin overflow, lectura cómoda | ☐ |

---

## 🧪 Comandos de Ejecución

```bash
# Lighthouse local (móvil) - sobre build de producción
pnpm build      # primero construir
lighthouse http://localhost:3000 --preserve-storage --throttling-criteria=Best-Download-Speeds --device-type=mobile --output=json --lqip --no-view --output-path ./lighthouse-report/

# O usando npm scripts si están definidos
# npx lighthouse http://localhost:3000 --view --mobile

# Ver umbrales custom (crear .lighthouserc.json)
# Ver DEC-AGENTS-04 umbrales ejecutables: Lighthouse ≥90 en 4 categorías móvil

# Checklist de perf propio
pnpm perf:check   # si script definido en package.json
```

---

## 📈 Métricas Objetivo (DEC-AGENTS-04)

Estos umbrales son **ejecutables y bloqueantes de merge**:

| Métrica | Umbral | Categoría |
|---------|--------|-----------|
| LCP | ≤2.5s | Performance |
| TBT | ≤150ms | Performance |
| FCP | ≤1.8s | Performance |
| TTI | ≤3.5s | Performance |
| Accessibility score | ≥90 | A11y |
| Best Practices score | ≥90 | Best Practices |
| SEO score | ≥90 | SEO |

**Notas:**
- Medidos **después de `pnpm build`** (producción)
- En CI local, no en desarrollo (`next dev`)
- Si no se alcanzan, optimizar imágenes, fonts, code splitting

---

## 🔧 Problemas Comunes en Next.js + Tailwind

| Problema | Impacto | Solución |
|----------|---------|----------|
| Imágenes sin `width/height` causan CLS | Alto | Usar `next/image` con sizes o `aspect-ratio` CSS |
| Fonts de Google sin `preconnect` | Medio | `<link rel="preconnect">` en `layout.tsx` |
| Tailwind clases no purgadas | Medio | Mantener ` purge: []` actualizado o usar `safelist` |
| Scripts terceros bloquean TTI | Alto | Mover al fondo o usar `defer` / `async` |
| LCP no es hero image | Medio | Verificar qué elemento es LCP y optimizarlo |

---

## ✅ Criterio de Cierre P8-3

> **P8-3 se considera completado cuando:**
> 1. **Lighthouse ≥90** en las **4 categorías** (Performance, A11y, Best Practices, SEO) en móvil
> 2. **LCP ≤2.5s**, **TBT ≤150ms**, **FCP ≤1.8s** (métricas individuales)
> 3. **Imágenes optimizadas** en WebP/AVIF con fallback apropiado
> 4. **Fonts optimizadas** con `font-display: swap`
> 5. **Reporte Lighthouse guardado** (`./lighthouse-report/` o equivalente)
> 6. **Hallazgos críticos** atendidos o decisión del decisor registrada

---

## 🛠️ Próximos Pasos Después de P8-3

Una vez P8-3 aprobado, pasar a:
- **P8-4**: SEO/seguridad/observabilidad (meta tags, CSP, headers)
- **P8-5**: E2E/responsive/ortografía (testing funcional)
- **P8-6**: Gate humano MITL + smoke + PROMOTE (el bottlenecks final)

---