import type { ButtonHTMLAttributes } from "react";
import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "destructive";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:text-disabled-foreground [&_svg]:shrink-0";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-button-primary-hover disabled:bg-disabled",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-button-secondary-hover disabled:bg-disabled",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-button-subtle-hover disabled:border-muted",
  ghost: "text-foreground hover:bg-button-subtle-hover",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-button-destructive-hover disabled:bg-disabled",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm min-tap-target",
  md: "h-11 px-4 text-base",
  lg: "h-12 px-6 text-lg",
  icon: "h-11 w-11",
};

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(baseClasses, variantClasses[variant], sizeClasses[size], className);
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonVariants({ variant, size, className })}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <Icon icon={LoaderCircle} size="sm" className="animate-spin" /> : null}
      {children}
    </button>
  );
}
