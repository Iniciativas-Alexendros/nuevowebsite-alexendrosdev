import type { SelectHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

/**
 * Select nativo (DESIGN §8.1). Misma anatomía visual que Input; sin Radix.
 * Server Component: la interactividad la aporta el elemento nativo.
 */
export function Select({ className, children, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        "flex h-11 w-full rounded-md border border-input bg-surface-raised px-3 py-2 text-base transition-colors disabled:cursor-not-allowed disabled:bg-disabled disabled:text-disabled-foreground aria-invalid:border-destructive",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}
