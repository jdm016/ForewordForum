import { ButtonLink, Container, Pilcrow, SectionLabel, Subtitle, Swipe, Title } from "@/components/ui";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pb-section pt-16 md:pb-section-lg md:pt-28">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-16">
        <div>
          <SectionLabel className="mb-6">{hero.label}</SectionLabel>
          <Title id="hero-title" className="max-w-[14ch] text-balance">
            {hero.title.before}
            <Swipe draw>{hero.title.swipe}</Swipe>
            {hero.title.after}
          </Title>
          <Subtitle className="mt-6 max-w-[34ch]">{hero.subhead}</Subtitle>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href={hero.primary.href}>{hero.primary.label}</ButtonLink>
            <ButtonLink href={hero.secondary.href} variant="secondary">
              {hero.secondary.label}
            </ButtonLink>
          </div>
        </div>

        {/* Margin notes, set like the outer column of a book page. */}
        {/* TODO: real photography could sit here in a later version. Every image needs alt text. */}
        <ul className="flex flex-wrap gap-x-8 gap-y-3 border-t border-patina pt-6 lg:mt-24 lg:flex-col lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          {hero.notes.map((note) => (
            <li key={note} className="type-caption flex items-baseline gap-2">
              <Pilcrow className="text-[15px]" />
              {note}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
