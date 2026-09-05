import { Badge } from "@/components/ui/badge";
import { Link } from "@/components/ui/link";
import { contactHrefForServiceSlug } from "@/lib/contact-subject-query";
import { getTechnologyById } from "@/lib/content";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/validations/content";

export type ServiceSectionProps = {
  service: Service;
  /** Ordinal mono de la cabecera comando, p. ej. 0 → "01". */
  index: number;
  className?: string;
};

function SectionLabel({ children }: { children: string }) {
  return (
    <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
      {children}
    </h3>
  );
}

/**
 * Servicio como sección completa con ancla (REQ-DOMAIN-SERVICECARD-001,
 * REQ-DS-COMMAND-001): cabecera comando mono y modelo de contenido entero
 * (problemas, alcance, entregables, proceso, exclusiones, stack).
 * Sin precios, plazos ni garantías; una sola acción enfocable.
 */
export function ServiceSection({ service, index, className }: ServiceSectionProps) {
  const techNames = (service.technologies ?? [])
    .map((id) => getTechnologyById(id)?.name)
    .filter((name): name is string => Boolean(name));
  const ctaHref = contactHrefForServiceSlug(service.slug, service.cta.href);
  const ctaLabel = service.slug === "auditorias" ? "Pedir auditoría" : service.cta.label;

  return (
    <section
      id={service.slug}
      aria-labelledby={`servicio-${service.slug}`}
      className={cn(
        "scroll-mt-24 border-t border-border py-12 first:border-t-0 first:pt-0 lg:py-16",
        className
      )}
    >
      <div className="flex max-w-3xl flex-col gap-3">
        <p className="font-mono text-sm">
          <span className="text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>{" "}
          <span className="text-primary">$ {service.slug}</span>
        </p>
        <h2 id={`servicio-${service.slug}`} className="text-2xl font-semibold text-foreground">
          {service.title}
        </h2>
        <p className="text-lg leading-relaxed text-foreground-muted">{service.shortDescription}</p>
        <p className="text-base leading-relaxed text-foreground-muted">{service.audience}</p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <SectionLabel>Qué resuelve</SectionLabel>
            <ul className="flex list-none flex-col gap-2">
              {service.problemsSolved.map((problem) => (
                <li key={problem} className="font-mono text-sm text-foreground-muted">
                  <span aria-hidden="true" className="text-success">
                    ✓
                  </span>{" "}
                  {problem}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <SectionLabel>Alcance</SectionLabel>
            <ul className="flex list-none flex-col gap-2 text-sm text-foreground">
              {service.scope.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="text-muted-foreground">
                    ·
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <SectionLabel>Entregables</SectionLabel>
            <ul className="flex list-none flex-col gap-2 text-sm text-foreground">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="text-muted-foreground">
                    ·
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {service.process && service.process.length > 0 ? (
            <div className="flex flex-col gap-3">
              <SectionLabel>Proceso</SectionLabel>
              <ol className="flex list-none flex-col gap-2">
                {service.process.map((step, stepIndex) => (
                  <li key={step} className="flex gap-3 text-sm text-foreground-muted">
                    <span aria-hidden="true" className="font-mono text-muted-foreground">
                      {String(stepIndex + 1).padStart(2, "0")}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}
          {service.exclusions && service.exclusions.length > 0 ? (
            <div className="flex flex-col gap-3">
              <SectionLabel>No incluye</SectionLabel>
              <ul className="flex list-none flex-col gap-2 text-sm text-muted-foreground">
                {service.exclusions.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-border pt-6">
        {techNames.length > 0 ? (
          <ul
            className="flex list-none flex-wrap gap-2"
            aria-label={`Tecnologías de ${service.title}`}
          >
            {techNames.map((name) => (
              <li key={name}>
                <Badge variant="outline">{name}</Badge>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="ml-auto">
          <Link href={ctaHref} variant="secondary" size="sm">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
