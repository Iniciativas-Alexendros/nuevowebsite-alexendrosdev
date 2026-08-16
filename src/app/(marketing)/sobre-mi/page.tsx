import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CtaSection } from "@/components/domain/cta-section";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { Link } from "@/components/ui/link";
import { getPublishedProfile } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

const profile = getPublishedProfile();

export const metadata: Metadata = buildPageMetadata({
  title: "Sobre mí",
  description: profile?.metadata.description,
  path: "/sobre-mi",
});

export default function SobreMiPage() {
  if (!profile) {
    notFound();
  }

  return (
    <>
      <PageHeader title="Sobre mí" description={profile.summary} />

      <Section aria-labelledby="perfil-presentacion">
        <Container className="flex max-w-3xl flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 id="perfil-presentacion" className="text-2xl font-semibold text-foreground">
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

      <CtaSection
        title="¿Encaja con lo que buscas?"
        description="Escríbeme con el contexto del proyecto. Si no encajo, te lo digo en la primera conversación."
        cta={{ label: "Contactar", href: "/contacto" }}
      />
    </>
  );
}
