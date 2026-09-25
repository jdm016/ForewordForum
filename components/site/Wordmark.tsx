/**
 * TODO: PLACEHOLDER WORDMARK. Replace with the final vector logo.
 *
 * Drop the final SVG at /public/brand/wordmark.svg (and a cream version at
 * /public/brand/wordmark-cream.svg for the footer), then swap the <svg>
 * below for:
 *   <img src={tone === "cream" ? "/brand/wordmark-cream.svg" : "/brand/wordmark.svg"}
 *        alt="Foreword Forum" width={...} height={...} />
 * Or paste the final SVG markup in place of the <text> elements.
 */
export function Wordmark({ tone = "navy", className = "" }: { tone?: "navy" | "cream"; className?: string }) {
  const fill = tone === "cream" ? "#F5EEE0" : "#103059";
  return (
    <svg
      role="img"
      aria-label="Foreword Forum"
      viewBox="0 0 224 36"
      className={`h-8 w-auto ${className}`.trim()}
      data-placeholder="wordmark"
    >
      <text
        x="0"
        y="27"
        fill={fill}
        style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 700, fontSize: "26px", letterSpacing: "-0.01em" }}
      >
        Foreword Forum
      </text>
      <text
        x="208"
        y="16"
        fill="#E98B7B"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "16px" }}
      >
        ¶
      </text>
    </svg>
  );
}
