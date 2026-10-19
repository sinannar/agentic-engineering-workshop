---
order: 1
title: "Customer Management"
summary: "Build customer CRUD with validation, PostgreSQL persistence, Blazor workflows, and API and Aspire integration tests."
feature: "Customers"
status: ready
---

**Branch:** `feature/customers`

**PR target:** `main`

**Usage:** Invoke each skill separately in GitHub Copilot CLI. Review each stage's output before proceeding.

## Before you start

Work in the SupportHub application repository, not in this workshop website repository.
The prompts assume a prepared `main` branch with the Aspire AppHost, application
and test projects, client packages, and repository instructions already present.

- Use the .NET 10 and Aspire 13.6 baseline described in the source notes. Check the application repository for its actual version requirements.
- Read `.github/copilot-instructions.md` for service responsibilities and boundaries.
- Confirm repository-local Aspire Skills and the HVE Core RPI skills are available in GitHub Copilot CLI. Check the exact commands in your installation.
- Confirm PostgreSQL (`customersdb`, `ticketsdb`), Blob Storage/Azurite (`blobs`), Service Bus (`ticket-events`), Cosmos DB (`activitydb`), and Redis are configured for local use in the AppHost. Verify the actual baseline rather than assuming the notes prove it is ready.
- Build and test the baseline with `dotnet restore SupportHub.slnx`, `dotnet build SupportHub.slnx`, and `dotnet test SupportHub.slnx`. Inspect resource health, service discovery, logs, and traces in the Aspire Dashboard.
- Configure the repository's `gh-stack` skill and GitHub tooling before starting the feature stack.

The [initial setup notes](https://github.com/sinannar/agentic-engineering-experiment/blob/main/notes/init.md)
explain how the baseline was created. They describe an earlier setup stage, not a
guarantee that the full feature foundation is present in your checkout.

## What you will build

- Customer CRUD: create, retrieve, update, delete.
- Customer name, email, phone, support tier; validation and meaningful HTTP responses.
- PostgreSQL `customersdb` via EF Core with migrations.
- Blazor customer list, details, create, edit and delete workflows.
- Customers API owns data; Web uses HTTP and Aspire service discovery.
- Automated API, persistence and Aspire integration tests.

## Acceptance criteria

- Customer data survives restarts; migrations apply successfully.
- Invalid input is rejected with useful errors.
- UI and API CRUD paths work; tests pass.

## Research

Invoke `/rpi-research` in GitHub Copilot CLI with the prompt below.
Inspect the research output before moving on. This phase must not change application code.

```prompt
Research the implementation of **SupportHub Customer Management** for the stacked PR `feature/customers` (parent `main`).

Feature: **Customer Management**. Current branch: `feature/customers`; PR parent: `main`.

Read `.github/copilot-instructions.md` and relevant existing code before making decisions. Respect service data ownership and use repository-local Aspire Skills for version-specific infrastructure, service discovery and runtime diagnostics. Keep work limited to this feature and do not implement later stack layers.

Feature requirements:
- Customer CRUD: create, retrieve, update, delete.
- Customer name, email, phone, support tier; validation and meaningful HTTP responses.
- PostgreSQL `customersdb` via EF Core with migrations.
- Blazor customer list, details, create, edit and delete workflows.
- Customers API owns data; Web uses HTTP and Aspire service discovery.
- Automated API, persistence and Aspire integration tests.

Inspect affected projects, current Aspire AppHost references, client integrations, existing tests and relevant domain contracts. Identify recommended design, APIs, data model/storage, frontend changes, edge cases, dependencies, implementation risks and test strategy. Capture clear acceptance criteria.

Research only. Do not modify application code, implement features, or create pull requests.
```

## Plan

Invoke `/rpi-plan` in GitHub Copilot CLI with the prompt below.
Review and approve the plan before implementation. Revise it if the scope or acceptance criteria are incomplete.

```prompt
Create a concrete, testable implementation plan for **SupportHub Customer Management** using the completed research artifacts.

Feature: **Customer Management**. Current branch: `feature/customers`; PR parent: `main`.

Read `.github/copilot-instructions.md` and relevant existing code before making decisions. Respect service data ownership and use repository-local Aspire Skills for version-specific infrastructure, service discovery and runtime diagnostics. Keep work limited to this feature and do not implement later stack layers.

Planned scope:
- Customer CRUD: create, retrieve, update, delete.
- Customer name, email, phone, support tier; validation and meaningful HTTP responses.
- PostgreSQL `customersdb` via EF Core with migrations.
- Blazor customer list, details, create, edit and delete workflows.
- Customers API owns data; Web uses HTTP and Aspire service discovery.
- Automated API, persistence and Aspire integration tests.

Break work into small ordered steps. Identify affected files/projects, contracts, infrastructure client registration, tests, Aspire runtime verification, failure cases, and migration or compatibility considerations where applicable.

Acceptance criteria:
- Customer data survives restarts; migrations apply successfully.
- Invalid input is rejected with useful errors.
- UI and API CRUD paths work; tests pass.

Plan only. Do not change application code or create a pull request. Present the plan for approval before implementation.
```

## Implement

Invoke `/rpi-implement` in GitHub Copilot CLI with the prompt below.
Use the approved plan, inspect the changes, and check the reported tests and Aspire runtime evidence.

```prompt
Implement the approved plan for **SupportHub Customer Management** on `feature/customers`.

Feature: **Customer Management**. Current branch: `feature/customers`; PR parent: `main`.

Read `.github/copilot-instructions.md` and relevant existing code before making decisions. Respect service data ownership and use repository-local Aspire Skills for version-specific infrastructure, service discovery and runtime diagnostics. Keep work limited to this feature and do not implement later stack layers.

Required scope:
- Customer CRUD: create, retrieve, update, delete.
- Customer name, email, phone, support tier; validation and meaningful HTTP responses.
- PostgreSQL `customersdb` via EF Core with migrations.
- Blazor customer list, details, create, edit and delete workflows.
- Customers API owns data; Web uses HTTP and Aspire service discovery.
- Automated API, persistence and Aspire integration tests.

Follow the approved research and plan, implement incrementally, and add meaningful automated tests. Use Aspire Skills for service wiring, integration, health checks and runtime diagnosis. Run solution build, relevant tests and Aspire integration verification where available; fix failures within this feature's scope.

Do not implement later features, rename unrelated projects, or submit a pull request. Report changes, tests run and any unverified acceptance criteria.
```

## Review

Invoke `/rpi-review` in GitHub Copilot CLI with the prompt below.
Resolve important findings before preparing the PR. If needed, repeat Research, Plan, and Implement, then run Review again.

```prompt
Review **SupportHub Customer Management** on `feature/customers` against the approved research, plan and acceptance criteria.

Feature: **Customer Management**. Current branch: `feature/customers`; PR parent: `main`.

Read `.github/copilot-instructions.md` and relevant existing code before making decisions. Respect service data ownership and use repository-local Aspire Skills for version-specific infrastructure, service discovery and runtime diagnostics. Keep work limited to this feature and do not implement later stack layers.

Acceptance criteria:
- Customer data survives restarts; migrations apply successfully.
- Invalid input is rejected with useful errors.
- UI and API CRUD paths work; tests pass.

Inspect changes for correctness, service boundaries, validation, security, resilience, observability, and test quality. Run `dotnet build SupportHub.slnx`, relevant `dotnet test` commands, and Aspire runtime/integration checks where available. Examine health, logs and traces; report any checks that cannot be performed.

Report findings ordered by severity, missing coverage, remaining risks, and whether the feature is ready for its stacked PR. Do not submit the PR.
```

## Stacked PR handoff

After Review, inspect the diff, commit the approved changes, and use the application repository's `gh-stack` skill to prepare `feature/customers` targeting `main`. Include build, test, and Aspire verification evidence, and state any checks you could not run. Submit or update the PR only after explicit approval.

Create the next layer, `feature/tickets`, on top of `feature/customers` before continuing to the next workshop step. Keep later features out of the current PR.

[Source prompts](https://github.com/sinannar/agentic-engineering-experiment/blob/devcontainer/notes/prompts/1-feature-customers.md). These prompts describe intended behavior; verify the actual application state before claiming acceptance criteria are met.
