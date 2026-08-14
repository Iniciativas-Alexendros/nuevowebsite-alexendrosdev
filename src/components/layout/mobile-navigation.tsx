"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Link } from "@/components/ui/link";
import { Icon } from "@/components/ui/icon";
import { siteConfig } from "@/content/site";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      const details = detailsRef.current;
      if (!details) return;
      details.open = false;
      details.querySelector("summary")?.focus();
    }

    function handlePointerDown(event: PointerEvent) {
      const details = detailsRef.current;
      if (!details) return;
      if (event.target instanceof Node && !details.contains(event.target)) {
        details.open = false;
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  useEffect(() => {
    const details = detailsRef.current;
    if (details) details.open = false;
  }, [pathname]);

  function close() {
    const details = detailsRef.current;
    if (!details) return;
    details.open = false;
  }

  return (
    <details
      ref={detailsRef}
      className="relative md:hidden"
      onToggle={(event) => setOpen(event.currentTarget.open)}
    >
      <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md text-foreground transition-colors hover:bg-button-subtle-hover [&::-webkit-details-marker]:hidden">
        <Icon icon={open ? X : Menu} size="md" />
        <span className="sr-only">Menú</span>
      </summary>
      <nav
        aria-label="Principal"
        className="absolute right-0 top-full z-dropdown mt-2 w-56 rounded-md border border-border bg-surface-raised p-2 shadow-lg"
      >
        <ul className="flex flex-col">
          {siteConfig.navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={close}
                className="block rounded-md px-3 py-2 text-sm font-medium no-underline text-foreground-muted transition-colors hover:bg-button-subtle-hover hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
