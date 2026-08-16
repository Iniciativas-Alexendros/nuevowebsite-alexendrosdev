import type { Service } from "@/lib/validations/content";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

export type ServiceCardProps = {
  service: Service;
  /** En listados densos (home) se omite el preview de alcance. */
  showScope?: boolean;
  /** Si es false, no se muestra el CTA por tarjeta (CTA único de sección). */
  showCta?: boolean;
  className?: string;
};

/**
 * Tarjeta de servicio (REQ-DOMAIN-SERVICECARD-001).
 * Sin precios, plazos ni garantías; como máximo una acción enfocable.
 */
export function ServiceCard({
  service,
  showScope = true,
  showCta = true,
  className,
}: ServiceCardProps) {
  const scopePreview = showScope ? service.scope.slice(0, 3) : [];

  return (
    <article className={cn("flex h-full flex-col gap-4 border-t border-border pt-6", className)}>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
        <p className="text-base leading-relaxed text-foreground-muted">
          {service.shortDescription}
        </p>
      </div>
      {scopePreview.length > 0 ? (
        <ul className="flex flex-col gap-2 text-sm text-foreground">
          {scopePreview.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="text-foreground-muted">
                ·
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {showCta ? (
        <div className="mt-auto pt-2">
          <Link href={service.cta.href} variant="secondary" size="sm">
            {service.cta.label}
          </Link>
        </div>
      ) : null}
    </article>
  );
}
