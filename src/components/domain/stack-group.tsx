import type { Technology, TechnologyCategory } from "@/lib/validations/content";
import { TechnologyBadge } from "@/components/domain/technology-badge";
import { cn } from "@/lib/utils";

export const STACK_CATEGORY_ORDER: TechnologyCategory[] = [
  "lenguaje",
  "framework",
  "cms",
  "estilo",
  "herramienta",
];

export const STACK_CATEGORY_LABEL: Record<TechnologyCategory, string> = {
  lenguaje: "Lenguajes",
  framework: "Frameworks",
  cms: "CMS",
  estilo: "Estilos",
  herramienta: "Herramientas",
};

export type StackGroupProps = {
  technologies: Technology[];
  /** Si true, solo badges; si false, nombre + contexto editorial. */
  compact?: boolean;
  className?: string;
};

function groupByCategory(technologies: Technology[]): Map<TechnologyCategory, Technology[]> {
  const groups = new Map<TechnologyCategory, Technology[]>();
  for (const category of STACK_CATEGORY_ORDER) {
    groups.set(category, []);
  }
  for (const tech of technologies) {
    const list = groups.get(tech.category);
    if (list) {
      list.push(tech);
    }
  }
  return groups;
}

/**
 * Agrupación de stack por categoría (REQ-DOMAIN-TECHBADGE-001 / SPECS §6.6).
 * Sin porcentajes ni niveles subjetivos.
 */
export function StackGroup({ technologies, compact = false, className }: StackGroupProps) {
  const groups = groupByCategory(technologies);

  return (
    <div className={cn("flex flex-col gap-12", className)}>
      {STACK_CATEGORY_ORDER.map((category) => {
        const items = groups.get(category) ?? [];
        if (items.length === 0) return null;

        return (
          <section key={category} aria-labelledby={`stack-${category}`}>
            <h2
              id={`stack-${category}`}
              className="mb-6 text-xl font-semibold text-foreground md:text-2xl"
            >
              {STACK_CATEGORY_LABEL[category]}
            </h2>
            {compact ? (
              <ul className="flex list-none flex-wrap gap-2">
                {items.map((tech) => (
                  <li key={tech.id}>
                    <TechnologyBadge technology={tech} />
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="grid list-none grid-cols-1 gap-8 md:grid-cols-2">
                {items.map((tech) => (
                  <li key={tech.id} className="flex flex-col gap-3 border-t border-border pt-6">
                    <TechnologyBadge technology={tech} />
                    <p className="text-base leading-relaxed text-foreground-muted">
                      {tech.description}
                    </p>
                    {tech.relevance ? (
                      <p className="text-sm leading-relaxed text-foreground">{tech.relevance}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            )}
          </section>
        );
      })}
    </div>
  );
}
