"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { motion, useScroll, useTransform, useReducedMotion, Variants } from "framer-motion";

export function HeroProduct() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll-driven motion for the product
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Gentle upward float on scroll
  const yScroll = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -100]);
  const scaleScroll = useTransform(scrollYProgress, [0, 1], [1, shouldReduceMotion ? 1 : 1.05]);

  // Entrance animations
  const productVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        delay: 0.8, // Product enters after content
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const brewingVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1.4, duration: 1 },
    },
  };

  return (
    <div className={styles.centerColumn} ref={containerRef}>
      <motion.div
        className={styles.productWrapper}
        initial="hidden"
        animate="visible"
        variants={productVariants}
        style={{ y: yScroll, scale: scaleScroll }}
      >
        <Image
          src="/assets/products/coffee-cup/coffee-cup-front.webp"
          alt="Premium Artha Coffee Cup"
          width={800}
          height={800}
          priority
          className={styles.productImage}
          quality={90}
        />
        
        {/* Brewing Storytelling Element */}
        <motion.div className={styles.brewingTextContainer} variants={brewingVariants}>
          <div className={styles.brewingBar}>
            <div className={styles.brewingProgress} />
          </div>
          <span className={styles.brewingLabel}>Brewing Experience...</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
