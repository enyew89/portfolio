import Link from "next/link";
import { site } from "../../lib/data";
import { Reveal } from "./shared";

export default function HomeContact() {
  return (
    <section>
      <Reveal>
        <div className="rounded-2xl border border-edge bg-surface p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let&apos;s build something.</h2>
          <p className="mt-4 text-muted max-w-md mx-auto leading-relaxed">
            Have an opportunity, project, or just want to talk about tech?
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-black hover:opacity-90 transition-opacity"
            >
              Get in touch
            </Link>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-edge px-5 py-2.5 text-sm font-medium hover:bg-edge/40 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
