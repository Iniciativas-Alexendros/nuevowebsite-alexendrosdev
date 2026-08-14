import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

export type PageHeaderProps = HTMLAttributes<HTMLElement> & {
  title: string;
  description?: string;
};

export function PageHeader({ title, description, className, ...props }: PageHeaderProps) {
  return (
    <header className={cn("py-16 lg:py-24", className)} {...props}>
      <Container>
        <h1 className="text-3xl font-semibold text-foreground md:text-4xl">{title}</h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-lg text-foreground-muted">{description}</p>
        ) : null}
      </Container>
    </header>
  );
}
