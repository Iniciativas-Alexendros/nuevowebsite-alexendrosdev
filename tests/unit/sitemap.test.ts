import { describe, expect, it } from "vitest";

import sitemap from "@/app/sitemap";

describe("sitemap", () => {
  it("genera las ocho rutas estáticas con su URL absoluta", () => {
    const entries = sitemap();

    expect(entries).toHaveLength(8);
    expect(entries.map((entry) => entry.url)).toEqual([
      "https://alexendros.dev/",
      "https://alexendros.dev/servicios",
      "https://alexendros.dev/proyectos",
      "https://alexendros.dev/stack",
      "https://alexendros.dev/sobre-mi",
      "https://alexendros.dev/contacto",
      "https://alexendros.dev/aviso-legal",
      "https://alexendros.dev/privacidad",
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
