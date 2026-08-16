import { Container } from "@/components/layout/container";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

export type HeroProps = {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
};

/**
 * Hero de captación (REQ-DOMAIN-HERO-001).
 * Único H1 de la página; contenido tipado; CTA operable con teclado.
 */
export function Hero({ title, description, primaryCta, secondaryCta, className }: HeroProps) {
  return (
    <header className={cn("flex flex-col justify-center py-12 md:py-16 lg:py-20", className)}>
      <Container className="flex flex-col gap-6 md:gap-8">
        <div className="flex max-w-3xl flex-col gap-4 md:gap-5">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-foreground-muted md:text-xl">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link href={primaryCta.href} variant="primary" size="lg">
            {primaryCta.label}
          </Link>
          {secondaryCta ? (
            <Link href={secondaryCta.href} variant="outline" size="lg">
              {secondaryCta.label}
            </Link>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
