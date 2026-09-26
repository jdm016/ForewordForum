import { Body, ButtonLink, Container, Heading, Reveal, SectionLabel } from "@/components/ui";
import { volumeOne } from "@/content/home";

export function VolumeOne() {
  return (
    <section id="volume-one" aria-labelledby="volume-title" className="py-section md:py-section-lg">
      <Container>
        <Reveal className="rounded bg-endpaper p-8 md:p-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
            <div>
              <SectionLabel className="mb-4">{volumeOne.label}</SectionLabel>
              <Heading id="volume-title" className="mb-6">
                {volumeOne.heading}
              </Heading>
              <Body className="mb-4">{volumeOne.body}</Body>
              <Body className="mb-8">{volumeOne.funding}</Body>
              <ButtonLink href={volumeOne.cta.href} variant="secondary">
                {volumeOne.cta.label}
              </ButtonLink>
            </div>
            <dl className="grid content-start gap-6 border-t border-navy/30 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              {volumeOne.facts.map((f) => (
                <div key={f.term}>
                  <dt className="type-label !text-navy">{f.term}</dt>
                  <dd className="mt-1 font-display text-subtitle text-navy md:text-subtitle-lg">{f.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
