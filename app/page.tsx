import ImageCarousel from "./components/ImageCarousel";
import { getAllProjectImages } from "./utils/getProjectImages";
import StructuredData from "./components/StructuredData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Simon Venturi - Software engineer and co-founder of MVF. Specializing in pragmatic, performant websites and apps. Based in South Hams, UK.",
  openGraph: {
    title: "Venturi Web Consulting - Turning Ideas Into Websites That Work",
    description: "Simon Venturi - Software engineer and co-founder of MVF. Specializing in pragmatic, performant websites and apps.",
    url: "https://venturiwebconsulting.com",
  },
};

export default function Page() {
  const projectImages = getAllProjectImages();

  return (
    <>
      <StructuredData />
      <section id="intro" className="section">
        <div className="container">
          <h1 className="h1 mb-4">Turning ideas into<br />websites that work.</h1>
          <p className="lead mb-6">I'm Simon Venturi — software engineer & cofounder of <a href="https://www.mvfglobal.com/" target="_blank" className="underline hover:text-white transition-colors">MVF</a>, which in 2013 was the <a href="https://www.hiscox.co.uk/business-blog/tech-track-100-mvf-became-fastest-growing-tech-company" target="_blank" className="underline hover:text-white transition-colors">fastest growing tech company in the UK</a>. I build pragmatic, performant sites and apps.</p>
          <p className="lead mb-6">I worked in London for many years and relocated to the South Hams in 2019. I have a wealth of web experience and know that when it comes to ideas, boilerplate, one size fits all solutions don't always fit.</p>
          <p className="lead mb-6">I'm passionate about helping ventures grow and succeed online. Whether you need a new website, want to optimise an existing one, or have questions about a project, I'm here to help. </p>
          <div className="flex gap-3 mb-8">
            <a href="mailto:simon@venturiwebconsulting.com" className="badge hover:bg-neutral-900">Email me</a>
            <a href="/projects" className="badge hover:bg-neutral-900">Projects</a>
          </div>

          {projectImages.length > 0 && (
            <ImageCarousel images={projectImages} />
          )}
        </div>
      </section>
    </>
  );
}
