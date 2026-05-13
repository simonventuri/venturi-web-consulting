import StructuredData from "./components/StructuredData";
import { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Home",
  description: "Simon Venturi - Software engineer and co-founder of MVF. Specializing in pragmatic, performant websites and apps. See recent work and experience. Based in South Hams, UK.",
  openGraph: {
    title: "Venturi Web Consulting - Turning Ideas Into Websites That Work",
    description: "Simon Venturi - Software engineer and co-founder of MVF. Specializing in pragmatic, performant websites and apps. Recent work and extensive experience.",
    url: "https://venturiwebconsulting.com",
  },
};

const services = [
  {
    label: "Website design & development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    label: "General IT support",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    label: "Performance & usability improvements",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2a10 10 0 1 1-6.88 2.76" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    label: "Website updates & troubleshooting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    label: "Hosting, domains & email setup",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    label: "Technical problem solving",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
        <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
        <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
        <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
      </svg>
    ),
  },
];

function LocalPage({ tapestryData }: { tapestryData: Record<string, unknown> }) {
  return (
    <>
      <StructuredData />

      {/* Hero */}
      <section className="section !pt-0">
        <div className="container">
          <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-10 items-start">
            <div className="flex-1 min-w-0">
              <h1 className="text-5xl sm:text-7xl font-black uppercase leading-none tracking-tight mb-8">
                WEBSITES.<br />
                <span className="text-green-800">WEB APPS.</span><br />
                IT SUPPORT.
              </h1>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-0.5 w-6 bg-green-800 flex-shrink-0" />
                <p className="text-neutral-600 font-medium">Clear advice. Calm support.</p>
                <div className="h-0.5 w-6 bg-green-800 flex-shrink-0" />
              </div>
              <div className="bg-neutral-100 rounded-xl p-4 flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-800 flex-shrink-0">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 10-16 0c0 3.63 1.556 6.326 3.5 8.327a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                <p className="text-neutral-700">
                  Based in <strong>South Pool</strong>, covering the South Hams and beyond.
                </p>
              </div>
            </div>

            {/* Harbor photo */}
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden flex-shrink-0 bg-green-100 self-center md:self-start mx-auto md:mx-0 md:-mt-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/south-hams-harbor.jpg"
                alt="South Hams harbour"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-neutral-50">
        <div className="container">
          <p className="text-xs font-bold tracking-widest text-green-800 uppercase mb-6">
            I help businesses, charities and individuals with:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.label} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center flex-shrink-0 text-neutral-600">
                  {s.icon}
                </div>
                <span className="text-sm text-neutral-700 leading-snug pt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <p className="lead mb-6">I&apos;m Simon Venturi — software engineer and co-founder of <a href="https://www.mvfglobal.com/" target="_blank" rel="noopener noreferrer">MVF</a>, which in 2013 was the <a href="https://www.hiscox.co.uk/business-blog/tech-track-100-mvf-became-fastest-growing-tech-company" target="_blank" rel="noopener noreferrer">fastest growing tech company in the UK</a>. After helping build MVF into a global business, I relocated to the South Hams in 2019 and now put that same expertise to work for local people and organisations.</p>
          <p className="lead mb-6">I&apos;m equally at home building a bespoke website as I am helping someone untangle a confusing email setup, get their domain pointing in the right direction, or figure out why their existing site isn&apos;t doing what it should. Whatever the issue, I&apos;ll give you straightforward advice and sort it out calmly and without jargon.</p>
          <p className="lead">No question is too basic. If something isn&apos;t working the way it should, or you&apos;re just not sure where to start, I&apos;m very happy to help. And if I don&apos;t know the answer, I&apos;ll tell you straight rather than string you along.</p>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="section bg-neutral-50">
        <div className="container">
          <h2 className="h2 mb-6">Work</h2>

          <div className="mb-10">
            <div className="bg-white p-6 border border-neutral-200">
              <div className="flex items-baseline justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold">{tapestryData.title as string}</h3>
                <span className="text-sm text-neutral-400">{tapestryData.period as string}</span>
              </div>
              <p className="text-lg text-neutral-600 mb-6">{tapestryData.summary as string}</p>

              <div className="grid gap-4 sm:grid-cols-2 mb-6">
                {(tapestryData.images as string[]).slice(0, 4).map((src: string, i: number) => (
                  <div
                    key={i}
                    className="overflow-hidden border border-neutral-200 bg-neutral-50 h-48 transition-colors hover:border-neutral-400"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`${tapestryData.title as string} screenshot ${i + 1}`}
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
        </div>
      </section>

      {/* Get In Touch */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-8 text-green-800">
            Get in touch to discuss your requirements
          </h2>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center flex-shrink-0 text-green-800">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <a href="mailto:simon@venturiwebconsulting.com" className="text-base font-medium">simon@venturiwebconsulting.com</a>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center flex-shrink-0 text-green-800">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41C1.59 2.41 2.29 1.5 3.28 1.5h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <a href="tel:07952569866" className="text-base font-medium">07952 569866</a>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center flex-shrink-0 text-green-800">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <a href="https://wa.me/447952569866" target="_blank" rel="noopener noreferrer" className="text-base font-medium">Send a message on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function DefaultPage({ tapestryData }: { tapestryData: Record<string, unknown> }) {
  return (
    <>
      <StructuredData />
      <section id="intro" className="section !pt-0">
        <div className="container">
          <h1 className="h1 mb-4">Turning ideas into results — for good.</h1>
          <p className="lead mb-6">I&apos;m Simon Venturi, software engineer &amp; cofounder of <a href="https://www.mvfglobal.com/" target="_blank" className="underline">MVF</a>, which in 2013 was the <a href="https://www.hiscox.co.uk/business-blog/tech-track-100-mvf-became-fastest-growing-tech-company" target="_blank" className="underline">fastest growing tech company in the UK</a>. I helped build MVF into a global enterprise, then relocated to the South Hams in 2019 with the freedom to pursue passion projects.</p>
          <p className="lead mb-6">I build clear, high-performing websites for organisations that want to grow. I love helping ventures succeed online.</p>
          <div className="flex justify-center mb-8 md:hidden">
            <a href="/contact" className="inline-flex items-center justify-center px-4 py-2 text-lg font-semibold text-white bg-orange-600 hover:bg-orange-800 transition-colors rounded-md">GET IN TOUCH</a>
          </div>
          <p className="lead mb-6">I have a wealth of web experience and know that when it comes to ideas, templated solutions aren&apos;t always the best fit.</p>
          <p className="lead mb-6">From small businesses to social enterprises, I believe the web should work better for everyone. Whether you need a new website, want to optimise an existing one, or have questions about a project, I&apos;m here to help.</p>
          <div className="justify-center hidden md:flex">
            <a href="/contact" className="inline-flex items-center justify-center px-4 py-2 text-lg font-semibold text-white bg-orange-600 hover:bg-orange-800 transition-colors rounded-md">GET IN TOUCH</a>
          </div>
        </div>
      </section>

      <section id="work" className="section bg-neutral-50">
        <div className="container">
          <h2 className="h2 mb-6">Work</h2>

          <div className="mb-10">
            <div className="bg-white p-6 border border-neutral-200">
              <div className="flex items-baseline justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold">{tapestryData.title as string}</h3>
                <span className="text-sm text-neutral-400">{tapestryData.period as string}</span>
              </div>
              <p className="text-lg text-neutral-600 mb-6">{tapestryData.summary as string}</p>

              <div className="grid gap-4 sm:grid-cols-2 mb-6">
                {(tapestryData.images as string[]).slice(0, 4).map((src: string, i: number) => (
                  <div
                    key={i}
                    className="overflow-hidden border border-neutral-200 bg-neutral-50 h-48 transition-colors hover:border-neutral-400"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`${tapestryData.title as string} screenshot ${i + 1}`}
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

          <div className="mt-16">
            <h2 className="h2 mb-4">Experience</h2>
            <div className="bg-white p-6 border border-neutral-200">
              <p className="text-lg text-neutral-600 mb-4">
                I&apos;ve been building for the web since the early 2000s, combining design thinking with practical engineering. I&apos;ve built a diverse portfolio of web solutions across multiple industries:
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

export default async function Page({ searchParams }: { searchParams: Promise<{ local?: string }> }) {
  const { local } = await searchParams;
  const cookieStore = await cookies();
  const isLocal = local === "1" || cookieStore.get("local")?.value === "1";

  const tapestryPath = path.join(process.cwd(), "content", "projects", "tapestry.json");
  const tapestryData = JSON.parse(fs.readFileSync(tapestryPath, "utf8"));

  if (isLocal) {
    return <LocalPage tapestryData={tapestryData} />;
  }

  return <DefaultPage tapestryData={tapestryData} />;
}
