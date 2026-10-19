---
order: 6
title: Feature dashboard
summary: Bring trustworthy operational signals together without hiding their sources.
feature: Dashboard
estimatedMinutes: 50
status: fixture
---

<!-- DEVELOPMENT FIXTURE: replace this lesson with final workshop content. -->

## Research

Bring the accumulated feature signals together by inventorying source metrics, query paths, refresh behavior, and existing component patterns.

```prompt
Use HVE Core Research to inspect the data sources and UI conventions needed for a dashboard. Identify query cost, freshness, empty/error states, permissions, and existing tests. Cite the relevant code.
```

## Plan

Use HVE Core Plan to start with a small set of decisions that help users act, rather than a large collection of counters.

```prompt
Plan a focused dashboard slice with three or fewer decision-support signals. Define source queries, loading/error/empty states, refresh semantics, accessibility, and acceptance tests.
```

## Implement

Make each displayed signal traceable to a source and resilient to partial failure, as agreed in the HVE Core plan.

```prompt
Implement the approved dashboard slice. Reuse existing data-access and presentation patterns, isolate partial failures, and add tests for data mapping and states.
```

## Review

Use HVE Core Review to assess whether the dashboard is accurate, useful, and honest about freshness.

```prompt
Review the dashboard diff for misleading aggregation, stale data, performance risks, authorization gaps, accessibility issues, and weak tests. Return evidence-backed findings.
```
