---
order: 1
title: Feature customers
summary: Establish a dependable customer feature from a small, testable slice.
feature: Customers
estimatedMinutes: 45
status: fixture
---

<!-- DEVELOPMENT FIXTURE: replace this lesson with final workshop content. -->

## Research

Establish the workshop's HVE Core rhythm: gather evidence first, then use it to bound the customer slice.

```prompt
Use HVE Core Research to inspect the customer feature. Identify the current domain model, API/UI entry points, persistence path, tests, and risks. Return evidence with file paths and line references; do not edit files.
```

## Plan

Turn the evidence into an HVE Core Plan: a small implementation slice with explicit acceptance criteria and test seams.

```prompt
Create an HVE Core implementation plan for the smallest vertical customer slice. Include files to change, data flow, validation, tests, and unresolved questions. Wait for approval before editing.
```

## Implement

Implement the approved slice in small changes, keeping the existing conventions intact and preserving the evidence trail.

```prompt
Implement the approved customer slice using the HVE Core plan. Add focused tests for the acceptance criteria, keep the diff narrow, and report validation commands and results.
```

## Review

Review the result against the evidence and acceptance criteria, then record follow-up work for the next HVE Core cycle.

```prompt
Review the customer feature diff as an HVE Core Review: find functional gaps, regressions, security concerns, and missing tests. Cite concrete evidence and propose only actionable follow-ups.
```
