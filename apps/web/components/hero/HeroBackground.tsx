import React from "react";
import styles from "./Hero.module.css";

export function HeroBackground() {
  return (
    <div className={styles.backgroundContainer} aria-hidden="true">
      {/* Radial gradient background */}
      <div className={styles.radialGlow} />
      
      {/* Light beam from the top */}
      <div className={styles.lightBeam} />
      
      {/* Subtle grain texture overlay for cinematic feel */}
      <div className={styles.grainOverlay} />
    </div>
  );
}
