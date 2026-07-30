/**
 * Design System Showcase
 * ─────────────────────────────────────────────────────────────────────────────
 * Living documentation for Artha UI foundation components.
 * ─────────────────────────────────────────────────────────────────────────────
 */
"use client";

import {
  Avatar,
  Badge,
  Button,
  Card,
  Container,
  Divider,
  Icons,
  Input,
  Label,
  Logo,
  Section,
  Skeleton,
  Spinner,
  Textarea,
  useTheme,
} from "@repo/ui";
import styles from "./page.module.css";

export default function DesignSystemPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Container>
          <div className={styles.headerContent}>
            <div className={styles.branding}>
              <Logo />
              <div className={styles.badgeWrap}>
                <Badge variant="brand">Design System V1</Badge>
              </div>
            </div>
            <div className={styles.themeToggle}>
              <Label>Theme:</Label>
              <Button
                variant={theme === "light" ? "primary" : "ghost"}
                size="sm"
                onClick={() => setTheme("light")}
              >
                Light
              </Button>
              <Button
                variant={theme === "dark" ? "primary" : "ghost"}
                size="sm"
                onClick={() => setTheme("dark")}
              >
                Dark
              </Button>
            </div>
          </div>
        </Container>
      </header>

      <main className={styles.main}>
        <Container>
          <Section spacing="lg">
            <h1 className={styles.title}>Typography</h1>
            <p className={styles.subtitle}>
              Inter for sans-serif, JetBrains Mono for monospace.
            </p>
            <Divider className={styles.divider} />
            <div className={styles.typeScale}>
              <div>
                <span className={styles.typeLabel}>Display 2XL (72px)</span>
                <div style={{ fontSize: "var(--artha-text-display-2xl)", fontWeight: 700 }}>Artha Fintech</div>
              </div>
              <div>
                <span className={styles.typeLabel}>Heading XL (36px)</span>
                <div style={{ fontSize: "var(--artha-text-heading-xl)", fontWeight: 600 }}>Your Portfolio Overview</div>
              </div>
              <div>
                <span className={styles.typeLabel}>Body MD (15px)</span>
                <div style={{ fontSize: "var(--artha-text-body-md)" }}>
                  A thoughtful system for tracking money, setting goals, and making informed financial decisions.
                </div>
              </div>
              <div>
                <span className={styles.typeLabel}>Numeric XL (36px)</span>
                <div style={{ fontSize: "var(--artha-text-numeric-xl)", fontWeight: 500 }}>$142,500.00</div>
              </div>
            </div>
          </Section>

          <Section spacing="lg">
            <h1 className={styles.title}>Buttons</h1>
            <p className={styles.subtitle}>Primary actions and links.</p>
            <Divider className={styles.divider} />
            <div className={styles.grid}>
              <div className={styles.col}>
                <Label>Primary</Label>
                <div className={styles.row}>
                  <Button variant="primary">Deposit</Button>
                  <Button variant="primary" loading>Deposit</Button>
                  <Button variant="primary" disabled>Deposit</Button>
                </div>
              </div>
              <div className={styles.col}>
                <Label>Secondary</Label>
                <div className={styles.row}>
                  <Button variant="secondary">Cancel</Button>
                  <Button variant="secondary" loading>Cancel</Button>
                  <Button variant="secondary" disabled>Cancel</Button>
                </div>
              </div>
              <div className={styles.col}>
                <Label>Ghost & Destructive</Label>
                <div className={styles.row}>
                  <Button variant="ghost">Learn More</Button>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </div>
            </div>
          </Section>

          <Section spacing="lg">
            <h1 className={styles.title}>Inputs & Forms</h1>
            <p className={styles.subtitle}>Data entry components.</p>
            <Divider className={styles.divider} />
            <div className={styles.grid}>
              <div className={styles.col}>
                <Label required>Email Address</Label>
                <Input placeholder="Enter your email" type="email" />
              </div>
              <div className={styles.col}>
                <Label>Amount</Label>
                <Input
                  placeholder="0.00"
                  type="number"
                  prefix="$"
                  suffix="USD"
                />
              </div>
              <div className={styles.col}>
                <Label>Search</Label>
                <Input
                  placeholder="Search transactions..."
                  leftIcon={<Icons.Search size={16} />}
                />
              </div>
              <div className={styles.col}>
                <Label>Bio</Label>
                <Textarea placeholder="Tell us about your financial goals..." />
              </div>
              <div className={styles.col}>
                <Label>Validation Error</Label>
                <Input
                  placeholder="Password"
                  type="password"
                  status="error"
                  errorMessage="Password must be at least 8 characters."
                />
              </div>
            </div>
          </Section>

          <Section spacing="lg">
            <h1 className={styles.title}>Data Display</h1>
            <p className={styles.subtitle}>Cards, Avatars, Badges, and Status.</p>
            <Divider className={styles.divider} />
            
            <div className={styles.grid2}>
              <Card variant="bordered">
                <div className={styles.cardHeader}>
                  <Avatar size="lg" fallback="DS" />
                  <div>
                    <h3 style={{ fontSize: "var(--artha-text-heading-xs)", margin: 0 }}>Dhruv Savaliya</h3>
                    <p style={{ color: "var(--artha-color-text-secondary)", margin: 0 }}>Pro Member</p>
                  </div>
                </div>
                <Divider style={{ margin: "var(--artha-space-4) 0" }} />
                <div style={{ display: "flex", gap: "var(--artha-space-2)", flexWrap: "wrap" }}>
                  <Badge variant="success">Active</Badge>
                  <Badge variant="brand">Premium</Badge>
                  <Badge variant="warning">Expiring</Badge>
                  <Badge variant="danger">Locked</Badge>
                </div>
              </Card>

              <Card variant="interactive">
                <div className={styles.cardHeader}>
                  <div style={{ 
                    width: 48, height: 48, 
                    borderRadius: "var(--artha-radius-md)", 
                    backgroundColor: "var(--artha-color-brand-subtle)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--artha-color-brand)"
                  }}>
                    <Icons.Wallet size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "var(--artha-text-heading-xs)", margin: 0 }}>Main Portfolio</h3>
                    <p style={{ color: "var(--artha-color-text-secondary)", margin: 0 }}>Updated just now</p>
                  </div>
                </div>
                <div style={{ marginTop: "var(--artha-space-6)" }}>
                  <div style={{ fontSize: "var(--artha-text-numeric-lg)", fontWeight: 600 }}>
                    $1,420,500.00
                  </div>
                </div>
              </Card>
            </div>
          </Section>

          <Section spacing="lg">
            <h1 className={styles.title}>Feedback & Loading</h1>
            <p className={styles.subtitle}>Spinners and Skeletons.</p>
            <Divider className={styles.divider} />
            
            <div className={styles.grid}>
              <div className={styles.col}>
                <Label>Spinners</Label>
                <div className={styles.row}>
                  <Spinner size="sm" />
                  <Spinner size="md" />
                  <Spinner size="lg" />
                </div>
              </div>
              <div className={styles.col} style={{ gridColumn: "span 2" }}>
                <Label>Skeletons</Label>
                <div style={{ display: "flex", gap: "var(--artha-space-4)", alignItems: "center" }}>
                  <Skeleton variant="circular" style={{ width: 48, height: 48 }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--artha-space-2)", flex: 1 }}>
                    <Skeleton variant="text" style={{ width: "60%" }} />
                    <Skeleton variant="text" style={{ width: "40%" }} />
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </Container>
      </main>
    </div>
  );
}
