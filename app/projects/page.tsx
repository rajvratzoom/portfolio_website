import { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import FadeIn from '@/components/FadeIn';
import { getAllProjects } from '@/lib/mdx';
import { projects as fallbackProjects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Projects | Raj Thapliyal',
  description: 'Explore projects by Raj Thapliyal - from product development to research tools and community platforms.',
};

export default function ProjectsPage() {
  // Get projects from MDX files, fallback to lib/projects if none exist
  const mdxProjects = getAllProjects();
  
  // Map MDX projects to the format expected by ProjectCard
  const projects = mdxProjects.length > 0
    ? mdxProjects.map((p) => ({
        id: p.slug,
        slug: p.slug,
        title: p.frontmatter.title,
        description: p.frontmatter.description,
        tags: p.frontmatter.tags,
        link: p.frontmatter.link,
        github: p.frontmatter.github,
        featured: p.frontmatter.featured,
      }))
    : fallbackProjects.map((p) => ({ ...p, slug: p.id }));

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <FadeIn>
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              Projects
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl">
              A collection of projects I&apos;ve worked on, from product development and research tools to community platforms and open-source contributions.
            </p>
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
