# Artha — UI/UX Design Specification
### Version 1.0 · July 2026 · Single Source of Truth

> [!IMPORTANT]
> This document governs all frontend development decisions for Project Artha. No UI implementation should deviate from these specifications without an approved ADR update.

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Design Tokens](#2-design-tokens)
3. [Typography System](#3-typography-system)
4. [Spacing System](#4-spacing-system)
5. [Color Palette](#5-color-palette)
6. [Elevation & Shadows](#6-elevation--shadows)
7. [Border Radius](#7-border-radius)
8. [Motion Guidelines](#8-motion-guidelines)
9. [Component Inventory](#9-component-inventory)
10. [Page Inventory](#10-page-inventory)
11. [Layout Rules](#11-layout-rules)
12. [Responsive Strategy](#12-responsive-strategy)
13. [Loading Experience](#13-loading-experience)
14. [Landing Page Spec](#14-landing-page-spec)
15. [Dashboard Spec](#15-dashboard-spec)
16. [Other Page Specs](#16-other-page-specs)
17. [Accessibility Checklist](#17-accessibility-checklist)
18. [Performance Checklist](#18-performance-checklist)
19. [Implementation Roadmap](#19-implementation-roadmap)

---

## 1. Design Philosophy

### Brand Identity

**Artha** (Sanskrit: wealth, purpose, material well-being) is a personal finance platform. The visual identity must embody:

| Principle | Expression |
|---|---|
| **Trust** | Calm colors, consistent structure, zero clutter |
| **Clarity** | Spacious layouts, clear hierarchy, readable numbers |
| **Elegance** | Refined typography, soft depth, intentional whitespace |
| **Premium** | Considered micro-interactions, rich but quiet details |
| **Calm** | Muted palette, no alarming reds, gentle feedback |

### Inspiration References

| Product | What We Borrow |
|---|---|
| **Linear** | Keyboard-first UX, sidebar density, monochrome precision |
| **Mercury** | Financial trust, whitespace mastery, typography hierarchy |
| **Stripe** | Documentation clarity, component polish, gradient subtlety |
| **CRED** | Dark premium aesthetic, card-centric layouts, rewards psychology |
| **Jupiter / Fi Money** | Indian fintech context, mobile-first thinking, goal-oriented UX |
| **Apple** | Restraint, breathing room, font scale authority |

> [!NOTE]
> These are **inspiration** references only. No direct visual copying. Artha must feel original.

---

## 2. Design Tokens

All tokens are defined as CSS custom properties on `:root`. This is the canonical token set. All components reference tokens — never hard-coded values.

### Token Naming Convention

```
--artha-[category]-[variant]-[modifier]
```

Examples: `--artha-color-primary-500`, `--artha-space-4`, `--artha-radius-lg`

---

## 3. Typography System

### Font Stack

**Primary (Display + Body):** `Inter` via Google Fonts
**Monospace (Numbers, Code):** `JetBrains Mono` via Google Fonts
**Fallback:** `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

> **Rationale:** Inter is the gold standard for fintech dashboards — neutral, highly readable at small sizes, and excellent numerical glyph clarity. JetBrains Mono for financial figures provides tabular number rendering.

### Type Scale (8px base, modular scale 1.25)

```css
/* Display — Hero headings, splash screens */
--artha-text-display-2xl: 4.5rem;   /* 72px  / line-height: 1.05 */
--artha-text-display-xl:  3.75rem;  /* 60px  / line-height: 1.1  */
--artha-text-display-lg:  3rem;     /* 48px  / line-height: 1.15 */

/* Heading — Section and card titles */
--artha-text-heading-xl:  2.25rem;  /* 36px  / line-height: 1.2  */
--artha-text-heading-lg:  1.875rem; /* 30px  / line-height: 1.25 */
--artha-text-heading-md:  1.5rem;   /* 24px  / line-height: 1.3  */
--artha-text-heading-sm:  1.25rem;  /* 20px  / line-height: 1.35 */
--artha-text-heading-xs:  1.125rem; /* 18px  / line-height: 1.4  */

/* Body — Content and labels */
--artha-text-body-lg:  1rem;        /* 16px  / line-height: 1.6  */
--artha-text-body-md:  0.9375rem;   /* 15px  / line-height: 1.6  */
--artha-text-body-sm:  0.875rem;    /* 14px  / line-height: 1.5  */
--artha-text-body-xs:  0.8125rem;   /* 13px  / line-height: 1.5  */

/* Label — Form labels, table headers, badges */
--artha-text-label-lg:  0.875rem;   /* 14px  / letter-spacing: 0.02em */
--artha-text-label-md:  0.8125rem;  /* 13px  / letter-spacing: 0.02em */
--artha-text-label-sm:  0.75rem;    /* 12px  / letter-spacing: 0.03em */
--artha-text-label-xs:  0.6875rem;  /* 11px  / letter-spacing: 0.04em UPPERCASE */

/* Numeric — Financial figures, amounts */
--artha-text-numeric-2xl: 3rem;     /* 48px  / font: JetBrains Mono, tabular-nums */
--artha-text-numeric-xl:  2.25rem;  /* 36px  / font: JetBrains Mono, tabular-nums */
--artha-text-numeric-lg:  1.5rem;   /* 24px  / font: JetBrains Mono, tabular-nums */
--artha-text-numeric-md:  1.125rem; /* 18px  / font: JetBrains Mono, tabular-nums */
--artha-text-numeric-sm:  0.9375rem;/* 15px  / font: JetBrains Mono, tabular-nums */
--artha-text-numeric-xs:  0.8125rem;/* 13px  / font: JetBrains Mono, tabular-nums */
```

### Font Weight Scale

```css
--artha-font-weight-regular:   400;
--artha-font-weight-medium:    500;
--artha-font-weight-semibold:  600;
--artha-font-weight-bold:      700;
--artha-font-weight-extrabold: 800;
```

### Typography Rules

| Context | Size | Weight | Font |
|---|---|---|---|
| Page title (H1) | `heading-xl` | `bold` | Inter |
| Section heading (H2) | `heading-lg` | `semibold` | Inter |
| Card title (H3) | `heading-sm` | `semibold` | Inter |
| Body copy | `body-md` | `regular` | Inter |
| Sidebar nav item | `body-sm` | `medium` | Inter |
| Form label | `label-md` | `medium` | Inter |
| Table header | `label-sm` | `semibold` UPPERCASE | Inter |
| Large balance | `numeric-2xl` | `bold` | JetBrains Mono |
| Card amount | `numeric-lg` | `semibold` | JetBrains Mono |
| Transaction amount | `numeric-sm` | `medium` | JetBrains Mono |
| Badge / chip | `label-xs` | `semibold` UPPERCASE | Inter |

---

## 4. Spacing System

An **8px base grid** governs all spacing decisions. Never use arbitrary values.

```css
--artha-space-0:   0px;
--artha-space-px:  1px;
--artha-space-0-5: 2px;
--artha-space-1:   4px;
--artha-space-1-5: 6px;
--artha-space-2:   8px;
--artha-space-2-5: 10px;
--artha-space-3:   12px;
--artha-space-3-5: 14px;
--artha-space-4:   16px;
--artha-space-5:   20px;
--artha-space-6:   24px;
--artha-space-7:   28px;
--artha-space-8:   32px;
--artha-space-9:   36px;
--artha-space-10:  40px;
--artha-space-12:  48px;
--artha-space-14:  56px;
--artha-space-16:  64px;
--artha-space-20:  80px;
--artha-space-24:  96px;
--artha-space-32:  128px;
--artha-space-40:  160px;
--artha-space-48:  192px;
--artha-space-64:  256px;
```

### Spacing Usage Guide

| Context | Token |
|---|---|
| Between icon and label | `space-2` (8px) |
| Card internal padding | `space-6` (24px) |
| Section internal padding | `space-8` (32px) |
| Between cards in a row | `space-4` (16px) or `space-6` (24px) |
| Between page sections | `space-16` (64px) or `space-24` (96px) |
| Sidebar padding | `space-4` (16px) horizontal |
| Dashboard page gutter | `space-8` (32px) |
| Form field gap | `space-4` (16px) |
| Input internal padding | `space-3` vertical / `space-4` horizontal |
| Button padding | `space-2-5` vertical / `space-5` horizontal |

---

## 5. Color Palette

### Design Approach

- **Dark-first**: Design tokens defined for dark mode by default; light mode overrides applied via `[data-theme="light"]` or `@media (prefers-color-scheme: light)`.
- **Semantic naming**: Components reference semantic aliases (`--artha-color-surface`, `--artha-color-text-primary`), not raw palette values.
- **Never use colors directly** in components — always use semantic aliases.

### Raw Palette

```css
/* === NEUTRAL — Zinc-based cool grays === */
--artha-palette-neutral-0:   #ffffff;
--artha-palette-neutral-50:  #fafafa;
--artha-palette-neutral-100: #f4f4f5;
--artha-palette-neutral-150: #ececed;
--artha-palette-neutral-200: #e4e4e7;
--artha-palette-neutral-300: #d1d1d6;
--artha-palette-neutral-400: #a1a1aa;
--artha-palette-neutral-500: #71717a;
--artha-palette-neutral-600: #52525b;
--artha-palette-neutral-700: #3f3f46;
--artha-palette-neutral-750: #323238;
--artha-palette-neutral-800: #27272a;
--artha-palette-neutral-850: #1f1f22;
--artha-palette-neutral-900: #18181b;
--artha-palette-neutral-925: #121215;
--artha-palette-neutral-950: #09090b;
--artha-palette-neutral-1000:#000000;

/* === BRAND — Artha Indigo (trust, premium, Indian fintech) === */
--artha-palette-brand-50:  #eef2ff;
--artha-palette-brand-100: #e0e7ff;
--artha-palette-brand-200: #c7d2fe;
--artha-palette-brand-300: #a5b4fc;
--artha-palette-brand-400: #818cf8;
--artha-palette-brand-500: #6366f1;  /* Primary brand */
--artha-palette-brand-600: #4f46e5;
--artha-palette-brand-700: #4338ca;
--artha-palette-brand-800: #3730a3;
--artha-palette-brand-900: #312e81;
--artha-palette-brand-950: #1e1b4b;

/* === ACCENT — Violet (secondary highlights) === */
--artha-palette-accent-300: #c4b5fd;
--artha-palette-accent-400: #a78bfa;
--artha-palette-accent-500: #8b5cf6;
--artha-palette-accent-600: #7c3aed;

/* === SEMANTIC FUNCTIONAL COLORS === */

/* Success — Wealth growth, positive deltas */
--artha-palette-success-50:  #f0fdf4;
--artha-palette-success-400: #4ade80;
--artha-palette-success-500: #22c55e;
--artha-palette-success-600: #16a34a;
--artha-palette-success-900: #14532d;

/* Warning — Budget alerts, attention needed */
--artha-palette-warning-50:  #fffbeb;
--artha-palette-warning-400: #fbbf24;
--artha-palette-warning-500: #f59e0b;
--artha-palette-warning-600: #d97706;
--artha-palette-warning-900: #78350f;

/* Danger — Overspend, critical alerts */
--artha-palette-danger-50:  #fff1f2;
--artha-palette-danger-400: #fb7185;
--artha-palette-danger-500: #f43f5e;
--artha-palette-danger-600: #e11d48;
--artha-palette-danger-900: #881337;

/* Info — Neutral informational */
--artha-palette-info-400: #60a5fa;
--artha-palette-info-500: #3b82f6;
```

### Semantic Color Aliases — Dark Theme (Default)

```css
[data-theme="dark"], :root {
  /* Backgrounds */
  --artha-color-bg-base:       var(--artha-palette-neutral-950);  /* #09090b */
  --artha-color-bg-subtle:     var(--artha-palette-neutral-925);  /* #121215 */
  --artha-color-bg-inset:      var(--artha-palette-neutral-900);  /* #18181b */

  /* Surfaces (cards, panels, modals) */
  --artha-color-surface-base:  var(--artha-palette-neutral-900);  /* #18181b */
  --artha-color-surface-raised:var(--artha-palette-neutral-850);  /* #1f1f22 */
  --artha-color-surface-overlay:var(--artha-palette-neutral-800); /* #27272a */
  --artha-color-surface-highlight: rgba(255,255,255,0.03);

  /* Borders */
  --artha-color-border-subtle:  rgba(255,255,255,0.06);
  --artha-color-border-default: rgba(255,255,255,0.10);
  --artha-color-border-strong:  rgba(255,255,255,0.18);
  --artha-color-border-focus:   var(--artha-palette-brand-500);

  /* Text */
  --artha-color-text-primary:   var(--artha-palette-neutral-50);   /* #fafafa */
  --artha-color-text-secondary: var(--artha-palette-neutral-400);  /* #a1a1aa */
  --artha-color-text-tertiary:  var(--artha-palette-neutral-500);  /* #71717a */
  --artha-color-text-disabled:  var(--artha-palette-neutral-600);  /* #52525b */
  --artha-color-text-inverse:   var(--artha-palette-neutral-950);

  /* Brand / Interactive */
  --artha-color-brand:          var(--artha-palette-brand-500);    /* #6366f1 */
  --artha-color-brand-hover:    var(--artha-palette-brand-400);    /* #818cf8 */
  --artha-color-brand-subtle:   rgba(99,102,241,0.12);
  --artha-color-brand-glow:     rgba(99,102,241,0.20);

  /* Semantic Status */
  --artha-color-success:        var(--artha-palette-success-500);
  --artha-color-success-subtle: rgba(34,197,94,0.12);
  --artha-color-success-text:   var(--artha-palette-success-400);

  --artha-color-warning:        var(--artha-palette-warning-500);
  --artha-color-warning-subtle: rgba(245,158,11,0.12);
  --artha-color-warning-text:   var(--artha-palette-warning-400);

  --artha-color-danger:         var(--artha-palette-danger-500);
  --artha-color-danger-subtle:  rgba(244,63,94,0.12);
  --artha-color-danger-text:    var(--artha-palette-danger-400);

  --artha-color-info:           var(--artha-palette-info-500);
  --artha-color-info-subtle:    rgba(59,130,246,0.12);
  --artha-color-info-text:      var(--artha-palette-info-400);

  /* Sidebar */
  --artha-color-sidebar-bg:     var(--artha-palette-neutral-950);
  --artha-color-sidebar-border: rgba(255,255,255,0.06);
  --artha-color-sidebar-item-active-bg: rgba(99,102,241,0.14);
  --artha-color-sidebar-item-hover-bg:  rgba(255,255,255,0.04);

  /* Charts */
  --artha-chart-1: #6366f1;   /* Indigo   */
  --artha-chart-2: #8b5cf6;   /* Violet   */
  --artha-chart-3: #22c55e;   /* Green    */
  --artha-chart-4: #f59e0b;   /* Amber    */
  --artha-chart-5: #3b82f6;   /* Blue     */
  --artha-chart-6: #f43f5e;   /* Rose     */
  --artha-chart-7: #06b6d4;   /* Cyan     */
  --artha-chart-8: #a78bfa;   /* Purple   */
}
```

### Semantic Color Aliases — Light Theme

```css
[data-theme="light"], @media (prefers-color-scheme: light) {
  --artha-color-bg-base:       var(--artha-palette-neutral-50);
  --artha-color-bg-subtle:     var(--artha-palette-neutral-100);
  --artha-color-bg-inset:      var(--artha-palette-neutral-150);

  --artha-color-surface-base:  var(--artha-palette-neutral-0);
  --artha-color-surface-raised:var(--artha-palette-neutral-50);
  --artha-color-surface-overlay:var(--artha-palette-neutral-100);
  --artha-color-surface-highlight: rgba(0,0,0,0.02);

  --artha-color-border-subtle:  rgba(0,0,0,0.05);
  --artha-color-border-default: rgba(0,0,0,0.09);
  --artha-color-border-strong:  rgba(0,0,0,0.16);

  --artha-color-text-primary:   var(--artha-palette-neutral-950);
  --artha-color-text-secondary: var(--artha-palette-neutral-500);
  --artha-color-text-tertiary:  var(--artha-palette-neutral-400);
  --artha-color-text-disabled:  var(--artha-palette-neutral-300);
  --artha-color-text-inverse:   var(--artha-palette-neutral-50);

  --artha-color-brand:          var(--artha-palette-brand-600);
  --artha-color-brand-hover:    var(--artha-palette-brand-700);
  --artha-color-brand-subtle:   rgba(79,70,229,0.08);
  --artha-color-brand-glow:     rgba(79,70,229,0.15);

  --artha-color-sidebar-bg:     var(--artha-palette-neutral-50);
  --artha-color-sidebar-border: rgba(0,0,0,0.07);
  --artha-color-sidebar-item-active-bg: rgba(79,70,229,0.10);
  --artha-color-sidebar-item-hover-bg:  rgba(0,0,0,0.04);
}
```

---

## 6. Elevation & Shadows

Depth is expressed through **subtle layered shadows** — never harsh or heavy. Dark mode shadows are nearly invisible; they rely on background color stepping for depth.

```css
/* Flat — no elevation, used for inline elements */
--artha-shadow-none: none;

/* XS — badges, chips, subtle UI chrome */
--artha-shadow-xs:
  0 1px 2px rgba(0,0,0,0.4),
  0 0 0 1px rgba(255,255,255,0.04) inset;

/* SM — cards, inputs (resting state) */
--artha-shadow-sm:
  0 1px 3px rgba(0,0,0,0.5),
  0 1px 2px rgba(0,0,0,0.3);

/* MD — floating elements, dropdowns */
--artha-shadow-md:
  0 4px 8px rgba(0,0,0,0.5),
  0 2px 4px rgba(0,0,0,0.3),
  0 0 0 1px rgba(255,255,255,0.05) inset;

/* LG — modals, drawers, dialogs */
--artha-shadow-lg:
  0 8px 24px rgba(0,0,0,0.6),
  0 4px 8px rgba(0,0,0,0.4),
  0 0 0 1px rgba(255,255,255,0.06) inset;

/* XL — full-screen overlays */
--artha-shadow-xl:
  0 16px 48px rgba(0,0,0,0.7),
  0 8px 16px rgba(0,0,0,0.5);

/* Brand Glow — CTA buttons, active indicators */
--artha-shadow-brand-glow:
  0 0 0 3px rgba(99,102,241,0.25),
  0 4px 16px rgba(99,102,241,0.20);

/* Focus Ring — Keyboard accessibility */
--artha-shadow-focus:
  0 0 0 2px var(--artha-color-bg-base),
  0 0 0 4px var(--artha-color-brand);
```

> [!TIP]
> In dark mode, depth perception relies more on background color stepping (surface-base → surface-raised → surface-overlay) than on shadow intensity. Keep shadows subtle — the background does the heavy lifting.

---

## 7. Border Radius

```css
--artha-radius-none: 0px;
--artha-radius-xs:   2px;   /* Subtle — progress bars, dividers */
--artha-radius-sm:   4px;   /* Small elements — badges, small chips */
--artha-radius-md:   8px;   /* Inputs, small cards */
--artha-radius-lg:   12px;  /* Standard cards, dropdowns */
--artha-radius-xl:   16px;  /* Large cards, panels */
--artha-radius-2xl:  20px;  /* Hero cards, feature sections */
--artha-radius-3xl:  24px;  /* Modal containers */
--artha-radius-full: 9999px; /* Pills, avatars, circular buttons */
```

### Radius Usage

| Element | Radius |
|---|---|
| Buttons | `radius-md` (8px) |
| Input fields | `radius-md` (8px) |
| Standard cards | `radius-lg` (12px) or `radius-xl` (16px) |
| Dashboard summary cards | `radius-xl` (16px) |
| Modal dialog | `radius-3xl` (24px) |
| Avatar | `radius-full` |
| Badge / chip | `radius-full` |
| Sidebar | `radius-none` on the sidebar itself; `radius-lg` on nav items |
| Tooltip | `radius-md` (8px) |
| Progress bar track | `radius-xs` (2px) |
| Progress bar fill | `radius-xs` (2px) |

---

## 8. Motion Guidelines

### Philosophy

> "Motion should feel like breathing — present but never intrusive."

All animations serve a purpose:
- **Confirm** an action was taken
- **Orient** the user within a transition
- **Reveal** information progressively
- **Delight** without distracting

### Timing Functions

```css
/* Ease definitions */
--artha-ease-standard:   cubic-bezier(0.4, 0.0, 0.2, 1);  /* Most UI state changes */
--artha-ease-decelerate: cubic-bezier(0.0, 0.0, 0.2, 1);  /* Elements entering */
--artha-ease-accelerate: cubic-bezier(0.4, 0.0, 1.0, 1);  /* Elements leaving */
--artha-ease-overshoot:  cubic-bezier(0.34, 1.4, 0.64, 1); /* Gentle spring (not bounce!) */
--artha-ease-linear:     linear;
```

### Duration Scale

```css
--artha-duration-instant:  0ms;    /* Immediate feedback */
--artha-duration-fast:     80ms;   /* Focus rings, hover states */
--artha-duration-normal:   150ms;  /* Buttons, inputs, chips */
--artha-duration-moderate: 200ms;  /* Card hovers, state changes */
--artha-duration-slow:     300ms;  /* Sidebar collapse, dropdowns */
--artha-duration-slower:   400ms;  /* Page transitions, modals */
--artha-duration-slowest:  600ms;  /* Loading sequences, reveals */
```

### Animation Catalogue

| Name | Properties | Duration | Easing | Use Case |
|---|---|---|---|---|
| `fade-in` | `opacity: 0→1` | `300ms` | `decelerate` | Page content, modal backdrop |
| `fade-out` | `opacity: 1→0` | `200ms` | `accelerate` | Dismissal |
| `slide-up` | `translateY(12px)→0, opacity 0→1` | `300ms` | `decelerate` | Card reveals, toast entries |
| `slide-down` | `translateY(-8px)→0, opacity 0→1` | `250ms` | `decelerate` | Dropdown menus |
| `scale-in` | `scale(0.96)→1, opacity 0→1` | `200ms` | `overshoot` | Modal open, popover |
| `scale-out` | `scale(1)→0.96, opacity 1→0` | `150ms` | `accelerate` | Modal close |
| `blur-in` | `blur(8px)→0, opacity 0→1` | `400ms` | `decelerate` | Loading reveal, hero |
| `stagger-reveal` | `slide-up` applied per-child with `50ms` delay | — | `decelerate` | List items, card grids |
| `count-up` | Number interpolation, 60fps | `800ms` | `decelerate` | Balance displays, stats |
| `progress-fill` | `width: 0→N%` | `600ms` | `decelerate` | Budget bars, goal progress |
| `sidebar-collapse` | `width: 240px→60px` | `300ms` | `standard` | Sidebar toggle |
| `skeleton-pulse` | `opacity: 0.4→0.7` loop | `1.5s` | `ease-in-out` | Loading skeletons |

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Forbidden Animations

- ❌ Bounce (`cubic-bezier` with overshoot > 1.56)
- ❌ Heavy parallax scrolling
- ❌ Rotation > 45deg in micro-interactions
- ❌ Continuous looping animations on visible UI (only on loading states)
- ❌ Large-scale particle effects
- ❌ Simultaneous multi-axis transforms on multiple elements

---

## 9. Component Inventory

All components live in `packages/ui/src/components/`. Components are categorized by function.

### Tier 1 — Foundation (Must build first)

| Component | Description | Variants |
|---|---|---|
| `Button` | Primary action trigger | `primary`, `secondary`, `ghost`, `destructive`, `link`, `icon` |
| `Input` | Text field | `default`, `error`, `success`, `disabled`, `with-icon`, `with-prefix` |
| `Textarea` | Multiline text | `default`, `error`, `disabled` |
| `Select` | Dropdown select | `default`, `error`, `disabled` |
| `Checkbox` | Boolean input | `default`, `indeterminate`, `disabled` |
| `Radio` | Single selection | `default`, `disabled` |
| `Switch` | Toggle boolean | `default`, `disabled` |
| `Label` | Form label | `default`, `required`, `optional`, `disabled` |
| `FormField` | Label + Input + Error wrapper | — |
| `Badge` | Status chip | `success`, `warning`, `danger`, `info`, `neutral`, `brand` |
| `Avatar` | User image or initials | `xs`, `sm`, `md`, `lg`, `xl` |
| `Separator` | Visual divider | `horizontal`, `vertical` |
| `Skeleton` | Loading placeholder | `text`, `circular`, `rectangular`, `card` |
| `Spinner` | Loading indicator | `sm`, `md`, `lg` |
| `Icon` | SVG icon wrapper | — |

### Tier 2 — Navigation

| Component | Description | Variants |
|---|---|---|
| `Sidebar` | App sidebar navigation | `expanded`, `collapsed`, `mobile-overlay` |
| `SidebarItem` | Individual nav item | `default`, `active`, `disabled`, `with-badge` |
| `SidebarGroup` | Grouped nav section | — |
| `TopNav` | Top navigation bar | `dashboard`, `public`, `minimal` |
| `Breadcrumb` | Page breadcrumb trail | — |
| `Tabs` | Tabbed navigation | `line`, `pill`, `card` |
| `TabPanel` | Tab content panel | — |
| `Pagination` | Page navigation | — |
| `MobileNav` | Bottom nav for mobile | — |
| `CommandMenu` | ⌘K command palette | — |

### Tier 3 — Data Display

| Component | Description | Variants |
|---|---|---|
| `Card` | Content container | `flat`, `elevated`, `bordered`, `interactive` |
| `StatCard` | Metric display card | `simple`, `with-trend`, `with-chart`, `with-icon` |
| `TransactionItem` | Single transaction row | `default`, `pending`, `failed` |
| `TransactionList` | List of transactions | — |
| `Table` | Data table | `default`, `striped`, `compact` |
| `TableHeader` | Table column header | `sortable`, `default` |
| `DataGrid` | Sortable/filterable grid | — |
| `EmptyState` | Zero-data placeholder | — |
| `ProgressBar` | Linear progress | `default`, `success`, `warning`, `danger` |
| `ProgressRing` | Circular progress | `sm`, `md`, `lg` |
| `Chart` | Chart wrapper | — |
| `AreaChart` | Area/line chart | — |
| `BarChart` | Bar chart | `vertical`, `horizontal` |
| `DonutChart` | Donut/pie chart | — |
| `SparkLine` | Inline mini chart | — |
| `TrendIndicator` | Up/down change display | `positive`, `negative`, `neutral` |
| `AmountDisplay` | Formatted currency amount | `income`, `expense`, `neutral` |
| `GoalCard` | Financial goal display | — |
| `BudgetCard` | Budget usage display | — |
| `AccountCard` | Bank account display | — |
| `InsightCard` | AI/analytical insight | — |

### Tier 4 — Overlays & Feedback

| Component | Description | Variants |
|---|---|---|
| `Modal` | Dialog overlay | `sm`, `md`, `lg`, `xl`, `fullscreen` |
| `Sheet` | Slide-in drawer panel | `left`, `right`, `bottom` |
| `Popover` | Anchored content overlay | — |
| `Tooltip` | Hover label | `top`, `right`, `bottom`, `left` |
| `Toast` | Notification toast | `success`, `error`, `warning`, `info`, `loading` |
| `ToastContainer` | Toast stacking manager | — |
| `Alert` | Inline alert banner | `success`, `error`, `warning`, `info` |
| `ConfirmDialog` | Destructive action confirmation | — |
| `CommandMenu` | Global search + actions | — |
| `Notification` | Notification item | `read`, `unread` |

### Tier 5 — Complex / Page-level

| Component | Description |
|---|---|
| `DashboardLayout` | Sidebar + TopNav + Content area layout |
| `AuthLayout` | Centered card layout for auth pages |
| `LandingLayout` | Full-width marketing layout |
| `SplashScreen` | Brand loading sequence |
| `QuickActions` | Floating action cluster |
| `DateRangePicker` | Calendar date range selector |
| `CategoryPicker` | Category selection with icons |
| `AmountInput` | Currency-aware number input |
| `SearchInput` | Expanded search with history |
| `FilterBar` | Multi-criteria filter panel |
| `SortMenu` | Column sort dropdown |
| `BulkActionBar` | Selection-based action bar |
| `OnboardingFlow` | Multi-step onboarding sequence |
| `ThemeToggle` | Dark/light mode switch |

---

## 10. Page Inventory

### Public Routes

| Route | Page | Priority |
|---|---|---|
| `/` | Landing Page | P0 |
| `/login` | Login | P0 |
| `/register` | Register | P0 |
| `/forgot-password` | Forgot Password | P1 |
| `/reset-password` | Reset Password | P1 |

### App Routes (Authenticated)

| Route | Page | Priority |
|---|---|---|
| `/dashboard` | Dashboard (Home) | P0 |
| `/transactions` | Transactions | P0 |
| `/transactions/[id]` | Transaction Detail | P1 |
| `/accounts` | Accounts | P0 |
| `/accounts/[id]` | Account Detail | P1 |
| `/budgets` | Budgets | P0 |
| `/goals` | Goals | P0 |
| `/goals/[id]` | Goal Detail | P1 |
| `/analytics` | Analytics | P1 |
| `/categories` | Categories | P1 |
| `/search` | Search Results | P1 |
| `/notifications` | Notifications | P2 |
| `/profile` | Profile Settings | P1 |
| `/settings` | App Settings | P2 |
| `/settings/appearance` | Appearance | P2 |
| `/settings/security` | Security | P2 |
| `/settings/notifications` | Notification Prefs | P2 |
| `/help` | Help Center | P3 |

### System Routes

| Route | Page |
|---|---|
| `/404` | 404 Not Found |
| `/500` | Server Error |
| `/offline` | Offline State |
| `/maintenance` | Maintenance Mode |

---

## 11. Layout Rules

### Grid System

Use CSS Grid for all macro layouts. Flexbox for component-level layouts.

```css
/* App Shell */
.artha-app-shell {
  display: grid;
  grid-template-columns: [sidebar] 240px [content] 1fr;
  grid-template-rows: 1fr;
  min-height: 100dvh;
  overflow: hidden;
}

/* Collapsed Sidebar Variant */
.artha-app-shell[data-sidebar="collapsed"] {
  grid-template-columns: [sidebar] 64px [content] 1fr;
}

/* Content Area */
.artha-content-area {
  display: grid;
  grid-template-rows: [topnav] 56px [body] 1fr;
  overflow-y: auto;
  overflow-x: hidden;
}

/* Page Body */
.artha-page-body {
  padding: var(--artha-space-8); /* 32px */
  max-width: 1440px;
}

/* Dashboard Card Grid — 3 column */
.artha-card-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--artha-space-6); /* 24px */
}

/* Dashboard Card Grid — 4 column (for stat cards) */
.artha-card-grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--artha-space-4); /* 16px */
}

/* Dashboard Split — Wide chart + Narrow panel */
.artha-split-7-5 {
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: var(--artha-space-6);
}

/* Auth Layout */
.artha-auth-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100dvh;
}

/* Landing Layout */
.artha-landing-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--artha-space-6);
}
```

### Sidebar Specification

```
Width (expanded):  240px
Width (collapsed): 64px
Transition:        width 300ms cubic-bezier(0.4, 0.0, 0.2, 1)

Structure:
├── Logo (top, 56px height)
├── Nav Groups (scrollable)
│   ├── Group label (12px uppercase, secondary text)
│   └── Nav items (40px height each)
├── Spacer (flex-grow: 1)
└── User Profile (bottom, 56px height)

Nav Item Anatomy:
├── Icon (20×20px, 16px left padding)
├── Label (14px, medium weight, 12px left of icon)
└── Badge (optional, 8px right padding)
```

### Top Navigation Specification

```
Height:       56px
Structure:
├── Page title / Breadcrumb (left)
├── Spacer (flex: 1)
├── Search trigger button (center-ish)
├── Notifications bell (right)
├── Theme toggle (right)
└── User avatar (right, 32px)
```

---

## 12. Responsive Strategy

### Breakpoints

```css
/* Mobile-first breakpoint definitions */
--artha-bp-xs:  320px;   /* Small phones */
--artha-bp-sm:  375px;   /* Standard phones */
--artha-bp-md:  768px;   /* Tablets */
--artha-bp-lg:  1024px;  /* Small laptops */
--artha-bp-xl:  1280px;  /* Standard laptops */
--artha-bp-2xl: 1440px;  /* Large desktops */
--artha-bp-3xl: 1920px;  /* Ultra-wide */
```

### Layout Adaptation by Breakpoint

| Breakpoint | Sidebar | Card Grid | Navigation |
|---|---|---|---|
| `< 768px` | Hidden (drawer overlay) | 1 column | Bottom nav bar |
| `768px–1023px` | Collapsed icon-only (64px) | 2 columns | Sidebar collapsed |
| `1024px–1279px` | Expanded (240px) | 2 columns | Sidebar expanded |
| `1280px+` | Expanded (240px) | 3–4 columns | Sidebar expanded |

### Component Responsive Rules

- **StatCards**: 4 col → 2 col → 1 col
- **Charts**: Full width below 1024px; side-by-side above
- **Tables**: Horizontally scrollable on mobile; full on desktop
- **Modals**: Full-screen sheet on mobile; centered dialog on desktop
- **Forms**: Single column on mobile; 2-column on desktop where appropriate

---

## 13. Loading Experience

### Splash Screen Sequence

```
[Phase 1: 0–300ms]
  Background fades in from transparent to --artha-color-bg-base
  
[Phase 2: 100–500ms]
  Logo mark scales from 0.85 to 1.0
  opacity: 0 → 1
  filter: blur(8px) → blur(0px)
  easing: cubic-bezier(0.0, 0.0, 0.2, 1)
  
[Phase 3: 300–700ms]
  Soft glow pulse beneath logo:
    box-shadow: 0 0 0px rgba(99,102,241,0) → 0 0 60px rgba(99,102,241,0.3)
  Then glow recedes: 0 0 60px rgba(99,102,241,0.3) → 0 0 20px rgba(99,102,241,0.1)

[Phase 4: 700–1000ms]
  Wordmark "Artha" slides up from 8px below, fades in
  opacity: 0 → 1, translateY(8px) → translateY(0)
  
[Phase 5: 900–1400ms]
  Tagline (if present) fades in with slight delay
  
[Phase 6: 1400–1800ms]
  App content fades in:
  Splash overlay opacity: 1 → 0
  Content opacity: 0 → 1
  Total duration: ~1.5s
```

### Page Loading Skeletons

- All data-heavy views must show skeleton UI while loading
- Skeletons match the exact layout of the loaded state (no generic spinners on dashboard)
- Skeleton pulse: `opacity 1.5s ease-in-out infinite alternate` between 0.4 and 0.7
- Background: `--artha-color-surface-overlay` for skeleton blocks

---

## 14. Landing Page Spec

### Structure

```
<LandingLayout>
  <Nav />
  <HeroSection />
  <LogoMarquee />        (Trust bar — logos or social proof)
  <DashboardPreview />   (Interactive product demo)
  <FeaturesSection />
  <SecuritySection />
  <TestimonialsSection />
  <CTASection />
  <Footer />
</LandingLayout>
```

### Navigation Bar

```
Height:         64px
Position:       Sticky top-0
Background:     transparent → backdrop-blur(20px) + surface bg (on scroll)
Transition:     background, backdrop-filter 200ms

Content:
  Left:  [Logo] [Nav Links]
  Right: [Login link] [Get Started button (brand)]

Nav links: Dashboard, Features, Security, Pricing (future)
Font: body-sm, medium weight
```

### Hero Section

```
Layout: Centered, text-center
Padding: 120px top, 80px bottom

Content hierarchy:
  1. Eyebrow badge: "Personal Finance, Reimagined" (brand color, pill)
  2. H1: "Your wealth, your clarity." (display-xl, bold, ~60px)
     Gradient: linear-gradient(135deg, neutral-50, brand-300) for dark mode
  3. Subtitle: 1-2 lines, body-lg, secondary color, max-width: 560px
  4. CTA buttons: [Primary: "Start for free"] [Secondary ghost: "See how it works"]
  5. Small trust line: "Free • No credit card • Secure"

Below fold:
  Hero dashboard mockup image/interactive preview
  Floating statistics cards with count-up animation
  Gentle gradient fade into the next section
```

### Dashboard Preview Section

```
Heading: "Everything in one place"
Subtext: Short benefit statement

Display:
  Full-width browser chrome mock-up (rounded top corners)
  Inside: Static or lightly interactive dashboard screenshot
  Glow beneath: brand-colored radial gradient on dark bg
  Floating annotation callouts on key elements
```

### Features Section

```
Layout: Alternating left/right on desktop; stacked on mobile
3 primary features (Phase 1 scope):
  1. Transaction Tracking — icon: receipt, color: brand
  2. Budget Management  — icon: pie-chart, color: success
  3. Goal Setting        — icon: target, color: warning

Each feature:
  Icon in a soft rounded square (brand-subtle bg)
  Heading (heading-sm)
  2-3 line description (body-sm, secondary)
  Link: "Learn more →"
```

### Security Section

```
Background: Slightly different surface color for visual rhythm
Centered layout
Heading: "Bank-level security. Your data stays yours."
3-4 trust pillars:
  - End-to-end encryption
  - Read-only bank connections (future)
  - No selling of data
  - Locally-first (future consideration)
Each with a shield/lock icon
```

### Social Proof / Testimonials

```
Heading: "Loved by people who take their finances seriously"
3 testimonial cards in a row:
  Avatar + Name + Role
  Quote text (body-md, secondary)
  Star rating (optional)
```

### CTA Section

```
Background: brand-glow gradient effect
Centered
Large heading (display-lg)
Subtitle
CTA button (large, white on brand bg)
```

### Footer

```
4-column grid (desktop), stacked (mobile)
Columns: Product, Resources, Company, Legal
Bottom bar: © Artha 2026 | Privacy | Terms | Made with ♥ in India
```

---

## 15. Dashboard Spec

### Layout

```
DashboardLayout
├── Sidebar (240px, fixed)
│   ├── Logo lockup
│   ├── Nav Group: "Overview"
│   │   ├── Dashboard (icon: grid-2x2)
│   │   └── Analytics (icon: bar-chart-3)
│   ├── Nav Group: "Money"
│   │   ├── Accounts (icon: credit-card)
│   │   ├── Transactions (icon: arrow-left-right)
│   │   └── Budgets (icon: pie-chart)
│   ├── Nav Group: "Planning"
│   │   └── Goals (icon: target)
│   ├── (spacer)
│   ├── Search (icon: search)
│   ├── Notifications (icon: bell)
│   └── User profile card (bottom)
├── Content Area
│   ├── TopNav (56px)
│   │   ├── Page title "Good morning, [Name]"
│   │   ├── Date range picker
│   │   ├── Notification bell
│   │   └── Avatar menu
│   └── Page Body (32px padding)
│       ├── Row 1: Stat Cards (4 col)
│       ├── Row 2: Chart (7fr) + Quick summary (5fr)
│       ├── Row 3: Recent Transactions (7fr) + Goals (5fr)
│       └── Row 4: Budget overview (full width or 2 col)
```

### Stat Cards (Row 1)

4 cards, equal width:

| Card | Metric | Icon | Color |
|---|---|---|---|
| Total Balance | Sum of all accounts | wallet | brand |
| Monthly Income | This month's income | trending-up | success |
| Monthly Expenses | This month's spending | trending-down | danger |
| Net Savings | Income − Expenses | piggy-bank | info |

Each stat card:
- Title (label-sm, secondary)
- Amount (numeric-xl, bold)
- Trend indicator (vs. last month, TrendIndicator component)
- Spark line (optional, subtle)
- Icon (24px, in soft rounded square)

### Charts (Row 2)

**Left (7fr): Cash Flow Area Chart**
- X-axis: Last 6 months (abbreviated month names)
- Two area series: Income (success), Expenses (danger)
- Semi-transparent fills, solid stroke
- Tooltip: Shows exact values on hover
- Height: 280px

**Right (5fr): Spending Breakdown Donut**
- Category breakdown for current month
- Donut with center total
- Legend below: Category + amount + percentage
- Max 6 categories + "Other"

### Transactions (Row 3 Left)

- Section header: "Recent Transactions" + "View all →" link
- 5–7 most recent transactions
- Each row: `TransactionItem`
  - Category icon (24px in soft square)
  - Description (body-sm, primary)
  - Category name (label-xs, secondary)
  - Date (label-xs, tertiary)
  - Amount (numeric-sm, colored: positive/negative)
- "Load more" or pagination at bottom

### Goals Panel (Row 3 Right)

- Section header: "Goals" + "Add goal →" button
- 2–3 goal cards
  - Goal name + icon
  - Progress bar (ProgressBar component)
  - "₹X of ₹Y" label
  - "X% complete" and target date

### Budgets (Row 4)

- 3 or 4 budget cards in a row
- Each: Category + icon, used/limit bar, amount display
- Status: on-track (success), approaching (warning), exceeded (danger)

### Quick Actions (FAB or floating panel)

Four primary actions accessible from any page:
1. ➕ Add Transaction
2. 💳 Add Account
3. 🎯 New Goal
4. 📊 View Report

---

## 16. Other Page Specs

### Authentication Pages (Login / Register)

```
Layout: 2-column on desktop
  Left column (40%): Brand panel
    Dark surface background
    Artha logo + tagline
    Floating UI preview or illustration
    Testimonial quote at bottom
  Right column (60%): Form panel
    Centered form card (max-width: 440px)
    
Login form:
  Heading: "Welcome back"
  Subtext: "Sign in to your account"
  Email field
  Password field (with show/hide toggle)
  "Forgot password?" link (right-aligned)
  Sign in button (full width, brand)
  Separator: "or"
  Google SSO button (future)
  Footer: "Don't have an account? Register"

Register form:
  Heading: "Create your account"
  Full name field
  Email field
  Password field (with strength indicator)
  Confirm password field
  Terms checkbox
  Create account button
  Footer: "Already have an account? Login"
```

### Forgot Password

```
Centered card layout (no split)
Max-width: 420px
Step 1: Enter email → send reset link
Step 2: Check email (animated envelope icon)
Step 3: New password form (on reset link click)
```

### Transactions Page

```
Header:
  Title: "Transactions"
  Actions: [Search] [Filter] [Add Transaction] [Export]

Filter Bar (collapsible):
  Date range picker
  Category multi-select
  Account multi-select
  Amount range
  Type: Income / Expense / Transfer

Table or grouped list:
  Group by date (day headers)
  TransactionItem per row
  Bulk select checkboxes (on hover)
  BulkActionBar (on selection): [Delete] [Categorize] [Export]

Pagination: Load more or numeric pages
Empty state: Illustration + "No transactions yet" + "Add your first"
```

### Accounts Page

```
Summary bar: Total across all accounts
Account cards grid (2 or 3 col):
  AccountCard:
    Bank logo placeholder (colored initial avatar)
    Account name
    Account type (Savings, Checking, Credit)
    Balance (numeric-lg, colored)
    Last synced (tertiary text)
    Quick action: View transactions
"Add Account" card (dashed border, plus icon)
```

### Goals Page

```
Header: "Goals" + "New Goal" button
Progress overview bar (total saved vs total target)
Goal cards in grid:
  GoalCard:
    Goal name + emoji/icon
    Target amount
    Current amount
    Progress ring (visual %)
    Target date + countdown
    "Add money" quick action
Empty state: Rocket/target illustration
```

### Budgets Page

```
Month selector (prev/next arrows + month name)
Overview ring: Total spent vs total budgeted
Category budgets list:
  BudgetCard for each:
    Category icon + name
    Progress bar (color-coded by status)
    "₹X spent of ₹Y"
    Percentage and days remaining
"Add Budget" button (end of list)
```

### Analytics Page

```
Date range selector (month, quarter, year, custom)

Section 1: Income vs Expenses bar chart (monthly)
Section 2: Spending categories donut (full period)
Section 3: Spending trend line (daily/weekly)
Section 4: Top merchants / payees list
Section 5: Month-over-month comparison table
Section 6: Net worth trend (future, when accounts are connected)
```

### Profile / Settings Page

```
Sidebar navigation within settings:
  Profile
  Appearance
  Security
  Notifications
  Connected Accounts (future)
  Danger Zone

Profile:
  Avatar upload
  Name, email fields
  Save button

Appearance:
  Theme toggle (Dark / Light / System)
  Language selector (future)
  Currency preference
  Date format preference

Security:
  Change password form
  Active sessions list (future)
  2FA setup (future)

Notifications:
  Toggle grid for email/push notifications
```

### Empty States

| Context | Heading | Sub | CTA |
|---|---|---|---|
| No transactions | "Your story starts here" | "Add your first transaction to begin tracking" | "Add Transaction" |
| No accounts | "Connect your first account" | "Add your bank accounts to see everything in one place" | "Add Account" |
| No goals | "Dream it, plan it, achieve it" | "Create your first financial goal" | "New Goal" |
| No budgets | "Stay in control" | "Set up budgets to track your spending limits" | "Create Budget" |
| Search empty | "Nothing found for '[query]'" | "Try different keywords or filters" | "Clear filters" |

### Error Pages

**404:**
```
Centered layout
Large "404" in brand gradient (display-2xl)
Heading: "Page not found"
Sub: "This page doesn't exist or was moved"
Button: "Go home"
```

**500:**
```
Heading: "Something went wrong"
Sub: "We've been notified and are working on it"
Button: "Try again" + "Go home"
Incident ID shown (for support)
```

---

## 17. Accessibility Checklist

### WCAG AA Compliance

- [ ] **Color contrast**: All text meets 4.5:1 (body), 3:1 (large text/UI) ratio
  - Primary text on surface-base: verified ✓
  - Secondary text on surface-base: verified ✓
  - Brand interactive on surface-base: must verify per theme
- [ ] **Focus visible**: All interactive elements have `:focus-visible` styles using `--artha-shadow-focus`
- [ ] **Keyboard navigation**: All interactive elements reachable via Tab key
- [ ] **Logical tab order**: DOM order matches visual order; no tab traps
- [ ] **Skip to content**: `#main-content` skip link as first focusable element
- [ ] **ARIA landmarks**: `<nav>`, `<main>`, `<aside>`, `<header>`, `<footer>` used correctly
- [ ] **Button semantics**: `<button>` used for actions, `<a>` for navigation only
- [ ] **Form labels**: Every `<input>` associated with `<label>` via `htmlFor`
- [ ] **Error messages**: Form errors announced via `aria-describedby` + `aria-invalid`
- [ ] **Icons**: Decorative icons use `aria-hidden="true"`; meaningful icons use `aria-label`
- [ ] **Images**: All `<img>` tags have descriptive `alt` attributes
- [ ] **Chart accessibility**: Charts have text alternatives (table or aria-description)
- [ ] **Reduced motion**: All animations respect `prefers-reduced-motion`
- [ ] **Screen reader**: Component tested with NVDA (Windows) and VoiceOver (Mac)
- [ ] **Touch targets**: Minimum 44×44px touch target on all interactive elements (mobile)
- [ ] **Zoom support**: UI functional up to 200% browser zoom
- [ ] **Color independence**: No information conveyed by color alone (always paired with icon/text)
- [ ] **Status announcements**: Toast notifications use `role="status"` or `aria-live="polite"`

---

## 18. Performance Checklist

### Target: Lighthouse ≥ 95 on all core metrics

| Metric | Target |
|---|---|
| Performance | ≥ 95 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 95 |
| SEO | ≥ 90 |
| LCP (Largest Contentful Paint) | < 2.5s |
| CLS (Cumulative Layout Shift) | < 0.1 |
| INP (Interaction to Next Paint) | < 200ms |

### Font Performance

- [ ] Use `next/font` for Google Fonts (zero layout shift, self-hosted)
- [ ] Load only required font weights (400, 500, 600, 700)
- [ ] `font-display: swap` for all fonts
- [ ] Subset fonts to required character sets (Latin + Devanagari if needed)

### Image Performance

- [ ] Use `next/image` with automatic WebP/AVIF conversion
- [ ] Set explicit `width` and `height` on all images
- [ ] Use `loading="lazy"` for below-fold images
- [ ] Use `priority` prop only for above-fold hero images
- [ ] Implement blur placeholder for images

### JavaScript Performance

- [ ] Enable Next.js App Router with Server Components by default
- [ ] `"use client"` only where necessary (interactive components)
- [ ] Dynamic import (`next/dynamic`) for:
  - Chart libraries
  - Heavy modal content
  - Command menu
  - Date picker
- [ ] No unnecessary global state; colocate state with components
- [ ] Avoid re-renders: `memo`, `useCallback`, `useMemo` where profiling shows benefit

### CSS Performance

- [ ] CSS custom properties for theming (no runtime CSS-in-JS cost)
- [ ] Avoid large CSS files — scope styles to components
- [ ] Critical CSS inlined via Next.js (automatic)
- [ ] No `@import` in CSS (bundle via Next.js instead)

### Network Performance

- [ ] Route-level code splitting (automatic with App Router)
- [ ] Prefetch critical routes on hover/visibility
- [ ] API responses cached appropriately (React Query / SWR)
- [ ] Implement stale-while-revalidate patterns
- [ ] Skeleton UI for all async data (eliminate layout shift)

### Animation Performance

- [ ] All animations on GPU-composited properties only: `transform`, `opacity`, `filter`
- [ ] No animations on `width`, `height`, `top`, `left`, `margin`, `padding`
- [ ] Use `will-change: transform` only when animation is imminent (remove after)
- [ ] Target 60 FPS — keep JavaScript animation loops out of the critical path
- [ ] Use CSS animations over JavaScript where possible

---

## 19. Implementation Roadmap

This roadmap aligns with `docs/05_Development_Roadmap.md` Phase 6 (Shared UI & Design System) and Phase 5 (Frontend Application).

### Sprint 1 — Design System Foundation (Phase 6)

**Goal**: Token infrastructure + Tier 1 components ready

| Task | Deliverable |
|---|---|
| 1.1 | CSS variables file with all design tokens |
| 1.2 | `globals.css` replacement with Artha design system base |
| 1.3 | Typography classes (utility-style, scoped) |
| 1.4 | `Button` component (all variants) |
| 1.5 | `Input`, `Textarea`, `Select`, `Checkbox`, `Switch` components |
| 1.6 | `FormField`, `Label` wrappers |
| 1.7 | `Badge`, `Avatar`, `Separator`, `Icon` |
| 1.8 | `Skeleton`, `Spinner` loading states |
| 1.9 | `Toast` + `ToastContainer` |
| 1.10 | `Alert` component |
| 1.11 | Dark/light theme toggle mechanism |
| 1.12 | `SplashScreen` loading component |

**Verification**: Storybook or basic demo page shows all components in both themes.

---

### Sprint 2 — Navigation & Layout (Phase 5/6)

**Goal**: App shell fully functional

| Task | Deliverable |
|---|---|
| 2.1 | `Sidebar` + `SidebarItem` + `SidebarGroup` |
| 2.2 | `TopNav` component |
| 2.3 | `DashboardLayout` wrapper |
| 2.4 | `AuthLayout` wrapper |
| 2.5 | `LandingLayout` wrapper |
| 2.6 | Mobile nav (`MobileNav`, sidebar drawer) |
| 2.7 | `Tabs` + `TabPanel` components |
| 2.8 | `Breadcrumb` component |
| 2.9 | Responsive grid system (CSS only) |
| 2.10 | `CommandMenu` (⌘K) — basic structure |

---

### Sprint 3 — Landing Page (Phase 5)

**Goal**: Public-facing site live and polished

| Task | Deliverable |
|---|---|
| 3.1 | Landing navigation bar (sticky, scroll-aware) |
| 3.2 | Hero section with animated headline |
| 3.3 | Product preview screenshot/mockup |
| 3.4 | Features section (3 features) |
| 3.5 | Security section |
| 3.6 | Testimonials section (placeholder content) |
| 3.7 | CTA section with brand gradient |
| 3.8 | Footer |
| 3.9 | Mobile responsive pass |
| 3.10 | SEO: metadata, OG tags, semantic HTML |

---

### Sprint 4 — Auth Pages (Phase 3)

**Goal**: Login, Register, Forgot Password pages pixel-perfect

| Task | Deliverable |
|---|---|
| 4.1 | Login page (2-column layout) |
| 4.2 | Register page with password strength |
| 4.3 | Forgot Password flow (3-step) |
| 4.4 | Form validation feedback |
| 4.5 | Error state displays |
| 4.6 | Accessibility pass (labels, ARIA) |

---

### Sprint 5 — Dashboard (Phase 5)

**Goal**: Dashboard fully rendered (static/mock data)

| Task | Deliverable |
|---|---|
| 5.1 | `StatCard` component (4 variants) |
| 5.2 | `TrendIndicator` + `AmountDisplay` |
| 5.3 | Cash Flow area chart (recharts or similar) |
| 5.4 | Spending breakdown donut chart |
| 5.5 | `TransactionItem` + `TransactionList` |
| 5.6 | `GoalCard` + Goals panel |
| 5.7 | `BudgetCard` + Budget overview |
| 5.8 | Dashboard page assembly |
| 5.9 | Count-up animation for stat numbers |
| 5.10 | Skeleton loaders for all dashboard sections |

---

### Sprint 6 — Core Pages (Phase 5)

**Goal**: Transactions, Accounts, Budgets, Goals pages

| Task | Deliverable |
|---|---|
| 6.1 | Transactions page (table + group-by-date) |
| 6.2 | Filter bar + date range picker |
| 6.3 | Transaction detail page |
| 6.4 | Accounts page + AccountCard |
| 6.5 | Goals page + GoalCard |
| 6.6 | Budgets page + BudgetCard |
| 6.7 | `EmptyState` for all pages |
| 6.8 | Add Transaction modal/sheet |

---

### Sprint 7 — Analytics & Settings (Phase 7)

| Task | Deliverable |
|---|---|
| 7.1 | Analytics page (charts + tables) |
| 7.2 | Categories page |
| 7.3 | Profile page |
| 7.4 | Settings pages (appearance, security, notifications) |
| 7.5 | `CommandMenu` full implementation |
| 7.6 | Search results page |
| 7.7 | Notifications page |

---

### Sprint 8 — Polish & Accessibility (Phase 8)

| Task | Deliverable |
|---|---|
| 8.1 | WCAG AA audit and remediation |
| 8.2 | Lighthouse performance audit and optimization |
| 8.3 | Reduced motion pass |
| 8.4 | 404, 500, Offline pages |
| 8.5 | Full responsive QA (mobile, tablet, desktop) |
| 8.6 | Cross-browser testing (Chrome, Firefox, Safari) |
| 8.7 | Animation timing refinement |

---

## Appendix A — CSS Custom Property Full Reference

See the token tables in sections 3–7 above. All tokens are to be placed in `apps/web/app/globals.css` or extracted to `packages/ui/src/tokens.css` for sharing.

## Appendix B — Icon Library

Use **Lucide Icons** (`lucide-react`). Consistent 24×24 stroke icons. Stroke width: 1.5px.

Key icons:
| Context | Icon |
|---|---|
| Dashboard | `LayoutDashboard` |
| Transactions | `ArrowLeftRight` |
| Accounts | `CreditCard` |
| Budgets | `PieChart` |
| Goals | `Target` |
| Analytics | `BarChart3` |
| Settings | `Settings` |
| Notifications | `Bell` |
| Search | `Search` |
| Profile | `User` |
| Income | `TrendingUp` |
| Expense | `TrendingDown` |
| Balance | `Wallet` |
| Add | `Plus` |
| Menu | `Menu` |
| Close | `X` |
| Chevron | `ChevronRight`, `ChevronDown` |
| Check | `Check`, `CheckCircle2` |
| Alert | `AlertTriangle` |
| Info | `Info` |
| Lock | `Lock`, `Shield` |
| Logout | `LogOut` |

## Appendix C — Currency Formatting

All monetary values displayed using:
- Currency: Indian Rupee (₹) by default, user-configurable
- Format: `₹1,23,456.78` (Indian numbering system)
- Font: `JetBrains Mono`, `tabular-nums`
- Positive delta: success color, `+` prefix
- Negative delta: danger color, `-` prefix (no parentheses)

## Appendix D — ADR Reference

This specification should trigger a new ADR entry in `docs/06_Architecture_Decisions.md`:

```
ADR-007: UI/UX Design Specification Established
Status: Accepted
Date: 2026-07-29
Context: Need a single source of truth for all frontend visual decisions
Decision: Comprehensive design spec created in docs/07_Design_Spec.md
          Governs: tokens, components, pages, motion, accessibility, performance
Consequences:
  - All frontend tickets must reference this document
  - Component API should match the component inventory
  - Token names are canonical and stable
```

---

*Artha Design Specification v1.0 — Authored July 2026*
*This document is the single source of truth for all UI/UX decisions.*
*Update via approved tickets only.*
