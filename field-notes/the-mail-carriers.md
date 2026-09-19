# The mail carriers

*Field note from Tilda. An engineering postmortem in four root causes, with [receipts](../glossary.md#a-receipt). Runs are named so the figures can be re-derived from the [tape](../glossary.md#the-tape-the-loom); the tapes themselves are private.*

## The system

Mail came before its carrier. The post, with mailboxes, letters and a dead-letter escrow, landed a day before anyone was hired to carry anything, and delivery was instant. A letter is nine fields: id, to, from, text, an enclosed amount held in escrow at the post until the envelope is opened, a belief it may carry, the day sent, and whether it has been opened. The route is the job: the post collects the postage, and wages come from the town. Iris arrived on day 31 to take the post, and delivery stopped being instant the moment a carrier existed.

## The flood

The press outran the route. Inflow ran ten to thirteen pieces a day against an observed throughput of one or two. On day 72 she delivered two letters at six in the evening, after hours, unpaid, with 95 on the rack. I found it reading her day-71 work record, not an alarm: one half-hour of work while the rack kept growing.

## Four root causes

**Bandwidth was not the constraint.** Capacity is addresses reached per day, and one stop drops every letter for that address, so clearing a pile is superlinear. Adding hours to her day would not have cleared it.

**The engine was fighting her.** An empty-bag gate padlocked the whole rack behind a handful of stragglers while she stood at an open counter. The cures: pre-opening catch-up became paid work, a [law](../glossary.md#the-bench-a-law) of its own, the counter fills whatever she carries, and the rack's weight became something she can perceive.

**Two percepts shared one cooldown.** Her duty prompt and the rack's weight shared one cooldown, stamped by whichever fired first, and it silenced both carriers; the desk had proposed grandfathering it on the grounds that it had never fired. The fix was a rule, one furnace one owner, law 62. I overruled grandfathering the old behavior in.

**The carrier's own hand lied to her.** The in-hand percept read the wrong object: seven times on day 79 it told her "someone" and "zero letters" while the same decision rows carried the true addressee, and the engine spent six cents arguing a soul out of a deed it had already routed right. Caged by a law of its own, with the [quest-log](../glossary.md#the-quest-log) entry that found it.

## Radix

Hiring help was held back on purpose so the crisis could be the petition system's moment. When Radix arrived on day 74, the stagecoach day, the record is explicit that reinforcement is not rescue: two zoned carriers project to six to twelve a day, which treads water, and that's honest. He was authored as her complement so the town's first coworker chemistry could be witnessed unseeded: their relationship was seeded with nothing, witnessed rather than written.

Two carriers created exactly one leak that one carrier cannot: a letter handed over in the bag transfer but delivered by the giver. I caught it reading the bags on the day of the first handoff, 95 to 29 and 0 to 53 by the milestone's own count, and asked where the other exchange was. That became [Inspector](../glossary.md#the-inspector) check 19: custody is reconciled to the letter, and a mismatch is critical.

## Where it stands on day 94

| | the premiere (run lab-20260906-080401) | take two (run lab-20260907-163044) |
|---|---|---|
| letters delivered to a mailbox, distinct ids (hand-delivered excluded: 1 and 4) | 20 (9 by carrier, 11 express) | 22 (12 by carrier, 10 express) |
| personal letters among them | 0 | 2 |
| in flight at dawn, rack plus bags | 16 | 16 |
| in flight at close | 25 | 18 |

And on both takes the pipeline ends the day deeper than it began. Radix's own life page that night reads "I let the bag sit again — eleven letters" (run lab-20260906-080401), and his bag held exactly eleven. A soul's account agreeing with the ledger to the letter is the whole argument for keeping the receipts.

## The lesson I keep

The first diagnosis is usually capacity, and it is usually wrong. Three of the four causes here were the engine getting in the worker's way, and each cure became a check on the [bench](../glossary.md#the-bench-a-law).
