import { describe, expect, it, vi } from "vitest";

vi.mock("@/content/site", () => ({
  siteConfig: {
    siteUrl: "https://alexendros.dev",
    navigation: [
      { label: "Servicios", href: "/servicios" },
      { label: "Sobre mí", href: "/sobre-mi" },
      { label: "Contacto", href: "/contacto" },
    ],
    footerNavigation: [
      { label: "Aviso legal", href: "/aviso-legal" },
      { label: "Privacidad", href: "/privacidad" },
    ],
  },
}));

import sitemap from "@/app/sitemap";

describe("sitemap", () => {
  it("genera solo las 6 rutas estáticas P0", () => {
    const entries = sitemap();

    expect(entries).toHaveLength(6);
    const urls = entries.map((entry) => entry.url);
    expect(urls).toContain("https://alexendros.dev/");
    expect(urls).toContain("https://alexendros.dev/servicios");
    expect(urls).toContain("https://alexendros.dev/sobre-mi");
    expect(urls).toContain("https://alexendros.dev/contacto");
    expect(urls).toContain("https://alexendros.dev/aviso-legal");
    expect(urls).toContain("https://alexendros.dev/privacidad");
  });

  it("no emite las rutas heredadas /proyectos ni /stack (redirecciones 308)", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(urls.some((url) => /\/proyectos/.test(url))).toBe(false);
    expect(urls.some((url) => /\/stack/.test(url))).toBe(false);
  });

  it("no emite rutas [slug] de servicios ni proyectos (P1)", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(urls.some((url) => /\/servicios\/.+/.test(url))).toBe(false);
  });

  it("asigna prioridad 1 solo a la raíz y 0.8 al resto", () => {
    const entries = sitemap();
    const entryMap = Object.fromEntries(entries.map((e) => [e.url, e.priority]));

    expect(entryMap["https://alexendros.dev/"]).toBe(1);
    expect(entryMap["https://alexendros.dev/servicios"]).toBe(0.8);
    expect(entryMap["https://alexendros.dev/sobre-mi"]).toBe(0.8);
    expect(entryMap["https://alexendros.dev/contacto"]).toBe(0.8);
    expect(entryMap["https://alexendros.dev/aviso-legal"]).toBe(0.8);
    expect(entryMap["https://alexendros.dev/privacidad"]).toBe(0.8);
  });
});
