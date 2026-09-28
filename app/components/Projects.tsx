"use client";

import { projects } from "../../lib/data";
import { Icon, Reveal } from "./shared";

export default function Projects() {
return ( <section id="projects" className="py-20 md:py-28">
{/* Section Header */} <Reveal> <div className="flex items-end justify-between gap-6"> <div> <div className="mb-3 flex items-center gap-2"> <span className="h-px w-8 bg-accent" /> <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
 </span> </div>


        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Projects
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          A collection of applications and tools I've built while
          exploring different technologies and solving real problems.
        </p>
      </div>
    </div>
  </Reveal>

  {/* Project Grid */}
  <div className="mt-12 grid gap-6 md:grid-cols-2">
    {projects.map((project, i) => (
      <Reveal key={project.name} delay={i * 100}>
        <article
          className="
            group relative flex h-full flex-col overflow-hidden
            rounded-3xl border border-edge/70
            bg-surface/70 backdrop-blur-md
            transition-all duration-500 ease-out
            hover:-translate-y-2
            hover:border-accent/30
            hover:shadow-2xl hover:shadow-accent/5
          "
        >
          {/* Hover Glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute -right-20 -top-20
              h-40 w-40 rounded-full
              bg-accent/10 blur-3xl
              opacity-0 transition-opacity duration-500
              group-hover:opacity-100
            "
          />

          {/* Project Visual Header */}
          <div
            className="
              relative flex h-36 items-center justify-between
              overflow-hidden border-b border-edge/50
              bg-background/40 px-6
            "
          >
            {/* Background Grid */}
            <div
              aria-hidden="true"
              className="
                absolute inset-0 opacity-[0.04]
                [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
                [background-size:24px_24px]
              "
            />

            {/* Project Number */}
            <span className="relative z-10 font-mono text-5xl font-bold text-foreground/10 transition-all duration-500 group-hover:text-accent/20 group-hover:scale-110">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Year */}
            <span className="relative z-10 rounded-full border border-edge bg-surface/80 px-3 py-1 font-mono text-[11px] text-muted">
              {project.year}
            </span>

            {/* Corner Arrow */}
            <div
              className="
                absolute bottom-5 right-6
                flex h-9 w-9 items-center justify-center
                rounded-full border border-edge
                text-muted
                transition-all duration-500
                group-hover:-translate-y-1 group-hover:translate-x-1
                group-hover:border-accent/40
                group-hover:text-accent
              "
            >
              <Icon name="external" className="h-4 w-4" />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-6">
            <div>
              <h3
                className="
                  text-xl font-semibold tracking-tight text-foreground
                  transition-colors duration-300
                  group-hover:text-accent
                "
              >
                {project.name}
              </h3>

              <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <ul
              className="mt-6 flex flex-wrap gap-2"
              aria-label="Technologies used"
            >
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="
                    rounded-full border border-edge/70
                    bg-background/60 px-3 py-1
                    font-mono text-[10px] font-medium
                    text-muted
                    transition-all duration-300
                    group-hover:border-edge
                    group-hover:text-foreground
                  "
                >
                  {tech}
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="mt-7 flex items-center gap-3 border-t border-edge/50 pt-5">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.name} source code on GitHub`}
                className="
                  inline-flex items-center gap-2
                  rounded-xl border border-edge
                  bg-background/60 px-4 py-2.5
                  text-xs font-semibold text-foreground
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:border-foreground/30
                  hover:bg-background
                  active:scale-95
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-accent
                "
              >
                <Icon name="github" className="h-4 w-4" />
                Source
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open live demo for ${project.name}`}
                  className="
                    inline-flex items-center gap-2
                    rounded-xl bg-accent
                    px-4 py-2.5
                    text-xs font-semibold text-background
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:opacity-90
                    hover:shadow-lg hover:shadow-accent/20
                    active:scale-95
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-accent
                    focus-visible:ring-offset-2
                  "
                >
                  Live Demo
                  <Icon
                    name="external"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}
            </div>
          </div>

          {/* Bottom Accent */}
          <div
            aria-hidden="true"
            className="
              absolute bottom-0 left-0 h-[2px] w-0
              bg-accent
              transition-all duration-500
              group-hover:w-full
            "
          />
        </article>
      </Reveal>
    ))}
  </div>
</section>


);
}
