import localFont from "next/font/local";

export const fontSans = localFont({
  src: "../fonts/inter/InterVariable.woff2",
  display: "swap",
  variable: "--font-inter",
  weight: "100 900",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

export const fontMono = localFont({
  src: "../fonts/jetbrains-mono/JetBrainsMono-Variable.woff2",
  display: "swap",
  variable: "--font-jetbrains",
  weight: "100 800",
  preload: false,
  fallback: ["ui-monospace", "SF Mono", "Cascadia Mono", "monospace"],
});
