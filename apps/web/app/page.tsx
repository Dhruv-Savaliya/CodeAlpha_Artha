import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Artha</h1>
        <p className={styles.message}>Repository initialized successfully.</p>
        <p className={styles.message}>Project foundation under development.</p>
      </main>
    </div>
  );
}
