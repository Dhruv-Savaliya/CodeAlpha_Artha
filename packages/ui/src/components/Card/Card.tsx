/**
 * Card
 * ─────────────────────────────────────────────────────────────────────────────
 * Content container.
 * Variants: flat | elevated | bordered | interactive
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Card.module.css";

export type CardVariant = "flat" | "elevated" | "bordered" | "interactive";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  children: ReactNode;
}

export function Card({
  variant = "bordered",
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      {...props}
      className={[styles.card, styles[`variant-${variant}`], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
