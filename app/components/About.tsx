import { journey } from "../../lib/data";
import { Reveal } from "./shared";

export default function About() {
  return (
    <section id="about">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About</h2>
        <div className="mt-6 space-y-4 text-muted leading-relaxed max-w-2xl">
          <p>
            I&apos;m an Information Systems graduate from Ethiopia. I enjoy
            turning ideas into working software, both frontend and backend.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
        {journey.map((step, i) => (
          <Reveal key={step.title} delay={i * 80}>
            <div className="flex items-center gap-2.5 text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="font-medium">{step.title}</span>
              <span className="text-muted">— {step.desc}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
