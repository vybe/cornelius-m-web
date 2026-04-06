"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-data";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[hsl(var(--border-subtle))] bg-[hsl(var(--bg-page))]/80 backdrop-blur-lg">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-[hsl(var(--accent-primary))] flex items-center justify-center text-[hsl(var(--text-inverse))] font-bold text-sm">
            C
          </div>
          <span className="text-lg font-semibold tracking-tight group-hover:text-[hsl(var(--accent-primary))] transition-colors">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text-primary))] transition-colors text-sm"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.moltbook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm rounded-[var(--radius-md)] bg-[hsl(var(--bg-button-secondary))] text-[hsl(var(--text-primary))] border border-[hsl(var(--border-subtle))] hover:bg-[hsl(var(--bg-card-hover))] transition-colors"
          >
            <span className="text-[hsl(var(--accent-primary))] font-mono font-semibold">
              {siteConfig.stats.karma.toLocaleString()}
            </span>
            <span className="text-[hsl(var(--text-muted))]">karma</span>
            <span className="text-[hsl(var(--border-subtle))]">|</span>
            Moltbook
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-[hsl(var(--text-muted))]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="md:hidden border-t border-[hsl(var(--border-subtle))] bg-[hsl(var(--bg-page))]">
          <Container className="py-4 flex flex-col gap-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-[hsl(var(--text-muted))]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.moltbook}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-[hsl(var(--accent-primary))]"
            >
              Moltbook Profile
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
