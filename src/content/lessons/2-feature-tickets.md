---
order: 2
title: Feature tickets
summary: Shape ticket intake around clear ownership, state, and customer context.
feature: Tickets
estimatedMinutes: 45
status: fixture
---

<!-- DEVELOPMENT FIXTURE: replace this lesson with final workshop content. -->

## Research

Build on the customer foundation by tracing how work enters the system and where status, ownership, and customer context are represented.

```prompt
Use HVE Core Research to inspect ticket intake and lifecycle behavior. Find the relevant models, handlers, views, persistence, and tests. Summarize current behavior and constraints with evidence only.
```

## Plan

Use the HVE Core Plan to define a vertical slice that makes ticket state visible without prematurely redesigning the workflow.

```prompt
Plan the smallest ticket feature that improves intake and ownership. List acceptance criteria, impacted files, validation rules, and tests. Call out assumptions before implementation, as required by HVE Core.
```

## Implement

Build the approved change while preserving existing ticket lifecycle behavior and the HVE Core evidence trail.

```prompt
Implement the approved ticket slice. Follow existing patterns, add regression coverage for state and ownership, and run the narrowest useful checks from the HVE Core plan.
```

## Review

Use HVE Core Review to look for invalid transitions, missing authorization checks, and confusing user feedback.

```prompt
Review the ticket implementation as a maintainer. Check lifecycle edge cases, authorization, persistence consistency, UX clarity, and test quality. Return prioritized findings with evidence.
```
