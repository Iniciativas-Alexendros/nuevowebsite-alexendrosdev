import { expect, test } from "@playwright/test";

import { CONTACT_SUBJECTS } from "../../src/content/contact-subjects";

test.describe("contacto", () => {
  test("muestra canales, formulario y enlace a privacidad", async ({ page }) => {
    await page.goto("/contacto");

    await expect(page.getByRole("heading", { level: 1, name: "Contacto" })).toBeVisible();
    await expect(page.getByRole("link", { name: /Agendar una llamada/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /política de privacidad/i }).first()).toBeVisible();
    await expect(page.getByLabel("Nombre")).toBeVisible();
    await expect(page.getByRole("button", { name: "Enviar mensaje" })).toBeVisible();
  });

  test("valida en cliente antes de enviar", async ({ page }) => {
    await page.goto("/contacto");

    await page.getByRole("button", { name: "Enviar mensaje" }).click();

    await expect(
      page.getByRole("alert").filter({ hasText: "Revisa los campos del formulario." })
    ).toBeVisible();
    await expect(page.getByText("El nombre debe tener al menos 2 caracteres.")).toBeVisible();
  });

  test("envía con éxito cuando la API responde ok", async ({ page }) => {
    await page.route("**/api/contact", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          ok: true,
          message: "Mensaje enviado. Te responderé lo antes posible.",
        }),
      });
    });

    await page.goto("/contacto");

    await page.getByLabel("Nombre").fill("Alex Cliente");
    await page.getByLabel("Email").fill("alex@example.com");
    await page.getByLabel("Asunto o tipo de consulta").selectOption(CONTACT_SUBJECTS[0]);
    await page
      .getByLabel("Mensaje")
      .fill("Necesito ayuda con un proyecto de software a medida para mi empresa.");
    await page.getByRole("checkbox").check();
    await page.getByRole("button", { name: "Enviar mensaje" }).click();

    await expect(page.getByRole("status").filter({ hasText: "Mensaje enviado" })).toBeVisible();
  });

  test("muestra error claro ante fallo del proveedor", async ({ page }) => {
    await page.route("**/api/contact", async (route) => {
      await route.fulfill({
        status: 502,
        contentType: "application/json",
        body: JSON.stringify({
          ok: false,
          code: "provider",
          message:
            "No he podido enviar el mensaje. Inténtalo de nuevo o usa otro canal de contacto.",
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

    await expect(page.getByText(/No he podido enviar el mensaje/i)).toBeVisible();
  });
});
