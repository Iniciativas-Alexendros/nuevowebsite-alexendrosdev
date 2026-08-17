/**
 * Cabeceras de seguridad (NFR-SEC-005, ADR-0030).
 * Fuente de verdad para Next (local) y contrato del test frente a vercel.json.
 */
export const HSTS_VALUE = "max-age=63072000; includeSubDomains; preload";

export const CSP_VALUE =
  "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'";

export const SECURITY_HEADERS: { key: string; value: string }[] = [
  { key: "Strict-Transport-Security", value: HSTS_VALUE },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Content-Security-Policy", value: CSP_VALUE },
];
