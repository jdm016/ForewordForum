"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { ButtonLink, Container, SwipeUnderline } from "@/components/ui";
import { headerCta, mainNav } from "@/content/site";
import { Wordmark } from "./Wordmark";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on navigation and on Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => !href.startsWith("/#") && pathname === href;

  return (
    <header className="sticky top-0 z-40 border-b border-patina bg-cream">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="shrink-0" aria-label="Foreword Forum home">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="group relative inline-block py-2 font-sans text-nav font-medium text-navy"
                  >
                    <SwipeUnderline active={active} />
                    <span className="relative">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href={headerCta.href} className="hidden sm:inline-flex">
            {headerCta.label}
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={28} weight="light" aria-hidden /> : <List size={28} weight="light" aria-hidden />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </Container>

      <nav id="mobile-nav" aria-label="Main" hidden={!open} className="border-t border-patina lg:hidden">
        <Container className="py-6">
          <ul className="flex flex-col gap-2">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className="group relative inline-block py-2 font-sans text-[17px] font-medium text-navy"
                  >
                    <SwipeUnderline active={active} />
                    <span className="relative">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ButtonLink href={headerCta.href} className="mt-6 w-full sm:hidden">
            {headerCta.label}
          </ButtonLink>
        </Container>
      </nav>
    </header>
  );
}
