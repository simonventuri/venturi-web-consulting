"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-5 text-sm">
        <Link className="hover:underline" href="/">Home</Link>
        <Link className="hover:underline" href="/projects">Projects</Link>
        <Link className="hover:underline" href="/contact">Contact</Link>
      </nav>

      {/* Mobile Burger Menu Button */}
      <button
        className="md:hidden flex flex-col gap-1 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`w-5 h-0.5 bg-neutral-900 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`w-5 h-0.5 bg-neutral-900 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-5 h-0.5 bg-neutral-900 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-200 z-50">
          <nav className="container py-6">
            <div className="flex flex-col gap-4">
              <Link 
                className="hover:underline text-lg" 
                href="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                className="hover:underline text-lg" 
                href="/projects"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                className="hover:underline text-lg" 
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}