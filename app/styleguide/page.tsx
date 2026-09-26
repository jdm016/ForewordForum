import type { Metadata } from "next";
import {
  Body,
  ButtonLink,
  Button,
  Caption,
  Card,
  Container,
  Header,
  Heading,
  PilcrowDivider,
  Pilcrow,
  PullQuote,
  Reveal,
  SectionLabel,
  Subheading,
  Subtitle,
  Swipe,
  SwipeUnderline,
  Title,
} from "@/components/ui";
import { IconShowcase } from "./IconShowcase";

// Internal reference page for the design system. Not linked from the site
// and excluded from search engines and the sitemap.
export const metadata: Metadata = {
  title: "Style guide | Foreword Forum",
  robots: { index: false, follow: false },
};

const colors = [
  { name: "Paper Cream", token: "cream", hex: "#F5EEE0", use: "Page background", text: "Background" },
  { name: "Deep Ink Navy", token: "navy", hex: "#103059", use: "Headlines, logo, display type", text: "11.45:1 on cream" },
  { name: "Printer's Ink", token: "ink", hex: "#353538", use: "Body copy and captions", text: "10.59:1 on cream" },
  { name: "Highlighter Coral", token: "coral", hex: "#E98B7B", use: "Swipes, rules, primary buttons", text: "Shapes only" },
  { name: "Library Patina", token: "patina", hex: "#68A18A", use: "Rules, icon accents, panels", text: "Shapes only" },
  { name: "Endpaper Blue", token: "endpaper", hex: "#C1D7F2", use: "Info panels, highlight fills", text: "Fills only" },
  { name: "Bindery Green", token: "bindery", hex: "#3B5A4D", use: "Footer, labels, readable color text", text: "6.6:1 on cream" },
  { name: "Red Pen Coral", token: "alert", hex: "#FC5D4F", use: "Form errors only", text: "Borders and icons only" },
];

function Block({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-patina py-16">
      <SectionLabel className="mb-3">{label}</SectionLabel>
      <Heading className="mb-10">{title}</Heading>
      {children}
    </section>
  );
}

export default function StyleguidePage() {
  return (
    <div className="py-16">
      <Container>
        <SectionLabel className="mb-4">Design system</SectionLabel>
        <Title className="mb-6">
          Foreword Forum <Swipe draw>primitives</Swipe>
        </Title>
        <Subtitle className="mb-16 max-w-prose">
          Tokens and components for review before the full pages are built.
        </Subtitle>

        <Block label="Tokens" title="Color">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {colors.map((c) => (
              <li key={c.token} className="rounded border border-patina">
                <div className="h-24 rounded-t border-b border-patina" style={{ backgroundColor: c.hex }} />
                <div className="p-4">
                  <p className="type-h3 !text-[17px]">{c.name}</p>
                  <Caption>
                    <code>{c.token}</code> · {c.hex}
                  </Caption>
                  <Caption className="mt-2">{c.use}</Caption>
                  <p className="type-label mt-3">{c.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Block>

        <Block label="Tokens" title="Typography">
          <div className="space-y-10">
            {[
              ["Title · Playfair 700 · 56/36", <Title key="t" as="p">Your <Swipe>story</Swipe> starts here.</Title>],
              ["Header · Playfair 600 · 44/32", <Header key="h" as="p">Write your next chapter.</Header>],
              ["Heading · Playfair 600 · 36/28", <Heading key="h2" as="p">How it works</Heading>],
              ["Pull quote · Playfair italic · 30/24", <PullQuote key="q">They are not lecturing at you. They are writing alongside you.</PullQuote>],
              ["Subtitle · Playfair italic · 24/20", <Subtitle key="s">College and career readiness for teens and young adults.</Subtitle>],
              ["Subheading · Inter 600 · 22/19", <Subheading key="h3" as="p">Meet your Co-Author</Subheading>],
              [
                "Body · Inter 400 · 18/16 · 1.65",
                <Body key="b">
                  Getting to college or into a career is not one decision. It is a hundred small ones, and most students
                  make them without a guide. Foreword Forum puts a real person beside you for the whole stretch.
                </Body>,
              ],
              ["Caption · Inter 400 · 14/13", <Caption key="c">Foreword Forum Foundation is a Texas nonprofit in formation.</Caption>],
              ["Section label · Inter 500 · 13/12 · caps", <SectionLabel key="l">How it works</SectionLabel>],
            ].map(([meta, node]) => (
              <div key={meta as string} className="grid gap-3 md:grid-cols-[14rem_1fr] md:gap-8">
                <Caption className="pt-2 text-bindery">{meta}</Caption>
                <div>{node}</div>
              </div>
            ))}
          </div>
        </Block>

        <Block label="Components" title="Buttons">
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href="#">Write your next chapter</ButtonLink>
            <ButtonLink href="#" variant="secondary">
              See how it works
            </ButtonLink>
            <Button disabled>Join the waitlist</Button>
          </div>
          <Caption className="mt-6 max-w-prose">
            Primary label is navy on coral (5.31:1). Cream on coral measures 2.15:1 and would fail WCAG AA, so it is
            not used. Tab through to see the bindery focus ring.
          </Caption>
        </Block>

        <Block label="Components" title="Cards and panels">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <SectionLabel className="mb-3">Core track</SectionLabel>
              <Subheading className="mb-3">First Draft</Subheading>
              <Body>
                Our core readiness track. Applications, financial aid, essays, resumes, interviews, and the plan behind
                all of it.
              </Body>
            </Card>
            <Card tone="endpaper">
              <SectionLabel className="mb-3">Volume I</SectionLabel>
              <Subheading className="mb-3">Begins October 15, 2026</Subheading>
              <Body>Space is intentionally limited. Join the waitlist and we will reach out with enrollment details.</Body>
            </Card>
          </div>
        </Block>

        <Block label="Graphics" title="Swipe, pilcrow, and rules">
          <div className="space-y-12">
            <div>
              <Header as="p">
                Your <Swipe>story</Swipe> starts <Swipe>here</Swipe>.
              </Header>
              <Caption className="mt-3">Inline SVG with an irregular edge and a slight tilt. The hero version draws in once.</Caption>
            </div>
            <div className="flex flex-wrap gap-8">
              {["About", "Programs", "Support"].map((item, i) => (
                <a key={item} href="#" className="group relative font-sans text-nav font-medium text-navy">
                  <SwipeUnderline active={i === 0} />
                  <span className="relative">{item}</span>
                </a>
              ))}
              <Caption>Nav hover and active state (first item active)</Caption>
            </div>
            <PilcrowDivider />
            <Body>
              Footnote marker in running text
              <sup className="ml-0.5">
                <Pilcrow className="text-[20px]" />
              </sup>
            </Body>
            <div className="flex gap-6">
              {["1", "2", "3", "4"].map((n) => (
                <span key={n} aria-hidden="true" className="font-display text-[48px] font-semibold leading-none text-coral">
                  {n}
                </span>
              ))}
              <Caption className="self-end">Step numerals: Playfair in coral, decorative (steps are also marked up as an ordered list)</Caption>
            </div>
          </div>
        </Block>

        <Block label="Graphics" title="Icons">
          <IconShowcase />
        </Block>

        <Block label="Motion" title="Fade and rise">
          <div className="grid gap-8 md:grid-cols-3">
            {["Join a Volume.", "Meet your Co-Author.", "Build your plan."].map((t) => (
              <Reveal key={t}>
                <Card>
                  <Subheading as="p">{t}</Subheading>
                </Card>
              </Reveal>
            ))}
          </div>
          <Caption className="mt-6">16px rise, 400ms, ease-out, once. Off under prefers-reduced-motion.</Caption>
        </Block>

        <Block label="Forms" title="Field states">
          <div className="grid max-w-xl gap-8">
            <div>
              <label htmlFor="sg-name" className="mb-2 block font-sans text-caption-lg font-semibold text-navy">
                Name
              </label>
              <input
                id="sg-name"
                className="w-full rounded border border-patina bg-cream px-4 py-3 text-ink placeholder:text-ink/70 focus:border-navy"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="sg-email" className="mb-2 block font-sans text-caption-lg font-semibold text-navy">
                Email
              </label>
              <input
                id="sg-email"
                aria-invalid="true"
                aria-describedby="sg-email-error"
                className="w-full rounded border-2 border-alert bg-cream px-4 py-3 text-ink"
                defaultValue="not-an-email"
              />
              <p id="sg-email-error" className="mt-2 flex items-center gap-2 font-sans text-caption-lg text-ink">
                <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded bg-alert" />
                Please enter an email address like name@example.com.
              </p>
            </div>
          </div>
          <Caption className="mt-6 max-w-prose">
            Red Pen Coral marks the field border and the error marker. The message itself is set in ink, because
            #FC5D4F on cream is 2.67:1 and would fail as text.
          </Caption>
        </Block>
      </Container>
    </div>
  );
}
