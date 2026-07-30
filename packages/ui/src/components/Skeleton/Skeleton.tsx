/**
 * Skeleton
 * ─────────────────────────────────────────────────────────────────────────────
 * Loading placeholder.
 * Variants: text | circular | rectangular | card
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { HTMLAttributes } from "react";
import styles from "./Skeleton.module.css";

export type SkeletonVariant = "text" | "circular" | "rectangular" | "card";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant;
}

export function Skeleton({
  variant = "text",
  className = "",
  ...props
}: SkeletonProps) {
  return (
    <div
      {...props}
      className={[styles.skeleton, styles[`variant-${variant}`], className]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    />
  );
}
