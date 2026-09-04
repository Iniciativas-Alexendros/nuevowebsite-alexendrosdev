import type { Metadata } from "next";

import { CtaSection } from "@/components/domain/cta-section";
import { ProjectGrid } from "@/components/domain/project-grid";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { contactChannels } from "@/content/contact";
import { getPublishedProjects } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Proyectos",
  description:
    "Cuatro proyectos públicos: FRONT Valencia, Gráficas Nasve, vcf-cribador y alexendros.me. Evidencia técnica sin casos de estudio MDX en el MVP.",
  path: "/proyectos",
});

const calendarHref =
  contactChannels.find((channel) => channel.type === "calendar" && channel.visible)?.href ??
  "https://cal.com/alexendros";

export default function ProyectosPage() {
  const projects = getPublishedProjects();

  return (
    <>
      <PageHeader
        title="Proyectos"
        description="Evidencia práctica de trabajo, tecnologías y resultados. Enlaces a webs o repositorios públicos; sin filtros en el MVP."
      />
      <Section>
        <Container>
          <ProjectGrid projects={projects} />
        </Container>
      </Section>
      <CtaSection
        title="¿Encaja con lo que buscas?"
        description="Escríbeme con el contexto del proyecto o reserva una llamada. Si no encajo, te lo digo en la primera conversación."
        cta={{ label: "Contactar", href: "/contacto" }}
        secondaryCta={{ label: "Agendar llamada", href: calendarHref }}
      />
    </>
  );
}
