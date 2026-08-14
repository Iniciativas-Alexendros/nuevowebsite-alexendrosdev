# DESIGN.md

Abrir cuando: Tokens, componentes, temas, accesibilidad visual o movimiento.
Aprobado: 13 de agosto de 2026
Audiencia: Diseño, Agente
Autoridad: Derivada
Clase: Obligatorio
Días para revisión: 90
En repo: Sí
Estado: Aprobado
Orden: 5
Propósito: Define cómo se presenta y se comporta la interfaz.
Reforma: ADR + decisor
Responsable: Alexendros
Revisión: 13 de noviembre de 2026
Rol: Diseño
Ruta: ./DESIGN.md

<aside>
📌

**Propósito**

[DESIGN.md](./DESIGN.md) definirá el sistema de diseño completo del sitio.

Debe establecer los principios visuales, los tokens, las reglas de composición, los componentes canónicos, el comportamiento responsive, la accesibilidad visual y la gobernanza de cambios.

Debe permitir crear una página nueva o modificar una existente sin introducir estilos arbitrarios, colores no controlados, variantes duplicadas ni componentes que reproduzcan funcionalidades ya existentes.

El sistema se inspirará en shadcn/ui por su modelo de componentes accesibles, componibles y mantenidos como código propio del proyecto, no por la reproducción literal de su estética.

</aside>

<aside>
✅

**Batería DESIGN respondida (13-08-2026)** — decisiones DES-01–DES-08 incorporadas en las secciones correspondientes y registradas como ADR-0016 en [DECISIONS.md](./DECISIONS.md).

- DES-01 · Identidad: marca desde cero; el logo se diseñará como entregable propio.
- DES-02 · Tema: según preferencia del sistema (`prefers-color-scheme`).
- DES-03 · Tipografía: geométrica, licencia libre, self-hosted (Inter Variable + JetBrains Mono Variable).
- DES-04 · Tono visual: sobrio corporativo; sin gradientes ni glow.
- DES-05 · Movimiento: microinteracciones breves con `prefers-reduced-motion`.
- DES-06 · Base UI: shadcn/ui personalizado solo vía tokens (cerrado en ADR-0004).
- DES-07 · Iconografía e imágenes: Lucide como set único; capturas reales de proyectos.
- DES-08 · Accesibilidad: WCAG AA global + AAA en cuerpo de texto largo.

</aside>

# 1. Alcance

- Definir qué cubre este sistema de diseño: interfaz pública, páginas de marketing, portfolio, formularios, elementos SEO visibles, estados de error y estados de carga.

<aside>
🚫

**Fuera de alcance:** backoffice, aplicación autenticada, dashboards internos, aplicaciones móviles nativas y campañas microsite independientes.

</aside>

<aside>
⚠️

Ninguna decisión visual podrá tomarse directamente en una página si pertenece al nivel de token, primitiva, componente reutilizable o patrón de composición.

</aside>

---

# 2. Principios de diseño

- Claridad antes que ornamentación.
- Legibilidad antes que densidad.
- Personalidad técnica sin sacrificar comprensión para perfiles no técnicos.
- Componentes antes que estilos ad hoc.
- Semántica antes que decoración.
- Accesibilidad desde el origen, no como corrección posterior.
- Movimiento funcional, breve y prescindible.
- Contraste y foco visibles en todos los modos de color.
- Diseño mobile-first y responsive según el comportamiento del contenido, no por adaptación superficial de escritorio.
- Preferencia por espacios, tipografía y jerarquía antes que bordes, sombras o efectos visuales excesivos.
- Coherencia editorial entre el perfil profesional, los proyectos, los servicios y las llamadas a la acción.

---

# 3. Identidad y dirección visual

- Atributos de marca: técnico, sobrio, fiable, preciso, actual, humano y resolutivo.
- Dirección estética principal: interfaz editorial-técnica de alto contraste, con detalles terminales o de sistema solo cuando ayuden a contextualizar el perfil profesional.
- Recursos del diseño anterior que pueden mantenerse como concepto: terminal, marquee, tema oscuro, navegación técnica, tarjetas de proyectos y bloques de stack.
- Lo que no debe heredarse: dependencias visuales rígidas, estilos específicos de página imposibles de reutilizar, duplicación de utilidades, paletas sin semántica y animaciones que interfieran con la lectura.
- Documentar el tono de la iconografía, bordes, radios, textura, profundidad y uso de ilustraciones o fotografías.
- Definir cuándo es legítimo usar una estética “terminal” y cuándo debe prevalecer un componente estándar de interfaz.

### Decisiones de identidad (13-08-2026)

- Marca creada desde cero: no existe logo previo que conservar (DES-01). El logo se diseñará como entregable propio de la fase de identidad; hasta entonces, wordmark tipográfico «Alexendros.dev» en Inter semibold.
- Dirección estética aprobada: **sobrio corporativo** de alto contraste (DES-04). Sin gradientes ni efectos glow. La estética terminal se reserva a los componentes `Terminal`, `TerminalCommand` y `TechnologyBadge`; en el resto prevalece el componente estándar.
- Tema según preferencia del sistema (DES-02): `:root` define el tema claro y `.dark` el oscuro, aplicado vía `prefers-color-scheme`.

---

# 4. Arquitectura de tokens

## 4.1. Principios de tokenización

- Un token representa una decisión reutilizable, no un valor aislado.
- Todo valor de color debe declararse en OKLCH.
- Los tokens se organizarán en tres capas: primitivos, semánticos y de componente.
- Los componentes no deben consumir tokens primitivos excepto dentro de la definición del tema.
- Los componentes de dominio no deben usar valores de color, espaciado, radio, sombra ni duración arbitrarios.
- Los valores en JSX o TSX deben limitarse a composición, variantes y clases previamente aprobadas.
- Los colores con transparencia se expresarán con el canal alfa de OKLCH, no mediante opacidades descontextualizadas.
- Todo token deberá tener nombre, propósito, valor para tema claro, valor para tema oscuro y, cuando proceda, justificación de contraste.

## 4.2. Tokens primitivos

Definir escalas completas y estables:

```css
--color-neutral-0 a --color-neutral-1000
--color-brand-50 a --color-brand-950
--color-accent-50 a --color-accent-950
--color-success-50 a --color-success-950
--color-warning-50 a --color-warning-950
--color-danger-50 a --color-danger-950
--color-info-50 a --color-info-950
--font-family-sans
--font-family-mono
--font-size-2xs a --font-size-6xl (o escala equivalente)
--font-weight-regular, --font-weight-medium, --font-weight-semibold, --font-weight-bold
--line-height-tight, --line-height-normal, --line-height-relaxed
--letter-spacing-tight, --letter-spacing-normal, --letter-spacing-wide
--space-0 a --space-24 (o escala equivalente basada en una unidad consistente)
--radius-none, --radius-sm, --radius-md, --radius-lg, --radius-xl, --radius-full
--shadow-xs, --shadow-sm, --shadow-md, --shadow-lg, --shadow-xl
--duration-instant, --duration-fast, --duration-normal, --duration-slow
--ease-standard, --ease-emphasized, --ease-enter, --ease-exit
--z-base, --z-dropdown, --z-sticky, --z-overlay, --z-modal, --z-toast
--breakpoint-sm, --breakpoint-md, --breakpoint-lg, --breakpoint-xl, --breakpoint-2xl
```

## 4.3. Tokens semánticos

Definir tokens de intención, no de tonalidad:

```css
--background
--foreground
--surface
--surface-raised
--surface-sunken
--surface-inverse
--foreground-muted
--foreground-subtle
--primary
--primary-foreground
--secondary
--secondary-foreground
--accent
--accent-foreground
--muted
--muted-foreground
--destructive
--destructive-foreground
--success
--success-foreground
--warning
--warning-foreground
--info
--info-foreground
--border
--border-strong
--input
--ring
--focus
--selection
--link
--link-hover
--overlay
--disabled
--disabled-foreground
```

#### Para cada token se documentará:

- [ ] Significado funcional.
- [ ] Valores para `:root` y `.dark`.
- [ ] Combinaciones permitidas de fondo y primer plano.
- [ ] Estados de interacción relacionados.
- [ ] Ratio mínimo de contraste exigido.
- [ ] Componentes que pueden consumirlo.
- [ ] Casos en los que no debe utilizarse.

La configuración global seguirá el patrón de variables CSS vinculadas a tokens de Tailwind, con tema claro y oscuro definidos mediante valores OKLCH. Ese enfoque está respaldado por la documentación actual de shadcn/ui.

### Valores aprobados (13-08-2026)

**Primitivos de color — neutrales (matiz 260, croma bajo) y marca (azul 255):**

```css
--color-neutral-0: oklch(1 0 0);
--color-neutral-50: oklch(0.985 0.002 260);
--color-neutral-100: oklch(0.967 0.003 260);
--color-neutral-200: oklch(0.92 0.004 260);
--color-neutral-300: oklch(0.87 0.005 260);
--color-neutral-400: oklch(0.708 0.006 260);
--color-neutral-500: oklch(0.554 0.006 260);
--color-neutral-600: oklch(0.446 0.006 260);
--color-neutral-700: oklch(0.372 0.006 260);
--color-neutral-800: oklch(0.278 0.006 260);
--color-neutral-900: oklch(0.208 0.006 260);
--color-neutral-950: oklch(0.13 0.006 260);
--color-neutral-1000: oklch(0 0 0);

--color-brand-50: oklch(0.97 0.014 255);
--color-brand-100: oklch(0.93 0.03 255);
--color-brand-200: oklch(0.88 0.06 255);
--color-brand-300: oklch(0.81 0.1 255);
--color-brand-400: oklch(0.71 0.14 255);
--color-brand-500: oklch(0.62 0.17 255);
--color-brand-600: oklch(0.51 0.18 255);
--color-brand-700: oklch(0.45 0.16 255);
--color-brand-800: oklch(0.4 0.13 255);
--color-brand-900: oklch(0.36 0.1 255);
--color-brand-950: oklch(0.28 0.07 255);
```

**Primitivos de estado y acento** (anclas 600/400; los pasos intermedios de cada escala se interpolan en OKLCH manteniendo el matiz):

```css
--color-accent-600: oklch(0.52 0.12 200);  /* cian sobrio */
--color-accent-400: oklch(0.72 0.12 200);
--color-success-600: oklch(0.52 0.13 150);
--color-success-400: oklch(0.72 0.17 150);
--color-warning-600: oklch(0.62 0.14 85);
--color-warning-400: oklch(0.78 0.15 85);
--color-danger-600: oklch(0.5 0.19 25);
--color-danger-400: oklch(0.7 0.18 25);
--color-info-600: oklch(0.52 0.14 240);
--color-info-400: oklch(0.72 0.13 240);
```

**Otros primitivos aprobados:**

```css
--radius-none: 0; --radius-sm: 4px; --radius-md: 8px; --radius-lg: 12px; --radius-xl: 16px; --radius-full: 9999px;
--duration-instant: 0ms; --duration-fast: 120ms; --duration-normal: 200ms; --duration-slow: 320ms;
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
--ease-emphasized: cubic-bezier(0.3, 0, 0, 1);
--ease-enter: cubic-bezier(0, 0, 0.2, 1);
--ease-exit: cubic-bezier(0.4, 0, 1, 1);
--shadow-xs: 0 1px 2px oklch(0.13 0.006 260 / 0.06);
--shadow-sm: 0 1px 3px oklch(0.13 0.006 260 / 0.1);
--shadow-md: 0 4px 8px oklch(0.13 0.006 260 / 0.1);
--shadow-lg: 0 8px 20px oklch(0.13 0.006 260 / 0.12);
--shadow-xl: 0 16px 40px oklch(0.13 0.006 260 / 0.16);
--z-base: 0; --z-dropdown: 1000; --z-sticky: 1100; --z-overlay: 1200; --z-modal: 1300; --z-toast: 1400;
```

**Tokens semánticos — asignación por tema:**

| Token | `:root` (claro) | `.dark` (oscuro) |
| --- | --- | --- |
| `--background` | `neutral-0` | `neutral-950` |
| `--foreground` | `neutral-950` | `neutral-50` |
| `--surface` | `neutral-50` | `neutral-900` |
| `--surface-raised` | `neutral-0` | `neutral-800` |
| `--surface-sunken` | `neutral-100` | `oklch(0.11 0.006 260)` |
| `--surface-inverse` | `neutral-950` | `neutral-50` |
| `--foreground-muted` | `neutral-600` | `neutral-400` |
| `--foreground-subtle` | `neutral-500` | `neutral-500` |
| `--primary` | `brand-600` | `brand-400` |
| `--primary-foreground` | `neutral-0` | `neutral-950` |
| `--secondary` | `neutral-100` | `neutral-800` |
| `--secondary-foreground` | `neutral-900` | `neutral-100` |
| `--accent` | `accent-600` | `accent-400` |
| `--accent-foreground` | `neutral-0` | `neutral-950` |
| `--muted` | `neutral-100` | `neutral-800` |
| `--muted-foreground` | `neutral-600` | `neutral-400` |
| `--destructive` | `danger-600` | `danger-400` |
| `--destructive-foreground` | `neutral-0` | `neutral-950` |
| `--success` / `--success-foreground` | `success-600` / `neutral-0` | `success-400` / `neutral-950` |
| `--warning` / `--warning-foreground` | `warning-600` / `neutral-950` | `warning-400` / `neutral-950` |
| `--info` / `--info-foreground` | `info-600` / `neutral-0` | `info-400` / `neutral-950` |
| `--border` | `neutral-200` | `neutral-800` |
| `--border-strong` | `neutral-300` | `neutral-700` |
| `--input` | `neutral-200` | `neutral-800` |
| `--ring` / `--focus` | `brand-600` | `brand-400` |
| `--selection` | `brand-100` | `brand-900` |
| `--link` | `brand-600` | `brand-400` |
| `--link-hover` | `brand-700` | `brand-300` |
| `--overlay` | `oklch(0.13 0.006 260 / 0.6)` | `oklch(0 0 0 / 0.7)` |
| `--disabled` / `--disabled-foreground` | `neutral-100` / `neutral-400` | `neutral-800` / `neutral-600` |

<aside>
✅

Todos los pares fondo/primer plano de la tabla se han elegido para cumplir WCAG AA (≥ 4,5:1 en texto normal). El cuerpo de texto largo usa `--foreground` sobre `--background` con ratio ≥ 7:1 (AAA, DES-08). Antes de marcar la verificación 3.1 del plan se validará cada par con herramienta de contraste OKLCH.

</aside>

## 4.4. Tokens de componente

Definir tokens específicos solo cuando un componente necesite mantener una decisión propia estable. Ejemplos:

```css
--button-primary-background
--button-primary-foreground
--button-primary-hover-background
--button-secondary-border
--card-background
--card-border
--card-shadow
--header-background
--header-border
--terminal-background
--terminal-foreground
--terminal-prompt
--project-card-overlay
--form-error-foreground
--form-error-border
--toast-success-background
--dialog-overlay
```

<aside>
⚠️

Los tokens de componente no deben duplicar un token semántico sin aportar una restricción, un estado o una intención concreta.

</aside>

---

# 5. Tipografía

- Determinar la familia principal sans serif y la familia monoespaciada.
- Establecer la fuente monoespaciada para fragmentos técnicos, etiquetas de stack, terminales, código y metadatos; no para párrafos extensos.
- Definir jerarquía H1-H6, body, lead, small, caption, overline, eyebrow, label, button y code.
- Definir tamaños mínimos y máximos, preferiblemente con escalado fluido cuando resulte legible.
- Definir line-height por rol tipográfico, nunca solo por tamaño.
- Definir límites de ancho de lectura para texto largo.
- Prohibir más de una familia sans y una familia mono, salvo decisión ADR.
- Establecer reglas de carga de fuentes, fallback y prevención de desplazamiento visual.
- Definir convenciones de mayúsculas, tracking y uso de negrita.
- Prohibir el uso de texto demasiado pequeño para información relevante o controles interactivos.

### Decisiones tipográficas (13-08-2026)

- **Sans principal: Inter Variable** (SIL OFL), geométrica-neutra, coherente con el tono sobrio corporativo. **Mono: JetBrains Mono Variable** (SIL OFL).
- Ambas self-hosted en `woff2` vía `next/font/local`; ninguna petición a terceros (DES-03).
- Fallbacks: `system-ui, -apple-system, sans-serif` y `ui-monospace, monospace`; `font-display: swap` con métricas de fallback ajustadas para evitar CLS.
- Escala fluida aprobada (base 16 px, razón 1,25):

```css
--font-size-2xs: 0.694rem;
--font-size-xs: 0.75rem;
--font-size-sm: 0.875rem;
--font-size-base: 1rem;
--font-size-lg: 1.125rem;
--font-size-xl: clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem);
--font-size-2xl: clamp(1.5rem, 1.3rem + 1vw, 1.875rem);
--font-size-3xl: clamp(1.875rem, 1.5rem + 1.5vw, 2.25rem);
--font-size-4xl: clamp(2.25rem, 1.8rem + 2vw, 3rem);
--font-size-5xl: clamp(2.75rem, 2rem + 3vw, 3.75rem);
--font-size-6xl: clamp(3.25rem, 2.2rem + 4vw, 4.5rem);
```

- Line-height por rol: H1–H3 `--line-height-tight: 1.15`; interfaz y H4–H6 `--line-height-normal: 1.5`; cuerpo largo `--line-height-relaxed: 1.7`.
- Ancho máximo de lectura: `68ch` en texto editorial (`Prose`). Cuerpo de texto largo con mínimo `1rem` y contraste AAA (DES-08).
- Una sola familia sans y una mono; cualquier adición requiere ADR.

---

# 6. Espaciado, composición y layout

- Definir una unidad base de espacio y una escala de espaciado.
- Definir `Container` como componente o patrón canónico con anchos máximos, gutters y comportamiento responsive.
- Definir `Section` con espacios verticales, variantes de fondo y encabezado opcional.
- Definir patrones `Stack`, `Cluster`, `Grid`, `Split`, `Sidebar`, `Bleed` y `VisuallyHidden`, cuando sean necesarios.
- Definir el grid principal de cada breakpoint.
- Definir longitudes máximas para texto editorial, cards, formularios y listados.
- Establecer que los márgenes de componentes deben ser excepcionales; la separación debe gestionarse por el contenedor de composición.
- Documentar la jerarquía de superficies: página, sección, panel, tarjeta, overlay y modal.
- Definir el uso moderado de bordes, sombras y fondos diferenciados.
- Establecer una política de z-index limitada a tokens.

### Decisiones de layout (13-08-2026)

- Unidad base de espacio: **4 px**; escala `--space-0`–`--space-24` como múltiplos (0, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96 px…).
- Breakpoints definitivos: `sm 640px · md 768px · lg 1024px · xl 1280px · 2xl 1536px` (alineados con Tailwind); los cambios de comportamiento se concentran en `md` y `lg`.
- `Container`: ancho máximo `72rem` (1152 px); gutters 16 px en móvil, 24 px en `md`, 32 px en `lg+`.
- Grid principal: 4 columnas en móvil, 8 en `md`, 12 en `lg+`; gap `--space-4` (móvil) y `--space-6` (`lg+`).
- `Section`: espaciado vertical `--space-16` en móvil y `--space-24` en `lg+`.

---

# 7. Iconografía y recursos visuales

- Elegir una librería de iconos única y compatible con React/TypeScript.
- Definir tamaños canónicos: xs, sm, md, lg, xl.
- Exigir etiquetas accesibles o `aria-hidden`, según la función del icono.
- Prohibir iconos como único medio para transmitir acciones críticas si no existe un nombre accesible.
- Definir el comportamiento de iconos en botones, enlaces externos, estados, navegación y badges.
- Definir estrategia para favicons, logo, Open Graph, capturas de proyecto, imágenes responsive y placeholders.
- Establecer formatos, proporciones, pesos máximos y texto alternativo.
- Exigir que las imágenes de proyectos aporten contexto real; no usar mockups decorativos sin valor informativo.

### Decisiones de iconografía e imágenes (13-08-2026)

- **Lucide** como set único de iconos (licencia ISC, soporte React/TypeScript de primera clase) (DES-07).
- Tamaños canónicos: xs 14 · sm 16 · md 20 · lg 24 · xl 32 px; grosor de trazo 2 px (1,75 px en xl).
- Imágenes de proyectos: **capturas reales** en AVIF/WebP con fallback, proporción 16:10, peso máximo 200 KB, `alt` descriptivo obligatorio. Sin fotografía personal ni mockups decorativos en el MVP.
- OG images generadas con plantilla propia a partir del wordmark.
- Favicon provisional (`src/app/icon.svg`): monograma «A» en Inter semibold sobre cuadrado redondeado `brand-600` con trazo blanco, derivado del wordmark «Alexendros.dev»; se sustituirá por el logo de la fase de identidad (DES-01).

---

# 8. Componentes canónicos

## 8.1. Primitivos UI

Cada ficha de componente debe incluir: propósito, anatomía, API, variantes, tamaños, estados, accesibilidad, comportamiento responsive, restricciones, ejemplos y pruebas mínimas.

- Button.
- IconButton.
- Link.
- Badge.
- Tag.
- Input.
- Textarea.
- Select.
- Checkbox.
- Switch.
- Label.
- Field.
- FieldError.
- Alert.
- AlertDialog.
- Dialog.
- Drawer o Sheet.
- Tooltip.
- Popover.
- DropdownMenu.
- Tabs.
- Accordion.
- Separator.
- Skeleton.
- Spinner.
- Toast.
- EmptyState.
- VisuallyHidden.

## 8.2. Componentes de layout

- Container.
- Section.
- PageHeader.
- SiteHeader.
- SiteFooter.
- Navigation.
- MobileNavigation.
- Breadcrumbs, si las rutas finales lo justifican.
- ContentGrid.
- CardGrid.
- Prose.
- Callout.
- SkipLink.

## 8.3. Componentes de dominio

- Hero.
- ServiceCard.
- ServiceList.
- ProjectCard.
- ProjectGrid.
- ProjectMeta.
- TechnologyBadge.
- StackGroup.
- Testimonial o ProofPoint, solo si existe contenido real verificable.
- ContactForm.
- NewsletterForm, solo si la funcionalidad se aprueba.
- Terminal.
- TerminalCommand.
- AvailabilityStatus, solo si existe una fuente fiable y una política editorial.
- CTASection.
- LegalNotice.
- JsonLd.
- ConversionTracker, solo tras definir política de privacidad y consentimiento.

## 8.4. Reglas de composición

- Una página debe componerse a partir de componentes existentes y secciones de dominio; no desde grandes archivos con markup irrepetible.
- Un componente de sección no debe contener lógica de infraestructura, llamadas a proveedores ni secretos.
- Un componente UI no debe conocer rutas de negocio, textos editoriales ni entidades del dominio.
- Las variantes deben cubrir diferencias previsibles. Si una variante solo se usa una vez, hay que cuestionar si es una variante legítima o una composición local.
- No se crearán “componentes genéricos” sin un caso de reutilización o una responsabilidad clara.
- Los componentes deben controlarse mediante props tipadas, no mediante cadenas de clases inyectadas como API principal.
- `className` puede permitirse como escape controlado, pero no debe anular tokens, semántica ni accesibilidad.

---

# 9. Estados de interacción

Todo elemento interactivo debe definir y probar:

- Estado por defecto.
- Hover, para dispositivos que lo soporten.
- Focus-visible.
- Active o pressed.
- Disabled.
- Loading.
- Error.
- Success, cuando exista.
- Estado vacío.
- Estado sin conexión o fallo de proveedor, cuando aplique.
- Estado de contenido truncado.
- Estado táctil.

<aside>
⚠️

Los elementos no interactivos no deben adoptar affordances engañosas de interacción.

</aside>

---

# 10. Accesibilidad visual e interacción

- Todos los controles deben ser navegables por teclado.
- El foco debe ser visible, no depender solo del color y no quedar oculto por contenedores.
- Los formularios deben vincular semánticamente label, control, ayuda y error.
- El color no será el único indicador de error, éxito, estado o prioridad.
- Los iconos interactivos deben tener nombre accesible.
- Los diálogos deben gestionar foco, cierre, escape, retorno de foco y bloqueo de interacción del fondo.
- La navegación móvil debe ser operable con teclado y lector de pantalla.
- Los objetivos táctiles deben ser suficientemente amplios; shadcn/ui documenta una utilidad para ampliar el área táctil en dispositivos de puntero grueso, principio que se adoptará aunque la implementación final pueda variar.
- Se debe respetar `prefers-reduced-motion`.
- El contenido debe mantener una jerarquía correcta de encabezados.
- No se debe bloquear el zoom, la selección ni funciones nativas del navegador sin una justificación sólida.
- Los ratios de contraste se validarán automáticamente o manualmente antes de aprobar tokens y componentes.

### Objetivo de accesibilidad aprobado (13-08-2026)

- **WCAG 2.2 AA en la totalidad del sitio**: texto, controles, foco, estados e imágenes informativas (DES-08).
- **AAA (contraste ≥ 7:1) en cuerpo de texto largo**: párrafos de `Prose`, descripciones de servicios y casos de proyecto.
- Validación: axe-core en CI (ADR-0009) más verificación manual de contraste al aprobar tokens y variantes nuevas.

---

# 11. Responsive

- Enfoque mobile-first.
- Definir breakpoints como puntos de cambio de comportamiento, no como obligación de crear cinco diseños distintos.
- Establecer reglas específicas para header, navegación, hero, cards, grids, formularios, tablas, diálogos y terminal.
- Evitar depender del hover para acciones necesarias.
- Las cards deben conservar el orden lógico de teclado y lectura cuando cambie el grid.
- Los textos no deben quedar ocultos por truncamiento en controles críticos.
- Las secciones solo deben reordenarse si se preservan contexto y jerarquía.
- Las imágenes deben conservar información esencial en todos los tamaños.

---

# 12. Motion

- Definir qué transiciones están permitidas: color, opacidad, transformaciones cortas, expansión de disclosure y feedback de estado.
- Definir duraciones y easing mediante tokens.
- Prohibir animaciones infinitas, salvo indicadores de carga, marquee justificado o elementos no esenciales con alternativa reducida.
- Prohibir movimientos que dificulten la lectura, provoquen cambios de layout u oculten controles.
- Si se reutilizan el terminal o el marquee, deben incluir pausa, reducción de movimiento y contenido accesible equivalente.
- Toda animación debe tener un propósito: orientar, confirmar, conectar estados o dar feedback.

### Decisiones de movimiento (13-08-2026)

- Se aprueban **microinteracciones breves** (DES-05): hover/focus a `--duration-fast`, transiciones de estado a `--duration-normal`, disclosure a `--duration-slow` como máximo.
- Sin animaciones de entrada en scroll masivas ni parallax; la carga de página es estática.
- Terminal y marquee, si se implementan, incluirán pausa, alternativa estática bajo `prefers-reduced-motion` y contenido accesible equivalente.

---

# 13. Convenciones de implementación

- Los tokens vivirán en una única fuente de verdad, preferiblemente `styles/tokens.css` o equivalente.
- Las utilidades de Tailwind deben consumir tokens semánticos.
- Los componentes deben usar una utilidad de composición de clases normalizada.
- Las variantes se definirán de forma tipada y consistente.
- No se permitirán hexadecimales, RGB/HSL, valores de sombra manuales, radios manuales ni colores arbitrarios en componentes de producción, salvo excepción documentada.
- Cada componente nuevo requerirá ejemplo de uso y pruebas, o una revisión visual definida.
- El modo claro y oscuro se revisarán para cada variante nueva.

---

# 14. Gobernanza del design system

<aside>
⚠️

**Reglas de gobernanza**

- Un token se crea cuando representa una decisión estable y reutilizable.
- Un componente se crea cuando contiene comportamiento, semántica o composición repetible.
- Una variante se crea cuando el mismo componente comparte anatomía y responsabilidad.
- Una sección de dominio se crea cuando representa una unidad editorial repetida.
- Los cambios incompatibles en tokens o APIs de componentes deben documentarse en [CHANGELOG.md](./CHANGELOG.md) o [DECISIONS.md](./DECISIONS.md).
- Los componentes deprecados deben marcarse, migrarse y eliminarse en una fase programada.
- Las revisiones de pull request deben verificar: tokenización, semántica, contraste, teclado, responsive, estados y ausencia de duplicación.

</aside>
