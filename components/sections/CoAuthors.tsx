import { Body, Heading, PilcrowDivider, PullQuote, Reveal, Section, SectionLabel } from "@/components/ui";
import { coAuthors } from "@/content/home";

export function CoAuthors() {
  return (
    <Section id="co-authors" labelledBy="co-authors-title" className="border-t border-patina">
      <Reveal className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <SectionLabel className="mb-4">{coAuthors.label}</SectionLabel>
          <Heading id="co-authors-title" className="mb-6">
            {coAuthors.heading}
          </Heading>
          <Body>{coAuthors.body}</Body>
          {/* TODO: real photography of Co-Authors once available. Every image needs alt text. */}
        </div>
        <figure className="flex flex-col justify-center gap-8">
          <PilcrowDivider />
          <PullQuote className="max-w-[24ch]">{coAuthors.quote}</PullQuote>
        </figure>
      </Reveal>
    </Section>
  );
}
