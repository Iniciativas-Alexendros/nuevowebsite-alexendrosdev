import type { Metadata } from "next";

import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: siteConfig.defaultTitle },
  description: siteConfig.defaultDescription,
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

export default function Home() {
  return (
    <>
      <h1>Sitio en construcción</h1>
      <p>Alexendros</p>
    </>
  );
}
