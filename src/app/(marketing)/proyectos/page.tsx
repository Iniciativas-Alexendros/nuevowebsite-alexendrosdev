import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Proyectos",
  path: "/proyectos",
});

export default function ProyectosPage() {
  return <PageHeader title="Proyectos" />;
}
