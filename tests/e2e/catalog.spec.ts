import { expect, test } from "@playwright/test";

import { assertNoBlockingAxe } from "./helpers/axe";
import { headerTokens } from "./helpers/expect";

test.describe("catálogo de componentes (/catalog)", () => {
  test("sin violaciones de accesibilidad críticas o serias", async ({ page }) => {
    await page.goto("/catalog");
    await assertNoBlockingAxe(page);
  });

  test("los enlaces externos abren en pestaña nueva con rel seguro e indicación accesible", async ({
    page,
  }) => {
    await page.goto("/catalog");

    const external = page.locator('a[href^="https://"]').first();
    await expect(external).toHaveAttribute("target", "_blank");
    const rel = headerTokens(await external.getAttribute("rel"), " ");
    expect(rel).toContain("noopener");
    expect(rel).toContain("noreferrer");
    await expect(external.locator("span")).toContainText("abre en una pestaña nueva");
  });

  test("el foco avanza por teclado hasta los controles interactivos", async ({ page }) => {
    await page.goto("/catalog");

    await page.keyboard.press("Tab");
    const focused = page.evaluate(() => document.activeElement?.tagName);
    await expect(await focused).not.toBe("BODY");

    await page.getByRole("button").first().focus();
    await expect(page.getByRole("button").first()).toBeFocused();
  });

  for (const viewport of [
    { name: "móvil", width: 360, height: 640 },
    { name: "escritorio", width: 1280, height: 800 },
  ]) {
    test(`sin desbordamiento horizontal en ${viewport.name} (${viewport.width}×${viewport.height})`, async ({
      page,
    }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto("/catalog");

      await expect(page.getByRole("main")).toBeVisible();

      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth
      );
      expect(overflow).toBe(false);
    });
  }

  test("Select y Checkbox del design system están en el banco visual", async ({ page }) => {
    await page.goto("/catalog");

    await expect(page.getByRole("combobox", { name: "Asunto" })).toBeVisible();
    await expect(
      page.getByRole("checkbox", { name: "Acepto el tratamiento de datos de ejemplo (catálogo)." })
    ).toBeVisible();
  });
});
