import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Navigation } from "@/components/layout/navigation";
import { Wordmark } from "@/components/layout/wordmark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-[1100] border-b border-border bg-surface-raised">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-6 lg:px-8">
        <Wordmark />
        <div className="flex items-center gap-2">
          <Navigation />
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
