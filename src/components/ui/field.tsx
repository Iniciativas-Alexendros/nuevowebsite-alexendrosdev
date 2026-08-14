import { cloneElement, isValidElement, type ReactElement } from "react";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { FieldError } from "@/components/ui/field-error";

export type FieldProps = {
  id: string;
  label: string;
  required?: boolean;
  help?: string;
  error?: string;
  className?: string;
  children: ReactElement;
};

/**
 * Vincula semánticamente label, control, ayuda y error (REQ-UI-FIELD-001).
 * Server Component: el `id` lo aporta el llamador (no `useId`), manteniendo la
 * frontera server/client de ADR-0005. El control hijo recibe `id` y
 * `aria-describedby`/`aria-invalid` por composición.
 */
export function Field({
  id,
  label,
  required = false,
  help,
  error,
  className,
  children,
}: FieldProps) {
  const helpId = `${id}-help`;
  const errorId = `${id}-error`;
  const describedBy = [help ? helpId : null, error ? errorId : null]
    .filter(Boolean)
    .join(" ");

  const control = isValidElement(children)
    ? cloneElement(children as ReactElement<Record<string, unknown>>, {
        id,
        ...(describedBy ? { "aria-describedby": describedBy } : {}),
        ...(error ? { "aria-invalid": true } : {}),
      })
    : children;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      {control}
      {help ? (
        <p id={helpId} className="text-sm text-foreground-muted">
          {help}
        </p>
      ) : null}
      {error ? <FieldError id={errorId}>{error}</FieldError> : null}
    </div>
  );
}
