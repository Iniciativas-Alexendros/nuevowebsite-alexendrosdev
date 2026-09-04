import { Container } from "@/components/layout/container";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

export type CtaSectionProps = {
  title: string;
  description: string;
  cta: { label: string; href: string };
  /** Segundo canal (p. ej. Cal.com). Misma jerarquía visual outline. */
  secondaryCta?: { label: string; href: string };
  /** Ancla semántica: id del h2 y aria-labelledby de la sección. */
  headingId?: string;
  className?: string;
};

/**
 * CTA de captación coherente (REQ-DOMAIN-CTA-001 / REQ-GLOBAL-002).
 * Navegación con Link con estilo de botón, no Button.
 */
export function CtaSection({
  title,
  description,
  cta,
  secondaryCta,
  headingId,
  className,
}: CtaSectionProps) {
  return (
    <section className={cn("py-16 lg:py-24", className)} aria-labelledby={headingId}>
      <Container className="flex max-w-3xl flex-col gap-6">
        <h2 id={headingId} className="text-2xl font-semibold text-foreground md:text-3xl">
          {title}
        </h2>
        <p className="text-lg leading-relaxed text-foreground-muted">{description}</p>
        <div className="flex flex-wrap items-center gap-3">
          <Link href={cta.href} variant="primary" size="lg">
            {cta.label}
          </Link>
          {secondaryCta ? (
            <Link href={secondaryCta.href} variant="outline" size="lg">
              {secondaryCta.label}
            </Link>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
