"use client";

import { useEffect, useRef } from "react";

interface LightboxProps {
  images: string[];
  isOpen: boolean;
  initialIndex: number;
  onClose: () => void;
}

export default function Lightbox({ images, isOpen, initialIndex, onClose }: LightboxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Handle keyboard navigation and prevent background scrolling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // Prevent background scrolling

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Scroll to the initial image when lightbox opens
  useEffect(() => {
    if (isOpen && imageRefs.current[initialIndex]) {
      setTimeout(() => {
        imageRefs.current[initialIndex]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 100);
    }
  }, [isOpen, initialIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl w-10 h-10 flex items-center justify-center hover:bg-white hover:bg-opacity-20 rounded-full transition-colors z-20"
        aria-label="Close lightbox"
      >
        ×
      </button>

      {/* Scrollable container for all images */}
      <div 
        ref={containerRef}
        className="w-[60%] h-[90vh] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent"
        style={{
          scrollBehavior: 'smooth'
        }}
      >
        <div className="flex flex-col gap-6 p-4">
          {images.map((image, index) => (
            <div
              key={index}
              ref={el => { imageRefs.current[index] = el; }}
              className="flex-shrink-0 flex justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={`Project image ${index + 1}`}
                className="max-w-full h-auto object-contain rounded border border-neutral-700"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Background overlay - click to close */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
        aria-label="Close lightbox"
      />
    </div>
  );
}