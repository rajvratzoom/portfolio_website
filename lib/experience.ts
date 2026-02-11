export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements?: string[];
  skills: string[];
}

export const experience: Experience[] = [
  {
    id: 'exp-1',
    role: 'Product Lead',
    company: 'Tech Company',
    companyUrl: 'https://example.com',
    location: 'San Francisco, CA',
    startDate: 'Jan 2023',
    endDate: 'Present',
    description: 'Leading product strategy and execution for a platform serving millions of users. Driving cross-functional initiatives to improve user engagement and business outcomes.',
    achievements: [
      'Increased user engagement by 40% through data-driven feature development',
      'Led a team of 8 across product, design, and engineering',
      'Launched 3 major product initiatives that drove $2M+ in revenue',
    ],
    skills: ['Product Strategy', 'Team Leadership', 'Data Analysis', 'User Research'],
  },
  {
    id: 'exp-2',
    role: 'Senior Product Manager',
    company: 'Growth Startup',
    companyUrl: 'https://example.com',
    location: 'New York, NY',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    description: 'Owned the core product experience and growth initiatives. Collaborated closely with engineering and design to ship features that drove user acquisition and retention.',
    achievements: [
      'Drove 3x growth in active users over 18 months',
      'Implemented experimentation framework that increased shipping velocity by 50%',
      'Built and mentored a team of 3 product managers',
    ],
    skills: ['Growth', 'Experimentation', 'Product Development', 'Mentorship'],
  },
  {
    id: 'exp-3',
    role: 'Product Manager',
    company: 'Enterprise Software Co',
    companyUrl: 'https://example.com',
    location: 'Boston, MA',
    startDate: 'Aug 2019',
    endDate: 'May 2021',
    description: 'Managed a suite of B2B products focused on workflow automation. Conducted extensive customer research to identify pain points and opportunities.',
    achievements: [
      'Launched automation features that saved customers 10+ hours per week',
      'Conducted 100+ customer interviews to inform product roadmap',
      'Improved NPS score from 32 to 58',
    ],
    skills: ['B2B Products', 'Customer Research', 'Workflow Automation', 'Enterprise Sales'],
  },
  {
    id: 'exp-4',
    role: 'Associate Product Manager',
    company: 'Consumer Tech',
    companyUrl: 'https://example.com',
    location: 'Seattle, WA',
    startDate: 'Jul 2017',
    endDate: 'Jul 2019',
    description: 'Started my product career working on consumer-facing features. Learned the fundamentals of user-centered design and agile development.',
    achievements: [
      'Shipped 12 features in first year, exceeding team goals',
      'Created user research program that became standard practice',
      'Won internal hackathon with prototype that became a shipped feature',
    ],
    skills: ['Agile', 'User-Centered Design', 'Feature Development', 'Prototyping'],
  },
];
