import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalDocumentView } from "@/components/domain/legal-document-view";
import { getLegalDocumentBySlug } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

const SLUG = "aviso-legal";

export function generateMetadata(): Metadata {
  const document = getLegalDocumentBySlug(SLUG);
  if (!document) {
    return buildPageMetadata({ title: "Aviso legal", path: "/aviso-legal" });
  }
  return buildPageMetadata({
    title: document.metadata.title,
    description: document.metadata.description,
    path: "/aviso-legal",
  });
}

export default function AvisoLegalPage() {
  const document = getLegalDocumentBySlug(SLUG);
  if (!document) {
    notFound();
  }
  return <LegalDocumentView document={document} />;
}
