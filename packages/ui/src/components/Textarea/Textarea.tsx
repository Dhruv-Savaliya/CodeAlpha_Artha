/**
 * Textarea
 * ─────────────────────────────────────────────────────────────────────────────
 * Multiline text input. Matches Input visual language.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { TextareaHTMLAttributes } from "react";
import styles from "./Textarea.module.css";

export type TextareaStatus = "default" | "error";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  status?: TextareaStatus;
  errorMessage?: string;
}

export function Textarea({
  status = "default",
  errorMessage,
  className = "",
  id,
  ...props
}: TextareaProps) {
  const errorId = errorMessage && id ? `${id}-error` : undefined;

  return (
    <div className={styles.root}>
      <textarea
        {...props}
        id={id}
        className={[
          styles.textarea,
          styles[`status-${status}`],
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        aria-invalid={status === "error" ? "true" : undefined}
        aria-describedby={errorId}
      />
      {errorMessage && (
        <p id={errorId} className={styles.errorMessage} role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
