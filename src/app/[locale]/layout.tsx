import type { Metadata } from "next";
import { Unbounded, Golos_Text } from "next/font/google";
import "@/app/globals.css";


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
  title: "Piton Design",
  description: "Дизайн студия Piton Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body
        className={`${unbounded.variable} ${golosText.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
