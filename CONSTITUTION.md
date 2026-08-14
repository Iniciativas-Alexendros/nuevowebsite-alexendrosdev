# CONSTITUTION.md

Abrir cuando: Alcance, superficie, integraciones, secretos o conflicto entre documentos.
Aprobado: 13 de agosto de 2026
Audiencia: Agente, Dirección
Autoridad: Suprema
Clase: Obligatorio
Días para revisión: 90
En repo: No
Estado: Aprobado
Orden: 2
Propósito: Norma de rango superior: lo no negociable.
Reforma: ADR + decisor
Responsable: Alexendros
Revisión: 13 de noviembre de 2026
Rol: Norma
Ruta: http://CONSTITUTION.md

<aside>
📌

**Propósito**

Este archivo es la norma de rango superior del proyecto. Fija lo no negociable. El resto de documentos la aplican; no la sustituyen.

</aside>

---

# Rango y reforma

- Este documento DEBE prevalecer si choca con SPECS, DESIGN, ARCHITECTURE, CONTENT, ROADMAP, DECISIONS, AGENTS o cualquier documento de apoyo.
- [AGENTS.md](./AGENTS.md) DEBE funcionar como contrato operativo resumido y derivado de esta constitución y de los demás documentos canónicos. NO DEBE reabrir ni relajar lo aquí prescrito.
- Reformar este documento REQUIERE decisión explícita del decisor y un ADR en [DECISIONS.md](./DECISIONS.md) que sustituya la norma afectada.
- Una norma de esta constitución NO DEBE modificarse de pasada en un PR de implementación.

---

# Documentos

- Los documentos canónicos DEBEN residir en la raíz del repositorio. Plantillas, decisiones históricas y material de apoyo PUEDEN ubicarse en `docs/`.
- [[README.md](http://README.md)](https://app.notion.com/p/README-md-6a7881ce4b4a4464acdc46285a90efa2?pvs=21) DEBE ser el primer documento de lectura. Orquesta el pulso, el pendiente y el enrutado. NO DEBE relajar ni sustituir esta constitución.
- Los documentos DEBEN usar Markdown, encabezados jerárquicos, enlaces relativos y lenguaje prescriptivo: DEBE, NO DEBE, PUEDE y REQUIERE.
- Los documentos NO DEBEN contener secretos, tokens reales, claves API, correos privados, IDs de producción ni configuraciones sensibles.

---

# Trazabilidad

- Toda tarea implementada DEBE poder trazarse desde [ROADMAP.md](./ROADMAP.md) a uno o más requisitos de [SPECS.md](./SPECS.md).
- Todo componente visual DEBE poder trazarse desde [DESIGN.md](./DESIGN.md) a una necesidad funcional de [SPECS.md](./SPECS.md).
- NO DEBE implementarse trabajo sin ancla en [SPECS.md](./SPECS.md), salvo corrección puntual de defecto ya cubierto por un requisito existente.

---

# Decisiones

- Toda decisión estructural, tecnológica, de proveedor o de seguridad no trivial DEBE registrarse en [DECISIONS.md](./DECISIONS.md) antes o junto a su implementación.
- Las decisiones pequeñas y reversibles NO REQUIEREN ADR.
- Incorporar un proveedor, un secreto, datos personales, un coste recurrente o un cambio de arquitectura SÍ REQUIERE ADR.

---

# Superficie y dependencias

- El proyecto DEBE empezar con el menor número posible de dependencias y servicios externos.
- Una integración solo se incorporará cuando existan, a la vez: necesidad funcional documentada, propietario, estrategia de fallo, modelo de datos y requisito en [SPECS.md](./SPECS.md).
- La primera versión NO DEBE asumir autenticación, base de datos, CMS, checkout, Prisma, Supabase ni newsletter. Cada capacidad es optativa y REQUIERE decisión explícita (ADR + requisito).
- La aplicación vigente de esta norma es ADR-0006. Ese ADR explica el porqué; no sustituye la norma.

---

# Naturaleza del producto

- La web se concibe inicialmente como portfolio técnico, presentación de servicios y canal de captación profesional.
- NO DEBE tratarse como plataforma SaaS ni e-commerce, salvo aprobación posterior mediante ADR y actualización de [SPECS.md](./SPECS.md).

---

# Implementación por IA

- El uso de IA para implementar o modificar código DEBE respetar [AGENTS.md](./AGENTS.md).
- El agente NO DEBE auto-fusionar, declarar fases cerradas ni introducir dependencias, secretos, rutas o esquemas sin confirmación del decisor.
- La aplicación vigente de esta norma es ADR-0019.

---

# Jerarquía de lectura

1. [[README.md](http://README.md)](https://app.notion.com/p/README-md-6a7881ce4b4a4464acdc46285a90efa2?pvs=21) — punto de entrada de lectura: pulso, pendiente, programado y enrutado.
2. Este archivo — lo no negociable.
3. [SPECS.md](./SPECS.md) — qué se entrega y cómo se acepta.
4. [DECISIONS.md](./DECISIONS.md) — por qué se eligió una solución.
5. [DESIGN.md](./DESIGN.md), [ARCHITECTURE.md](./ARCHITECTURE.md), [CONTENT.md](./CONTENT.md) — cómo se presenta, opera y redacta.
6. [ROADMAP.md](./ROADMAP.md) — en qué orden se ejecuta.
7. [AGENTS.md](./AGENTS.md) — cómo trabaja el agente en cada sesión.