/**
 * Lista cerrada de asuntos del formulario (REQ-FORM-CONTACT-001).
 * Campo opcional; valores tipados y compartidos cliente/servidor.
 */
export const CONTACT_SUBJECTS = [
  "Proyecto de software · Programación de aplicaciones",
  "Portal · Blog · Portafolio",
  "Formación en Nuevas Tecnologías · Herramientas IA para la empresa",
  "Auditoría de seguridad y posicionamiento",
  "Sistemas profesionales · Flujos de trabajos automatizables",
  "Asesoramiento tecnológico · Consultor especializado",
] as const;

export type ContactSubject = (typeof CONTACT_SUBJECTS)[number];

export const contactSubjects = CONTACT_SUBJECTS;
