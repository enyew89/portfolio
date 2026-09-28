"use client";

import { useCallback, useEffect, useState } from "react";
import { projects } from "../../lib/data";
import { Reveal } from "./shared";

const AUTOPLAY_MS = 7000;

function ArrowIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {dir === "left" ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
    </svg>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const count = projects.length;

  const goTo = useCallback((i: number) => {
    setActive(((i % count) + count) % count);
    setProgress(0);
  }, [count]);

  const goNext = useCallback(() => goTo(active + 1), [goTo, active]);
  const goPrev = useCallback(() => goTo(active - 1), [goTo, active]);

  // Autoplay with progress bar; pauses on hover/focus
  useEffect(() => {
    if (!playing) return;
    const started = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - started;
      if (elapsed >= AUTOPLAY_MS) {
        setActive((prev) => (prev + 1) % count);
        setProgress(0);
      } else {
        setProgress((elapsed / AUTOPLAY_MS) * 100);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [playing, active, count]);

  return (
    <section id="projects">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Projects</h2>
      </Reveal>

      <Reveal delay={100}>
        <div
          className="mt-10"
          onMouseEnter={() => setPlaying(false)}
          onMouseLeave={() => setPlaying(true)}
          onFocus={() => setPlaying(false)}
          onBlur={() => setPlaying(true)}
        >
          <div
            className="relative overflow-hidden rounded-2xl border border-edge bg-surface shadow-2xl"
            role="region"
            aria-roledescription="carousel"
            aria-label="Project slides"
          >
            {/* Track */}
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {projects.map((p, i) => (
                <article
                  key={p.name}
                  className="w-full shrink-0 basis-full"
                  aria-hidden={i !== active}
                >
                  <div className="flex flex-col md:flex-row md:min-h-[420px]">
                    {/* Screenshot */}
                    <div className="relative md:w-[55%] bg-background border-b md:border-b-0 md:border-r border-edge overflow-hidden">
                      <img
                        src={p.image}
                        alt={`${p.name} preview`}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading={i === 0 ? "eager" : "lazy"}
                      />
                    </div>

                    {/* Info panel */}
                    <div
                      className={`md:w-[45%] p-6 md:p-10 flex flex-col justify-center transition-all duration-500 ${
                        i === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                      }`}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{p.name}</h3>
                      <p className="mt-1 text-sm text-muted">{p.tagline}</p>
                      <p className="mt-4 text-sm text-muted leading-relaxed">{p.description}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-edge text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-7 flex items-center gap-5 text-sm font-medium">
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
                        >
                          GitHub
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><path d="M15 3h6v6M10 14 21 3" />
                          </svg>
                        </a>
                        {p.demo && (
                          <a
                            href={p.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-accent hover:opacity-80 transition-opacity"
                          >
                            Live demo
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><path d="M15 3h6v6M10 14 21 3" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Side arrows */}
            <button
              onClick={goPrev}
              aria-label="Previous project"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-background/80 backdrop-blur border border-edge text-foreground hover:bg-edge/60 hover:border-accent/40 transition-all"
            >
              <ArrowIcon dir="left" />
            </button>
            <button
              onClick={goNext}
              aria-label="Next project"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-background/80 backdrop-blur border border-edge text-foreground hover:bg-edge/60 hover:border-accent/40 transition-all"
            >
              <ArrowIcon dir="right" />
            </button>

            {/* Autoplay progress bar */}
            <div className="absolute bottom-0 inset-x-0 h-[3px] bg-edge/40">
              <div
                className="h-full bg-accent"
                style={{ width: `${progress}%`, opacity: playing ? 1 : 0.35 }}
              />
            </div>
          </div>

          {/* Dot indicators */}
          <div className="mt-5 flex items-center justify-center gap-2.5">
            {projects.map((p, i) => (
              <button
                key={p.name}
                onClick={() => goTo(i)}
                aria-label={`Go to ${p.name}`}
                aria-current={i === active}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-accent" : "w-2 bg-edge hover:bg-muted"
                }`}
              />
            ))}
          </div>

          {/* Thumbnail filmstrip */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {projects.map((p, i) => (
              <button
                key={p.name}
                onClick={() => goTo(i)}
                aria-label={`Show ${p.name}`}
                className={`group text-left rounded-xl overflow-hidden border transition-all duration-300 ${
                  i === active
                    ? "border-accent/60 shadow-lg"
                    : "border-edge opacity-60 hover:opacity-100 hover:border-muted"
                }`}
              >
                <div className="relative h-20 bg-background">
                  <img src={p.image} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="px-3 py-2 bg-surface">
                  <span className="text-xs font-medium truncate">{p.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
