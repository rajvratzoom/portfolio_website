export interface Research {
  id: string;
  title: string;
  abstract: string;
  date: string;
  tags: string[];
  pdfLink?: string;
  externalLink?: string;
  publication?: string;
  coAuthors?: string[];
}

export const research: Research[] = [
  {
    id: 'research-1',
    title: 'Understanding User Behavior in Complex Systems',
    abstract: 'This study explores how users navigate and make decisions within complex digital ecosystems. Through a mixed-methods approach combining quantitative analytics and qualitative interviews, we identified key patterns that influence user engagement and retention.',
    date: '2024',
    tags: ['User Research', 'Behavioral Analysis', 'Product Design'],
    publication: 'Journal of Human-Computer Interaction',
    externalLink: 'https://example.com',
  },
  {
    id: 'research-2',
    title: 'Community Dynamics in Online Platforms',
    abstract: 'An investigation into the factors that drive healthy community growth and engagement in digital platforms. The research presents a framework for measuring community health and provides actionable insights for platform builders.',
    date: '2023',
    tags: ['Community Building', 'Social Networks', 'Platform Design'],
    pdfLink: '/papers/community-dynamics.pdf',
  },
  {
    id: 'research-3',
    title: 'The Future of Remote Collaboration',
    abstract: 'A comprehensive analysis of emerging trends in remote work and collaboration tools. This paper examines how distributed teams maintain productivity and culture, with recommendations for tool design and organizational practices.',
    date: '2023',
    tags: ['Remote Work', 'Collaboration', 'Future of Work'],
    externalLink: 'https://example.com',
  },
  {
    id: 'research-4',
    title: 'Data-Driven Product Development',
    abstract: 'This research presents a framework for integrating quantitative data analysis with qualitative user insights to drive product decisions. Case studies from multiple industries demonstrate the practical application of this approach.',
    date: '2022',
    tags: ['Product Management', 'Data Science', 'Decision Making'],
    publication: 'Product Management Review',
  },
];
