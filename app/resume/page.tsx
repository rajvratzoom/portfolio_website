import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Raj Thapliyal',
  description: 'Resume of Rajvrat Thapliyal - Product Manager, ML Researcher, and Builder.',
};

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-20">
      <iframe
        src="/Rajvrat_Thapliyal_Resume.pdf"
        className="w-full h-[calc(100vh-5rem)]"
        title="Rajvrat Thapliyal Resume"
      />
    </div>
  );
}
