"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Drawer, Button, Logo } from "@repo/ui";
import { Search, ShoppingBag } from "lucide-react";
import { NAV_LINKS } from "./navigation";
import styles from "./SiteHeader.module.css";

interface MobileNavigationProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNavigation({ open, onClose }: MobileNavigationProps) {
  const pathname = usePathname();

  return (
    <Drawer
      open={open}
      onClose={onClose}
      side="right"
      title={<Logo showText={true} />}
    >
      <div className={styles.mobileDrawerContent}>
        <nav aria-label="Mobile Navigation">
          <ul className={styles.mobileNavLinks}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={[
                      styles.mobileNavLink,
                      isActive ? styles.activeMobileNavLink : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.mobileUtilities}>
          <Button
            variant="secondary"
            className={styles.mobileUtilityBtn}
            leftIcon={<Search size={18} />}
          >
            Search
          </Button>
          <Button
            variant="secondary"
            className={styles.mobileUtilityBtn}
            leftIcon={<ShoppingBag size={18} />}
          >
            Cart
          </Button>
        </div>
      </div>
    </Drawer>
  );
}
