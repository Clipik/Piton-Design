import type { Metadata } from "next";
import { Unbounded, Golos_Text } from "next/font/google";
import "@/app/globals.css";
import { PsychedelicCursor } from "@/components/PsychedelicCursor"; 

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

// Типизация пропсов для Layout
type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // <--- ЭТО, БЛЯТЬ, ПРОМИС
};

// Добавил async
export default async function RootLayout({ children, params }: Props) {
  // Достаем locale через await
  const { locale } = await params;

  return (
    <html lang={locale}>
      {/* Исправил твой ублюдский тег body. ClassName внутри тега! */}
      <body className={`${unbounded.variable} ${golosText.variable} antialiased bg-white`}>
        <PsychedelicCursor />
        {children}
      </body>
    </html>
  );
}