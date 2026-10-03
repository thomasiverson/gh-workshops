# Visual Asset Manifest

The deck is readable without animation or external image hosting. Use alt text and a spoken description whenever displaying a visual.

| Asset | Location / state | Purpose | Accessible fallback |
| --- | --- | --- | --- |
| Agentic workflow architecture | [architecture.svg](./architecture.svg), included | One-page view of primary agent, specialists, repository context, approved tools, deterministic validation, evidence, and human approval | [Guide text diagram](../agentic-engineering-workshop.md#2-the-agentic-engineering-mental-model-15-min) |
| Release-risk decision rule | [spec table](../templates/release-risk-spec.md), included | HIGH -> WATCH -> READY rule on deck and lab | Spoken order and plain text table |
| Demo 1 starter dashboard | [starter screenshot](./demo-1-starter.png), captured with synthetic data | Backup view of the missing indicator | Starter UI and [runbook](../agentic-engineering-demo-scripts.md#demo-1-weak-request-versus-engineered-task-15-min) |
| Reference dashboard | [reference screenshot](./demo-1-reference.png), captured with synthetic data | Backup view of the completed indicator; **not** a live agent result | [Reference copy](../demo/README.md) |
| Demo 1 weak/engineered plans | Capture from an authorized rehearsal; **not included yet** | Backup comparison of ambiguity and bounded plan | Two labeled prompt cards and facilitator's expected-answer list |
| Demo 2 mock MCP lookup | Capture on delivery machine; **not included yet** | Backup when tool connection fails | Same synthetic JSON fixture read directly; label as fallback |
| Motion / animation | None required | Avoid time and accessibility overhead | All information available as static text |

The two included screenshots show the fixture, not a live Copilot or MCP session. Do not claim pending captures have been made. Capture and check real demo backups before release; keep them synthetic and scrub paths/tokens. Update this manifest when files are added.
