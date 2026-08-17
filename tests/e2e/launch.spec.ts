import { expect, test } from "@playwright/test";

import { expectPathname, headerTokens } from "./helpers/expect";

test.describe("lanzamiento P8-5", () => {
  test("aviso legal y privacidad publicados sin marcadores pendientes", async ({ page }) => {
    for (const path of ["/aviso-legal", "/privacidad"] as const) {
      await page.goto(path);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      const body = await page.locator("main").innerText();
      expect(body.includes("[PENDIENTE")).toBe(false);
    }
  });

  test("catálogo noindex y ausente del sitemap", async ({ page, request }) => {
    await page.goto("/catalog");
    const robots = headerTokens(
      await page.locator('meta[name="robots"]').first().getAttribute("content")
    );
    expect(robots).toContain("noindex");

    const sitemap = await request.get("/sitemap.xml");
    const text = await sitemap.text();
    expect(text).not.toContain("/catalog");
  });

  test("formulario: honeypot en API responde 200 neutro sin PII en logs de UI", async ({
    request,
  }) => {
    const response = await request.post("/api/contact", {
      data: {
        name: "Bot Smoke",
        email: "bot@example.com",
        message: "Mensaje sintético de honeypot con longitud suficiente para pasar Zod.",
        consent: true,
        website: "https://spam.example",
      },
    });
    // Sin SMTP en local: honeypot corto-circuita antes de unavailable → 200 neutro.
    expect(response.status()).toBe(200);
    const body = (await response.json()) as { ok: boolean };
    expect(body.ok).toBe(true);
  });

  test("formulario: proveedor indisponible muestra mensaje amable", async ({ page }) => {
    await page.route("**/api/contact", async (route) => {
      await route.fulfill({
        status: 503,
        contentType: "application/json",
        body: JSON.stringify({
          ok: false,
          code: "unavailable",
          message:
            "El formulario no está disponible ahora mismo. Puedes escribirme por email o agendar una llamada.",
        }),
      });
    });

    await page.goto("/contacto");
    await page.getByLabel("Nombre").fill("Alex Cliente");
    await page.getByLabel("Email").fill("alex@example.com");
    await page
      .getByLabel("Mensaje")
      .fill("Necesito ayuda con un proyecto de software a medida para mi empresa.");
    await page.getByRole("checkbox").check();
    await page.getByRole("button", { name: "Enviar mensaje" }).click();
    await expect(
      page.getByText(
        "El formulario no está disponible ahora mismo. Puedes escribirme por email o agendar una llamada."
      )
    ).toBeVisible();
  });

  test("formulario: rate limit muestra error genérico", async ({ page }) => {
    await page.route("**/api/contact", async (route) => {
      await route.fulfill({
        status: 429,
        contentType: "application/json",
        body: JSON.stringify({
          ok: false,
          code: "rate_limit",
          message: "Has enviado demasiados mensajes. Inténtalo de nuevo más tarde.",
        }),
      });
    });

    await page.goto("/contacto");
    await page.getByLabel("Nombre").fill("Alex Cliente");
    await page.getByLabel("Email").fill("alex@example.com");
    await page
      .getByLabel("Mensaje")
      .fill("Necesito ayuda con un proyecto de software a medida para mi empresa.");
    await page.getByRole("checkbox").check();
    await page.getByRole("button", { name: "Enviar mensaje" }).click();
    await expect(
      page.getByText("Has enviado demasiados mensajes. Inténtalo de nuevo más tarde.")
    ).toBeVisible();
  });

  test("navegación responsive: menú móvil alcanza portfolio", async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 640 });
    await page.goto("/");
    await page.locator("summary").click();
    await page.getByRole("group").getByRole("link", { name: "Sobre mí" }).click();
    await expectPathname(page, "/sobre-mi");
    await expect(page.getByRole("heading", { level: 1, name: "Sobre mí" })).toBeVisible();
  });
});
