import type { Service } from "@/lib/validations/content";
import { Link } from "@/components/ui/link";
import { contactHrefForServiceSlug } from "@/lib/contact-subject-query";
import { cn } from "@/lib/utils";

export type ServiceCardProps = {
  service: Service;
  /** En listados densos (home) se omite el preview de alcance. */
  showScope?: boolean;
  /** Entregables (hasta 3) — productiza la oferta en /servicios. */
  showDeliverables?: boolean;
  /** Primera exclusión explícita («No incluye»). */
  showExclusions?: boolean;
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
  showDeliverables = false,
  showExclusions = false,
  showCta = true,
  className,
}: ServiceCardProps) {
  const scopePreview = showScope ? service.scope.slice(0, 3) : [];
  const deliverablePreview = showDeliverables ? service.deliverables.slice(0, 3) : [];
  const exclusionPreview =
    showExclusions && service.exclusions?.[0] ? service.exclusions[0] : undefined;
  const ctaHref = contactHrefForServiceSlug(service.slug, service.cta.href);
  const ctaLabel = service.slug === "auditoria-web" ? "Pedir auditoría" : service.cta.label;

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
      {deliverablePreview.length > 0 ? (
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-foreground">Entregables</p>
          <ul className="flex flex-col gap-2 text-sm text-foreground-muted">
            {deliverablePreview.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="text-foreground-muted">
                  ·
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {exclusionPreview ? (
        <p className="text-sm leading-relaxed text-foreground-muted">
          <span className="font-medium text-foreground">No incluye:</span> {exclusionPreview}
        </p>
      ) : null}
      {showCta ? (
        <div className="mt-auto pt-2">
          <Link href={ctaHref} variant="secondary" size="sm">
            {ctaLabel}
          </Link>
        </div>
      ) : null}
    </article>
  );
}
