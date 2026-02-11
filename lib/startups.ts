export interface Startup {
  id: string;
  name: string;
  role: string;
  description: string;
  logo?: string;
  status: 'active' | 'acquired' | 'exited' | 'closed';
  year: string;
  website?: string;
  tags: string[];
}

export const startups: Startup[] = [
  {
    id: 'startup-1',
    name: 'Startup Alpha',
    role: 'Co-Founder & CEO',
    description: 'Building the future of collaborative work. A platform that brings teams together to solve complex problems through innovative tools and methodologies.',
    status: 'active',
    year: '2023 - Present',
    website: 'https://example.com',
    tags: ['SaaS', 'Collaboration', 'B2B'],
  },
  {
    id: 'startup-2',
    name: 'Beta Ventures',
    role: 'Founder',
    description: 'A community-driven platform connecting researchers and practitioners. Facilitated knowledge exchange and collaboration across industries.',
    status: 'acquired',
    year: '2021 - 2023',
    website: 'https://example.com',
    tags: ['Community', 'Research', 'Platform'],
  },
  {
    id: 'startup-3',
    name: 'Gamma Labs',
    role: 'Co-Founder & CPO',
    description: 'An AI-powered analytics platform that helped businesses understand their customers better through advanced behavioral analysis.',
    status: 'exited',
    year: '2019 - 2021',
    tags: ['AI', 'Analytics', 'B2B'],
  },
  {
    id: 'startup-4',
    name: 'Delta Project',
    role: 'Founder',
    description: 'An early-stage experiment in decentralized community governance. Learned valuable lessons about building sustainable online communities.',
    status: 'closed',
    year: '2018 - 2019',
    tags: ['Web3', 'Community', 'Experiment'],
  },
];

export const activeStartups = startups.filter(s => s.status === 'active');
export const pastStartups = startups.filter(s => s.status !== 'active');
