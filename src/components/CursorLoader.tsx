"use client";

import dynamic from "next/dynamic";

// Импортируем твой курсор динамически с отключенным SSR здесь
const PsychedelicCursor = dynamic(
  () => import("./PsychedelicCursor").then((mod) => mod.PsychedelicCursor),
  { ssr: false }
);

export const CursorLoader = () => {
  return <PsychedelicCursor />;
};