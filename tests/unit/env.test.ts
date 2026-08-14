import { afterEach, describe, expect, it, vi } from "vitest";

import {
  DEFAULT_CONTACT_RATE_LIMIT_MAX,
  EnvError,
  getContactEmailConfig,
  getSiteEnv,
  parsePort,
  parseRateLimit,
} from "@/lib/env";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("getSiteEnv", () => {
  it("devuelve las variables públicas cuando están definidas", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://alexendros.dev");
    vi.stubEnv("NEXT_PUBLIC_SITE_NAME", "Alexendros");

    expect(getSiteEnv()).toEqual({
      siteUrl: "https://alexendros.dev",
      siteName: "Alexendros",
    });
  });

  it("lanza EnvError si falta NEXT_PUBLIC_SITE_URL", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", undefined);
    vi.stubEnv("NEXT_PUBLIC_SITE_NAME", "Alexendros");

    expect(() => getSiteEnv()).toThrowError(EnvError);
    expect(() => getSiteEnv()).toThrowError(/NEXT_PUBLIC_SITE_URL/);
  });

  it("lanza EnvError si falta NEXT_PUBLIC_SITE_NAME", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://alexendros.dev");
    vi.stubEnv("NEXT_PUBLIC_SITE_NAME", undefined);

    expect(() => getSiteEnv()).toThrowError(/NEXT_PUBLIC_SITE_NAME/);
  });
});

describe("getContactEmailConfig", () => {
  const validSmtp = {
    CONTACT_TO_EMAIL: "hola@alexendros.dev",
    SMTP_HOST: "127.0.0.1",
    SMTP_PORT: "587",
    SMTP_USER: "usuario",
    SMTP_TOKEN: "token-secreto",
    EMAIL_FROM_ADDRESS: "hola@alexendros.dev",
  };

  it("devuelve null cuando el endpoint no está activo (sin CONTACT_TO_EMAIL)", () => {
    vi.stubEnv("CONTACT_TO_EMAIL", undefined);

    expect(getContactEmailConfig()).toBeNull();
  });

  it("devuelve la configuración completa cuando todas las variables están presentes", () => {
    for (const [key, value] of Object.entries(validSmtp)) {
      vi.stubEnv(key, value);
    }

    expect(getContactEmailConfig()).toEqual({
      toEmail: "hola@alexendros.dev",
      smtpHost: "127.0.0.1",
      smtpPort: 587,
      smtpUser: "usuario",
      smtpToken: "token-secreto",
      fromAddress: "hola@alexendros.dev",
      replyTo: null,
      rateLimitMax: DEFAULT_CONTACT_RATE_LIMIT_MAX,
    });
  });

  it("aplica EMAIL_REPLY_TO y CONTACT_RATE_LIMIT_MAX opcionales", () => {
    for (const [key, value] of Object.entries(validSmtp)) {
      vi.stubEnv(key, value);
    }
    vi.stubEnv("EMAIL_REPLY_TO", "contacto@alexendros.dev");
    vi.stubEnv("CONTACT_RATE_LIMIT_MAX", "10");

    const config = getContactEmailConfig();
    expect(config?.replyTo).toBe("contacto@alexendros.dev");
    expect(config?.rateLimitMax).toBe(10);
  });

  it("lanza EnvError listando las variables SMTP que faltan", () => {
    vi.stubEnv("CONTACT_TO_EMAIL", "hola@alexendros.dev");

    expect(() => getContactEmailConfig()).toThrowError(EnvError);
    expect(() => getContactEmailConfig()).toThrowError(/SMTP_HOST/);
    expect(() => getContactEmailConfig()).toThrowError(/SMTP_PORT/);
    expect(() => getContactEmailConfig()).toThrowError(/SMTP_USER/);
    expect(() => getContactEmailConfig()).toThrowError(/SMTP_TOKEN/);
    expect(() => getContactEmailConfig()).toThrowError(/EMAIL_FROM_ADDRESS/);
  });
});

describe("parsePort", () => {
  it("convierte un puerto válido a número", () => {
    expect(parsePort("587", "SMTP_PORT")).toBe(587);
  });

  it("lanza EnvError si el valor está vacío", () => {
    expect(() => parsePort(undefined, "SMTP_PORT")).toThrowError(EnvError);
    expect(() => parsePort("", "SMTP_PORT")).toThrowError(/obligatoria/);
  });

  it("lanza EnvError si el valor no es numérico o está fuera de rango", () => {
    expect(() => parsePort("abc", "SMTP_PORT")).toThrowError(/puerto válido/);
    expect(() => parsePort("0", "SMTP_PORT")).toThrowError(/puerto válido/);
    expect(() => parsePort("70000", "SMTP_PORT")).toThrowError(/puerto válido/);
  });
});

describe("parseRateLimit", () => {
  it("usa el valor por defecto cuando no se define", () => {
    expect(parseRateLimit(undefined)).toBe(DEFAULT_CONTACT_RATE_LIMIT_MAX);
    expect(parseRateLimit("")).toBe(DEFAULT_CONTACT_RATE_LIMIT_MAX);
  });

  it("convierte un valor válido a número", () => {
    expect(parseRateLimit("20")).toBe(20);
  });

  it("lanza EnvError si el valor no es un entero positivo", () => {
    expect(() => parseRateLimit("0")).toThrowError(EnvError);
    expect(() => parseRateLimit("-1")).toThrowError(EnvError);
    expect(() => parseRateLimit("2.5")).toThrowError(EnvError);
  });
});
