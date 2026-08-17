"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Link } from "@/components/ui/link";
import { Icon } from "@/components/ui/icon";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  const closeMenu = useCallback(() => {
    const details = detailsRef.current;
    if (!details) return;
    details.open = false;
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      const details = detailsRef.current;
      if (!details) return;
      closeMenu();
      details.querySelector("summary")?.focus();
    }

    function handlePointerDown(event: PointerEvent) {
      const details = detailsRef.current;
      if (!details) return;
      if (event.target instanceof Node && !details.contains(event.target)) {
        closeMenu();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open, closeMenu]);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  return (
    <details
      ref={detailsRef}
      className="relative md:hidden"
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary
        aria-expanded={open}
        className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md text-foreground transition-colors hover:bg-button-subtle-hover [&::-webkit-details-marker]:hidden"
      >
        <Icon icon={open ? X : Menu} size="md" />
        <span className="sr-only">Menú</span>
      </summary>
      <nav
        aria-label="Principal"
        className="absolute right-0 top-full z-dropdown mt-2 w-56 rounded-md border border-border bg-surface-raised p-2 shadow-lg"
      >
        <ul className="flex flex-col">
          {siteConfig.navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm font-medium no-underline transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-foreground-muted hover:bg-button-subtle-hover hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </details>
  );
}
