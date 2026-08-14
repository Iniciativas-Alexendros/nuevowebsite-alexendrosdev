import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Servicios",
  path: "/servicios",
});

export default function ServiciosPage() {
  return <PageHeader title="Servicios" />;
}
