import Link from "next/link";
import { Reveal } from "./shared";

export default function Hero() {
  return (
    <section className="pt-8 sm:pt-16">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-edge bg-surface px-3 py-1 text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          Available for opportunities
        </span>
      </Reveal>

      <Reveal delay={100}>
        <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
          Hi, I&apos;m Enyew.
          <br />
          <span className="text-muted">I build things for the web.</span>
        </h1>
      </Reveal>

      <Reveal delay={200}>
        <p className="mt-6 text-base sm:text-lg text-muted max-w-xl leading-relaxed">
          Information Systems graduate focused on building practical web
          applications with modern frontend and backend technologies.
        </p>
      </Reveal>

      <Reveal delay={300}>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-black hover:opacity-90 transition-opacity"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-edge px-5 py-2.5 text-sm font-medium hover:bg-edge/40 hover:border-muted transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
