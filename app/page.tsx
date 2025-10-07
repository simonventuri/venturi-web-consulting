import StructuredData from "./components/StructuredData";
import { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";

export const metadata: Metadata = {
  title: "Home",
  description: "Simon Venturi - Software engineer and co-founder of MVF. Specializing in pragmatic, performant websites and apps. See recent work and experience. Based in South Hams, UK.",
  openGraph: {
    title: "Venturi Web Consulting - Turning Ideas Into Websites That Work",
    description: "Simon Venturi - Software engineer and co-founder of MVF. Specializing in pragmatic, performant websites and apps. Recent work and extensive experience.",
    url: "https://venturiwebconsulting.com",
  },
};

export default function Page() {
  // Load tapestry project data
  const tapestryPath = path.join(process.cwd(), "content", "projects", "tapestry.json");
  const tapestryData = JSON.parse(fs.readFileSync(tapestryPath, "utf8"));

  return (
    <>
      <StructuredData />
      <section id="intro" className="section !pt-0">
        <div className="container">
          <h1 className="h1 mb-4">Turning ideas into results — for good.</h1>
          <p className="lead mb-6">I'm Simon Venturi, software engineer & cofounder of <a href="https://www.mvfglobal.com/" target="_blank" className="underline">MVF</a>, which in 2013 was the <a href="https://www.hiscox.co.uk/business-blog/tech-track-100-mvf-became-fastest-growing-tech-company" target="_blank" className="underline">fastest growing tech company in the UK</a>. I helped build MVF into a global enterprise, then relocated to the South Hams in 2019 with the freedom to pursue passion projects.</p>
          <p className="lead mb-6">I build clear, high-performing websites for organisations that want to grow. I love helping ventures succeed online.</p>
          <div className="flex justify-center mb-8 md:hidden">
            <a href="/contact" className="inline-flex items-center justify-center px-4 py-2 text-lg font-semibold text-white bg-orange-600 hover:bg-orange-800 transition-colors rounded-md">GET IN TOUCH</a>
          </div>
          <p className="lead mb-6">I have a wealth of web experience and know that when it comes to ideas, templated solutions aren't always the best fit.</p>
          <p className="lead mb-6">From small businesses to social enterprises, I believe the web should work better for everyone. Whether you need a new website, want to optimise an existing one, or have questions about a project, I'm here to help.</p>
          <div className="justify-center hidden md:flex">
            <a href="/contact" className="inline-flex items-center justify-center px-4 py-2 text-lg font-semibold text-white bg-orange-600 hover:bg-orange-800 transition-colors rounded-md">GET IN TOUCH</a>
          </div>
        </div>
      </section >

      <section id="work" className="section bg-neutral-50">
        <div className="container">
          <h2 className="h2 mb-6">Work</h2>

          {/* Recent Project */}
          <div className="mb-10">
            <div className="bg-white p-6 border border-neutral-200">
              <div className="flex items-baseline justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold">{tapestryData.title}</h3>
                <span className="text-sm text-neutral-400">{tapestryData.period}</span>
              </div>
              <p className="text-lg text-neutral-600 mb-6">{tapestryData.summary}</p>

              <div className="grid gap-4 sm:grid-cols-2 mb-6">
                {tapestryData.images.slice(0, 4).map((src: string, i: number) => (
                  <div
                    key={i}
                    className="overflow-hidden border border-neutral-200 bg-neutral-50 h-48 transition-colors hover:border-neutral-400"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`${tapestryData.title} screenshot ${i + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href="https://tapestryverticalgardens.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="badge hover:bg-neutral-200"
                >
                  Visit Site →
                </a>
              </div>
            </div>
          </div>

          {/* Past Work Experience */}
          <div className="mt-16">
            <h2 className="h2 mb-4">Experience</h2>
            <div className="bg-white p-6 border border-neutral-200">
              <p className="text-lg text-neutral-600 mb-4">
                I’ve been building for the web since the early 2000s, combining design thinking with practical engineering. I've built a diverse portfolio of web solutions across multiple industries:
              </p>
              <ul className="space-y-3 text-neutral-600">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">•</span>
                  <span><strong>E-commerce platforms</strong> with custom functionality and payment integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">•</span>
                  <span><strong>Performance optimisation</strong> for high-traffic websites and applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">•</span>
                  <span><strong>Content management systems</strong> tailored to specific business workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">•</span>
                  <span><strong>API development and integration</strong> connecting systems and services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">•</span>
                  <span><strong>SEO-focused development</strong> ensuring sites rank well and convert visitors</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <a href="/contact" className="inline-flex items-center justify-center px-4 py-2 text-lg font-semibold text-white bg-orange-600 hover:bg-orange-800 transition-colors rounded-md">GET IN TOUCH</a>
          </div>
        </div>
      </section>
    </>
  );
}
