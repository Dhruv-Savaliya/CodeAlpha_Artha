/**
 * Tabs
 * ─────────────────────────────────────────────────────────────────────────────
 * Accessible tabbed navigation.
 *
 * Usage:
 *   <Tabs defaultValue="account">
 *     <TabsList>
 *       <TabsTrigger value="account">Account</TabsTrigger>
 *       <TabsTrigger value="password">Password</TabsTrigger>
 *     </TabsList>
 *     <TabsContent value="account">Account settings...</TabsContent>
 *     <TabsContent value="password">Change password...</TabsContent>
 *   </Tabs>
 * ─────────────────────────────────────────────────────────────────────────────
 */
"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { createContext, useContext, useState } from "react";
import styles from "./Tabs.module.css";

/* ── Context ─────────────────────────────────────────────────────────────── */

interface TabsContextValue {
  value: string;
  onChange: (val: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

/* ── Tabs ────────────────────────────────────────────────────────────────── */

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue: string;
  value?: string;
  onValueChange?: (val: string) => void;
  children: ReactNode;
}

export function Tabs({
  defaultValue,
  value,
  onValueChange,
  children,
  className = "",
  ...props
}: TabsProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  
  const currentValue = isControlled ? value : uncontrolledValue;
  const onChange = (val: string) => {
    if (!isControlled) setUncontrolledValue(val);
    onValueChange?.(val);
  };

  return (
    <TabsContext.Provider value={{ value: currentValue, onChange }}>
      <div
        {...props}
        className={[styles.tabs, className].filter(Boolean).join(" ")}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}

/* ── TabsList ────────────────────────────────────────────────────────────── */

export function TabsList({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      role="tablist"
      aria-orientation="horizontal"
      className={[styles.list, className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
}

/* ── TabsTrigger ─────────────────────────────────────────────────────────── */

export interface TabsTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
  disabled?: boolean;
}

export function TabsTrigger({
  value,
  disabled,
  children,
  className = "",
  ...props
}: TabsTriggerProps) {
  const ctx = useContext(TabsContext);
  const isSelected = ctx?.value === value;

  return (
    <button
      {...props}
      type="button"
      role="tab"
      aria-selected={isSelected}
      aria-controls={`tabpanel-${value}`}
      id={`tab-${value}`}
      disabled={disabled}
      tabIndex={isSelected ? 0 : -1}
      onClick={() => ctx?.onChange(value)}
      className={[
        styles.trigger,
        isSelected ? styles.triggerActive : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
}

/* ── TabsContent ─────────────────────────────────────────────────────────── */

export interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function TabsContent({
  value,
  children,
  className = "",
  ...props
}: TabsContentProps) {
  const ctx = useContext(TabsContext);
  const isSelected = ctx?.value === value;

  if (!isSelected) return null;

  return (
    <div
      {...props}
      role="tabpanel"
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
      tabIndex={0}
      className={[styles.content, className].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  );
}
