// src/app/keystatic/[[...params]]/page.tsx
import KeystaticApp from '../keystatic';

export function generateStaticParams() {
  return [{ params: [] }];
}

interface PageProps {
  params: Promise<{ params?: string[] }>;
}

export default async function Page(props: PageProps) {
  await props.params;
  return <KeystaticApp />;
}