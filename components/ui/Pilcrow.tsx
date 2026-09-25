/**
 * Pilcrow brand accents. Coral is decorative only, so the mark is hidden
 * from assistive tech; the divider exposes itself as a separator.
 */

export function Pilcrow({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`font-display text-coral ${className}`}>
      ¶
    </span>
  );
}

/** Section divider: a patina rule with a coral pilcrow set in the middle. */
export function PilcrowDivider({ className = "" }: { className?: string }) {
  return (
    <div role="separator" className={`flex items-center gap-4 ${className}`}>
      <span className="h-px flex-1 bg-patina" />
      <Pilcrow className="text-[28px] leading-[1.3]" />
      <span className="h-px flex-1 bg-patina" />
    </div>
  );
}
