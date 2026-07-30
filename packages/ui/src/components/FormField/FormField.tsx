/**
 * FormField
 * ─────────────────────────────────────────────────────────────────────────────
 * Layout wrapper for form inputs (Input, Select, Textarea).
 * Handles label, description, and error message positioning.
 *
 * Usage:
 *   <FormField label="Email" description="We'll never share your email" error="Invalid format">
 *     <Input id="email" type="email" />
 *   </FormField>
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { ReactNode, HTMLAttributes } from "react";
import { Label } from "../Label";
import styles from "./FormField.module.css";

export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  htmlFor?: string;
  description?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  children: ReactNode;
}

export function FormField({
  label,
  htmlFor,
  description,
  error,
  required,
  children,
  className = "",
  ...props
}: FormFieldProps) {
  return (
    <div
      {...props}
      className={[styles.root, className].filter(Boolean).join(" ")}
    >
      <div className={styles.header}>
        <Label htmlFor={htmlFor} required={required}>
          {label}
        </Label>
        {description && (
          <span className={styles.description}>{description}</span>
        )}
      </div>
      <div className={styles.control}>
        {children}
      </div>
      {error && (
        <div className={styles.error} role="alert">
          {error}
        </div>
      )}
    </div>
  );
}
