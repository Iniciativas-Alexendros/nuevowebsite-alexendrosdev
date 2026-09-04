import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CtaSection } from "@/components/domain/cta-section";
import { ProjectGrid } from "@/components/domain/project-grid";
import { StackGroup } from "@/components/domain/stack-group";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { Link } from "@/components/ui/link";
import { contactChannels } from "@/content/contact";
import { getPublishedProfile, getPublishedProjects, getPublishedTechnologies } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

const profile = getPublishedProfile();

const calendarHref =
  contactChannels.find((channel) => channel.type === "calendar" && channel.visible)?.href ??
  "https://cal.com/alexendros";

export const metadata: Metadata = buildPageMetadata({
  title: "Sobre mí",
  description: profile?.metadata.description,
  path: "/sobre-mi",
});

export default function SobreMiPage() {
  if (!profile) {
    notFound();
  }

  // Solo contenido published + visibility pública (getPublishedProjects filtra).
  const projects = getPublishedProjects();
  const technologies = getPublishedTechnologies();

  return (
    <>
      <PageHeader title="Sobre mí" description={profile.summary} />

      <Section aria-labelledby="presentacion">
        <Container className="flex max-w-3xl flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 id="presentacion" className="text-2xl font-semibold text-foreground">
              {profile.name}
            </h2>
            <p className="text-lg text-foreground-muted">{profile.title}</p>
            {profile.location ? (
              <p className="text-base text-foreground-muted">{profile.location}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-5">
            {profile.bio.map((paragraph, index) => (
              <p key={`bio-${index}`} className="text-lg leading-relaxed text-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          {profile.languages && profile.languages.length > 0 ? (
            <div className="flex flex-col gap-2 border-t border-border pt-8">
              <h3 className="text-lg font-semibold text-foreground">Idiomas</h3>
              <ul className="list-inside list-disc text-base text-foreground-muted">
                {profile.languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {profile.links && profile.links.length > 0 ? (
            <div className="flex flex-col gap-3 border-t border-border pt-8">
              <h3 className="text-lg font-semibold text-foreground">Enlaces</h3>
              <ul className="flex flex-wrap gap-4">
                {profile.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} variant="inline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </Section>

      <Section variant="surface" aria-labelledby="metodo">
        <Container className="flex max-w-3xl flex-col gap-6">
          <h2 id="metodo" className="text-2xl font-semibold text-foreground">
            Método de trabajo
          </h2>
          <ol className="flex list-decimal flex-col gap-3 pl-6 text-base leading-relaxed text-foreground">
            {profile.method.map((step) => (
              <li key={step.slice(0, 32)}>{step}</li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section id="proyectos" aria-labelledby="proyectos-heading">
        <Container className="flex flex-col gap-8">
          <div className="flex max-w-3xl flex-col gap-3">
            <h2 id="proyectos-heading" className="text-2xl font-semibold text-foreground">
              Proyectos seleccionados
            </h2>
            <p className="text-lg text-foreground-muted">
              Trabajo público y verificable: qué problema resolvía cada proyecto, con qué stack y
              qué resultado.
            </p>
          </div>
          <ProjectGrid projects={projects} />
        </Container>
      </Section>

      <Section
        id="stack"
        variant="sunken"
        aria-labelledby="stack-heading"
        className="py-12 lg:py-16"
      >
        <Container className="flex flex-col gap-8">
          <div className="flex max-w-3xl flex-col gap-3">
            <h2 id="stack-heading" className="text-2xl font-semibold text-foreground">
              Stack y herramientas
            </h2>
            <p className="text-lg text-foreground-muted">
              Tecnologías en uso real, agrupadas por función. Nombres en texto; sin autoevaluación
              numérica.
            </p>
          </div>
          <StackGroup technologies={technologies} deferBelowFold />
        </Container>
      </Section>

      <CtaSection
        headingId="contacto"
        title="¿Encaja con lo que buscas?"
        description="Escríbeme con el contexto del proyecto o reserva una llamada. Si no encajo, te lo digo en la primera conversación."
        cta={{ label: "Contactar", href: "/contacto" }}
        secondaryCta={{ label: "Agendar llamada", href: calendarHref }}
      />
    </>
  );
}
