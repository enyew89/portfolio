"use client";

import { useState } from "react";
import { site } from "../../lib/data";
import { Reveal } from "./shared";

const links = [
  {
    label: "GitHub",
    href: site.github,
    desc: "My code and projects",
  },
  ...(site.linkedin
    ? [
        {
          label: "LinkedIn",
          href: site.linkedin,
          desc: "Professional profile",
        },
      ]
    : []),
];

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (!message) {
      setError("Please write a short message.");
      return;
    }

    setError("");
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") || "").trim(),
          email,
          message,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to send.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send.");
    }
  };

  return (
    <section>
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let&apos;s build something.</h2>
        <p className="mt-4 text-muted max-w-xl leading-relaxed">
          Have an opportunity, project, or just want to talk about tech?
        </p>
      </Reveal>

      <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
        {/* Left: links */}
        <Reveal delay={100}>
          <div className="space-y-3">
            <button
              onClick={copyEmail}
              className="w-full flex items-center justify-between rounded-xl border border-accent/40 bg-surface px-5 py-4 text-left hover:bg-edge/30 transition-colors"
            >
              <span>
                <span className="block text-xs uppercase tracking-widest text-muted">Email</span>
                <span className="block mt-1 font-medium">{site.email}</span>
              </span>
              <span className="text-xs text-accent">{copied ? "copied" : "copy"}</span>
            </button>

            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-edge bg-surface px-5 py-4 hover:border-muted/60 transition-colors"
              >
                <span>
                  <span className="block font-medium">{l.label}</span>
                  <span className="block mt-0.5 text-xs text-muted">{l.desc}</span>
                </span>
                <svg className="w-4 h-4 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><path d="M15 3h6v6M10 14 21 3" />
                </svg>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Right: form */}
        <Reveal delay={200}>
          {status === "sent" ? (
            <div className="h-full rounded-xl border border-edge bg-surface p-8 flex flex-col items-center justify-center text-center">
              <span className="text-accent text-2xl">✓</span>
              <p className="mt-3 font-medium">Message sent. I&apos;ll get back to you soon.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-sm text-muted hover:text-accent transition-colors"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-muted mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-edge bg-surface px-4 py-3 text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-muted mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-edge bg-surface px-4 py-3 text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-muted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about the opportunity or idea…"
                  className="w-full rounded-lg border border-edge bg-surface px-4 py-3 text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors resize-y"
                />
              </div>

              {error && <p className="text-sm text-muted italic">{error}</p>}

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-background hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === "sending" ? "Sending…" : "Send message"}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
                </svg>
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
