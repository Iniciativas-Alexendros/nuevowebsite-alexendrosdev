import type { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariantsCva = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-xs uppercase tracking-widest",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-border bg-secondary text-secondary-foreground",
        outline: "border-border bg-transparent text-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type BadgeVariant = "default" | "secondary" | "outline" | "destructive";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
  /** Punto de estado 4 px (bg-success) antes del contenido. */
  active?: boolean;
};

export function Badge({
  variant = "default",
  active = false,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={cn(badgeVariantsCva({ variant }), className)} {...props}>
      {active ? <span aria-hidden="true" className="size-1 rounded-full bg-success" /> : null}
      {children}
    </span>
  );
}
