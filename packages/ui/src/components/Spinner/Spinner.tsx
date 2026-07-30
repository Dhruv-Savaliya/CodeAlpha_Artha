/**
 * Spinner
 * ─────────────────────────────────────────────────────────────────────────────
 * Loading indicator.
 * Sizes: sm | md | lg
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { HTMLAttributes } from "react";
import styles from "./Spinner.module.css";

export type SpinnerSize = "sm" | "md" | "lg";

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  size?: SpinnerSize;
}

export function Spinner({
  size = "md",
  className = "",
  ...props
}: SpinnerProps) {
  return (
    <span
      {...props}
      role="status"
      aria-live="polite"
      className={[styles.spinner, styles[`size-${size}`], className]
        .filter(Boolean)
        .join(" ")}
    >
      <span className={styles.srOnly}>Loading...</span>
    </span>
  );
}
