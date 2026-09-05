import type { Metadata } from "next";

import { ContactForm } from "@/components/domain/contact-form";
import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Link } from "@/components/ui/link";
import { getVisibleContactChannels } from "@/lib/content";
import { resolveContactSubjectQuery } from "@/lib/contact-subject-query";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contacto",
  description:
    "Formulario de contacto, email y agenda en Cal.com. Cuéntame tu proyecto o reserva una llamada.",
  path: "/contacto",
});

type ContactoPageProps = {
  searchParams: Promise<{ subject?: string | string[] }>;
};

export default async function ContactoPage({ searchParams }: ContactoPageProps) {
  const channels = getVisibleContactChannels().filter((channel) => channel.type !== "form");
  const params = await searchParams;
  const rawSubject = Array.isArray(params.subject) ? params.subject[0] : params.subject;
  const initialSubject = resolveContactSubjectQuery(rawSubject) ?? "";

  return (
    <>
      <PageHeader
        kicker="~/contacto"
        title="Contacto"
        description="Puedes escribirme por el formulario, enviarme un email o agendar una llamada. Elige el canal que te resulte más cómodo."
      />
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-semibold text-foreground">Formulario</h2>
            <p className="text-base text-foreground-muted">
              Ideal para consultas con contexto: alcance, plazos orientativos del lado del cliente y
              enlaces relevantes. Respuesta directa a tu email.
            </p>
            <Card>
              <ContactForm initialSubject={initialSubject} />
            </Card>
          </div>

          <aside className="flex flex-col gap-6">
            <h2 className="text-xl font-semibold text-foreground">Otros canales</h2>
            <ul className="flex list-none flex-col gap-4">
              {channels.map((channel) => (
                <li
                  key={channel.href}
                  className="flex flex-col gap-1 border-l-2 border-transparent py-1 pl-4 transition-colors hover:border-primary"
                >
                  <Link href={channel.href} variant="inline" className="font-mono text-sm">
                    $ {channel.label}
                  </Link>
                  {channel.availability ? (
                    <p className="text-sm text-foreground-muted">{channel.availability}</p>
                  ) : null}
                </li>
              ))}
            </ul>
            <p className="text-sm text-foreground-muted">
              Al enviar el formulario trataré tus datos según la{" "}
              <Link href="/privacidad" variant="inline">
                política de privacidad
              </Link>
              .
            </p>
          </aside>
        </Container>
      </Section>
    </>
  );
}
