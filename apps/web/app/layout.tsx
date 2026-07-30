import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@repo/ui";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--artha-font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--artha-font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Artha | Personal Finance Reimagined",
  description: "A thoughtful system for tracking money, setting goals, and making informed financial decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
