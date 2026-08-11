/**
 * BestSellers
 * ─────────────────────────────────────────────────────────────────────────────
 * Structural section for the homepage product showcase.
 *
 * Each product slot reserves space for: image, name, description, price, CTA.
 * The Product Card System (a future dedicated component ticket) will replace
 * these structural divs without altering the surrounding grid architecture.
 *
 * Server Component.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { Section, Container, Button } from "@repo/ui";
import styles from "./BestSellers.module.css";

/** Placeholder product data — will be replaced by real product data. */
const PLACEHOLDER_PRODUCTS = [
  {
    id:          "ethiopian-natural",
    name:        "Ethiopian Natural",
    description: "A radiant single-origin with notes of blueberry, jasmine, and dark chocolate. Naturally processed in Yirgacheffe.",
    price:       "₹1,200",
  },
  {
    id:          "colombia-washed",
    name:        "Colombia Washed",
    description: "Clean and bright with red apple acidity. Grown at 1,900m in the Huila region by a fourth-generation farming family.",
    price:       "₹950",
  },
  {
    id:          "monsoon-malabar",
    name:        "Monsoon Malabar",
    description: "An Indian classic — low acidity, full body, with earthy and woody notes developed through monsoon exposure.",
    price:       "₹850",
  },
] as const;

export function BestSellers() {
  return (
    <Section spacing="xl" className={styles.section} aria-labelledby="bestsellers-heading">
      <Container size="xl">
        {/* Section header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Most Loved</p>
          <h2 id="bestsellers-heading" className={styles.heading}>
            Best Sellers
          </h2>
          <p className={styles.description}>
            The coffees our community returns to — exceptional beans, roasted
            fresh, delivered to your door.
          </p>
        </div>

        {/* Product grid */}
        <div className={styles.grid} role="list">
          {PLACEHOLDER_PRODUCTS.map((product) => (
            <article
              key={product.id}
              className={styles.productSlot}
              role="listitem"
              aria-label={product.name}
            >
              {/* Image area — Product Card System replaces this in a future ticket */}
              <div
                className={styles.productImage}
                role="img"
                aria-label={`${product.name} — product image placeholder`}
              />

              {/* Product details */}
              <div className={styles.productMeta}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productDescription}>{product.description}</p>
              </div>

              {/* Price and CTA */}
              <div className={styles.productFooter}>
                <span className={styles.productPrice}>{product.price}</span>
                <Button variant="secondary" size="sm">
                  Add to Cart
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
