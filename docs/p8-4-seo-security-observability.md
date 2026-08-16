# 🛡️ P8-4: SEO / Seguridad / Observabilidad

**Fecha:** 16-08-2026  
**Objetivo:** Validar meta tags, headers de seguridad y configuraciones de observabilidad  
**Responsable:** Agente (preparación checklist) + Decisor (aplicación y validación)

---

## 🔍 SEO: Meta Tags y Configuración

| # | Elemento | Descripción | Archivo/Ruta | Estado |
|---|----------|-------------|--------------|--------|
| **SEO-1** | `title` tag en todas las rutas | Formato: `| sitio nombre | palabra clave principal` | `src/app/layout.tsx`, páginas individuales | ☐ |
| **SEO-2** | `description` meta tag | 150-160 caracteres, llamado a la acción | Todas las páginas P0 | ☐ |
| **SEO-3** | Open Graph tags | `og:title`, `og:description`, `og:image`, `og:url`, `og:type` | Cada página con contenido compartible | ☐ |
| **SEO-4** | Twitter Cards | `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` | Igual que OG para consistencia | ☐ |
| **SEO-5** | `robots.txt` actualizado | Desindexar rutas de preview/staging, permitir indexing producción | `public/robots.txt` | ☐ |
| **SEO-6** | `sitemap.xml` generado | Incluir todas las rutas públicas, `lastmod` actualizado | `next-sitemap` o custom | ☐ |
| **SEO-7** | `favicon.ico` y favicons múltiples | 32x32, 16x16, Apple touch icon | `public/favicon.ico` | ☐ |
| **SEO-8** | Lenguaje hreflang (si aplica) | Si hay versiones ES/EN, links hreflang en head | Solo si multi-idioma | ☐ |

---

## 🛡️ Seguridad: Headers y Configuración

| # | Elemento | Descripción | Archivo/Comando | Estado |
|---|----------|-------------|-----------------|--------|
| **SEC-1** | `X-Frame-Options` | `DENY` o `SAMEORIGIN` | `vercel.json` o `middleware.ts` | ☐ |
| **SEC-2** | `X-Content-Type-Options` | `nosniff` | Prevenir MIME-type sniffing | ☐ |
| **SEC-3** | `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` | HSTS, 1 año mínimo | ☐ |
| **SEC-4** | `Content-Security-Policy` | Restrictiva: scripts propios, estilos, imágenes, fuentes | `vercel.json` CSP directive | ☐ |
| **SEC-5** | Rate limiting `/api/contact` | Máx. 5 requests/minuto por IP | Middleware o Vercel Analytics | ☐ |
| **SEC-6** | Validación de entrada en formularios | Zod schemas en `src/lib/validations/*` | Evitar PII en logs | ☐ |
| **SEC-7** | Cabeceras de cookies `SameSite` | `Lax` o `Strict` para sesiones | Configurar `.env` / Vercel | ☐ |
| **SEC-8** | Escaneo de dependencias | `pnpm audit` sin vulnerabilidades críticas | Ejecutar periódicamente | ☐ |

---

## 📊 Observabilidad: Logging y Monitoring

| # | Elemento | Descripción | Estado |
|---|----------|-------------|--------|
| **OBS-1** | Errores de build rastreados | `pnpm build` muestra warnings/errors claros | ☐ |
| **OBS-2** | Logging de API routes | `console.error` estructurado o winston/pino | Si hay API routes de log |
| **OBS-3** | Health check endpoint | Si hay `/api/health` o similar en producción | Opcional / depends |
| **OBS-4** | Monitoring de Vercel (analytics, functions logs) | Revisar dashboard Vercel periódicamente | ☐ |
| **OBS-5** | Sentry u otro error tracking | Si está configurado, keys en Vercel/environment | Depende de configuración |

---

## 🌐 Headers Recomendados en `vercel.json`

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Strict-Transport-Security", "value": "max-age=31536000; includeSubDomains" },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' https://js.stripe.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self';"
        }
      ]
    }
  ]
}
```

**Nota:** Ajustar `script-src` y `connect-src` según integraciones reales (Stripe, APIs, etc.).

---

## ✅ Criterio de Cierre P8-4

> **P8-4 se considera completado cuando:**
> 1. **Meta tags completos** en todas las rutas P0 (title, description, OG, Twitter)
> 2. **robots.txt** y **sitemap.xml** actualizados y validados
> 3. **Headers de seguridad** (X-Frame-Options, X-Content-Type-Options, HSTS, CSP) aplicados en producción
> 4. **Rate limiting** configurado en `/api/contact` (máx. 5/min/IP)
> 5. **Errores de `pnpm build`** cero warnings críticos
> 6. **Reporte de configuraciones** guardado (este checklist prellenado)

---

## 🛠️ Comandos de Validación

```bash
# Verificar build sin errores
pnpm build  # debe pasar sin errores críticos

# Ejecutar lint y typecheck
pnpm check  # incluye ESLint + TSC

# Revisar audit de dependencias
pnpm audit  # verificar vulnerabilidades

# Validar sitemap y robots
# Abrir: /sitemap.xml y /robots.txt en navegador
# Verificar que Googlebot pueda crawlear rutas públicas

# CSP test (opcional)
# npm i -D csp-evaluator   # o herramienta similar
```

---

## 📋 Checklist Rápido (Versión Resumida)

| Categoría | Item Crítico | Estado |
|-----------|--------------|--------|
| **SEO** | title + description en home | ☐ |
| **SEO** | OG tags en home | ☐ |
| **SEO** | robots.txt actualizado | ☐ |
| **SEO** | sitemap.xml con todas rutas | ☐ |
| **SEG** | HSTS configurado | ☐ |
| **SEG** | CSP básico aplicado | ☐ |
| **SEG** | Rate limit /api/contact | ☐ |
| **OBS** | Build sin errores críticos | ☐ |

---