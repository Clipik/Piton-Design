import { NotFound404 } from "@/components/NotFound404";

// Этот layout больше НЕ рендерит html/body — их уже отдал родительский
// src/app/(site)/layout.tsx. Здесь только проверка локали.

const locales = ["ru", "en"];

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "en" }];
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const isValidLocale = locales.includes(locale);

  return isValidLocale ? <>{children}</> : <NotFound404 />;
}