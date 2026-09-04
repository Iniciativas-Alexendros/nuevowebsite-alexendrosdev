import { cn } from "@/lib/utils";

export type GridPatternProps = {
  className?: string;
};

/**
 * Fondo decorativo de puntos (REQ-DS-GRID-001). aria-hidden, sin puntero ni
 * animación; el contenedor padre debe ser `relative`.
 */
export function GridPattern({ className }: GridPatternProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]",
        className
      )}
    />
  );
}
