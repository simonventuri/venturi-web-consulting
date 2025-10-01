export default function Page() {
  return (
    <section id="intro" className="section">
      <div className="container">
        <h1 className="h1 mb-4">Shipping clean, fast web products.</h1>
        <p className="lead mb-6">I'm Simon Venturi — software engineer & <a href="https://www.mvfglobal.com/" className="underline hover:text-white transition-colors">MVF</a> co‑founder. I build pragmatic, performant sites and apps.</p>
        <div className="flex gap-3">
          <a href="mailto:simon@venturiwebconsulting.com" className="badge hover:bg-neutral-900">Email me</a>
          <a href="/projects" className="badge hover:bg-neutral-900">Projects</a>
        </div>
      </div>
    </section>
  );
}
