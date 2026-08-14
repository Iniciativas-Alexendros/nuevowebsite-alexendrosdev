import { Container } from "@/components/layout/container";
import { Link } from "@/components/ui/link";
import { Wordmark } from "@/components/layout/wordmark";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <Wordmark />
        <nav aria-label="Legal" className="flex items-center gap-6">
          {siteConfig.footerNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium no-underline text-foreground-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
