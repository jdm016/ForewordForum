import Link from "next/link";
import { Container } from "@/components/ui";
import { footer, site } from "@/content/site";
import { Wordmark } from "./Wordmark";

/** Bindery green surface. Cream text on bindery is 6.6:1. */
export function SiteFooter() {
  return (
    <footer className="on-dark bg-bindery text-cream">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <Wordmark tone="cream" />
          <p className="mt-4 font-display text-subtitle italic">{site.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <p className="mb-4 font-sans text-label font-medium uppercase md:text-label-lg">Explore</p>
          <ul className="space-y-3">
            {footer.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-sans text-caption-lg underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 font-sans text-label font-medium uppercase md:text-label-lg">Contact</p>
          <a href={`mailto:${site.email}`} className="font-sans text-caption-lg underline underline-offset-4">
            {site.email}
          </a>
          {footer.social.length > 0 ? (
            <ul className="mt-4 flex gap-4">
              {footer.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="font-sans text-caption-lg underline-offset-4 hover:underline">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 font-sans text-caption-lg">{footer.socialPlaceholder}</p>
          )}
        </div>
      </Container>

      <div className="border-t border-cream/30">
        <Container className="py-6">
          <p className="max-w-prose font-sans text-caption md:text-caption-lg">{footer.legal}</p>
          <p className="mt-2 font-sans text-caption md:text-caption-lg">
            © {new Date().getFullYear()} {site.name}
          </p>
        </Container>
      </div>
    </footer>
  );
}
