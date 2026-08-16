import { describe, expect, it } from "vitest";

import { isNativeProtocolHref } from "@/components/ui/link";

describe("Link protocol helpers", () => {
  it("trata mailto/tel/sms como protocolo nativo (no NextLink)", () => {
    expect(isNativeProtocolHref("mailto:hola@alexendros.dev")).toBe(true);
    expect(isNativeProtocolHref("tel:+34123456789")).toBe(true);
    expect(isNativeProtocolHref("sms:+34123456789")).toBe(true);
  });

  it("no marca http(s) ni rutas internas como protocolo nativo", () => {
    expect(isNativeProtocolHref("https://alexendros.dev")).toBe(false);
    expect(isNativeProtocolHref("/contacto")).toBe(false);
  });

  it("el regex legacy https?-only NO detecta mailto (regresión Bugbot)", () => {
    const legacyExternal = /^https?:\/\//i.test("mailto:hola@alexendros.dev");
    expect(legacyExternal).toBe(false);
  });
});
