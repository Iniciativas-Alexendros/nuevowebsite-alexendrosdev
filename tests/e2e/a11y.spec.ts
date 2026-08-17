import { test } from "@playwright/test";

import { assertNoBlockingAxe, P0_ROUTES } from "./helpers/axe";

test.describe("accesibilidad axe-core P0 (OBJ-006)", () => {
  for (const path of P0_ROUTES) {
    test(`${path} sin violaciones críticas o serias`, async ({ page }) => {
      await page.goto(path);
      await assertNoBlockingAxe(page);
    });
  }
});
