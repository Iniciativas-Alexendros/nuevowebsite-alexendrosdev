import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Stack",
  path: "/stack",
});

export default function StackPage() {
  return <PageHeader title="Stack" />;
}
