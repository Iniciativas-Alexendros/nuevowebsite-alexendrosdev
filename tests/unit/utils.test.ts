import { describe, expect, it } from "vitest";

import { cn } from "@/lib/utils";

describe("cn", () => {
  it("concatena clases", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("ignora valores falsy", () => {
    expect(cn("a", false, null, undefined, "", "b")).toBe("a b");
  });

  it("resuelve conflictos de Tailwind con tailwind-merge", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });
});
