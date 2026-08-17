import { expect, test } from "@playwright/test";

import { expectPathname, headerTokens } from "./helpers/expect";

const PUBLISHED_PROJECTS = [
  "FRONT Valencia",
  "Gráficas Nasve",
  "vcf-cribador",
  "alexendros.me",
] as const;

test.describe("portfolio OBJ-003", () => {
  test("rutas /proyectos, /stack y /sobre-mi responden con contenido", async ({ page }) => {
    await page.goto("/proyectos");
    await expect(page.getByRole("heading", { level: 1, name: "Proyectos" })).toBeVisible();

    await page.goto("/stack");
    await expect(page.getByRole("heading", { level: 1, name: "Stack" })).toBeVisible();

    await page.goto("/sobre-mi");
    await expect(page.getByRole("heading", { level: 1, name: "Sobre mí" })).toBeVisible();
    await expect(page.getByRole("heading", { level: 2, name: "Alexendros" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Contactar" })).toBeVisible();
  });

  test("muestra los cuatro proyectos publicados y no borradores", async ({ page }) => {
    await page.goto("/proyectos");

    const articles = page.getByRole("article");
    await expect(articles).toHaveCount(4);

    for (const title of PUBLISHED_PROJECTS) {
      await expect(page.getByRole("heading", { level: 3, name: title })).toBeVisible();
    }

    await expect(page.getByText("borrador", { exact: false })).toHaveCount(0);
    await expect(page.getByText("draft", { exact: false })).toHaveCount(0);
  });

  test("servicios, proyectos y stack alcanzables en ≤2 interacciones desde nav", async ({
    page,
    isMobile,
  }) => {
    test.skip(isMobile, "en móvil la nav principal está en el desplegable");
    await page.goto("/");

    const nav = page.getByRole("navigation", { name: "Principal" });

    await nav.getByRole("link", { name: "Servicios" }).click();
    await expectPathname(page, "/servicios");
    await expect(page.getByRole("heading", { level: 1, name: "Servicios" })).toBeVisible();

    await nav.getByRole("link", { name: "Proyectos" }).click();
    await expectPathname(page, "/proyectos");
    await expect(page.getByRole("heading", { level: 1, name: "Proyectos" })).toBeVisible();

    await nav.getByRole("link", { name: "Stack" }).click();
    await expectPathname(page, "/stack");
    await expect(page.getByRole("heading", { level: 1, name: "Stack" })).toBeVisible();
  });

  test("enlaces externos de proyectos tienen destino y atributos correctos", async ({ page }) => {
    await page.goto("/proyectos");

    const externalLinks = page.locator('article a[href^="http"]');
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
