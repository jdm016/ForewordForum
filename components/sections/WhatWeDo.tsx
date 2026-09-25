import { Body, Heading, Reveal, Section, SectionLabel } from "@/components/ui";
import { whatWeDo } from "@/content/home";

export function WhatWeDo() {
  return (
    <Section id="what-we-do" labelledBy="what-we-do-title" className="border-t border-patina">
      <Reveal className="grid gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
        <div>
          <SectionLabel className="mb-4">{whatWeDo.label}</SectionLabel>
          <Heading id="what-we-do-title">{whatWeDo.heading}</Heading>
        </div>
        <Body className="md:pt-9">
          {whatWeDo.body}
        </Body>
      </Reveal>
    </Section>
  );
}
