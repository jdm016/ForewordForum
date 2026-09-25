import { Card, Container, Header, Reveal, SectionLabel, Subtitle, Swipe } from "@/components/ui";
import { waitlist } from "@/content/home";
import { WaitlistForm } from "./WaitlistForm";

export function Waitlist() {
  return (
    <section id="waitlist" aria-labelledby="waitlist-title" className="border-t border-patina py-section md:py-section-lg">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <Reveal>
          <SectionLabel className="mb-4">{waitlist.label}</SectionLabel>
          <Header as="h2" id="waitlist-title">
            {waitlist.heading.before}
            <Swipe>{waitlist.heading.swipe}</Swipe>
            {waitlist.heading.after}
          </Header>
          <Subtitle className="mt-6 max-w-[30ch]">{waitlist.subhead}</Subtitle>
        </Reveal>
        <Reveal>
          <Card>
            <WaitlistForm />
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
