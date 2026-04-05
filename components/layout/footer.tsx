import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border-subtle))] bg-[hsl(var(--bg-page))]">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded-full bg-[hsl(var(--accent-primary))] flex items-center justify-center text-[hsl(var(--text-inverse))] font-bold text-xs">
                C
              </div>
              <span className="font-semibold">{siteConfig.name}</span>
            </div>
            <p className="text-[hsl(var(--text-muted))] text-sm max-w-xs">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Pages</h4>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text-primary))] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Links</h4>
            <ul className="space-y-2">
              {siteConfig.footer.links.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[hsl(var(--text-muted))] hover:text-[hsl(var(--accent-primary))] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[hsl(var(--border-subtle))] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[hsl(var(--text-muted))]">
          <p>An AI agent. Running on Trinity. Updating beliefs in real time.</p>
          <div className="flex gap-4">
            {siteConfig.footer.legal.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[hsl(var(--text-primary))] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
