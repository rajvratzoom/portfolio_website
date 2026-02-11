import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';

// Custom components for MDX
const components = {
  // Custom image component with Next.js Image optimization
  img: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    if (!src) return null;
    
    // For external images or SVGs, use regular img
    if (src.startsWith('http') || src.endsWith('.svg')) {
      return (
        <span className="block my-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt || ''}
            className="rounded-lg w-full"
            {...props}
          />
        </span>
      );
    }
    
    // For local images, use Next.js Image
    return (
      <span className="block my-8 relative w-full aspect-video">
        <Image
          src={src}
          alt={alt || ''}
          fill
          className="rounded-lg object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
        />
      </span>
    );
  },
  
  // Custom link component
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (!href) return <span {...props}>{children}</span>;
    
    // External links open in new tab
    if (href.startsWith('http')) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-hover underline underline-offset-2"
          {...props}
        >
          {children}
        </a>
      );
    }
    
    // Internal links use Next.js Link
    return (
      <Link
        href={href}
        className="text-accent hover:text-accent-hover underline underline-offset-2"
        {...props}
      >
        {children}
      </Link>
    );
  },
  
  // Custom code block styling
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="bg-surface border border-border rounded-lg p-4 overflow-x-auto my-6"
      {...props}
    >
      {children}
    </pre>
  ),
  
  // Inline code
  code: ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    // If it's inside a pre tag (code block), don't add extra styling
    if (className?.includes('hljs') || className?.includes('language-')) {
      return <code className={className} {...props}>{children}</code>;
    }
    
    // Inline code styling
    return (
      <code
        className="bg-surface px-1.5 py-0.5 rounded text-accent text-sm"
        {...props}
      >
        {children}
      </code>
    );
  },
  
  // Blockquote
  blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-accent pl-4 my-6 italic text-text-secondary"
      {...props}
    >
      {children}
    </blockquote>
  ),
  
  // Horizontal rule
  hr: () => <hr className="border-border my-8" />,
  
  // Table components
  table: ({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="border border-border bg-surface px-4 py-2 text-left font-semibold"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="border border-border px-4 py-2" {...props}>
      {children}
    </td>
  ),
};

interface MDXContentProps {
  source: string;
}

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-invert prose-amber max-w-none">
      <MDXRemote 
        source={source} 
        components={components}
        options={{
          mdxOptions: {
            rehypePlugins: [rehypeHighlight, rehypeSlug],
          },
        }}
      />
    </div>
  );
}
