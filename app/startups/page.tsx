import { Metadata } from 'next';
import StartupCard from '@/components/StartupCard';
import FadeIn from '@/components/FadeIn';
import { getAllStartups } from '@/lib/mdx';
import { startups as fallbackStartups } from '@/lib/startups';

export const metadata: Metadata = {
  title: 'Startups | Raj Thapliyal',
  description: 'Startups founded by Raj Thapliyal - from active ventures to successful exits.',
};

export default function StartupsPage() {
  // Get startups from MDX files, fallback to lib/startups if none exist
  const mdxStartups = getAllStartups();
  
  // Map MDX startups to the format expected by StartupCard
  const startups = mdxStartups.length > 0
    ? mdxStartups.map((s) => ({
        id: s.slug,
        slug: s.slug,
        name: s.frontmatter.title,
        role: s.frontmatter.role,
        description: s.frontmatter.description,
        logo: s.frontmatter.logo,
        status: s.frontmatter.status,
        year: s.frontmatter.year,
        website: s.frontmatter.website,
        tags: s.frontmatter.tags,
      }))
    : fallbackStartups.map((s) => ({ ...s, slug: s.id }));

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <FadeIn>
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              Startups
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl">
              Building companies is one of the most challenging and rewarding things I do. Here are the startups I&apos;ve founded or co-founded over the years.
            </p>
          </div>
        </FadeIn>

        {/* Startups Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {startups.map((startup, index) => (
            <StartupCard key={startup.id} startup={startup} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
