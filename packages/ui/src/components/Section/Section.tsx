/**
 * Section
 * ─────────────────────────────────────────────────────────────────────────────
 * Reusable vertical spacing block.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { HTMLAttributes } from "react";
import styles from "./Section.module.css";

export type SectionSpacing = "sm" | "md" | "lg" | "xl";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: SectionSpacing;
}

export function Section({
  spacing = "md",
  children,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      {...props}
      className={[styles.section, styles[`spacing-${spacing}`], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </section>
  );
}
