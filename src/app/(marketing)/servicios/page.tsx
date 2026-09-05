import type { Metadata } from "next";

import { CtaSection } from "@/components/domain/cta-section";
import { ServiceSection } from "@/components/domain/service-section";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { contactChannels } from "@/content/contact";
import { getPublishedServices } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Servicios",
  description:
    "Producción de sitios web, auditorías técnicas y consultoría tecnológica. Alcance claro, sin precios ni plazos inventados.",
  path: "/servicios",
});

const calendarHref =
  contactChannels.find((channel) => channel.type === "calendar" && channel.visible)?.href ??
  "https://cal.com/alexendros";

export default function ServiciosPage() {
  const services = getPublishedServices();

  return (
    <>
      <PageHeader
        kicker="~/servicios"
        title="Servicios"
        description="Tres líneas de trabajo con alcance, entregables y exclusiones explícitas. Sin precios, plazos ni garantías no confirmados."
      />
      <Section>
        <Container>
          {services.map((service, index) => (
            <ServiceSection key={service.id} service={service} index={index} />
          ))}
        </Container>
      </Section>
      <CtaSection
        title="¿Encaja con lo que buscas?"
        description="Escríbeme con el contexto del proyecto o reserva una llamada de discovery. Si no encajo, te lo digo en la primera conversación."
        cta={{ label: "Contactar", href: "/contacto" }}
        secondaryCta={{ label: "Agendar llamada", href: calendarHref }}
      />
    </>
  );
}
