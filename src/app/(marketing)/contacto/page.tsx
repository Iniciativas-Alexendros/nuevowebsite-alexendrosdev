import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contacto",
  path: "/contacto",
});

export default function ContactoPage() {
  return <PageHeader title="Contacto" />;
}
