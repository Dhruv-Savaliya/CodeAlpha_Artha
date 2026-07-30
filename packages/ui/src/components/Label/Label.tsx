/**
 * Label
 * ─────────────────────────────────────────────────────────────────────────────
 * Form label component with required/optional indicators.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { LabelHTMLAttributes } from "react";
import styles from "./Label.module.css";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  optional?: boolean;
  disabled?: boolean;
}

export function Label({
  required,
  optional,
  disabled,
  children,
  className = "",
  ...props
}: LabelProps) {
  return (
    <label
      {...props}
      className={[
        styles.label,
        disabled ? styles.disabled : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
      {required && (
        <span className={styles.required} aria-hidden="true">
          *
        </span>
      )}
      {optional && (
        <span className={styles.optional}>(Optional)</span>
      )}
    </label>
  );
}
