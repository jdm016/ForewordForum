"use client";

import type { Icon as PhosphorIcon } from "@phosphor-icons/react";

/**
 * The only way icons enter the site. Phosphor, light weight, outline only.
 * Phosphor's light stroke is 12 units on a 256 grid, so at the default
 * 32px size it renders at the brand's 1.5px stroke with rounded caps and joins.
 * Navy by default, coral for active states. Decorative unless `label` is set.
 */

type IconProps = {
  icon: PhosphorIcon;
  size?: number;
  active?: boolean;
  label?: string;
  className?: string;
};

export function Icon({ icon: Glyph, size = 32, active = false, label, className = "" }: IconProps) {
  return (
    <Glyph
      size={size}
      weight="light"
      className={`${active ? "text-coral" : "text-navy"} ${className}`.trim()}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
    />
  );
}
