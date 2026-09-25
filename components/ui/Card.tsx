import type { ElementType, ReactNode } from "react";

/**
 * Card: cream surface, 1px patina rule, 4px radius. No shadows, ever.
 * `tone="endpaper"` gives the informational panel fill.
 */

type CardProps = {
  as?: ElementType;
  tone?: "cream" | "endpaper";
  className?: string;
  children: ReactNode;
};

export function Card({ as: Tag = "div", tone = "cream", className = "", children }: CardProps) {
  const toneClass = tone === "endpaper" ? "bg-endpaper border-endpaper" : "bg-cream border-patina";
  return <Tag className={`rounded border p-6 md:p-8 ${toneClass} ${className}`.trim()}>{children}</Tag>;
}
