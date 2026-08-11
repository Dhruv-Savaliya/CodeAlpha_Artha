"use client";

/**
 * NewsletterSection
 * ─────────────────────────────────────────────────────────────────────────────
 * Community / newsletter sign-up section.
 *
 * "use client" is required here because the form uses a controlled input.
 * This is the ONLY client component on the homepage — all other sections
 * are server components.
 *
 * No API connection. The submit handler prevents default and does nothing.
 * A future ticket will wire this to a newsletter service (e.g. Resend,
 * Mailchimp) with a server action.
 *
 * Uses existing @repo/ui Input and Button primitives.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { useState, type FormEvent } from "react";
import { Section, Container, Input, Button } from "@repo/ui";
import styles from "./NewsletterSection.module.css";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Wire to newsletter service in a future ticket (Resend / server action)
  }

  return (
    <Section spacing="xl" className={styles.section} aria-labelledby="newsletter-heading">
      <Container size="md">
        <div className={styles.content}>
          <p className={styles.eyebrow}>Stay Connected</p>

          <h2 id="newsletter-heading" className={styles.heading}>
            Join the Artha Community
          </h2>

          <p className={styles.description} id="newsletter-description">
            Early access to new lots, roast notes, and stories from origin —
            delivered to your inbox, once a month.
          </p>

          {/* Accessible form */}
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            aria-describedby="newsletter-description"
            noValidate
          >
            <div className={styles.inputRow}>
              {/* Input uses an accessible label via aria-label */}
              <div className={styles.inputWrap}>
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                  autoComplete="email"
                  size="md"
                />
              </div>
              <Button type="submit" variant="primary" size="md">
                Subscribe
              </Button>
            </div>

            <p className={styles.disclaimer} id="newsletter-disclaimer">
              No spam. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </Container>
    </Section>
  );
}
