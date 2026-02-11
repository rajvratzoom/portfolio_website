import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getExperience, getAllSlugs } from '@/lib/mdx';
import MDXContent from '@/components/MDXContent';
import BackButton from '@/components/BackButton';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all experience items
export async function generateStaticParams() {
  const slugs = getAllSlugs('experience');
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperience(slug);
  
  if (!experience) {
    return { title: 'Experience Not Found' };
  }

  return {
    title: `${experience.frontmatter.title} at ${experience.frontmatter.company} | Experience | Raj Thapliyal`,
    description: experience.frontmatter.description,
  };
}

export default async function ExperiencePage({ params }: PageProps) {
  const { slug } = await params;
  const experience = getExperience(slug);

  if (!experience) {
    notFound();
  }

  const { frontmatter, content } = experience;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <div className="mb-8">
          <BackButton href="/experience" label="Back to Experience" />
        </div>

        {/* Header */}
        <FadeIn>
          <header className="mb-12">
            {/* Date and Location */}
            <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
              <span className="text-accent font-medium">
                {frontmatter.startDate} — {frontmatter.endDate}
              </span>
              {frontmatter.location && (
                <>
                  <span className="text-border">•</span>
                  <span className="text-text-secondary">{frontmatter.location}</span>
                </>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-2">
              {frontmatter.title}
            </h1>

            {/* Company */}
            {frontmatter.companyUrl ? (
              <Link
                href={frontmatter.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-accent hover:text-accent-hover transition-colors"
              >
                {frontmatter.company}
              </Link>
            ) : (
              <p className="text-xl text-accent">{frontmatter.company}</p>
            )}

            {/* Description */}
            <p className="text-lg text-text-secondary mt-4 mb-6">
              {frontmatter.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {frontmatter.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium bg-surface text-text-secondary rounded-full border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Achievements */}
            {frontmatter.achievements && frontmatter.achievements.length > 0 && (
              <div className="bg-surface border border-border rounded-xl p-6">
                <h3 className="text-sm font-semibold text-text-primary mb-3">Key Achievements</h3>
                <ul className="space-y-2">
                  {frontmatter.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
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
