import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Search, Send, X } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Alert } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Icon } from "@/components/ui/icon";
import { IconButton } from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input";
import { Link } from "@/components/ui/link";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Catálogo de componentes",
  robots: { index: false, follow: false },
};

function Heading({ children }: { children: ReactNode }) {
  return <h2 className="text-xl font-semibold text-foreground">{children}</h2>;
}

function Palette() {
  const swatches = [
    { label: "background", className: "bg-background text-foreground border border-border" },
    { label: "surface", className: "bg-surface text-foreground" },
    { label: "surface-raised", className: "bg-surface-raised text-foreground" },
    { label: "surface-sunken", className: "bg-surface-sunken text-foreground" },
    { label: "primary", className: "bg-primary text-primary-foreground" },
    { label: "secondary", className: "bg-secondary text-secondary-foreground" },
    { label: "muted", className: "bg-muted text-muted-foreground" },
    { label: "destructive", className: "bg-destructive text-destructive-foreground" },
    { label: "success", className: "bg-success text-success-foreground" },
    { label: "warning", className: "bg-warning text-warning-foreground" },
    { label: "info", className: "bg-info text-info-foreground" },
  ] as const;

  return (
    <div className="flex flex-wrap gap-3">
      {swatches.map((swatch) => (
        <div
          key={swatch.label}
          className={`flex h-12 min-w-24 items-center justify-center rounded-md px-3 text-xs font-medium ${swatch.className}`}
        >
          {swatch.label}
        </div>
      ))}
    </div>
  );
}

export default function CatalogPage() {
  return (
    <>
      <Section>
        <Container className="flex flex-col gap-12">
          <header className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold text-foreground">Catálogo de componentes</h1>
            <p className="text-foreground-muted">
              Página temporal de QA visual. No indexada por buscadores.
            </p>
          </header>

          <section className="flex flex-col gap-4">
            <Heading>Paleta semántica</Heading>
            <Palette />
          </section>

          <Separator />

          <section className="flex flex-col gap-4">
            <Heading>Botones</Heading>
            <div className="flex flex-wrap items-center gap-3">
              <Button>Primario</Button>
              <Button variant="secondary">Secundario</Button>
              <Button variant="outline">Contorno</Button>
              <Button variant="ghost">Fantasma</Button>
              <Button variant="destructive">Destructivo</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Pequeño</Button>
              <Button size="lg">Grande</Button>
              <Button loading>Con loading</Button>
              <Button disabled>Deshabilitado</Button>
              <Button>
                <Icon icon={Send} size="sm" />
                Con icono
              </Button>
            </div>
          </section>

          <Separator />

          <section className="flex flex-col gap-4">
            <Heading>Enlaces</Heading>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/">Enlace interno en línea</Link>
              <Link href="/" variant="primary">
                Enlace con estilo botón
              </Link>
              <Link href="/" variant="secondary" size="sm">
                Secundario pequeño
              </Link>
              <Link href="https://example.com" variant="outline">
                Enlace externo
              </Link>
            </div>
          </section>

          <Separator />

          <section className="flex flex-col gap-4">
            <Heading>IconButton</Heading>
            <div className="flex flex-wrap items-center gap-3">
              <IconButton icon={Search} label="Buscar" />
              <IconButton icon={X} label="Cerrar" variant="outline" />
              <IconButton icon={Search} label="Buscar" size="sm" />
              <IconButton icon={Search} label="Buscar" size="lg" />
            </div>
          </section>

          <Separator />

          <section className="flex flex-col gap-4">
            <Heading>Badges</Heading>
            <div className="flex flex-wrap items-center gap-3">
              <Badge>Predeterminado</Badge>
              <Badge variant="secondary">Secundario</Badge>
              <Badge variant="outline">Contorno</Badge>
              <Badge variant="destructive">Destructivo</Badge>
            </div>
          </section>

          <Separator />

          <section className="flex max-w-md flex-col gap-6">
            <Heading>Campos de formulario</Heading>
            <Field id="catalog-name" label="Nombre" required help="Cómo te llamamos.">
              <Input placeholder="Nombre y apellidos" />
            </Field>
            <Field id="catalog-email" label="Correo" error="Introduce un correo válido.">
              <Input type="email" placeholder="correo@ejemplo.com" />
            </Field>
            <Field id="catalog-message" label="Mensaje">
              <Textarea placeholder="Escribe tu mensaje…" />
            </Field>
            <Input disabled placeholder="Campo deshabilitado" />
          </section>

          <Separator />

          <section className="flex max-w-xl flex-col gap-4">
            <Heading>Alertas</Heading>
            <Alert variant="default" title="Información">
              Mensaje informativo genérico.
            </Alert>
            <Alert variant="info" title="Aviso">
              Mensaje informativo de contexto.
            </Alert>
            <Alert variant="success" title="Correcto">
              La operación se completó.
            </Alert>
            <Alert variant="warning" title="Atención">
              Revisa antes de continuar.
            </Alert>
            <Alert variant="destructive" title="Error">
              Algo salió mal.
            </Alert>
          </section>

          <Separator />

          <section className="flex flex-col gap-4">
            <Heading>Esqueleto de carga</Heading>
            <div className="flex flex-col gap-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-32 w-full" />
            </div>
          </section>

          <Separator />

          <section className="flex flex-col gap-4">
            <Heading>Separador y spinner</Heading>
            <div className="flex h-16 items-center gap-4">
              <span className="text-foreground-muted">Horizontal</span>
              <Separator className="flex-1" />
              <Separator orientation="vertical" className="h-8" />
              <span className="text-foreground-muted">Vertical</span>
            </div>
            <div className="flex items-center gap-4">
              <Spinner size="sm" label="Cargando (pequeño)" />
              <Spinner />
              <Spinner size="lg" label="Cargando (grande)" />
            </div>
          </section>
        </Container>
      </Section>
    </>
  );
}
