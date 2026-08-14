import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Link } from "@/components/ui/link";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "La página que buscas no existe o ha cambiado de dirección.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <Container className="py-16 lg:py-24">
      <h1 className="text-3xl font-semibold text-foreground md:text-4xl">Página no encontrada</h1>
      <p className="mt-4 max-w-2xl text-lg text-foreground-muted">
        La página que buscas no existe o ha cambiado de dirección.
      </p>
      <nav aria-label="Enlaces sugeridos" className="mt-8">
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          {siteConfig.navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
