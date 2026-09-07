import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

// Cloudflare's public Turnstile test secret — always verifies success.
// Only used as a local-dev fallback; production sets TURNSTILE_SECRET_KEY
// via Vercel env.
const TURNSTILE_SECRET_FALLBACK = "1x0000000000000000000000000000000AA";

const GENERIC_ERROR = "Something went wrong — please email me directly.";
const GENERIC_SUCCESS = "Message sent — thanks for reaching out.";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  turnstileToken?: unknown;
};

function fail(status: number) {
  return NextResponse.json({ ok: false, message: GENERIC_ERROR }, { status });
}

function validate(payload: ContactPayload) {
  const { name, email, message, turnstileToken } = payload;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    typeof turnstileToken !== "string"
  ) {
    return null;
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName || !trimmedEmail || !trimmedMessage || !turnstileToken) {
    return null;
  }

  if (trimmedName.length > 120) return null;
  if (!emailPattern.test(trimmedEmail)) return null;
  if (trimmedMessage.length < 10 || trimmedMessage.length > 5000) return null;

  return {
    name: trimmedName,
    email: trimmedEmail,
    message: trimmedMessage,
    turnstileToken,
  };
}

async function verifyTurnstile(token: string, ip: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY ?? TURNSTILE_SECRET_FALLBACK;

  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);
  if (ip) body.set("remoteip", ip);

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body }
  );

  if (!response.ok) return false;

  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return fail(400);
  }

  const validated = validate(payload);
  if (!validated) {
    return fail(400);
  }

  const ip = request.headers.get("x-forwarded-for");

  try {
    const turnstileOk = await verifyTurnstile(validated.turnstileToken, ip);
    if (!turnstileOk) {
      return fail(400);
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    if (!resendApiKey || !toEmail) {
      return fail(500);
    }

    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: toEmail,
      subject: `Portfolio contact from ${validated.name}`,
      replyTo: validated.email,
      text: `Name: ${validated.name}\nEmail: ${validated.email}\n\n${validated.message}`,
    });

    if (error) {
      return fail(502);
    }
  } catch {
    return fail(500);
  }

  return NextResponse.json({ ok: true, message: GENERIC_SUCCESS }, { status: 200 });
}
