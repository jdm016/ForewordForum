import { NextResponse } from "next/server";
import { validateWaitlist, type WaitlistInput } from "@/lib/waitlist";

/**
 * Waitlist signups.
 *
 * TODO: FORM PROVIDER. Set FORM_ENDPOINT to any URL that accepts a JSON POST
 * (Formspree, Basin, a Zapier or Make webhook, an email service's API, etc.).
 * Optional FORM_ENDPOINT_TOKEN is sent as a Bearer token.
 * Without FORM_ENDPOINT, submissions are logged to the server console only,
 * which is fine for local development and NOT for production.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success and drop it.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const input: WaitlistInput = {
    name: String(body.name ?? "").trim(),
    email: String(body.email ?? "").trim(),
    role: String(body.role ?? ""),
    message: String(body.message ?? "").trim(),
  };

  const errors = validateWaitlist(input);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const payload = { ...input, source: "forewordforum.com waitlist", submittedAt: new Date().toISOString() };
  const endpoint = process.env.FORM_ENDPOINT;

  if (!endpoint) {
    console.log("[waitlist] FORM_ENDPOINT not set. Submission:", payload);
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(process.env.FORM_ENDPOINT_TOKEN ? { Authorization: `Bearer ${process.env.FORM_ENDPOINT_TOKEN}` } : {}),
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error("[waitlist] Provider responded with", res.status);
      return NextResponse.json({ ok: false }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[waitlist] Could not reach provider", err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
