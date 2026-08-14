import type { Metadata } from "next";

import { fontMono, fontSans } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Alexendros",
  description: "Sitio en construcción.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fontSans.variable} ${fontMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
