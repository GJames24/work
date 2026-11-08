# Glossary: house vocabulary to industry terms

These projects developed their own vocabulary over a thousand commits. Each entry below gives the house term, the industry term for it, and what it means here. Case-study pages link a term here on its first use.

### The desk
**Industry term:** orchestrating agent; tech lead.
The coordinating AI session that plans, delegates, verifies, and commits. I direct the desk.

### A hand, a seat
**Industry term:** delegated agent; model routing.
A hand is a sub-agent cast for one job. A seat is the job itself, with the model tier and effort level the house has ruled for it: a trial for the review seats, the current release for the build seats.

### The casting gate
**Industry term:** routing policy check.
A check that each delegated job went to the right seat.

### The skeptic
**Industry term:** adversarial verification.
A reviewer agent whose default verdict is "refuted." A claim has to survive it.

### The tape, the Loom
**Industry term:** event log; run store.
The append-only JSONL event stream of a run, and the store that keeps every run forever.

### The card
**Industry term:** run report; daily dashboard.
The reconciled summary of a day's run: calls, cost, anomalies, each number with its source line.

### The bench, a law
**Industry term:** regression suite; a test.
673 named checks. Each law names the failure that created it.

### The certificate
**Industry term:** CI gate; pre-commit gate.
The bench must run fresh and green before a commit touching tooling is accepted.

### A groom
**Industry term:** test-suite audit.
Auditing the detectors themselves, not the product.

### A camera
**Industry term:** detector; monitor.
Any instrument that watches for a specific failure. "Every cure ships its camera."

### Ship the poke
**Industry term:** regression-test discipline.
A hand-found bug ships the automated check that would have found it, proven red first.

### A receipt
**Industry term:** provenance.
The commit hash, run id, line number or command behind any number or claim.

### A ruling
**Industry term:** decision record.
A dated decision with its reasoning, made by me, recorded forward-only.

### Camp, the handoff, the seam
**Industry term:** session checkpoint; context management.
Ending a work session with a clean tree, a written handoff, and a compacted context.

### The quest log
**Industry term:** issue tracker plus decision journal.
Every question worth understanding gets an entry, with its state, proof, and lineage.

### Witnessed, never directed
**Industry term:** no global reward; observability-first design.
Residents are watched, not steered. Changes reach minds only through perceivable channels.

### The Inspector
**Industry term:** behavioral anomaly detection.
An instrument that reads a run and reports contradictions between what residents said and what the world recorded.

### The meters
**Industry term:** usage and budget tracking.
A ledger of subscription-plan usage with a projection of which allowance runs out first.

### Relative strength; bulk and lean
**Industry term:** cost-performance optimization on receipts.
Cost and quality are measured on the same row, and a change is judged on what it bought for what it cost, never on either number alone. Four moves live under this rule: a lean pass (same quality, lower cost), bought performance (a pricier model that a trial showed earning its price), a blended shift (savings in one seat funding a stronger model in another), and deliberate fat (overspending while a feature's shape is unknown, then trimming). "Bulk and lean" is the rhythm: build waves add capability and accept fat; cost passes trim it.

### The money and the seats
**Industry term:** FinOps for LLM systems; routing policy.
One rule read from two sides. The money says both numbers go on the row. The seats say the routing decision reads them.

### The seal, the gold
**Industry term:** frozen eval set; ground truth.
A hand-authored eval set sealed once, with a stratified never-trained holdout.

### The holdout
**Industry term:** held-out test set.
12 of 60 scenes, never read by the coordinating side, reported in aggregate only.

### The plausible set
**Industry term:** acceptable-answer set.
For each scene, the menu items I would accept as honest behavior, not just the one I chose.

### The rig bucket
**Industry term:** infrastructure or environment failure class.
An adverse result caused by a plan assumption meeting the hardware, not by the model or the exam.

### The flap
**Industry term:** review channel between repositories.
Dated review artifacts pushed in each direction between two agent-operated repos. Artifacts travel, data never.

### The kitten, the breeder
**Industry term:** descendant project; playbook plus starter kit.
A project born from the operating model, and the repository that holds the model.

### The fence
**Industry term:** data boundary.
Nothing from the simulation's logs crosses into the training project; only counts do.

### The hash gate
**Industry term:** change approval by content hash.
A GPU run starts only if the approved SHA-256 matches the plan on disk and the code is pushed.

### The trunk, an arm
**Industry term:** baseline lineage; ablation branch.
The canon thread is the trunk: the reference lineage of Tilda days. An arm forks from it, declares its parent and changes one variable (a replication arm changes nothing, to measure how far one run moves), so any difference in its results has one candidate cause.

### The Stray Cat
**Industry term:** test harness; examiner.
Tilda's own examiner: the detectors that turn a day's tape into an exam, reading what residents said against what the world recorded.

### A referee
**Industry term:** blind re-grading; inter-rater check.
A grader that re-scores a sample of another grader's work (or the whole set, where the study says so) with the original verdicts stripped, so agreement is measured and not assumed.

### The Cat Show
**Industry term:** model benchmark; leaderboard with provenance.
The benchmark built on Tilda: models are entered into the seats the work demands, judged blind against written standards, and every verdict traces to a trial folder on disk. The case study is [the-cat-show.md](the-cat-show.md).

### A referee sitting
**Industry term:** blind external review; independent verification.
One fresh session of a reviewer from a different model family than the author, over a copy of the repository at the exact revision under review. It sees the evidence and the request, never the working conversation or anyone's earlier verdict, re-derives each sampled claim itself, and returns a verdict per row. A tool reads the sitting's own log afterwards and refuses it if any file access left its sealed folder. The return is advisory until I merge it.

### The review gate
**Industry term:** branch protection; required status checks; pull-request admission.
The main branch is the record. A repository ruleset is configured to refuse any change to it that does not arrive as a pull request with a passing automated check. By rule the merge is mine and never an agent's; the ruleset enforces the path, not whose hand clicks.

### The fence (research rooms)
**Industry term:** data boundary enforced in CI.
What may never enter a research repository: logs or transcripts from my other projects, credentials, absolute paths, host names, personal addresses, session identifiers. A check runs on every push over the tree and every commit's author identity, and a red check is set to hold the merge; the refusal has not yet been drilled.

### A case
**Industry term:** study; experiment protocol with a closeout.
One research question run to a close: commissioned, arms frozen, builds with forecasts filed before they run, independent reads, a close page with a pointer behind every sentence, a referee sitting, and a dated record entry.

### An arm (research cases)
**Industry term:** experimental arm; ablation.
One configuration in a case, listed and frozen before any data is drawn, differing from the arm it is compared with by one setting.

### Discovery, graduation
**Industry term:** exploratory versus confirmatory analysis; preregistration.
A result measured on inputs the method was tuned on is discovery and is labelled so. Graduation is the confirmatory step: a fresh set drawn once by a rule fixed in advance, then a referee sitting.

### The genesis kit
**Industry term:** project template; shared tooling, versioned.
The starter files and fixtures a new project copies from the Kitten Breeder (the map, the record, the rituals, and in the research repositories the referee's tools, the fence and the merge page). It is versioned, and a project takes a new version only by pull request.

*added 2026-11-08 for the Cat Show's first study*

### Model
**Industry term:** system under test; model under evaluation.
A language model under test, named on the page by its family and release.

### Dial
**Industry term:** reasoning-effort setting; inference-time compute level.
The effort setting a model runs at, from low to max: how much reasoning it may spend on a task.

### Seat and chair
**Industry term:** task role and the configuration seated in it.
A seat is a job the exam demands, and a chair is the model and dial seated in it.

### Cell
**Industry term:** experimental condition; one cell of a results grid.
One model at one dial in one seat, to which every figure in a table or on a figure's row belongs.

### Claim
**Industry term:** finding; reported item.
A finding the reader files: a defect, an all-clear, or another kind.

### Plant
**Industry term:** seeded control row; blindness probe.
A row mixed in among the claims a chair grades, planted so the chair's blindness can be measured.

### Held and distinct held
**Industry term:** upheld finding; deduplicated true positive.
Held has three senses, in the order the page meets them: in the skeptic's cut, a row the skeptic chair confirmed as a defect; on the referee screens, a defect a blind referee upheld against the record; and on the skeptic seat, a refusal the referee upheld. Distinct held counts the different defects among the referees' held rows, each once, however many claims name it.

### Cache-write token
**Industry term:** metered compute unit; billable cache write.
The unit a plan meters and charges, a token written to the model's cache, in which every cost on the page is counted or in the list dollars it cost.
