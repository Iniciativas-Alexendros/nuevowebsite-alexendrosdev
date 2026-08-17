import { NextResponse } from "next/server";

import { getContactEmailConfig } from "@/lib/env";
import { sendContactEmail } from "@/lib/server/email";
import { checkRateLimit } from "@/lib/server/rate-limit";
import { contactFormSchema, type ContactApiResponse } from "@/lib/validations/contact-form";

export const runtime = "nodejs";

const SUCCESS_MESSAGE = "Mensaje enviado. Te responderé lo antes posible.";
const NEUTRAL_SUCCESS = SUCCESS_MESSAGE;
const VALIDATION_MESSAGE = "Revisa los campos del formulario.";
const RATE_LIMIT_MESSAGE = "Has enviado demasiados mensajes. Inténtalo de nuevo más tarde.";
const UNAVAILABLE_MESSAGE =
  "El formulario no está disponible ahora mismo. Puedes escribirme por email o agendar una llamada.";
const PROVIDER_MESSAGE =
  "No he podido enviar el mensaje. Inténtalo de nuevo o usa otro canal de contacto.";
const INTERNAL_MESSAGE = "Ha ocurrido un error. Inténtalo de nuevo más tarde.";

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}

function fieldErrorsFromZod(error: import("zod").ZodError): Record<string, string[]> {
  const fieldErrors: Record<string, string[]> = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key !== "string") continue;
    if (!fieldErrors[key]) fieldErrors[key] = [];
    fieldErrors[key].push(issue.message);
  }
  return fieldErrors;
}

export async function POST(request: Request): Promise<NextResponse<ContactApiResponse>> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, code: "validation", message: VALIDATION_MESSAGE },
      { status: 400 }
    );
  }

  // Honeypot: respuesta neutra sin registrar datos personales.
  if (
    body !== null &&
    typeof body === "object" &&
    "website" in body &&
    typeof (body as { website?: unknown }).website === "string" &&
    (body as { website: string }).website.length > 0
  ) {
    return NextResponse.json({ ok: true, message: NEUTRAL_SUCCESS }, { status: 200 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        code: "validation",
        message: VALIDATION_MESSAGE,
        fieldErrors: fieldErrorsFromZod(parsed.error),
      },
      { status: 400 }
    );
  }

  const config = getContactEmailConfig();
  if (!config) {
    return NextResponse.json(
      { ok: false, code: "unavailable", message: UNAVAILABLE_MESSAGE },
      { status: 503 }
    );
  }

  const limit = checkRateLimit(clientIp(request), config.rateLimitMax);
  if (!limit.allowed) {
    const retryAfterSec = Math.max(1, Math.ceil(limit.retryAfterMs / 1000));
    return NextResponse.json(
      { ok: false, code: "rate_limit", message: RATE_LIMIT_MESSAGE },
      {
        status: 429,
        headers: { "Retry-After": String(retryAfterSec) },
      }
    );
  }

  try {
    const result = await sendContactEmail({ config, data: parsed.data });
    if (!result.ok) {
      return NextResponse.json(
        { ok: false, code: "provider", message: PROVIDER_MESSAGE },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, message: SUCCESS_MESSAGE }, { status: 200 });
  } catch {
    console.error("[contact] error interno");
    return NextResponse.json(
      { ok: false, code: "internal", message: INTERNAL_MESSAGE },
      { status: 500 }
    );
  }
}
