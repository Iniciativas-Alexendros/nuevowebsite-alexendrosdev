import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type SkipLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  targetId?: string;
};

export function SkipLink({
  targetId = "contenido-principal",
  className,
  children = "Saltar al contenido principal",
  ...props
}: SkipLinkProps) {
  return (
    <a
      href={`#${targetId}`}
      className={cn(
        "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-overlay",
        "focus:rounded-md focus:border focus:border-border focus:bg-surface-raised focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
