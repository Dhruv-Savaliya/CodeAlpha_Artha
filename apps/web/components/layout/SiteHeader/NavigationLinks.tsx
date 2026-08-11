"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "./navigation";
import styles from "./SiteHeader.module.css";

export function NavigationLinks() {
  const pathname = usePathname();

  return (
    <nav className={styles.desktopNav} aria-label="Main Navigation">
      <ul className={styles.navLinks}>
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={[styles.navLink, isActive ? styles.activeNavLink : ""]
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
  );
}
