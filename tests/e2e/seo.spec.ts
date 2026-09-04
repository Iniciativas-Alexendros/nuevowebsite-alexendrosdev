import { expect, test } from "@playwright/test";

import { mediaType } from "./helpers/expect";

test.describe("SEO técnico", () => {
  test("robots.txt permite el rastreo y excluye el catálogo", async ({ request }) => {
    const response = await request.get("/robots.txt");
    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain("User-Agent: *");
    expect(text).toContain("Disallow: /catalog");
    expect(text).toContain("Sitemap: https://alexendros.dev/sitemap.xml");
  });

  test("sitemap.xml lista las seis rutas estáticas canónicas", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    expect(response.status()).toBe(200);
    expect(["application/xml", "text/xml"]).toContain(
      mediaType(response.headers()["content-type"] ?? null)
    );

    const text = await response.text();
    expect(text.includes("<urlset")).toBe(true);
    expect(text).not.toContain("/catalog");
    // /proyectos y /stack son redirecciones 308: no pueden aparecer en el sitemap.
    expect(text).not.toContain("alexendros.dev/proyectos");
    expect(text).not.toContain("alexendros.dev/stack");
    for (const path of [
      "/",
      "/servicios",
      "/sobre-mi",
      "/contacto",
      "/aviso-legal",
      "/privacidad",
    ]) {
      expect(text).toContain(`https://alexendros.dev${path}`);
    }
  });

  test("rutas P0 exponen title, description y canonical", async ({ page }) => {
    const routes = [
      { path: "/", titlePart: "Alexendros" },
      { path: "/servicios", titlePart: "Servicios" },
      { path: "/sobre-mi", titlePart: "Sobre mí" },
      { path: "/contacto", titlePart: "Contacto" },
      { path: "/aviso-legal", titlePart: "Aviso legal" },
      { path: "/privacidad", titlePart: "Privacidad" },
    ] as const;

    for (const route of routes) {
      await page.goto(route.path);
      await expect(page).toHaveTitle(new RegExp(route.titlePart, "i"));
      const description = page.locator('meta[name="description"]');
      const descriptionContent = await description.getAttribute("content");
      expect(descriptionContent && descriptionContent.length > 0).toBe(true);
      const canonical = page.locator('link[rel="canonical"]');
      const expected =
        route.path === "/" ? "https://alexendros.dev/" : `https://alexendros.dev${route.path}`;
      // home canonical may omit trailing slash depending on absoluteUrl
      const href = await canonical.getAttribute("href");
      expect(href?.replace(/\/$/, "")).toBe(expected.replace(/\/$/, ""));
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
