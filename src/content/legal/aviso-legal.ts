import { legalDocumentSchema } from "@/lib/validations/content";

export const avisoLegal = legalDocumentSchema.parse({
  id: "aviso-legal",
  slug: "aviso-legal",
  title: "Aviso legal",
  status: "published",
  updatedAt: "2026-08-15",
  metadata: {
    title: "Aviso legal",
    description:
      "Información del prestador de servicios de la sociedad de la información conforme al art. 10 LSSI-CE.",
  },
  sections: [
    {
      heading: "Datos del prestador",
      paragraphs: [
        "En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos identificativos del prestador de este sitio web.",
        "Titular: Alejandro Domingo Agustí.",
        "NIF: 21002968N.",
        "Domicilio: C/ Higinio Noja 21, puerta 9 — 46023 Valencia, Comunidad Valenciana, España.",
        "Correo de contacto: hola@alexendros.dev.",
        "Sitio web: https://alexendros.dev.",
      ],
    },
    {
      heading: "Situación del prestador",
      paragraphs: [
        "La actividad se ejerce sin alta de autónomo mientras la facturación no supere el SMI anual (DEC-SPECS-05; ADR-0015). Este aviso DEBE actualizarse al formalizar el alta.",
        "La prestación efectiva de servicios profesionales a través de este sitio mantiene aplicable la LSSI-CE.",
      ],
    },
    {
      heading: "Objeto del sitio",
      paragraphs: [
        "Este sitio presenta servicios profesionales de desarrollo web, landing pages, automatización/IA y auditoría web, y canaliza solicitudes de contacto. No es una plataforma SaaS ni un comercio electrónico.",
      ],
    },
    {
      heading: "Propiedad intelectual",
      paragraphs: [
        "Salvo indicación en contrario, los textos, diseño, código propio y marcas mostrados en este sitio pertenecen a su titular o se usan con licencia. Queda prohibida la reproducción no autorizada con fines comerciales.",
      ],
    },
    {
      heading: "Responsabilidad",
      paragraphs: [
        "El contenido informativo del sitio se ofrece de buena fe. No constituye asesoramiento jurídico, fiscal ni garantía de resultado. El uso de enlaces a terceros (por ejemplo, Cal.com o repositorios) se realiza bajo la responsabilidad del usuario.",
      ],
    },
    {
      heading: "Legislación aplicable",
      paragraphs: [
        "Este aviso se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales del domicilio del prestador, salvo norma imperativa en contrario.",
      ],
    },
  ],
});
