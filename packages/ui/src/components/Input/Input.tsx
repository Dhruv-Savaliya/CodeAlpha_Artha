/**
 * Input
 * ─────────────────────────────────────────────────────────────────────────────
 * Text input field. Supports icon slots, prefix, error/success states.
 * Sizes: sm | md | lg
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { InputHTMLAttributes, ReactNode } from "react";
import styles from "./Input.module.css";

export type InputSize = "sm" | "md" | "lg";
export type InputStatus = "default" | "error" | "success";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: InputSize;
  status?: InputStatus;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  prefix?: string;
  suffix?: string;
  errorMessage?: string;
}

export function Input({
  size = "md",
  status = "default",
  leftIcon,
  rightIcon,
  prefix,
  suffix,
  errorMessage,
  className = "",
  id,
  ...props
}: InputProps) {
  const errorId = errorMessage && id ? `${id}-error` : undefined;

  return (
    <div className={styles.root}>
      <div
        className={[
          styles.wrapper,
          styles[`size-${size}`],
          styles[`status-${status}`],
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {prefix && (
          <span className={styles.prefix} aria-hidden="true">
            {prefix}
          </span>
        )}
        {leftIcon && (
          <span className={styles.iconLeft} aria-hidden="true">
            {leftIcon}
          </span>
        )}
        <input
          {...props}
          id={id}
          className={[styles.input, className].filter(Boolean).join(" ")}
          aria-invalid={status === "error" ? "true" : undefined}
          aria-describedby={errorId}
        />
        {rightIcon && (
          <span className={styles.iconRight} aria-hidden="true">
            {rightIcon}
          </span>
        )}
        {suffix && (
          <span className={styles.suffix} aria-hidden="true">
            {suffix}
          </span>
        )}
      </div>
      {errorMessage && (
        <p id={errorId} className={styles.errorMessage} role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
