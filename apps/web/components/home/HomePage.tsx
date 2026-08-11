/**
 * HomePage
 * ─────────────────────────────────────────────────────────────────────────────
 * Top-level homepage composition for Artha Coffee.
 *
 * Declares the visual sequence of sections. Each section is independently
 * replaceable by a future ticket without restructuring this composition.
 *
 * Section replacement contracts:
 *   HeroSection      → TASK-010 (Cinematic Hero)
 *   FeaturedCollections → Future collection ticket (TASK-011+)
 *   BestSellers      → Future Product Card System ticket
 *   CoffeeStory      → Future brand/editorial ticket
 *   CraftSection     → Stable — content may be updated by brand
 *   NewsletterSection → Future server action / newsletter service ticket
 *
 * Server Component — no "use client" at this level.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { Hero } from "../hero/Hero";
import { FeaturedCollections } from "./FeaturedCollections/FeaturedCollections";
import { BestSellers } from "./BestSellers/BestSellers";
import { CoffeeStory } from "./CoffeeStory/CoffeeStory";
import { CraftSection } from "./CraftSection/CraftSection";
import { NewsletterSection } from "./NewsletterSection/NewsletterSection";

export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <BestSellers />
      <CoffeeStory />
      <CraftSection />
      <NewsletterSection />
    </>
  );
}
