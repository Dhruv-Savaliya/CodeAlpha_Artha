/**
 * Homepage — TASK-009: Structural Composition
 * ─────────────────────────────────────────────────────────────────────────────
 * Renders the Artha homepage section sequence.
 * Each section is a standalone server component replaceable by a future ticket.
 *
 * Server Component — no "use client".
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { Metadata } from "next";
import { HomePage } from "../components/home/HomePage";

export const metadata: Metadata = {
  title: "Artha | Specialty Coffee, Roasted to Order",
  description:
    "Premium specialty coffee sourced directly from single-origin farms in Ethiopia, Colombia, and India. Roasted fresh and delivered to your door.",
};

export default function Home() {
  return <HomePage />;
}
