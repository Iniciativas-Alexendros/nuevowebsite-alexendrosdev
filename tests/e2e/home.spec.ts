import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("página de inicio", () => {
  test("renderiza con idioma español y contenido principal", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("html")).toHaveAttribute("lang", "es");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("main")).toBeVisible();
  });

  test("sin violaciones de accesibilidad críticas o serias", async ({ page }) => {
    await page.goto("/");

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    const blocking = results.violations.filter(
      (violation) => violation.impact === "critical" || violation.impact === "serious"
    );

    expect(blocking, JSON.stringify(blocking, null, 2)).toEqual([]);
  });
});
