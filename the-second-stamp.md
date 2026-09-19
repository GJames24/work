# The Second Stamp: fine-tuning an open model to fill a real seat

**Status:** private, active since August 29, 2026. The training pipeline is built and baselined; the first training round is designed and not yet run.

## The problem

Tilda runs its residents' minds on frontier models over an API. One of those [seats](glossary.md#a-hand-a-seat) is a candidate for a local open model: a narrow, well-specified job with a JSON contract. The question this project answers is whether a small open model, adapted with a LoRA on my own hardware and my own hand-authored data, can hold that seat at a measured quality bar, and what it costs to find out.

It is also a learning project by design. Phase 1 built a GPT-style model from scratch (tokenizer, embeddings, attention, training loop) on a public-domain corpus. Phase 2 is the real requirement.

## How it is governed

Governance is where AI projects usually go wrong, so it is the part I built first and hold to hardest.

- **Two agents, one channel.** The training repo is a clean room operated by a second coding agent on the GPU machine. It cannot see the simulation's data. The two repos talk only through dated review artifacts pushed in each direction (the [flap](glossary.md#the-flap)). Artifacts travel, data never does.
- **Every authority is given by a human, per action, by name.** License acceptance, software install, weight download, GPU time, publication. Each is a separate word from me, and a GPU run is approved by the SHA-256 of its plan file, the [hash gate](glossary.md#the-hash-gate). The runner refuses to start unless the approved hash matches the plan on disk and the code is pushed.
- **Safety envelope on the hardware.** A watchdog samples VRAM every 5 s, stops the run on three consecutive polls under 1 GiB free or a 900 s ceiling, hard-exits the process, and re-queries VRAM after the stop to prove the card was actually released. (That last step exists because one run held the card after reporting a stop.)
- **The base model's license was read by me before the first download.**

## The data and the eval

- **60 hand-authored scenes** across six scene families, written by me in a structured interview: the situation shown to the model, the response contract, and my own answer. The point was never a single right answer; the answer is a witness to the behavior I want.
- **[Sealed](glossary.md#the-seal-the-gold) split:** 48 development (training-eligible) and 12 [holdout](glossary.md#the-holdout), stratified two per family, sealed in one irreversible operation with a manifest and source hash. The holdout is never read by the coordinating side. The reporter prints aggregates only and carries a sentinel test that fails if a holdout row ever leaks into output.
- **Baseline before training, on both candidates.** Two candidate base models (Qwen3-8B and Qwen3-14B, both Apache 2.0) were run untouched under two decoding regimes:

| | Raw decoding | Constrained (JSON schema) |
|---|---|---|
| Holdout, contract compliance | 0/12 | 12/12 |

  Constrained decoding hit the mechanical ceiling before any training. That finding moved the metric: contract compliance cannot separate models, so the next metric is agreement with the authored answer, then a [set of plausible answers](glossary.md#the-plausible-set), then a judged read of the saved development responses. A frontier model may act as a second grader; its scores never become training data.

- **The registered rule tied; the pick was a [ruling](glossary.md#a-ruling), recorded as one.** The pre-registered mechanical rule for choosing between the two ended in an unresolved tie. I then ruled for the 8B on measured serving cost (its memory-headroom check cleared in 18.8 s against 39.7 s; the same exam served in 70 s against 117 s) and on a full-precision adapter fitting the card. The record marks that as a post-hoc ruling, not the rule's output. The 14B, converted and [hashed](glossary.md#the-hash-gate), is reserved for a later round.

## Engineering decisions

- **The context target was provisional and got re-ruled.** The plan assumed an 8,192-token training window. The sealed sheets are a few hundred tokens each. The window was cut to 2,048 and the loss computed in chunks with a detached-leaf backward pass (exact gradient, lower peak memory). Both models then cleared the headroom gate.
- **One change per round, prediction filed before the result.** Round one is a LoRA on the 8B in BF16. The step count is a control variable (batch 4, 3 epochs, ~36 steps), not an accident of the batch size.
- **Adverse results get sorted into a named bucket:** the model, the exam, or the [rig](glossary.md#the-rig-bucket) (a plan assumption meeting the hardware). The rig bucket exists so that a plan assumption meeting the hardware is never filed as a model problem.

## Scale

As of 2026-09-19: 197 commits, 114 source, tool and test files, 61 [quest-log](glossary.md#the-quest-log) entries, 63 review artifacts exchanged across the channel. All GPU runs so far are headroom checks and baselines; results and [receipts](glossary.md#a-receipt) are in the repo.

## Industry terms this project exercises

Train/holdout split and leakage prevention · baseline-first evaluation · constrained decoding (JSON schema) · greedy, seeded decoding for reproducibility · LoRA / parameter-efficient fine-tuning · GGUF quantization (Q8_0) for serving · VRAM headroom and gradient checkpointing · approval gates and provenance receipts · dual-agent development with a review channel.
