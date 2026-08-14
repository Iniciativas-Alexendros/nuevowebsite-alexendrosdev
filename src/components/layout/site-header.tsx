import { Container } from "@/components/layout/container";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Navigation } from "@/components/layout/navigation";
import { Wordmark } from "@/components/layout/wordmark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-sticky border-b border-border bg-surface-raised">
      <Container className="flex h-16 items-center justify-between">
        <Wordmark />
        <div className="flex items-center gap-2">
          <Navigation />
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
