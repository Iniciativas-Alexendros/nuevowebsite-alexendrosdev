import type { Project, ProjectVisibility } from "@/lib/validations/content";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/components/ui/link";
import { getTechnologyById } from "@/lib/content";
import { cn } from "@/lib/utils";

const VISIBILITY_LABEL: Record<ProjectVisibility, string> = {
  publico: "Público",
  limitado: "Limitado",
  privado: "Privado",
};

export type ProjectCardProps = {
  project: Project;
  /** En home/listados densos se omiten badges de tecnologías (peso DOM / Lighthouse). */
  showTechnologies?: boolean;
  className?: string;
};

/**
 * Tarjeta de proyecto (REQ-DOMAIN-PROJECTCARD-001).
 * Una sola acción enfocable; sin placeholders de imagen (DES-07).
 */
export function ProjectCard({ project, showTechnologies = true, className }: ProjectCardProps) {
  const primaryLink = project.links?.[0];
  const href = primaryLink?.href ?? "/proyectos";
  const linkLabel = primaryLink?.label ?? "Ver proyectos";

  const techNames = showTechnologies
    ? project.technologies
        .map((id) => getTechnologyById(id)?.name)
        .filter((name): name is string => Boolean(name))
    : [];

  return (
    <article className={cn("flex h-full flex-col gap-4 border-t border-border pt-6", className)}>
      {/* Sin images[] hasta capturas reales (DES-07); no placeholders. */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
          <span className="text-sm text-foreground-muted">
            {VISIBILITY_LABEL[project.visibility]}
          </span>
        </div>
        <p className="text-base leading-relaxed text-foreground-muted">
          {project.shortDescription}
        </p>
      </div>

      {techNames.length > 0 ? (
        <ul
          className="flex list-none flex-wrap gap-2"
          aria-label={`Tecnologías de ${project.title}`}
        >
          {techNames.map((name) => (
            <li key={name}>
              <Badge variant="outline">{name}</Badge>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-auto pt-2">
        <Link href={href} variant="secondary" size="sm">
          {linkLabel}
        </Link>
      </div>
    </article>
  );
}
