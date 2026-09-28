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
          <Link href="/projects" className="text-sm text-muted hover:text-foreground transition-colors">
            All projects →
          </Link>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <Link
          href="/projects"
          className="group mt-8 block rounded-xl border border-edge bg-surface hover:border-muted/50 transition-colors"
        >
          <div className="p-7 md:p-10">
            <p className="text-xs text-muted">{featured.year}</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight">{featured.name}</h3>
            <p className="mt-1 text-sm text-muted">{featured.tagline}</p>
            <p className="mt-4 text-sm text-muted leading-relaxed">{featured.description}</p>
            <p className="mt-4 text-xs text-muted/80">{featured.tech.join("  ·  ")}</p>
          </div>
        </Link>
      </Reveal>
    </section>
  );
}
