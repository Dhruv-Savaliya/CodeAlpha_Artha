/**
 * Avatar
 * ─────────────────────────────────────────────────────────────────────────────
 * User image or initials.
 * Sizes: xs | sm | md | lg | xl
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: AvatarSize;
  fallback?: string;
}

export function Avatar({
  size = "md",
  fallback,
  src,
  alt,
  className = "",
  ...props
}: AvatarProps) {
  return (
    <div
      className={[styles.root, styles[`size-${size}`], className]
        .filter(Boolean)
        .join(" ")}
    >
      {src ? (
        <img {...props} src={src} alt={alt || "Avatar"} className={styles.image} />
      ) : (
        <span className={styles.fallback} aria-hidden="true">
          {fallback?.slice(0, 2).toUpperCase() || "?"}
        </span>
      )}
    </div>
  );
}
