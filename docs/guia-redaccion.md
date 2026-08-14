# Guía de redacción y convenciones de contenido

Abrir cuando: Vas a redactar o revisar contenido editorial (servicios, proyectos, stack, perfil, legales).
Deriva de: [CONTENT.md](../CONTENT.md) §§1, 11 y 12; [SPECS.md](../SPECS.md) §6; [DECISIONS.md](../DECISIONS.md) ADR-0018.
Rol: Complementario (no canónico). El contrato enforceable son los esquemas Zod de `src/lib/validations/content/` y CONTENT.md.

---

## 1. Tono y voz

Reglas de CONTENT §11. Deben aplicarse a todo texto de cara al visitante.

- **Primera persona singular** con tuteo al lector: «diseño y construyo…», «me cuentas tu caso…».
- **Voz activa** y frases cortas. Sin relleno ni superlativos vacíos («el mejor», «el más rápido», «experto»).
- **Hechos con evidencia.** Las capacidades se describen sin prometer plazos, precios ni resultados garantizados.
- **Términos técnicos con contexto** en su primera aparición: comprensible para un perfil no técnico sin perder precisión para el especialista.
- **CTA con verbo de acción real** y resultado inequívoco: «Escríbeme», «Agenda una llamada». Nunca «Descubre más» si no hay destino concreto.

## 2. Convenciones de slug

Todo identificador publicable usa slug en minúsculas y kebab-case.

- Solo caracteres `[a-z0-9]` y guion medio `-`.
- **Sin tildes ni diacríticos**: `automatizacion-ia`, no `automatización-ia`.
- **Sin espacios ni caracteres especiales** (`ñ` → `n`, `&` → `y`).
- Guiones simples, sin guiones dobles ni guiones iniciales/finales.
- Único por entidad y **estable**: un slug publicado no cambia; si cambia, debe evaluarse redirección (CONTENT §8).
- Longitud orientativa: 3–64 caracteres.

Slugs de servicio aprobados (DEC-SPECS-02, SPECS §6.2):

| Servicio | Slug |
| --- | --- |
| Desarrollo web a medida | `desarrollo-web` |
| Landing pages | `landing-pages` |
| Automatización y agentes IA | `automatizacion-ia` |
| Auditoría de rendimiento y accesibilidad | `auditoria-web` |

Los slugs de proyecto se derivan del mismo modo a partir de su nombre (p. ej. `front-valencia`, `graficas-nasve`, `vcf-cribador`, `alexendros-me`).

## 3. Longitudes por campo

Rangos orientativos. El contrato ejecutable son los esquemas Zod de `src/lib/validations/content/`; si hay conflicto, manda el esquema.

### 3.1. Service (CONTENT §3)

| Campo | Rango orientativo | Notas |
| --- | --- | --- |
| `id` | == `slug` | |
| `slug` | 3–64 | kebab-case |
| `title` | 10–80 | capacidad o servicio comprensible |
| `shortDescription` | 60–160 | apto para card |
| `description` | 150–500 | detalle sin promesas |
| `audience` | 20–200 | a quién sirve |
| `problemsSolved[]` | 3–6 ítems × 10–90 | problema que aborda |
| `scope[]` | 1–6 ítems × 10–120 | qué incluye |
| `deliverables[]` | 2–8 ítems × 10–120 | entregables orientativos |
| `process[]` | 2–6 ítems × 10–120 | opcional |
| `technologies[]` | 0–12 slugs | refieren entidades Technology |
| `exclusions[]` | 0–6 ítems × 10–120 | opcional |
| `CTA` | `label` 2–30, `href` ruta | verbo de acción real |
| `featured` | boolean | default `false` |
| `status` | enum §5 | |
| `metadata.title` | 10–70 | |
| `metadata.description` | 60–160 | |
| `openGraphImage` | ruta | opcional; fallback a `defaultOpenGraphImage` |

### 3.2. Project (CONTENT §4)

| Campo | Rango orientativo | Notas |
| --- | --- | --- |
| `id` | == `slug` | |
| `slug` | 3–64 | kebab-case |
| `title` | 5–80 | |
| `shortDescription` | 60–160 | apto para card |
| `summary` | 150–500 | resumen del caso |
| `role` | 10–120 | rol desempeñado |
| `context` / `challenge` / `solution` | 40–400 c/u | opcionales |
| `responsibilities[]` | 1–8 ítems × 10–120 | opcional |
| `technologies[]` | 1–12 slugs | obligatorio; refieren Technology |
| `highlights[]` | 1–6 ítems × 10–120 | opcional |
| `results[]` | 0–6 ítems × 10–160 | **solo demostrables** |
| `images[]` | alt obligatorio | opcional |
| `links[]` | `label` + `href` (+ `external`) | |
| `publishedAt` / `updatedAt` | fecha ISO | |
| `featured` | boolean | |
| `status` / `visibility` | enum §5 | `visibility`: público/limitado/privado |
| `confidentialityNotice` | texto | **obligatorio si `visibility` ≠ público** |

### 3.3. Technology (CONTENT §5)

| Campo | Rango orientativo | Notas |
| --- | --- | --- |
| `id` | 2–64 | kebab-case |
| `name` | 2–40 | |
| `category` | vocabulario §6 | agrupación |
| `description` | 20–160 | contexto de uso, no autoevaluación |
| `icon` | Lucide | opcional; no sustituye al texto |
| `website` | URL | opcional |
| `relevance` | texto | opcional; sin porcentajes subjetivos |
| `featured` | boolean | default `false` |
| `relatedProjects[]` / `relatedServices[]` | slugs | opcionales |

## 4. Regla de afirmaciones verificables (REQ-GLOBAL-008)

El contenido **no DEBE** contener afirmaciones ficticias, testimonios no verificables, proyectos inexistentes ni afirmaciones técnicas sin respaldo.

Toda afirmación de hecho —cifras, resultados, clientes, plazos, certificaciones, testimonios, métricas— debe:

1. Tener **evidencia** disponible (SPECS §6.2/§6.4, repositorio enlazado, o fuente del decisor), o
2. Quedar **marcada como pendiente de verificación humana** en la entrega.

Mientras no esté verificada, la entidad conserva `status: "draft"` y la afirmación se lista explícitamente en el PR bajo «Afirmaciones pendientes de verificación (REQ-GLOBAL-008)». La verificación de hechos es humana e indelegable; el agente que redacta nunca la da por hecha.

## 5. Estados editoriales (CONTENT §8–§9)

- `draft`: contenido en desarrollo, no publicado ni indexado.
- `review`: preparado para revisión técnica, editorial y legal.
- `published`: visible e indexable (único estado que genera ruta y sitemap).
- `archived`: retirado de navegación y sitemap.

Todo contenido nuevo de Fase 4 entra como `draft`. La publicación es decisión del decisor, no del agente.

## 6. Vocabulario de categoría (Technology)

Valores sugeridos para `category`. El esquema Zod define el conjunto cerrado.

- `lenguaje` — TypeScript, Rust…
- `framework` — Next.js, Astro, React…
- `cms` — Payload CMS…
- `estilo` — Tailwind…
- `herramienta` — CLI, Playwright, Lighthouse…

## 7. Prohibiciones

- NO precios, tarifas ni presupuestos.
- NO plazos de entrega garantizados.
- NO garantías de resultados ni rankings comparativos.
- NO testimonios, cifras de clientes ni métricas sin evidencia.
- NO porcentajes de dominio ni niveles subjetivos salvo escala editorial documentada (REQ-DOMAIN-TECHBADGE-001).
- NO información personal innecesaria (CONTENT §6.7).
- NO detalles protegidos por confidencialidad en proyectos (CONTENT §4).
