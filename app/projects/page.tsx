import { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import FadeIn from '@/components/FadeIn';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Projects | Raj Thapliyal',
  description: 'Explore projects by Raj Thapliyal - from product development to research tools and community platforms.',
};

export default function ProjectsPage() {
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
