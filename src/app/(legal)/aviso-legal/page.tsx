import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Aviso legal",
  path: "/aviso-legal",
});

export default function AvisoLegalPage() {
  return <PageHeader title="Aviso legal" />;
}
