/**
 * FooterPlaceholder
 * ─────────────────────────────────────────────────────────────────────────────
 * Structural placeholder for the site footer.
 * Establishes the correct border, background, and minimum height
 * for the footer region.
 *
 * ⚠ TASK-008 will replace this with the real SiteFooter component.
 * Do NOT add links or content here.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { Container } from "@repo/ui";
import styles from "./FooterPlaceholder.module.css";

export function FooterPlaceholder() {
  return (
    <div className={styles.footer} aria-hidden="true">
      <Container size="xl" className={styles.inner}>
        {/* Footer links and content will be implemented in TASK-008 */}
      </Container>
    </div>
  );
}
