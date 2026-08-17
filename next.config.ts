import path from "node:path";
import { fileURLToPath } from "node:url";

import type { NextConfig } from "next";

import { SECURITY_HEADERS } from "./src/lib/security-headers";

/** Raíz del paquete (evita que Turbopack/tracing asciendan a lockfiles padre). */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Silencia el warning de lockfile fuera del repo (Next 16 / Turbopack).
  // Ambos DEBEN coincidir; Next sincroniza si solo se define uno.
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
  async headers() {
    return [
      { source: "/", headers: SECURITY_HEADERS },
      { source: "/:path*", headers: SECURITY_HEADERS },
    ];
  },
};

export default nextConfig;
