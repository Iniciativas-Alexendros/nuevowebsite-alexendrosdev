import type { HTMLAttributes } from "react";
import { TriangleAlert } from "lucide-react";

import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";

export type FieldErrorProps = HTMLAttributes<HTMLParagraphElement>;

export function FieldError({ className, children, ...props }: FieldErrorProps) {
  return (
    <p
      role="alert"
      className={cn("flex items-center gap-1.5 text-sm text-destructive", className)}
      {...props}
    >
      <Icon icon={TriangleAlert} size="sm" className="shrink-0" />
      {children}
    </p>
  );
}
