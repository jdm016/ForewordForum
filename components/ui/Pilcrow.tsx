/**
 * The pilcrow from the Foreword Forum logo, traced to a vector so it matches
 * the logo everywhere it appears. Navy by default, like the logo. It scales
 * with font size (1em tall), so set its size with a text-size class.
 * Decorative, so it is hidden from assistive tech.
 */

const PILCROW_VIEWBOX = "0 0 61 90";
const PILCROW_PATH =
  "M28.6 87.4C28.2 86.0 28.0 78.0 28.0 69.7C28.1 61.3 28.1 53.9 28.0 53.2C28.0 52.5 26.6 52.0 24.2 52.0C18.1 52.0 13.5 50.2 8.7 46.0C1.8 39.9 -0.4 34.6 0.2 25.2C0.7 16.0 3.1 11.2 9.6 6.0C16.4 0.5 18.5 0.2 40.8 0.1L61.0 0.0L61.0 2.5C61.0 4.6 60.5 5.0 58.2 5.0C56.7 5.0 54.9 5.4 54.3 5.8C53.3 6.4 53.0 16.4 52.8 48.1L52.5 89.5L49.0 89.5L45.5 89.5L45.0 47.5L44.5 5.5L41.5 5.2C35.3 4.7 35.5 3.6 35.4 41.7C35.3 94.0 35.6 90.0 32.1 90.0C29.8 90.0 29.1 89.4 28.6 87.4Z";

export function Pilcrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={PILCROW_VIEWBOX}
      className={`inline-block h-[0.8em] w-auto shrink-0 fill-current align-baseline text-navy ${className}`.trim()}
    >
      <path d={PILCROW_PATH} />
    </svg>
  );
}

/** Section divider: a patina rule with the logo pilcrow set in the middle. */
export function PilcrowDivider({ className = "" }: { className?: string }) {
  return (
    <div role="separator" className={`flex items-center gap-4 ${className}`}>
      <span className="h-px flex-1 bg-patina" />
      <Pilcrow className="text-[28px]" />
      <span className="h-px flex-1 bg-patina" />
    </div>
  );
}
