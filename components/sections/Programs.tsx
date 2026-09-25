"use client";

import { ChatsCircle, NotePencil } from "@phosphor-icons/react";
import { Body, Card, Heading, Icon, Reveal, Section, SectionLabel } from "@/components/ui";
import { programs } from "@/content/home";

const icons = { notePencil: NotePencil, chats: ChatsCircle };

export function Programs() {
  return (
    <Section id="programs" labelledBy="programs-title" className="border-t border-patina">
      <Reveal>
        <SectionLabel className="mb-4">{programs.label}</SectionLabel>
        <Heading id="programs-title" className="mb-12">
          {programs.heading}
        </Heading>
      </Reveal>
      <ul className="grid gap-8 md:grid-cols-2">
        {programs.items.map((p) => (
          <Reveal as="li" key={p.name}>
            <Card className="h-full">
              <Icon icon={icons[p.icon]} />
              <p className="type-label mb-2 mt-6">{p.kind}</p>
              <h3 className="type-h2 mb-3">{p.name}</h3>
              <Body>{p.body}</Body>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
