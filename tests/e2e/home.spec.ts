import { expect, test } from "@playwright/test";

test.describe("página de inicio", () => {
  test("renderiza con idioma español y contenido principal", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("html")).toHaveAttribute("lang", "es");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("main")).toBeVisible();
  });
});
