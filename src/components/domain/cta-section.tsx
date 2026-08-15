import { Container } from "@/components/layout/container";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

export type CtaSectionProps = {
  title: string;
  description: string;
  cta: { label: string; href: string };
  className?: string;
};

/**
 * CTA de captación coherente (REQ-DOMAIN-CTA-001 / REQ-GLOBAL-002).
 * Navegación con Link con estilo de botón, no Button.
 */
export function CtaSection({ title, description, cta, className }: CtaSectionProps) {
  return (
    <section className={cn("py-16 lg:py-24", className)}>
      <Container className="flex max-w-3xl flex-col gap-6">
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">{title}</h2>
        <p className="text-lg leading-relaxed text-foreground-muted">{description}</p>
        <div>
          <Link href={cta.href} variant="primary" size="lg">
            {cta.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
