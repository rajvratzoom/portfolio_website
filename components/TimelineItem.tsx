'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Experience {
  id: string;
  slug?: string;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements?: string[];
  skills: string[];
}

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

export default function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  const slug = experience.slug || experience.id;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2">
        {!isLast && <div className="absolute top-12 bottom-0 w-full bg-border" />}
      </div>

      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-1 w-3 h-3 bg-accent rounded-full md:-translate-x-1/2 ring-4 ring-background" />

      {/* Content */}
      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
        <Link href={`/experience/${slug}`} className="block group">
          <div className="bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300">
            {/* Date Range */}
            <div className="flex items-center gap-2 mb-2 text-sm">
              <span className="text-accent font-medium">
                {experience.startDate} — {experience.endDate}
              </span>
              {experience.location && (
                <>
                  <span className="text-border">•</span>
                  <span className="text-text-secondary">{experience.location}</span>
                </>
              )}
            </div>

            {/* Role and Company */}
            <h3 className="text-xl font-semibold text-text-primary mb-1 group-hover:text-accent transition-colors">
              {experience.role}
            </h3>
            <p className="text-accent mb-3">{experience.company}</p>

            {/* Description */}
            <p className="text-text-secondary leading-relaxed line-clamp-2">
              {experience.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-4">
              {experience.skills.slice(0, 4).map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium bg-background text-text-secondary rounded-full border border-border"
                >
                  {skill}
                </span>
              ))}
              {experience.skills.length > 4 && (
                <span className="px-3 py-1 text-xs font-medium text-text-secondary">
                  +{experience.skills.length - 4} more
                </span>
              )}
            </div>

            {/* Read More indicator */}
            <div className="flex items-center gap-1 text-sm text-accent group-hover:text-accent-hover transition-colors mt-4">
              <span>Read more</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
