"use client";

import React from "react";
import { Container } from "@repo/ui";
import styles from "./FeaturedCollections.module.css";

export function FeaturedCollections() {
  return (
    <section className={styles.featuredSection} aria-labelledby="featured-heading">
      <Container size="xl" className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.header}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Our Bestsellers
            </div>
            
            <h2 id="featured-heading" className={styles.headline}>
              CRAFTED TO<br />PERFECTION
            </h2>
            
            <p className={styles.description}>
              Handpicked beans. Expertly roasted. Perfectly brewed for you.
            </p>
            
            <button className={styles.btnPrimary} type="button">
              Explore Collection <span>→</span>
            </button>
          </div>

          <div className={styles.productShowcase}>
            {/* Foundational placeholder for the cups in the design */}
            <div className={styles.placeholderVisual}>
              <span className={styles.placeholderText}>
                [Product Showcase Foundation]
              </span>
            </div>
          </div>
        </div>

        {/* Categories Section Foundation */}
        <div className={styles.categoriesSection}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Shop by Category
          </div>
          
          <h3 className={styles.subHeadline}>
            FIND YOUR<br />
            <span className={styles.headlineHighlight}>PERFECT BREW</span>
          </h3>

          <div className={styles.categoryGrid}>
            <div className={styles.categoryCard}>
              <div className={styles.cardContent}>
                <h4>Ground Coffee</h4>
                <p>12 Products <span>→</span></p>
              </div>
            </div>
            <div className={styles.categoryCard}>
              <div className={styles.cardContent}>
                <h4>Coffee Beans</h4>
                <p>18 Products <span>→</span></p>
              </div>
            </div>
            <div className={styles.categoryCard}>
              <div className={styles.cardContent}>
                <h4>Capsules</h4>
                <p>10 Products <span>→</span></p>
              </div>
            </div>
            <div className={styles.categoryCard}>
              <div className={styles.cardContent}>
                <h4>Accessories</h4>
                <p>8 Products <span>→</span></p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
