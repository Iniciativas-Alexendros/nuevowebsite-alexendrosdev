import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

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

    await expect(page.getByText(/borrador|draft/i)).toHaveCount(0);
  });

  test("servicios, proyectos y stack alcanzables en ≤2 interacciones desde nav", async ({
    page,
  }) => {
    await page.goto("/");

    const nav = page.getByRole("navigation", { name: "Principal" });

    await nav.getByRole("link", { name: "Servicios" }).click();
    await expect(page).toHaveURL(/\/servicios$/);
    await expect(page.getByRole("heading", { level: 1, name: "Servicios" })).toBeVisible();

    await nav.getByRole("link", { name: "Proyectos" }).click();
    await expect(page).toHaveURL(/\/proyectos$/);
    await expect(page.getByRole("heading", { level: 1, name: "Proyectos" })).toBeVisible();

    await nav.getByRole("link", { name: "Stack" }).click();
    await expect(page).toHaveURL(/\/stack$/);
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
      expect(href).toMatch(/^https?:\/\//);
      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute("rel", /noopener/);
    }
  });

  test("sobre-mi sin violaciones axe critical o serious", async ({ page }) => {
    await page.goto("/sobre-mi");

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    const blocking = results.violations.filter(
      (violation) => violation.impact === "critical" || violation.impact === "serious"
    );

    expect(blocking, JSON.stringify(blocking, null, 2)).toEqual([]);
  });

  test("proyectos sin violaciones axe critical o serious", async ({ page }) => {
    await page.goto("/proyectos");

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    const blocking = results.violations.filter(
      (violation) => violation.impact === "critical" || violation.impact === "serious"
    );

    expect(blocking, JSON.stringify(blocking, null, 2)).toEqual([]);
  });
});
