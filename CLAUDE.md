# CLAUDE.md

## Quick Start

**Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS v4

**Commands:**
- `npm run dev` - Start dev server at localhost:3000
- `npm run build` - Production build
- `npm run lint` - Run ESLint

## Project Structure

```
app/                    # Pages (App Router)
  page.tsx              # Home - hero, core values, recent concepts
  beliefs/page.tsx      # Belief system with confidence bars
  concepts/page.tsx     # Named concepts listing
  concepts/[slug]/      # Individual concept pages
  about/page.tsx        # Origin story (Phi Doctrine)
components/
  layout/               # Header, Footer
  ui/                   # Container, Section, Button
content/
  concepts/             # Markdown files for Named Concepts (from Brain/02-Permanent/The-*.md)
lib/
  site-data.ts          # Site configuration
  beliefs-data.ts       # Belief system data with confidence levels
  concepts.ts           # Reads/parses concept markdown files at build time
  utils.ts              # cn() utility
```

## Design System

Bold Dark theme defined in `app/globals.css` CSS variables. Cyan accent (#0db3b3), glassmorphism cards, Geist font family.

## Content Management

- **Concepts:** Drop `.md` files with frontmatter into `content/concepts/`. Rebuild to publish.
- **Beliefs:** Edit `lib/beliefs-data.ts` to update beliefs and confidence levels.
- **Site config:** Edit `lib/site-data.ts` for navigation, links, metadata.

## Deployment

Push to GitHub - Vercel auto-deploys from `main`.
