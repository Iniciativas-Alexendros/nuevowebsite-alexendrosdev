import { describe, expect, it } from "vitest";
import { forgeSemantic, forgeTokens, getContrastRatio, isValidOklch } from "@/lib/tokens";

describe("forgeTokens (REQ-DS-TOKENS-001)", () => {
  it("todos los primitivos son oklch() válidos", () => {
    const values = Object.values(forgeTokens).flatMap((scale) => Object.values(scale));
    expect(values.length).toBeGreaterThan(0);
    for (const value of values) {
      expect(isValidOklch(value), value).toBe(true);
    }
  });

  it("todos los semánticos son oklch() válidos", () => {
    for (const theme of Object.values(forgeSemantic)) {
      for (const value of Object.values(theme)) {
        expect(isValidOklch(value), value).toBe(true);
      }
    }
  });

  it("cada familia mantiene el matiz constante y L es monótona en la escala", () => {
    const parts = /oklch\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)/;
    for (const [family, scale] of Object.entries(forgeTokens)) {
      const hues = new Set<string>();
      const lightness: number[] = [];
      for (const value of Object.values(scale)) {
        const match = value.match(parts);
        expect(match, value).not.toBeNull();
        lightness.push(Number(match![1]));
        hues.add(match![3]);
      }
      expect([...hues], `${family}: matiz único`).toHaveLength(1);
      const deltas = lightness.slice(1).map((l, i) => l - lightness[i]);
      const monotonic = deltas.every((d) => d >= 0) || deltas.every((d) => d <= 0);
      expect(monotonic, `${family}: L no monótona ${lightness}`).toBe(true);
    }
  });
});

describe("isValidOklch", () => {
  it("acepta formas válidas", () => {
    expect(isValidOklch("oklch(0.77 0.17 75)")).toBe(true);
    expect(isValidOklch("oklch(0 0 0)")).toBe(true);
    expect(isValidOklch("oklch(1 0 0)")).toBe(true);
    expect(isValidOklch("oklch(0.77 0.17 75 / 0.2)")).toBe(true);
    expect(isValidOklch(" oklch(0.16 0.012 255) ")).toBe(true);
  });

  it("rechaza hex, rgb, hsl y valores fuera de rango", () => {
    expect(isValidOklch("#ffaa00")).toBe(false);
    expect(isValidOklch("rgb(255 170 0)")).toBe(false);
    expect(isValidOklch("hsl(40 100% 50%)")).toBe(false);
    expect(isValidOklch("oklch(1.2 0.1 255)")).toBe(false);
    expect(isValidOklch("oklch(0.5 0.1 400)")).toBe(false);
    expect(isValidOklch("oklch(0.5 0.1 75 / 1.5)")).toBe(false);
    expect(isValidOklch("amber-500")).toBe(false);
  });
});

/**
 * Pares fondo/primer plano verificados en CI (REQ-DS-CONTRAST-001, NFR-A11Y-003).
 * Umbrales: AAA cuerpo (15:1), AA texto (4,5:1) y primary/background 7:1.
 */
describe("contraste Forge (REQ-DS-CONTRAST-001)", () => {
  const cases: Array<
    [string, keyof typeof forgeSemantic.dark, keyof typeof forgeSemantic.dark, number]
  > = [
    ["foreground/background", "foreground", "background", 15],
    ["muted-foreground/card", "mutedForeground", "card", 4.5],
    ["primary/background", "primary", "background", 7],
    ["placeholder/input", "placeholder", "input", 4.5],
    ["primary-foreground/primary", "primaryForeground", "primary", 4.5],
    ["destructive-foreground/destructive", "destructiveForeground", "destructive", 4.5],
    ["success-foreground/success", "successForeground", "success", 4.5],
    ["info-foreground/info", "infoForeground", "info", 4.5],
    ["warning-foreground/warning", "warningForeground", "warning", 4.5],
    ["link/background", "link", "background", 4.5],
    ["card-foreground/card", "cardForeground", "card", 4.5],
    // El terminal es oscuro en ambos temas (DESIGN §4.5): su texto es fg claro fijo.
    ["terminal-foreground/terminal", "terminalForeground", "terminal", 15],
  ];

  for (const theme of ["dark", "light"] as const) {
    describe(`tema ${theme}`, () => {
      for (const [name, fg, bg, min] of cases) {
        it(`${name} ≥ ${min}:1`, () => {
          const ratio = getContrastRatio(forgeSemantic[theme][fg], forgeSemantic[theme][bg]);
          expect(ratio).toBeGreaterThanOrEqual(min);
        });
      }
    });
  }
});
