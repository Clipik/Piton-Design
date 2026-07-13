// src/app/keystatic/[[...params]]/page.tsx
import KeystaticApp from '../keystatic';

export function generateStaticParams() {
  return [{ params: [] }];
}

interface PageProps {
  params: Promise<{ params?: string[] }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function Page(props: PageProps) {
  await props.params;
  await props.searchParams;

  return <KeystaticApp />;
}