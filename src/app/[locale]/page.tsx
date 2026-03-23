// src/app/[locale]/page.tsx

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { getProjects } from "@/data/projects";
import { getContent } from "@/data/content";
import Blog from "@/components/Blog";
import { getBlogPosts } from "@/data/blog";

interface HomeProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;

  const projects = getProjects(locale);
  const blogPosts = getBlogPosts(locale);
  const dict = getContent(locale);

  return (
    <div className="min-h-screen bg-white">
      <Navbar locale={locale} />
      
      <main>
        <Hero locale={locale} content={dict.hero} />

        <section id="portfolio" className="py-16 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <ProjectGrid locale={locale} projects={projects} />
          </div>
        </section>

        <Pricing locale={locale} content={dict.pricing} />
        <About locale={locale} content={dict.about} />
        <Blog locale={locale} title={dict.blog.title} posts={blogPosts} />
        <Footer locale={locale} content={dict.footer} />
      </main>
    </div>
  );
}