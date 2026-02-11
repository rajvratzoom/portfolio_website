import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getResearch, getAllSlugs } from '@/lib/mdx';
import MDXContent from '@/components/MDXContent';
import BackButton from '@/components/BackButton';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all research items
export async function generateStaticParams() {
  const slugs = getAllSlugs('research');
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const research = getResearch(slug);
  
  if (!research) {
    return { title: 'Research Not Found' };
  }

  return {
    title: `${research.frontmatter.title} | Research | Raj Thapliyal`,
    description: research.frontmatter.abstract,
  };
}

export default async function ResearchPage({ params }: PageProps) {
  const { slug } = await params;
  const research = getResearch(slug);

  if (!research) {
    notFound();
  }

  const { frontmatter, content } = research;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <div className="mb-8">
          <BackButton href="/research" label="Back to Research" />
        </div>

        {/* Header */}
        <FadeIn>
          <header className="mb-12">
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
              <span className="text-accent font-medium">{frontmatter.date}</span>
              {frontmatter.publication && (
                <>
                  <span className="text-border">•</span>
                  <span className="text-text-secondary">{frontmatter.publication}</span>
                </>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              {frontmatter.title}
            </h1>

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

            {/* Co-authors */}
            {frontmatter.coAuthors && frontmatter.coAuthors.length > 0 && (
              <p className="text-sm text-text-secondary mb-6">
                <span className="font-medium">Co-authors:</span> {frontmatter.coAuthors.join(', ')}
              </p>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {frontmatter.pdfLink && (
                <Link
                  href={frontmatter.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-hover text-background font-medium rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </Link>
              )}
              {frontmatter.externalLink && (
                <Link
                  href={frontmatter.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border hover:border-text-secondary text-text-primary font-medium rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Publication
                </Link>
              )}
            </div>
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
