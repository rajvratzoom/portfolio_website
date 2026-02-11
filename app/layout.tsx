import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Raj Thapliyal | Product · Research · Startups · Community',
  description: 'Portfolio of Rajvrat (Raj) Thapliyal - Building products, conducting research, founding startups, and cultivating communities.',
  keywords: ['Product Manager', 'Researcher', 'Startup Founder', 'Community Builder', 'Raj Thapliyal'],
  authors: [{ name: 'Rajvrat Thapliyal' }],
  openGraph: {
    title: 'Raj Thapliyal | Product · Research · Startups · Community',
    description: 'Building products, conducting research, founding startups, and cultivating communities.',
    url: 'https://rajthapliyal.com',
    siteName: 'Raj Thapliyal',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raj Thapliyal | Product · Research · Startups · Community',
    description: 'Building products, conducting research, founding startups, and cultivating communities.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-text-primary font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
