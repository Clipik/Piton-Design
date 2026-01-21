// src/app/page.tsx

import { redirect } from "next/navigation";

export default function RootPage() {
  // На статике мы не знаем язык пользователя.
  // Поэтому тупо швыряем всех на русский (или английский).
  redirect("/ru");
}