export interface NavigationItem {
  label: string;
  href: string;
}

export const NAV_LINKS: NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/our-story", label: "Our Story" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export const HEADER_SCROLL_THRESHOLD = 20;
