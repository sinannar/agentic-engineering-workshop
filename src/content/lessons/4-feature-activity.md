---
order: 4
title: Feature activity
summary: Make important customer and ticket events easy to understand and audit.
feature: Activity
estimatedMinutes: 45
status: fixture
---

<!-- DEVELOPMENT FIXTURE: replace this lesson with final workshop content. -->

## Research

Turn the earlier feature changes into observable history by finding existing events, audit records, timestamps, and presentation conventions.

```prompt
Use HVE Core Research to trace the repository's activity and audit behavior: event creation, storage, ordering, display, and tests. Distinguish facts from assumptions and cite evidence.
```

## Plan

Use HVE Core Plan to define an activity slice that is useful to people and stable enough for future automation.

```prompt
Plan a focused activity timeline slice. Define event shape, ordering, actor visibility, empty/loading/error states, acceptance criteria, and tests.
```

## Implement

Keep event recording and rendering separated so the feature can evolve without duplicating truth or weakening the HVE Core evidence trail.

```prompt
Implement the approved activity slice using existing event and UI patterns. Add deterministic tests for ordering, actor labels, empty state, and error handling.
```

## Review

Use HVE Core Review to check that the timeline is accurate, comprehensible, and appropriately scoped for the audience.

```prompt
Review the activity feature for correctness, ordering consistency, privacy, accessibility, and unnecessary coupling. Report prioritized findings with concrete remediation.
```
