import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { event } from "@/data/agenda";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: { default: "Agenda · TDI Summit 2026", template: "%s · TDI Summit 2026" },
  description: `${event.name} — ${event.edition}, ${event.dateLabel}, ${event.venue}`,
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ro" className={`${inter.variable} antialiased`}>
      <body className="min-h-dvh bg-canvas text-label">{children}</body>
    </html>
  );
}
