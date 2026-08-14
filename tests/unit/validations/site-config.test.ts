import { describe, expect, it } from "vitest";

import {
  navigationItemSchema,
  personSchema,
  siteConfigSchema,
  socialLinkSchema,
} from "@/lib/validations/content";

const validSiteConfig = {
  siteName: "Alexendros.Dev",
  siteUrl: "https://alexendros.dev",
  defaultTitle: "Alexendros — Desarrollo web",
  defaultDescription: "Servicios de desarrollo web y consultoría.",
  locale: "es",
  ogLocale: "es_ES",
  defaultOpenGraphImage: "/og/default.png",
  navigation: [{ label: "Inicio", href: "/" }],
};

describe("navigationItemSchema", () => {
  it("acepta un item de navegación válido", () => {
    expect(navigationItemSchema.safeParse({ label: "Servicios", href: "/servicios" }).success).toBe(
      true
    );
  });

  it("acepta external opcional", () => {
    expect(
      navigationItemSchema.safeParse({
        label: "Blog",
        href: "https://blog.example.com",
        external: true,
      }).success
    ).toBe(true);
  });

  it("rechaza label ausente", () => {
    expect(navigationItemSchema.safeParse({ href: "/" }).success).toBe(false);
  });

  it("rechaza label vacío", () => {
    expect(navigationItemSchema.safeParse({ label: "", href: "/" }).success).toBe(false);
  });

  it("rechaza label de más de 40 caracteres", () => {
    expect(
      navigationItemSchema.safeParse({
        label: "l".repeat(41),
        href: "/",
      }).success
    ).toBe(false);
  });

  it("rechaza external no booleano", () => {
    expect(
      navigationItemSchema.safeParse({
        label: "Blog",
        href: "/",
        external: "si",
      }).success
    ).toBe(false);
  });
});

describe("socialLinkSchema", () => {
  it("acepta un enlace social válido", () => {
    expect(
      socialLinkSchema.safeParse({
        label: "GitHub",
        href: "https://github.com/alexendros",
      }).success
    ).toBe(true);
  });

  it("rechaza href que no es una URL", () => {
    expect(socialLinkSchema.safeParse({ label: "GitHub", href: "no-es-url" }).success).toBe(false);
  });

  it("rechaza href ausente", () => {
    expect(socialLinkSchema.safeParse({ label: "GitHub" }).success).toBe(false);
  });

  it("rechaza label vacío", () => {
    expect(socialLinkSchema.safeParse({ label: "", href: "https://example.com" }).success).toBe(
      false
    );
  });
});

describe("personSchema", () => {
  it("acepta una persona válida", () => {
    expect(
      personSchema.safeParse({
        name: "Alexendros",
        role: "Desarrollador",
        url: "https://alexendros.dev",
      }).success
    ).toBe(true);
  });

  it("acepta role y url opcionales omitidos", () => {
    expect(personSchema.safeParse({ name: "Alexendros" }).success).toBe(true);
  });

  it("rechaza name vacío", () => {
    expect(personSchema.safeParse({ name: "", role: "Dev" }).success).toBe(false);
  });

  it("rechaza url que no es una URL", () => {
    expect(personSchema.safeParse({ name: "Alexendros", url: "no-es-url" }).success).toBe(false);
  });
});

describe("siteConfigSchema", () => {
  it("acepta una configuración completa válida", () => {
    const result = siteConfigSchema.safeParse(validSiteConfig);
    expect(result.success).toBe(true);
  });

  it("rellena footerNavigation y socialLinks con default cuando se omiten", () => {
    const result = siteConfigSchema.safeParse(validSiteConfig);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.footerNavigation).toEqual([]);
      expect(result.data.socialLinks).toEqual([]);
    }
  });

  it("rechaza siteUrl que no es una URL", () => {
    expect(
      siteConfigSchema.safeParse({
        ...validSiteConfig,
        siteUrl: "no-es-url",
      }).success
    ).toBe(false);
  });

  it("rechaza navigation vacío", () => {
    expect(
      siteConfigSchema.safeParse({
        ...validSiteConfig,
        navigation: [],
      }).success
    ).toBe(false);
  });

  it("rechaza siteName vacío", () => {
    expect(siteConfigSchema.safeParse({ ...validSiteConfig, siteName: "" }).success).toBe(false);
  });

  it("rechaza defaultDescription de más de 200 caracteres", () => {
    expect(
      siteConfigSchema.safeParse({
        ...validSiteConfig,
        defaultDescription: "d".repeat(201),
      }).success
    ).toBe(false);
  });

  it("rechaza ogLocale ausente", () => {
    const { ogLocale: _omitted, ...rest } = validSiteConfig;
    void _omitted;
    expect(siteConfigSchema.safeParse(rest).success).toBe(false);
  });

  it("rechaza defaultOpenGraphImage vacío", () => {
    expect(
      siteConfigSchema.safeParse({
        ...validSiteConfig,
        defaultOpenGraphImage: "",
      }).success
    ).toBe(false);
  });

  it("acepta person opcional", () => {
    expect(
      siteConfigSchema.safeParse({
        ...validSiteConfig,
        person: { name: "Alexendros", role: "Dev" },
      }).success
    ).toBe(true);
  });
});
