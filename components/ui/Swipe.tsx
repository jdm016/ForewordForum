import type { ReactNode } from "react";

/**
 * The signature coral highlighter swipe. Sits behind a word or short phrase
 * with a slight tilt and a hand-drawn edge. Coral is a shape here, never a
 * text color: the text itself stays navy (5.31:1 on coral).
 *
 * `draw` animates it in once, left to right (disabled under reduced motion).
 */

type SwipeProps = {
  children: ReactNode;
  draw?: boolean;
  className?: string;
};

// Irregular marker stroke: uneven top and bottom edges, ragged ends.
const SWIPE_PATH =
  "M4 9 C 22 5, 48 7, 76 5 S 128 3, 158 4 S 190 5, 197 7 C 199 10, 197 14, 198 18 C 196 21, 184 20, 170 21 S 118 22, 88 21 S 34 23, 14 22 C 7 22, 3 21, 2 18 C 1 14, 3 12, 4 9 Z";

export function Swipe({ children, draw = false, className = "" }: SwipeProps) {
  return (
    <span className={`relative inline-block whitespace-nowrap ${className}`}>
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 200 26"
        preserveAspectRatio="none"
        className={`pointer-events-none absolute -left-[4%] bottom-[0.06em] -z-0 h-[0.48em] w-[108%] -rotate-[1.5deg] text-coral ${
          draw ? "swipe-draw" : ""
        }`}
      >
        <path d={SWIPE_PATH} fill="currentColor" />
      </svg>
      <span className="relative">{children}</span>
    </span>
  );
}

/**
 * Thin swipe used for nav hover and active states. Parent needs the
 * `group` class; the swipe grows in on hover or when `active` is set.
 */
export function SwipeUnderline({ active = false }: { active?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 200 26"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute -left-[6%] bottom-[-0.15em] h-[0.45em] w-[112%] origin-left -rotate-[1deg] text-coral transition-transform duration-300 ease-out ${
        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"
      }`}
    >
      <path d={SWIPE_PATH} fill="currentColor" />
    </svg>
  );
}
