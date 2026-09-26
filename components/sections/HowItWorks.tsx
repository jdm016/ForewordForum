import { Body, Heading, Reveal, Section, SectionLabel, Subheading } from "@/components/ui";
import { howItWorks } from "@/content/home";

export function HowItWorks() {
  return (
    <Section id="how-it-works" labelledBy="how-title" className="border-t border-patina">
      <Reveal>
        <SectionLabel className="mb-4">{howItWorks.label}</SectionLabel>
        <Heading id="how-title" className="mb-12">
          {howItWorks.heading}
        </Heading>
      </Reveal>
      <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {howItWorks.steps.map((step, i) => (
          <Reveal as="li" key={step.title} className="border-t border-patina pt-6">
            <span aria-hidden="true" className="block font-display text-[56px] font-semibold leading-none text-coral">
              {i + 1}
            </span>
            <Subheading className="mb-2 mt-4">{step.title}</Subheading>
            <Body>{step.body}</Body>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
