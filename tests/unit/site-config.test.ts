import { describe, expect, it } from "vitest";

import { siteConfig } from "@/content/site";

describe("siteConfig", () => {
  it("define idioma español", () => {
    expect(siteConfig.locale).toBe("es");
  });

  it("no duplica href en la navegación principal", () => {
    const hrefs = siteConfig.navigation.map((item) => item.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  it("incluye las rutas legales en la navegación del pie", () => {
    const hrefs = siteConfig.footerNavigation.map((item) => item.href);
    expect(hrefs).toContain("/aviso-legal");
    expect(hrefs).toContain("/privacidad");
  });
});
