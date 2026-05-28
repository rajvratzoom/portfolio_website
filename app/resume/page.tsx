import { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';
import ResumeContent from '@/components/ResumeContent';

export const metadata: Metadata = {
  title: 'Resume | Raj Thapliyal',
  description: 'Resume of Rajvrat Thapliyal - Product Manager, ML Researcher, and Builder.',
};

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <FadeIn>
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              Resume
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-6">
              A summary of my education, experience, projects, and skills.
            </p>
            <a
              href="/Rajvrat_Thapliyal_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent-hover transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>
          </div>
        </FadeIn>

        {/* Resume Content */}
        <ResumeContent />
      </div>
    </div>
  );
}
