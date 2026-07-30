/**
 * Icon
 * ─────────────────────────────────────────────────────────────────────────────
 * Central export for Lucide React icons.
 * This file acts as a wrapper so that we can swap icon libraries easily later
 * without breaking all component imports.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import {
  AlertTriangle,
  ArrowLeftRight,
  BarChart3,
  Bell,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CreditCard,
  Info,
  LayoutDashboard,
  Lock,
  LogOut,
  Menu,
  PieChart,
  Plus,
  Search,
  Settings,
  Shield,
  Target,
  TrendingDown,
  TrendingUp,
  User,
  Wallet,
  X,
} from "lucide-react";

export const Icons = {
  AlertTriangle,
  ArrowLeftRight,
  BarChart3,
  Bell,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CreditCard,
  Info,
  LayoutDashboard,
  Lock,
  LogOut,
  Menu,
  PieChart,
  Plus,
  Search,
  Settings,
  Shield,
  Target,
  TrendingDown,
  TrendingUp,
  User,
  Wallet,
  X,
};

export type IconName = keyof typeof Icons;
