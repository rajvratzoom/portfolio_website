'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Startup {
  id: string;
  slug?: string;
  name: string;
  role: string;
  description: string;
  logo?: string;
  status: 'active' | 'acquired' | 'exited' | 'closed';
  year: string;
  website?: string;
  tags: string[];
}

interface StartupCardProps {
  startup: Startup;
  index: number;
}

const statusConfig = {
  active: { label: 'Active', className: 'bg-green-500/10 text-green-400 border-green-500/20' },
  acquired: { label: 'Acquired', className: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  exited: { label: 'Exited', className: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
  closed: { label: 'Closed', className: 'bg-text-secondary/10 text-text-secondary border-border' },
};

export default function StartupCard({ startup, index }: StartupCardProps) {
  const slug = startup.slug || startup.id;
  const status = statusConfig[startup.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/startups/${slug}`} className="block h-full">
        <div className="h-full bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300">
          {/* Header with Logo Placeholder and Status */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              {/* Logo Placeholder */}
              <div className="w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center text-2xl font-bold text-accent">
                {startup.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
                  {startup.name}
                </h3>
                <p className="text-sm text-text-secondary">{startup.role}</p>
              </div>
            </div>
            <span className={`px-3 py-1 text-xs font-medium rounded-full border ${status.className}`}>
              {status.label}
            </span>
          </div>

          {/* Year */}
          <p className="text-sm text-accent mb-3">{startup.year}</p>

          {/* Description */}
          <p className="text-text-secondary mb-4 leading-relaxed line-clamp-3">
            {startup.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {startup.tags.map((tag) => (
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
