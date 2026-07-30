/**
 * Checkbox
 * ─────────────────────────────────────────────────────────────────────────────
 * Boolean input with optional indeterminate state.
 *
 * Variants: default | indeterminate | disabled
 *
 * Usage:
 *   <Checkbox id="terms" label="I agree to the terms" />
 *   <Checkbox checked={false} indeterminate label="Select all" />
 *
 * Accessibility:
 *   - Native <input type="checkbox"> wrapped in a visible <label>.
 *   - aria-checked="mixed" on indeterminate state.
 *   - Focus ring via :focus-visible.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { InputHTMLAttributes, ReactNode } from "react";
import { useEffect, useRef } from "react";
import styles from "./Checkbox.module.css";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: ReactNode;
  indeterminate?: boolean;
  description?: string;
}

export function Checkbox({
  label,
  indeterminate = false,
  description,
  className = "",
  disabled,
  id,
  ...props
}: CheckboxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <div className={[styles.root, disabled ? styles.disabled : ""].filter(Boolean).join(" ")}>
      <div className={styles.row}>
        <span className={styles.checkboxWrapper}>
          <input
            {...props}
            ref={inputRef}
            id={id}
            type="checkbox"
            disabled={disabled}
            aria-checked={indeterminate ? "mixed" : props.checked}
            aria-describedby={description && id ? `${id}-desc` : undefined}
            className={[styles.input, className].filter(Boolean).join(" ")}
          />
          <span className={styles.indicator} aria-hidden="true">
            {indeterminate ? (
              <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
                <line
                  x1="1" y1="1" x2="9" y2="1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path
                  d="M1 4L3.5 6.5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
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
