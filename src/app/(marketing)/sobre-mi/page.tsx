import type { Metadata } from "next";

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
  description:
    profile?.metadata.description ??
    "Perfil profesional de Alexendros: desarrollo web, automatización y auditoría.",
  path: "/sobre-mi",
});

/**
 * Perfil profesional desde contenido tipado (SPECS §6.7 / REQ-GLOBAL-008).
 * Solo hechos verificables; sin testimonios inventados.
 */
export default function SobreMiPage() {
  if (!profile) {
    return (
      <PageHeader title="Sobre mí" description="El perfil profesional aún no está publicado." />
    );
  }

  return (
    <>
      <PageHeader title="Sobre mí" description={profile.summary} />
      <Section>
        <Container className="flex max-w-3xl flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold text-foreground">{profile.name}</p>
            <p className="text-base leading-relaxed text-foreground-muted">{profile.title}</p>
          </div>

          <div className="flex flex-col gap-6">
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-base leading-relaxed text-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          {(profile.location || (profile.languages && profile.languages.length > 0)) && (
            <dl className="grid grid-cols-1 gap-4 border-t border-border pt-6 sm:grid-cols-2">
              {profile.location ? (
                <div>
                  <dt className="text-sm font-medium text-foreground-muted">Ubicación</dt>
                  <dd className="mt-1 text-base text-foreground">{profile.location}</dd>
                </div>
              ) : null}
              {profile.languages && profile.languages.length > 0 ? (
                <div>
                  <dt className="text-sm font-medium text-foreground-muted">Idiomas</dt>
                  <dd className="mt-1 text-base text-foreground">
                    {profile.languages.join(" · ")}
                  </dd>
                </div>
              ) : null}
            </dl>
          )}

          {profile.links && profile.links.length > 0 ? (
            <nav aria-label="Enlaces profesionales" className="border-t border-border pt-6">
              <ul className="flex list-none flex-wrap gap-4">
                {profile.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} variant="inline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
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
