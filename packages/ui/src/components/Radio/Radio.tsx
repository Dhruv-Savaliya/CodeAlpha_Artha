/**
 * Radio & RadioGroup
 * ─────────────────────────────────────────────────────────────────────────────
 * Single-selection input with accessible group wrapper.
 *
 * Usage:
 *   <RadioGroup label="Delivery frequency" name="frequency" value={val} onChange={setVal}>
 *     <Radio value="weekly" label="Weekly" />
 *     <Radio value="monthly" label="Monthly" />
 *   </RadioGroup>
 *
 * Accessibility:
 *   - Group wrapped in <fieldset> with <legend>.
 *   - Each Radio uses native <input type="radio"> with visible label.
 *   - :focus-visible focus ring.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { InputHTMLAttributes, ReactNode } from "react";
import { createContext, useContext } from "react";
import styles from "./Radio.module.css";

/* ── Radio Group Context ─────────────────────────────────────────────────── */

interface RadioGroupContextValue {
  name: string;
  value: string | undefined;
  onChange: (value: string) => void;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

/* ── RadioGroup ──────────────────────────────────────────────────────────── */

export interface RadioGroupProps {
  name: string;
  label?: string;
  value?: string;
  onChange: (value: string) => void;
  children: ReactNode;
  className?: string;
}

export function RadioGroup({
  name,
  label,
  value,
  onChange,
  children,
  className = "",
}: RadioGroupProps) {
  return (
    <RadioGroupContext.Provider value={{ name, value, onChange }}>
      <fieldset
        className={[styles.group, className].filter(Boolean).join(" ")}
      >
        {label && <legend className={styles.legend}>{label}</legend>}
        <div className={styles.items}>{children}</div>
      </fieldset>
    </RadioGroupContext.Provider>
  );
}

/* ── Radio ───────────────────────────────────────────────────────────────── */

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "name" | "onChange"> {
  label: ReactNode;
  value: string;
  description?: string;
}

export function Radio({
  label,
  value,
  description,
  disabled,
  id,
  className = "",
  ...props
}: RadioProps) {
  const ctx = useContext(RadioGroupContext);

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
        <span className={styles.radioWrapper}>
          <input
            {...props}
            id={id}
            type="radio"
            value={value}
            name={ctx?.name}
            checked={ctx ? ctx.value === value : props.checked}
            disabled={disabled}
            onChange={() => ctx?.onChange(value)}
            aria-describedby={description && id ? `${id}-desc` : undefined}
            className={[styles.input, className].filter(Boolean).join(" ")}
          />
          <span className={styles.indicator} aria-hidden="true">
            <span className={styles.dot} />
          </span>
        </span>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
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
