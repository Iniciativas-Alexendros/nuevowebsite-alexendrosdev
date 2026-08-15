import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

async function expectNoBlockingAxeViolations(page: import("@playwright/test").Page) {
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();

  const blocking = results.violations.filter(
    (violation) => violation.impact === "critical" || violation.impact === "serious"
  );

  expect(blocking, JSON.stringify(blocking, null, 2)).toEqual([]);
}

test.describe("portfolio Fase 6", () => {
  test("/proyectos lista cuatro proyectos y CTA de contacto", async ({ page }) => {
    await page.goto("/proyectos");

    await expect(page.getByRole("heading", { level: 1, name: "Proyectos" })).toBeVisible();
    await expect(page.getByRole("heading", { level: 3, name: "FRONT Valencia" })).toBeVisible();
    await expect(page.getByRole("heading", { level: 3, name: "Gráficas Nasve" })).toBeVisible();
    await expect(page.getByRole("heading", { level: 3, name: "vcf-cribador" })).toBeVisible();
    await expect(page.getByRole("heading", { level: 3, name: "alexendros.me" })).toBeVisible();
    await expect(page.getByRole("heading", { level: 3 })).toHaveCount(4);
    await expect(page.getByRole("link", { name: "Contactar" }).first()).toBeVisible();
  });

  test("/proyectos sin violaciones de accesibilidad críticas o serias", async ({ page }) => {
    await page.goto("/proyectos");
    await expectNoBlockingAxeViolations(page);
  });

  test("/stack agrupa por categorías con nombres en texto", async ({ page }) => {
    await page.goto("/stack");

    await expect(page.getByRole("heading", { level: 1, name: "Stack" })).toBeVisible();
    await expect(page.getByRole("heading", { level: 2, name: "Lenguajes" })).toBeVisible();
    await expect(page.getByRole("heading", { level: 2, name: "Frameworks" })).toBeVisible();
    await expect(page.getByRole("heading", { level: 2, name: "Herramientas" })).toBeVisible();
    await expect(page.getByText("Next.js", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("TypeScript", { exact: true }).first()).toBeVisible();
  });

  test("/stack sin violaciones de accesibilidad críticas o serias", async ({ page }) => {
    await page.goto("/stack");
    await expectNoBlockingAxeViolations(page);
  });

  test("/sobre-mi muestra bio tipada y CTA", async ({ page }) => {
    await page.goto("/sobre-mi");

    await expect(page.getByRole("heading", { level: 1, name: "Sobre mí" })).toBeVisible();
    await expect(page.getByText("Alexendros").first()).toBeVisible();
    await expect(
      page.getByText(/Llevo años desarrollando software/, { exact: false })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Contactar" }).first()).toBeVisible();
  });

  test("/sobre-mi sin violaciones de accesibilidad críticas o serias", async ({ page }) => {
    await page.goto("/sobre-mi");
    await expectNoBlockingAxeViolations(page);
  });

  test("OBJ-003: proyectos, stack y sobre-mí alcanzables en un clic desde la nav", async ({
    page,
  }) => {
    await page.goto("/");
    await page
      .getByRole("navigation", { name: "Principal" })
      .getByRole("link", { name: "Proyectos" })
      .click();
    await expect(page).toHaveURL(/\/proyectos$/);
    await expect(page.getByRole("heading", { level: 1, name: "Proyectos" })).toBeVisible();

    await page.goto("/");
    await page
      .getByRole("navigation", { name: "Principal" })
      .getByRole("link", { name: "Stack" })
      .click();
    await expect(page).toHaveURL(/\/stack$/);
    await expect(page.getByRole("heading", { level: 1, name: "Stack" })).toBeVisible();

    await page.goto("/");
    await page
      .getByRole("navigation", { name: "Principal" })
      .getByRole("link", { name: "Sobre mí" })
      .click();
    await expect(page).toHaveURL(/\/sobre-mi$/);
    await expect(page.getByRole("heading", { level: 1, name: "Sobre mí" })).toBeVisible();
  });
});
