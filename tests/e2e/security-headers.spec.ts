import { expect, test } from "@playwright/test";

import { CSP_VALUE, HSTS_VALUE } from "../../src/lib/security-headers";
import { P0_ROUTES } from "./helpers/axe";

test.describe("cabeceras de seguridad en runtime", () => {
  test("home envía CSP sin unsafe-eval y HSTS completo", async ({ request }) => {
    const response = await request.get("/");
    expect(response.status()).toBe(200);

    const csp = response.headers()["content-security-policy"] ?? "";
    expect(csp).toBe(CSP_VALUE);
    expect(csp).not.toContain("unsafe-eval");

    const hsts = response.headers()["strict-transport-security"] ?? "";
    expect(hsts).toBe(HSTS_VALUE);
  });

  test("no hay violaciones CSP de eval al cargar rutas P0", async ({ page }) => {
    const cspViolations: string[] = [];
    page.on("console", (msg) => {
      const text = msg.text();
      if (/content security policy|eval/i.test(text) && /violat/i.test(text)) {
        cspViolations.push(text);
      }
    });
    page.on("pageerror", (error) => {
      if (/eval/i.test(error.message)) {
        cspViolations.push(error.message);
      }
    });

    for (const path of P0_ROUTES) {
      await page.goto(path);
    }

    expect(cspViolations, JSON.stringify(cspViolations, null, 2)).toEqual([]);
  });
});
