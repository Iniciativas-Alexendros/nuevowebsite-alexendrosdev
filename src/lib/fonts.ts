import { Geist, Geist_Mono } from "next/font/google";

/**
 * Tipografías Forge Terminal (DESIGN §5, reforma 04-09-2026 / ADR-0032).
 * Geist se descarga en build y se self-hostea vía next/font: cero peticiones
 * a terceros en runtime (espíritu de DES-03).
 */
export const fontSans = Geist({
  subsets: ["latin"],
  // optional: la sans cubre el LCP (h1); swap retrasaba ~100 ms lab (OBJ-005).
  display: "optional",
  variable: "--font-geist-sans",
  fallback: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

export const fontMono = Geist_Mono({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-geist-mono",
  // La mono cubre badges/kickers/terminal; no debe competir con la sans en LCP (OBJ-005).
  preload: false,
  fallback: ["ui-monospace", "SF Mono", "Cascadia Mono", "monospace"],
});
