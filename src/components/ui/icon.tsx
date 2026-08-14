import type { LucideIcon, LucideProps } from "lucide-react";

import { cn } from "@/lib/utils";

export const iconSizes = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
} as const;

export type IconSize = keyof typeof iconSizes;

type IconProps = Omit<
  LucideProps,
  "size" | "strokeWidth" | "aria-hidden" | "aria-label" | "role"
> & {
  icon: LucideIcon;
  size?: IconSize;
  label?: string;
  strokeWidth?: number;
};

/**
 * Icono canónico (DESIGN §7, ADR-0016).
 * Sin `label` es decorativo (`aria-hidden="true"`); con `label` se expone con
 * nombre accesible (`role="img"` + `aria-label`).
 */
export function Icon({
  icon: IconComponent,
  size = "md",
  label,
  strokeWidth,
  className,
  ...props
}: IconProps) {
  const stroke = strokeWidth ?? (size === "xl" ? 1.75 : 2);
  const accessible = label
    ? { role: "img" as const, "aria-label": label }
    : { "aria-hidden": true as const };

  return (
    <IconComponent
      size={iconSizes[size]}
      strokeWidth={stroke}
      className={cn(className)}
      {...accessible}
      {...props}
    />
  );
}
