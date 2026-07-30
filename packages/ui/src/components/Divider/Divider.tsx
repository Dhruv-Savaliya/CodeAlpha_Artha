/**
 * Divider
 * ─────────────────────────────────────────────────────────────────────────────
 * Visual separator.
 * Variants: horizontal | vertical
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { HTMLAttributes } from "react";
import styles from "./Divider.module.css";

export type DividerOrientation = "horizontal" | "vertical";

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: DividerOrientation;
}

export function Divider({
  orientation = "horizontal",
  className = "",
  ...props
}: DividerProps) {
  return (
    <hr
      {...props}
      className={[
        styles.divider,
        styles[`orientation-${orientation}`],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-orientation={orientation}
    />
  );
}
