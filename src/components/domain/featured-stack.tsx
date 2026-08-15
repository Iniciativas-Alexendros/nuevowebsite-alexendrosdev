import type { Technology } from "@/lib/validations/content";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

export type FeaturedStackProps = {
  technologies: Technology[];
  heading?: string;
  headingId?: string;
  className?: string;
};

/**
 * Stack destacado sin iconografía obligatoria (REQ-DOMAIN-TECHBADGE-001 simplificado).
 * Nombre accesible en texto; sin porcentajes subjetivos.
 */
export function FeaturedStack({
  technologies,
  heading = "Stack destacado",
  headingId,
  className,
}: FeaturedStackProps) {
  if (technologies.length === 0) return null;

  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 id={headingId} className="text-2xl font-semibold text-foreground md:text-3xl">
          {heading}
        </h2>
        <Link href="/stack" variant="inline">
          Ver stack completo
        </Link>
      </div>
      <ul className="flex list-none flex-wrap gap-2">
        {technologies.map((tech) => (
          <li key={tech.id}>
            <Badge variant="outline">{tech.name}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
