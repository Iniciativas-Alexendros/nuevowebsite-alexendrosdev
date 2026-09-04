#!/usr/bin/env bash
# Smoke post-deploy (P1-3): rutas P0, headers, SEO y POST /api/contact.
# Sin secretos ni cuerpos de petición en logs (NFR-SEC-002/006).
set -euo pipefail

TARGET_URL="${TARGET_URL:-}"

if [ -z "$TARGET_URL" ]; then
  echo "::error::TARGET_URL es obligatorio (origen https://host[/] sin path)."
  exit 1
fi

raw="$(printf '%s' "$TARGET_URL" | tr -d '[:space:]')"
if [[ ! "$raw" =~ ^https://[A-Za-z0-9.-]+(:443)?/?$ ]]; then
  echo "::error::target_url DEBE ser origen https://host[/] sin path, query, fragmento ni credenciales."
  exit 1
fi
host="$(printf '%s' "$raw" | sed -E 's|^https://||; s|/$||; s|:443$||' | tr '[:upper:]' '[:lower:]')"

# shellcheck source=scripts/smoke-host-allowlist.sh
source "$(dirname "$0")/smoke-host-allowlist.sh"
if ! smoke_host_allowed "$host"; then
  echo "::error::host '${host}' no está en la allowlist del smoke post-deploy."
  echo "::error::Permitidos: alexendros.dev, www, nuevowebsite-alexendrosdev.vercel.app, *-alexendros-team.vercel.app"
  exit 1
fi

base="https://${host}"

header_dump() {
  # Lista nombres de cabecera; nunca valores sensibles.
  tr -d '\r' | awk -F': ' 'tolower($1) ~ /^(strict-transport-security|content-security-policy|x-content-type-options|referrer-policy|permissions-policy|x-frame-options|content-type|location)$/ { print tolower($1) "=" $2 }'
}

fail=0
routes=("/" "/servicios" "/sobre-mi" "/contacto" "/aviso-legal" "/privacidad")
# Rutas heredadas: deben responder 308 permanentes hacia /sobre-mi (nueva IA).
legacy_redirects=("/proyectos:/sobre-mi#proyectos" "/stack:/sobre-mi#stack")

echo "Smoke post-deploy contra ${base}"

for path in "${routes[@]}"; do
  tmp="$(mktemp)"
  http_code="$(curl -sS -D "$tmp" -o /dev/null -w '%{http_code}' "${base}${path}")"
  echo "GET ${path} → HTTP ${http_code}"
  if [ "$http_code" != "200" ]; then
    echo "::error::${path} esperaba 200"
    fail=1
  fi
  headers="$(header_dump < "$tmp")"
  echo "$headers" | grep -qi '^x-content-type-options=nosniff' || {
    echo "::error::${path} falta X-Content-Type-Options: nosniff"
    fail=1
  }
  echo "$headers" | grep -qi '^x-frame-options=deny' || {
    echo "::error::${path} falta X-Frame-Options: DENY"
    fail=1
  }
  echo "$headers" | grep -qi '^content-security-policy=' || {
    echo "::error::${path} falta Content-Security-Policy"
    fail=1
  }
  if echo "$headers" | grep -qi 'unsafe-eval'; then
    echo "::error::${path} CSP contiene unsafe-eval (P1-5)"
    fail=1
  fi
  echo "$headers" | grep -qi 'includeSubDomains' || {
    echo "::error::${path} HSTS sin includeSubDomains (P1-6)"
    fail=1
  }
  echo "$headers" | grep -qi 'preload' || {
    echo "::error::${path} HSTS sin preload (P1-6)"
    fail=1
  }
  rm -f "$tmp"
done

for entry in "${legacy_redirects[@]}"; do
  path="${entry%%:*}"
  expected="${entry#*:}"
  tmp="$(mktemp)"
  http_code="$(curl -sS -D "$tmp" -o /dev/null -w '%{http_code}' "${base}${path}")"
  location="$(header_dump < "$tmp" | grep -i '^location=' || true)"
  echo "GET ${path} → HTTP ${http_code} ${location}"
  if [ "$http_code" != "308" ]; then
    echo "::error::${path} esperaba 308 Permanent Redirect"
    fail=1
  fi
  if ! echo "$location" | grep -qF "$expected"; then
    echo "::error::${path} location no apunta a ${expected}"
    fail=1
  fi
  rm -f "$tmp"
done

# Redirect www → apex solo cuando el target es producción.
if [ "$host" = "alexendros.dev" ]; then
  www_code="$(curl -sS -o /dev/null -w '%{http_code}' -I "https://www.alexendros.dev/")"
  echo "HEAD https://www.alexendros.dev/ → HTTP ${www_code}"
  if [[ "$www_code" != "301" && "$www_code" != "308" && "$www_code" != "307" && "$www_code" != "302" ]]; then
    echo "::error::www no redirige al apex (HTTP ${www_code})"
    fail=1
  fi
fi

home_tmp="$(mktemp)"
curl -sS -o "$home_tmp" "${base}/"
if ! grep -q 'lang="es"' "$home_tmp"; then
  echo "::error::home sin lang=es"
  fail=1
fi
if ! grep -q 'rel="canonical"' "$home_tmp"; then
  echo "::error::home sin canonical"
  fail=1
fi
rm -f "$home_tmp"

sitemap_tmp="$(mktemp)"
sitemap_code="$(curl -sS -o "$sitemap_tmp" -w '%{http_code}' "${base}/sitemap.xml")"
echo "GET /sitemap.xml → HTTP ${sitemap_code}"
if [ "$sitemap_code" != "200" ]; then
  echo "::error::sitemap.xml no es 200"
  fail=1
fi
if ! grep -q '<urlset' "$sitemap_tmp"; then
  echo "::error::sitemap.xml no parece XML urlset"
  fail=1
fi
rm -f "$sitemap_tmp"

# Honeypot: 200 neutro sin SMTP. No imprimir el cuerpo (puede incluir message).
contact_code="$(curl -sS -o /dev/null -w '%{http_code}' \
  -X POST "${base}/api/contact" \
  -H 'content-type: application/json' \
  -H 'accept: application/json' \
  --data '{"name":"Smoke Postdeploy","email":"smoke-postdeploy@example.com","message":"Mensaje sintético de smoke post-deploy con longitud suficiente.","consent":true,"website":"https://spam.example"}')"
echo "POST /api/contact (honeypot) → HTTP ${contact_code}"
if [[ "$contact_code" != "200" && "$contact_code" != "503" ]]; then
  echo "::error::POST /api/contact inesperado: HTTP ${contact_code}"
  fail=1
fi

if [ "$fail" -ne 0 ]; then
  echo "::error::Smoke post-deploy FALLÓ"
  exit 1
fi

echo "Smoke post-deploy OK"
