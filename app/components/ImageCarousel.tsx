"use client";

import { useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  // Shuffle images on component mount
  useEffect(() => {
    if (images.length > 0) {
      const shuffled = [...images].sort(() => Math.random() - 0.5);
      setShuffledImages(shuffled);
    }
  }, [images]);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (shuffledImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === shuffledImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [shuffledImages.length]);

  if (shuffledImages.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-64 sm:h-80 bg-neutral-900 overflow-hidden">
      {shuffledImages.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Project showcase ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      
      {/* Optional: Add dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {shuffledImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-neutral-500'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}