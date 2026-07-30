/**
 * Select
 * ─────────────────────────────────────────────────────────────────────────────
 * Dropdown select field.
 *
 * Variants: default | error | success
 * Sizes:    sm | md | lg
 *
 * Usage:
 *   <Select id="country" status="error" errorMessage="Required">
 *     <option value="">Choose one</option>
 *     <option value="in">India</option>
 *   </Select>
 *
 * Accessibility:
 *   - Wraps native <select> — full keyboard + screen-reader support.
 *   - aria-invalid on error state.
 *   - errorMessage linked via aria-describedby.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { ReactNode, SelectHTMLAttributes } from "react";
import styles from "./Select.module.css";

export type SelectSize = "sm" | "md" | "lg";
export type SelectStatus = "default" | "error" | "success";

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  size?: SelectSize;
  status?: SelectStatus;
  errorMessage?: string;
  leftIcon?: ReactNode;
  children: ReactNode;
}

export function Select({
  size = "md",
  status = "default",
  errorMessage,
  leftIcon,
  children,
  className = "",
  id,
  disabled,
  ...props
}: SelectProps) {
  const errorId = errorMessage && id ? `${id}-error` : undefined;

  return (
    <div className={styles.root}>
      <div
        className={[
          styles.wrapper,
          styles[`size-${size}`],
          styles[`status-${status}`],
          disabled ? styles.disabled : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {leftIcon && (
          <span className={styles.iconLeft} aria-hidden="true">
            {leftIcon}
          </span>
        )}
        <select
          {...props}
          id={id}
          disabled={disabled}
          aria-invalid={status === "error" ? "true" : undefined}
          aria-describedby={errorId}
          className={[styles.select, className].filter(Boolean).join(" ")}
        >
          {children}
        </select>
        <span className={styles.chevron} aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2.5 4.5L6 8L9.5 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      {errorMessage && (
        <p id={errorId} className={styles.errorMessage} role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
