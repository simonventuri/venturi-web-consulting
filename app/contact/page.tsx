import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Simon Venturi for web development services. Custom websites, performance optimization, SEO, and technical consulting.",
  openGraph: {
    title: "Contact - Venturi Web Consulting",
    description: "Get in touch with Simon Venturi for web development services. Custom websites, performance optimization, SEO, and technical consulting.",
    url: "https://venturiwebconsulting.com/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="section !pt-0">
      <div className="container">
        <h1 className="h1 mb-6">Get in touch</h1>
        <div className="max-w-2xl">
          <p className="lead mb-8">
            Ready to build something great? I'd love to hear about your project and discuss how we can work together.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="h2 mb-4">Let's talk</h2>
              <p className="mb-4">
                I'm here to help. Drop me a line and I'll get back to you within 24 hours.
              </p>
              <a
                href="mailto:simon@venturiwebconsulting.com"
                className="badge hover:bg-neutral-200 text-lg px-6 py-3"
              >
                simon@venturiwebconsulting.com
              </a>
            </div>

            <div className="pt-6">
              <h3 className="text-lg mb-3">What I can help with:</h3>
              <ul className="space-y-2">
                <li>• Custom website development</li>
                <li>• Performance optimisation</li>
                <li>• SEO-focused implementations</li>
                <li>• Content management systems</li>
                <li>• Technical consulting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}