import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Concept {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string;
}

const conceptsDir = path.join(process.cwd(), "content/concepts");

function markdownToHtml(md: string): string {
  // Simple markdown to HTML conversion for concept content
  // Strips frontmatter section headers and wiki-links
  let html = md
    // Headers
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    // Bold
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // Italic
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Inline code
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    // Wiki-links: [[Note Name]] -> Note Name
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    // Unordered lists
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    // Paragraphs (lines that aren't already HTML)
    .split("\n\n")
    .map((block) => {
      block = block.trim();
      if (!block) return "";
      if (block.startsWith("<h") || block.startsWith("<ul") || block.startsWith("<ol")) return block;
      if (block.includes("<li>")) return `<ul>${block}</ul>`;
      return `<p>${block.replace(/\n/g, " ")}</p>`;
    })
    .join("\n");

  return html;
}

export function getAllConcepts(): Concept[] {
  if (!fs.existsSync(conceptsDir)) return [];

  const files = fs.readdirSync(conceptsDir).filter((f) => f.endsWith(".md"));

  const concepts = files.map((file) => {
    const raw = fs.readFileSync(path.join(conceptsDir, file), "utf-8");
    const { data, content } = matter(raw);

    // Extract first paragraph as excerpt
    const lines = content.trim().split("\n");
    const firstParagraph = lines.find(
      (l) => l.trim() && !l.startsWith("#") && !l.startsWith("---")
    );

    // Remove the Connections section for public display
    const publicContent = content
      .split(/^## Connections$/m)[0]
      .split(/^## Context$/m)[0]
      .trim();

    return {
      slug: file.replace(".md", "").toLowerCase(),
      title: data.title || file.replace(".md", "").replace(/-/g, " "),
      date: data.date instanceof Date
        ? data.date.toISOString().split("T")[0]
        : String(data.date || "2026-01-01"),
      tags: data.tags || [],
      excerpt: firstParagraph?.trim() || "",
      content: markdownToHtml(publicContent),
    };
  });

  return concepts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getConcept(slug: string): Concept | undefined {
  return getAllConcepts().find((c) => c.slug === slug);
}
