'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface BackButtonProps {
  href: string;
  label?: string;
}

export default function BackButton({ href, label = 'Back' }: BackButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors group"
      >
        <svg
          className="w-4 h-4 transition-transform group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span>{label}</span>
      </Link>
    </motion.div>
  );
}
