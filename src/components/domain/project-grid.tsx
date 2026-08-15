import type { Project } from "@/lib/validations/content";
import { ProjectCard } from "@/components/domain/project-card";
import { cn } from "@/lib/utils";

export type ProjectGridProps = {
  projects: Project[];
  className?: string;
};

/**
 * Grid de proyectos (REQ-DOMAIN-PROJECTCARD-001).
 * Conserva orden lógico de lectura al cambiar de columnas.
 */
export function ProjectGrid({ projects, className }: ProjectGridProps) {
  return (
    <ul className={cn("grid list-none grid-cols-1 gap-10 md:grid-cols-2", className)}>
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
