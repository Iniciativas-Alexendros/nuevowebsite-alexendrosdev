---
name: a11y-performance-auditor
description: Audita accesibilidad y rendimiento de la build de Next.js. Usar cuando haya cambios de UI, antes de mergear un PR con componentes visuales, o cuando el usuario pida "a11y audit", "Lighthouse", "rendimiento" o "¿pasa axe?" en nuevowebsite-alexendrosdev.
metadata:
  source: Adaptado de addyosmani/web-quality-skills@accessibility
  version: "1.0"
  project: nuevowebsite-alexendrosdev
---

# a11y & Performance Auditor

Auditoría de accesibilidad y rendimiento orientada al stack del proyecto: Next.js App Router, Tailwind, React Server Components y los tokens de `DESIGN.md`.

## Cuándo usar

- Después de añadir/modificar componentes, páginas o estilos.
- Antes de pedir revisión humana de un PR con cambios visuales.
- Cuando el usuario pida "a11y audit", "Lighthouse", "rendimiento", "¿pasa axe?" o "mejora accesibilidad".

## Umbrales del proyecto

- Lighthouse móvil ≥ 90 en Performance, Accessibility, Best Practices y SEO.
- axe-core sin violaciones `critical` ni `serious`.
- Cumplimiento con `DESIGN.md`: modo claro/oscuro, foco visible, navegación por teclado, responsive y `prefers-reduced-motion`.

## Proceso

### 0. Precondiciones

- `package.json` presente y scripts `build`, `test:e2e` definidos.
- `@axe-core/playwright` y `@lhci/cli` instalados (ver `devDependencies`).
- Si falta algo, informa antes de auditar.

### 1. Construir

```bash
pnpm build
```

### 2. Medir Lighthouse

El proyecto ya tiene `lighthouserc.json` con umbrales ≥90 y configuración móvil:

```bash
npx lhci autorun
```

Si por alguna razón no estuviera disponible, arranca el servidor y escanea:

```bash
pnpm start &
npx lighthouse http://localhost:3000 --preset=mobile --output=json
```

### 3. Ejecutar axe-core

Usa los tests E2E del proyecto, que ya incluyen escaneos de `@axe-core/playwright`:

```bash
pnpm test:e2e
```

Solo como fallback manual:

```bash
npx axe-core http://localhost:3000 --tags wcag2a,wcag2aa,wcag21aa,best-practice
```

### 3. Revisar manualmente los puntos del canon

Foco (`DESIGN.md` y `AGENTS.md` §5):

- Todos los elementos interactivos tienen `:focus-visible` visible.
- El orden del DOM coincide con el orden visual.
- `outline` no se elimina sin reemplazo.

Teclado:

- Navegación completa con `Tab`, `Shift+Tab`, `Enter`, `Space`, `Esc`.
- Los focos atrapados (modales, menús) se liberan con `Esc`.

Color y contraste:

- Texto normal ≥ 4.5:1, grande ≥ 3:1 (WCAG AA).
- No se transmite información solo por color.

Imágenes y SVG:

- `<img>` con `alt` significativo; decorativas con `alt=""`.
- Iconos en botones tienen `aria-label` o texto oculto visualmente.

Animaciones:

- Respeta `prefers-reduced-motion` para movimientos no esenciales.
- Sin parpadeos > 3 por segundo.

### 4. Priorizar hallazgos

Clasifica cada hallazgo:

- **Bloqueante**: violación `critical`/`serious` de axe o Lighthouse < 90 en cualquier categoría.
- **Alto**: problema de teclado/foco que impide uso; contraste insuficiente en texto principal.
- **Medio**: mejora de semántica, etiquetas ARIA redundantes, optimización de LCP/CLS.
- **Bajo**: refinamientos estéticos de a11y.

### 5. Entregar informe

```markdown
## a11y & Performance Audit

### Lighthouse móvil
| Categoría | Puntuación | Umbral | Estado |
| --- | --- | --- | --- |
| Performance | ... | ≥90 | ✅/❌ |
| Accessibility | ... | ≥90 | ✅/❌ |
| Best Practices | ... | ≥90 | ✅/❌ |
| SEO | ... | ≥90 | ✅/❌ |

### axe-core
- Violaciones críticas/serias: N
- Lista: ...

### Hallazgos manuales
- ...

### Recomendaciones
1. ...
```

## Qué NO hacer

- No añadas estilos arbitrarios si existe un token o componente canónico.
- No ignores una violación de axe porque "es solo visual".
- No cambies la paleta sin revisar el contraste resultante.
