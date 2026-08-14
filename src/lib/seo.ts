import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

export function resolveSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || siteConfig.siteUrl;
}

export const siteUrl = resolveSiteUrl();

export function absoluteUrl(path: string): string {
  const base = siteUrl.replace(/\/+$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s — ${siteConfig.siteName}`,
  },
  description: siteConfig.defaultDescription,
  applicationName: siteConfig.siteName,
  openGraph: {
    type: "website",
    siteName: siteConfig.siteName,
    locale: siteConfig.locale,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: siteUrl,
  },
  twitter: {
    card: "summary",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
};

export interface WebSiteJsonLd {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  inLanguage: string;
}

export const webSiteJsonLd: WebSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.siteName,
  url: siteConfig.siteUrl,
  description: siteConfig.defaultDescription,
  inLanguage: siteConfig.locale,
};
