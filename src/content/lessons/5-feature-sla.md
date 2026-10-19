---
order: 5
title: Feature SLA
summary: Express service-level expectations as reliable, explainable signals.
feature: SLA
estimatedMinutes: 50
status: fixture
---

<!-- DEVELOPMENT FIXTURE: replace this lesson with final workshop content. -->

## Research

Use the activity evidence as context while tracing the clocks, business rules, timezone assumptions, and escalation behavior that an SLA depends on.

```prompt
Use HVE Core Research for SLA-related concepts and time calculations. Identify clocks, timezone handling, statuses, escalation paths, and tests. Highlight ambiguity and risky assumptions.
```

## Plan

Use HVE Core Plan to define a thin SLA slice with explicit time semantics and testable boundaries.

```prompt
Plan the smallest SLA feature that produces an explainable status. Specify time semantics, pause/resume rules, data changes, edge cases, acceptance criteria, and tests.
```

## Implement

Use one source of truth for calculations and make boundary conditions visible in tests and in the HVE Core plan.

```prompt
Implement the approved SLA slice. Keep time calculations deterministic and injectable where appropriate. Add tests around deadlines, timezone boundaries, pauses, and overdue states.
```

## Review

Use HVE Core Review to challenge the result with clock, timezone, and partial-data scenarios.

```prompt
Review the SLA diff for incorrect time math, nondeterminism, misleading labels, and missing operational safeguards. Prioritize findings by customer impact and cite evidence.
```
