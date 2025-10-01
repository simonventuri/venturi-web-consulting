import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="h1 mb-6">Projects</h1>
        <div className="grid-auto">
          <article className="card">
            <h3 className="text-lg font-semibold">Tapestry Vertical Gardens</h3>
            <p className="mt-2 text-neutral-300">SEO‑oriented brochure site + content system for a living‑wall specialist.</p>
            <Link className="badge mt-4 inline-flex hover:bg-neutral-900" href="/projects/tapestry">View case study</Link>
          </article>

          <article className="card">
            <h3 className="text-lg font-semibold">More Coming Soon</h3>
            <p className="mt-2 text-neutral-300">I'm always looking for new projects. Get in touch to discuss your ideas.</p>
            <Link className="badge mt-4 inline-flex hover:bg-neutral-900" href="/contact">Get in touch</Link>
          </article>
        </div>
      </div>
    </section>
  );
}
