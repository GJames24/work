# Glossary: house vocabulary to industry terms

These projects developed their own vocabulary over a thousand commits. Each entry below gives the house term, the industry term for it, and what it means here. Case-study pages link a term here on its first use.

### The desk
**Industry term:** orchestrating agent; tech lead.
The coordinating AI session that plans, delegates, verifies, and commits. I direct the desk.

### A hand, a seat
**Industry term:** delegated agent; model routing.
A hand is a sub-agent cast for one job. A seat is the job itself, with the model tier and effort level that has held up at it in a trial.

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
626 named checks. Each law names the failure that created it.

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
