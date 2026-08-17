import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { POST } from "@/app/api/contact/route";
import { CONTACT_SUBJECTS } from "@/content/contact-subjects";
import { resetRateLimitStore } from "@/lib/server/rate-limit";

const validBody = {
  name: "Alex Cliente",
  email: "alex@example.com",
  company: "",
  subject: CONTACT_SUBJECTS[0],
  message: "Necesito ayuda con un proyecto de software a medida para mi empresa.",
  consent: true,
  website: "",
};

vi.mock("@/lib/server/email", () => ({
  sendContactEmail: vi.fn(),
}));

vi.mock("@/lib/env", async () => {
  const actual = await vi.importActual<typeof import("@/lib/env")>("@/lib/env");
  return {
    ...actual,
    getContactEmailConfig: vi.fn(),
  };
});

import { sendContactEmail } from "@/lib/server/email";
import { getContactEmailConfig } from "@/lib/env";

function jsonRequest(body: unknown, ip = "203.0.113.10"): Request {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-forwarded-for": ip,
    },
    body: JSON.stringify(body),
  });
}

beforeEach(() => {
  resetRateLimitStore();
  vi.mocked(getContactEmailConfig).mockReturnValue({
    toEmail: "hola@alexendros.dev",
    smtpHost: "smtp.protonmail.ch",
    smtpPort: 587,
    smtpUser: "hola@alexendros.dev",
    smtpToken: "token",
    fromAddress: "hola@alexendros.dev",
    replyTo: null,
    rateLimitMax: 2,
  });
  vi.mocked(sendContactEmail).mockResolvedValue({ ok: true });
});

afterEach(() => {
  vi.clearAllMocks();
});

describe("POST /api/contact", () => {
  it("responde 200 en envío válido", async () => {
    const res = await POST(jsonRequest(validBody));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.ok).toBe(true);
    expect(sendContactEmail).toHaveBeenCalledOnce();
  });

  it("responde 200 neutro si el honeypot tiene valor (sin enviar)", async () => {
    const res = await POST(jsonRequest({ ...validBody, website: "bot" }));
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.ok).toBe(true);
    expect(sendContactEmail).not.toHaveBeenCalled();
  });

  it("responde 400 ante validación fallida", async () => {
    const res = await POST(jsonRequest({ ...validBody, email: "malo" }));
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.ok).toBe(false);
    expect(json.code).toBe("validation");
    expect(json.fieldErrors?.email).toBeTruthy();
  });

  it("responde 503 si el endpoint no está configurado", async () => {
    vi.mocked(getContactEmailConfig).mockReturnValue(null);
    const res = await POST(jsonRequest(validBody));
    expect(res.status).toBe(503);
    expect((await res.json()).code).toBe("unavailable");
  });

  it("responde 429 al superar el rate limit", async () => {
    expect((await POST(jsonRequest(validBody, "198.51.100.1"))).status).toBe(200);
    expect((await POST(jsonRequest(validBody, "198.51.100.1"))).status).toBe(200);
    const limited = await POST(jsonRequest(validBody, "198.51.100.1"));
    expect(limited.status).toBe(429);
    expect(limited.headers.get("Retry-After")).toMatch(/^\d+$/);
    expect(Number(limited.headers.get("Retry-After"))).toBeGreaterThan(0);
    expect((await limited.json()).code).toBe("rate_limit");
  });

  it("responde 502 ante fallo del proveedor", async () => {
    vi.mocked(sendContactEmail).mockResolvedValue({ ok: false, reason: "provider" });
    const res = await POST(jsonRequest(validBody, "198.51.100.50"));
    expect(res.status).toBe(502);
    expect((await res.json()).code).toBe("provider");
  });
});
