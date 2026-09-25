import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/**
 * Buttons. Inter Semibold 15px, sentence case, 4px radius, never pill shaped.
 * Use one primary button per view.
 *
 * Primary: coral fill. Label is navy, not cream, because cream on coral is
 * 2.15:1 and fails WCAG AA. Navy on coral is 5.31:1.
 * Secondary: 1.5px navy outline, navy label.
 */

type Variant = "primary" | "secondary";

const base =
  "inline-flex min-h-[48px] items-center justify-center gap-2 rounded px-6 py-3 font-sans text-button font-semibold transition-colors duration-200 ease-out disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-coral text-navy hover:bg-[#E27A68] active:bg-[#DB6E5B]",
  secondary: "border-1.5 border-navy text-navy hover:bg-navy hover:text-cream",
};

export function buttonClasses(variant: Variant = "primary", className = "") {
  return `${base} ${variants[variant]} ${className}`.trim();
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & { variant?: Variant };

export function Button({ variant = "primary", className, type = "button", ...rest }: ButtonProps) {
  return <button type={type} className={buttonClasses(variant, className)} {...rest} />;
}

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

/** A link styled as a button. Uses a plain anchor for hashes and mailto links. */
export function ButtonLink({ href, variant = "primary", className, children }: ButtonLinkProps) {
  const classes = buttonClasses(variant, className);
  if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
