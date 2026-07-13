// src/app/keystatic/layout.tsx
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        {children} {/* Здесь должен рендериться только children */}
      </body>
    </html>
  );
}