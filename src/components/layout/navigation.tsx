"use client";

import { usePathname } from "next/navigation";
import { Link } from "@/components/ui/link";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Principal" className="hidden md:block">
      <ul className="flex items-center gap-6">
        {siteConfig.navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-sm font-medium no-underline transition-colors",
                  isActive ? "text-foreground" : "text-foreground-muted hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
