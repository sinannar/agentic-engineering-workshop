---
order: 3
title: "Ticket Attachments"
summary: "Add ticket-scoped file operations using Azurite-backed Blob Storage, with validation and consistent attachment metadata."
feature: "Attachments"
status: ready
---

**Branch:** `feature/attachments`

**PR target:** `feature/tickets`

**Usage:** Invoke each skill separately in GitHub Copilot CLI. Review each stage's output before proceeding.

## What you will build

- Upload, list, download and delete attachments for existing tickets.
- Store file content in Azurite-backed Azure Blob Storage (`blobs`); metadata in `ticketsdb`.
- Validate file size, permitted types, ticket existence and access; prevent unsafe filenames/path use.
- Handle failed uploads, orphaned blobs and missing content deliberately.
- Blazor attachment controls and progress/error feedback.
- Integration tests against local Blob Storage.

## Acceptance criteria

- File operations work end-to-end and are ticket-scoped.
- Invalid uploads are rejected and failures handled safely.
- Blob and metadata consistency is tested.

## Research

Invoke `/rpi-research` in GitHub Copilot CLI with the prompt below.
Inspect the research output before moving on. This phase must not change application code.

```prompt
Research the implementation of **SupportHub Ticket Attachments** for the stacked PR `feature/attachments` (parent `feature/tickets`).

Feature: **Ticket Attachments**. Current branch: `feature/attachments`; PR parent: `feature/tickets`.

Read `.github/copilot-instructions.md` and relevant existing code before making decisions. Respect service data ownership and use repository-local Aspire Skills for version-specific infrastructure, service discovery and runtime diagnostics. Keep work limited to this feature and do not implement later stack layers.

Feature requirements:
- Upload, list, download and delete attachments for existing tickets.
- Store file content in Azurite-backed Azure Blob Storage (`blobs`); metadata in `ticketsdb`.
- Validate file size, permitted types, ticket existence and access; prevent unsafe filenames/path use.
- Handle failed uploads, orphaned blobs and missing content deliberately.
- Blazor attachment controls and progress/error feedback.
- Integration tests against local Blob Storage.

Inspect affected projects, current Aspire AppHost references, client integrations, existing tests and relevant domain contracts. Identify recommended design, APIs, data model/storage, frontend changes, edge cases, dependencies, implementation risks and test strategy. Capture clear acceptance criteria.

Research only. Do not modify application code, implement features, or create pull requests.
```

## Plan

Invoke `/rpi-plan` in GitHub Copilot CLI with the prompt below.
Review and approve the plan before implementation. Revise it if the scope or acceptance criteria are incomplete.

```prompt
Create a concrete, testable implementation plan for **SupportHub Ticket Attachments** using the completed research artifacts.

Feature: **Ticket Attachments**. Current branch: `feature/attachments`; PR parent: `feature/tickets`.

Read `.github/copilot-instructions.md` and relevant existing code before making decisions. Respect service data ownership and use repository-local Aspire Skills for version-specific infrastructure, service discovery and runtime diagnostics. Keep work limited to this feature and do not implement later stack layers.

Planned scope:
- Upload, list, download and delete attachments for existing tickets.
- Store file content in Azurite-backed Azure Blob Storage (`blobs`); metadata in `ticketsdb`.
- Validate file size, permitted types, ticket existence and access; prevent unsafe filenames/path use.
- Handle failed uploads, orphaned blobs and missing content deliberately.
- Blazor attachment controls and progress/error feedback.
- Integration tests against local Blob Storage.

Break work into small ordered steps. Identify affected files/projects, contracts, infrastructure client registration, tests, Aspire runtime verification, failure cases, and migration or compatibility considerations where applicable.

Acceptance criteria:
- File operations work end-to-end and are ticket-scoped.
- Invalid uploads are rejected and failures handled safely.
- Blob and metadata consistency is tested.

Plan only. Do not change application code or create a pull request. Present the plan for approval before implementation.
```

## Implement

Invoke `/rpi-implement` in GitHub Copilot CLI with the prompt below.
Use the approved plan, inspect the changes, and check the reported tests and Aspire runtime evidence.

```prompt
Implement the approved plan for **SupportHub Ticket Attachments** on `feature/attachments`.

Feature: **Ticket Attachments**. Current branch: `feature/attachments`; PR parent: `feature/tickets`.

Read `.github/copilot-instructions.md` and relevant existing code before making decisions. Respect service data ownership and use repository-local Aspire Skills for version-specific infrastructure, service discovery and runtime diagnostics. Keep work limited to this feature and do not implement later stack layers.

Required scope:
- Upload, list, download and delete attachments for existing tickets.
- Store file content in Azurite-backed Azure Blob Storage (`blobs`); metadata in `ticketsdb`.
- Validate file size, permitted types, ticket existence and access; prevent unsafe filenames/path use.
- Handle failed uploads, orphaned blobs and missing content deliberately.
- Blazor attachment controls and progress/error feedback.
- Integration tests against local Blob Storage.

Follow the approved research and plan, implement incrementally, and add meaningful automated tests. Use Aspire Skills for service wiring, integration, health checks and runtime diagnosis. Run solution build, relevant tests and Aspire integration verification where available; fix failures within this feature's scope.

Do not implement later features, rename unrelated projects, or submit a pull request. Report changes, tests run and any unverified acceptance criteria.
```

## Review

Invoke `/rpi-review` in GitHub Copilot CLI with the prompt below.
Resolve important findings before preparing the PR. If needed, repeat Research, Plan, and Implement, then run Review again.

```prompt
Review **SupportHub Ticket Attachments** on `feature/attachments` against the approved research, plan and acceptance criteria.

Feature: **Ticket Attachments**. Current branch: `feature/attachments`; PR parent: `feature/tickets`.

Read `.github/copilot-instructions.md` and relevant existing code before making decisions. Respect service data ownership and use repository-local Aspire Skills for version-specific infrastructure, service discovery and runtime diagnostics. Keep work limited to this feature and do not implement later stack layers.

Acceptance criteria:
- File operations work end-to-end and are ticket-scoped.
- Invalid uploads are rejected and failures handled safely.
- Blob and metadata consistency is tested.

Inspect changes for correctness, service boundaries, validation, security, resilience, observability, and test quality. Run `dotnet build SupportHub.slnx`, relevant `dotnet test` commands, and Aspire runtime/integration checks where available. Examine health, logs and traces; report any checks that cannot be performed.

Report findings ordered by severity, missing coverage, remaining risks, and whether the feature is ready for its stacked PR. Do not submit the PR.
```

## Stacked PR handoff

After Review, inspect the diff, commit the approved changes, and use the application repository's `gh-stack` skill to prepare `feature/attachments` targeting `feature/tickets`. Include build, test, and Aspire verification evidence, and state any checks you could not run. Submit or update the PR only after explicit approval.

Create the next layer, `feature/activity`, on top of `feature/attachments` before continuing to the next workshop step. Keep later features out of the current PR.

[Source prompts](https://github.com/sinannar/agentic-engineering-experiment/blob/main/notes/prompts/3-feature-attachments.md). These prompts describe intended behavior; verify the actual application state before claiming acceptance criteria are met.
