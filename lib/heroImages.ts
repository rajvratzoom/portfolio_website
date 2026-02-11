/**
 * Hero Images Configuration
 * 
 * Add your images here! The grid will automatically cycle through them.
 * 
 * HOW TO ADD IMAGES:
 * 1. Drop your image files into /public/images/hero/
 * 2. Add an entry below with the path and alt text
 * 3. The grid will automatically include it in the rotation
 * 
 * TIPS:
 * - Use JPG/PNG images, ~800px wide for best performance
 * - Mix photos of yourself with logos and other visuals
 * - Alt text helps with accessibility and SEO
 */

export interface HeroImage {
  src: string;
  alt: string;
}

export const heroImages: HeroImage[] = [
  // ===== ADD YOUR IMAGES BELOW =====
  // Example entries (replace with your actual images):
  
  { src: '/images/hero/placeholder-1.svg', alt: 'Placeholder 1' },
  { src: '/images/hero/placeholder-2.svg', alt: 'Placeholder 2' },
  { src: '/images/hero/placeholder-3.svg', alt: 'Placeholder 3' },
  { src: '/images/hero/placeholder-4.svg', alt: 'Placeholder 4' },
  { src: '/images/hero/placeholder-5.svg', alt: 'Placeholder 5' },
  { src: '/images/hero/placeholder-6.svg', alt: 'Placeholder 6' },
  { src: '/images/hero/placeholder-7.svg', alt: 'Placeholder 7' },
  { src: '/images/hero/placeholder-8.svg', alt: 'Placeholder 8' },
  { src: '/images/hero/placeholder-9.svg', alt: 'Placeholder 9' },
  { src: '/images/hero/placeholder-10.svg', alt: 'Placeholder 10' },
  { src: '/images/hero/placeholder-11.svg', alt: 'Placeholder 11' },
  { src: '/images/hero/placeholder-12.svg', alt: 'Placeholder 12' },
  { src: '/images/hero/placeholder-13.svg', alt: 'Placeholder 13' },
  { src: '/images/hero/placeholder-14.svg', alt: 'Placeholder 14' },
  { src: '/images/hero/placeholder-15.svg', alt: 'Placeholder 15' },
  { src: '/images/hero/placeholder-16.svg', alt: 'Placeholder 16' },
  { src: '/images/hero/placeholder-17.svg', alt: 'Placeholder 17' },
  { src: '/images/hero/placeholder-18.svg', alt: 'Placeholder 18' },
  { src: '/images/hero/placeholder-19.svg', alt: 'Placeholder 19' },
  { src: '/images/hero/placeholder-20.svg', alt: 'Placeholder 20' },
  
  // ===== ADD MORE IMAGES ABOVE =====
];

// Minimum images needed for the grid to look good
export const MIN_IMAGES = 12;

// Get a random subset of images for initial grid
export function getRandomImages(count: number): HeroImage[] {
  const shuffled = [...heroImages].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// Get a random image that's not in the current set
export function getRandomNewImage(currentImages: HeroImage[]): HeroImage {
  const currentSrcs = new Set(currentImages.map(img => img.src));
  const available = heroImages.filter(img => !currentSrcs.has(img.src));
  
  if (available.length === 0) {
    // If all images are shown, just pick any random one
    return heroImages[Math.floor(Math.random() * heroImages.length)];
  }
  
  return available[Math.floor(Math.random() * available.length)];
}
