import { experience } from "../../lib/data";
import { Reveal } from "./shared";

export default function Experience() {
  return (
    <section id="experience">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experience</h2>
      </Reveal>

      <div className="mt-10 space-y-0 border-l-2 border-edge ml-2">
        {experience.map((exp, i) => (
          <Reveal key={exp.title} delay={i * 100}>
            <div className="relative pl-8 pb-12 last:pb-0">
              {/* Node */}
              <span
                className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 ${
                  exp.current
                    ? "bg-accent border-accent shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                    : "bg-background border-muted"
                }`}
              />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold">{exp.title}</h3>
                <span className="font-mono text-xs text-muted">{exp.period}</span>
                {exp.current && (
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent border border-accent/40 rounded-full px-2 py-0.5">
                    now
                  </span>
                )}
              </div>
              <p className="text-sm text-muted mt-0.5">{exp.place} — {exp.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {exp.points.map((pt, j) => (
                  <li key={j} className="flex gap-2.5">
                    <span className="mt-[9px] h-1 w-1 rounded-full bg-muted shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-edge text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
