export default function Page() {
  return (
    <section id="intro" className="section">
      <div className="container">
        <h1 className="h1 mb-4">Turning ideas into<br />websites that work.</h1>
        <p className="lead mb-6">I'm Simon Venturi — software engineer & co-founder of <a href="https://www.mvfglobal.com/" className="underline hover:text-white transition-colors">MVF</a>, which in 2013 was the fastest growing tech company in the UK. I build pragmatic, performant sites and apps.</p>
        <p className="lead mb-6">I worked in London for many years and re-located to the South Hams in 2019. I have a wealth of web experience and know that when it comes to ideas and businesses, boilerplate, one size fits all solutions don't always fit.</p>
        <p className="lead mb-6">I'm passionate about helping businesses grow and succeed online. Let's work together to create something amazing.</p>
        <div className="flex gap-3">
          <a href="mailto:simon@venturiwebconsulting.com" className="badge hover:bg-neutral-900">Email me</a>
          <a href="/projects" className="badge hover:bg-neutral-900">Projects</a>
        </div>
      </div>
    </section>
  );
}
