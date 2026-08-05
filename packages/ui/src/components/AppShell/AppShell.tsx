/**
 * AppShell
 * ─────────────────────────────────────────────────────────────────────────────
 * Structural layout wrapper for every page in the application.
 * Provides the full-height flex column hierarchy:
 *   Skip Link → Header → Main → Footer
 *
 * Usage:
 *   <AppShell header={<Header />} footer={<Footer />}>
 *     {children}
 *   </AppShell>
 *
 * Accessibility:
 *   - Provides a "Skip to main content" link as the very first focusable element.
 *   - Uses semantic HTML: <header>, <main>, <footer>.
 *   - The main landmark has id="main-content" as the skip link target.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { ReactNode, HTMLAttributes } from "react";
import styles from "./AppShell.module.css";

export interface AppShellProps extends HTMLAttributes<HTMLDivElement> {
  /** Slot for the site header (e.g. <SiteHeader />). */
  header?: ReactNode;
  /** Slot for the site footer (e.g. <SiteFooter />). */
  footer?: ReactNode;
  /** Page content rendered inside <main>. */
  children: ReactNode;
  /** Label for the skip link. Defaults to "Skip to main content". */
  skipLabel?: string;
}

export function AppShell({
  header,
  footer,
  children,
  skipLabel = "Skip to main content",
  className = "",
  ...props
}: AppShellProps) {
  return (
    <div
      {...props}
      className={[styles.shell, className].filter(Boolean).join(" ")}
    >
      {/* ── Skip to Content (must be the very first focusable element) ── */}
      <a href="#main-content" className={styles.skipLink}>
        {skipLabel}
      </a>

      {/* ── Header landmark ── */}
      {header && <header className={styles.header}>{header}</header>}

      {/* ── Main content landmark ── */}
      <main id="main-content" className={styles.main} tabIndex={-1}>
        {children}
      </main>

      {/* ── Footer landmark ── */}
      {footer && <footer className={styles.footer}>{footer}</footer>}
    </div>
  );
}
