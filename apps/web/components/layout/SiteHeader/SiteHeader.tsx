"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo, Container } from "@repo/ui";

import { NavigationLinks } from "./NavigationLinks";
import { NavigationActions } from "./NavigationActions";
import { MobileNavigation } from "./MobileNavigation";
import { HEADER_SCROLL_THRESHOLD } from "./navigation";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Optimized scroll handler using requestAnimationFrame
  const handleScroll = useCallback(() => {
    let ticking = false;

    return () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > HEADER_SCROLL_THRESHOLD);
          ticking = false;
        });
        ticking = true;
      }
    };
  }, []);

  useEffect(() => {
    const onScroll = handleScroll();
    
    // Initial check
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={[styles.header, scrolled ? styles.scrolled : styles.top]
          .filter(Boolean)
          .join(" ")}
      >
        <Container size="xl" className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logoLink} aria-label="Artha Home">
            <Logo showText={false} />
            <span className={styles.logoText}>Artha</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationLinks />

          {/* Utilities */}
          <NavigationActions onMobileMenuOpen={() => setMobileMenuOpen(true)} />
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileNavigation
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
