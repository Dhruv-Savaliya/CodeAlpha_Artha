"use client";

import React, { useRef } from "react";
import styles from "./Hero.module.css";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";
import { HeroProduct } from "./HeroProduct";
import { HeroStats } from "./HeroStats";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll-driven fading for the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacityScroll = useTransform(scrollYProgress, [0, 0.8], [1, shouldReduceMotion ? 1 : 0]);

  return (
    <motion.section
      className={styles.heroSection}
      aria-label="Cinematic Hero — Artha Coffee"
      ref={containerRef}
      style={{ opacity: opacityScroll }}
    >
      <HeroBackground />
      
      <div className={styles.contentContainer}>
        <div className={styles.leftColumn}>
          <HeroContent />
          <HeroActions />
        </div>
        <HeroProduct />
        <HeroStats />
      </div>
    </motion.section>
  );
}
