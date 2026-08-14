import { describe, expect, it } from "vitest";

import robots from "@/app/robots";

describe("robots", () => {
  it("permite el rastreo y excluye el catálogo", () => {
    const result = robots();

    expect(result.rules).toEqual({
      userAgent: "*",
      allow: "/",
      disallow: ["/catalog"],
    });
  });

  it("referencia el sitemap con la URL del sitio", () => {
    const result = robots();

    expect(result.sitemap).toBe("https://alexendros.dev/sitemap.xml");
  });
});
