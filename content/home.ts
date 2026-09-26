/**
 * Home page copy, in page order.
 *
 * `label` is the small caps line above each heading. `heading` is the
 * section headline. Headlines marked NEW were written for the site build
 * (the brief supplied body copy only) and are ready for your edits.
 */

export const hero = {
  label: "Volume I begins October 15, 2026",
  // The word in `swipe` gets the coral highlighter.
  title: { before: "Your ", swipe: "story", after: " starts here." },
  subhead: "College and career readiness for students ages 16 to 26, in Dallas and live online nationwide.",
  primary: { label: "Write your next chapter", href: "#waitlist" },
  secondary: { label: "See how it works", href: "#how-it-works" },
  notes: ["Ages 16 to 26", "In person in Dallas", "Live online nationwide"],
};

export const whatWeDo = {
  label: "What we do",
  heading: "A real person beside you.", // NEW
  body: "Getting to college or into a career is not one decision. It is a hundred small ones, and most students make them without a guide. Foreword Forum puts a real person beside you for the whole stretch: the applications, the essays, the money conversations, the interview you are nervous about, and the first job after. We are coed, we are practical, and we start where you actually are.",
};

export const programs = {
  label: "Programs",
  heading: "Two tracks to choose from.", // NEW
  items: [
    {
      name: "First Draft",
      kind: "Core readiness track",
      icon: "notePencil",
      body: "Our core readiness track: college and job applications, essays, resumes, interviews, financial aid and FAFSA, and test prep, plus a plan for what comes after graduation, whether that is a four-year school, a two-year school, a trade, or work.",
    },
    {
      name: "Speak Volumes",
      kind: "Empowerment track",
      icon: "chats",
      body: "Our empowerment track for ages 16 to 26. Confidence, communication, and the skills that do not appear on a transcript but decide everything.",
    },
  ],
} as const;

export const howItWorks = {
  label: "How it works",
  heading: "How a Volume works.", // NEW
  steps: [
    { title: "Join a Volume.", body: "Every cohort is a Volume, small enough that we know your name." },
    { title: "Meet your Co-Author.", body: "You are paired with a near-peer mentor who has walked the road recently." },
    { title: "Build your plan.", body: "You leave with a written next step, not a pep talk." },
    { title: "Keep the door open.", body: "Volumes stay connected after the program ends." },
  ],
};

export const coAuthors = {
  label: "Co-Authors",
  heading: "Mentors who write alongside you.", // NEW
  body: "Our mentors are near-peer, which means they are close enough to your age to remember the details and far enough along to show you the way.",
  quote: "They are not lecturing at you. They are writing alongside you.",
};

export const volumeOne = {
  label: "Volume I",
  heading: "Volume I begins October 15.",
  body: "Our first cohort begins October 15, 2026, in Dallas and online. Space is intentionally limited. Join the waitlist and we will reach out with enrollment details.",
  funding: "Seats are available through Foreword Forum Prep, and Foreword Forum Foundation funds scholarship seats as funding allows, so cost is not the reason a student sits this out.",
  facts: [
    { term: "Begins", detail: "October 15, 2026" },
    { term: "Where", detail: "Dallas and live online" },
    { term: "Size", detail: "Intentionally limited" },
    { term: "Seats", detail: "Paid and scholarship" },
  ],
  cta: { label: "Join the waitlist", href: "#waitlist" },
};

export const supportUs = {
  label: "Support us",
  heading: "Help open someone's first chapter.", // NEW
  body: "Foreword Forum Foundation is powered by people who believe a student's opening chapter should not depend on their zip code. Join the Publishers' Circle, or give to The Next Page Fund, which covers program costs for students who need it.",
  cta: { label: "Get in touch", href: "mailto:hello@forewordforum.com" },
  more: { label: "More ways to support", href: "/support" },
};

export const waitlist = {
  label: "Waitlist",
  heading: { before: "Write your next ", swipe: "chapter", after: "." },
  subhead: "Join the list for Volume I and for Between the Lines, our monthly newsletter.",
  submit: "Join the waitlist",
  success: "You're on the list. Watch for Between the Lines in your inbox.",
  roles: ["Student", "Parent or guardian", "Educator", "Supporter"],
};
