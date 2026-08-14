import { describe, expect, it } from "vitest";

import { buttonVariants } from "@/components/ui/button";

describe("buttonVariants", () => {
  it("aplica variante primaria y tamaño medio por defecto", () => {
    const classes = buttonVariants();

    expect(classes).toContain("bg-primary");
    expect(classes).toContain("h-11");
    expect(classes).toContain("rounded-md");
  });

  it("mapea cada variante a sus clases de fondo", () => {
    expect(buttonVariants({ variant: "secondary" })).toContain("bg-secondary");
    expect(buttonVariants({ variant: "outline" })).toContain("border");
    expect(buttonVariants({ variant: "ghost" })).toContain("hover:bg-button-subtle-hover");
    expect(buttonVariants({ variant: "destructive" })).toContain("bg-destructive");
  });

  it("mapea cada tamaño a su altura", () => {
    expect(buttonVariants({ size: "sm" })).toContain("h-9");
    expect(buttonVariants({ size: "lg" })).toContain("h-12");
    expect(buttonVariants({ size: "icon" })).toContain("h-11");
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
