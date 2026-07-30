/**
 * useMediaQuery
 * ─────────────────────────────────────────────────────────────────────────────
 * Reactively tracks a CSS media query.
 * SSR-safe: returns false on server, correct value after hydration.
 * ─────────────────────────────────────────────────────────────────────────────
 */
"use client";

import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    setMatches(mq.matches);

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

/** Artha breakpoint helpers */
export const breakpoints = {
  xs:  "(min-width: 320px)",
  sm:  "(min-width: 375px)",
  md:  "(min-width: 768px)",
  lg:  "(min-width: 1024px)",
  xl:  "(min-width: 1280px)",
  "2xl": "(min-width: 1440px)",
  "3xl": "(min-width: 1920px)",
} as const;

export type Breakpoint = keyof typeof breakpoints;

export function useBreakpoint(bp: Breakpoint): boolean {
  return useMediaQuery(breakpoints[bp]);
}
