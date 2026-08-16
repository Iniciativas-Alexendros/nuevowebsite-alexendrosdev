# 📋 P7z-7: CONTRIBUTING.md - Batería 9.3

**Fecha:** 16-08-2026  
**Estado:** COMPLETADA — CONTRIBUTING.md en raíz (batería 9.3 autorizada con plan de cierre v1.0)  
**Dependencia:** No bloquea v1.0 (es residual post-lanzamiento)  
**Responsable:** Decisor (respuesta requerida)

---

## 🎯 Propósito de CONTRIBUTING.md

El archivo `CONTRIBUTING.md` establece las directrices para contribuyentes que deseen participar en el proyecto. Su ausencia o inconsistencia crea fricción para aportes externos y mantenimiento a largo plazo.

---

## 📝 Checklist Batería 9.3

| # | Item | Descripción | Estado | Decisor Requerido |
|---|------|-------------|--------|-------------------|
| **9.3.1** | **Estructura de guía** | Plantilla estándar con sections: Setup, Development, Testing, Lint, Build | ☐ Pendiente | **Sí** - Definir estructura esperada |
| **9.3.2** | **Workflow de contribución** | Pasos: fork → clone → branch → commit → PR → merge | ☐ Pendiente | **Sí** - Especificar workflow preferido |
| **9.3.3** | **Convenciones de commits** | Convencional Commits: `feat:`, `fix:`, `chore:`, tipos obligatorios | ☐ Pendiente | **Sí** - Definir convenciones |
| **9.3.4** | **Guía de estilos** | Lint/format rules, prettier config, editor configs | ☐ Pendiente | **Sí** - Definir reglas de estilo |
| **9.3.5** | **Proceso de revisión** | Quién revisa PRs, tiempos esperados, etiquetas requeridas | ☐ Pendiente | **Sí** - Definir política de review |
| **9.3.6** | **Lineamientos de código** | Patrones aceptados, anti-patrones, imports, estructura de carpetas | ☐ Pendiente | **Sí** - Especificar directrices |
| **9.3.7** | **Reporte de issues** | Cómo reportar bugs, qué información incluir, plantillas | ☐ Pendiente | **Sí** - Definir plantillas |
| **9.3.8** | **Proceso de merge** | Criterios para merge automático vs. manual, revisores requeridos | ☐ Pendiente | **Sí** - Definir política merge |

---

## 📄 Plantilla Propuesta CONTRIBUTING.md

```markdown
# Contributing to nuevowebsite-alexendrosdev

Gracias por tu interés en contribuir 🎉

## 🔧 Setup

1. Fork el repositorio
2. Clona tu fork: `git clone https://github.com/tu-usuario/nuevowebsite-alexendrosdev.git`
3. Crea una rama: `git checkout -b feat/your-feature-name`
4. Instala dependencias: `pnpm install`

## 🌿 Development

### Branch Naming
- `feat/` para nuevas funciones
- `fix/` para correcciones de bugs
- `chore/` para tareas de mantenimiento
- `docs/` para cambios de documentación

### Commit Messages
Sigue **Conventional Commits**:
```
<tipo>(álcance): <descripción>

<cuerpo opcional>

<pie opcional>
```

**Tipos permitidos:**
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios de documentación
- `style`: Formato, espaciado, faltantes de punto y coma
- `refactor`: Refactorización que no arregla bug ni añade feature
- `test`: Añadir pruebas faltantes
- `chore`: Tareas auxiliares

### Pull Request Process
1. Asegúrate de que `pnpm check` pase (typecheck + lint)
2. Ejecuta `pnpm test` y `pnpm test:e2e`
3. Llena la plantilla de PR
4. Etiqueta al decisor para revisión
4. Espera aprobación antes de merge

## 🐛 Reporting Issues

Usa las plantillas de issue incluidas en el repositorio. Incluye:
- Título descriptivo
- Pasos para reproducir
- Comportamiento esperado vs. actual
- Entorno (SO, navegador, versión)
- Capturas de pantalla si aplica

## 📝 PR Template

```markdown
## Descripción
<!-- Descripción clara de qué hace el cambio y por qué -->

## Tipo de cambio
- [ ] `feat` - Nueva funcionalidad
- [ ] `fix` - Corrección de bug
- [ ] `docs` - Cambios de documentación
- [ ] `style` - Formato, cambios estéticos
- [ ] `refactor` - Refactorización
- [ ] `test` - Añadir o modificar tests
- [ ] `chore` - Tareas auxiliares

## Checklist
- [ ] `pnpm check` pasa sin errores
- [ ] `pnpm test` pasa
- [ ] `pnpm test:e2e` pasa
- [ ] He leído y seguí las convenciones de contribuyente
- [ ] He añadido/actualizado documentación si es necesario

## Checklist de QA
- [ ] Testado en móvil (375px)
- [ ] Testado en desktop (1440px)
- [ ] Sin violations de axe-accessibility
- [ ] Comprobado en browsers compatibles
```

---

## ✅ Criterio de Cierre Batería 9.3

> **Batería 9.3 se considera completada cuando:**
> 1. `CONTRIBUTING.md` creado con todas las secciones (9.3.1 - 9.3.8)
> 2. Plantillas de contribuyente, PR y issue definidas
> 3. Convencionales de commits especificadas
> 4. Decisor firma validación de la estructura y contenido
> 5. Archivo committed a `main` branch

---

## 🛠️ Comandos de Validación

```bash
# Verificar estructura tras creación
cat CONTRIBUTING.md

# Ejecutar checks pre-commit
pnpm check

# Ejecutar tests
pnpm test

# Validar convenios de commit
# Revisar manualmente que los commits en PR sigan convencional
```