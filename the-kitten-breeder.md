# The Kitten Breeder: an operating model for AI-assisted development

**Status:** private, active since August 29, 2026.

## The problem

[Tilda](tilda.md) taught me a way of working with AI coding agents that held up over a thousand commits: append-only records, state claims that carry their query, regression checks born from named failures, cost on every row. None of it was written down anywhere a new project could inherit. This repository extracts it.

It is not software. It is a playbook, a starter kit, and a lineage register.

## What exists

- **The book:** 27 chapters plus a foreword and closing. Most chapters are a rule that was paid for by a specific failure and cite its [receipt](glossary.md#a-receipt) (the commit, the run, the date); a few are procedures, and say so. Rules are amended forward-only; nothing is rewritten to look wiser than it was.
- **The genesis kit:** the starter files a new project copies on day one: the map (a short, read-first project file), the [quest journal](glossary.md#the-quest-log) and its CLI, a [bench](glossary.md#the-bench-a-law) skeleton, the daily [card](glossary.md#the-card), pre-commit hooks, the money ledger, the rituals. Versioned, with a changelog.
- **Two birth modes.** A software project reads the book live and contributes back by pull request. A model-training project is born as a sealed clean room stocked by the parent project's coordinating agent, with receipts flowing back through an outbox. One project has been born this way: [The Second Stamp](the-second-stamp.md).
- **Written for agents as much as people.** Each mechanism is described by function before implementation, with translation notes so an agent working in a different tool can decide what the mechanism should *be* in its environment.

## A sample of the rules, in industry terms

| Chapter | The rule | What it is in industry language |
|---|---|---|
| State is a query | A claim about system state carries the command that produced it | No cached beliefs; observability over memory |
| Amend, never overwrite | Records are append-only; corrections are dated additions | Immutable logs, audit trail |
| Only estimate the future | A forecast is legitimate; a guess dressed as a measurement of the past is not | Reconciled reporting |
| An alarm owes its denominator | A count is meaningless without its population | Metric hygiene |
| Every cure ships its [camera](glossary.md#a-camera) | A fix ships the detector that would have caught it, proven red first | Regression tests, proven failing before the fix |
| The bench | The check suite gates commits; a green bench nobody watched is not evidence | CI gate, test-suite audits |
| The [groom](glossary.md#a-groom) | Periodically audit the detectors, not the product | Test-suite maintenance as scheduled work |
| The [seats](glossary.md#a-hand-a-seat) | Route each job to the model tier that earned it in a trial, and keep the table; a seat moves up in price when the receipts say it earned it | Model routing, cost-aware orchestration |
| The money | Cost on the row beside quality; a change is judged on what it bought for what it cost, never on either number alone | FinOps for LLM systems, cost-performance trade-offs on receipts |
| Agents in harness | What an agent may and may not touch, and how it reports | Agent permissions and guardrails |
| The [golden set](glossary.md#the-seal-the-gold) | A hand-authored eval, sealed with a never-trained holdout | Eval set governance, leakage prevention |

The money and the seats are one rule read from two sides: the money says both numbers go on the row, and the seats say the routing decision reads them. That is how the same book can hold a cost pass that trimmed a day's spend and a ruling that moved one seat to a pricier model, each on its receipt.

## Why it matters for product work

Most of what goes wrong with AI-assisted development is not the model. It is the human side forgetting what was true, trusting a number without its source, or fixing a symptom without shipping the check. This book is a set of mechanisms that make those mistakes structurally harder, each one bought with a real incident. That is the same shape as a good postmortem culture, applied to a team where half the members are language models.

## Scale

As of 2026-09-18: 56 commits, 27 chapters, one registered descendant project.
