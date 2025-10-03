"use client";

import { useState, useEffect } from "react";
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
    const [isMobile, setIsMobile] = useState(false);

    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const openLightbox = (index: number) => {
        // Only open lightbox on desktop
        if (!isMobile) {
            setLightboxIndex(index);
            setLightboxOpen(true);
        }
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
                            <div
                                key={i}
                                onClick={() => openLightbox(i)}
                                className={`overflow-hidden border border-neutral-200 bg-neutral-50 h-80 transition-colors ${!isMobile ? 'hover:border-neutral-400 cursor-pointer group' : ''
                                    }`}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={src}
                                    alt={`Tapestry screenshot ${i + 1}`}
                                    className={`w-full h-full object-cover object-center transition-transform duration-300 ${!isMobile ? 'group-hover:scale-105' : ''
                                        }`}
                                />
                            </div>
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

            {/* Only render lightbox on desktop */}
            {!isMobile && (
                <Lightbox
                    images={data.images}
                    isOpen={lightboxOpen}
                    initialIndex={lightboxIndex}
                    onClose={closeLightbox}
                />
            )}
        </>
    );
}