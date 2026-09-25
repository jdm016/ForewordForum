"use client";

import { BookOpenText, ChatsCircle, Compass, GraduationCap, MapPin, NotePencil, UsersThree, Handshake } from "@phosphor-icons/react";
import { Caption, Icon } from "@/components/ui";

const icons = [
  { icon: BookOpenText, name: "BookOpenText" },
  { icon: NotePencil, name: "NotePencil" },
  { icon: GraduationCap, name: "GraduationCap" },
  { icon: UsersThree, name: "UsersThree" },
  { icon: ChatsCircle, name: "ChatsCircle" },
  { icon: Compass, name: "Compass" },
  { icon: MapPin, name: "MapPin" },
  { icon: Handshake, name: "Handshake" },
];

export function IconShowcase() {
  return (
    <>
      <ul className="flex flex-wrap gap-8">
        {icons.map(({ icon, name }, i) => (
          <li key={name} className="flex w-24 flex-col items-center gap-2">
            <Icon icon={icon} active={i === 0} />
            <Caption>{name}</Caption>
          </li>
        ))}
      </ul>
      <Caption className="mt-6">Phosphor, light weight, 32px (1.5px stroke). Navy default, coral active (first).</Caption>
    </>
  );
}
