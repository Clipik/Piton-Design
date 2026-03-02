// src/app/page.tsx

"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();
  
  useEffect(() => {
    const saved = localStorage.getItem("locale");
    const browser = navigator.language.startsWith("ru") ? "ru" : "en";
    router.replace(`/${saved || browser}`);
  }, [router]);

  return null;
}