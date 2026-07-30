/**
 * Logo
 * ─────────────────────────────────────────────────────────────────────────────
 * Artha brand logo.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { SVGProps } from "react";
import styles from "./Logo.module.css";

export interface LogoProps extends SVGProps<SVGSVGElement> {
  showText?: boolean;
}

export function Logo({ showText = true, className = "", ...props }: LogoProps) {
  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(" ")}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.mark}
        {...props}
      >
        <rect width="32" height="32" rx="8" fill="var(--artha-color-brand)" />
        <path
          d="M16 8L24 24H8L16 8Z"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showText && <span className={styles.text}>Artha</span>}
    </div>
  );
}
