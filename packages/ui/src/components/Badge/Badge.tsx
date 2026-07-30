/**
 * Badge
 * ─────────────────────────────────────────────────────────────────────────────
 * Status chip.
 * Variants: success | warning | danger | info | neutral | brand
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Badge.module.css";

export type BadgeVariant =
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral"
  | "brand";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

export function Badge({
  variant = "neutral",
  children,
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span
      {...props}
      className={[styles.badge, styles[`variant-${variant}`], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
