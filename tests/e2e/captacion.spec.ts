import { expect, test } from "@playwright/test";

test.describe("captación OBJ-002", () => {
  test("contacto alcanzable en un clic desde inicio", async ({ page }) => {
    await page.goto("/");

    const headerContact = page.getByRole("banner").getByRole("link", { name: "Contacto" });
    await expect(headerContact).toBeVisible();
    await headerContact.click();
    await expect(page).toHaveURL(/\/contacto$/);
    await expect(page.getByRole("heading", { level: 1, name: "Contacto" })).toBeVisible();
  });

  test("inicio muestra CTA de contacto above-the-fold en móvil", async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 640 });
    await page.goto("/");

    const cta = page.getByRole("link", { name: "Escríbeme" });
    await expect(cta).toBeVisible();

    const box = await cta.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.y + box!.height).toBeLessThanOrEqual(640);
  });

  test("servicios lista los cuatro servicios publicados", async ({ page }) => {
    await page.goto("/servicios");

    await expect(page.getByRole("heading", { level: 1, name: "Servicios" })).toBeVisible();
    await expect(page.getByRole("heading", { level: 3 })).toHaveCount(4);
    await expect(page.getByRole("link", { name: "Contactar" }).first()).toBeVisible();
  });
});
