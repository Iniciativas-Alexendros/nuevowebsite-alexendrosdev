import { describe, expect, it } from "vitest";

import { buttonVariants } from "@/components/ui/button";

describe("buttonVariants", () => {
  it("aplica variante primaria y tamaño medio por defecto", () => {
    const classes = buttonVariants();

    expect(classes).toContain("bg-primary");
    expect(classes).toContain("h-10");
    expect(classes).toContain("rounded-md");
  });

  it("mapea cada variante a sus clases Forge", () => {
    expect(buttonVariants({ variant: "secondary" })).toContain("bg-secondary");
    expect(buttonVariants({ variant: "secondary" })).toContain("hover:border-border-hover");
    expect(buttonVariants({ variant: "outline" })).toContain("border-border");
    expect(buttonVariants({ variant: "ghost" })).toContain("hover:bg-secondary");
    expect(buttonVariants({ variant: "destructive" })).toContain("bg-destructive");
  });

  it("la variante primary tiene hover, active y glow ámbar tokenizados", () => {
    const classes = buttonVariants({ variant: "primary" });

    expect(classes).toContain("hover:bg-primary-hover");
    expect(classes).toContain("active:bg-primary-active");
    expect(classes).toContain("hover:shadow-[var(--shadow-glow-amber)]");
  });

  it("aplica foco visible con ring tokenizado y sin outline duplicado (NFR-A11Y-002)", () => {
    const classes = buttonVariants();

    expect(classes).toContain("focus-visible:ring-2");
    expect(classes).toContain("focus-visible:ring-ring");
    expect(classes).toContain("focus-visible:ring-offset-background");
    expect(classes).toContain("focus-visible:outline-none");
  });

  it("mapea cada tamaño a su altura", () => {
    expect(buttonVariants({ size: "sm" })).toContain("h-8");
    expect(buttonVariants({ size: "sm" })).toContain("font-mono");
    expect(buttonVariants({ size: "lg" })).toContain("h-11");
    expect(buttonVariants({ size: "icon" })).toContain("h-10");
    expect(buttonVariants({ size: "icon" })).toContain("w-10");
  });

  it("concatena className sin anular las clases base", () => {
    const classes = buttonVariants({ className: "w-full" });

    expect(classes).toContain("w-full");
    expect(classes).toContain("bg-primary");
  });

  it("resuelve conflictos de Tailwind a favor de className", () => {
    expect(buttonVariants({ className: "px-4 px-6" })).toContain("px-6");
  });
});
