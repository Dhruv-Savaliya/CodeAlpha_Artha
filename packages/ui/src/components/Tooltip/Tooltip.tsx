/**
 * Tooltip
 * ─────────────────────────────────────────────────────────────────────────────
 * Hover label providing contextual information.
 *
 * Usage:
 *   <Tooltip content="Edit settings">
 *     <IconButton icon="settings" />
 *   </Tooltip>
 * ─────────────────────────────────────────────────────────────────────────────
 */
"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { useState, useRef, useEffect } from "react";
import styles from "./Tooltip.module.css";

export interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, "content"> {
  content: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  delayMs?: number;
  children: ReactNode;
}

export function Tooltip({
  content,
  position = "top",
  delayMs = 200,
  children,
  className = "",
  ...props
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsVisible(true), delayMs);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      {children}
      {isVisible && (
        <div
          {...props}
          role="tooltip"
          className={[
            styles.tooltip,
            styles[`position-${position}`],
            className,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {content}
        </div>
      )}
    </div>
  );
}
