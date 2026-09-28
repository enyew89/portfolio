import { site } from "../../lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-edge mt-24">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
        <p>
          Designed &amp; built by <span className="text-foreground">{site.name}</span>.
        </p>
        <p className="font-mono text-xs">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
