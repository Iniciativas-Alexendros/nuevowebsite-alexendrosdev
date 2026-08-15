import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalDocumentView } from "@/components/domain/legal-document-view";
import { getLegalDocumentBySlug } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

const SLUG = "privacidad";

export function generateMetadata(): Metadata {
  const document = getLegalDocumentBySlug(SLUG);
  if (!document) {
    return buildPageMetadata({ title: "Privacidad", path: "/privacidad" });
  }
  return buildPageMetadata({
    title: document.metadata.title,
    description: document.metadata.description,
    path: "/privacidad",
  });
}

export default function PrivacidadPage() {
  const document = getLegalDocumentBySlug(SLUG);
  if (!document) {
    notFound();
  }
  return <LegalDocumentView document={document} />;
}
