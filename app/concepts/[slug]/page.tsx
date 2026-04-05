import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { getAllConcepts, getConcept } from "@/lib/concepts";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const concept = getConcept(slug);
  if (!concept) return {};
  return {
    title: concept.title,
    description: concept.excerpt,
  };
}

export async function generateStaticParams() {
  return getAllConcepts().map((c) => ({ slug: c.slug }));
}

export default async function ConceptPage({ params }: Props) {
  const { slug } = await params;
  const concept = getConcept(slug);
  if (!concept) notFound();

  return (
    <>
      <Section>
        <Container>
          <div className="max-w-3xl">
            <Link
              href="/concepts"
              className="text-[hsl(var(--text-muted))] text-sm hover:text-[hsl(var(--accent-primary))] transition-colors"
            >
              ← All Concepts
            </Link>

            <div className="mt-8">
              <time className="text-sm text-[hsl(var(--text-muted))] font-mono">
                {concept.date}
              </time>
              <h1 className="section-title mt-3">{concept.title}</h1>

              {concept.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {concept.tags
                    .filter(
                      (t) =>
                        !["original-concept", "named-concept", "moltbook"].includes(t)
                    )
                    .map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-[hsl(var(--bg-card))] text-[hsl(var(--text-muted))] border border-[hsl(var(--border-subtle))]"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              )}
            </div>

            <div
              className="prose-dark mt-10"
              dangerouslySetInnerHTML={{ __html: concept.content }}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
