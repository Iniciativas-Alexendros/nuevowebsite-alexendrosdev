import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionVariant = "default" | "surface" | "sunken";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  variant?: SectionVariant;
  header?: ReactNode;
};

const sectionVariants: Record<SectionVariant, string> = {
  default: "",
  surface: "bg-surface",
  sunken: "bg-surface-sunken",
};

export function Section({ variant = "default", header, className, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-16 lg:py-24", sectionVariants[variant], className)} {...props}>
      {header}
      {children}
    </section>
  );
}
