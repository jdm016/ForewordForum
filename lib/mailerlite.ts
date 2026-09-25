import type { WaitlistInput } from "./waitlist";

/**
 * Adds a waitlist signup to MailerLite as a subscriber, in the group that
 * matches their role. Groups are looked up by name, so the MailerLite groups
 * must be named exactly like the "I am a..." options in content/home.ts:
 * Student, Parent or guardian, Educator, Supporter.
 *
 * Needs MAILERLITE_API_KEY (set in Netlify, never committed).
 */

const API = "https://connect.mailerlite.com/api";

// Group name -> id, cached for the life of the serverless function.
const groupIds = new Map<string, string>();

function headers(key: string) {
  return {
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

async function findGroupId(key: string, name: string): Promise<string | undefined> {
  const cached = groupIds.get(name);
  if (cached) return cached;

  const url = `${API}/groups?limit=100&filter[name]=${encodeURIComponent(name)}`;
  const res = await fetch(url, { headers: headers(key), signal: AbortSignal.timeout(8000) });
  if (!res.ok) throw new Error(`MailerLite group lookup failed with ${res.status}`);

  const body = (await res.json()) as { data?: { id: string; name: string }[] };
  // The API filter is a partial match, so pick the exact name.
  const group = body.data?.find((g) => g.name.trim().toLowerCase() === name.trim().toLowerCase());
  if (group) groupIds.set(name, group.id);
  return group?.id;
}

export function mailerliteEnabled() {
  return Boolean(process.env.MAILERLITE_API_KEY);
}

export async function addToMailerLite(input: WaitlistInput): Promise<void> {
  const key = process.env.MAILERLITE_API_KEY;
  if (!key) return;

  const groupId = await findGroupId(key, input.role);
  if (!groupId) {
    // Still subscribe them, so nobody is lost, and flag the missing group.
    console.error(`[waitlist] MailerLite group "${input.role}" not found. Subscriber added without a group.`);
  }

  // POST /subscribers creates the subscriber, or updates them if the email
  // already exists. Existing group memberships are kept.
  const res = await fetch(`${API}/subscribers`, {
    method: "POST",
    headers: headers(key),
    body: JSON.stringify({
      email: input.email,
      fields: { name: input.name },
      ...(groupId ? { groups: [groupId] } : {}),
    }),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`MailerLite subscribe failed with ${res.status}`);
}
