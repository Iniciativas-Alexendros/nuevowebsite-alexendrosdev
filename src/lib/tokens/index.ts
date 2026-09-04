import Color from "colorjs.io";

export { forgeSemantic, forgeTokens } from "./forge";

/**
 * Valida la forma literal de un token OKLCH: oklch(L C H) con L en 0–1,
 * C en 0–0.999…, H en 0–360 y canal alfa opcional en 0–1 (REQ-DS-TOKENS-001).
 */
const OKLCH_RE =
  /^oklch\(\s*(?:0(?:\.\d+)?|1(?:\.0+)?)\s+0(?:\.\d+)?\s+(?:\d{1,2}(?:\.\d+)?|[12]\d{2}(?:\.\d+)?|3[0-5]\d(?:\.\d+)?|360(?:\.0+)?)(?:\s*\/\s*(?:0(?:\.\d+)?|1(?:\.0+)?))?\s*\)$/;

export function isValidOklch(token: string): boolean {
  return OKLCH_RE.test(token.trim());
}

/** Ratio de contraste WCAG 2.x entre dos colores OKLCH (REQ-DS-CONTRAST-001). */
export function getContrastRatio(a: string, b: string): number {
  return new Color(a).contrast(new Color(b), "WCAG21");
}
