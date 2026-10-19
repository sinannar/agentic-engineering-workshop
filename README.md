# agentic-engineering-workshop
Hands-on agentic engineering workshop using .NET Aspire, GitHub Copilot CLI, Aspire Skills, and HVE Core.

## Run locally

Install the locked dependencies and start the Astro development server:

```bash
npm ci
npm run dev
```

Use `npm run check` to validate Astro types and the lesson authoring contract.
Use `npm run build` to validate the lessons and generate the static site in
`dist/`. Run `npm run preview` to serve that production build locally.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy-pages.yml` runs on pushes to `main`
and on manual dispatch. It installs with `npm ci`, runs the checks, builds the
static Astro site, uploads `dist/` as a Pages artifact, and deploys it with
the GitHub Pages deployment action.

Astro generates routes and assets from the domain root, with no repository-path
prefix:

- Site: `https://sinannar.github.io`
- Base path: `/` (Astro default)

Deploy this build at the domain root. GitHub Pages does not automatically rewrite
root-relative links for project sites served under a repository-name path.

Before the first deployment, open **Settings → Pages** in the GitHub
repository. Under **Build and deployment**, set **Source** to **GitHub Actions**.
The workflow's `github-pages` environment and Pages permissions are then
created/used automatically by GitHub. If the repository is transferred or
renamed or uses a custom domain, update `site` in `astro.config.mjs` to match the
deployment origin.

## Lesson authoring contract

Lessons live in `src/content/lessons/` and must use these exact filenames and
orders:

1. `1-feature-customers.md`
2. `2-feature-tickets.md`
3. `3-feature-attachments.md`
4. `4-feature-activity.md`
5. `5-feature-sla.md`
6. `6-feature-dashboard.md`
7. `7-feature-ui-ux.md`

Every lesson requires this frontmatter:

```yaml
---
order: 1
title: Feature customers
summary: One-sentence lesson summary.
feature: Customers
estimatedMinutes: 45
status: draft # fixture, draft, or ready
---
```

The `order` must match the filename. Lesson content must contain exactly these
second-level headings, in order: `Research`, `Plan`, `Implement`, and `Review`.
Each phase must include at least one prompt block using the fenced Markdown
convention below. Prompt blocks are intentionally plain Markdown so they remain
readable before interactive rendering is added:

````markdown
```prompt
Give the agent a bounded, actionable instruction.
```
````

Run `npm run check` while authoring. It validates the Astro collection schema,
the seven filenames and order rules, required phases, and prompt blocks with
file-specific error messages. `npm run build` runs the same content validation
before producing the static site. Files currently marked `status: fixture` are
development fixtures and should be replaced with final instructional content.
