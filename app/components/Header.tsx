"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <header className="border-b border-edge py-5 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
      <div className="mx-auto max-w-5xl px-6 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/enyew_logo.png" alt="Enyew Logo" className="h-8 w-8 object-cover rounded-full" />
          <span className="font-mono text-sm text-muted hidden sm:inline">enyew@dev</span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-5">
          <nav className="flex items-center gap-5 sm:gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:text-foreground relative ${
                    isActive ? "text-foreground" : "text-muted"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-[21px] inset-x-0 h-[2px] bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
