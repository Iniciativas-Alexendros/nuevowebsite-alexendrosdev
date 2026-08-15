import { legalDocumentSchema } from "@/lib/validations/content";

export const privacidad = legalDocumentSchema.parse({
  id: "privacidad",
  slug: "privacidad",
  title: "Política de privacidad",
  status: "review",
  updatedAt: "2026-08-15",
  metadata: {
    title: "Política de privacidad",
    description:
      "Información sobre el tratamiento de datos personales conforme al art. 13 RGPD y la LOPDGDD.",
  },
  sections: [
    {
      heading: "Responsable del tratamiento",
      paragraphs: [
        "Responsable: Alexendros ([PENDIENTE: nombre completo / razón social]).",
        "NIF: [PENDIENTE: NIF].",
        "Domicilio: [PENDIENTE: domicilio].",
        "Correo: hola@alexendros.dev.",
      ],
    },
    {
      heading: "Finalidad y base jurídica",
      paragraphs: [
        "Trato los datos que envías a través del formulario de contacto (nombre, email, empresa opcional, asunto y mensaje) para responder a tu solicitud y, si procede, iniciar una conversación profesional.",
        "Base jurídica: [PENDIENTE: base jurídica — p. ej. consentimiento art. 6.1.a RGPD y/o medidas precontractuales art. 6.1.b]. El consentimiento del formulario NO está premarcado.",
        "También puedes contactarme por email o agendar una llamada mediante Cal.com; en ese caso aplican además las condiciones del proveedor correspondiente.",
      ],
    },
    {
      heading: "Datos tratados",
      paragraphs: [
        "Categorías: datos de identificación y contacto (nombre, email), datos profesionales opcionales (empresa) y el contenido del mensaje.",
        "No solicito categorías especiales de datos. Te pido que no incluyas información sensible innecesaria en el mensaje.",
      ],
    },
    {
      heading: "Conservación",
      paragraphs: [
        "Conservaré los mensajes el tiempo necesario para gestionar tu solicitud y, como máximo, [PENDIENTE: plazo de conservación] desde la última comunicación, salvo obligación legal de retención.",
      ],
    },
    {
      heading: "Destinatarios y encargados",
      paragraphs: [
        "El correo se envía mediante Proton Mail (SMTP) desde el servidor de la aplicación (ADR-0011). El alojamiento del sitio está en Vercel (ADR-0017).",
        "No vendo ni cedo tus datos a terceros con fines comerciales. No hay analítica ni cookies no esenciales en el MVP (ADR-0010).",
      ],
    },
    {
      heading: "Transferencias internacionales",
      paragraphs: [
        "Vercel puede procesar datos en infraestructura fuera del EEE. [PENDIENTE: detalle de salvaguardas / cláusulas contractuales tipo aplicables].",
      ],
    },
    {
      heading: "Derechos",
      paragraphs: [
        "Puedes ejercer acceso, rectificación, supresión, limitación, oposición y portabilidad escribiendo a hola@alexendros.dev.",
        "También puedes reclamar ante la Agencia Española de Protección de Datos (https://www.aepd.es).",
      ],
    },
    {
      heading: "Actualizaciones",
      paragraphs: [
        "Actualizaré esta política cuando cambien los tratamientos, proveedores o la situación del prestador. La fecha de actualización figura en el documento tipado del repositorio.",
      ],
    },
  ],
});
