/**
 * Container
 * ─────────────────────────────────────────────────────────────────────────────
 * Reusable max-width page container with horizontal padding.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { HTMLAttributes } from "react";
import styles from "./Container.module.css";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
}

export function Container({
  size = "lg",
  children,
  className = "",
  ...props
}: ContainerProps) {
  return (
    <div
      {...props}
      className={[styles.container, styles[`size-${size}`], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
