/**
 * Accordion
 * ─────────────────────────────────────────────────────────────────────────────
 * Expandable vertical panels.
 *
 * Usage:
 *   <Accordion>
 *     <AccordionItem value="1" title="What is this?">
 *       Content goes here...
 *     </AccordionItem>
 *     <AccordionItem value="2" title="How does it work?">
 *       More content...
 *     </AccordionItem>
 *   </Accordion>
 * ─────────────────────────────────────────────────────────────────────────────
 */
"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { createContext, useContext, useState } from "react";
import { Icons } from "../Icon";
import styles from "./Accordion.module.css";

/* ── Context ─────────────────────────────────────────────────────────────── */

interface AccordionContextValue {
  expanded: string[];
  toggle: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

/* ── Accordion ───────────────────────────────────────────────────────────── */

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  multiple?: boolean;
  children: ReactNode;
}

export function Accordion({
  multiple = false,
  children,
  className = "",
  ...props
}: AccordionProps) {
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggle = (value: string) => {
    setExpanded((prev) => {
      const isExpanded = prev.includes(value);
      if (multiple) {
        return isExpanded ? prev.filter((v) => v !== value) : [...prev, value];
      }
      return isExpanded ? [] : [value];
    });
  };

  return (
    <AccordionContext.Provider value={{ expanded, toggle }}>
      <div
        {...props}
        className={[styles.accordion, className].filter(Boolean).join(" ")}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

/* ── AccordionItem ───────────────────────────────────────────────────────── */

export interface AccordionItemProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  value: string;
  title: ReactNode;
}

export function AccordionItem({
  value,
  title,
  children,
  className = "",
  ...props
}: AccordionItemProps) {
  const ctx = useContext(AccordionContext);
  const isExpanded = ctx?.expanded.includes(value) ?? false;
  const headerId = `accordion-header-${value}`;
  const contentId = `accordion-content-${value}`;

  return (
    <div
      {...props}
      className={[
        styles.item,
        isExpanded ? styles.expanded : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <h3>
        <button
          type="button"
          id={headerId}
          aria-expanded={isExpanded}
          aria-controls={contentId}
          className={styles.trigger}
          onClick={() => ctx?.toggle(value)}
        >
          <span className={styles.title}>{title}</span>
          <span className={styles.iconWrapper} aria-hidden="true">
            <Icons.ChevronDown size={16} />
          </span>
        </button>
      </h3>
      <div
        id={contentId}
        role="region"
        aria-labelledby={headerId}
        className={styles.contentWrapper}
        hidden={!isExpanded}
      >
        <div className={styles.contentInner}>
          {children}
        </div>
      </div>
    </div>
  );
}
