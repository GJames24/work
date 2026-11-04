# The Verifier: a verification pipeline for agent-produced research

**Status:** private, active since October 13, 2026. Research is in a discovery phase: results are recorded with their receipts and some have been refereed. No result has been admitted as a claim, and no result on any open problem is claimed.

## The problem

Most of the work in this project is done by AI agents: they write the solver code, run the experiments and draft the findings. The question the project has to answer first is not "is the finding interesting" but "how would anyone know it is true": what a claim must carry, who checks it, and what it takes for it to enter the record.

The material is hard. The project's stated horizon is P versus NP, approached through exact graph three-coloring and the search behind it. An open problem has no answer key to copy from, so a claim can only stand on its own check. A second private repository, for the Riemann hypothesis, was born on October 17 from the same kit; it holds its founding contract and proposal documents, no research content entered at its birth, and its documents authorize no computation yet. Both are [kittens](glossary.md#the-kitten-the-breeder) of [The Kitten Breeder](the-kitten-breeder.md).

## How it is governed

Every mechanism below is named by what it refuses.

- **The referee is never the author.** The author is my [desk](glossary.md#the-desk) and the [seats](glossary.md#a-hand-a-seat) it casts. The referee is always from a different model family than the author. The referee's brief and tools are the author's family's work, and a protocol designed by the referee's family limits its independence on that design; the record says so where it applies. Until October 24 the roles ran the other way (an OpenAI-family conversation authored, a Claude seat refereed); since then Claude authors, Codex referees, and ChatGPT designs only by proposing a spec document. A design never becomes a claim.
- **The [referee sitting](glossary.md#a-referee-sitting) is blind.** One fresh sitting per request, over a clone of the repository checked out at the exact evidence revision. Its prompt names the brief's path and nothing else; every verdict any seat gave, the working conversation and the author's reasoning are withheld. The referee re-derives the sampled claims itself, with its own code and its own solver, marks per row where it could only replay the author's checker, and grades each: supported in scope, refile, not shown, refuted, or review incomplete. A sitting is instructed to refuse a prompt that carries the conversation; a checker refuses a brief missing its seal and withheld lines, and afterwards a sealing tool reads the sitting's own log and refuses it if any file access left the sealed root. A return is advisory: it moves a claim's review status only when I merge it.
- **Results are machine-checked against their own capture.** The rule for a recorded result is freeze before capture, a [receipt](glossary.md#a-receipt), a replay, and a label. The code and inputs are frozen and hashed before the run; the capture refuses to write over an existing output; the replay must reproduce the output byte for byte; a separate checker re-verifies the solver's answers without calling the solver (every coloring against every edge, exhaustive enumeration where it is feasible); and controls prove the guards bite, for example a planted call the guard must refuse.
- **The [review gate](glossary.md#the-review-gate) on the record.** The main branch is the record. Since October 19 a ruleset on GitHub has been configured to refuse any change to main that does not arrive as a pull request with a passing [fence](glossary.md#the-fence-research-rooms) check. Agents work on branches; the push, the pull request and the merge are my hand, by rule. That last part is a rule, not a lock: the ruleset governs the path a change takes, not whose hand clicks merge, so the rule names the hand. The branches that carry experiment evidence never merge; what reaches main from them is the dated record entry that points at them. Main also takes the referee's returns, kit refreshes, the maps and design documents.
- **The fence.** No logs from my other projects, and no transcripts, credentials, absolute paths, host names, personal addresses or session identifiers. The fence check runs on every push, over the tree and every commit's author identity, and a red check is set to hold the merge; the refusal has not yet been drilled.
- **[Discovery before graduation](glossary.md#discovery-graduation).** A result measured on inputs the method was tuned on is labelled discovery and is never confirmatory. The confirmatory step is a fresh set drawn once by a rule fixed in advance, then a referee sitting.
- **The record is append-only.** A correction is a new dated entry beside the old one; a failed attempt keeps its receipt under its own identifier; a missing measurement is written UNKNOWN. Every scope and order decision is a [ruling](glossary.md#a-ruling) of mine, recorded as one, and a ruling never establishes mathematical truth.

## What exists

- **Two [cases](glossary.md#a-case) in the record, and a third staged.** A case is one research question run to a close. The full lifecycle, as the third case ran it: the case is commissioned; its [arms](glossary.md#an-arm-research-cases) are listed and frozen before any draw, each arm after the first changing one setting from the arm before it; each build lands as a numbered page with its forecast filed before it runs and graded after; several seats read the build's output pages independently; a close page states the candidate results with a pointer behind every sentence; a referee sits over that page from outside; the author answers each finding before anything is fixed; and the record entry lands by pull request. The third case was run outside the repository, in the desk's own working folder, and closed on October 30; its referee return, a first dry run of the new referee sitting, sealed by hand and then by the new tooling once it landed, is staged for my merge. A return moves nothing until merged, so its grades are not on this page yet.
- **Referee returns in the record:** 2, grading 85 sampled rows of OpenAI-authored evidence: 78 supported in scope, 3 refiled, 2 not shown, 2 not completed.
- **The [genesis kit](glossary.md#the-genesis-kit)**, version 4.8: the referee's fixtures, the fence, the merge page and the rituals, copied in from the breeder and refreshed only by pull request.

## What is not claimed

No result on P versus NP, the Riemann hypothesis or any other open problem. No claim has been admitted: the claims folder holds no claim, and the founding contract's mechanical claim checker is still a stub that answers "not yet implemented". The results so far are bounded measurements on constructed and generated inputs, counted in solver operations, not timing. Not every result has been refereed: the referee grades samples, and work authored since the roles turned on October 24 has waited for the new referee's seal, which landed on November 2. The fence check is a leak check, not a review of the science. The pipeline is the thing this project has built so far, and it is what this page describes.

## Scale

As of 2026-11-02: 76 commits, 19 merged pull requests, 2 referee returns in the record, 0 admitted claims, kit version 4.8.

## Industry terms this project exercises

Blind, cross-family review · reproducible builds and byte-identical replay · preregistration and a fresh confirmatory draw · branch protection with required status checks · pull-request admission · append-only decision records · data-boundary checks in CI · separation of authoring and grading roles.
