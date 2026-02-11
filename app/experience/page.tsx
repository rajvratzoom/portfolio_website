import { Metadata } from 'next';
import TimelineItem from '@/components/TimelineItem';
import FadeIn from '@/components/FadeIn';
import { experience } from '@/lib/experience';

export const metadata: Metadata = {
  title: 'Experience | Raj Thapliyal',
  description: 'Professional experience of Raj Thapliyal - from product management to leadership roles.',
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <FadeIn>
          <div className="mb-16 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              Experience
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              My professional journey through product management, research, and leadership roles. Each experience has shaped how I approach building products and teams.
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="space-y-12">
          {experience.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              experience={exp}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
