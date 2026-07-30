/**
 * Drawer
 * ─────────────────────────────────────────────────────────────────────────────
 * Slide-in side panel with backdrop, focus trap, and escape-to-close.
 *
 * Usage:
 *   <Drawer open={isOpen} onClose={() => setIsOpen(false)} side="right">
 *     Content
 *   </Drawer>
 * ─────────────────────────────────────────────────────────────────────────────
 */
"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Icons } from "../Icon";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { useKeyPress } from "../../hooks/useKeyPress";
import styles from "./Drawer.module.css";

export interface DrawerProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  children: ReactNode;
  side?: "left" | "right";
  hideCloseButton?: boolean;
}

export function Drawer({
  open,
  onClose,
  title,
  children,
  side = "right",
  hideCloseButton = false,
  className = "",
  ...props
}: DrawerProps) {
  const [mounted, setMounted] = useState(false);
  const trapRef = useFocusTrap<HTMLDivElement>(open);

  useKeyPress({
    key: "Escape",
    callback: onClose,
    enabled: open,
  });

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!mounted || !open) return null;

  const content = (
    <div className={styles.overlay} role="presentation">
      <div className={styles.backdrop} onClick={onClose} aria-hidden="true" />
      <div
        {...props}
        ref={trapRef}
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === "string" ? title : "Drawer"}
        className={[
          styles.drawer,
          styles[`side-${side}`],
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {(title || !hideCloseButton) && (
          <header className={styles.header}>
            <div className={styles.title}>{title}</div>
            {!hideCloseButton && (
              <button
                type="button"
                className={styles.closeBtn}
                onClick={onClose}
                aria-label="Close drawer"
              >
                <Icons.X size={20} />
              </button>
            )}
          </header>
        )}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
