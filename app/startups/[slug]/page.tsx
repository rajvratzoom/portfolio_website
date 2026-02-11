import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getStartup, getAllSlugs } from '@/lib/mdx';
import MDXContent from '@/components/MDXContent';
import BackButton from '@/components/BackButton';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const statusConfig = {
  active: { label: 'Active', className: 'bg-green-500/10 text-green-400 border-green-500/20' },
  acquired: { label: 'Acquired', className: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  exited: { label: 'Exited', className: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
  closed: { label: 'Closed', className: 'bg-text-secondary/10 text-text-secondary border-border' },
};

// Generate static paths for all startups
export async function generateStaticParams() {
  const slugs = getAllSlugs('startups');
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const startup = getStartup(slug);
  
  if (!startup) {
    return { title: 'Startup Not Found' };
  }

  return {
    title: `${startup.frontmatter.title} | Startups | Raj Thapliyal`,
    description: startup.frontmatter.description,
  };
}

export default async function StartupPage({ params }: PageProps) {
  const { slug } = await params;
  const startup = getStartup(slug);

  if (!startup) {
    notFound();
  }

  const { frontmatter, content } = startup;
  const status = statusConfig[frontmatter.status];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <div className="mb-8">
          <BackButton href="/startups" label="Back to Startups" />
        </div>

        {/* Header */}
        <FadeIn>
          <header className="mb-12">
            {/* Status and Year */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`px-3 py-1 text-xs font-medium rounded-full border ${status.className}`}>
                {status.label}
              </span>
              <span className="text-sm text-accent">{frontmatter.year}</span>
            </div>

            {/* Title and Role */}
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-2">
              {frontmatter.title}
            </h1>
            <p className="text-xl text-accent mb-4">{frontmatter.role}</p>

            {/* Description */}
            <p className="text-lg text-text-secondary mb-6">
              {frontmatter.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-surface text-text-secondary rounded-full border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Website Link */}
            {frontmatter.website && (
              <Link
                href={frontmatter.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-hover text-background font-medium rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Visit Website
              </Link>
            )}
          </header>
        </FadeIn>

        {/* Content */}
        <FadeIn delay={0.1}>
          <MDXContent source={content} />
        </FadeIn>
      </article>
    </div>
  );
}
