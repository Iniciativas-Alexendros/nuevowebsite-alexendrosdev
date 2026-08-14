import { describe, expect, it } from "vitest";

import {
  contactChannelSchema,
  contactChannelsSchema,
  contactChannelTypeSchema,
} from "@/lib/validations/content";

const validChannel = {
  type: "email",
  label: "Correo",
  href: "mailto:hola@alexendros.dev",
  visible: true,
  priority: 1,
};

describe("contactChannelTypeSchema", () => {
  it.each(["email", "form", "calendar"])("acepta el tipo %s", (value) => {
    expect(contactChannelTypeSchema.safeParse(value).success).toBe(true);
  });

  it("rechaza un valor ajeno al enum", () => {
    expect(contactChannelTypeSchema.safeParse("telefono").success).toBe(false);
  });
});

describe("contactChannelSchema", () => {
  it("acepta un canal de contacto válido", () => {
    expect(contactChannelSchema.safeParse(validChannel).success).toBe(true);
  });

  it("acepta campos opcionales completos", () => {
    expect(
      contactChannelSchema.safeParse({
        ...validChannel,
        external: false,
        availability: "L-V 9:00-18:00",
        privacyNote: "Nota de privacidad.",
      }).success
    ).toBe(true);
  });

  it("rechaza type ausente", () => {
    const { type: _omitted, ...rest } = validChannel;
    void _omitted;
    expect(contactChannelSchema.safeParse(rest).success).toBe(false);
  });

  it("rechaza type ajeno al enum", () => {
    expect(contactChannelSchema.safeParse({ ...validChannel, type: "telefono" }).success).toBe(
      false
    );
  });

  it("rechaza label vacío", () => {
    expect(contactChannelSchema.safeParse({ ...validChannel, label: "" }).success).toBe(false);
  });

  it("rechaza label de más de 40 caracteres", () => {
    expect(
      contactChannelSchema.safeParse({
        ...validChannel,
        label: "l".repeat(41),
      }).success
    ).toBe(false);
  });

  it("rechaza visible ausente", () => {
    const { visible: _omitted, ...rest } = validChannel;
    void _omitted;
    expect(contactChannelSchema.safeParse(rest).success).toBe(false);
  });

  it("rechaza visible no booleano", () => {
    expect(contactChannelSchema.safeParse({ ...validChannel, visible: "si" }).success).toBe(false);
  });

  it("rechaza priority ausente", () => {
    const { priority: _omitted, ...rest } = validChannel;
    void _omitted;
    expect(contactChannelSchema.safeParse(rest).success).toBe(false);
  });

  it("rechaza priority negativo", () => {
    expect(contactChannelSchema.safeParse({ ...validChannel, priority: -1 }).success).toBe(false);
  });

  it("rechaza priority no entero", () => {
    expect(contactChannelSchema.safeParse({ ...validChannel, priority: 1.5 }).success).toBe(false);
  });

  it("rechaza availability de más de 200 caracteres", () => {
    expect(
      contactChannelSchema.safeParse({
        ...validChannel,
        availability: "a".repeat(201),
      }).success
    ).toBe(false);
  });

  it("rechaza privacyNote de más de 200 caracteres", () => {
    expect(
      contactChannelSchema.safeParse({
        ...validChannel,
        privacyNote: "p".repeat(201),
      }).success
    ).toBe(false);
  });
});

describe("contactChannelsSchema", () => {
  it("acepta un array con un canal", () => {
    expect(contactChannelsSchema.safeParse([validChannel]).success).toBe(true);
  });

  it("rechaza un array vacío", () => {
    expect(contactChannelsSchema.safeParse([]).success).toBe(false);
  });

  it("rechaza un valor que no es array", () => {
    expect(contactChannelsSchema.safeParse(validChannel).success).toBe(false);
  });
});
