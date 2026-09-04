# Guía de redacción

Esta guía define las convenciones editoriales para todo el contenido del sitio. El objetivo es mantener coherencia de tono, estructura y calidad sin depender de revisión manual constante.

---

## 1. Principios de tono y voz

- **Primera persona singular** ("diseño y construyo", "entrego", "audito") con **tuteo** al lector ("tu web", "tu equipo", "te explico").
- **Voz activa**, frases cortas, sin relleno ni superlativos vacíos.
- **Hechos con evidencia**: cada afirmación técnica o de resultado debe tener respaldo verificable (URL, métrica, repositorio, testimonio nombrado).
- **Capacidades sin prometer** plazos, precios ni resultados garantizados.
- **Términos técnicos con contexto** en su primera aparición: comprensible para perfiles no técnicos sin perder precisión.
- **CTA con verbo de acción real** y resultado inequívoco: "Escríbeme", "Agenda una llamada", "Ver proyecto".

---

## 2. Convenciones de slug

- **kebab-case en minúsculas**: `produccion-sitios-web`, `front-valencia`, `vcf-cribador`.
- **Máximo 64 caracteres**, mínimo 2.
- **Solo letras, números y guiones**: `^[a-z0-9]+(?:-[a-z0-9]+)*$`.
- **Semánticos y estables**: el slug no cambia aunque cambie el título.
- **Unicidad global**: ningún slug se repite entre servicios, proyectos, tecnologías.

---

## 3. Longitudes por campo (validados por Zod)

| Entidad | Campo | Mín | Máx | Notas |
|---------|-------|-----|-----|-------|
| Service | title | 1 | 80 | Capacidad comprensible |
| Service | shortDescription | 1 | 200 | Para cards y previews |
| Service | description | 1 | — | Detalle completo |
| Service | audience | 1 | — | A quién va dirigido |
| Service | problemsSolved[] | 1 | — | Mínimo 1 elemento |
| Service | scope[] | 1 | — | Mínimo 1 elemento |
| Service | deliverables[] | 1 | — | Mínimo 1 elemento |
| Service | process[] | 0 | — | Opcional |
| Service | technologies[] | 0 | — | Slugs de Technology |
| Project | title | 1 | 80 | Nombre del proyecto |
| Project | shortDescription | 1 | 200 | Para cards |
| Project | summary | 1 | — | Resumen ejecutivo |
| Project | role | 1 | — | Tu responsabilidad |
| Project | context | 0 | — | Opcional |
| Project | challenge | 0 | — | Opcional |
| Project | solution | 0 | — | Opcional |
| Project | responsibilities[] | 0 | — | Opcional |
| Project | technologies[] | 1 | — | Mínimo 1 slug |
| Project | highlights[] | 0 | — | Opcional |
| Project | results[] | 0 | — | Solo demostrables |
| Project | images[] | 0 | — | alt obligatorio si existe |
| Project | links[] | 0 | — | Opcional |
| Technology | name | 1 | 40 | Nombre canónico |
| Technology | description | 1 | — | Qué es y para qué sirve |
| Technology | relevance | 0 | — | Contexto de uso |
| Profile | name | 1 | 80 | Nombre visible |
| Profile | title | 1 | 120 | Headline profesional |
| Profile | summary | 1 | — | Resumen breve |
| Profile | bio[] | 1 | — | Mínimo 1 párrafo |

---

## 4. Estructura por entidad

### Service
1. **title**: nombre del servicio (ej. "Desarrollo web a medida")
2. **shortDescription**: una frase para cards/previews
3. **description**: párrafo completo explicando qué haces y cómo
4. **audience**: a quién va dirigido (perfil, necesidad, tamaño)
5. **problemsSolved**: lista de dolores que resuelves (mín. 3)
6. **scope**: qué incluye el servicio (mín. 3)
7. **deliverables**: qué entrega el cliente al final (mín. 3)
8. **process** (opcional): pasos del 1 al N
9. **technologies** (opcional): slugs de Technology relacionadas
10. **exclusions** (opcional): qué NO incluye
11. **cta**: `{ label, href }` — siempre "/contacto"
12. **featured**: `true` si aparece en home
13. **status**: `"published"` | `"draft"` | `"review"` | `"archived"`
14. **metadata**: `{ title, description }` para SEO
15. **openGraphImage** (opcional): ruta a imagen OG específica

### Project
1. **title**: nombre del proyecto (ej. "FRONT Valencia")
2. **shortDescription**: una frase para cards
3. **summary**: 2-3 párrafos: contexto, reto, solución, resultado
4. **role**: tu responsabilidad concreta
5. **context** (opcional): situación inicial del cliente
6. **challenge** (opcional): dificultad técnica/negocio
7. **solution** (opcional): enfoque técnico adoptado
8. **responsibilities** (opcional): lista de lo que hiciste tú
9. **technologies**: slugs de Technology usadas (mín. 1)
10. **highlights** (opcional): logros técnicos/diferenciales
11. **results** (opcional): métricas demostrables (con fuente)
12. **images** (opcional): capturas reales, alt obligatorio
13. **links** (opcional): web, repo, demo, caso de estudio
14. **publishedAt**: ISO date (YYYY-MM-DD)
15. **updatedAt** (opcional): ISO date
16. **featured**: `true` si aparece en home
17. **status**: `"published"` | `"draft"` | `"review"` | `"archived"`
18. **visibility**: `"publico"` | `"limitado"` | `"privado"`
19. **confidentialityNotice** (obligatorio si visibility ≠ "publico")
20. **metadata**: `{ title, description }` para SEO

### Technology
1. **id** = slug (ej. "next-js")
2. **name**: nombre canónico ("Next.js")
3. **category**: `lenguaje` | `framework` | `cms` | `estilo` | `herramienta`
4. **description**: qué es y para qué lo usas tú
5. **icon** (opcional): nombre de icono Lucide
6. **website** (opcional): URL oficial
7. **relevance** (opcional): contexto de uso en tus proyectos
8. **featured**: `true` si aparece en /stack destacado
9. **status**: `"published"` | `"draft"` | `"review"` | `"archived"`
10. **relatedProjects** (opcional): slugs de Project
11. **relatedServices** (opcional): slugs de Service

### Profile
1. **name**: "Alexendros"
2. **title**: headline profesional (máx. 120 chars)
3. **summary**: 1-2 frases de presentación
4. **bio**: array de párrafos (mín. 3) con trayectoria, enfoque, valores
5. **location** (opcional): "Valencia, España"
6. **languages** (opcional): array de idiomas
7. **links** (opcional): GitHub, LinkedIn, Email, Cal.com
8. **status**: `"published"` | `"draft"` | `"review"` | `"archived"`
9. **metadata**: `{ title, description }` para SEO

---

## 5. Reglas de contenido

### Qué SÍ hacer
- Usar datos reales: URLs de repositorios, métricas con fecha, nombres de clientes autorizados.
- Vincular tecnologías a entidades `Technology` (slugs), no cadenas libres.
- Escribir `results` solo con resultados demostrables (fuente: cliente, analytics, logs).
- Incluir `confidentialityNotice` en proyectos no públicos.
- Mantener `updatedAt` al día al modificar contenido sustancial.
- Usar `openGraphImage` específica por entidad cuando exista.

### Qué NO hacer
- Prometer plazos, precios o resultados garantizados sin decisión comercial documentada.
- Incluir testimonios no verificables, proyectos inexistentes o métricas inventadas.
- Usar porcentajes subjetivos ("90 % experto en React") sin escala editorial definida.
- Dejar campos obligatorios con "Contenido en borrador" o placeholders.
- Cambiar slugs de entidades publicadas (rompe URLs, sitemap, SEO).
- Mezclar opiniones personales sin etiquetar como tales en ensayos/artículos.

---

## 6. Flujo editorial (implementado en código)

```text
draft → review → published → archived
```

- **draft**: en desarrollo, no publicado ni indexado.
- **review**: listo para revisión técnica/editorial/legal.
- **published**: visible e indexable (sitemap, rutas, selectors).
- **archived**: retirado de navegación; evaluar redirección.

**Mecanismo técnico**:
- `status` es enum validado por Zod en build: valor inválido = build fallido.
- Selectores únicos: `getPublishedServices()`, `getPublishedProjects()`, `getPublishedTechnologies()`, `getPublishedProfile()`.
- `sitemap.ts`, `robots.ts` y rutas dinámicas derivan **exclusivamente** de esos selectores.
- Test unitario en CI verifica que ningún elemento no publicado aparece en sitemap ni rutas (gate bloqueante).

---

## 7. Checklist antes de publicar (status: "published")

- [ ] Todos los campos obligatorios completos y validados por Zod.
- [ ] Slug único global (no colisiona con servicios/proyectos/tecnologías).
- [ ] `technologies` referencia slugs existentes en `technologies/index.ts`.
- [ ] `relatedProjects` / `relatedServices` en Technology son slugs válidos.
- [ ] `images` tienen `alt` descriptivo (no "imagen", "captura").
- [ ] `links` verificados (HTTP 200, no redirecciones rotas).
- [ ] `results` tienen fuente citada (cliente, analytics, logs, repo).
- [ ] `confidentialityNotice` presente si `visibility !== "publico"`.
- [ ] `metadata.title` ≤ 80 chars, `metadata.description` ≤ 200 chars.
- [ ] `openGraphImage` existe en `public/images/` si se especifica.
- [ ] Sin "Contenido en borrador", "TODO", "FIXME" ni placeholders.
- [ ] Tono: primera persona, tuteo, voz activa, hechos verificables.
- [ ] Build pasa (`pnpm build`) y tests pasan (`pnpm test`).

---

## 8. Actualización de contenido

- **Servicios/Proyectos/Stack**: editar archivo `.ts` correspondiente en `src/content/`.
- **Perfil**: editar `src/content/profile.ts`.
- **Configuración del sitio**: editar `src/content/site.ts`.
- **Canales de contacto**: editar `src/content/contact.ts`.
- **Tecnologías**: editar `src/content/technologies/index.ts`.

Cada cambio genera PR, pasa CI y se revisa en preview antes de mergear a `main`.

---

## 9. Referencias

- [CONTENT.md](./CONTENT.md) — modelo editorial, entidades, flujo de publicación.
- [SPECS.md](./SPECS.md) — requisitos funcionales, criterios de aceptación.
- [DESIGN.md](./DESIGN.md) — tokens, componentes, accesibilidad visual.
- [ARCHITECTURE.md](./ARCHITECTURE.md) — estructura, selectores, validación en build.