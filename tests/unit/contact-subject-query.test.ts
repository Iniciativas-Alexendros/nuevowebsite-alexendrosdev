import { describe, expect, it } from "vitest";

import { contactHrefForServiceSlug, resolveContactSubjectQuery } from "@/lib/contact-subject-query";

describe("contact-subject-query", () => {
  it("resuelve claves cortas a asuntos tipados", () => {
    expect(resolveContactSubjectQuery("auditoria")).toBe(
      "Auditoría de seguridad y posicionamiento"
    );
    expect(resolveContactSubjectQuery("DESARROLLO")).toBe(
      "Proyecto de software · Programación de aplicaciones"
    );
  });

  it("ignora valores desconocidos", () => {
    expect(resolveContactSubjectQuery("no-existe")).toBeUndefined();
    expect(resolveContactSubjectQuery(null)).toBeUndefined();
  });

  it("añade ?subject= según slug de servicio", () => {
    expect(contactHrefForServiceSlug("auditorias")).toBe("/contacto?subject=auditoria");
    expect(contactHrefForServiceSlug("produccion-sitios-web")).toBe("/contacto?subject=desarrollo");
    expect(contactHrefForServiceSlug("consultoria-tecnologica")).toBe(
      "/contacto?subject=asesoramiento"
    );
    expect(contactHrefForServiceSlug("desconocido")).toBe("/contacto");
  });
});
