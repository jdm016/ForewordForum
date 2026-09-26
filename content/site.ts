/**
 * Site-wide content: name, contact details, navigation, footer.
 * Edit the text between the quotes. Keep the structure the same.
 */

export const site = {
  name: "Foreword Forum",
  // TODO: confirm the production domain. Used for canonical URLs, the sitemap and social cards.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://forewordforum.com",
  tagline: "Your story starts here.",
  email: "hello@forewordforum.com",
  title: "Foreword Forum | College and career readiness in Dallas and online",
  description:
    "College and career readiness for students ages 16 to 26, in Dallas and live online nationwide. Join the waitlist for Volume I, beginning October 15, 2026.",
  location: { city: "Dallas", region: "TX", country: "US" },
};

export type NavLink = { label: string; href: string };

export const mainNav: NavLink[] = [
  { label: "What we do", href: "/#what-we-do" },
  { label: "Programs", href: "/#programs" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "About", href: "/about" },
  { label: "Support", href: "/support" },
];

export const headerCta = { label: "Write your next chapter", href: "/#waitlist" };

export const footer = {
  nav: [
    { label: "About", href: "/about" },
    { label: "Programs", href: "/#programs" },
    { label: "Support us", href: "/support" },
    { label: "Join the waitlist", href: "/#waitlist" },
    { label: "Privacy", href: "/privacy" },
  ] satisfies NavLink[],
  // TODO: replace with real social links once accounts exist, for example
  // [{ label: "Instagram", href: "https://instagram.com/..." }]
  social: [] as NavLink[],
  socialPlaceholder: "Social links coming soon.",
  legal:
    "Foreword Forum Foundation is a Texas nonprofit in formation. Foreword Forum Prep LLC delivers paid workshops.",
};
