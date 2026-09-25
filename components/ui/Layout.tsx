import type { ReactNode } from "react";

/** Page-width container with generous side margins. */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-page px-6 md:px-12 ${className}`.trim()}>{children}</div>;
}

/** A page section with book-page vertical rhythm. */
export function Section({
  id,
  labelledBy,
  className = "",
  children,
}: {
  id?: string;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-section md:py-section-lg ${className}`.trim()}>
      <Container>{children}</Container>
    </section>
  );
}
