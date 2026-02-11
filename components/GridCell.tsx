'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { HeroImage } from '@/lib/heroImages';

interface GridCellProps {
  image: HeroImage;
  index: number;
  onRequestNewImage: () => HeroImage;
  minInterval?: number;
  maxInterval?: number;
}

export default function GridCell({
  image: initialImage,
  index,
  onRequestNewImage,
  minInterval = 3000,
  maxInterval = 8000,
}: GridCellProps) {
  const [currentImage, setCurrentImage] = useState(initialImage);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Stagger the start of animations based on index
    const initialDelay = (index % 5) * 1000 + Math.random() * 2000;
    
    const startCycling = () => {
      const interval = minInterval + Math.random() * (maxInterval - minInterval);
      
      const timeoutId = setTimeout(() => {
        setIsTransitioning(true);
        
        // After fade out, swap image
        setTimeout(() => {
          const newImage = onRequestNewImage();
          setCurrentImage(newImage);
          setIsTransitioning(false);
        }, 500);
        
        startCycling();
      }, interval);

      return timeoutId;
    };

    const initialTimeoutId = setTimeout(() => {
      startCycling();
    }, initialDelay);

    return () => {
      clearTimeout(initialTimeoutId);
    };
  }, [index, minInterval, maxInterval, onRequestNewImage]);

  // Different aspect ratios for masonry effect
  const heights = ['h-48', 'h-56', 'h-64', 'h-72', 'h-80'];
  const heightClass = heights[index % heights.length];

  return (
    <div className={`relative ${heightClass} rounded-lg overflow-hidden bg-surface`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: isTransitioning ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
