import "./globals.css";
import Link from "next/link";
import Navigation from "./components/Navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-neutral-800 relative">
          <div className="container flex items-center justify-between py-5">
            <Link href="/" className="leading-none hover:opacity-80 transition-opacity">
              <div className="font-extrabold tracking-tight text-3xl sm:text-4xl">VENTURI</div>
              <div className="tracking-[0.25em] text-xs sm:text-sm mt-1 text-neutral-400">WEB CONSULTING</div>
            </Link>
            <Navigation />
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
