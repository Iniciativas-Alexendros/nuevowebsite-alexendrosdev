import type { Service } from "@/lib/validations/content";
import { ServiceCard } from "@/components/domain/service-card";
import { cn } from "@/lib/utils";

export type ServiceListProps = {
  services: Service[];
  showScope?: boolean;
  className?: string;
};

export function ServiceList({ services, showScope = true, className }: ServiceListProps) {
  return (
    <ul className={cn("grid list-none grid-cols-1 gap-10 md:grid-cols-2", className)}>
      {services.map((service) => (
        <li key={service.id}>
          <ServiceCard service={service} showScope={showScope} />
        </li>
      ))}
    </ul>
  );
}
