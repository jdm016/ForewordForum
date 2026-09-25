import type { Metadata } from "next";
import { Body, Container, Heading, Pilcrow, PilcrowDivider, Reveal, SectionLabel } from "@/components/ui";
import { PageIntro } from "@/components/site/PageIntro";
import { privacy } from "@/content/pages";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Foreword Forum collects and uses the information you share with us.",
  alternates: { canonical: "/privacy" },
};

/** Turns the contact email inside a paragraph into a link. */
function WithEmailLink({ text }: { text: string }) {
  const parts = text.split(site.email);
  if (parts.length === 1) return <>{text}</>;
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 ? (
            <a href={`mailto:${site.email}`} className="text-bindery underline underline-offset-4">
              {site.email}
            </a>
          ) : null}
        </span>
      ))}
    </>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <PageIntro label={privacy.label} heading={privacy.heading} intro={privacy.intro} />
      <Container className="py-section md:py-section-lg">
        <SectionLabel className="mb-12">Last updated {privacy.updated}</SectionLabel>
        <div className="grid gap-16">
          {privacy.sections.map((s, i) => (
            <Reveal
              key={s.heading}
              as="section"
              className={`grid gap-6 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-16 ${i > 0 ? "border-t border-patina pt-12" : ""}`}
            >
              <Heading className="flex items-baseline gap-3">
                <Pilcrow className="text-[0.8em]" />
                {s.heading}
              </Heading>
              <div className="grid gap-6 md:pt-2">
                {s.body.map((p) => (
                  <Body key={p}>
                    <WithEmailLink text={p} />
                  </Body>
                ))}
              </div>
            </Reveal>
          ))}
          <PilcrowDivider />
        </div>
      </Container>
    </>
  );
}
