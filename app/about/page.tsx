import type { Metadata } from "next";
import { Body, ButtonLink, Container, Heading, PilcrowDivider, Reveal, Subheading } from "@/components/ui";
import { PageIntro } from "@/components/site/PageIntro";
import { about } from "@/content/pages";
import { headerCta } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: about.intro,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const sections = about.story ? [...about.sections, about.story] : about.sections;
  return (
    <>
      <PageIntro label={about.label} heading={about.heading} intro={about.intro} />
      <Container className="py-section md:py-section-lg">
        <div className="grid gap-16">
          {sections.map((s) => (
            <Reveal key={s.heading} as="section" className="grid gap-6 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-16">
              <Heading>{s.heading}</Heading>
              <div className="grid gap-6">
                {s.body.map((p) => (
                  <Body key={p}>{p}</Body>
                ))}
              </div>
            </Reveal>
          ))}

          <PilcrowDivider />

          <Reveal as="section" className="grid gap-6 md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] md:gap-16">
            <Heading>{about.glossary.heading}</Heading>
            <dl className="grid gap-8">
              {about.glossary.items.map((g) => (
                <div key={g.term} className="border-t border-patina pt-4">
                  <dt>
                    <Subheading as="span">{g.term}</Subheading>
                  </dt>
                  <dd className="type-body mt-2">{g.detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div>
            <ButtonLink href={headerCta.href}>{headerCta.label}</ButtonLink>
          </div>
        </div>
      </Container>
    </>
  );
}
