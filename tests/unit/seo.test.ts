import { afterEach, describe, expect, it, vi } from "vitest";

import { absoluteUrl, buildPageMetadata, siteMetadata, webSiteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/content/site";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe("absoluteUrl", () => {
  it("resuelve rutas relativas contra el dominio base", () => {
    expect(absoluteUrl("/servicios")).toBe(`${siteConfig.siteUrl}/servicios`);
  });

  it("normaliza rutas sin barra inicial", () => {
    expect(absoluteUrl("contacto")).toBe(`${siteConfig.siteUrl}/contacto`);
  });

  it("usa NEXT_PUBLIC_SITE_URL cuando está definida", async () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://preview.example.com");
    const mod = await import("@/lib/seo");
    expect(mod.absoluteUrl("/stack")).toBe("https://preview.example.com/stack");
  });
});

describe("siteMetadata", () => {
  it("define metadataBase, título por defecto y plantilla", () => {
    expect(siteMetadata.metadataBase).toEqual(new URL(siteConfig.siteUrl));
    expect(siteMetadata.title).toEqual({
      default: "Alexendros",
      template: "%s — Alexendros",
    });
  });

  it("define description y openGraph base", () => {
    expect(siteMetadata.description).toBe("Sitio web de Alexendros.");
    expect(siteMetadata.openGraph?.siteName).toBe("Alexendros");
    expect(siteMetadata.openGraph?.locale).toBe(siteConfig.ogLocale);
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
    expect(metadata.alternates?.canonical).toBe(`${siteConfig.siteUrl}/servicios`);
    expect(metadata.openGraph?.url).toBe(`${siteConfig.siteUrl}/servicios`);
    expect(metadata.openGraph?.locale).toBe(siteConfig.ogLocale);
  });

  it("reutiliza la descripción por defecto cuando no se proporciona", () => {
    const metadata = buildPageMetadata({ title: "Stack", path: "/stack" });

    expect(metadata.description).toBe("Sitio web de Alexendros.");
    expect(metadata.alternates?.canonical).toBe(`${siteConfig.siteUrl}/stack`);
  });
});

describe("webSiteJsonLd", () => {
  it("expone los datos exactos del sitio", () => {
    expect(webSiteJsonLd).toEqual({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Alexendros",
      url: siteConfig.siteUrl,
      description: "Sitio web de Alexendros.",
      inLanguage: "es",
    });
  });
});
