import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProject, getAllSlugs } from '@/lib/mdx';
import MDXContent from '@/components/MDXContent';
import BackButton from '@/components/BackButton';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all projects
export async function generateStaticParams() {
  const slugs = getAllSlugs('projects');
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  
  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.frontmatter.title} | Projects | Raj Thapliyal`,
    description: project.frontmatter.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const { frontmatter, content } = project;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <div className="mb-8">
          <BackButton href="/projects" label="Back to Projects" />
        </div>

        {/* Header */}
        <FadeIn>
          <header className="mb-12">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-surface text-text-secondary rounded-full border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              {frontmatter.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-text-secondary mb-6">
              {frontmatter.description}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {frontmatter.link && (
                <Link
                  href={frontmatter.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-hover text-background font-medium rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Visit Project
                </Link>
              )}
              {frontmatter.github && (
                <Link
                  href={frontmatter.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border hover:border-text-secondary text-text-primary font-medium rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Code
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
