import { GridPattern } from "@/components/domain/grid-pattern";
import { TerminalWindow, type TerminalLog } from "@/components/domain/terminal-window";
import { Container } from "@/components/layout/container";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

export type HeroProps = {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Etiqueta mono sobre el H1 (contenido aprobado; omitir si no existe). */
  kicker?: string;
  /** Terminal Forge a la derecha del titular (REQ-DS-TERMINAL-001). */
  terminal?: { title: string; logs: TerminalLog[]; withGlow?: boolean };
  /** Fondo decorativo de puntos (REQ-DS-GRID-001). */
  withGridPattern?: boolean;
  className?: string;
};

/**
 * Hero de captación (REQ-DOMAIN-HERO-001).
 * Único H1 de la página; contenido tipado; CTA operable con teclado.
 */
export function Hero({
  title,
  description,
  primaryCta,
  secondaryCta,
  kicker,
  terminal,
  withGridPattern = false,
  className,
}: HeroProps) {
  return (
    <header
      className={cn("relative flex flex-col justify-center py-12 md:py-16 lg:py-20", className)}
    >
      {withGridPattern ? <GridPattern /> : null}
      <Container
        className={cn(
          "flex flex-col gap-6 md:gap-8",
          terminal && "grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        )}
      >
        <div className="flex max-w-3xl flex-col gap-4 md:gap-5">
          {kicker ? (
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {kicker}
            </p>
          ) : null}
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-foreground-muted md:text-xl">
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link href={primaryCta.href} variant="primary" size="lg">
              {primaryCta.label}
            </Link>
            {secondaryCta ? (
              <Link href={secondaryCta.href} variant="outline" size="lg">
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>
        {terminal ? (
          <TerminalWindow
            title={terminal.title}
            logs={terminal.logs}
            withGlow={terminal.withGlow}
          />
        ) : null}
      </Container>
    </header>
  );
}
