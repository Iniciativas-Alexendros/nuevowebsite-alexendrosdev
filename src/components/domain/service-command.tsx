import NextLink from "next/link";

import { cn } from "@/lib/utils";

export type ServiceCommandProps = {
  /** Identificador ordinal mono, p. ej. "01". */
  id: string;
  /** Comando sin prompt, p. ej. el slug del servicio. */
  command: string;
  args?: string;
  description: string;
  checks: string[];
  href: string;
  className?: string;
};

/**
 * Servicio presentado como comando de terminal (REQ-DS-COMMAND-001;
 * implementa «TerminalCommand» de DESIGN §8.3). Una sola acción enfocable;
 * el borde de acento no es el único indicador de foco (NFR-A11Y-002).
 */
export function ServiceCommand({
  id,
  command,
  args,
  description,
  checks,
  href,
  className,
}: ServiceCommandProps) {
  return (
    <NextLink
      href={href}
      className={cn(
        "group block border-l-2 border-transparent py-4 pl-6 no-underline transition-all hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <p className="font-mono text-sm">
        <span className="text-muted-foreground">{id}</span>{" "}
        <span className="text-foreground transition-colors group-hover:text-primary">
          $ {command}
        </span>{" "}
        {args ? <span className="text-muted-foreground">{args}</span> : null}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      {checks.length > 0 ? (
        <ul className="mt-3 flex list-none flex-col gap-1">
          {checks.map((check) => (
            <li key={check} className="font-mono text-xs text-foreground-muted">
              <span aria-hidden="true" className="text-success">
                ✓
              </span>{" "}
              {check}
            </li>
          ))}
        </ul>
      ) : null}
    </NextLink>
  );
}
