---
name: security-secrets-guardian
description: "Revisa seguridad básica del repo: secretos en texto plano, dependencias vulnerables, configuraciones MCP y cumplimiento del MVP. Usar al añadir dependencias, integraciones, auth, file uploads, webhooks o cuando el usuario pida 'revisar seguridad' en nuevowebsite-alexendrosdev."
metadata:
  source: Adaptado de addyosmani/agent-skills@security-and-hardening
  version: "1.0"
  project: nuevowebsite-alexendrosdev
---

# Security & Secrets Guardian

Guardián de la superficie de ataque del repositorio. Se enfoca en lo que un agente puede verificar localmente sin acceso a infraestructura de producción.

## Cuándo usar

- Antes de añadir una dependencia, integración externa o manejo de datos.
- Al tocar `.env.example`, variables de entorno, MCP o webhooks.
- Cuando aparezca user input no validado, file uploads, cookies o sesiones.
- Cuando el usuario pida "revisar seguridad", "¿hay secretos?" o "auditar dependencias".

## Qué verifica

### 1. Secretos y PII en el repo

Busca literales sospechosos:

```bash
git grep -iE '(api[_-]?key|token|secret|password|private[_-]?key)\s*=\s*["\'][^"\']+["\']' -- ':!*.example' ':!.env*'
```

Revisa también:

- `.env.local`, `.env` y similares estén en `.gitignore`.
- Logs o mensajes de error que puedan contener tokens, emails o PII.
- Archivos de MCP (`mcp.json`) usen `bearerTokenEnvVar` o wrappers que lean de `pass`, nunca claves en JSON.

### 2. Dependencias

El proyecto usa `pnpm`:

```bash
pnpm audit
```

Además:

- Revisa que cualquier dependencia añadida esté justificada en `SPECS.md` o `ARCHITECTURE.md` (AGENTS.md §5).
- No aceptes cambios que modifiquen `pnpm-lock.yaml` sin explicar el paquete nuevo.
- Nuevas librerías REQUIEREN confirmación humana.

### 3. Cumplimiento del MVP y líneas rojas

`CONSTITUTION.md` y `AGENTS.md` establecen que el MVP **no** incluye auth, base de datos, CMS, checkout, Prisma, Supabase, newsletter ni analítica. Si un cambio propone alguna de estas capacidades, detente y eleva al decisor salvo ADR previo.

### 4. Modelo de amenazas rápido (STRIDE)

Para cada nueva integración o endpoint, responde:

| Amenaza | Pregunta | Mitigación típica |
| --- | --- | --- |
| S — Spoofing | ¿Se puede suplantar un usuario/servicio? | Auth + firma de webhooks |
| T — Tampering | ¿Se puede alterar datos en tránsito o reposo? | HTTPS, integridad de queries |
| R — Repudiation | ¿Se puede negar una acción? | Logs de seguridad |
| I — Information disclosure | ¿Puede filtrarse información? | Errores genéricos, no logs de secrets |
| D — Denial of service | ¿Se puede saturar? | Rate limiting, límites de tamaño |
| E — Elevation of privilege | ¿Se puede escalar privilegios? | Autorización server-side |

### 5. Validaciones de entrada y salida

- Validar entrada con Zod en los límites del sistema (API routes, formularios).
- Nunca concatenar user input en SQL ni shell.
- Usar escape automático del framework; no usar `dangerouslySetInnerHTML` con datos no confiables.

## Proceso

### 0. Precondiciones

- Estar en un repositorio git.
- Tener `package.json` y `pnpm-lock.yaml` presentes.
- Si no se cumplen, detente y avisa.

### 1. Detectar el tipo de cambio

Mira el diff o los archivos tocados (`git status`, `git diff --name-only`).

### 2. Ejecutar las verificaciones 1–5 que apliquen

### 3. Manejo de hallazgos sensibles

Si encuentras un secreto, un literal de token o una dependencia vulnerable:

- **No lo copies al chat ni a logs.**
- Notifica al usuario de inmediato con la ubicación exacta y la severidad.
- No hagas commit del archivo hasta que se revoque y rote el secreto.

### 4. Escalado obligatorio

Si el cambio toca auth, base de datos, CMS, checkout, pagos, newsletter o analítica, exige ADR y confirmación humana antes de continuar.

### 5. Entregar informe

Clasifica cada hallazgo: **Bloqueante**, **Alto**, **Medio**, **Bajo**.

## Qué NO hacer

- No confirmes cambios que añadan secretos en texto plano.
- No ejecutes código sospechoso para "probar" una vulnerabilidad sin autorización.
- No ignores una dependencia vulnerable solo porque "no se usa directamente".
