/**
 * The Foreword Forum logo, traced to vector from the approved artwork
 * (brand-source/logo-original.png). Files live in /public/brand:
 *   logo.svg        navy, for cream backgrounds
 *   logo-cream.svg  cream, for the bindery green footer
 *   pilcrow.svg     the pilcrow on its own
 * If a designer supplies an official vector file, drop it in over these.
 */
export function Wordmark({ tone = "navy", className = "" }: { tone?: "navy" | "cream"; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={tone === "cream" ? "/brand/logo-cream.svg" : "/brand/logo.svg"}
      alt="Foreword Forum"
      width={1296}
      height={592}
      className={`h-12 w-auto md:h-16 ${className}`.trim()}
    />
  );
}
