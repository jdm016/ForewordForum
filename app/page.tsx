import { CoAuthors } from "@/components/sections/CoAuthors";
import { Founder } from "@/components/sections/Founder";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Programs } from "@/components/sections/Programs";
import { SupportUs } from "@/components/sections/SupportUs";
import { VolumeOne } from "@/components/sections/VolumeOne";
import { Waitlist } from "@/components/sections/Waitlist";
import { WhatWeDo } from "@/components/sections/WhatWeDo";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Founder />
      <Programs />
      <HowItWorks />
      <CoAuthors />
      <VolumeOne />
      <SupportUs />
      <Waitlist />
    </>
  );
}
