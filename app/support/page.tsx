import type { Metadata } from "next";
import { Body, ButtonLink, Caption, Card, Container, Reveal } from "@/components/ui";
import { PageIntro } from "@/components/site/PageIntro";
import { support } from "@/content/pages";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Support us",
  description: support.intro,
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <>
      <PageIntro label={support.label} heading={support.heading} intro={support.intro} />
      <Container className="py-section md:py-section-lg">
        <ul className="grid gap-8 md:grid-cols-2">
          {support.ways.map((w) => (
            <Reveal as="li" key={w.name}>
              <Card className="h-full">
                <h2 className="type-h2 mb-4">{w.name}</h2>
                <Body>{w.body}</Body>
              </Card>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-16 grid gap-6">
          <div className="flex flex-wrap items-center gap-6">
            <ButtonLink href={support.cta.href}>{support.cta.label}</ButtonLink>
            <a href={`mailto:${site.email}`} className="font-sans text-button font-semibold text-bindery underline underline-offset-4">
              {site.email}
            </a>
          </div>
          <Caption className="max-w-prose">{support.note}</Caption>
        </Reveal>
      </Container>
    </>
  );
}
