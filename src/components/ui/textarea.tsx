import type { TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "flex min-h-24 w-full rounded-md border border-input bg-surface-raised px-3 py-2 text-base transition-colors placeholder:text-foreground-subtle disabled:cursor-not-allowed disabled:bg-disabled disabled:text-disabled-foreground aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}
