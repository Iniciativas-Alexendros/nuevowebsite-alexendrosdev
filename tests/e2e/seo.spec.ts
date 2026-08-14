import { expect, test } from "@playwright/test";

test.describe("SEO técnico", () => {
  test("robots.txt permite el rastreo y excluye el catálogo", async ({ request }) => {
    const response = await request.get("/robots.txt");
    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain("User-Agent: *");
    expect(text).toContain("Disallow: /catalog");
    expect(text).toContain("Sitemap: https://alexendros.dev/sitemap.xml");
  });

  test("sitemap.xml lista las ocho rutas estáticas", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    expect(response.status()).toBe(200);

    const text = await response.text();
    for (const path of [
      "/",
      "/servicios",
      "/proyectos",
      "/stack",
      "/sobre-mi",
      "/contacto",
      "/aviso-legal",
      "/privacidad",
    ]) {
      expect(text).toContain(`https://alexendros.dev${path}`);
    }
  });

  test("incluye datos estructurados WebSite en la home", async ({ page }) => {
    await page.goto("/");

    const script = page.locator('script[type="application/ld+json"]').first();
    const json = JSON.parse((await script.textContent()) ?? "{}");
    expect(json["@type"]).toBe("WebSite");
    expect(json.name).toBe("Alexendros");
    expect(json.inLanguage).toBe("es");
  });
});
