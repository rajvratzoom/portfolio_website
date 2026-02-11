export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project Alpha',
    description: 'A comprehensive platform that revolutionizes how teams collaborate on complex problems.',
    longDescription: 'Built from the ground up to solve real-world collaboration challenges...',
    tags: ['Product Strategy', 'User Research', 'Prototyping'],
    link: 'https://example.com',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Data Insights Dashboard',
    description: 'An analytics dashboard that transforms raw data into actionable insights for decision makers.',
    tags: ['Data Visualization', 'UX Design', 'Python'],
    link: 'https://example.com',
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Community Platform',
    description: 'A platform connecting creators and communities, fostering meaningful interactions at scale.',
    tags: ['Community Building', 'Growth', 'Product'],
    link: 'https://example.com',
    featured: true,
  },
  {
    id: 'project-4',
    title: 'Research Toolkit',
    description: 'An open-source toolkit for conducting and analyzing user research efficiently.',
    tags: ['Research', 'Open Source', 'Tools'],
    github: 'https://github.com',
  },
  {
    id: 'project-5',
    title: 'Automation Framework',
    description: 'A framework for automating repetitive tasks and workflows in product development.',
    tags: ['Automation', 'Developer Tools', 'Efficiency'],
    github: 'https://github.com',
  },
  {
    id: 'project-6',
    title: 'Mobile Experience',
    description: 'A mobile-first experience designed to bring complex functionality to users on the go.',
    tags: ['Mobile', 'UX', 'React Native'],
    link: 'https://example.com',
  },
];

export const featuredProjects = projects.filter(p => p.featured);
