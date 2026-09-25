import type { Metadata } from "next";
import { Body, Caption, Container } from "@/components/ui";
import { PageIntro } from "@/components/site/PageIntro";
import { privacy } from "@/content/pages";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Foreword Forum collects and uses the information you share with us.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro label={privacy.label} heading={privacy.heading} />
      <Container className="py-section md:py-section-lg">
        <Caption className="mb-12">Last updated {privacy.updated}</Caption>
        <div className="grid max-w-prose gap-12">
          {privacy.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="type-h3 mb-4">{s.heading}</h2>
              <div className="grid gap-4">
                {s.body.map((p) => (
                  <Body key={p}>{p}</Body>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </>
  );
}
