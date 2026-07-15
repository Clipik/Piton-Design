import { notFound } from "next/navigation";

// Ловит любой путь вида /ru/<что-угодно-ещё>, который не совпал ни с одной
// конкретной страницей (blog/[slug], privacy, projects/[slug], terms).
// Мы уже точно внутри (site)/[locale] — значит layout.tsx (html/body) уже
// отрендерился, и notFound() здесь корректно всплывёт до
// (site)/[locale]/not-found.tsx со стилями и шрифтами.
export default function CatchAll() {
  notFound();
}