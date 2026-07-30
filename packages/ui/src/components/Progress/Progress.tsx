/**
 * Progress
 * ─────────────────────────────────────────────────────────────────────────────
 * Linear and circular progress indicators.
 *
 * Variants: linear | circular
 * Sizes:    sm | md | lg
 *
 * Usage:
 *   <Progress value={45} max={100} />
 *   <Progress variant="circular" value={75} />
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { HTMLAttributes } from "react";
import styles from "./Progress.module.css";

export type ProgressVariant = "linear" | "circular";
export type ProgressSize = "sm" | "md" | "lg";

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  variant?: ProgressVariant;
  size?: ProgressSize;
  value?: number;
  max?: number;
  indeterminate?: boolean;
}

export function Progress({
  variant = "linear",
  size = "md",
  value,
  max = 100,
  indeterminate = false,
  className = "",
  ...props
}: ProgressProps) {
  const isIndeterminate = indeterminate || value === undefined;
  const safeValue = Math.min(Math.max(value || 0, 0), max);
  const percentage = (safeValue / max) * 100;

  if (variant === "circular") {
    // Svg parameters for circular progress
    const radiusMap: Record<ProgressSize, number> = { sm: 12, md: 24, lg: 36 };
    const strokeMap: Record<ProgressSize, number> = { sm: 2, md: 4, lg: 6 };
    
    const r = radiusMap[size];
    const strokeWidth = strokeMap[size];
    const viewBoxSize = (r + strokeWidth) * 2;
    const center = viewBoxSize / 2;
    const circumference = 2 * Math.PI * r;
    const strokeDashoffset = isIndeterminate
      ? 0
      : circumference - (percentage / 100) * circumference;

    return (
      <div
        {...props}
        role="progressbar"
        aria-valuenow={isIndeterminate ? undefined : safeValue}
        aria-valuemin={0}
        aria-valuemax={max}
        className={[
          styles.root,
          styles[`variant-${variant}`],
          styles[`size-${size}`],
          isIndeterminate ? styles.indeterminate : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <svg
          className={styles.svg}
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className={styles.circleBg}
            cx={center}
            cy={center}
            r={r}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <circle
            className={styles.circleFg}
            cx={center}
            cy={center}
            r={r}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  // Linear
  return (
    <div
      {...props}
      role="progressbar"
      aria-valuenow={isIndeterminate ? undefined : safeValue}
      aria-valuemin={0}
      aria-valuemax={max}
      className={[
        styles.root,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        isIndeterminate ? styles.indeterminate : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.track}>
        <div
          className={styles.fill}
          style={!isIndeterminate ? { width: `${percentage}%` } : undefined}
        />
      </div>
    </div>
  );
}
