---
order: 0
title: "Workshop Setup"
summary: "Create a repository from the prepared template, create a Codespace, verify the required tools, and inspect the completed stacked-PR reference."
feature: "Setup"
status: ready
workflow: setup
---

Complete this preparation step before starting the SupportHub feature stack.
Create your own repository from the prepared template; do not make changes in this
workshop website repository or in the completed reference repository.

## Create your workshop repository

1. Open [agenticengineeringday2026-template](https://github.com/sinannar/agenticengineeringday2026-template).
2. Open **Use this template** and choose **Create a new repository**.
3. Choose a repository name, then create the repository under your GitHub account.
4. Open your new repository and use its **Code** menu to create a Codespace.

![The template repository Use this template menu with Create a new repository highlighted.](/images/workshop-setup/template-use.png)

![GitHub Create a new repository page showing the selected template and repository name field.](/images/workshop-setup/template-create-repository.png)

## Create a Codespace

1. In your new repository, open **Code**, switch to **Codespaces**, and choose **New with options…**.
2. Create the Codespace from your repository's `main` branch.
3. Choose a machine with **at least 4 cores**. An **8-core machine** is preferred
   for the distributed application, local infrastructure emulators, builds, and tests.
4. Create the Codespace and wait until the dev container finishes starting and the
   terminal is available. Do not run the workshop commands while the container is
   still configuring.

![The repository Code menu open on the Codespaces tab with New with options highlighted.](/images/workshop-setup/codespace-menu.png)

![GitHub Codespaces creation page for a workshop repository showing the main branch, dev container configuration, and 8-core machine option.](/images/workshop-setup/codespace-machine-options.png)

## Verify the environment

In the Codespace terminal, run each command and confirm it returns version information:

```bash
aspire --version
dotnet --version
dotnet --list-sdks
gh --version
copilot --version
gh stack --version
```

The prepared environment is expected to include the Aspire CLI, a .NET SDK,
GitHub CLI, GitHub Copilot CLI, and the `gh stack` extension. If a command is
missing or fails, stop and fix the Codespace setup before continuing; do not
substitute a local installation.

### Start and verify the application

From the repository root, run:

```bash
aspire start
```

Copy the Dashboard login secret from the output and keep it local. It is a
credential: do not commit or share it. Then run:

```bash
aspire describe
```

Wait for the required resources to report `Running` and `Healthy`. The
interactive `supporthub-cli` resource can remain `NotStarted` until you choose
to launch it. You can instead open the forwarded
`aspire-dashboard-https (17119)` URL in the Codespaces **Ports** panel and use
the copied secret to sign in to the Dashboard.

### Verify the Blazor frontend

In the Codespaces **Ports** panel, open the forwarded address for
`webfrontend-https (7274)`. Successful navigation displays the default
SupportHub Blazor page with **Home** and **Counter** in the navigation and a
**Hello, world!** welcome message. This confirms the prepared frontend is
reachable before you begin the feature steps.

## Inspect the completed stacked PRs

The [agentic-engineering-experiment](https://github.com/sinannar/agentic-engineering-experiment)
repository is the completed reference. Its stacked pull requests are intentionally
still open so you can inspect their order and parent relationships.

Open [its pull requests](https://github.com/sinannar/agentic-engineering-experiment/pulls)
and use GitHub's stack indicator to inspect the sequence. At the time this setup
guide was written, the reference stack starts with `feature/customers` targeting
`main`, continues through `feature/tickets`, `feature/attachments`,
`feature/activity`, `feature/sla`, `feature/dashboard`, and `feature/ui-ux`,
and includes a `devcontainer` pull request on top.

Use the reference to understand the stack only. Do not merge, close, edit, or
push to its pull requests. Return to your workshop repository and continue to Customer Management.

### Final goal

After completing the seven feature steps, your workshop repository should have a working
SupportHub ticketing system: an operations dashboard with ticket and SLA
summaries, a filterable ticket queue, and customer records that support the
ticket workflow. Use your own test data; any example record data shown in the
workshop is redacted.
