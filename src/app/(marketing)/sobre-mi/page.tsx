import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Sobre mí",
  path: "/sobre-mi",
});

export default function SobreMiPage() {
  return <PageHeader title="Sobre mí" />;
}
