import { CONTACT_SUBJECTS, type ContactSubject } from "@/content/contact-subjects";

/**
 * Claves cortas de `?subject=` → asunto tipado (taxonomía CONTENT §6).
 * No es 1:1 con slugs de servicio; el mapa de servicio vive aparte.
 */
export const CONTACT_SUBJECT_QUERY_KEYS = {
  desarrollo: "Proyecto de software · Programación de aplicaciones",
  portal: "Portal · Blog · Portafolio",
  formacion: "Formación en Nuevas Tecnologías · Herramientas IA para la empresa",
  auditoria: "Auditoría de seguridad y posicionamiento",
  automatizacion: "Sistemas profesionales · Flujos de trabajos automatizables",
  asesoramiento: "Asesoramiento tecnológico · Consultor especializado",
} as const satisfies Record<string, ContactSubject>;

export type ContactSubjectQueryKey = keyof typeof CONTACT_SUBJECT_QUERY_KEYS;

const SERVICE_SLUG_TO_QUERY: Record<string, ContactSubjectQueryKey> = {
  "produccion-sitios-web": "desarrollo",
  auditorias: "auditoria",
  "consultoria-tecnologica": "asesoramiento",
};

export function resolveContactSubjectQuery(
  raw: string | null | undefined
): ContactSubject | undefined {
  if (!raw) return undefined;
  const key = raw.trim().toLowerCase();
  if (key in CONTACT_SUBJECT_QUERY_KEYS) {
    return CONTACT_SUBJECT_QUERY_KEYS[key as ContactSubjectQueryKey];
  }
  // Acepta el valor completo del asunto (deep-link legado / copy-paste).
  if ((CONTACT_SUBJECTS as readonly string[]).includes(raw)) {
    return raw as ContactSubject;
  }
  return undefined;
}

export function contactHrefForServiceSlug(slug: string, baseHref = "/contacto"): string {
  const queryKey = SERVICE_SLUG_TO_QUERY[slug];
  if (!queryKey) return baseHref;
  const url = new URL(baseHref, "https://alexendros.dev");
  url.searchParams.set("subject", queryKey);
  return `${url.pathname}?${url.searchParams.toString()}`;
}
