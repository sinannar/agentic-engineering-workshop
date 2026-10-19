---
order: 3
title: Feature attachments
summary: Add attachment handling with explicit limits, ownership, and failure behavior.
feature: Attachments
estimatedMinutes: 45
status: fixture
---

<!-- DEVELOPMENT FIXTURE: replace this lesson with final workshop content. -->

## Research

Extend the ticket workflow by understanding upload boundaries, storage abstractions, and the trust model around user-provided files.

```prompt
Use HVE Core Research to trace how files are uploaded, stored, served, and deleted. Identify size/type limits, authorization checks, cleanup behavior, and test coverage. Do not edit files.
```

## Plan

Use HVE Core Plan to choose a safe, observable attachment slice with failure paths treated as first-class behavior.

```prompt
Plan an attachment feature that fits the existing storage boundary. Include validation, authorization, naming, cleanup, error handling, tests, and security risks before implementation.
```

## Implement

Implement the approved path with bounded input, predictable errors, and the HVE Core acceptance checks.

```prompt
Implement the approved attachment slice without introducing a new storage system. Add tests for valid files, rejected files, unauthorized access, and cleanup failures.
```

## Review

Use HVE Core Review to verify that untrusted input cannot bypass policy or expose another customer’s files.

```prompt
Review the attachment diff for security and reliability defects. Pay special attention to path traversal, content validation, access control, resource limits, and orphaned files.
```
