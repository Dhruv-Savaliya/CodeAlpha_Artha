"use client";

import React from "react";
import styles from "./Hero.module.css";
import { motion, Variants } from "framer-motion";

const actionsVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.75, // Sequence after content
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function HeroActions() {
  return (
    <motion.div
      className={styles.actionsGroup}
      initial="hidden"
      animate="visible"
      variants={actionsVariants}
    >
      <button className={styles.btnPrimary} type="button">
        Shop Now <span>→</span>
      </button>
      
      <button className={styles.btnSecondary} type="button">
        <span className={styles.playIconWrapper}>
          <svg className={styles.playIcon} viewBox="0 0 24 24">
            <path d="M3 22v-20l18 10-18 10z" />
          </svg>
        </span>
        Play Video
      </button>
    </motion.div>
  );
}
