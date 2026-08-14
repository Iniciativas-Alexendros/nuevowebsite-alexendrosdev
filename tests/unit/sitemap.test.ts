import { describe, expect, it } from "vitest";

import sitemap from "@/app/sitemap";
import { siteConfig } from "@/content/site";

describe("sitemap", () => {
  it("genera las ocho rutas estáticas con su URL absoluta", () => {
    const entries = sitemap();

    expect(entries).toHaveLength(8);
    expect(entries.map((entry) => entry.url)).toEqual([
      `${siteConfig.siteUrl}/`,
      `${siteConfig.siteUrl}/servicios`,
      `${siteConfig.siteUrl}/proyectos`,
      `${siteConfig.siteUrl}/stack`,
      `${siteConfig.siteUrl}/sobre-mi`,
      `${siteConfig.siteUrl}/contacto`,
      `${siteConfig.siteUrl}/aviso-legal`,
      `${siteConfig.siteUrl}/privacidad`,
    ]);
  });

  it("asigna prioridad 1 solo a la raíz", () => {
    const entries = sitemap();

    expect(entries[0].priority).toBe(1);
    for (const entry of entries.slice(1)) {
      expect(entry.priority).toBe(0.8);
    }
  });
});
