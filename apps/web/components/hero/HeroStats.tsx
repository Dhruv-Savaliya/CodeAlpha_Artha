"use client";

import React from "react";
import styles from "./Hero.module.css";
import { motion, Variants } from "framer-motion";

const statsVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.2 + i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const scrollVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 2, duration: 1 },
  },
};

export function HeroStats() {
  const stats = [
    {
      value: "20+",
      label: "Premium Blends",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
        </svg>
      ),
    },
    {
      value: "15K+",
      label: "Happy Customers",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
    },
    {
      value: "4.9★",
      label: "Customer Rating",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ),
    }
  ];

  return (
    <div className={styles.rightColumn}>
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className={styles.statCard}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={statsVariants}
        >
          <div className={styles.statIcon}>{stat.icon}</div>
          <div>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        </motion.div>
      ))}

      <motion.div
        className={styles.scrollIndicatorContainer}
        initial="hidden"
        animate="visible"
        variants={scrollVariants}
      >
        <span className={styles.scrollText}>SCROLL</span>
        <div className={styles.scrollLine}>
          <div className={styles.scrollDot} />
        </div>
      </motion.div>
    </div>
  );
}
