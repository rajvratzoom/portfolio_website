import { Metadata } from 'next';
import StartupCard from '@/components/StartupCard';
import FadeIn from '@/components/FadeIn';
import { startups } from '@/lib/startups';

export const metadata: Metadata = {
  title: 'Startups | Raj Thapliyal',
  description: 'Startups founded by Raj Thapliyal - from active ventures to successful exits.',
};

export default function StartupsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <FadeIn>
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              Startups
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl">
              Building companies is one of the most challenging and rewarding things I do. Here are the startups I&apos;ve founded or co-founded over the years.
            </p>
          </div>
        </FadeIn>

        {/* Startups Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {startups.map((startup, index) => (
            <StartupCard key={startup.id} startup={startup} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
