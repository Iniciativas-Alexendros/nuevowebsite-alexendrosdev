import type { Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { expect } from "@playwright/test";

const WCAG_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] as const;

/** Rutas P0 alineadas con lighthouserc.json (OBJ-006). */
export const P0_ROUTES = [
  "/",
  "/servicios",
  "/sobre-mi",
  "/contacto",
  "/aviso-legal",
  "/privacidad",
] as const;

export async function assertNoBlockingAxe(page: Page): Promise<void> {
  const results = await new AxeBuilder({ page }).withTags([...WCAG_TAGS]).analyze();
  const blocking = results.violations.filter(
    (violation) => violation.impact === "critical" || violation.impact === "serious"
  );
  expect(blocking, JSON.stringify(blocking, null, 2)).toEqual([]);
}
