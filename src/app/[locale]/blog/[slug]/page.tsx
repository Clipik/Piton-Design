import { getBlogPostBySlug, getBlogPosts } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import CtaButton from "@/components/CtaButton";
import BadgeWithTooltip from "@/components/BadgeWithTooltip";

type Props = {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
};

export async function generateStaticParams() {
  const locales = ['ru', 'en'];
  return locales.flatMap((locale) => {
    const posts = getBlogPosts(locale);
    return posts.map((post) => ({ locale, slug: post.slug }));
  });
}

const fixOrphans = (text: string) => {
  if (!text) return text;
  return text.replace(/(\s|^)([а-яА-ЯёЁa-zA-Z]{1,3})\s/g, '$1$2\u00A0');
};

export default async function BlogPostPage({ params }: Props) {
  const { slug, locale } = await params;
  const post = getBlogPostBySlug(slug, locale);

  if (!post) notFound();

  const ui = {
    back: locale === 'ru' ? 'Все статьи' : 'All posts',
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar locale={locale} />

      <main className="w-full max-w-[1200px] mx-auto px-4 py-12 md:py-16">

        <div className="w-full flex justify-start mt-14 mb-6">
          <Link
            href={`/${locale}/#blog`}
            className="inline-flex items-center text-[#666666] hover:text-[#FF0033] transition-colors font-['Golos_Text'] font-medium"
          >
            <span className="mr-2">&lt;</span> {ui.back}
          </Link>
        </div>

        <div className="flex flex-col gap-16 w-full items-center">
          {post.sections.map((section: any, index: number) => {
            switch (section.type) {

              case "hero":
                return (
                  <div key={index} className="flex flex-col items-start gap-8 w-full">
                    <div className="flex flex-col gap-6 w-full">
                      <h1 className="text-[2rem] md:text-[3rem] font-['Unbounded'] font-semibold text-[#222222] leading-[1.1]">
                        {fixOrphans(section.content.title)}
                      </h1>
                      <div className="flex flex-wrap gap-2 w-full">
                        {section.content.tags.map((tag: string, i: number) => (
                          <div key={i} className="bg-[#F7F7FA] px-4 py-2 flex items-center justify-center" style={{ borderRadius: '2450px' }}>
                            <span className="text-[0.85rem] font-['Golos_Text'] text-[#222222]">{tag}</span>
                          </div>
                        ))}
                        {post.badge && (
                          <BadgeWithTooltip
                            badge={post.badge}
                            label={locale === 'ru' ? '🏆 1 место в федеральном соревновании по дизайну' : '🏆 1st place in a national design competition'}
                          />
                        )}
                      </div>
                    </div>
                    <div className="w-full rounded-[1rem] overflow-hidden bg-[#FFFFFF] aspect-video relative">
                      <Image src={post.image} alt={post.title} fill className="object-contain" priority />
                    </div>
                  </div>
                );

              case "image":
                return (
                  <div key={index} className="w-full rounded-[1rem] overflow-hidden bg-[#F7F7FA]">
                    <Image
                      src={section.content.src}
                      alt={section.content.alt}
                      loading={section.content.loading || "lazy"}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                );

              case "text":
                return (
                  <div key={index} className="w-full max-w-[900px] mx-auto">
                    {section.content.title && (
                      <h2 className="text-[1.5rem] md:text-[2rem] font-['Unbounded'] font-semibold text-[#222222] mb-6">
                        {fixOrphans(section.content.title)}
                      </h2>
                    )}
                    <p className="text-[1rem] md:text-[1.125rem] font-['Golos_Text'] text-[#222222] leading-relaxed opacity-90 whitespace-pre-wrap">
                      {fixOrphans(section.content.text)}
                    </p>
                  </div>
                );

              case "video":
                return (
                  <div key={index} className="w-full rounded-[1rem] overflow-hidden bg-[#F7F7FA]">
                    <video
                      src={section.content.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto"
                    />
                  </div>
                );

              case "summary":
                return (
                  <div key={index} className="bg-[#F7F7FA] p-8 rounded-[1rem] mt-4 w-full">
                    <h2 className="text-[1.5rem] md:text-[2rem] font-['Unbounded'] font-semibold text-[#222222] mb-4">
                      {fixOrphans(section.content.title)}
                    </h2>
                    <p className="text-[1rem] font-['Golos_Text'] text-[#222222] leading-relaxed opacity-80 mb-8 max-w-[800px]">
                      {fixOrphans(section.content.text)}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                      {section.content.buttons.map((btn: any, i: number) => {
                        if (btn.primary) {
                          return <CtaButton key={i} locale={locale} className="h-[56px] px-8 text-[1.25rem] w-full sm:w-auto" />;
                        }
                        return (
                          <a key={i} href={btn.url} target="_blank"
                            className="whitespace-nowrap h-[56px] px-8 rounded-full flex items-center justify-center text-[1.1rem] font-['Golos_Text'] transition-all bg-white text-[#222222] border border-[#E5E7EB] hover:border-[#FF0033] hover:text-[#FF0033] w-full sm:w-auto">
                            {btn.label}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>
      </main>
    </div>
  );
}