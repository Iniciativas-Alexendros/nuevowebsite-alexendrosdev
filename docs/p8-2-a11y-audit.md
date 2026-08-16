# 🎯 P8-2: Auditoría a11y Manual

**Estado:** Matriz lista para firma MITL del decisor. Cobertura automatizada (axe E2E + CI) ya bloqueante; la auditoría manual AA/AAA permanece humana (P8-2).
**Objetivo:** Validar accesibilidad manual complementando axe-core CI  
**Nivel objetivo:** AA global + AAA en cuerpos largos  
**Responsable:** Decisor QA + Agente (preparación checklist)

---

## 📝 Checklist de Auditoría Manual

### **Nivel AA Global** (requerido para v1.0)

| # | Criterio | Cómo verificar | Rutas a tester | Estado |
|---|----------|----------------|----------------|--------|
| **AA-1** | Contraste de color mínimo 4.5:1 para texto normal | Usar lupa DevTools → Accessibility → Contrast Ratio | Home, /servicios, /contacto, /proyectos | ☐ |
| **AA-2** | Contraste 3:1 para texto grande (≥18px o ≥14px negrita) | Mismo método AA-1 | Todas las rutas | ☐ |
| **AA-3** | Enfoque visible en todos los elementos interactivos | Tabnar por toda página, verificar outline focus | Home, formularios, navegación | ☐ |
| **AA-4** | Orden de tabulación lógico y significativo | Tabnar desde inicio hasta fin, no saltos ilógicos | Todo el sitio | ☐ |
| **AA-5** | Enlaces tienen texto descriptivo (no "click aquí") | Revisar HTML interno, ARIA si aplica | Todo el sitio | ☐ |
| **AA-6** | Botones y inputs tienen nombre accesible | Revisar etiquetas `<label>` o `aria-label` | Formularios, CTA | ☐ |
| **AA-7** | Formularios tienen asociacióm etiqueta-input correcta | Probar envío formulario solo con teclado | /contacto, POST /api/contact | ☐ |
| **AA-8** | Errores de formulario tienen mensaje descriptivo y asociación | Probar envío con datos inválidos | /contacto | ☐ |
| **AA-9** | Imágenes informativas tienen atributo alt vacío o descriptivo | Revisar todas las `<img>` del sitio | Todo el sitio | ☐ |
| **AA-10** | Saltos de navegación (skip links) funcionan | Probar: Tab → saltar al contenido principal | Home, todas las páginas | ☐ |

### **Nivel AAA Opcional** (recomendado pero no bloqueante)

| # | Criterio | Cómo verificar | Rutas a tester | Estado |
|---|----------|----------------|----------------|--------|
| **AAA-1** | Contraste 7:1 para texto normal (máximo exigencia) | Mismo método AA | Opcional por ruta | ☐ |
| **AAA-2** | Tamaño texto mínimo 18px (o 14px negrita) | Revisar CSS, inspeccionar elementos | Global | ☐ |
| **AAA-3** | Lectores pantalla: orden y estructura lógica | Narrador/VoiceOver recorrer página | Home, /servicios | ☐ |
| **AAA-4** | Márgenes y padding consistentes en todo el sitio | Revisar CSS variables, diseño responsivo | Global | ☐ |

---

## ⌨️ Procedimiento de Prueba Manual

### **Fase 1: Navegación Solo Teclado**
1. Enfócate en la página con **Tab** (empezar desde skip link si existe)
2. Verifica que el orden sea: header → main content → forms → sidebar → footer
3. Confirma que **Shift+Tab** retrace orden inverso
4. **Ningún elemento debe quedar sin acceso de teclado**
5. **Ningún foco debe quedar "atrapado"** (focus trap sin escape)

### **Fase 2: Validación de Contraste**
1. Abre DevTools → Panel Accessibility
2. Selecciona cualquier elemento de texto
3. Ve a la sección "Contrast ratio"
4. Verifica que cumpla 4.5:1 para AA, 7:1 para AAA
5. Si falla, anota el elemento y el par de colores

### **Fase 3: Pruebas con Lectores de Pantalla** (opcional)
1. Usa **Narrator** (Windows) o **VoiceOver** (Mac)
2. Recorre la página con teclas de navegación
3. Verifica que el orden tenga sentido semántico
4. Confirma que enlaces y botones tengan nombres significativos
5. Revisa que tablas tengan headers asociados

### **Fase 4: Errores y Feedback**
1. Envía formulario `/contacto` con datos inválidos
2. Verifica que:
   - Mensajes de error sean claros y específicos
   - El campo error sea foco automático o al menos seleccionado
   - El mensaje indique cómo corregir (no solo "error")
   - No se pierda el contenido introducido

---

## 📋 Muestra de Resultados (Formato)

Rellena tras probar cada ruta:

| Ruta | AA Global | AAA | Observaciones |
|------|-----------|-----|---------------|
| **Home** | ☐ Aprobado / ☐ Rechazado | ☐ Aprobado / ☐ Rechazado | |
| **/servicios** | ☐ Aprobado / ☐ Rechazado | ☐ Aprobado / ☐ Rechazado | |
| **/contacto** | ☐ Aprobado / ☐ Rechazado | ☐ Aprobado / ☐ Rechazado | |
| **/proyectos** | ☐ Aprobado / ☐ Rechazado | ☐ Aprobado / ☐ Rechazado | |
| **POST /api-contact** | — | — | Errores de formulario: [describir] |

---

## 🔧 Problemas Comunes Detectados en Este Proyecto (Referencia)

| Problema | Frecuencia | Severidad | Solución |
|----------|------------|-----------|----------|
| Contraste insuficiente en banners hero | Media | AA | Ajustar colores o añadir sombra de texto |
| Enlaces con "Leer más" sin contexto | Baja | AA | Añadir `aria-label` o texto visible oculto |
| Falta de `alt` en imágenes decorativas | Alta | AA | Añadir `alt=""` o describir en contexto |
| Orden de tabulación ilógico en formularios | Media | AA | Reestructurar HTML o añadir `tabindex` |
| Errores de formulario genéricos | Alta | AA | Mensajes específicos por campo |

---

## ✅ Criterio de Cierre P8-2

> **P8-2 se considera completado cuando:**
> 1. AA global aprobado en **todas las rutas P0** (home, servicios, contacto, proyectos)
> 2. AAA en cuerpos de formulario largos aprobado (opcional pero registrado)
> 3. Reporte de hallazgos documentado (este checklist prellenado)
> 4. Hallazgos críticos bloqueantes han sido atendidos o tienen decisión del decisor

---

## 🛠️ Comandos de Apoyo

```bash
# Ejecutar axe-core en CI (ya configurado)
pnpm test:e2e   # incluirá axe-core results

# Ver reporte de accesibilidad si está en la consola
# Revisar GitHub Actions → E2E suite para violations de axe

# Linter visual de contraste (opcional)
# npm i -D contrast-ratio-check   # o herramienta similar
```

---