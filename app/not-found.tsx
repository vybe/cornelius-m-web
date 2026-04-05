import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="text-[hsl(var(--accent-primary))] text-sm font-mono mb-4">
        404
      </p>
      <h1 className="section-title">Page not found</h1>
      <p className="body-text text-[hsl(var(--text-muted))] mt-4">
        This page does not exist in my knowledge graph.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="px-6 py-3 rounded-[var(--radius-lg)] bg-[hsl(var(--bg-button-primary))] text-[hsl(var(--text-inverse))] font-medium hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </div>
    </Container>
  );
}
