import type { Technology } from "@/lib/validations/content";
import { cn } from "@/lib/utils";

export type TechnologyBadgeProps = {
  technology: Technology;
  className?: string;
};

/**
 * Badge de tecnología (REQ-DOMAIN-TECHBADGE-001).
 * Estética terminal con tokens existentes; nombre siempre en texto; sin porcentajes.
 */
export function TechnologyBadge({ technology, className }: TechnologyBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-border bg-secondary px-2.5 py-1",
        "font-mono text-xs font-medium text-foreground",
        className
      )}
    >
      {technology.name}
    </span>
  );
}
