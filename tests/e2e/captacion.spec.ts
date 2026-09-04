import { expect, test } from "@playwright/test";

import { expectPathname } from "./helpers/expect";

test.describe("captación OBJ-002", () => {
  test("contacto alcanzable en un clic desde inicio", async ({ page, isMobile }) => {
    test.skip(isMobile, "en móvil el enlace Contacto vive en el menú desplegable");
    await page.goto("/");

    const headerContact = page.getByRole("banner").getByRole("link", { name: "Contacto" });
    await expect(headerContact).toBeVisible();
    await headerContact.click();
    await expectPathname(page, "/contacto");
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

  test("servicios lista los tres servicios publicados", async ({ page }) => {
    await page.goto("/servicios");

    await expect(page.getByRole("heading", { level: 1, name: "Servicios" })).toBeVisible();
    await expect(page.getByRole("heading", { level: 3 })).toHaveCount(3);
    await expect(page.getByRole("link", { name: "Contactar" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Pedir auditoría" })).toBeVisible();
    await expect(page.getByText("Entregables").first()).toBeVisible();
  });

  test("inicio ofrece Cal.com como CTA secundario", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("link", { name: "Agendar llamada" }).first()).toBeVisible();
  });
});
