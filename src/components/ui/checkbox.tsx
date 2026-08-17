import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

/**
 * Checkbox nativo (DESIGN §8.1). Tokens de borde y acento; sin Radix.
 * Server Component: la interactividad la aporta el elemento nativo.
 * El área táctil la aporta el label envolvente del consumidor.
 */
export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className={cn(
        "mt-1 size-4 shrink-0 rounded-sm border border-input accent-primary disabled:cursor-not-allowed disabled:bg-disabled disabled:accent-disabled",
        className
      )}
      {...props}
    />
  );
}
