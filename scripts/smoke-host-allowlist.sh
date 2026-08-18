#!/usr/bin/env bash
# Allowlist de orígenes para smokes go-live (NFR-SEC-002).
# Vercel team deployments: {project}-{hash}-alexendros-team.vercel.app (guion, no subdominio).
smoke_host_allowed() {
  local host="$1"
  case "$host" in
    alexendros.dev | www.alexendros.dev | nuevowebsite-alexendrosdev.vercel.app)
      return 0
      ;;
  esac
  if [[ "$host" =~ -alexendros-team\.vercel\.app$ ]]; then
    return 0
  fi
  return 1
}
