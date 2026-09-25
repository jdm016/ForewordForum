import Link from "next/link";
import { Body, ButtonLink, Heading, Reveal, Section, SectionLabel } from "@/components/ui";
import { supportUs } from "@/content/home";

export function SupportUs() {
  return (
    <Section id="support" labelledBy="support-title" className="border-t border-patina">
      <Reveal className="grid gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
        <div>
          <SectionLabel className="mb-4">{supportUs.label}</SectionLabel>
          <Heading id="support-title">{supportUs.heading}</Heading>
        </div>
        <div className="md:pt-9">
          <Body className="mb-8">{supportUs.body}</Body>
          <div className="flex flex-wrap items-center gap-6">
            <ButtonLink href={supportUs.cta.href} variant="secondary">
              {supportUs.cta.label}
            </ButtonLink>
            <Link href={supportUs.more.href} className="font-sans text-button font-semibold text-bindery underline underline-offset-4">
              {supportUs.more.label}
            </Link>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
