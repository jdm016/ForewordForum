import { NextResponse } from "next/server";
import { addToMailerLite, mailerliteEnabled } from "@/lib/mailerlite";
import { validateWaitlist, type WaitlistInput } from "@/lib/waitlist";

/**
 * Waitlist signups. Each signup is sent to every destination that is set up:
 *   FORM_ENDPOINT       a form service such as Formspree (keeps a record and emails you)
 *   MAILERLITE_API_KEY  adds the person to MailerLite in the group for their role
 *
 * FORM_ENDPOINT can be any URL that accepts a JSON POST (Formspree, Basin, a
 * Zapier or Make webhook). Optional FORM_ENDPOINT_TOKEN is sent as a Bearer token.
 * With neither variable set, submissions are only logged to the server console,
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
  if (typeof body.ff_check === "string" && body.ff_check.trim() !== "") {
    console.warn("[waitlist] Hidden anti-bot field was filled. Submission dropped.");
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

  if (!endpoint && !mailerliteEnabled()) {
    console.log("[waitlist] No destinations configured. Submission:", payload);
    return NextResponse.json({ ok: true });
  }

  // Send to every configured destination at once. The signup counts as saved
  // if at least one of them accepts it, so a problem with one never loses it.
  const destinations: { name: string; send: Promise<void> }[] = [];
  if (endpoint) destinations.push({ name: "form endpoint", send: sendToFormEndpoint(endpoint, payload) });
  if (mailerliteEnabled()) destinations.push({ name: "MailerLite", send: addToMailerLite(input) });

  const results = await Promise.allSettled(destinations.map((d) => d.send));
  results.forEach((r, i) => {
    if (r.status === "rejected") console.error(`[waitlist] ${destinations[i].name} failed:`, r.reason);
  });

  if (results.some((r) => r.status === "fulfilled")) {
    return NextResponse.json({ ok: true });
  }
  return NextResponse.json({ ok: false }, { status: 502 });
}

async function sendToFormEndpoint(endpoint: string, payload: Record<string, unknown>): Promise<void> {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(process.env.FORM_ENDPOINT_TOKEN ? { Authorization: `Bearer ${process.env.FORM_ENDPOINT_TOKEN}` } : {}),
    },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`Form endpoint responded with ${res.status}`);
}
