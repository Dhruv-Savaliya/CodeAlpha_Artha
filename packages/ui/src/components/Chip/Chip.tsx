/**
 * Chip
 * ─────────────────────────────────────────────────────────────────────────────
 * Compact element that represent an input, attribute, or action.
 * Can be dismissible (has close button).
 *
 * Variants: neutral | brand
 *
 * Usage:
 *   <Chip onDismiss={() => handleRemove()}>Coffee</Chip>
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { HTMLAttributes, ReactNode } from "react";
import { Icons } from "../Icon";
import styles from "./Chip.module.css";

export type ChipVariant = "neutral" | "brand";

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  variant?: ChipVariant;
  onDismiss?: () => void;
  icon?: ReactNode;
  children: ReactNode;
}

export function Chip({
  variant = "neutral",
  onDismiss,
  icon,
  children,
  className = "",
  ...props
}: ChipProps) {
  return (
    <div
      {...props}
      className={[styles.chip, styles[`variant-${variant}`], className]
        .filter(Boolean)
        .join(" ")}
    >
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <span className={styles.label}>{children}</span>
      {onDismiss && (
        <button
          type="button"
          className={styles.dismissBtn}
          onClick={onDismiss}
          aria-label="Remove"
        >
          <Icons.X size={14} />
        </button>
      )}
    </div>
  );
}
