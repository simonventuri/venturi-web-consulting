import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Web development projects by Simon Venturi. Case studies of custom websites, performance optimization, and technical solutions for businesses.",
  openGraph: {
    title: "Projects - Venturi Web Consulting",
    description: "Web development projects by Simon Venturi. Case studies of custom websites, performance optimization, and technical solutions.",
    url: "https://venturiwebconsulting.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1 mb-6">Projects</h1>
        <div className="grid-auto">
          <article className="card">
            <h3 className="text-lg font-semibold">Tapestry Vertical Gardens</h3>
            <p className="mt-2">Bespoke SEO‑oriented brochure site + project and content management system for a living‑wall specialist.</p>
            <Link className="badge mt-4 inline-flex hover:bg-neutral-200" href="/projects/tapestry">View case study</Link>
          </article>

          <article className="card">
            <h3 className="text-lg font-semibold">More Coming Soon</h3>
            <p className="mt-2">I'm always looking for new projects. Get in touch to discuss your ideas.</p>
            <Link className="badge mt-4 inline-flex hover:bg-neutral-200" href="/contact">Get in touch</Link>
          </article>
        </div>
      </div>
    </section>
  );
}
