import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
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
  return <PageHeader title="Sitio en construcción" description="Alexendros" />;
}
