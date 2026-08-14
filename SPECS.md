# SPECS.md

Abrir cuando: Requisitos, criterios de aceptación, prioridades o Definition of Done.
Aprobado: 13 de agosto de 2026
Audiencia: Dirección, Agente
Autoridad: Producto
Clase: Obligatorio
Días para revisión: 90
En repo: Sí
Estado: Aprobado
Orden: 3
Propósito: Qué debe entregar el producto y cómo se acepta.
Reforma: ADR + decisor
Responsable: Alexendros
Revisión: 13 de noviembre de 2026
Rol: Producto
Ruta: ./SPECS.md

<aside>
📌

**Propósito**

[SPECS.md](./SPECS.md) define el contrato de producto. Establece las capacidades que se construyen, los requisitos funcionales y no funcionales, los criterios de aceptación, las prioridades, los límites y la Definition of Done.

No debe describir detalles internos de implementación salvo cuando sean necesarios para verificar un resultado.

</aside>

# 1. Visión de producto

- La web debe presentar de forma inequívoca los servicios, capacidades técnicas, proyectos y el perfil profesional de AlexendrosDev.
- Debe facilitar que un visitante potencial entienda qué se ofrece, qué experiencia respalda el sitio y cómo iniciar el contacto.
- Debe proyectar competencia técnica, fiabilidad, claridad y atención al detalle.
- Debe servir como activo profesional mantenible sin requerir operaciones manuales complejas.
- Debe poder evolucionar de contenido gestionado en Git a CMS u otras integraciones sin reescritura de la interfaz.

---

# 2. Objetivos medibles

Cada objetivo tiene identificador, cifra, plazo y método de medición. Cifras ratificadas (DEC-SPECS-04, 13-08-2026).

| ID | Objetivo y cifra | Plazo | Método de medición |
| --- | --- | --- | --- |
| **OBJ-001** | Propuesta de valor y CTA principal visibles sin scroll en viewports de 360×640 y 1280×800. | Lanzamiento del MVP | Revisión manual en el despliegue preview de cada release. |
| **OBJ-002** | Canal de contacto alcanzable en ≤1 interacción desde cualquier ruta pública (header o footer). | Lanzamiento del MVP | Test E2E de navegación en CI. |
| **OBJ-003** | Servicios, proyectos y stack alcanzables en ≤2 interacciones desde la navegación principal. | Lanzamiento del MVP | Test E2E de navegación en CI. |
| **OBJ-004** | Alta de un servicio o proyecto modificando solo archivos de contenido, sin tocar componentes de presentación. | Lanzamiento del MVP | Checklist de [CONTENT.md](./CONTENT.md); el diff de la PR no incluye cambios en componentes. |
| **OBJ-005** | Lighthouse ≥90 en Performance, Accesibilidad, Best Practices y SEO en móvil; LCP <2,5 s; CLS <0,1; INP <200 ms. | Lanzamiento del MVP y cada release | Lighthouse CI en cada PR sobre el despliegue preview. |
| **OBJ-006** | 0 violaciones críticas o serias de accesibilidad automatizable en rutas públicas. | Lanzamiento del MVP y cada release | axe-core en CI. |
| **OBJ-007** | El formulario valida en cliente y servidor, aplica honeypot y rate limit, y degrada con mensaje claro ante fallo del proveedor. | Lanzamiento del MVP | Tests de integración del endpoint en CI. |
| **OBJ-008** | Despliegue reproducible desde CI en menos de 10 minutos, sin pasos manuales. | Lanzamiento del MVP | Duración y resultado del pipeline de despliegue. |

---

# 3. Fuera de alcance inicial

<aside>
🚫

**Fuera de alcance inicial**

- Área privada de usuario.
- Registro, inicio de sesión o recuperación de contraseña.
- Panel de administración propio.
- Marketplace, carrito o catálogo comercial complejo.
- Blog, salvo que se apruebe como objetivo editorial.
- Comentarios públicos.
- Multiidioma, salvo decisión ADR que defina idiomas, contenido, URLs y SEO internacional.
- Base de datos persistente, salvo que una funcionalidad **P0** la exija.
- Chat en tiempo real.
- Integraciones de newsletter, CRM, pagos o CMS por simple previsión.

</aside>

---

# 4. Usuarios y necesidades

## 4.1. Cliente potencial

Necesita entender rápidamente:

- Qué servicios se prestan.
- Qué tipo de problemas se resuelven.
- Qué experiencia, proyectos o capacidades los respaldan.
- Cómo contactar.
- Qué esperar tras contactar.

## 4.2. Colaborador técnico o reclutador

Necesita revisar:

- Stack y prácticas técnicas.
- Proyectos y casos de estudio.
- Perfil profesional.
- Repositorios, enlaces externos o medios de contacto pertinentes.

## 4.3. Administrador o mantenedor

Necesita:

- Actualizar servicios, proyectos, tecnología y enlaces.
- Publicar contenido de forma segura.
- Comprender cómo se ejecuta, prueba y despliega el proyecto.
- Añadir integraciones sin mezclar secretos, UI y lógica de negocio.

---

# 5. Requisitos funcionales globales

<details>
<summary>**REQ-GLOBAL-001** — Navegación principal</summary>

El sitio DEBE ofrecer una navegación principal accesible desde todas las rutas públicas.

</details>

<details>
<summary>**REQ-GLOBAL-002** — CTA de contacto</summary>

El sitio DEBE incluir una llamada a la acción de contacto coherente y visible en las rutas de captación: `/`, `/servicios`, `/proyectos` y `/sobre-mi`.

</details>

<details>
<summary>**REQ-GLOBAL-003** — Funcionamiento sin JavaScript</summary>

El sitio DEBE funcionar correctamente con JavaScript deshabilitado para contenido y navegación esenciales, salvo mejoras de interacción no críticas.

</details>

<details>
<summary>**REQ-GLOBAL-004** — Modo claro y oscuro</summary>

El sitio DEBE soportar modo claro y oscuro según [DESIGN.md](./DESIGN.md).

</details>

<details>
<summary>**REQ-GLOBAL-005** — Página 404</summary>

El sitio DEBE ofrecer una página 404 útil y coherente con la navegación general.

</details>

<details>
<summary>**REQ-GLOBAL-006** — Metadata, sitemap y robots</summary>

El sitio DEBE generar metadata, sitemap y robots conforme a las rutas publicables.

</details>

<details>
<summary>**REQ-GLOBAL-007** — Publicado vs. borrador</summary>

El sitio DEBE diferenciar contenido publicado de borrador cuando se introduzca un flujo editorial.

</details>

<details>
<summary>**REQ-GLOBAL-008** — Sin contenido ficticio</summary>

El sitio NO DEBE contener contenido ficticio, testimonios no verificables, proyectos inexistentes ni afirmaciones técnicas sin respaldo.

</details>

<details>
<summary>**REQ-GLOBAL-009** — Rutas y enlaces válidos</summary>

El sitio DEBE mantener rutas y enlaces externos válidos, o mostrar fallos controlados cuando dependan de un proveedor externo.

</details>

<details>
<summary>**REQ-GLOBAL-010** — Sustitución de proveedores</summary>

El sitio DEBE permitir la sustitución de proveedores externos mediante adaptadores, sin afectar a la interfaz pública.

</details>

---

# 6. Especificaciones por ruta

## 6.1. Inicio: /

**Objetivo:**

- Comunicar la propuesta de valor y dirigir hacia servicios, proyectos o contacto.

**Contenido mínimo:**

- Hero con identidad, propuesta de valor y CTA principal orientado al formulario de contacto (conversión principal, DEC-SPECS-01).
- Resumen de servicios.
- Proyectos o casos destacados.
- Stack o capacidades relevantes.
- Elemento de credibilidad verificable.
- CTA final de contacto.
- Footer con navegación y enlaces legales.

**Criterios de aceptación:**

- La propuesta de valor se entiende sin depender de imágenes o animaciones.
- El CTA principal funciona mediante teclado y puntero.
- Los proyectos y servicios destacados enlazan a rutas válidas.
- Los encabezados siguen una jerarquía semántica.
- La página incluye metadata específica y Open Graph.

## 6.2. Servicios: /servicios

**Objetivo:**

- Exponer las áreas de servicio de forma clara, concreta y orientada a la necesidad.

**Servicios aprobados (DEC-SPECS-02):**

| Slug propuesto | Servicio | Evidencia disponible |
| --- | --- | --- |
| `desarrollo-web` | Desarrollo web a medida (Next.js/Astro) con SEO y accesibilidad. | website-frontvalencia, ecommerce-graficasnasve |
| `landing-pages` | Landing pages con pruebas A/B y captación de contactos. | website-landingpage-template |
| `automatizacion-ia` | Automatización y agentes de IA (MCP, CLI). | agent-protonsuite, vcf-cribador |
| `auditoria-web` | Auditoría de rendimiento y accesibilidad. | Prácticas aplicadas en los proyectos publicados |

El alcance y los entregables detallados de cada servicio se redactan como entidades Service tipadas según [CONTENT.md](./CONTENT.md).

**Contenido mínimo:**

- Introducción.
- Listado de servicios.
- Resultado o alcance de cada servicio.
- Tecnología o enfoque, cuando ayude a la decisión del cliente.
- CTA de contacto.

**Criterios de aceptación:**

- Cada tarjeta de servicio comunica nombre, resumen, alcance y enlace o acción.
- No se atribuyen precios, plazos o garantías no confirmados.
- El listado es navegable y legible en móvil.
- Cada servicio se declara desde contenido tipado.

## 6.3. Detalle de servicio: /servicios/[slug]

**Condición:**

- Se implementará solo si cada servicio requiere contenido suficiente para justificar una página propia.

**Contenido mínimo:**

- Problema que aborda.
- Alcance.
- Proceso de trabajo.
- Entregables orientativos.
- Tecnologías o prácticas relevantes.
- Limitaciones o exclusiones, cuando sean necesarias.
- CTA.

**Criterios de aceptación:**

- Slug válido y único.
- Página no encontrada para servicios inexistentes.
- Metadata individual.
- Enlaces canónicos y navegación de retorno.

## 6.4. Proyectos: /proyectos

**Objetivo:**

- Mostrar evidencia práctica de trabajo, tecnologías y resultados.

**Proyectos publicables aprobados (DEC-SPECS-03):**

| Proyecto | Repositorio | Stack principal | Restricciones |
| --- | --- | --- | --- |
| FRONT Valencia — web de restaurante | [website-frontvalencia](https://github.com/Iniciativas-Alexendros/website-frontvalencia) | Astro, React, TypeScript, Payload CMS, Tailwind; SSG, i18n ES/EN, WCAG AA | Cliente nombrable; sin anonimización |
| Gráficas Nasve — tienda online de imprenta | [ecommerce-graficasnasve](https://github.com/Iniciativas-Alexendros/ecommerce-graficasnasve) | Next.js, TypeScript; catálogo y presupuestos | Cliente nombrable; sin anonimización |
| vcf-cribador — CLI de limpieza de contactos | [vcf-cribador](https://github.com/Iniciativas-Alexendros/vcf-cribador) | Rust; línea de comandos, software libre | Ninguna |
| alexendros.me — sitio personal de ensayos | [website-alexendrosme](https://github.com/Iniciativas-Alexendros/website-alexendrosme) | Next.js, TypeScript; accesibilidad y privacidad | Ninguna |

Con cuatro proyectos no se implementa filtro en el MVP (criterio de volumen insuficiente).

**Contenido mínimo:**

- Introducción.
- Grid o listado de proyectos.
- Filtro solo si mejora realmente la exploración y existe volumen de contenido suficiente.
- Enlaces a detalle o a recursos externos.

**Criterios de aceptación:**

- Cada proyecto muestra título, resumen, tecnologías, estado y enlace relevante.
- No se filtran ni ordenan elementos de forma inaccesible.
- Cada tarjeta funciona con teclado.
- Las imágenes tienen texto alternativo adecuado o se marcan como decorativas.

## 6.5. Detalle de proyecto: /proyectos/[slug]

**Objetivo:**

- Presentar un caso de estudio técnico comprensible para una audiencia técnica y no técnica.

**Contenido mínimo:**

- Contexto.
- Problema.
- Alcance y responsabilidades.
- Solución o enfoque.
- Stack.
- Retos técnicos.
- Resultado verificable, cuando exista.
- Enlaces relevantes.
- Aviso de confidencialidad, si corresponde.

**Criterios de aceptación:**

- El contenido no revela información confidencial.
- Las tecnologías se relacionan con entidades tipadas.
- Los enlaces externos se identifican adecuadamente.
- La metadata se genera a partir del contenido del proyecto.
- La ruta gestiona correctamente slugs inexistentes.

## 6.6. Stack: /stack

**Objetivo:**

- Mostrar tecnologías, herramientas y prácticas sin convertir el listado en una enumeración sin contexto.

**Contenido mínimo:**

- Agrupación por categorías.
- Tecnologías principales.
- Nivel de uso o contexto, solo si puede expresarse de forma honesta y útil.
- Relación con proyectos o servicios, cuando exista.

**Criterios de aceptación:**

- La información no depende exclusivamente de logos.
- Cada icono o logo tiene un nombre accesible.
- La página evita porcentajes o niveles subjetivos sin un criterio editorial documentado.
- La visualización funciona en pantallas pequeñas.

## 6.7. Sobre mí: /sobre-mi

**Objetivo:**

- Aportar contexto profesional y un enfoque humano a la propuesta de servicios.

**Contenido mínimo:**

- Perfil.
- Enfoque de trabajo.
- Áreas de especialidad.
- Principios o proceso.
- Enlaces profesionales pertinentes.
- CTA.

**Criterios de aceptación:**

- No duplica íntegramente la página de inicio.
- El contenido es editorialmente mantenible.
- No contiene información personal innecesaria.

## 6.8. Contacto: /contacto

**Objetivo:**

- Permitir iniciar una conversación profesional con una fricción razonable y con seguridad.

**Contenido mínimo:**

- Canales de contacto.
- Formulario de contacto (aprobado, DEC-SPECS-06).
- Enlace a agenda de llamada mediante [Cal.com](https://cal.com) como alternativa al formulario (DEC-SPECS-06); su integración requiere ADR propio si añade scripts de terceros.
- Explicación breve del tipo de solicitud que puede enviarse.
- Enlace a la política de privacidad cuando se recojan datos personales.
- Estados de envío, éxito y error.

**Campos y validaciones (REQ-FORM-CONTACT-001):**

| Campo | Obligatorio | Validación en cliente y servidor |
| --- | --- | --- |
| Nombre | Sí | Texto, 2–100 caracteres. |
| Email | Sí | Formato de email válido, máximo 254 caracteres. |
| Empresa u organización | No | Texto, máximo 100 caracteres. |
| Asunto o tipo de consulta | No | Valor de una lista cerrada definida en contenido tipado. |
| Mensaje | Sí | Texto, 20–2.000 caracteres. |
| Consentimiento informado | Sí, si se tratan datos personales | Checkbox no premarcado; el envío se bloquea sin consentimiento. |
| Honeypot | — | Campo invisible; si llega con valor, la petición se descarta con respuesta neutra. |

**Reglas de validación y antiabuso (propuesta):**

- Un único esquema de validación compartido entre cliente y servidor; el servidor es la fuente de verdad.
- Rate limit propuesto: máximo 5 envíos por IP y hora; al superarlo, error genérico sin detalles técnicos.
- Los envíos rechazados por honeypot o rate limit no se registran con datos personales.

**Criterios de aceptación:**

- Validación en cliente y en servidor.
- Mensajes de error comprensibles y asociados a cada campo.
- El formulario no se envía si faltan datos obligatorios o el email no tiene un formato válido.
- La respuesta de éxito no revela datos internos.
- El endpoint está protegido contra abuso.
- Se registra únicamente la información necesaria para operar el contacto.
- Si falla el proveedor de email, el usuario recibe un mensaje claro y no se expone información técnica.

## 6.9. Legales

**Objetivo:**

- Cumplir las obligaciones de información aplicables según las funcionalidades y el tratamiento de datos efectivo.

**Páginas aplicables (propuesta según RGPD/LSSI-CE):**

- Aviso legal (`/aviso-legal`): obligatorio por el art. 10 LSSI-CE al ofrecer servicios profesionales; debe identificar prestador, NIF, domicilio y contacto.
- Política de privacidad (`/privacidad`): obligatoria por el art. 13 RGPD y la LOPDGDD al recoger datos por formulario o email; debe identificar responsable, finalidad, base jurídica, plazos de conservación y derechos.
- Política de cookies (`/cookies`): el MVP se lanza sin cookies no esenciales, por lo que no se publica esta página ni banner. La analítica aprobada usará cookies (DEC-SPECS-05), de modo que su activación en P1 exige publicar la política y el banner de consentimiento previo (ADR-0010).
- Situación del prestador (DEC-SPECS-05): sin alta de autónomo hasta que la facturación supere el SMI anual. El aviso legal debe reflejar la situación real en cada momento y actualizarse al formalizar el alta; la actividad económica efectiva mantiene aplicable la LSSI-CE.

**Criterios de aceptación:**

- Aviso legal, privacidad y cookies reflejan el funcionamiento real del sitio.
- No se publica una política de cookies si no se usan tecnologías que la hagan pertinente.
- Las políticas se actualizan al añadir analítica, newsletter, formularios, pagos o proveedores nuevos.
- Las rutas legales son accesibles desde el footer.
- El contenido legal debe revisarse y aprobarse antes de producción.

---

# 7. Especificaciones de componentes

Para cada componente declarado en [DESIGN.md](./DESIGN.md), [SPECS.md](./SPECS.md) deberá incluir una ficha con:

- Identificador de requisito.
- Propósito.
- Contextos de uso permitidos.
- API pública esperada.
- Variantes.
- Estados.
- Semántica.
- Reglas de teclado.
- Reglas de lector de pantalla.
- Responsive.
- Manejo de error/carga.
- Dependencias autorizadas.
- Pruebas requeridas.
- Criterios de aceptación.
- Casos negativos o anti-patrones.

Ejemplo de requisito para Button:

<details>
<summary>**REQ-UI-BUTTON-001** — Button</summary>

- El componente Button DEBE representar una acción y no una navegación. La navegación interna o externa DEBE usar Link con estilo de botón cuando corresponda.
- DEBE soportar estado disabled, loading y focus-visible.
- DEBE impedir la activación múltiple durante una operación asíncrona.
- DEBE conservar el nombre accesible cuando contenga solo un icono.
- NO DEBE depender exclusivamente del color para comunicar estado.
- DEBE cumplir los tokens y tamaños establecidos en [DESIGN.md](./DESIGN.md).

</details>

Ejemplo de requisito para ContactForm:

<details>
<summary>**REQ-FORM-CONTACT-001** — ContactForm</summary>

- ContactForm DEBE validar los datos obligatorios antes del envío.
- DEBE validar de nuevo en servidor.
- DEBE evitar envíos concurrentes desde la misma interacción.
- DEBE anunciar éxito y error de manera accesible.
- DEBE impedir que el spam o un fallo de proveedor afecten al resto del sitio.
- DEBE documentar el tratamiento de datos y enlazar a la política aplicable.

</details>

**Fichas de componentes críticos P0:**

<details>
<summary>**REQ-UI-LINK-001** — Link</summary>

- Link DEBE usarse para toda navegación interna o externa; las acciones DEBEN usar Button.
- Los enlaces externos DEBEN incluir `rel="noopener noreferrer"` e indicar de forma accesible cuándo abren en otra pestaña.
- DEBE mostrar focus-visible y una affordance no basada solo en color.
- NO DEBE implementarse con manejadores de click sin `href`.

</details>

<details>
<summary>**REQ-UI-FIELD-001** — Field y FieldError</summary>

- Field DEBE vincular semánticamente label, control, texto de ayuda y error.
- FieldError DEBE asociarse al control mediante `aria-describedby` y anunciarse al producirse.
- El error DEBE ser identificable sin depender del color (NFR-A11Y-007).
- Los campos obligatorios DEBEN indicarse de forma perceptible y programática.

</details>

<details>
<summary>**REQ-LAYOUT-HEADER-001** — SiteHeader y Navigation</summary>

- DEBE estar presente en todas las rutas públicas y cumplir REQ-GLOBAL-001.
- La navegación DEBE usar un landmark con nombre accesible y marcar la ruta activa con `aria-current="page"`.
- MobileNavigation DEBE ser operable con teclado y lector de pantalla: foco gestionado, cierre con Escape y retorno de foco.
- El primer elemento enfocable de la página DEBE ser un SkipLink al contenido principal.
- La navegación esencial DEBE funcionar sin JavaScript (REQ-GLOBAL-003).

</details>

<details>
<summary>**REQ-LAYOUT-FOOTER-001** — SiteFooter</summary>

- DEBE estar presente en todas las rutas públicas con navegación secundaria y los enlaces legales de la sección 6.9.
- DEBE usar el landmark `contentinfo`.
- Sus enlaces DEBEN mantenerse válidos (REQ-GLOBAL-009).

</details>

<details>
<summary>**REQ-DOMAIN-HERO-001** — Hero</summary>

- DEBE comunicar la propuesta de valor en texto, sin depender de imágenes o animaciones (criterio 6.1).
- DEBE contener el único H1 de la página de inicio.
- El CTA principal DEBE funcionar con teclado y puntero.
- El contenido DEBE proceder de entidades tipadas definidas en [CONTENT.md](./CONTENT.md).

</details>

<details>
<summary>**REQ-DOMAIN-SERVICECARD-001** — ServiceCard y ServiceList</summary>

- Cada tarjeta DEBE comunicar nombre, resumen, alcance y enlace o acción (criterio 6.2).
- Los datos DEBEN proceder de la entidad Service tipada.
- La acción principal DEBE ser enfocable; NO DEBEN anidarse controles interactivos.
- NO DEBE mostrar precios, plazos o garantías no confirmados.

</details>

<details>
<summary>**REQ-DOMAIN-PROJECTCARD-001** — ProjectCard y ProjectGrid</summary>

- Cada tarjeta DEBE mostrar título, resumen, tecnologías, estado y enlace relevante (criterio 6.4).
- Las imágenes DEBEN tener texto alternativo adecuado o marcarse como decorativas.
- Cada tarjeta DEBE ser operable con teclado y conservar el orden lógico de lectura al cambiar el grid.
- Los enlaces externos DEBEN identificarse como tales.

</details>

<details>
<summary>**REQ-DOMAIN-TECHBADGE-001** — TechnologyBadge y StackGroup</summary>

- Todo icono o logo DEBE tener nombre accesible (criterio 6.6).
- Los datos DEBEN proceder de la entidad Technology tipada.
- NO DEBE mostrar porcentajes ni niveles subjetivos sin criterio editorial documentado.

</details>

<details>
<summary>**REQ-DOMAIN-CTA-001** — CTASection</summary>

- DEBE ofrecer el CTA de contacto coherente exigido por REQ-GLOBAL-002 en las rutas de captación definidas en dicho requisito.
- La navegación DEBE implementarse con Link con estilo de botón, no con Button.
- NO DEBE variar el mensaje principal entre rutas sin justificación editorial.

</details>

<details>
<summary>**REQ-PAGE-404-001** — Página 404</summary>

- DEBE devolver el código de estado 404 real y cumplir REQ-GLOBAL-005.
- DEBE conservar navegación principal y footer, y ofrecer enlaces sugeridos a las rutas principales (DEC-SPECS-08).
- NO DEBE indexarse.

</details>

<aside>
⚠️

**Cobertura y trazabilidad**

- Prefijos de requisito: REQ-UI-* para primitivos ([DESIGN.md](./DESIGN.md) §8.1), REQ-LAYOUT-* para layout (§8.2), REQ-DOMAIN-* para dominio (§8.3) y REQ-FORM-* para formularios.
- Las fichas anteriores cubren los componentes críticos P0. El resto del inventario de [DESIGN.md](./DESIGN.md) recibirá su ficha cuando el componente entre en desarrollo, como parte de la Definition of Ready.

</aside>

---

# 8. Requisitos no funcionales

## 8.1. Accesibilidad

<details>
<summary>**NFR-A11Y-001** — Navegación por teclado</summary>

Navegación completa por teclado para todo control interactivo.

</details>

<details>
<summary>**NFR-A11Y-002** — Orden y visibilidad de foco</summary>

Orden de foco lógico y foco visible.

</details>

<details>
<summary>**NFR-A11Y-003** — Contraste</summary>

Contraste suficiente para texto, controles, foco y estados.

</details>

<details>
<summary>**NFR-A11Y-004** — Estructura semántica</summary>

Estructura semántica de encabezados, landmarks, listas, formularios y tablas.

</details>

<details>
<summary>**NFR-A11Y-005** — Reduced motion</summary>

Soporte de `prefers-reduced-motion`.

</details>

<details>
<summary>**NFR-A11Y-006** — Lector de pantalla</summary>

Diálogos, menús, tooltips y navegación móvil operables con lector de pantalla.

</details>

<details>
<summary>**NFR-A11Y-007** — Errores de formulario</summary>

Los errores de formulario deben poder identificarse sin color y anunciarse correctamente.

</details>

## 8.2. Rendimiento

<details>
<summary>**NFR-PERF-001** — Server Components y estático</summary>

Priorizar Server Components y renderizado estático para contenido público.

</details>

<details>
<summary>**NFR-PERF-002** — JavaScript esencial</summary>

Evitar JavaScript de cliente no esencial.

</details>

<details>
<summary>**NFR-PERF-003** — Optimización de recursos</summary>

Optimizar imágenes, fuentes y recursos de terceros.

</details>

<details>
<summary>**NFR-PERF-004** — Presupuestos de rendimiento</summary>

Definir y revisar presupuestos de rendimiento para JavaScript, imágenes y recursos de bloqueo.

</details>

<details>
<summary>**NFR-PERF-005** — Scripts de terceros</summary>

No incorporar scripts de terceros sin necesidad, consentimiento cuando corresponda y plan de degradación.

</details>

<details>
<summary>**NFR-PERF-006** — Animaciones sin layout shift</summary>

Las animaciones no deben generar layout shift significativo ni bloquear interacción.

</details>

## 8.3. Seguridad

<details>
<summary>**NFR-SEC-001** — Validación de entrada</summary>

Validación de toda entrada en límites de confianza.

</details>

<details>
<summary>**NFR-SEC-002** — Secretos en servidor</summary>

Secretos exclusivamente en servidor y entorno seguro.

</details>

<details>
<summary>**NFR-SEC-003** — Protección contra abuso</summary>

Protección proporcional contra abuso en endpoints públicos.

</details>

<details>
<summary>**NFR-SEC-004** — Webhooks</summary>

Verificación de firmas y protección de replay para webhooks, si existen.

</details>

<details>
<summary>**NFR-SEC-005** — Dependencias y secretos en CI</summary>

Revisión de dependencias y escaneo de secretos en CI.

</details>

<details>
<summary>**NFR-SEC-006** — PII y logs</summary>

No registrar PII innecesaria ni secretos.

</details>

## 8.4. SEO

<details>
<summary>**NFR-SEO-001** — Metadata única</summary>

Metadata única y contextual por ruta indexable.

</details>

<details>
<summary>**NFR-SEO-002** — Sitemap y robots</summary>

Sitemap y robots actualizados.

</details>

<details>
<summary>**NFR-SEO-003** — Canonical</summary>

Canonical correcto y ausencia de contenido duplicado indexable.

</details>

<details>
<summary>**NFR-SEO-004** — Datos estructurados</summary>

Datos estructurados solo cuando representen información exacta.

</details>

<details>
<summary>**NFR-SEO-005** — Imágenes sociales</summary>

Imágenes sociales y títulos adecuados para compartir.

</details>

## 8.5. Compatibilidad

<details>
<summary>**NFR-COMPAT-001** — Navegadores</summary>

Soporte de navegadores modernos definidos antes del lanzamiento.

</details>

<details>
<summary>**NFR-COMPAT-002** — Dispositivos</summary>

Interfaz usable en móvil, tablet y escritorio.

</details>

<details>
<summary>**NFR-COMPAT-003** — Degradación controlada</summary>

Degradación controlada para APIs no disponibles.

</details>

## 8.6. Mantenibilidad

<details>
<summary>**NFR-MAINT-001** — TypeScript estricto</summary>

Todo el código relevante debe compilar con TypeScript estricto.

</details>

<details>
<summary>**NFR-MAINT-002** — Sin duplicación</summary>

No se aceptará duplicación de lógica o estilo cuando exista una abstracción canónica adecuada.

</details>

<details>
<summary>**NFR-MAINT-003** — Documentación actualizada</summary>

Toda funcionalidad nueva debe actualizar los documentos que afecte.

</details>

<details>
<summary>**NFR-MAINT-004** — Dependencias externas</summary>

Las dependencias externas deben tener una finalidad documentada, un mantenedor activo y un plan de sustitución razonable.

</details>

---

# 9. Priorización

- **P0**: imprescindible para el lanzamiento.
- **P1**: importante tras el MVP.
- **P2**: solo tras validar la necesidad.

| Prioridad | Elemento |
| --- | --- |
| **P0** | Fundamentos del design system |
| **P0** | Navegación, layout, footer y 404 |
| **P0** | Inicio (ruta 6.1) |
| **P0** | Servicios (ruta 6.2) |
| **P0** | Proyectos (ruta 6.4) |
| **P0** | Stack (ruta 6.6) |
| **P0** | Sobre mí (ruta 6.7) |
| **P0** | Contacto (ruta 6.8) |
| **P0** | Páginas legales aplicables (ruta 6.9) |
| **P0** | SEO técnico base |
| **P0** | Accesibilidad base |
| **P0** | CI, typecheck, lint, tests críticos y despliegue preview |
| **P1** | Detalle extenso de servicios (ruta 6.3) |
| **P1** | Casos de estudio completos (ruta 6.5) |
| **P1** | Newsletter |
| **P1** | Analítica respetuosa con la privacidad |
| **P1** | Monitorización de errores |
| **P1** | Mejoras avanzadas de contenido, filtros y automatización |
| **P1** | Página “próximamente”, solo cuando represente una funcionalidad real en preparación |
| **P2** | CMS |
| **P2** | Base de datos |
| **P2** | Newsletter compleja |
| **P2** | Integración CRM |
| **P2** | Checkout o pagos |
| **P2** | Multiidioma |
| **P2** | Blog |
| **P2** | Área privada |
| **P2** | Automatizaciones de marketing |

---

# 10. Definition of Ready

<aside>
⚠️

Una tarea no debe entrar en desarrollo si no incluye:

- Referencia a requisitos de [SPECS.md](./SPECS.md).
- Resultado esperado.
- Criterios de aceptación verificables.
- Diseño o componente aplicable.
- Datos o contenido necesarios.
- Dependencias y riesgos.
- Decisión ADR cuando introduzca nueva tecnología, proveedor, secreto o un cambio estructural.
- Estrategia de prueba proporcional.

</aside>

---

# 11. Definition of Done

<aside>
⚠️

Una tarea se considera terminada solo si:

- Cumple todos los criterios de aceptación.
- Compila y supera typecheck, lint y formato.
- Incluye pruebas pertinentes.
- No degrada accesibilidad, responsive ni temas.
- No incorpora valores visuales no tokenizados.
- No expone secretos ni datos personales.
- Actualiza la documentación afectada.
- Incluye metadata y SEO cuando modifica una ruta indexable.
- Pasa revisión de código.
- Pasa CI.
- Puede desplegarse, o se declara explícitamente bloqueada con su causa y seguimiento.

</aside>

---

# 12. Decisiones abiertas (batería SPECS)

<aside>
⚠️

Estas decisiones bloquean el paso de “Propuesta sin revisar” a “Aprobado”. Cada respuesta actualiza la sección indicada y, cuando proceda, registra un ADR en [DECISIONS.md](./DECISIONS.md).

</aside>

| ID | Decisión pendiente | Afecta a | Estado |
| --- | --- | --- | --- |
| **DEC-SPECS-01** | Posicionamiento (freelance, empleo o ambos) y conversión principal. | §1, §6.1, §6.8 | Resuelta (13-08-2026): freelance; conversión principal = formulario. |
| **DEC-SPECS-02** | Lista definitiva de servicios con alcance y entregables. | §6.2, §6.3 | Resuelta (13-08-2026): 4 servicios — desarrollo web, landing pages, automatización/IA, auditoría. |
| **DEC-SPECS-03** | Lista de proyectos publicables y necesidades de anonimización. | §6.4, §6.5 | Resuelta (13-08-2026): 4 proyectos publicables; sin anonimización ni aprobación previa. |
| **DEC-SPECS-04** | Ratificación de cifras y plazos de OBJ-001 a OBJ-008. | §2 | Resuelta (13-08-2026): cifras ratificadas tal cual. |
| **DEC-SPECS-05** | Régimen legal (autónomo en España) y uso de cookies no esenciales. | §6.9 | Resuelta (13-08-2026): sin alta de autónomo hasta superar el SMI anual de facturación; analítica con cookies aprobada para P1. |
| **DEC-SPECS-06** | Campos definitivos del formulario y alternativa de calendario ([Cal.com](https://cal.com)). | §6.8 | Resuelta (13-08-2026): formulario + [Cal.com](https://cal.com) desde el MVP; campos según REQ-FORM-CONTACT-001. |
| **DEC-SPECS-07** | Idiomas del MVP. | §3, §6 | Resuelta (13-08-2026): español en el MVP; inglés vía ADR posterior. |
| **DEC-SPECS-08** | Comportamiento de la página 404 y estados vacíos. | REQ-GLOBAL-005, REQ-PAGE-404-001 | Resuelta (13-08-2026): enlaces sugeridos a las rutas principales. |
