import { founder } from "@/content/about";

/**
 * The founder's program results. Figures are navy Playfair (coral fails
 * contrast as text); a short coral rule above each one carries the accent.
 */
export function FounderStats({ className = "" }: { className?: string }) {
  return (
    <figure className={className}>
      <dl className="grid gap-8 sm:grid-cols-3">
        {founder.stats.map((s) => (
          <div key={s.figure} className="border-t border-patina pt-5">
            <span aria-hidden="true" className="mb-4 block h-1 w-10 rounded bg-coral" />
            <dt className="font-display text-[48px] font-semibold leading-none text-navy md:text-[56px]">{s.figure}</dt>
            <dd className="type-caption mt-3 max-w-[24ch]">{s.label}</dd>
          </div>
        ))}
      </dl>
      <figcaption className="type-caption mt-6 max-w-prose">{founder.statsSource}</figcaption>
    </figure>
  );
}
