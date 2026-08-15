import type { Metadata } from "next";

import { CtaSection } from "@/components/domain/cta-section";
import { ServiceList } from "@/components/domain/service-list";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { getPublishedServices } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Servicios",
  description:
    "Desarrollo web a medida, landing pages, automatización con IA y auditoría técnica. Alcance claro, sin precios ni plazos inventados.",
  path: "/servicios",
});

export default function ServiciosPage() {
  const services = getPublishedServices();

  return (
    <>
      <PageHeader
        title="Servicios"
        description="Cuatro líneas de trabajo con alcance explícito. Sin precios, plazos ni garantías no confirmados."
      />
      <Section>
        <Container>
          <ServiceList services={services} />
        </Container>
      </Section>
      <CtaSection
        title="¿Encaja con lo que buscas?"
        description="Escríbeme con el contexto del proyecto. Si no encajo, te lo digo en la primera conversación."
        cta={{ label: "Contactar", href: "/contacto" }}
      />
    </>
  );
}
