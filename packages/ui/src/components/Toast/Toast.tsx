/**
 * Toast
 * ─────────────────────────────────────────────────────────────────────────────
 * Notification system.
 *
 * Usage:
 *   const { toast } = useToast();
 *   toast({ title: "Success", description: "Saved", variant: "success" });
 * ─────────────────────────────────────────────────────────────────────────────
 */
"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { Icons } from "../Icon";
import styles from "./Toast.module.css";

export type ToastVariant = "default" | "success" | "warning" | "danger" | "info";

export interface ToastOptions {
  id?: string;
  title: ReactNode;
  description?: ReactNode;
  variant?: ToastVariant;
  duration?: number;
}

export interface ToastContextValue {
  toast: (options: ToastOptions) => void;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

interface ToastItem extends ToastOptions {
  id: string;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    (options: ToastOptions) => {
      const id = options.id || Math.random().toString(36).substring(2, 9);
      const newToast = { ...options, id };

      setToasts((prev) => [...prev, newToast]);

      if (options.duration !== Infinity) {
        setTimeout(() => {
          dismiss(id);
        }, options.duration || 5000);
      }
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      {typeof window !== "undefined" &&
        createPortal(
          <div className={styles.viewport} aria-live="polite" aria-atomic="true">
            {toasts.map((t) => (
              <Toast key={t.id} {...t} onDismiss={() => dismiss(t.id)} />
            ))}
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  );
}

function Toast({
  title,
  description,
  variant = "default",
  onDismiss,
}: ToastItem & { onDismiss: () => void }) {
  return (
    <div
      role="status"
      className={[styles.toast, styles[`variant-${variant}`]].join(" ")}
    >
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        {description && <div className={styles.description}>{description}</div>}
      </div>
      <button
        type="button"
        className={styles.closeBtn}
        onClick={onDismiss}
        aria-label="Close notification"
      >
        <Icons.X size={16} />
      </button>
    </div>
  );
}
