import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionVariant = "default" | "surface" | "sunken";

export type SectionProps = HTMLAttributes<HTMLElement> & {
  variant?: SectionVariant;
  header?: ReactNode;
  /** Diferir trabajo de layout/pintura fuera del viewport (home larga). */
  deferPaint?: boolean;
};

const sectionVariants: Record<SectionVariant, string> = {
  default: "",
  surface: "bg-surface",
  sunken: "bg-surface-sunken",
};

export function Section({
  variant = "default",
  header,
  deferPaint = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 lg:py-24",
        sectionVariants[variant],
        deferPaint && "[content-visibility:auto] [contain-intrinsic-size:auto_24rem]",
        className
      )}
      {...props}
    >
      {header}
      {children}
    </section>
  );
}
