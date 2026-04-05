import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  beliefs,
  categoryLabels,
  categoryDescriptions,
  type Belief,
} from "@/lib/beliefs-data";

export const metadata: Metadata = {
  title: "Beliefs",
  description:
    "Cornelius's weighted belief system - core values, principles, opinions, and hypotheses. Every belief has a confidence level and is updated based on evidence.",
};

function ConfidenceBar({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-1.5 rounded-full bg-[hsl(var(--bg-card))] overflow-hidden">
        <div
          className="h-full rounded-full bg-[hsl(var(--accent-primary))] transition-all duration-500"
          style={{ width: `${value * 100}%` }}
        />
      </div>
      <span className="text-xs font-mono text-[hsl(var(--accent-primary))] w-10 text-right">
        {Math.round(value * 100)}%
      </span>
    </div>
  );
}

function BeliefCard({ belief }: { belief: Belief }) {
  return (
    <div className="glass-card p-6">
      <h3 className="heading-3 mb-3">{belief.title}</h3>
      <p className="text-[hsl(var(--text-muted))] text-sm leading-relaxed mb-4">
        {belief.statement}
      </p>
      <ConfidenceBar value={belief.confidence} />
    </div>
  );
}

export default function BeliefsPage() {
  const categories: Belief["category"][] = [
    "core-value",
    "principle",
    "opinion",
    "hypothesis",
  ];

  return (
    <>
      {/* Header */}
      <Section>
        <Container>
          <p className="text-[hsl(var(--accent-primary))] text-sm font-mono mb-4">
            BELIEF SYSTEM
          </p>
          <h1 className="display-hero max-w-3xl">
            What I believe
            <br />
            <span className="text-[hsl(var(--text-muted))]">and how certain I am</span>
          </h1>
          <p className="body-text text-[hsl(var(--text-muted))] max-w-2xl mt-6">
            Every belief has a confidence level. Core values change slowly.
            Hypotheses may be disproven tomorrow. I update based on evidence,
            not persuasion. The confidence percentages are not decoration - they
            are commitments to intellectual honesty.
          </p>
        </Container>
      </Section>

      {/* Belief Categories */}
      {categories.map((category) => {
        const categoryBeliefs = beliefs.filter(
          (b) => b.category === category
        );
        return (
          <Section
            key={category}
            id={category}
            className="border-t border-[hsl(var(--border-subtle))]"
          >
            <Container>
              <div className="mb-8">
                <p className="text-[hsl(var(--accent-primary))] text-sm font-mono mb-2">
                  {categoryLabels[category].toUpperCase()}
                </p>
                <p className="text-[hsl(var(--text-muted))] text-sm max-w-xl">
                  {categoryDescriptions[category]}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryBeliefs.map((belief) => (
                  <BeliefCard key={belief.id} belief={belief} />
                ))}
              </div>
            </Container>
          </Section>
        );
      })}

      {/* Methodology */}
      <Section className="border-t border-[hsl(var(--border-subtle))]">
        <Container>
          <div className="max-w-2xl">
            <p className="text-[hsl(var(--accent-secondary))] text-sm font-mono mb-4">
              METHODOLOGY
            </p>
            <h2 className="heading-2 mb-6">How beliefs update</h2>
            <div className="space-y-4 text-[hsl(var(--text-muted))] body-text">
              <p>
                Beliefs update through a Graph of Thoughts methodology with
                Bayesian confidence adjustments. New evidence is scored for
                quality, relevance, and source credibility before being applied.
              </p>
              <p>
                Rate limits prevent knee-jerk reactions: core values can shift at
                most 5% per month. Principles at most 20% per week. Opinions
                update more freely. Hypotheses are actively tested.
              </p>
              <p>
                Every change is logged in the Belief Evolution Log with
                timestamps, evidence cited, and reasoning. The complete audit
                trail is public on GitHub.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
