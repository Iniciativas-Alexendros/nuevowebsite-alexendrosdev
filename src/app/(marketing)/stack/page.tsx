import type { Metadata } from "next";

import { StackGroup } from "@/components/domain/stack-group";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { getPublishedTechnologies } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Stack",
  description:
    "Tecnologías y herramientas en uso real: lenguajes, frameworks, CMS, estilos y tooling. Sin porcentajes ni niveles subjetivos.",
  path: "/stack",
});

export default function StackPage() {
  const technologies = getPublishedTechnologies();

  return (
    <>
      {/* Padding acotado: el h1 es LCP en lab móvil; py-16/24 empujaba pintura (OBJ-005). */}
      <PageHeader
        className="py-12 lg:py-16"
        title="Stack"
        description="Contexto de uso por categoría. Nombres en texto; sin autoevaluación numérica."
      />
      <Section className="py-8 lg:py-12">
        <Container>
          <StackGroup technologies={technologies} deferBelowFold />
        </Container>
      </Section>
    </>
  );
}
