import type { Metadata } from "next";
import { Unbounded, Golos_Text } from "next/font/google";
import "@/app/globals.css";
import { NotFound404 } from "@/components/NotFound404";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const golosText = Golos_Text({
  variable: "--font-golos-text",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "404 — Piton Design",
};

export default function NotFound() {
  return (
    <html lang="ru">
      <body className={`${unbounded.variable} ${golosText.variable} antialiased bg-white`}>
        <NotFound404 />
      </body>
    </html>
  );
}