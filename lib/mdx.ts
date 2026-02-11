import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Base directory for content
const contentDirectory = path.join(process.cwd(), 'content');

// Types for different content
export interface ProjectFrontmatter {
  title: string;
  description: string;
  date?: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface ResearchFrontmatter {
  title: string;
  abstract: string;
  date: string;
  tags: string[];
  publication?: string;
  pdfLink?: string;
  externalLink?: string;
  coAuthors?: string[];
}

export interface StartupFrontmatter {
  title: string;
  role: string;
  description: string;
  logo?: string;
  status: 'active' | 'acquired' | 'exited' | 'closed';
  year: string;
  website?: string;
  tags: string[];
}

export interface ExperienceFrontmatter {
  title: string;
  company: string;
  companyUrl?: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements?: string[];
  skills: string[];
}

export type ContentType = 'projects' | 'research' | 'startups' | 'experience';

export interface ContentItem<T> {
  slug: string;
  frontmatter: T;
  content: string;
}

/**
 * Get all slugs for a content type
 */
export function getAllSlugs(contentType: ContentType): string[] {
  const directory = path.join(contentDirectory, contentType);
  
  if (!fs.existsSync(directory)) {
    return [];
  }
  
  const filenames = fs.readdirSync(directory);
  return filenames
    .filter((filename) => filename.endsWith('.mdx') || filename.endsWith('.md'))
    .map((filename) => filename.replace(/\.mdx?$/, ''));
}

/**
 * Get a single content item by slug
 */
export function getContentBySlug<T>(
  contentType: ContentType,
  slug: string
): ContentItem<T> | null {
  const directory = path.join(contentDirectory, contentType);
  
  // Try .mdx first, then .md
  let fullPath = path.join(directory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(directory, `${slug}.md`);
  }
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    slug,
    frontmatter: data as T,
    content,
  };
}

/**
 * Get all content items for a content type
 */
export function getAllContent<T>(contentType: ContentType): ContentItem<T>[] {
  const slugs = getAllSlugs(contentType);
  
  const items = slugs
    .map((slug) => getContentBySlug<T>(contentType, slug))
    .filter((item): item is ContentItem<T> => item !== null);
  
  // Sort by date if available (newest first)
  return items.sort((a, b) => {
    const dateA = (a.frontmatter as Record<string, unknown>).date as string | undefined;
    const dateB = (b.frontmatter as Record<string, unknown>).date as string | undefined;
    
    if (dateA && dateB) {
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    }
    return 0;
  });
}

/**
 * Get all projects
 */
export function getAllProjects(): ContentItem<ProjectFrontmatter>[] {
  return getAllContent<ProjectFrontmatter>('projects');
}

/**
 * Get a single project
 */
export function getProject(slug: string): ContentItem<ProjectFrontmatter> | null {
  return getContentBySlug<ProjectFrontmatter>('projects', slug);
}

/**
 * Get all research items
 */
export function getAllResearch(): ContentItem<ResearchFrontmatter>[] {
  return getAllContent<ResearchFrontmatter>('research');
}

/**
 * Get a single research item
 */
export function getResearch(slug: string): ContentItem<ResearchFrontmatter> | null {
  return getContentBySlug<ResearchFrontmatter>('research', slug);
}

/**
 * Get all startups
 */
export function getAllStartups(): ContentItem<StartupFrontmatter>[] {
  return getAllContent<StartupFrontmatter>('startups');
}

/**
 * Get a single startup
 */
export function getStartup(slug: string): ContentItem<StartupFrontmatter> | null {
  return getContentBySlug<StartupFrontmatter>('startups', slug);
}

/**
 * Get all experience items
 */
export function getAllExperience(): ContentItem<ExperienceFrontmatter>[] {
  return getAllContent<ExperienceFrontmatter>('experience');
}

/**
 * Get a single experience item
 */
export function getExperience(slug: string): ContentItem<ExperienceFrontmatter> | null {
  return getContentBySlug<ExperienceFrontmatter>('experience', slug);
}
