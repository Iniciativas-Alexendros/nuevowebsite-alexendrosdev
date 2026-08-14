import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacidad",
  path: "/privacidad",
});

export default function PrivacidadPage() {
  return <PageHeader title="Privacidad" />;
}
