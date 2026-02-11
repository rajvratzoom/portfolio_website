'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Research } from '@/lib/research';

interface ResearchCardProps {
  research: Research;
  index: number;
}

export default function ResearchCard({ research, index }: ResearchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
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
        <p className="text-text-secondary mb-4 leading-relaxed">
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

          <div className="flex gap-3">
            {research.pdfLink && (
              <Link
                href={research.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                PDF
              </Link>
            )}
            {research.externalLink && (
              <Link
                href={research.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
