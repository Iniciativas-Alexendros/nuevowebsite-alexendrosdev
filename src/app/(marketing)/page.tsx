import type { Metadata } from "next";

import { CtaSection } from "@/components/domain/cta-section";
import { FeaturedProjects } from "@/components/domain/featured-projects";
import { FeaturedStack } from "@/components/domain/featured-stack";
import { Hero } from "@/components/domain/hero";
import { ServiceList } from "@/components/domain/service-list";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Link } from "@/components/ui/link";
import { siteConfig } from "@/content/site";
import {
  getFeaturedProjects,
  getFeaturedServices,
  getFeaturedTechnologies,
  getPublishedProfile,
} from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: siteConfig.defaultTitle },
  description: siteConfig.defaultDescription,
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

const HOME_STACK_LIMIT = 8;

export default function Home() {
  const profile = getPublishedProfile();
  const featuredServices = getFeaturedServices();
  const featuredProjects = getFeaturedProjects();
  const featuredStack = getFeaturedTechnologies().slice(0, HOME_STACK_LIMIT);

  const heroTitle = siteConfig.defaultTitle.includes("—")
    ? siteConfig.defaultTitle.split("—")[1]!.trim()
    : (profile?.title ?? siteConfig.defaultTitle);
  const heroDescription = (() => {
    const summary = profile?.summary;
    if (!summary) return siteConfig.defaultDescription;
    const clipped = summary.split(". ").slice(0, 2).join(". ").replace(/\.$/, "");
    return `${clipped}.`;
  })();

  return (
    <>
      <Hero
        title={heroTitle}
        description={heroDescription}
        primaryCta={{ label: "Escríbeme", href: "/contacto" }}
        secondaryCta={{ label: "Ver servicios", href: "/servicios" }}
      />

      <Section variant="surface" deferPaint aria-labelledby="servicios-destacados">
        <Container className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2
              id="servicios-destacados"
              className="text-2xl font-semibold text-foreground md:text-3xl"
            >
              Servicios
            </h2>
            <p className="max-w-2xl text-lg text-foreground-muted">
              Áreas en las que puedo ayudarte. Resultados adaptados a tu gusto y necesidades, sin
              promesas vacías.
            </p>
          </div>
          <ServiceList services={featuredServices} showScope={false} showCta={false} />
          <div className="flex max-w-2xl flex-col gap-4 border-t border-border pt-8">
            <p className="text-lg leading-relaxed text-foreground">
              Requisitos exigentes, productos de calidad, mantenimiento continuado y criterio
              profesional.
            </p>
            <p className="text-base leading-relaxed text-foreground-muted">
              Si estos son factores decisivos para ti:{" "}
              <Link href="/contacto" variant="inline">
                ponte en contacto
              </Link>{" "}
              y expón tu proyecto.
            </p>
          </div>
        </Container>
      </Section>

      <Section deferPaint aria-labelledby="proyectos-destacados">
        <Container>
          <FeaturedProjects
            projects={featuredProjects}
            heading="Proyectos destacados"
            headingId="proyectos-destacados"
          />
        </Container>
      </Section>

      <Section variant="sunken" deferPaint aria-labelledby="stack-destacado">
        <Container>
          <FeaturedStack
            technologies={featuredStack}
            heading="Stack destacado"
            headingId="stack-destacado"
          />
        </Container>
      </Section>

      <CtaSection
        title="¿Hablamos de tu proyecto?"
        description="Cuéntame qué necesitas por el formulario o agenda una llamada. Respuesta directa, sin formularios opacos."
        cta={{ label: "Ir a contacto", href: "/contacto" }}
      />
    </>
  );
}
