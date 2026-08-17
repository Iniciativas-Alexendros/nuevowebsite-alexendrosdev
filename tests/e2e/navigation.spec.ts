import { expect, test } from "@playwright/test";

import { expectPathname } from "./helpers/expect";

test.describe("cascarón de navegación", () => {
  test("muestra cabecera, pie y wordmark enlazado al inicio", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.getByRole("contentinfo")).toBeVisible();

    const wordmark = page.getByRole("link", { name: "Alexendros.dev" }).first();
    await expect(wordmark).toBeVisible();
    await expect(wordmark).toHaveAttribute("href", "/");
  });

  test("la navegación de escritorio marca la página activa con aria-current", async ({
    page,
    isMobile,
  }) => {
    test.skip(isMobile, "nav de escritorio oculta bajo Pixel 5");
    await page.goto("/servicios");

    const nav = page.getByRole("navigation", { name: "Principal" });
    await expect(nav).toBeVisible();

    await expect(page.getByRole("link", { name: "Servicios" })).toHaveAttribute(
      "aria-current",
      "page"
    );
    await expect(page.getByRole("link", { name: "Proyectos" })).not.toHaveAttribute(
      "aria-current",
      "page"
    );
  });

  test("el enlace de salto es el primer elemento enfocable", async ({ page }) => {
    await page.goto("/");

    await page.keyboard.press("Tab");

    const href = await page.evaluate(() => document.activeElement?.getAttribute("href"));
    expect(href).toBe("#contenido-principal");
  });

  test("el enlace de salto mueve el foco al contenido principal", async ({ page }) => {
    await page.goto("/");

    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");

    const activeId = await page.evaluate(() => document.activeElement?.id);
    expect(activeId).toBe("contenido-principal");
  });

  test("el pie enlaza las páginas legales", async ({ page }) => {
    await page.goto("/");

    const legal = page.getByRole("navigation", { name: "Legal" });
    await expect(legal).toBeVisible();
    await expect(legal.getByRole("link", { name: "Aviso legal" })).toHaveAttribute(
      "href",
      "/aviso-legal"
    );
    await expect(legal.getByRole("link", { name: "Privacidad" })).toHaveAttribute(
      "href",
      "/privacidad"
    );
  });
});

test.describe("navegación móvil", () => {
  test("se abre al pulsar el desplegable y se cierra con Escape", async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 640 });
    await page.goto("/");

    const summary = page.locator("summary");
    await expect(summary).toBeVisible();

    await summary.click();
    await expect(page.getByRole("navigation", { name: "Principal" })).toBeVisible();
    await expect(
      page.getByRole("navigation", { name: "Principal" }).getByRole("link", {
        name: "Servicios",
        exact: true,
      })
    ).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(page.getByRole("navigation", { name: "Principal" })).toBeHidden();
  });

  test("se cierra al hacer clic fuera del menú", async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 640 });
    await page.goto("/");

    const summary = page.locator("summary");
    await summary.click();
    await expect(page.getByRole("navigation", { name: "Principal" })).toBeVisible();

    await page.getByRole("main").click({ position: { x: 10, y: 10 } });
    await expect(page.getByRole("navigation", { name: "Principal" })).toBeHidden();
  });

  test("se cierra al navegar a otra página", async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 640 });
    await page.goto("/");

    const summary = page.locator("summary");
    await summary.click();
    await expect(page.getByRole("navigation", { name: "Principal" })).toBeVisible();

    await page.getByRole("group").getByRole("link", { name: "Servicios" }).click();

    await expectPathname(page, "/servicios");
    await expect(page.getByRole("navigation", { name: "Principal" })).toBeHidden();
  });
});
