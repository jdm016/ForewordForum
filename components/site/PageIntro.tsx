import { Container, Header, SectionLabel, Subtitle } from "@/components/ui";

/** Opening block for the standalone pages. */
export function PageIntro({ label, heading, intro }: { label: string; heading: string; intro?: string }) {
  return (
    <div className="border-b border-patina pb-16 pt-16 md:pb-20 md:pt-24">
      <Container>
        <SectionLabel className="mb-4">{label}</SectionLabel>
        <Header className="max-w-[20ch]">{heading}</Header>
        {intro ? <Subtitle className="mt-6 max-w-[40ch]">{intro}</Subtitle> : null}
      </Container>
    </div>
  );
}
