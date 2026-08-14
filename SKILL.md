# SKILL.md

Abrir cuando: Al arrancar y al cerrar cada sesión de trabajo; duda de procedimiento o enrutado.
Aprobado: 14 de agosto de 2026
Audiencia: Agente, Dirección
Autoridad: Derivada
Clase: Obligatorio
Días para revisión: 9
En repo: No
Estado: Vigente
Orden: 15
Propósito: Skill de sesión del agente: protocolo de arranque, trabajo y cierre; índice de conocimiento; determinación del objetivo y líneas rojas.
Reforma: Operativa
Responsable: Alexendros
Revisión: 24 de agosto de 2026
Rol: Apoyo
Ruta: http://SKILL.md

<aside>
📌

**Propósito**

Esta skill es el protocolo operativo de cada sesión de trabajo en [Alexendros.Dev](http://Alexendros.Dev). Fija el objetivo de la sesión, enruta al documento canónico correcto, aplica el procedimiento de trabajo y deja registro. No añade norma: deriva de [[CONSTITUTION.md](http://CONSTITUTION.md)](https://app.notion.com/p/CONSTITUTION-md-b088505105114630aa34c5252a9df4e9?pvs=21) y del resto del canon. Si hay conflicto, gana el canon.

</aside>

<aside>
⚙️

**Carga y formato**

- **Cuándo se carga:** al arrancar toda sesión del proyecto y al cerrarla, con o sin código.
- **Formato de archivo:** skill de agente (`SKILL.md`) con frontmatter `name` + `description`, replicado en el bloque de código siguiente. El cuerpo posterior es la skill.
- **Fuente de verdad:** desde la Fase 0, el repositorio. Esta página es espejo de consulta; cada sincronización se registra en `Sincronizado el` y toda reforma se hace primero en el repo.
</aside>

```yaml
---
name: alexendros-dev-session
description: Protocolo de sesión del proyecto Alexendros.Dev. Cargar al inicio de cada sesión de trabajo para fijar el objetivo, enrutar al canon documental, aplicar el procedimiento y cerrar con registro. Aplica a cualquier tarea del proyecto, con o sin código.
---
```

---

# 1. Arranque de sesión

Se ejecuta en orden. NO se escribe código ni se edita documento alguno antes del paso 4.

1. **Pulso.** Lee el callout de pulso de la página madre y «Estado en una mirada» de [[README.md](http://README.md)](https://app.notion.com/p/README-md-6a7881ce4b4a4464acdc46285a90efa2?pvs=21). Confirma fase activa, próximo hito y tarea del día.
2. **Objetivo de sesión.** Redáctalo con la ficha de la sección 2 y confírmalo con el decisor si hay ambigüedad.
3. **Lectura mínima.** Abre solo lo que cierra la tarea según el índice de la sección 3. NO leas el canon entero.
4. **Anclas.** Localiza los `REQ-*`, `NFR-*` o `ADR-*` que trazan la tarea en [[SPECS.md](http://SPECS.md)](https://app.notion.com/p/SPECS-md-11d854a9f6f947049bf7c54f5e35f80a?pvs=21) o [[DECISIONS.md](http://DECISIONS.md)](https://app.notion.com/p/DECISIONS-md-15ba382177024fdaaf64a4caa03652c4?pvs=21). Si falta un ancla, paras y preguntas. NO inventas requisitos.
5. **Modo.** Si hay implementación, carga además la ficha §3, autonomía y DoD de [[AGENTS.md](http://AGENTS.md)](https://app.notion.com/p/AGENTS-md-992fcc485cc74127ba395c8680c3df20?pvs=21).

---

# 2. Objetivo de sesión

Toda sesión produce exactamente un objetivo verificable antes de trabajar.

> **Objetivo:** una frase con resultado observable.
> 

> **Traza:** `REQ-*`, `NFR-*`, `ADR-*` o fase de [[ROADMAP.md](http://ROADMAP.md)](https://app.notion.com/p/ROADMAP-md-07e7e374ee774f39a44d0eaa742db39d?pvs=21).
> 

> **Entregable:** diff, documento, decisión o registro concreto.
> 

> **Criterio de cierre:** cómo se verifica que está hecho.
> 

Reglas:

- Sin objetivo confirmado no hay sesión. Si excede una sesión, se divide y se agenda el resto.
- El objetivo DEBE respetar la fase activa y las exclusiones del MVP. Nada de P1/P2 dentro de P0.
- Toda desviación del plan se registra como ADR; no se absorbe en silencio.

---

# 3. Índice de conocimiento

Mapa de enrutado del canon. El catálogo vivo, con estado y propiedades, está en [Documentos canónicos](https://app.notion.com/p/1939f8efd763473fae548c009e4abb8d?pvs=21). NO copies aquí propósito ni estado.

| Documento | Rol | Autoridad | Ábrelo cuando |
| --- | --- | --- | --- |
| [[README.md](http://README.md)](https://app.notion.com/p/README-md-6a7881ce4b4a4464acdc46285a90efa2?pvs=21) | Entrada | Lectura | Orientación, pulso y enrutado |
| [[CONSTITUTION.md](http://CONSTITUTION.md)](https://app.notion.com/p/CONSTITUTION-md-b088505105114630aa34c5252a9df4e9?pvs=21) | Norma | Suprema | Alcance, integraciones, secretos o conflicto entre documentos |
| [[SPECS.md](http://SPECS.md)](https://app.notion.com/p/SPECS-md-11d854a9f6f947049bf7c54f5e35f80a?pvs=21) | Producto | Producto | Requisitos, aceptación, prioridades o DoD |
| [[DECISIONS.md](http://DECISIONS.md)](https://app.notion.com/p/DECISIONS-md-15ba382177024fdaaf64a4caa03652c4?pvs=21) | Decisiones | Derivada | Por qué se eligió algo; antes de proveedor, secreto o cambio estructural |
| [[DESIGN.md](http://DESIGN.md)](https://app.notion.com/p/DESIGN-md-e0be2f8a52cd4ba28327e69e99e74f9a?pvs=21) | Diseño | Derivada | Tokens, componentes, temas, accesibilidad visual o movimiento |
| [[ARCHITECTURE.md](http://ARCHITECTURE.md)](https://app.notion.com/p/ARCHITECTURE-md-a4603a2448124904ac3bb0fc3bac1efc?pvs=21) | Arquitectura | Derivada | Estructura, server/client, endpoint, secretos o despliegue |
| [[CONTENT.md](http://CONTENT.md)](https://app.notion.com/p/CONTENT-md-df82a3c5a5184b69b78305e3ff925244?pvs=21) | Contenido | Derivada | Textos, entidades, tono, slugs o validación editorial |
| [[ROADMAP.md](http://ROADMAP.md)](https://app.notion.com/p/ROADMAP-md-07e7e374ee774f39a44d0eaa742db39d?pvs=21) | Plan | Operativa | Fase activa, calendario, hitos o criterio de salida |
| [[AGENTS.md](http://AGENTS.md)](https://app.notion.com/p/AGENTS-md-992fcc485cc74127ba395c8680c3df20?pvs=21) | Contrato | Operativa | Vas a escribir código: ficha, autonomía, DoD y comandos |

Apoyo (aún por crear en Fase 0): `CONTRIBUTING.md`, `SECURITY.md`, `docs/quality-gates.md`, `docs/release-checklist.md`, `docs/testing-strategy.md`. Su alta y cierre se gestionan en [Plan de verificación y desarrollo de documentos pendientes — Baterías de decisión](https://app.notion.com/p/Plan-de-verificaci-n-y-desarrollo-de-documentos-pendientes-Bater-as-de-decisi-n-4a063a3c9cea43da853f7630458401f6?pvs=21).

---

# 4. Procedimiento de trabajo

- **Unidad de trabajo.** Una ficha de AGENTS §3 = un PR pequeño: objetivo, traza, alcance, exclusiones, dependencias, pruebas y criterio de cierre. Si el decisor no la entrega, la reconstruyes y la confirmas antes de escribir código.
- **Trazabilidad.** Toda tarea implementada DEBE trazarse a uno o más requisitos de SPECS. Los commits citan `REQ-*`, `ADR-*` y fase (Conventional Commits).
- **Calidad antes de revisión.** `pnpm check`, `pnpm test` y `pnpm build` en verde (hasta que exista el scaffold: typecheck, lint, tests afectados y build). Cobertura ≥70 % en `src/lib/` y validaciones. axe-core sin violaciones críticas o serias. Lighthouse ≥90 en las cuatro categorías en móvil.
- **Git.** Trunk-based: ramas cortas `feat/`, `fix/`, `chore/` hacia `main` protegida. PRs pequeños con revisión diaria del decisor.
- **UI.** Tokens antes que estilos arbitrarios; claro/oscuro, teclado, foco, responsive y `prefers-reduced-motion`.
- **Notion.** Ediciones mínimas y dirigidas; conserva bloques de base de datos y menciones. Tras cada sincronización con el repo, actualiza `Sincronizado el` en el índice.

---

# 5. Líneas rojas

Derivadas de [[CONSTITUTION.md](http://CONSTITUTION.md)](https://app.notion.com/p/CONSTITUTION-md-b088505105114630aa34c5252a9df4e9?pvs=21) y los ADR. Si una petición las cruza, paras y elevas al decisor.

- El agente NO DEBE auto-fusionar, declarar fases cerradas ni introducir dependencias, secretos, rutas o esquemas sin confirmación (ADR-0019).
- Incorporar un proveedor, un secreto, datos personales, un coste recurrente o un cambio de arquitectura REQUIERE ADR previo.
- El MVP NO incluye autenticación, base de datos, CMS, checkout, Prisma, Supabase, newsletter ni analítica.
- NO se copia código del repositorio anterior, archivado en solo lectura (ADR-0006, ADR-0017).
- Hechos, textos legales finales y confidencialidad son verificación humana indelegable (REQ-GLOBAL-008).
- Los documentos canónicos DEBEN residir en la raíz del repositorio, en Markdown, sin secretos.
- Reformar la Constitución REQUIERE decisión explícita y un ADR. Nunca de pasada en un PR.

---

# 6. Cierre de sesión

- [ ]  Entregable verificado contra el criterio de cierre de la sección 2.
- [ ]  Pulso actualizado si cambió fase, repositorio o lanzamiento: página madre y README.
- [ ]  Registro de pulsos: una fila con fecha, pulso y desviación.
- [ ]  Toda desviación relevante del plan registrada como ADR en DECISIONS.
- [ ]  Índice de documentos al día si se creó o reformó un archivo: `Estado`, `Sincronizado el`, `Revisión`.
- [ ]  Lo pendiente convertido en issue o en «Pendiente ahora» del README. Nada queda solo en memoria.
- [ ]  Resumen final al decisor: hecho, pendiente, riesgos y objetivo propuesto para la próxima sesión.

---

# Mantenimiento

- Reforma operativa: esta skill se actualiza sin ADR siempre que no contradiga el canon; si contradice, primero se reforma el canon.
- Revisión prevista: 24-08-2026, con el lanzamiento de v1.0.
- Responsable: Alexendros.