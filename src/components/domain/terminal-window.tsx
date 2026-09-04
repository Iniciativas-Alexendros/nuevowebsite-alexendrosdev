import { cn } from "@/lib/utils";

export type TerminalLogType = "cmd" | "success" | "info" | "muted" | "warn";

export type TerminalLog = {
  type: TerminalLogType;
  text: string;
};

export type TerminalWindowProps = {
  title?: string;
  logs: TerminalLog[];
  /** Glow ámbar en hover (REQ-DS-TERMINAL-001). */
  withGlow?: boolean;
  className?: string;
};

const LOG_LINE_CLASSES: Record<Exclude<TerminalLogType, "cmd">, string> = {
  success: "text-success",
  info: "text-info",
  muted: "text-muted-foreground",
  warn: "text-warning",
};

/**
 * Ventana de terminal (REQ-DS-TERMINAL-001; implementa «Terminal» de DESIGN §8.3).
 * Las líneas son texto real (legible por AT); el scanline es decorativo.
 */
export function TerminalWindow({
  title = "terminal",
  logs,
  withGlow = false,
  className,
}: TerminalWindowProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-border bg-terminal text-terminal-foreground shadow-2xl transition-shadow",
        withGlow && "hover:shadow-[var(--shadow-glow-amber)]",
        className
      )}
    >
      <div className="flex h-9 items-center gap-2 border-b border-border bg-card px-4">
        <span aria-hidden="true" className="size-2.5 rounded-full bg-destructive/80" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-primary/80" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-success/80" />
        <span className="ml-2 truncate font-mono text-xs text-muted-foreground">{title}</span>
      </div>
      <div className="relative p-4 font-mono text-sm leading-[1.7] whitespace-pre-wrap">
        {/* Scanline decorativo (DESIGN §4.5); sin animación, compatible con reduced-motion. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,var(--grid-dot)_0,var(--grid-dot)_1px,transparent_1px,transparent_3px)] opacity-[0.03]"
        />
        {logs.map((log, index) =>
          log.type === "cmd" ? (
            <p key={index}>
              <span className="text-primary">$</span> {log.text}
            </p>
          ) : (
            <p key={index} className={LOG_LINE_CLASSES[log.type]}>
              {log.text}
            </p>
          )
        )}
      </div>
    </div>
  );
}
