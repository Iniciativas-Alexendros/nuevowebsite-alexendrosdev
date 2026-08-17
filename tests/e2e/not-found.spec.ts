import { expect, test } from "@playwright/test";

import { headerTokens } from "./helpers/expect";

test.describe("página 404", () => {
  test("responde con estado 404 y conserva el cascarón", async ({ page }) => {
    const response = await page.goto("/ruta-inexistente");

    expect(response?.status()).toBe(404);
    await expect(
      page.getByRole("heading", { level: 1, name: "Página no encontrada" })
    ).toBeVisible();
    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.getByRole("contentinfo")).toBeVisible();
  });

  test("ofrece enlaces sugeridos a las rutas principales", async ({ page }) => {
    await page.goto("/ruta-inexistente");

    const suggested = page.getByRole("navigation", { name: "Enlaces sugeridos" });
    await expect(suggested).toBeVisible();
    await expect(suggested.getByRole("link", { name: "Inicio" })).toHaveAttribute("href", "/");
    await expect(suggested.getByRole("link", { name: "Contacto" })).toHaveAttribute(
      "href",
      "/contacto"
    );
  });

  test("no debe indexarse", async ({ page }) => {
    await page.goto("/ruta-inexistente");

    const robots = headerTokens(
      await page.locator('meta[name="robots"]').first().getAttribute("content")
    );
    expect(robots).toContain("noindex");
  });
});
