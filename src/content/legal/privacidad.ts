import { legalDocumentSchema } from "@/lib/validations/content";

export const privacidad = legalDocumentSchema.parse({
  id: "privacidad",
  slug: "privacidad",
  title: "Política de privacidad",
  status: "published",
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
        "Responsable: Alejandro Domingo Agustí.",
        "NIF: 21002968N.",
        "Domicilio: C/ Higinio Noja 21, puerta 9 — 46023 Valencia, Comunidad Valenciana, España.",
        "Correo: hola@alexendros.dev.",
      ],
    },
    {
      heading: "Finalidad y base jurídica",
      paragraphs: [
        "Trato los datos que envías a través del formulario de contacto (nombre, email, empresa opcional, asunto y mensaje) para responder a tu solicitud y, si procede, iniciar una conversación profesional.",
        "Base jurídica: art. 6.1.b del RGPD (medidas precontractuales a petición del interesado), para responder a solicitudes profesionales del formulario. El checkbox del formulario documenta la información previa (art. 13 RGPD) y la aceptación operativa del envío; no está premarcado. No uso los datos para marketing ni para finalidades adicionales.",
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
        "Conservaré los mensajes el tiempo necesario para gestionar tu solicitud y, como máximo, 12 meses desde la última comunicación, salvo obligación legal de retención. Al cerrar la gestión, si no hay relación posterior, procedo al borrado o a la anonimización.",
      ],
    },
    {
      heading: "Destinatarios y encargados",
      paragraphs: [
        "El correo se envía mediante Proton Mail (SMTP) desde el servidor de la aplicación (ADR-0011). El alojamiento del sitio está en Vercel (ADR-0017).",
        "Cal.com solo interviene si abres el enlace externo de reserva; en ese caso aplican las condiciones de ese proveedor.",
        "No vendo ni cedo tus datos a terceros con fines comerciales. No hay analítica ni cookies no esenciales en el MVP (ADR-0010).",
      ],
    },
    {
      heading: "Transferencias internacionales",
      paragraphs: [
        "Vercel puede procesar datos en infraestructura fuera del EEE. Las salvaguardas aplicables incluyen el EU–U.S. Data Privacy Framework y las Standard Contractual Clauses (SCC), con el UK Addendum cuando corresponda. Detalle documental: https://vercel.com/docs/security/compliance.",
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
