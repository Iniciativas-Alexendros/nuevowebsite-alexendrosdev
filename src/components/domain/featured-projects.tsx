import type { Project } from "@/lib/validations/content";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

export type FeaturedProjectsProps = {
  projects: Project[];
  heading?: string;
  headingId?: string;
  className?: string;
};

/**
 * Proyectos destacados en home (DES-07 diferido).
 * Markup ligero aparte de ProjectCard para no penalizar Lighthouse (OBJ-005).
 * Una métrica de `results[0]` cuando existe (prueba social cuantificada).
 */
export function FeaturedProjects({
  projects,
  heading = "Proyectos destacados",
  headingId,
  className,
}: FeaturedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 id={headingId} className="text-2xl font-semibold text-foreground md:text-3xl">
          {heading}
        </h2>
        <Link href="/proyectos" variant="inline">
          Ver todos los proyectos
        </Link>
      </div>
      <ul className="grid list-none grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => {
          const primaryLink = project.links?.[0];
          const href = primaryLink?.href ?? "/proyectos";
          const primaryResult = project.results?.[0];

          return (
            <li key={project.id} className="flex flex-col gap-3 border-t border-border pt-6">
              <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
              <p className="text-base leading-relaxed text-foreground-muted">
                {project.shortDescription}
              </p>
              {primaryResult ? (
                <p className="text-sm font-medium leading-relaxed text-foreground">
                  {primaryResult}
                </p>
              ) : null}
              <div>
                <Link href={href} variant="secondary" size="sm">
                  {primaryLink?.label ?? "Ver proyectos"}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
