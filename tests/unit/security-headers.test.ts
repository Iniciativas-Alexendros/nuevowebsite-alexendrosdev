import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

import { CSP_VALUE, HSTS_VALUE, SECURITY_HEADERS } from "@/lib/security-headers";

describe("cabeceras de seguridad (ADR-0030)", () => {
  const vercel = JSON.parse(readFileSync("vercel.json", "utf8")) as {
    headers: { source: string; headers: { key: string; value: string }[] }[];
  };
  const vercelHeaders = vercel.headers[0]?.headers ?? [];

  it("CSP de producción no incluye unsafe-eval (P1-5)", () => {
    expect(CSP_VALUE).not.toContain("unsafe-eval");
    expect(CSP_VALUE).toContain("script-src 'self' 'unsafe-inline'");
  });

  it("HSTS incluye includeSubDomains y preload (P1-6)", () => {
    expect(HSTS_VALUE).toContain("includeSubDomains");
    expect(HSTS_VALUE).toContain("preload");
    expect(HSTS_VALUE).toContain("max-age=63072000");
  });

  it("Permissions-Policy usa browsing-topics (no interest-cohort obsoleto)", () => {
    const pp = SECURITY_HEADERS.find((h) => h.key === "Permissions-Policy")?.value ?? "";
    expect(pp).toContain("browsing-topics=()");
    expect(pp).not.toContain("interest-cohort");
  });

  it("vercel.json coincide con src/lib/security-headers.ts", () => {
    for (const header of SECURITY_HEADERS) {
      const found = vercelHeaders.find((item) => item.key === header.key);
      expect(found, `falta ${header.key} en vercel.json`).toEqual(header);
    }
  });
});
