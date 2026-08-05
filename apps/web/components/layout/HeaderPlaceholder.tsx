/**
 * HeaderPlaceholder
 * ─────────────────────────────────────────────────────────────────────────────
 * Structural placeholder for the site header.
 * This component establishes the correct height, background, and border
 * for the sticky header region.
 *
 * ⚠ TASK-008 will replace this with the real SiteHeader component.
 * Do NOT add navigation or content here.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { Container } from "@repo/ui";
import styles from "./HeaderPlaceholder.module.css";

export function HeaderPlaceholder() {
  return (
    <div className={styles.header} aria-hidden="true">
      <Container size="xl" className={styles.inner}>
        {/* Navigation and branding will be implemented in TASK-008 */}
      </Container>
    </div>
  );
}
