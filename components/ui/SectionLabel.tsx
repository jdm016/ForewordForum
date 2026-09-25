import type { ReactNode } from "react";

/**
 * Small caps eyebrow above a section heading. Inter 500, 0.12em tracking,
 * bindery green (coral fails contrast at this size).
 */
export function SectionLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`type-label ${className}`}>{children}</p>;
}
