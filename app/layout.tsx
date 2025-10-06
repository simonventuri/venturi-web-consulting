import "./globals.css";
import Link from "next/link";
import Navigation from "./components/Navigation";
import GoogleAnalytics from "./components/GoogleAnalytics";
import CookieConsent from "./components/CookieConsent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Venturi Web Consulting - Clean, Fast Web Products",
    template: "%s | Venturi Web Consulting"
  },
  description: "Professional web development services by Simon Venturi. Building pragmatic, performant websites and apps for businesses. Based in South Hams, UK.",
  keywords: ["web development", "web design", "software engineer", "Next.js", "React", "SEO", "performance optimization", "South Hams", "UK"],
  authors: [{ name: "Simon Venturi" }],
  creator: "Simon Venturi",
  publisher: "Venturi Web Consulting",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://venturiwebconsulting.com",
    siteName: "Venturi Web Consulting",
    title: "Venturi Web Consulting - Clean, Fast Web Products",
    description: "Professional web development services by Simon Venturi. Building pragmatic, performant websites and apps for businesses.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Venturi Web Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venturi Web Consulting - Clean, Fast Web Products",
    description: "Professional web development services by Simon Venturi. Building pragmatic, performant websites and apps for businesses.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://venturiwebconsulting.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="flex flex-col min-h-screen">
        <GoogleAnalytics />
        <header className="bg-orange-600 border-b border-orange-700 fixed top-0 left-0 right-0 z-50">
          <div className="container flex items-center justify-between py-5">
            <Link href="/" className="leading-none hover:opacity-80 transition-opacity">
              <div className="tracking-[0.18rem] text-4xl sm:text-6xl text-white font-thin">VENTURI</div>
            </Link>
            <Navigation />
          </div>
        </header>
        <main className="flex-1 pt-32 sm:pt-36">{children}</main>
        <footer className="bg-white border-t border-neutral-200 py-3 mt-auto">
          <div className="container text-center text-sm text-neutral-600">
            © Venturi Web Consulting {new Date().getFullYear()}
          </div>
        </footer>
        <CookieConsent />
      </body>
    </html>
  );
}
