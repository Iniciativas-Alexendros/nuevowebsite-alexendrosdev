/**
 * Primitivos Forge Terminal — DESIGN §4.5 (ADR-0032).
 * Única fuente tipada de valores crudos. Solo oklch(); cada familia varía L con C/H constantes.
 * Los componentes NO consumen estos valores: usan los tokens semánticos de
 * `src/styles/forge-terminal.css`. Este módulo existe para tests (REQ-DS-TOKENS-001).
 */
export const forgeTokens = {
  obsidian: {
    950: "oklch(0.12 0.01 255)",
    900: "oklch(0.16 0.012 255)",
    800: "oklch(0.21 0.015 255)",
    700: "oklch(0.27 0.015 255)",
    600: "oklch(0.35 0.015 255)",
    500: "oklch(0.45 0.015 255)",
  },
  fg: {
    100: "oklch(0.97 0.005 255)",
    200: "oklch(0.93 0.01 255)",
    300: "oklch(0.75 0.015 255)",
    400: "oklch(0.55 0.015 255)",
    450: "oklch(0.52 0.015 255)",
  },
  amber: {
    100: "oklch(0.97 0.04 75)",
    400: "oklch(0.82 0.15 75)",
    500: "oklch(0.77 0.17 75)",
    600: "oklch(0.7 0.17 75)",
    700: "oklch(0.58 0.15 75)",
    750: "oklch(0.45 0.11 75)",
    800: "oklch(0.42 0.11 75)",
    850: "oklch(0.39 0.1 75)",
    900: "oklch(0.25 0.08 75)",
  },
  lime: {
    400: "oklch(0.85 0.16 145)",
    500: "oklch(0.8 0.18 145)",
    600: "oklch(0.5 0.14 145)",
  },
  cyan: {
    500: "oklch(0.75 0.12 205)",
    600: "oklch(0.48 0.11 205)",
  },
  red: {
    400: "oklch(0.72 0.18 25)",
    500: "oklch(0.65 0.2 25)",
    600: "oklch(0.55 0.19 25)",
    700: "oklch(0.48 0.18 25)",
  },
  paper: {
    50: "oklch(0.98 0.003 255)",
    100: "oklch(0.96 0.004 255)",
    200: "oklch(0.92 0.006 255)",
    300: "oklch(0.87 0.008 255)",
    400: "oklch(0.75 0.01 255)",
  },
} as const;

/**
 * Asignación semántica por tema (DESIGN §4.5, tabla «asignación por tema (Forge)»).
 * `dark` es el `:root` (default intencional); `light` se sirve vía prefers-color-scheme.
 * Los tests de contraste (REQ-DS-CONTRAST-001) verifican estos pares en CI.
 */
export const forgeSemantic = {
  dark: {
    background: forgeTokens.obsidian[900],
    foreground: forgeTokens.fg[200],
    card: forgeTokens.obsidian[800],
    cardForeground: forgeTokens.fg[200],
    mutedForeground: "oklch(0.65 0.015 255)",
    primary: forgeTokens.amber[500],
    primaryForeground: forgeTokens.obsidian[900],
    input: forgeTokens.obsidian[700],
    placeholder: "oklch(0.65 0.015 255)",
    destructive: forgeTokens.red[500],
    destructiveForeground: forgeTokens.obsidian[900],
    success: forgeTokens.lime[500],
    successForeground: forgeTokens.obsidian[900],
    info: forgeTokens.cyan[500],
    infoForeground: forgeTokens.obsidian[900],
    warning: forgeTokens.amber[400],
    warningForeground: forgeTokens.obsidian[900],
    link: forgeTokens.amber[500],
    terminal: forgeTokens.obsidian[950],
    terminalForeground: forgeTokens.fg[200],
  },
  light: {
    background: forgeTokens.paper[50],
    foreground: forgeTokens.obsidian[800],
    card: forgeTokens.paper[100],
    cardForeground: forgeTokens.obsidian[800],
    mutedForeground: forgeTokens.obsidian[500],
    primary: forgeTokens.amber[750],
    primaryForeground: forgeTokens.paper[50],
    input: forgeTokens.paper[100],
    placeholder: forgeTokens.fg[450],
    destructive: forgeTokens.red[600],
    destructiveForeground: forgeTokens.paper[50],
    success: forgeTokens.lime[600],
    successForeground: forgeTokens.paper[50],
    info: forgeTokens.cyan[600],
    infoForeground: forgeTokens.paper[50],
    warning: forgeTokens.amber[600],
    warningForeground: forgeTokens.obsidian[900],
    link: forgeTokens.amber[750],
    terminal: forgeTokens.obsidian[950],
    terminalForeground: forgeTokens.fg[200],
  },
} as const;
