# Política de seguridad

## Canal de reporte

Reporta vulnerabilidades de forma **privada** a `operaciones@alexendros.dev`.

No abras issues públicos con exploits, PoCs ofensivos, tokens, secretos ni PII.

## Versiones soportadas

| Versión | Soporte |
| --- | --- |
| `main` / última Release etiquetada (`vX.Y.Z`) | Activo |
| Tags anteriores | Solo rollback operativo; sin parches proactivos |

## Plazo orientativo de respuesta

- Acuse de recibo: ≤ 5 días laborables.
- Evaluación inicial y plan: ≤ 15 días laborables (según severidad).

No garantiza SLA contractual; es compromiso operativo del proyecto personal.

## Secretos

- Prohibido pegar secretos en issues, PRs, commits, logs de CI o artefactos.
- Inventario operativo (valores solo en GitHub Secrets / Vercel; nunca en el repo):
  - Proton SMTP (`SMTP_*` / `PROTON_*` según sync-env)
  - Tokens Vercel de deploy / sync-env
  - Tokens de GitHub Actions con permisos de escritura
- Rotación: el decisor rota tokens al sospecha de fuga, cambio de personal o cadencia trimestral mínima del token SMTP. Registrar la **operación** (fecha, motivo, entorno), nunca el valor.

## Cadena de suministro (CI)

- Acciones de GitHub fijadas por SHA completo (no solo tags flotantes).
- Binario de gitleaks: descarga versionada + verificación de checksum SHA-256.
- `pnpm audit --prod` en CI (umbral high).
- Secret scanning y Dependabot: activar en la configuración del repositorio GitHub cuando estén disponibles en el plan/org.

## Alcance

Este sitio es una web de marketing/portfolio. Fuera de alcance de este documento: seguridad de productos de terceros enlazados (Cal.com, Proton, Vercel) más allá de su uso documentado en ADR/SPECS.
