/**
 * Switch
 * ─────────────────────────────────────────────────────────────────────────────
 * Toggle boolean — visually a sliding pill track.
 *
 * Usage:
 *   <Switch id="notifications" label="Enable notifications" checked={on} onChange={setOn} />
 *
 * Accessibility:
 *   - role="switch" with aria-checked.
 *   - Keyboard: Space to toggle, Tab to focus.
 *   - :focus-visible ring on track.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { InputHTMLAttributes, ReactNode } from "react";
import styles from "./Switch.module.css";

export type SwitchSize = "sm" | "md";

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: ReactNode;
  description?: string;
  size?: SwitchSize;
}

export function Switch({
  label,
  description,
  size = "md",
  disabled,
  id,
  className = "",
  ...props
}: SwitchProps) {
  return (
    <div
      className={[
        styles.root,
        disabled ? styles.disabled : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.row}>
        <span className={[styles.track, styles[`size-${size}`]].filter(Boolean).join(" ")}>
          <input
            {...props}
            id={id}
            type="checkbox"
            role="switch"
            disabled={disabled}
            aria-checked={props.checked}
            aria-describedby={description && id ? `${id}-desc` : undefined}
            className={[styles.input, className].filter(Boolean).join(" ")}
          />
          <span className={styles.thumb} aria-hidden="true" />
        </span>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}
      </div>
      {description && (
        <p
          id={id ? `${id}-desc` : undefined}
          className={styles.description}
        >
          {description}
        </p>
      )}
    </div>
  );
}
