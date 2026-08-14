"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (error.digest) {
      console.error(`Error de aplicación: ${error.digest}`);
    }
  }, [error]);

  return (
    <Container className="py-16 lg:py-24">
      <h1 className="text-3xl font-semibold text-foreground md:text-4xl">Algo salió mal</h1>
      <p className="mt-4 max-w-2xl text-lg text-foreground-muted">
        Se produjo un error inesperado. Inténtalo de nuevo.
      </p>
      <Button onClick={reset} className="mt-8">
        Reintentar
      </Button>
    </Container>
  );
}
