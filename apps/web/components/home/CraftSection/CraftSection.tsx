/**
 * CraftSection
 * ─────────────────────────────────────────────────────────────────────────────
 * Editorial section communicating Artha's quality principles.
 *
 * Intentionally NOT a feature card grid. Three principles are presented
 * as an editorial list — separated by hairline dividers, breathing in
 * generous whitespace. This feels like a quality manifesto, not a spec sheet.
 *
 * Server Component.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { Section, Container } from "@repo/ui";
import styles from "./CraftSection.module.css";

const CRAFT_PRINCIPLES = [
  {
    id:      "sourcing",
    number:  "01",
    heading: "Single-Origin Sourcing",
    body:    "Every coffee we carry is traceable to a single farm or cooperative. We visit our partners annually and publish full traceability reports with every lot.",
  },
  {
    id:      "roasting",
    number:  "02",
    heading: "Precision Roasting",
    body:    "Our Bengaluru roastery uses real-time temperature profiling to hit the same curve within 2°C — every batch, every time. Consistency is a form of respect.",
  },
  {
    id:      "freshness",
    number:  "03",
    heading: "Roasted to Order",
    body:    "Nothing sits in a warehouse. Every order is roasted within 48 hours of dispatch and rested for the optimal degassing window before it reaches you.",
  },
] as const;

export function CraftSection() {
  return (
    <Section spacing="xl" className={styles.section} aria-labelledby="craft-heading">
      <Container size="xl">
        {/* Section header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>The Standard</p>
          <h2 id="craft-heading" className={styles.heading}>
            Quality Without Compromise
          </h2>
        </div>

        {/* Editorial principles list */}
        <div className={styles.principles} role="list">
          {CRAFT_PRINCIPLES.map((principle) => (
            <div
              key={principle.id}
              className={styles.principle}
              role="listitem"
            >
              <span className={styles.number} aria-hidden="true">
                {principle.number}
              </span>
              <h3 className={styles.principleHeading}>{principle.heading}</h3>
              <p className={styles.principleBody}>{principle.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
