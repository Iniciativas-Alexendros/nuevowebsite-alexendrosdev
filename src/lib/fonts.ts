import localFont from "next/font/local";

export const fontSans = localFont({
  src: "../fonts/inter/InterVariable.woff2",
  display: "swap",
  variable: "--font-inter",
  weight: "400 700",
  adjustFontFallback: "Arial",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

export const fontMono = localFont({
  src: "../fonts/jetbrains-mono/JetBrainsMono-Variable.woff2",
  display: "swap",
  variable: "--font-jetbrains",
  weight: "400 700",
  preload: false,
  adjustFontFallback: "Arial",
  fallback: ["ui-monospace", "SF Mono", "Cascadia Mono", "monospace"],
});
