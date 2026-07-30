/**
 * Button
 * ─────────────────────────────────────────────────────────────────────────────
 * Primary interactive element. All variants consume design tokens exclusively.
 *
 * Variants: primary | secondary | ghost | destructive | link | icon
 * Sizes:    sm | md | lg
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "destructive"
  | "link"
  | "icon";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  children,
  disabled,
  className = "",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      {...props}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      className={[
        styles.button,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        loading ? styles.loading : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {loading && (
        <span className={styles.spinnerWrap} aria-hidden="true">
          <span className={styles.spinner} />
        </span>
      )}
      {!loading && leftIcon && (
        <span className={styles.iconLeft} aria-hidden="true">
          {leftIcon}
        </span>
      )}
      {children && (
        <span className={styles.label}>{children}</span>
      )}
      {!loading && rightIcon && (
        <span className={styles.iconRight} aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </button>
  );
}
