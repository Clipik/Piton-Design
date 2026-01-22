import type { Metadata } from "next";
import { Unbounded, Golos_Text } from "next/font/google";
import "@/app/globals.css";
import { PsychedelicCursor } from "@/components/PsychedelicCursor"; 
import { CursorLoader } from "@/components/CursorLoader"; 

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

// Эта херня скажет Нексту создать папки /ru и /en при сборке.
export function generateStaticParams() {
  return [
    { locale: 'ru' },
    { locale: 'en' },
  ];
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${unbounded.variable} ${golosText.variable} antialiased bg-white`}>
        {/* Вставляем обертку. Она загрузит курсор только в браузере. */}
        <CursorLoader />
        {children}
      </body>
    </html>
  );
}