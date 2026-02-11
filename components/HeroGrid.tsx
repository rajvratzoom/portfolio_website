'use client';

import { useState, useCallback, useEffect } from 'react';
import { heroImages, getRandomImages, HeroImage } from '@/lib/heroImages';
import GridCell from './GridCell';

const GRID_SIZE = 16; // Number of cells in the grid

export default function HeroGrid() {
  const [gridImages, setGridImages] = useState<HeroImage[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Initialize grid on client side only to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
    setGridImages(getRandomImages(GRID_SIZE));
  }, []);

  const getNewImage = useCallback((currentIndex: number) => {
    // Get an image that's not currently in the visible grid
    const currentSrcs = new Set(gridImages.map(img => img.src));
    const available = heroImages.filter(img => !currentSrcs.has(img.src));
    
    if (available.length === 0) {
      // If all images are shown, just pick any random one different from current cell
      const otherImages = heroImages.filter(img => img.src !== gridImages[currentIndex]?.src);
      return otherImages[Math.floor(Math.random() * otherImages.length)] || heroImages[0];
    }
    
    return available[Math.floor(Math.random() * available.length)];
  }, [gridImages]);

  // Show placeholder grid during SSR
  if (!isClient) {
    return (
      <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 p-2">
        {Array.from({ length: GRID_SIZE }).map((_, index) => {
          const heights = ['h-48', 'h-56', 'h-64', 'h-72', 'h-80'];
          const heightClass = heights[index % heights.length];
          return (
            <div
              key={index}
              className={`${heightClass} rounded-lg bg-surface animate-pulse`}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 p-2 auto-rows-min">
      {gridImages.map((image, index) => (
        <GridCell
          key={`cell-${index}`}
          image={image}
          index={index}
          onRequestNewImage={() => getNewImage(index)}
          minInterval={4000}
          maxInterval={10000}
        />
      ))}
    </div>
  );
}
