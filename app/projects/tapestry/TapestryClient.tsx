"use client";

import { useState } from "react";
import Lightbox from "../../components/Lightbox";

interface TapestryData {
  title: string;
  period: string;
  summary: string;
  images: string[];
}

interface TapestryClientProps {
  data: TapestryData;
}

export default function TapestryClient({ data }: TapestryClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="flex items-baseline justify-between gap-4">
            <h1 className="h1">{data.title}</h1>
            <span className="text-sm text-neutral-400">{data.period}</span>
          </div>
          <p className="lead mt-3">{data.summary}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {data.images.map((src: string, i: number) => (
              <button
                key={i}
                onClick={() => openLightbox(i)}
                className="overflow-hidden border border-neutral-800 bg-neutral-900 h-80 hover:border-neutral-600 transition-colors cursor-pointer group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Tapestry screenshot ${i + 1}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <a 
              href="https://tapestryverticalgardens.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="badge hover:bg-neutral-900"
            >
              Visit Site →
            </a>
          </div>

          <hr className="mt-10" />
          <div className="mt-6">
            <a className="badge hover:bg-neutral-900" href="/projects">← Back to projects</a>
          </div>
        </div>
      </section>

      <Lightbox
        images={data.images}
        isOpen={lightboxOpen}
        initialIndex={lightboxIndex}
        onClose={closeLightbox}
      />
    </>
  );
}