export type SiteEnv = {
  readonly siteUrl: string;
  readonly siteName: string;
};

export type ContactEmailConfig = {
  readonly toEmail: string;
  readonly smtpHost: string;
  readonly smtpPort: number;
  readonly smtpUser: string;
  readonly smtpToken: string;
  readonly fromAddress: string;
  readonly replyTo: string | null;
  readonly rateLimitMax: number;
};

export const DEFAULT_CONTACT_RATE_LIMIT_MAX = 5;

export class EnvError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EnvError";
  }
}

export function parsePort(value: string | undefined, variable: string): number {
  if (!value) {
    throw new EnvError(`${variable} es obligatoria cuando el endpoint de contacto está activo.`);
  }

  const port = Number(value);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new EnvError(`${variable} debe ser un puerto válido (1-65535). Recibido: "${value}".`);
  }

  return port;
}

export function parseRateLimit(value: string | undefined): number {
  if (!value) {
    return DEFAULT_CONTACT_RATE_LIMIT_MAX;
  }

  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < 1) {
    throw new EnvError(`CONTACT_RATE_LIMIT_MAX debe ser un entero positivo. Recibido: "${value}".`);
  }

  return parsed;
}

export function getSiteEnv(): SiteEnv {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME;

  if (!siteUrl) {
    throw new EnvError("NEXT_PUBLIC_SITE_URL es obligatoria (ARCHITECTURE §9.2).");
  }

  if (!siteName) {
    throw new EnvError("NEXT_PUBLIC_SITE_NAME es obligatoria (ARCHITECTURE §9.2).");
  }

  return { siteUrl, siteName };
}

export function getContactEmailConfig(): ContactEmailConfig | null {
  const env = process.env;
  const toEmail = env.CONTACT_TO_EMAIL;

  if (!toEmail) {
    return null;
  }

  const smtpHost = env.SMTP_HOST;
  const smtpPortRaw = env.SMTP_PORT;
  const smtpUser = env.SMTP_USER;
  const smtpToken = env.SMTP_TOKEN;
  const fromAddress = env.EMAIL_FROM_ADDRESS;

  if (!smtpHost || !smtpPortRaw || !smtpUser || !smtpToken || !fromAddress) {
    const missing: string[] = [];
    if (!smtpHost) missing.push("SMTP_HOST");
    if (!smtpPortRaw) missing.push("SMTP_PORT");
    if (!smtpUser) missing.push("SMTP_USER");
    if (!smtpToken) missing.push("SMTP_TOKEN");
    if (!fromAddress) missing.push("EMAIL_FROM_ADDRESS");

    throw new EnvError(
      `Endpoint de contacto activo (CONTACT_TO_EMAIL definido) pero faltan variables SMTP: ${missing.join(", ")}.`
    );
  }

  return {
    toEmail,
    smtpHost,
    smtpPort: parsePort(smtpPortRaw, "SMTP_PORT"),
    smtpUser,
    smtpToken,
    fromAddress,
    replyTo: env.EMAIL_REPLY_TO || null,
    rateLimitMax: parseRateLimit(env.CONTACT_RATE_LIMIT_MAX),
  };
}
