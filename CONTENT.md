# CONTENT.md

Abrir cuando: Textos, entidades, tono, slugs o validación editorial.
Aprobado: 13 de agosto de 2026
Audiencia: Dirección, Agente, Legal
Autoridad: Derivada
Clase: Complementario
Días para revisión: 90
En repo: Sí
Estado: Aprobado
Orden: 7
Propósito: Separa el contenido editorial de su presentación.
Reforma: Operativa
Responsable: Alexendros
Revisión: 13 de noviembre de 2026
Rol: Contenido
Ruta: ./CONTENT.md

<aside>
📌

**Propósito**

[CONTENT.md](./CONTENT.md) definirá el modelo editorial, los esquemas de contenido, las reglas de publicación, los metadatos y la ubicación de fuentes de contenido. Debe impedir que textos, rutas, imágenes, enlaces y datos de proyectos se dispersen por componentes.

</aside>

<aside>
✅

**Estado: Aprobado (13-08-2026).**

Batería 5.3 respondida íntegramente, verificaciones del plan cumplidas y ADR-0018 (formato y validación del contenido) registrado en [DECISIONS.md](./DECISIONS.md). Todo el contenido se redacta de cero; ningún tercero exige aprobación previa por ahora.

</aside>

# 1. Principios editoriales

<aside>
⚠️

**Principios editoriales**

- El contenido debe ser exacto, verificable y actualizado.
- No se publicarán proyectos, clientes, resultados, testimonios, métricas o certificaciones sin autorización o evidencia.
- Se distinguirán hechos, opiniones, capacidades, ofertas y aspiraciones.
- El contenido técnico debe ser claro para perfiles no técnicos sin perder precisión para perfiles especialistas.
- La estructura editorial debe ser independiente de la UI.
- Los textos de CTA deben describir una acción real.
- Los borradores no deben indexarse ni aparecer en sitemap.
- La fecha de actualización se usará solo cuando aporte información real.

</aside>

---

# 2. Entidad SiteConfig

**Fuente:** `src/content/site.ts` — objeto TS tipado único, validado con `siteConfigSchema` (Zod) en build (ARCHITECTURE §3 y §4.6).

**Campos:**

- `siteName`
- `siteUrl`
- `defaultTitle`
- `defaultDescription`
- `locale`
- `ogLocale`
- `socialLinks`
- `navigation`
- `footerNavigation`
- `organization` o `person` schema data
- `availability` status, solo si se mantiene con rigor
- `defaultOpenGraphImage`

**Obligatorios:** `siteName`, `siteUrl`, `defaultTitle`, `defaultDescription`, `locale`, `ogLocale`, `navigation`, `defaultOpenGraphImage`.

**Opcionales:** `socialLinks`, `footerNavigation`, `person` schema data. `availability` no se usa en el MVP; su activación futura requerirá ADR y cadencia de mantenimiento (resuelto 13-08-2026, batería 5.3 pregunta 6).

---

# 3. Entidad Service

**Fuente:** `src/content/services/<slug>.ts` — un módulo TS por servicio (cuatro servicios aprobados, DEC-SPECS-02), validado con `serviceSchema`.

**Campos:**

- `id`
- `slug`
- `title`
- `shortDescription`
- `description`
- `audience`
- `problemsSolved`
- `scope`
- `deliverables`
- `process`
- `technologies`
- `exclusions`
- `CTA`
- `featured`
- `status`
- `metadata`
- `openGraphImage`

**Obligatorios:** `id`, `slug`, `title`, `shortDescription`, `description`, `audience`, `problemsSolved`, `scope`, `deliverables`, `CTA`, `status`, `metadata`.

**Opcionales:** `process`, `technologies`, `exclusions`, `featured` (por defecto `false`), `openGraphImage` (fallback a `defaultOpenGraphImage`).

**Reglas:**

- El título debe expresar una capacidad o servicio comprensible.
- El resumen debe poder usarse en cards.
- El detalle no debe prometer plazos, precios o resultados garantizados sin decisión comercial.
- Las tecnologías deben referenciar entidades existentes, no cadenas libres si son parte estructural del contenido.

---

# 4. Entidad Project

**Fuente:** `src/content/projects/<slug>.ts` — un módulo TS por proyecto (cuatro publicables, DEC-SPECS-03). El cuerpo largo del caso de estudio pasará a MDX solo al activarse `/proyectos/[slug]` (P1), mediante ADR.

**Campos:**

- `id`
- `slug`
- `title`
- `shortDescription`
- `summary`
- `status`
- `visibility`
- `role`
- `context`
- `challenge`
- `solution`
- `responsibilities`
- `technologies`
- `highlights`
- `results`
- `images`
- `links`
- `publishedAt`
- `updatedAt`
- `featured`
- `metadata`
- `confidentialityNotice`

**Obligatorios:** `id`, `slug`, `title`, `shortDescription`, `summary`, `status`, `visibility`, `role`, `technologies`, `publishedAt`, `metadata`.

**Opcionales:** `context`, `challenge`, `solution`, `responsibilities`, `highlights`, `results` (solo demostrables), `images` (alt obligatorio si existen), `links`, `updatedAt`, `featured`. `confidentialityNotice` pasa a obligatorio cuando `visibility` no sea público.

**Reglas:**

- `visibility` debe permitir público, limitado o privado.
- `results` solo incluirá resultados demostrables.
- Deben evitarse detalles protegidos por confidencialidad.
- Las imágenes deben incluir alt text o declararse decorativas.
- Los enlaces deben comprobarse en CI o revisión editorial.

---

# 5. Entidad Technology

**Fuente:** `src/content/technologies/index.ts` — array TS tipado validado con `technologySchema`; iconos del set único Lucide (DES-07).

**Campos:**

- `id`
- `name`
- `category`
- `description`
- `icon`
- `website`
- `relevance`
- `featured`
- `relatedProjects`
- `relatedServices`
- `status`

**Obligatorios:** `id`, `name`, `category`, `description`, `status`.

**Opcionales:** `icon`, `website`, `relevance`, `featured`, `relatedProjects`, `relatedServices`.

**Reglas:**

- No representar dominio mediante porcentajes subjetivos salvo una escala editorial definida.
- Priorizar contexto de uso, proyectos y prácticas frente a autoevaluaciones numéricas.
- Los iconos no sustituyen al texto.

---

# 6. Entidad ContactChannel

**Fuente:** `src/content/contact.ts` — array TS tipado validado con `contactChannelsSchema`; consumida por `/contacto` y el footer (SPECS §6.8, ADR-0007). Asuntos del formulario: `src/content/contact-subjects.ts` (lista cerrada, REQ-FORM-CONTACT-001).

**Taxonomía de asuntos (comercial, no 1:1 con servicios):** los seis asuntos son categorías de consulta más amplias que el catálogo de cuatro servicios (DEC-SPECS-02). Mapeo orientativo:

| Asunto del formulario | Servicios / alcance relacionado |
| --- | --- |
| Proyecto de software · Programación de aplicaciones | Desarrollo web a medida |
| Portal · Blog · Portafolio | Desarrollo web, landing pages |
| Formación en Nuevas Tecnologías · Herramientas IA para la empresa | Automatización IA (formación/consultoría adyacente) |
| Auditoría de seguridad y posicionamiento | Auditoría web |
| Sistemas profesionales · Flujos de trabajos automatizables | Automatización y agentes IA |
| Asesoramiento tecnológico · Consultor especializado | Transversal a los cuatro servicios |

No se fuerza equivalencia slug↔asunto: el formulario captura intención comercial; el catálogo `/servicios` describe ofertas publicadas.

**Campos:**

- `type`
- `label`
- `href`
- `visible`
- `priority`
- `external`
- `availability`
- `privacyNote`

**Obligatorios:** `type`, `label`, `href`, `visible`, `priority`.

**Opcionales:** `external`, `availability`, `privacyNote`.

**Reglas:**

- Los enlaces de email, redes o calendarios deben ser válidos.
- No exponer canales personales no destinados a uso público.
- El canal principal de contacto debe ser inequívoco.

---

# 7. Metadata editorial

Cada ruta o entidad publicable debe poder generar:

- `title`
- `description`
- `canonicalPath`
- `robots` directive
- `openGraph` title
- `openGraph` description
- `openGraph` image
- `twitter` card configuration
- structured data when applicable

**Mecanismo:** la metadata se genera de forma centralizada en `src/lib/seo` a partir de cada entidad y de `SiteConfig`; el `canonicalPath` se resuelve contra `NEXT_PUBLIC_SITE_URL`. Ninguna página define metadata ad hoc (ARCHITECTURE §11).

---

# 8. Flujo de publicación

| Estado | Definición |
| --- | --- |
| Borrador | Contenido en desarrollo, no publicado ni indexado. |
| Revisión | Contenido preparado para revisión técnica, editorial y legal si procede. |
| Publicado | Contenido visible e indexable. |
| Archivado | Contenido retirado de navegación y, según decisión SEO, eliminado o redirigido. |

<aside>
⚠️

- Todo cambio que altere una URL publicada debe evaluar redirección.
- Todo contenido de proyecto debe revisar confidencialidad antes de publicarse.

</aside>

---

# 9. Mecanismo técnico del flujo de publicación

El flujo Borrador → Revisión → Publicado → Archivado se aplica en código y en CI, no por convención.

- `status` es un literal tipado (`"draft" | "review" | "published" | "archived"`) validado por Zod: un valor fuera del enum rompe el build.
- El acceso al contenido pasa por selectores únicos (`getPublishedServices()`, `getPublishedProjects()`, `getPublishedTechnologies()`) que filtran `status === "published"`. Los componentes nunca importan los arrays crudos.
- `sitemap.ts`, `robots.ts` y `generateStaticParams` se derivan exclusivamente de esos selectores: los estados `draft` y `review` no generan ruta, sitemap ni indexación.
- Un test unitario en CI verifica que ningún elemento no publicado aparece en sitemap ni en rutas (gate bloqueante, ARCHITECTURE §13).
- `archived` retira el elemento de selectores y sitemap; la decisión de redirección se evalúa y registra según ARCHITECTURE §11.

---

# 10. Formato fuente y validación

<aside>
✅

**Resuelto (13-08-2026, batería 5.3 preguntas 1–2):** TS tipado con validación Zod obligatoria en build; MDX diferido a P1. El ADR de formato de contenido se registrará en [DECISIONS.md](./DECISIONS.md) al cerrar el documento.

</aside>

- **Formato del MVP:** TypeScript tipado en `src/content/` (coherente con ADR-0003, contenido en Git sin CMS, y ARCHITECTURE §4.6). Sin MDX ni loaders adicionales en P0.
- **MDX diferido:** se incorporará únicamente con los casos de estudio `/proyectos/[slug]` (P1), mediante ADR propio.
- **Validación:** un esquema Zod por entidad en `src/lib/validations/content/`, ejecutado al importar el módulo en build. Contenido inválido = build fallido; ningún contenido llega a producción sin pasar su esquema.
- **Textos legales (ADR-0015 / ADR-0027):** módulos TS en `src/content/legal/` con el cuerpo en secciones tipadas renderizadas en servidor, hasta que exista MDX. Aviso legal y privacidad en `published` (Fase 7); firma del decisor; asesoría externa residual **post-v1.0** (no bloquea `PROMOTE`).
- **Enlaces:** comprobación en revisión editorial en P0; verificación automatizada de enlaces se valorará como gate al activar P1.

### 10.1 Actualización ante nuevas integraciones (SPECS §6.9)

Al añadir analítica, newsletter, pagos, CMS u otro encargado / destinatario:

1. Actualizar `src/content/legal/privacidad.ts` (finalidad, base, destinatarios, transferencias, conservación).
2. Si el cambio afecta al prestador o al objeto del sitio, actualizar también `aviso-legal.ts`.
3. Si aparecen cookies no esenciales, activar política/banner según ADR-0010 (P1; fuera del MVP).
4. Revisar footer, formulario de contacto y textos de consentimiento.
5. Registrar o actualizar el ADR del proveedor en DECISIONS.md.
6. NO promover a producción (`PROMOTE`, ADR-0025) sin revisión del decisor. La asesoría legal externa es residual post-v1.0 (ADR-0027) y no bloquea `PROMOTE`.

---

# 11. Guía de tono y voz

<aside>
✅

**Resuelto (13-08-2026, batería 5.3 pregunta 4):** primera persona singular con tuteo.

</aside>

- Primera persona singular (“diseño y construyo…”) con tuteo al lector.
- Voz activa, frases cortas, sin relleno ni superlativos vacíos.
- Hechos con evidencia; capacidades sin prometer plazos, precios ni resultados garantizados (§1 y reglas de Service).
- Términos técnicos con contexto en su primera aparición: comprensible para perfiles no técnicos sin perder precisión.
- CTA con verbo de acción real y resultado inequívoco (“Escríbeme”, “Agenda una llamada”).

**Aplicación práctica:** las reglas de tono, convenciones de slug, longitudes por campo y la regla de afirmaciones verificables se detallan en [docs/guia-redaccion.md](./docs/guia-redaccion.md), usado por la redacción de servicios, proyectos, stack, perfil y legales (Fase 4).

---

# 12. Inventario de contenido

<aside>
✅

**Resuelto (13-08-2026, batería 5.3 preguntas 3, 5, 6 y 7):** no existe contenido previo aprovechable; todo se redacta de cero en la fase de contenido del ROADMAP. Ningún cliente o empleador exige aprobación previa por ahora; la revisión de confidencialidad por proyecto se mantiene como control del flujo (§8). OG images con plantilla generada; sin estado de disponibilidad en el MVP.

</aside>

| Pieza | Fuente prevista | Estado |
| --- | --- | --- |
| Propuesta de valor y home | `site.ts` • secciones | Tipado en `site.ts`; secciones de landing en Fase 5; hechos de site firmados 15-08-2026 (REQ-GLOBAL-008) |
| 4 servicios (DEC-SPECS-02) | `services/*.ts` | Tipado `published`; firmado por el decisor el 15-08-2026 (REQ-GLOBAL-008) |
| 4 proyectos (DEC-SPECS-03) | `projects/*.ts` | Tipado `published`; firmado por el decisor el 15-08-2026 (REQ-GLOBAL-008); sin capturas aún (DES-07) |
| Stack y prácticas | `technologies/index.ts` | Tipado `published`; firmado por el decisor el 15-08-2026 (REQ-GLOBAL-008) |
| Bio (/sobre-mi) | `profile.ts` | Tipado `published`; firmado por el decisor el 15-08-2026 (REQ-GLOBAL-008) |
| Aviso legal y privacidad | `legal/*` | `published` (Fase 7); datos reales del prestador; firma del decisor; asesoría externa residual **post-v1.0** (ADR-0027) |
| Capturas de proyectos | `public/images/` | Por producir (DES-07: capturas reales); refs retiradas del contenido |
| OG images | `opengraph-image.tsx` | Implementado: `src/app/opengraph-image.tsx` (ADR-0018; #37) |
