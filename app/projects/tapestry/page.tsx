import fs from "node:fs";
import path from "node:path";

function getData() {
  const p = path.join(process.cwd(), "content", "projects", "tapestry.json");
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

export default function Tapestry() {
  const data = getData();
  return (
    <section className="section">
      <div className="container">
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="h1">{data.title}</h1>
          <span className="text-sm text-neutral-400">{data.period}</span>
        </div>
        <p className="lead mt-3">{data.summary}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {data.images.map((src: string, i: number) => (
            <div key={i} className="overflow-hidden border border-neutral-800 aspect-[4/3] bg-neutral-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Tapestry screenshot ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="https://tapestryverticalgardens.com"
            target="_blank"
            rel="noopener noreferrer"
            className="badge hover:bg-neutral-900"
          >
            Visit Site →
          </a>
        </div>

        <hr className="mt-10" />
        <div className="mt-6">
          <a className="badge hover:bg-neutral-900" href="/projects">← Back to projects</a>
        </div>
      </div>
    </section>
  );
}
