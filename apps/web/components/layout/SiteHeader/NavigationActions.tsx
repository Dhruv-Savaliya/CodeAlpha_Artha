"use client";

import { Button, Icons } from "@repo/ui";
import { Search, ShoppingBag } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./SiteHeader.module.css";

interface NavigationActionsProps {
  onMobileMenuOpen: () => void;
}

export function NavigationActions({ onMobileMenuOpen }: NavigationActionsProps) {
  return (
    <div className={styles.utilities}>
      <div className={styles.desktopUtilities}>
        <Button
          variant="ghost"
          size="sm"
          aria-label="Search"
          className={styles.iconButton}
        >
          <Search size={20} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          aria-label="Cart"
          className={styles.iconButton}
        >
          <ShoppingBag size={20} />
        </Button>
      </div>
      
      <ThemeToggle />
      
      {/* Mobile Menu Trigger */}
      <Button
        variant="ghost"
        size="sm"
        aria-label="Open menu"
        className={styles.mobileMenuBtn}
        onClick={onMobileMenuOpen}
      >
        <Icons.Menu size={24} />
      </Button>
    </div>
  );
}
