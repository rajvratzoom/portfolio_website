'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Placeholder posts - in a real implementation, you could fetch these from Substack's RSS
const placeholderPosts = [
  {
    id: 1,
    title: 'The Future of Product Development',
    excerpt: 'Exploring how AI and automation are reshaping how we build products...',
    date: 'Jan 15, 2024',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Building Communities That Last',
    excerpt: 'Lessons learned from growing and nurturing online communities...',
    date: 'Jan 8, 2024',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Research-Driven Decision Making',
    excerpt: 'How to integrate user research into your product development process...',
    date: 'Dec 28, 2023',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Startup Lessons: Year One',
    excerpt: 'Reflections on the first year of building a startup from scratch...',
    date: 'Dec 15, 2023',
    readTime: '8 min read',
  },
];

const SUBSTACK_URL = 'https://rajvratthapliyal.substack.com';

export default function SubstackFeed() {
  return (
    <div className="space-y-6">
      {/* Posts Grid */}
      <div className="grid gap-4">
        {placeholderPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3 text-sm text-text-secondary">
                  <span>{post.date}</span>
                  <span className="text-border">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-text-secondary">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-accent group-hover:text-accent-hover transition-colors">
                  <span className="text-sm font-medium">Read on Substack</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center pt-6"
      >
        <Link
          href={SUBSTACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-accent-hover text-background font-semibold rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
          </svg>
          Visit My Substack
        </Link>
      </motion.div>
    </div>
  );
}
