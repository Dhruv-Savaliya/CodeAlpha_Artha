/**
 * Home — root placeholder page.
 *
 * ⚠ This is a structural placeholder only.
 *   The real homepage will be implemented in a dedicated ticket.
 */
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <p className={styles.status}>Artha — project foundation active.</p>
    </div>
  );
}
