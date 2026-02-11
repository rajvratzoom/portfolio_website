'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Project {
  id: string;
  slug?: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const slug = project.slug || project.id;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/projects/${slug}`} className="block h-full">
        <div className="h-full bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <div className="flex gap-2">
              {project.link && (
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.link, '_blank');
                  }}
                  className="p-2 text-text-secondary hover:text-accent transition-colors cursor-pointer"
                  aria-label="Visit project"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              )}
              {project.github && (
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.github, '_blank');
                  }}
                  className="p-2 text-text-secondary hover:text-accent transition-colors cursor-pointer"
                  aria-label="View on GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-text-secondary mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-background text-text-secondary rounded-full border border-border"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Read More indicator */}
          <div className="flex items-center gap-1 text-sm text-accent group-hover:text-accent-hover transition-colors">
            <span>Read more</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
