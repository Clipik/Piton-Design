import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Если юзер зашел на корень "/", кидаем его на "/ru"
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/ru", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Не запускаем middleware на служебных файлах
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|videos|lottie|photos).*)"],
};