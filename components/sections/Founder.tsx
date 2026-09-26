import Link from "next/link";
import { Body, Heading, Reveal, Section, SectionLabel } from "@/components/ui";
import { FounderStats } from "@/components/site/FounderStats";
import { founder, founderHome } from "@/content/about";

/** Home page: who runs Foreword Forum and the record behind it. */
export function Founder() {
  return (
    <Section id="who-runs-it" labelledBy="founder-title" className="border-t border-patina">
      <Reveal className="grid gap-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
        <div>
          <SectionLabel className="mb-4">{founderHome.label}</SectionLabel>
          <Heading id="founder-title">{founderHome.heading}</Heading>
          {founder.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={founder.photo}
              alt={founder.photoAlt}
              width={960}
              height={1311}
              className="mt-8 w-full max-w-xs rounded border border-patina object-cover"
            />
          ) : null}
        </div>
        <div className="md:pt-9">
          <p className="type-h3 mb-1">{founder.name}</p>
          <p className="type-label mb-6">{founder.title}</p>
          <div className="grid gap-4">
            {founderHome.body.map((p) => (
              <Body key={p}>{p}</Body>
            ))}
          </div>
          <FounderStats className="mt-10" />
          <Link
            href={founderHome.link.href}
            className="mt-8 inline-block font-sans text-button font-semibold text-bindery underline underline-offset-4"
          >
            {founderHome.link.label}
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
