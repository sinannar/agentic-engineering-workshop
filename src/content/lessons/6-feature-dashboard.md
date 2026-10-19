---
order: 6
title: "Support Dashboard and Operational Polish"
summary: "Add support metrics, justified Redis caching, resilience, and end-to-end verification of the distributed application."
feature: "Dashboard"
status: ready
---

**Branch:** `feature/dashboard`

**PR target:** `feature/sla`

**Usage:** Invoke each skill separately in GitHub Copilot CLI. Review each stage's output before proceeding.

## What you will build

- Dashboard metrics: open tickets, status/priority breakdown, at-risk and breached SLAs.
- Redis caching for justified read-heavy operations with TTL and invalidation rules.
- Improve resilience, health checks, structured logs and distributed OpenTelemetry traces.
- Validate full customer-to-ticket-to-attachment-to-audit-to-SLA journeys.
- Aspire integration tests and browser-level UI verification where practical.
- Document operational startup, known limitations and verification evidence.

## Acceptance criteria

- Dashboard figures reflect authoritative data.
- Cache invalidation prevents materially stale critical results.
- Distributed resources, end-to-end workflows and tests pass.

## Research

Invoke `/rpi-research` in GitHub Copilot CLI with the prompt below.
Inspect the research output before moving on. This phase must not change application code.

```prompt
Research the implementation of **SupportHub Support Dashboard and Operational Polish** for the stacked PR `feature/dashboard` (parent `feature/sla`).

Feature: **Support Dashboard and Operational Polish**. Current branch: `feature/dashboard`; PR parent: `feature/sla`.

Read `.github/copilot-instructions.md` and relevant existing code before making decisions. Respect service data ownership and use repository-local Aspire Skills for version-specific infrastructure, service discovery and runtime diagnostics. Keep work limited to this feature and do not implement later stack layers.

Feature requirements:
- Dashboard metrics: open tickets, status/priority breakdown, at-risk and breached SLAs.
- Redis caching for justified read-heavy operations with TTL and invalidation rules.
- Improve resilience, health checks, structured logs and distributed OpenTelemetry traces.
- Validate full customer-to-ticket-to-attachment-to-audit-to-SLA journeys.
- Aspire integration tests and browser-level UI verification where practical.
- Document operational startup, known limitations and verification evidence.

Inspect affected projects, current Aspire AppHost references, client integrations, existing tests and relevant domain contracts. Identify recommended design, APIs, data model/storage, frontend changes, edge cases, dependencies, implementation risks and test strategy. Capture clear acceptance criteria.

Research only. Do not modify application code, implement features, or create pull requests.
```

## Plan

Invoke `/rpi-plan` in GitHub Copilot CLI with the prompt below.
Review and approve the plan before implementation. Revise it if the scope or acceptance criteria are incomplete.

```prompt
Create a concrete, testable implementation plan for **SupportHub Support Dashboard and Operational Polish** using the completed research artifacts.

Feature: **Support Dashboard and Operational Polish**. Current branch: `feature/dashboard`; PR parent: `feature/sla`.

Read `.github/copilot-instructions.md` and relevant existing code before making decisions. Respect service data ownership and use repository-local Aspire Skills for version-specific infrastructure, service discovery and runtime diagnostics. Keep work limited to this feature and do not implement later stack layers.

Planned scope:
- Dashboard metrics: open tickets, status/priority breakdown, at-risk and breached SLAs.
- Redis caching for justified read-heavy operations with TTL and invalidation rules.
- Improve resilience, health checks, structured logs and distributed OpenTelemetry traces.
- Validate full customer-to-ticket-to-attachment-to-audit-to-SLA journeys.
- Aspire integration tests and browser-level UI verification where practical.
- Document operational startup, known limitations and verification evidence.

Break work into small ordered steps. Identify affected files/projects, contracts, infrastructure client registration, tests, Aspire runtime verification, failure cases, and migration or compatibility considerations where applicable.

Acceptance criteria:
- Dashboard figures reflect authoritative data.
- Cache invalidation prevents materially stale critical results.
- Distributed resources, end-to-end workflows and tests pass.

Plan only. Do not change application code or create a pull request. Present the plan for approval before implementation.
```

## Implement

Invoke `/rpi-implement` in GitHub Copilot CLI with the prompt below.
Use the approved plan, inspect the changes, and check the reported tests and Aspire runtime evidence.

```prompt
Implement the approved plan for **SupportHub Support Dashboard and Operational Polish** on `feature/dashboard`.

Feature: **Support Dashboard and Operational Polish**. Current branch: `feature/dashboard`; PR parent: `feature/sla`.

Read `.github/copilot-instructions.md` and relevant existing code before making decisions. Respect service data ownership and use repository-local Aspire Skills for version-specific infrastructure, service discovery and runtime diagnostics. Keep work limited to this feature and do not implement later stack layers.

Required scope:
- Dashboard metrics: open tickets, status/priority breakdown, at-risk and breached SLAs.
- Redis caching for justified read-heavy operations with TTL and invalidation rules.
- Improve resilience, health checks, structured logs and distributed OpenTelemetry traces.
- Validate full customer-to-ticket-to-attachment-to-audit-to-SLA journeys.
- Aspire integration tests and browser-level UI verification where practical.
- Document operational startup, known limitations and verification evidence.

Follow the approved research and plan, implement incrementally, and add meaningful automated tests. Use Aspire Skills for service wiring, integration, health checks and runtime diagnosis. Run solution build, relevant tests and Aspire integration verification where available; fix failures within this feature's scope.

Do not implement later features, rename unrelated projects, or submit a pull request. Report changes, tests run and any unverified acceptance criteria.
```

## Review

Invoke `/rpi-review` in GitHub Copilot CLI with the prompt below.
Resolve important findings before preparing the PR. If needed, repeat Research, Plan, and Implement, then run Review again.

```prompt
Review **SupportHub Support Dashboard and Operational Polish** on `feature/dashboard` against the approved research, plan and acceptance criteria.

Feature: **Support Dashboard and Operational Polish**. Current branch: `feature/dashboard`; PR parent: `feature/sla`.

Read `.github/copilot-instructions.md` and relevant existing code before making decisions. Respect service data ownership and use repository-local Aspire Skills for version-specific infrastructure, service discovery and runtime diagnostics. Keep work limited to this feature and do not implement later stack layers.

Acceptance criteria:
- Dashboard figures reflect authoritative data.
- Cache invalidation prevents materially stale critical results.
- Distributed resources, end-to-end workflows and tests pass.

Inspect changes for correctness, service boundaries, validation, security, resilience, observability, and test quality. Run `dotnet build SupportHub.slnx`, relevant `dotnet test` commands, and Aspire runtime/integration checks where available. Examine health, logs and traces; report any checks that cannot be performed.

Report findings ordered by severity, missing coverage, remaining risks, and whether the feature is ready for its stacked PR. Do not submit the PR.
```

## Stacked PR handoff

After Review, inspect the diff, commit the approved changes, and use the application repository's `gh-stack` skill to prepare `feature/dashboard` targeting `feature/sla`. Include build, test, and Aspire verification evidence, and state any checks you could not run. Submit or update the PR only after explicit approval.

Create the next layer, `feature/ui-ux`, on top of `feature/dashboard` before continuing to the next workshop step. Keep later features out of the current PR.

[Source prompts](https://github.com/sinannar/agentic-engineering-experiment/blob/main/notes/prompts/6-feature-dashboard.md). These prompts describe intended behavior; verify the actual application state before claiming acceptance criteria are met.
