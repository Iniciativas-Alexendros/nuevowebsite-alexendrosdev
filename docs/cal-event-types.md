# Event types Cal.com — alineación comercial

**Estado:** checklist operativa fuera del repo (decisor).  
**URL base:** https://cal.com/alexendros  
**Canal en producto:** enlace externo sin embed (DEC-SPECS-06).  
**Asuntos del formulario:** [`src/content/contact-subjects.ts`](../src/content/contact-subjects.ts)

## Objetivo

Reducir fricción de discovery y empaquetar trabajo de baja complejidad (auditoría / llamada) antes de proyectos open-ended.

## Event types recomendados

| Event type (nombre en Cal.com) | Duración | Asunto / oferta alineada | Notas |
| --- | --- | --- | --- |
| **Discovery 30 min** | 30 min | Transversal; asuntos de proyecto, portal, formación, asesoramiento | Filtro antes de desarrollo a medida |
| **Brief auditoría** | 30–45 min | «Auditoría de seguridad y posicionamiento» · servicio `auditorias` | Confirmar URLs, entorno, acceso repo opcional |
| **PoC automatización** | 30 min | «Sistemas profesionales · Flujos de trabajos automatizables» · servicio `consultoria-tecnologica` (la implementación es proyecto aparte) | Alcance 1–2 semanas; no retainer |

## Deep-links del sitio

El formulario acepta `?subject=` con claves cortas: `desarrollo`, `portal`, `formacion`, `auditoria`, `automatizacion`, `asesoramiento` (véase `src/lib/contact-subject-query.ts`).

Ejemplo: `/contacto?subject=auditoria` preselecciona el asunto de auditoría.

## Checklist decisor

- [ ] Crear los 3 event types en Cal.com (o renombrar existentes).
- [ ] Descripciones cortas sin precios públicos inventados.
- [ ] Buffer entre citas y límite semanal acorde a capacidad.
- [ ] Confirmar que el enlace canónico sigue siendo `https://cal.com/alexendros` (sin script embebido).
