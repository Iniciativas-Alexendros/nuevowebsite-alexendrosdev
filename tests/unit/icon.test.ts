import { describe, expect, it } from "vitest";

import { iconSizes } from "@/components/ui/icon";

describe("iconSizes", () => {
  it("fija la escala de tamaños canónica (DESIGN §7)", () => {
    expect(iconSizes).toEqual({
      xs: 14,
      sm: 16,
      md: 20,
      lg: 24,
      xl: 32,
    });
  });
});
