import { Metadata } from 'next';
import SubstackFeed from '@/components/SubstackFeed';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Blog | Raj Thapliyal',
  description: 'Thoughts and writings by Raj Thapliyal on product development, research, startups, and community building.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <FadeIn>
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              Blog
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl">
              I write about product development, research methodologies, startup lessons, and community building on my Substack. Here are some recent posts.
            </p>
          </div>
        </FadeIn>

        {/* Substack Feed */}
        <SubstackFeed />
      </div>
    </div>
  );
}
