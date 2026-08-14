import type { LabelHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean;
};

export function Label({ required = false, className, children, ...props }: LabelProps) {
  return (
    <label
      className={cn("text-sm font-medium leading-normal text-foreground", className)}
      {...props}
    >
      {children}
      {required ? (
        <>
          <span className="text-destructive" aria-hidden="true">
            {" "}
            *
          </span>
          <span className="sr-only"> (obligatorio)</span>
        </>
      ) : null}
    </label>
  );
}
