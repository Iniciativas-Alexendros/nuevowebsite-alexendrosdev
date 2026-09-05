import type { Metadata } from "next";

import { CtaSection } from "@/components/domain/cta-section";
import { Hero } from "@/components/domain/hero";
import { ServiceCommand } from "@/components/domain/service-command";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Link } from "@/components/ui/link";
import { contactChannels } from "@/content/contact";
import { siteConfig } from "@/content/site";
import { getFeaturedServices, getPublishedProfile } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: siteConfig.defaultTitle },
  description: siteConfig.defaultDescription,
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

const calendarHref =
  contactChannels.find((channel) => channel.type === "calendar" && channel.visible)?.href ??
  "https://cal.com/alexendros";

export default function Home() {
  const profile = getPublishedProfile();
  const featuredServices = getFeaturedServices();

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
        secondaryCta={{ label: "Agendar llamada", href: calendarHref }}
        withGridPattern
        terminal={{
          title: "alexendros@forge:~$",
          withGlow: true,
          logs: [
            { type: "cmd", text: "pnpm ci && pnpm build" },
            { type: "success", text: "✓ Typecheck, lint y tests en verde" },
            { type: "success", text: "✓ axe-core: 0 violaciones en 6 rutas" },
            { type: "muted", text: "▶ https://alexendros.dev" },
          ],
        }}
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
              Tres formas de trabajar juntos: producir tu web, auditar lo que ya tienes o decidir
              con criterio antes de invertir. Sin promesas vacías.
            </p>
          </div>
          <div className="flex flex-col">
            {featuredServices.map((service, index) => (
              <ServiceCommand
                key={service.id}
                id={String(index + 1).padStart(2, "0")}
                command={service.slug}
                description={service.shortDescription}
                checks={service.deliverables.slice(0, 2)}
                href="/servicios"
              />
            ))}
          </div>
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

      <Section deferPaint aria-labelledby="sobre-mi-intro">
        <Container className="flex max-w-3xl flex-col gap-6">
          <h2 id="sobre-mi-intro" className="text-2xl font-semibold text-foreground md:text-3xl">
            Sobre mí
          </h2>
          <p className="text-lg leading-relaxed text-foreground-muted">{profile?.title}</p>
          <p className="text-base leading-relaxed text-foreground-muted">
            Método de trabajo verificable, proyectos públicos y el stack que uso a diario:{" "}
            <Link href="/sobre-mi" variant="inline">
              conóceme mejor
            </Link>
            .
          </p>
        </Container>
      </Section>

      <CtaSection
        title="¿Hablamos de tu proyecto?"
        description="Cuéntame qué necesitas por el formulario o agenda una llamada. Respuesta directa, sin formularios opacos."
        cta={{ label: "Ir a contacto", href: "/contacto" }}
        secondaryCta={{ label: "Agendar llamada", href: calendarHref }}
      />
    </>
  );
}
