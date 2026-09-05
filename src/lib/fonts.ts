import localFont from "next/font/local";

/**
 * Tipografías Forge Terminal (DESIGN §5, reforma 04-09-2026 / ADR-0032).
 * Geist self-hosted vía next/font/local (DES-03): los woff2 latin (subset
 * variable) viven en src/fonts/geist/ bajo OFL; cero peticiones a terceros.
 * display "swap": el texto LCP pinta con el fallback sin esperar a la webfont;
 * con "optional" la simulación de Lighthouse metía la fuente en la ruta del LCP
 * y añadía ~150 ms al FCP y alta varianza (~±470 ms) al LCP (OBJ-005).
 */
export const fontSans = localFont({
  src: "../fonts/geist/GeistVariable-latin.woff2",
  display: "swap",
  variable: "--font-geist-sans",
  weight: "100 900",
  adjustFontFallback: "Arial",
  fallback: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

export const fontMono = localFont({
  src: "../fonts/geist/GeistMonoVariable-latin.woff2",
  display: "swap",
  variable: "--font-geist-mono",
  weight: "100 900",
  // La mono cubre badges/kickers/terminal; no debe competir con la sans en LCP (OBJ-005).
  preload: false,
  adjustFontFallback: "Arial",
  fallback: ["ui-monospace", "SF Mono", "Cascadia Mono", "monospace"],
});
