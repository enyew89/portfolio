import Link from "next/link";
import { projects } from "../../lib/data";
import { Reveal } from "./shared";

export default function FeaturedProject() {
  const featured = projects.find((p) => p.featured) ?? projects[0];

  return (
    <section>
      <Reveal>
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured work</h2>
          <Link href="/projects" className="text-sm text-muted hover:text-accent transition-colors">
            All projects →
          </Link>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <Link
          href="/projects"
          className="group mt-8 grid md:grid-cols-2 rounded-2xl overflow-hidden border border-edge bg-surface hover:border-muted/60 transition-colors"
        >
          <div className="relative h-56 md:h-auto overflow-hidden bg-background">
            <img
              src={featured.image}
              alt={`${featured.name} preview`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="p-7 md:p-10 flex flex-col justify-center">
            <h3 className="text-2xl font-bold tracking-tight">{featured.name}</h3>
            <p className="mt-2 text-sm text-muted">{featured.tagline}</p>
            <p className="mt-4 text-sm text-muted leading-relaxed">{featured.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-edge text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </Reveal>
    </section>
  );
}
