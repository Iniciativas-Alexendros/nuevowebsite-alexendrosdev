import type { HTMLAttributes } from "react";
import { LoaderCircle } from "lucide-react";

import { Icon, type IconSize } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

export type SpinnerProps = HTMLAttributes<HTMLDivElement> & {
  label?: string;
  size?: IconSize;
};

export function Spinner({
  label = "Cargando…",
  size = "md",
  className,
  ...props
}: SpinnerProps) {
  return (
    <div
      role="status"
      className={cn("inline-flex items-center justify-center", className)}
      {...props}
    >
      <Icon icon={LoaderCircle} size={size} className="animate-spin" />
      <span className="sr-only">{label}</span>
    </div>
  );
}
