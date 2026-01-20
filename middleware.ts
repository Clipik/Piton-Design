import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ['en', 'ru']; // Твои папки в [locale]
const defaultLocale = 'en'; // Дефолт для неопознанных объектов

// Функция для вычисления локали на основе заголовков
function getLocale(request: NextRequest): string {
  const headers = { 'accept-language': request.headers.get('accept-language') || '' };
  
  // Negotiator парсит приоритеты языков из браузера (en-US, en;q=0.9, ru;q=0.8...)
  const languages = new Negotiator({ headers }).languages();
  
  // Match выбирает лучшее совпадение между тем, что хочет юзер, и тем, что у тебя есть
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Проверяем, есть ли уже локаль в пути (например, /ru/projects)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // Если локаль уже есть, пропускаем запрос дальше, пусть Next.js рендерит
    return NextResponse.next();
  }

  // 2. Если локали нет (юзер зашел на / или /projects без префикса)
  const locale = getLocale(request);
  
  // Формируем новый URL. Было "/" -> стало "/en"
  request.nextUrl.pathname = `/${locale}${pathname}`;

  // Редиректим ублюдка туда, где ему место
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Твой матчер. Я оставил твои исключения для ассетов.
  // Middleware будет игнорировать всё, что тут перечислено.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|videos|lottie|photos).*)"],
};