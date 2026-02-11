'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Research {
  id: string;
  slug?: string;
  title: string;
  abstract: string;
  date: string;
  tags: string[];
  publication?: string;
  pdfLink?: string;
  externalLink?: string;
  coAuthors?: string[];
}

interface ResearchCardProps {
  research: Research;
  index: number;
}

export default function ResearchCard({ research, index }: ResearchCardProps) {
  const slug = research.slug || research.id;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/research/${slug}`} className="block">
        <div className="bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300">
          {/* Date and Publication */}
          <div className="flex items-center gap-3 mb-3 text-sm">
            <span className="text-accent font-medium">{research.date}</span>
            {research.publication && (
              <>
                <span className="text-border">•</span>
                <span className="text-text-secondary">{research.publication}</span>
              </>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors">
            {research.title}
          </h3>

          {/* Abstract */}
          <p className="text-text-secondary mb-4 leading-relaxed line-clamp-3">
            {research.abstract}
          </p>

          {/* Co-authors */}
          {research.coAuthors && research.coAuthors.length > 0 && (
            <p className="text-sm text-text-secondary mb-4">
              <span className="font-medium">Co-authors:</span> {research.coAuthors.join(', ')}
            </p>
          )}

          {/* Tags and Links */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {research.tags.map((tag) => (
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
        </div>
      </Link>
    </motion.div>
  );
}
