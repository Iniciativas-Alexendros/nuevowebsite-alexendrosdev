import { afterEach, describe, expect, it } from "vitest";

import { checkRateLimit, resetRateLimitStore } from "@/lib/server/rate-limit";

afterEach(() => {
  resetRateLimitStore();
});

describe("checkRateLimit", () => {
  it("permite hasta max envíos en la ventana", () => {
    const now = 1_000_000;
    expect(checkRateLimit("1.1.1.1", 2, now).allowed).toBe(true);
    expect(checkRateLimit("1.1.1.1", 2, now + 1).allowed).toBe(true);
    expect(checkRateLimit("1.1.1.1", 2, now + 2).allowed).toBe(false);
  });

  it("aísla claves distintas", () => {
    const now = 1_000_000;
    expect(checkRateLimit("a", 1, now).allowed).toBe(true);
    expect(checkRateLimit("b", 1, now).allowed).toBe(true);
    expect(checkRateLimit("a", 1, now + 1).allowed).toBe(false);
  });

  it("libera capacidad al salir timestamps de la ventana", () => {
    const now = 1_000_000;
    expect(checkRateLimit("ip", 1, now).allowed).toBe(true);
    expect(checkRateLimit("ip", 1, now + 1).allowed).toBe(false);
    expect(checkRateLimit("ip", 1, now + 60 * 60 * 1000 + 1).allowed).toBe(true);
  });
});
