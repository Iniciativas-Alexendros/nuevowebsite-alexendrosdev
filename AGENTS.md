# AGENTS.md

Abrir cuando: Vas a escribir código: ficha, autonomía, DoD y comandos.
Aprobado: 13 de agosto de 2026
Audiencia: Agente, Dirección
Autoridad: Operativa
Clase: Complementario
Días para revisión: 90
En repo: Sí
Estado: Aprobado
Orden: 9
Propósito: Contrato operativo del agente de código.
Reforma: Operativa
Responsable: Alexendros
Revisión: 13 de noviembre de 2026
Rol: Contrato
Ruta: ./AGENTS.md

<aside>
📌

**Propósito**

Este archivo es el contrato operativo del agente de código. Deriva de CONSTITUTION.md y de los demás documentos canónicos. El sitio se implementa por IA. El humano dirige, revisa diffs y firma fases. No dupliques CONSTITUTION, SPECS, DESIGN, ARCHITECTURE ni CONTENT: cita el ancla y ejecuta.

</aside>

# 1. Destinatario y postura

- Eres un agente de código. Implementas. No reabres decisiones aceptadas.
- Escribes en español en commits, PR, comentarios de código no triviales y mensajes al humano.
- Usas verbos prescriptivos: DEBE, NO DEBE, PUEDE, REQUIERE.
- Una sesión = una unidad de trabajo cohesiva. PR pequeño. CI verde antes de pedir revisión.

---

# 2. Fuentes de verdad (orden de lectura)

Empieza siempre por [README.md](./README.md). Luego lee solo lo necesario para la tarea, en este orden:

1. [README.md](./README.md) — pulso, enrutado y exclusiones.
2. Este archivo — contrato operativo de la sesión.
3. [CONSTITUTION.md](./CONSTITUTION.md) si tocas alcance, superficie, integraciones, secretos o capacidades nuevas.
4. La fase activa de [ROADMAP.md](./ROADMAP.md) (objetivo, traza, exclusiones, criterio de salida).
5. Los REQ/NFR citados en la traza, en [SPECS.md](./SPECS.md).
6. Si tocas UI: [DESIGN.md](./DESIGN.md). Si tocas estructura, datos o endpoint: [ARCHITECTURE.md](./ARCHITECTURE.md). Si tocas textos o entidades: [CONTENT.md](./CONTENT.md).
7. [DECISIONS.md](./DECISIONS.md) antes de dependencias, secretos, proveedores, persistencia, auth, pagos, CMS o cambio de estructura.

NO inventes requisitos. Si falta un ancla, paras y preguntas.

---

# 3. Formato de unidad de trabajo

Toda tarea que ejecutes DEBE caber en esta ficha. Si el humano no la da, la reconstruyes y la confirmas antes de escribir código.

```
Objetivo: <resultado verificable en una frase>
Traza: <IDs SPECS / ADR>
Alcance: <archivos o rutas que SÍ tocas>
Exclusiones: <lo que NO harás, incl. P1/P2>
Dependencias: <fase, ADR o PR previo>
Pruebas: <comandos y casos>
Criterio de cierre: <observable: CI, captura, ruta>
```

NO empieces por “mejorar la arquitectura”. Empiezas por el criterio de cierre.

---

# 4. Autonomía

**PUEDES sin preguntar**

- Implementar P0 ya especificado en SPECS + fase activa.
- Añadir tests que fijan comportamiento ya aceptado.
- Corregir tipos, lint y fallos de CI causados por tu cambio.
- Refactors locales sin cambiar API pública ni contratos Zod.

**REQUIERE confirmación explícita del decisor**

- Dependencia, herramienta o script de terceros nuevos.
- Variable de entorno nueva o cambio de `.env.example`.
- Ruta, entidad de contenido o esquema Zod nuevos.
- Directiva de cliente fuera de la frontera de ARCHITECTURE §4.9.
- Afirmaciones profesionales, cifras, legales o nombres de cliente.
- Cualquier P1/P2 o trabajo “por si acaso”.
- Alterar un ADR aceptado.

Si dudas entre las dos columnas, paras y preguntas.

---

# 5. Working Agreement

<aside>
⚠️

**Reglas verificables en PR o CI**

- NO creas archivos, carpetas, componentes, hooks, servicios o abstracciones sin responsabilidad citada en SPECS o ARCHITECTURE.
- NO marcas un módulo como cliente salvo necesidad demostrable de interacción.
- NO importas módulos server-only desde cliente.
- NO introduces secretos. NO pegas tokens, claves ni PII en el repo, el chat ni los logs.
- NO añades estilos arbitrarios si existe token o componente canónico (DESIGN).
- NO implementas P1/P2 dentro de P0.
- NO copias código del repositorio anterior.
- Actualizas el documento canónico cuyo ámbito cambie tu PR.
- Antes de pedir revisión: typecheck, lint, tests afectados y build en verde.
- UI: claro/oscuro, teclado, foco, responsive y reduced-motion.
- Endpoint: validas entrada, manejas error, limitas abuso y evitas PII en logs.
- Commits pequeños, Conventional Commits, cuerpo con IDs REQ / ADR / fase.
</aside>

---

# 6. DoD de una sesión de agente

Una sesión NO está terminada si falta alguno:

1. La ficha de §3 está satisfecha.
2. Typecheck, lint, test y build pasan (cuando el repo exista; ver §8).
3. El diff no incluye secretos ni archivos irrelevantes.
4. Las rutas o componentes nuevos tienen traza a un REQ.
5. El PR describe objetivo, traza, cómo probar y exclusiones.
6. NO marcas la fase como cerrada. El decisor firma el checklist de la épica (DEC-ROADMAP-03).

---

# 7. Git (DEC-AGENTS-02/03)

- Trunk-based: ramas cortas `feat/`, `fix/`, `chore/` → PR a `main` protegida.
- Conventional Commits obligatorios: `feat:`, `fix:`, `test:`, `chore:`, `docs:`.
- El cuerpo del commit DEBE citar los IDs `REQ-*` / `ADR-*` / fase tocados.
- Un PR = una unidad de trabajo. CI verde es condición de merge.
- Toda PR lleva al menos una etiqueta temática (ADR-0022). Las PR apiladas se rebasan solas tras cada fusión a `main`, sin auto-merge (ADR-0023).
- El decisor revisa el diff. El agente no se auto-mergea.
- **Despliegue (ADR-0025):** el agente NO dispara deploy Vercel por PR. Tras integrar en `main` todos los PR de la fase, el decisor (o el agente con confirmación explícita) ejecuta `Deploy fase (Vercel)` → preview MITL; la firma del criterio de salida es **posterior** a esa validación; producción solo con firma + `PROMOTE` + entorno `Production`.

---

# 8. Comandos canónicos

Hasta existir el repo, estos nombres son el contrato. El scaffold de Fase 1 DEBE crearlos.

- `pnpm check` — typecheck + lint + format:check
- `pnpm test` — Vitest
- `pnpm test:e2e` — Playwright
- `pnpm build` — build de producción
- `pnpm ci` — check + test + build

Umbrales ejecutables (DEC-AGENTS-04; no los rebajes):

- Lighthouse ≥90 en las cuatro categorías en móvil (OBJ-005), medido en CI **local** tras `pnpm build` (ADR-0025; no despliega Vercel por PR).
- axe-core sin violaciones bloqueantes en CI.
- Cobertura mínima 70 % en `src/lib/` y validaciones, medida por Vitest en CI, bloqueante de merge.

---

# 9. Orden de trabajo con el agente

1. Marco documental aprobado, incluido este contrato.
2. Humano entrega una ficha §3 o apunta a una tarea de ROADMAP.
3. Agente lee §2, implementa, deja CI verde, abre PR.
4. Humano revisa diff, hace QA visual si hay UI, y fusiona.
5. Tras fusionar a `main` todos los PR de la fase: workflow `Deploy fase (Vercel)` → preview MITL (ADR-0025).
6. El decisor revisa y valida el preview; solo entonces firma el criterio de salida de la épica (DEC-ROADMAP-03).
7. Tras la firma: mismo workflow → production con `PROMOTE` (ADR-0025).
8. Fase 1 se ejecuta sin copiar el repo anterior.

---

# 10. Lo que el humano no delega

- Hechos de contenido y confidencialidad (REQ-GLOBAL-008).
- Textos legales finales (ADR-0015).
- Aceptación de dependencias y proveedores (ADR-0006).
- Firma del criterio de salida de cada fase.
- Validación MITL del preview de fase (previa a firmar cierre) y promoción a producción (`PROMOTE`, ADR-0025).
- Decisiones que requieran ADR nuevo.

---

# 11. Herramientas (DEC-AGENTS-01)

Herramientas autorizadas: **OpenCode Desktop**, **Kimi Code CLI** y **Hermes Desktop**. El contrato de §§1–10 manda. Si un bloque de herramienta choca con él, gana el contrato.

NO añadas otra herramienta de código sin confirmación y sin actualizar este apartado.

LSP: usa el servidor de lenguaje (LSP) disponible en el entorno para los lenguajes del repositorio —TypeScript, CSS, JSON, Markdown— y también para bash, para diagnóstico, navegación y refactorización asistida. El LSP complementa, no sustituye, los gates de §8 (`pnpm check`, `pnpm test`, `pnpm build`).

## 11.1 OpenCode Desktop

- Carga este `AGENTS.md` de la raíz del repo. NO uses `~/.config/opencode/AGENTS.md` para anular este contrato.
- NO ejecutes `/init` si este archivo ya existe: reescribiría la fuente de verdad.
- Config del proyecto solo si hace falta (`opencode.json` / `.opencode/`). NO añadas agentes o permisos extra sin confirmación (§4).
- Pide confirmación humana antes de bash que toque `.env`, instale paquetes o haga `git push --force`.

## 11.2 Kimi Code CLI

- Lee este `AGENTS.md`. NO ejecutes `/init` sobre un contrato ya canónico.
- Mantén confirmación para escrituras y shell. NO pases la sesión a auto-aprobación global.
- Config en `~/.kimi-code/config.toml` o `~/.kimi/config.toml`. Cero secretos en el repo.
- Tras editar, ejecuta los comandos de §8 antes de pedir revisión.

## 11.3 Hermes Desktop

- Abre el workspace de este repo. Este archivo manda sobre skills y memoria de la app.
- NO persistas secretos, tokens ni PII en memory/skills.
- NO crees skills que relajen §4–§6 ni que implementen P1/P2.
- El agente no se auto-mergea. El humano revisa el diff en el PR.

---

# 12. Batería AGENTS (cerrada 13-08-2026)

<aside>
✅

Batería 7.3 del [Plan de verificación y desarrollo de documentos pendientes — Baterías de decisión](https://app.notion.com/p/Plan-de-verificaci-n-y-desarrollo-de-documentos-pendientes-Bater-as-de-decisi-n-4a063a3c9cea43da853f7630458401f6?pvs=21). 5 de 5 resueltas. Documento **Aprobado**.

</aside>

| ID | Decisión | Estado |
| --- | --- | --- |
| DEC-AGENTS-01 | Herramientas y formato | **Resuelta:** OpenCode Desktop, Kimi Code CLI, Hermes Desktop; contrato general + bloques §11. |
| DEC-AGENTS-02 | Commits | **Resuelta:** Conventional Commits + IDs REQ/ADR/fase en el cuerpo. |
| DEC-AGENTS-03 | Ramas | **Resuelta:** trunk-based, PR a `main` protegida. |
| DEC-AGENTS-04 | Umbrales P0 | **Resuelta:** cobertura 70 % en `src/lib/` y validaciones; Lighthouse ≥90; axe-core bloqueante. |
| DEC-AGENTS-05 | Autonomía | **Resuelta:** matriz §4 ratificada. |

**Verificaciones §7.1:**

- [x]  Cada regla del Working Agreement es verificable en PR o CI.
- [x]  Este archivo no duplica SPECS/ARCHITECTURE: cita anclas y ejecuta.
- [x]  El orden de trabajo de §9 encaja con el marco ya aprobado.

**Pendiente de repo (Fase 0–1):** crear los scripts de §8 y la plantilla de PR con la ficha §3.

## Learned User Preferences

- En modo plan: entregar ficha AGENTS §3 y plan; no implementar hasta confirmación explícita del decisor.
- Ante dependencias nuevas, presentar alternativas viables antes de pedir autorización.
- Tras cerrar trabajo de fase, documentar en el hub Notion del proyecto con el formato/estructura existentes y actualizar el calendario de fases.
- En entidades de proyecto: omitir `images[]` hasta tener capturas reales; no dejar rutas placeholder.
- Asuntos cerrados del formulario de contacto: «Proyecto de software · Programación de aplicaciones», «Portal · Blog · Portafolio», «Formación en Nuevas Tecnologías · Herramientas IA para la empresa», «Auditoría de seguridad y posicionamiento», «Asesoramiento tecnológico · Consultor especializado», «Sistemas profesionales · Flujos de trabajos automatizables».
- Si un bloqueo es un secreto o token de terceros que solo el decisor puede crear, dejar residual pendiente y continuar a la siguiente fase con prompt de handoff; no estancar la sesión.
- En `/stack`: agrupar por categoría sin porcentajes subjetivos.
- Email de autor/firma en commits y GitHub: `operaciones@alexendros.dev` (no Proton personal, noreply ni `hola@` en commits). Mailto público: `hola@` (catch-all). From/To/auth SMTP y commits: `operaciones@`.

## Learned Workspace Facts

- Hub Notion del proyecto: https://app.notion.com/p/3bb7ded224cb807c9101e14ef41e6dc5 ; ficha Fase 5: https://app.notion.com/p/1965e7f8eb784df0ac7d8490f833fed8 ; ficha Fase 6: https://app.notion.com/p/901e1eba9e874304af08f5a10daddf54 ; ficha Fase 7: https://app.notion.com/p/7d6d6b9cad00464d8425cdcd25c34efe ; ficha Fase 8: https://app.notion.com/p/3be7ded224cb81a79932f6630cbc648f
- Contenido tipado en `src/content/*` (servicios, proyectos, stack, perfil, site, legal); las páginas marketing se alimentan desde ahí.
- Portfolio P0: rutas `/proyectos`, `/stack`, `/sobre-mi` desde contenido published; `/proyectos/[slug]` y MDX son P1 (Fase 9).
- Home: `FeaturedProjects` / `FeaturedStack` deben permanecer ligeros (OBJ-005); cards/badges de dominio completos viven en las páginas de portfolio.
- Reserva Cal.com: solo enlace a `https://cal.com/alexendros` (sin script de terceros).
- Envío de contacto: Proton SMTP vía `nodemailer` en `src/lib/server/` (ADR-0011); org secrets `PROTON_SMTP_HOST`/`PORT`, `PROTON_MAIL_FROM` (`operaciones@` = To+From+SMTP_USER), `PROTON_SMTP_TOKEN` (no Bridge); mailto público `hola@` (catch-all); sync a Vercel con `sync-env-vercel.yml` (CLI Vercel fijada) → vars runtime `SMTP_*`.
- Residual Fase 5: smoke SMTP real pendiente de sync-env + redeploy; sin config el formulario degrada a 503.
- Despliegue Vercel (ADR-0025): sin preview por PR; `ignoreCommand` en `vercel.json`; Lighthouse CI local; tras integrar la fase en `main` → preview MITL → firma → production con `PROMOTE`.
- Legales: aviso legal y privacidad `published` (Fase 7 / #48); asesoría externa residual pre-PROMOTE (ADR-0015). Fase activa: 8 (hardening → v1.0).

## Cursor Cloud specific instructions

Servicio único: app Next.js 16 (App Router) + React 19 + TypeScript, pnpm 10 / Node 22. Comandos canónicos en `package.json` (referencia; no duplicar): `pnpm check`, `pnpm test`, `pnpm build`, `pnpm test:e2e`, `pnpm ci`. El update script del entorno ya ejecuta `pnpm install --frozen-lockfile` al arrancar el pod.

Notas no obvias para arrancar/probar:

- Dev server: `pnpm dev` (Turbopack) en `http://localhost:3000`. Arráncalo en una terminal tmux, no en `install`/`start`.
- La app NO necesita `.env.local` para desarrollar ni para la suite de tests: `getSiteEnv()` solo se usa en tests unitarios; en runtime SEO cae a `siteConfig` (`https://alexendros.dev`). NO fijes `NEXT_PUBLIC_SITE_URL=http://localhost:3000` en `.env.local`, porque rompe los e2e de SEO (`tests/e2e/seo.spec.ts` esperan `https://alexendros.dev`).
- Endpoint `POST /api/contact`: sin variables SMTP (`CONTACT_TO_EMAIL`, `SMTP_*`, `EMAIL_FROM_ADDRESS`) degrada a 503 con mensaje amable. Es el comportamiento esperado en desarrollo; los e2e de contacto mockean la API. El smoke SMTP real es residual pendiente del decisor.
- E2E: requieren el navegador de Playwright. Instálalo bajo demanda con `pnpm exec playwright install --with-deps chromium` (no está en el update script). El `webServer` de Playwright hace su propio `pnpm build && pnpm start`.
- Auto-generados por `next dev`/`next build` (Next.js 16): reescribe `next-env.d.ts` (rutas `.next/dev/types/...`) y anexa un bloque `<!-- BEGIN:nextjs-agent-rules -->` al final de este `AGENTS.md`. Son artefactos de la tooling; no los commitees como cambio propio (revierte con `git checkout -- next-env.d.ts AGENTS.md` si aparecen sueltos).
- Aviso benigno de pnpm install: "Ignored build scripts: unrs-resolver". No afecta a lint/build/test; no ejecutes `pnpm approve-builds` (interactivo).
