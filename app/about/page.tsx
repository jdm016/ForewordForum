import type { Metadata } from "next";
import {
  Body,
  ButtonLink,
  Card,
  Container,
  Header,
  Heading,
  PilcrowDivider,
  PullQuote,
  Reveal,
  SectionLabel,
  Subheading,
  Subtitle,
} from "@/components/ui";
import { FounderStats } from "@/components/site/FounderStats";
import { about, founder, type AboutSection } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description: about.description,
  alternates: { canonical: "/about" },
};

function SectionBlocks({ section }: { section: AboutSection }) {
  return (
    <div className="grid gap-6">
      {section.blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return <Body key={i}>{block.text}</Body>;
          case "quote":
            return (
              <PullQuote key={i} className="my-4 max-w-[30ch] border-l-2 border-coral pl-6">
                {block.text}
              </PullQuote>
            );
          case "stats":
            return <FounderStats key={i} className="my-4" />;
          case "arms":
            return (
              <ul key={i} className="my-2 grid gap-6 sm:grid-cols-2">
                {about.arms.map((arm) => (
                  <li key={arm.name}>
                    <Card className="h-full">
                      <p className="type-label mb-3">{arm.kind}</p>
                      <Subheading className="mb-3">{arm.name}</Subheading>
                      <Body>{arm.body}</Body>
                    </Card>
                  </li>
                ))}
              </ul>
            );
        }
      })}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <div className="border-b border-patina pb-16 pt-16 md:pb-20 md:pt-24">
        <Container className="grid gap-10 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-16">
          <div>
            <SectionLabel className="mb-4">{about.label}</SectionLabel>
            <Header>{about.heading}</Header>
          </div>
          <div className="grid gap-6 md:pt-10">
            {about.lead.map((p) => (
              <Body key={p}>{p}</Body>
            ))}
            <Subtitle as="p">{about.leadQuote}</Subtitle>
          </div>
        </Container>
      </div>

      <Container className="py-section md:py-section-lg">
        <div className="grid gap-20">
          {about.sections.map((section, i) => (
            <Reveal
              key={section.id}
              as="section"
              className="grid scroll-mt-28 gap-6 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-16"
            >
              <div id={section.id} className="scroll-mt-28">
                <Heading>{section.heading}</Heading>
                {i === 0 ? (
                  <aside aria-label="At a glance" className="mt-8">
                    {founder.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={founder.photo}
                        alt={founder.photoAlt}
                        width={960}
                        height={1311}
                        className="mb-4 w-full rounded border border-patina object-cover"
                      />
                    ) : null}
                    <p className="type-h3">{founder.name}</p>
                    <p className="type-label mb-8 mt-1">{founder.title}</p>
                    <p className="type-label mb-4">At a glance</p>
                    <ul className="grid gap-3">
                      {founder.credentials.map((c) => (
                        <li key={c} className="type-caption border-t border-patina pt-3">
                          {c}
                        </li>
                      ))}
                    </ul>
                  </aside>
                ) : null}
              </div>
              <SectionBlocks section={section} />
            </Reveal>
          ))}

          <PilcrowDivider />

          <Reveal as="section" className="grid gap-6 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-16">
            <Heading>{about.closing.heading}</Heading>
            <div className="grid gap-8">
              <Body>{about.closing.body}</Body>
              <div>
                <ButtonLink href={about.closing.cta.href}>{about.closing.cta.label}</ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </>
  );
}
