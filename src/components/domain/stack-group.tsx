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
  /**
   * Diferir pintura de categorías tras la primera (content-visibility).
   * Mejora LCP lab en el bloque de stack de `/sobre-mi` sin ocultar el primer grupo (OBJ-005).
   */
  deferBelowFold?: boolean;
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
export function StackGroup({
  technologies,
  compact = false,
  deferBelowFold = false,
  className,
}: StackGroupProps) {
  const groups = groupByCategory(technologies);
  const categoriesWithItems = STACK_CATEGORY_ORDER.filter(
    (category) => (groups.get(category) ?? []).length > 0
  );

  return (
    <div className={cn("flex flex-col gap-12", className)}>
      {categoriesWithItems.map((category, categoryIndex) => {
        const items = groups.get(category) ?? [];
        const deferCategory = deferBelowFold && categoryIndex > 0;

        return (
          <section
            key={category}
            aria-labelledby={`stack-${category}`}
            className={cn(
              deferCategory && "[content-visibility:auto] [contain-intrinsic-size:auto_40rem]"
            )}
          >
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
              <ul className="grid list-none grid-cols-1 gap-4 md:grid-cols-2">
                {items.map((tech) => (
                  <li
                    key={tech.id}
                    className="flex flex-col gap-2 rounded-lg border border-border bg-card p-4 transition-colors duration-200 hover:border-border-hover"
                  >
                    {/* font-sans: evita resolución mono en el critical path del catálogo (LCP). */}
                    <TechnologyBadge technology={tech} className="font-sans" />
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
