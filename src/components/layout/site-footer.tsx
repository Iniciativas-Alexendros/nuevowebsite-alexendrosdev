import { Container } from "@/components/layout/container";
import { Link } from "@/components/ui/link";
import { Wordmark } from "@/components/layout/wordmark";
import { contactChannels } from "@/content/contact";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  const calendar = contactChannels.find(
    (channel) => channel.type === "calendar" && channel.visible
  );

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="flex flex-col gap-8 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Wordmark />
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-6">
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
        </div>
        <nav
          aria-label="Contacto y redes"
          className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6"
        >
          {siteConfig.socialLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium no-underline text-foreground-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          {calendar ? (
            <Link
              href={calendar.href}
              className="text-sm font-medium no-underline text-foreground-muted transition-colors hover:text-foreground"
            >
              {calendar.label}
            </Link>
          ) : null}
        </nav>
      </Container>
    </footer>
  );
}
