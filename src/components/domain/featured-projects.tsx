import type { Project } from "@/lib/validations/content";
import { ProjectCard } from "@/components/domain/project-card";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

export type FeaturedProjectsProps = {
  projects: Project[];
  heading?: string;
  headingId?: string;
  className?: string;
};

/**
 * Proyectos destacados sin capturas (DES-07 diferido).
 * Reutiliza ProjectCard (REQ-DOMAIN-PROJECTCARD-001).
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
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} showTechnologies={false} />
          </li>
        ))}
      </ul>
    </div>
  );
}
