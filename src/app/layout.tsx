import type { Metadata } from "next";

import { fontMono, fontSans } from "@/lib/fonts";
import { siteMetadata, webSiteJsonLd } from "@/lib/seo";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";

import "./globals.css";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fontSans.variable} ${fontMono.variable}`}>
      <body>
        <SkipLink />
        <SiteHeader />
        <main id="contenido-principal">{children}</main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </body>
    </html>
  );
}
