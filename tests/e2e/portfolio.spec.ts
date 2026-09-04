import { expect, test } from "@playwright/test";

import { expectPathname, headerTokens } from "./helpers/expect";

const PUBLISHED_PROJECTS = [
  "FRONT Valencia",
  "Gráficas Nasve",
  "vcf-cribador",
  "alexendros.me",
] as const;

test.describe("portfolio OBJ-003", () => {
  test("/sobre-mi responde con perfil, método, proyectos y stack", async ({ page }) => {
    await page.goto("/sobre-mi");

    await expect(page.getByRole("heading", { level: 1, name: "Sobre mí" })).toBeVisible();
    await expect(page.getByRole("heading", { level: 2, name: "Alexendros" })).toBeVisible();
    await expect(page.getByRole("heading", { level: 2, name: "Método de trabajo" })).toBeVisible();
    await expect(
      page.getByRole("heading", { level: 2, name: /proyectos seleccionados/i })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { level: 2, name: /stack y herramientas/i })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Contactar" })).toBeVisible();
  });

  test("redirige /proyectos al bloque de proyectos de Sobre mí", async ({ page }) => {
    const response = await page.request.get("/proyectos", { maxRedirects: 0 });
    expect(response.status()).toBe(308);
    expect(response.headers()["location"]).toBe("/sobre-mi#proyectos");

    await page.goto("/proyectos");
    await expect(page).toHaveURL(/\/sobre-mi#proyectos$/);
    await expect(page.getByRole("heading", { level: 2, name: /proyectos/i })).toBeVisible();
  });

  test("redirige /stack al bloque de stack de Sobre mí", async ({ page }) => {
    const response = await page.request.get("/stack", { maxRedirects: 0 });
    expect(response.status()).toBe(308);
    expect(response.headers()["location"]).toBe("/sobre-mi#stack");

    await page.goto("/stack");
    await expect(page).toHaveURL(/\/sobre-mi#stack$/);
    await expect(page.getByRole("heading", { level: 2, name: /stack/i })).toBeVisible();
  });

  test("muestra los cuatro proyectos publicados y no borradores", async ({ page }) => {
    await page.goto("/sobre-mi#proyectos");

    const articles = page.locator("#proyectos").getByRole("article");
    await expect(articles).toHaveCount(4);

    for (const title of PUBLISHED_PROJECTS) {
      await expect(
        page.locator("#proyectos").getByRole("heading", { level: 3, name: title })
      ).toBeVisible();
    }

    await expect(page.getByText("borrador", { exact: false })).toHaveCount(0);
    await expect(page.getByText("draft", { exact: false })).toHaveCount(0);
  });

  test("servicios, sobre mí y contacto alcanzables en ≤2 interacciones desde nav", async ({
    page,
    isMobile,
  }) => {
    test.skip(isMobile, "en móvil la nav principal está en el desplegable");
    await page.goto("/");

    const nav = page.getByRole("navigation", { name: "Principal" });

    await nav.getByRole("link", { name: "Servicios" }).click();
    await expectPathname(page, "/servicios");
    await expect(page.getByRole("heading", { level: 1, name: "Servicios" })).toBeVisible();

    await nav.getByRole("link", { name: "Sobre mí" }).click();
    await expectPathname(page, "/sobre-mi");
    await expect(page.getByRole("heading", { level: 1, name: "Sobre mí" })).toBeVisible();

    await nav.getByRole("link", { name: "Contacto" }).click();
    await expectPathname(page, "/contacto");
  });

  test("enlaces externos de proyectos tienen destino y atributos correctos", async ({ page }) => {
    await page.goto("/sobre-mi#proyectos");

    const externalLinks = page.locator('#proyectos article a[href^="http"]');
    const count = await externalLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i += 1) {
      const link = externalLinks.nth(i);
      const href = await link.getAttribute("href");
      expect(href, "href de enlace externo").toBeTruthy();
      const parsed = new URL(href ?? "");
      expect(["http:", "https:"]).toContain(parsed.protocol);
      await expect(link).toHaveAttribute("target", "_blank");
      const rel = headerTokens(await link.getAttribute("rel"), " ");
      expect(rel).toContain("noopener");
    }
  });
});
