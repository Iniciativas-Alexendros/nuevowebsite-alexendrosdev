import { describe, expect, it, vi } from "vitest";

vi.mock("@/content/site", () => ({
  siteConfig: {
    siteUrl: "https://alexendros.dev",
    navigation: [
      { label: "Servicios", href: "/servicios" },
      { label: "Proyectos", href: "/proyectos" },
      { label: "Stack", href: "/stack" },
      { label: "Sobre mí", href: "/sobre-mi" },
      { label: "Contacto", href: "/contacto" },
    ],
    footerNavigation: [
      { label: "Aviso legal", href: "/aviso-legal" },
      { label: "Privacidad", href: "/privacidad" },
    ],
  },
}));

vi.mock("@/lib/content", () => ({
  getPublishedServices: () => [
    { slug: "desarrollo-web" },
    { slug: "landing-pages" },
    { slug: "automatizacion-ia" },
    { slug: "auditoria-web" },
  ],
  getPublishedProjects: () => [
    { slug: "front-valencia" },
    { slug: "graficas-nasve" },
    { slug: "vcf-cribador" },
    { slug: "alexendros-me" },
  ],
}));

import sitemap from "@/app/sitemap";

describe("sitemap", () => {
  it("genera rutas estáticas + servicios publicados + proyectos publicados", () => {
    const entries = sitemap();

    expect(entries).toHaveLength(16);
    const urls = entries.map((entry) => entry.url);
    expect(urls).toContain("https://alexendros.dev/");
    expect(urls).toContain("https://alexendros.dev/servicios");
    expect(urls).toContain("https://alexendros.dev/proyectos");
    expect(urls).toContain("https://alexendros.dev/stack");
    expect(urls).toContain("https://alexendros.dev/sobre-mi");
    expect(urls).toContain("https://alexendros.dev/contacto");
    expect(urls).toContain("https://alexendros.dev/aviso-legal");
    expect(urls).toContain("https://alexendros.dev/privacidad");
    expect(urls).toContain("https://alexendros.dev/servicios/desarrollo-web");
    expect(urls).toContain("https://alexendros.dev/servicios/landing-pages");
    expect(urls).toContain("https://alexendros.dev/servicios/automatizacion-ia");
    expect(urls).toContain("https://alexendros.dev/servicios/auditoria-web");
    expect(urls).toContain("https://alexendros.dev/proyectos/front-valencia");
    expect(urls).toContain("https://alexendros.dev/proyectos/graficas-nasve");
    expect(urls).toContain("https://alexendros.dev/proyectos/vcf-cribador");
    expect(urls).toContain("https://alexendros.dev/proyectos/alexendros-me");
  });

  it("asigna prioridad 1 solo a la raíz, 0.9 a servicios y proyectos, 0.8 al resto", () => {
    const entries = sitemap();
    const entryMap = Object.fromEntries(entries.map((e) => [e.url, e.priority]));

    expect(entryMap["https://alexendros.dev/"]).toBe(1);
    expect(entryMap["https://alexendros.dev/servicios/desarrollo-web"]).toBe(0.9);
    expect(entryMap["https://alexendros.dev/proyectos/front-valencia"]).toBe(0.9);
    expect(entryMap["https://alexendros.dev/servicios"]).toBe(0.8);
    expect(entryMap["https://alexendros.dev/proyectos"]).toBe(0.8);
    expect(entryMap["https://alexendros.dev/stack"]).toBe(0.8);
    expect(entryMap["https://alexendros.dev/sobre-mi"]).toBe(0.8);
    expect(entryMap["https://alexendros.dev/contacto"]).toBe(0.8);
    expect(entryMap["https://alexendros.dev/aviso-legal"]).toBe(0.8);
    expect(entryMap["https://alexendros.dev/privacidad"]).toBe(0.8);
  });

  it("no incluye borradores (status !== 'published') ni proyectos no públicos", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(urls).not.toContain("https://alexendros.dev/servicios/servicio-en-borrador");
    expect(urls).not.toContain("https://alexendros.dev/proyectos/proyecto-en-borrador");
  });
});
