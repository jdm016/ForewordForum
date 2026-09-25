import { waitlist } from "@/content/home";

export type WaitlistInput = {
  name: string;
  email: string;
  role: string;
  message: string;
};

export type WaitlistErrors = Partial<Record<keyof WaitlistInput, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Shared by the form (client) and the API route (server). */
export function validateWaitlist(input: WaitlistInput): WaitlistErrors {
  const errors: WaitlistErrors = {};
  if (!input.name.trim()) errors.name = "Please add your name.";
  else if (input.name.length > 120) errors.name = "Please keep your name under 120 characters.";
  if (!input.email.trim()) errors.email = "Please add your email address.";
  else if (!EMAIL.test(input.email.trim())) errors.email = "Please enter an email address like name@example.com.";
  if (!waitlist.roles.includes(input.role)) errors.role = "Please choose the option that fits you best.";
  if (input.message.length > 2000) errors.message = "Please keep your message under 2,000 characters.";
  return errors;
}
