import { Metadata } from 'next';
import ResearchCard from '@/components/ResearchCard';
import FadeIn from '@/components/FadeIn';
import { research } from '@/lib/research';

export const metadata: Metadata = {
  title: 'Research | Raj Thapliyal',
  description: 'Research work by Raj Thapliyal - exploring user behavior, community dynamics, and product development.',
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <FadeIn>
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              Research
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl">
              My research explores the intersection of user behavior, community dynamics, and product development. Here are some of my published works and ongoing investigations.
            </p>
          </div>
        </FadeIn>

        {/* Research List */}
        <div className="space-y-6">
          {research.map((item, index) => (
            <ResearchCard key={item.id} research={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
