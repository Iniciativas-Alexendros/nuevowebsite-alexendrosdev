import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Button,
  type ButtonProps,
  type ButtonSize,
  type ButtonVariant,
} from "@/components/ui/button";
import { Icon, type IconSize } from "@/components/ui/icon";

type IconButtonSize = Exclude<ButtonSize, "icon">;

export type IconButtonProps = Omit<ButtonProps, "variant" | "size" | "children"> & {
  icon: LucideIcon;
  label: string;
  variant?: ButtonVariant;
  size?: IconButtonSize;
};

export function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  className,
  ...props
}: IconButtonProps) {
  const iconSize: IconSize = size === "sm" ? "sm" : size === "lg" ? "lg" : "md";
  const square = size === "sm" ? "h-9 w-9" : size === "lg" ? "h-12 w-12" : "h-11 w-11";

  return (
    <Button
      variant={variant}
      size="icon"
      className={cn(square, "min-tap-target", className)}
      aria-label={label}
      {...props}
    >
      <Icon icon={icon} size={iconSize} />
    </Button>
  );
}
