import localFont from "next/font/local";

/**
 * Tipografías self-hosted (DES-03).
 * Los woff2 están subset a Latin/Latin-1 (español) para LCP (OBJ-005);
 * los archivos completos no viven en el repo.
 */
export const fontSans = localFont({
  src: "../fonts/inter/InterVariable.woff2",
  // optional: el LCP de rutas densas (/sobre-mi) es el h1 Inter; swap retrasaba ~100 ms lab (OBJ-005).
  display: "optional",
  variable: "--font-inter",
  weight: "400 700",
  adjustFontFallback: "Arial",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

export const fontMono = localFont({
  src: "../fonts/jetbrains-mono/JetBrainsMono-Variable.woff2",
  // optional: mono solo en badges; no debe competir con Inter en LCP (OBJ-005 /sobre-mi).
  display: "optional",
  variable: "--font-jetbrains",
  weight: "400 700",
  preload: false,
  adjustFontFallback: "Arial",
  fallback: ["ui-monospace", "SF Mono", "Cascadia Mono", "monospace"],
});
