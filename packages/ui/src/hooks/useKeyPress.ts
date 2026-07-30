/**
 * useKeyPress
 * ─────────────────────────────────────────────────────────────────────────────
 * Fires a callback when a specific key or key combination is pressed.
 * Optionally scoped to a container ref.
 * ─────────────────────────────────────────────────────────────────────────────
 */
"use client";

import { useEffect } from "react";

interface UseKeyPressOptions {
  /** The key to listen for (e.g. "Escape", "Enter", "ArrowDown") */
  key: string;
  /** Callback fired when the key is pressed */
  callback: (e: KeyboardEvent) => void;
  /** Whether the listener is active */
  enabled?: boolean;
  /** Require meta key */
  meta?: boolean;
  /** Require ctrl key */
  ctrl?: boolean;
  /** Require shift key */
  shift?: boolean;
}

export function useKeyPress({
  key,
  callback,
  enabled = true,
  meta = false,
  ctrl = false,
  shift = false,
}: UseKeyPressOptions): void {
  useEffect(() => {
    if (!enabled) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== key) return;
      if (meta && !e.metaKey) return;
      if (ctrl && !e.ctrlKey) return;
      if (shift && !e.shiftKey) return;
      callback(e);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [key, callback, enabled, meta, ctrl, shift]);
}
