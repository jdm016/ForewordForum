import type { ElementType, ReactNode } from "react";

/**
 * Type roles from the brand system. Each role has a default element, and
 * `as` lets you keep heading order correct without changing the look
 * (for example a Title rendered as an h1 in the hero).
 */

type TypeProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  id?: string;
};

function make(defaultTag: ElementType, roleClass: string) {
  function Type({ as, className = "", children, id }: TypeProps) {
    const Tag = as ?? defaultTag;
    return (
      <Tag id={id} className={`${roleClass} ${className}`.trim()}>
        {children}
      </Tag>
    );
  }
  return Type;
}

/** Playfair 700, 56/36px. The largest display size, used once per page. */
export const Title = make("h1", "type-title");
/** Playfair 600, 44/32px. */
export const Header = make("h1", "type-h1");
/** Playfair 600, 36/28px. Section headings. */
export const Heading = make("h2", "type-h2");
/** Playfair italic 400, 30/24px. */
export const PullQuote = make("blockquote", "type-quote");
/** Playfair italic 400, 24/20px. */
export const Subtitle = make("p", "type-subtitle");
/** Inter 600, 22/19px. */
export const Subheading = make("h3", "type-h3");
/** Inter 400, 18/16px, capped at a readable measure. */
export const Body = make("p", "type-body");
/** Inter 400, 14/13px. */
export const Caption = make("p", "type-caption");
