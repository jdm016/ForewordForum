/**
 * Copy for the standalone pages: /about, /support, /privacy.
 * Sections set to `null` are placeholders that stay hidden until filled in.
 */

import { coAuthors, whatWeDo } from "./home";

export const about = {
  label: "About",
  heading: "About Foreword Forum",
  intro: "College and career readiness for students ages 16 to 22, in Dallas and live online nationwide.",
  sections: [
    { heading: "What we do", body: [whatWeDo.body] },
    { heading: "Our Co-Authors", body: [`${coAuthors.body} ${coAuthors.quote}`] },
  ],
  // The book metaphor that runs through the program.
  glossary: {
    heading: "How we talk about it",
    items: [
      { term: "Volume", detail: "A cohort of students. Every Volume is small enough that we know your name." },
      { term: "Co-Author", detail: "Your near-peer mentor, who has walked the road recently and writes alongside you." },
      { term: "Publishers' Circle", detail: "The people who fund the work and make each Volume possible." },
    ],
  },
  // TODO: founder story, team bios and photography. Do not publish invented names or quotes.
  // Example shape: { heading: "Who we are", body: ["..."] }
  story: null as null | { heading: string; body: string[] },
};

export const support = {
  label: "Support us",
  heading: "Support Foreword Forum",
  intro:
    "Foreword Forum Foundation is powered by people who believe a student's opening chapter should not depend on their zip code.",
  ways: [
    {
      name: "The Publishers' Circle",
      body: "Our community of donors and partners. Get in touch and we will share how to join.",
    },
    {
      name: "The Next Page Fund",
      body: "Covers program costs for students who need it.",
    },
  ],
  cta: { label: "Get in touch", href: "mailto:hello@forewordforum.com" },
  note: "Foreword Forum Foundation is a Texas nonprofit in formation. We are not accepting online payments yet. Reach out and we will follow up personally.",
};

// TODO: have this draft reviewed by counsel before launch.
export const privacy = {
  label: "Privacy",
  heading: "Privacy policy",
  intro: "What we collect when you join the waitlist, and how we take care of it.",
  updated: "September 2026",
  sections: [
    {
      heading: "What we collect",
      body: [
        "When you join the waitlist, we collect the name and email address you give us, whether you are a student, parent or guardian, educator, or supporter, and any message you choose to include.",
        "We do not use advertising trackers on this site.",
      ],
    },
    {
      heading: "How we use it",
      body: [
        "We use your information to contact you about Volume I enrollment and to send Between the Lines, our monthly newsletter. We do not sell your information.",
      ],
    },
    {
      heading: "Your choices",
      body: [
        "Every newsletter includes an unsubscribe link. You can also ask us to update or delete your information at any time by writing to hello@forewordforum.com.",
      ],
    },
    // TODO: add a section on students under 18 once the enrollment and consent process is set.
    {
      heading: "Contact",
      body: ["Questions about this policy can go to hello@forewordforum.com."],
    },
  ],
};
