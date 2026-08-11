"use client";

import React from "react";
import styles from "./Hero.module.css";
import { motion, Variants } from "framer-motion";

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15 + 0.3, // delayed sequence: eyebrow, title, desc
      duration: 0.6,
      ease: [0.34, 1.4, 0.64, 1], // Custom ease-out
    },
  }),
};

export function HeroContent() {
  return (
    <>
      {/* Eyebrow */}
      <motion.div
        className={styles.eyebrow}
        custom={0}
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <span className={styles.eyebrowDot} />
        New Arrival
      </motion.div>

      {/* Headline */}
      <motion.h1
        className={styles.headline}
        custom={1}
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        RICH. AROMATIC.<br />
        <span className={styles.headlineHighlight}>UNFORGETTABLE.</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        className={styles.description}
        custom={2}
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        Experience the perfect balance of bold flavors, smooth aroma, and carefully roasted coffee.
      </motion.p>
    </>
  );
}
