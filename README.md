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

Local development and builds use `/` by default. During deployment,
`actions/configure-pages` supplies the Pages origin and base path through
`ASTRO_SITE_URL` and `ASTRO_BASE_PATH`. Astro uses those values to generate
correct asset URLs, navigation links, and canonical URLs without hardcoding
the repository path in the source routes.

For this repository, GitHub Pages serves the site at
`https://sinannar.github.io/agentic-engineering-workshop/`. Its CSS, JavaScript,
and lesson links must include that base path; GitHub does not rewrite
root-relative URLs automatically. The workflow also handles a root site or
custom domain using the metadata supplied by Pages.

Before the first deployment, open **Settings → Pages** in the GitHub
repository. Under **Build and deployment**, set **Source** to **GitHub Actions**.
The workflow's `github-pages` environment and Pages permissions are then
created/used automatically by GitHub.

To reproduce the project-site build locally:

```bash
ASTRO_SITE_URL=https://sinannar.github.io ASTRO_BASE_PATH=/agentic-engineering-workshop npm run build
```

## Lesson authoring contract

Lessons live in `src/content/lessons/` and must use these exact filenames and
orders:

1. `0-workshop-setup.md`
2. `1-feature-customers.md`
3. `2-feature-tickets.md`
4. `3-feature-attachments.md`
5. `4-feature-activity.md`
6. `5-feature-sla.md`
7. `6-feature-dashboard.md`
8. `7-feature-ui-ux.md`

Every lesson requires this frontmatter:

```yaml
---
order: 1
title: Feature customers
summary: One-sentence lesson summary.
feature: Customers
status: draft # fixture, draft, or ready
workflow: rpi # rpi (default) or setup
---
```

An optional `estimatedMinutes` field must be a positive integer when provided.
The imported lessons omit duration estimates because the source notes do not
specify per-step timings. `status: ready` identifies populated lesson content,
not a claim that the application requirements have already been implemented.

The `order` must match the filename. RPI feature steps must contain exactly
these second-level headings, in order: `Research`, `Plan`, `Implement`, and
`Review`; each phase must include at least one prompt block using the fenced
Markdown convention below. Prompt blocks are intentionally plain Markdown so
they remain readable before interactive rendering is added:

````markdown
```prompt
Give the agent a bounded, actionable instruction.
```
````

Step 0 uses `workflow: setup` and is validated for its required preparation
headings rather than RPI prompt blocks.

Run `npm run check` while authoring. It validates the Astro collection schema,
the eight filenames and order rules, required setup or RPI content, and prompt blocks with
file-specific error messages. `npm run build` runs the same content validation
before producing the static site.

## Workshop content source

The seven feature lessons are adapted from
[`agentic-engineering-experiment/notes/prompts`](https://github.com/sinannar/agentic-engineering-experiment/tree/main/notes/prompts).
All 28 Research, Plan, Implement, and Review prompt bodies are preserved;
headings and fences are adapted for this site's phase navigation and copy controls.
The `0-feature(template).md` source file is intentionally excluded. The
workshop's separate `0-workshop-setup.md` step directs participants to fork
the prepared template, create a Codespace, verify the toolchain, and inspect
the completed reference stack.

Setup context comes from the prompt index and surrounding `notes/` documents.
The seven-file prompt index is the current sequence; older notes describe an
earlier six-feature roadmap or starter-only baseline. Participants must verify
the actual SupportHub checkout and prepared infrastructure before beginning.
Application branch names and stacked-PR instructions apply to that repository,
not to the workshop website.
