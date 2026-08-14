import { afterEach, describe, expect, it, vi } from "vitest";

import { absoluteUrl, buildPageMetadata, siteMetadata, webSiteJsonLd } from "@/lib/seo";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe("absoluteUrl", () => {
  it("resuelve rutas relativas contra el dominio base", () => {
    expect(absoluteUrl("/servicios")).toBe("https://alexendros.dev/servicios");
  });

  it("normaliza rutas sin barra inicial", () => {
    expect(absoluteUrl("contacto")).toBe("https://alexendros.dev/contacto");
  });

  it("usa NEXT_PUBLIC_SITE_URL cuando está definida", async () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://preview.example.com");
    const mod = await import("@/lib/seo");
    expect(mod.absoluteUrl("/stack")).toBe("https://preview.example.com/stack");
  });
});

describe("siteMetadata", () => {
  it("define metadataBase, título por defecto y plantilla", () => {
    expect(siteMetadata.metadataBase).toEqual(new URL("https://alexendros.dev"));
    expect(siteMetadata.title).toEqual({
      default: "Alexendros",
      template: "%s — Alexendros",
    });
  });

  it("define description y openGraph base", () => {
    expect(siteMetadata.description).toBe("Sitio web de Alexendros.");
    expect(siteMetadata.openGraph?.siteName).toBe("Alexendros");
  });
});

describe("buildPageMetadata", () => {
  it("define título, canonical y openGraph a partir de la ruta", () => {
    const metadata = buildPageMetadata({
      title: "Servicios",
      path: "/servicios",
      description: "Servicios de Alexendros.",
    });

    expect(metadata.title).toBe("Servicios");
    expect(metadata.description).toBe("Servicios de Alexendros.");
    expect(metadata.alternates?.canonical).toBe("https://alexendros.dev/servicios");
    expect(metadata.openGraph?.url).toBe("https://alexendros.dev/servicios");
  });

  it("reutiliza la descripción por defecto cuando no se proporciona", () => {
    const metadata = buildPageMetadata({ title: "Stack", path: "/stack" });

    expect(metadata.description).toBe("Sitio web de Alexendros.");
    expect(metadata.alternates?.canonical).toBe("https://alexendros.dev/stack");
  });
});

describe("webSiteJsonLd", () => {
  it("expone los datos exactos del sitio", () => {
    expect(webSiteJsonLd).toEqual({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Alexendros",
      url: "https://alexendros.dev",
      description: "Sitio web de Alexendros.",
      inLanguage: "es",
    });
  });
});
