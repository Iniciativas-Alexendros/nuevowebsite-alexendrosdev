/**
 * Lista cerrada de asuntos del formulario (REQ-FORM-CONTACT-001).
 * Campo opcional; valores tipados y compartidos cliente/servidor.
 *
 * Taxonomía comercial (no 1:1 con los 4 servicios DEC-SPECS-02):
 * - Desarrollo web / software → "Proyecto de software · Programación de aplicaciones"
 * - Portales / portfolio → "Portal · Blog · Portafolio"
 * - Formación / IA → "Formación en Nuevas Tecnologías · Herramientas IA para la empresa"
 * - Auditoría → "Auditoría de seguridad y posicionamiento"
 * - Automatización → "Sistemas profesionales · Flujos de trabajos automatizables"
 * - Transversal → "Asesoramiento tecnológico · Consultor especializado"
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
