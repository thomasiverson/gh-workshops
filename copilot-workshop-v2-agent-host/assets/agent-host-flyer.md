# GitHub Copilot: Zero to Agents Workshop (Agent Host)

**Duration**: 4 hours 45 minutes (including one 15-minute break; no lunch)

**Format**: Presentation + Live Demo + Hands-On
**Audience**: Developers with basic Copilot exposure (completions/chat)
**Focus**: Copilot Agent Host, portable customization, and local-to-cloud agent workflows

---

## Workshop Overview

This session teaches the forward GitHub Copilot workflow in VS Code: the Copilot harness running in Agent Host. Attendees learn to separate the host, harness, model, mode, permissions, environment, and worktree; build portable instructions, Agent Skills, custom agents, and MCP configuration; migrate Local prompt files; continue in GitHub Copilot CLI; and delegate independent work to cloud agents.

### Learning Objectives

- Start a Copilot Agent Host session and choose Interactive, Plan, or Autopilot with appropriate permissions and isolation
- Distinguish user, repository, and session memory from version-controlled team guidance
- Create custom instructions that encode team standards and internal frameworks
- Migrate deprecated Local prompt files into portable Agent Skills
- Design Agent Skills for relevance-based and explicit invocation
- Build a custom agent with a constrained tool profile and explain how a search-only planner prepares a human-reviewed delegation brief
- Configure portable `.mcp.json` servers for browser testing and GitHub integration
- Use GitHub Copilot CLI as another surface for the shared Copilot customization strategy
- Evaluate cloud agents: Copilot cloud agent for autonomous PR creation and GitHub Copilot code review for AI-powered review comments

### Prerequisites

| Requirement | Details |
|-------------|---------|
| **GitHub Account** | With a Copilot Pro, Pro+, Business, Enterprise, or Max entitlement that exposes the workshop features |
| **VS Code** | Version 1.140 or later; latest stable recommended |
| **Copilot Extension** | GitHub Copilot + GitHub Copilot Chat extensions installed |
| **Copilot Session Target** | Copilot harness visible and permitted by your organization |
| **Node.js** | Version 22 or higher |
| **npm** | Latest version recommended |
| **Git** | For cloning the demo repository |
| **GitHub Copilot CLI** | Install from [docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli) |
| **PowerShell on Windows** | PowerShell 7 or later for GitHub Copilot CLI |

Complete 30–45 minutes of required prework before the session: fork the repository, create the workshop branch from tested commit `71209b7a796c967ec1bfd65dcd5898220750e4e1`, commit and push the workshop-safe agent profile, run `npm ci`, build, and verify the app.

---

## Session Agenda

| Section | Topic |
|---------|-------|
| 1 | Welcome, Objectives & Environment Setup |
| 1b | Inline Completion & Inline Chat |
| 2 | Copilot Agent Host Sessions: Harness, Modes, and Workspaces |
| 2b | Copilot Interactive: Context, Tools, and Explicit Boundaries |
| 3 | Copilot Memory & Custom Instructions |
| 4 | Migrate Prompt Files to Agent Skills |
| Break | 15-minute break |
| 5 | Design Portable Agent Skills |
| 6 | Custom Agents in Agent Host |
| 7 | Portable MCP Configuration (Playwright + GitHub) |
| 8 | GitHub Copilot CLI: Same Runtime, New Surface |
| 9 | Cloud Agents: Copilot cloud agent + GitHub Copilot code review |
| 10 | Wrap-Up, Customization Hierarchy Recap & Q&A |
