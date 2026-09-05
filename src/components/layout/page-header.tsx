import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

export type PageHeaderProps = HTMLAttributes<HTMLElement> & {
  title: string;
  description?: string;
  /** Etiqueta mono sobre el h1 (patrón Forge; DESIGN §5). */
  kicker?: string;
};

export function PageHeader({ title, description, kicker, className, ...props }: PageHeaderProps) {
  return (
    <header className={cn("py-16 lg:py-24", className)} {...props}>
      <Container>
        {kicker ? (
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {kicker}
          </p>
        ) : null}
        <h1 className="text-3xl font-semibold text-foreground md:text-4xl">{title}</h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-lg text-foreground-muted">{description}</p>
        ) : null}
      </Container>
    </header>
  );
}
