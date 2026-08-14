import type { HTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import { CircleCheck, CircleX, Info, TriangleAlert } from "lucide-react";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

export type AlertVariant = "default" | "info" | "success" | "warning" | "destructive";

const alertIcons: Record<AlertVariant, LucideIcon> = {
  default: Info,
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  destructive: CircleX,
};

const alertVariants: Record<AlertVariant, string> = {
  default: "bg-muted text-muted-foreground",
  info: "bg-info text-info-foreground",
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  destructive: "bg-destructive text-destructive-foreground",
};

export type AlertProps = HTMLAttributes<HTMLDivElement> & {
  variant?: AlertVariant;
  title?: string;
  icon?: LucideIcon;
};

export function Alert({
  variant = "default",
  title,
  icon,
  className,
  children,
  ...props
}: AlertProps) {
  const IconComponent = icon ?? alertIcons[variant];
  const role = variant === "destructive" || variant === "warning" ? "alert" : "status";

  return (
    <div
      role={role}
      className={cn(
        "flex gap-3 rounded-lg p-4 text-sm leading-normal",
        alertVariants[variant],
        className
      )}
      {...props}
    >
      <Icon icon={IconComponent} size="md" className="mt-0.5 shrink-0" />
      <div className="flex flex-col gap-1">
        {title ? <p className="font-semibold">{title}</p> : null}
        {children ? <div>{children}</div> : null}
      </div>
    </div>
  );
}
