/**
 * CoffeeStory
 * ─────────────────────────────────────────────────────────────────────────────
 * Editorial storytelling section. Establishes the pattern for brand narrative
 * content: a large visual area paired with supporting text.
 *
 * The composition is intentional — proportions and whitespace communicate
 * editorial quality before any real content is in place.
 *
 * Server Component.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { Section, Container, Button } from "@repo/ui";
import styles from "./CoffeeStory.module.css";

export function CoffeeStory() {
  return (
    <Section spacing="xl" className={styles.section} aria-labelledby="story-heading">
      <Container size="xl">
        <div className={styles.split}>
          {/* ── Visual column ─────────────────────────────────────────── */}
          <div className={styles.visualColumn}>
            {/* Image placeholder — TASK-010 or brand ticket replaces with real photography */}
            <div
              className={styles.imageArea}
              role="img"
              aria-label="Coffee origin — editorial photography placeholder"
            />
            <p className={styles.caption}>Origin · Yirgacheffe, Ethiopia</p>
          </div>

          {/* ── Narrative column ─────────────────────────────────────── */}
          <div className={styles.narrativeColumn}>
            <p className={styles.eyebrow}>The Artha Story</p>

            <h2 id="story-heading" className={styles.heading}>
              Where Every Bean Has a Name
            </h2>

            <div className={styles.body}>
              <hr className={styles.rule} />
              <p className={styles.paragraph}>
                {/* Intentional placeholder — brand copywriter will replace */}
                We source directly from smallholder farms across Ethiopia,
                Colombia, and the Malabar coast of India. Not because it is
                fashionable, but because the quality is measurably better —
                and because the people who grow the best coffee deserve to be
                known by name.
              </p>
              <p className={styles.paragraph}>
                Each harvest is cupped at origin and again at our roastery in
                Bengaluru. If a lot doesn&apos;t meet our standard, it doesn&apos;t ship.
                Simple as that.
              </p>
            </div>

            <div className={styles.cta}>
              <Button variant="ghost" size="md">
                Read the Full Story
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
