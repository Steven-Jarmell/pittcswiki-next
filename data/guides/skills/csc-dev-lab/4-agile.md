---
title: "[DevLab] 4. Agile & Project Management"
author: "Shreyash Ranjan"
date: "2025-01-14"
search_tags: ["agile", "scrum", "sprint", "kanban", "project management", "software development", "team", "devlab"]
---

You've probably heard the word "sprint" thrown around in software contexts, or maybe you've seen a project board with cards moving from "To Do" to "Done." These are parts of **Agile**, a popular approach to managing software projects that you'll use in CSC Dev Lab projects and encounter at your internships.

Agile is less about following rigid rules and more about embracing a set of principles that help teams build software iteratively and adaptively. Instead of planning everything upfront and hoping it works (the old "waterfall" approach), Agile teams work in short cycles, get feedback, and adjust as they go.

## Agile Overview

### What is Agile?

**Agile** is a philosophy for software development that values:
- **Individuals and interactions** over processes and tools
- **Working software** over comprehensive documentation
- **Customer collaboration** over contract negotiation
- **Responding to change** over following a plan

These come from the [Agile Manifesto](https://agilemanifesto.org/), written in 2001 by developers who were tired of projects failing because requirements changed but plans didn't.

In practice, Agile means working in short cycles, showing your work frequently, getting feedback, and being willing to pivot when you learn something new. It's the opposite of spending months planning every detail, building everything, and then discovering users wanted something completely different.

### Why Agile Exists

Before Agile, many teams used the **waterfall model**: gather all requirements → design everything → build everything → test everything → ship. The problem? By the time you shipped (often 12-18 months later), the requirements had changed, the market had shifted, or you realized your original assumptions were wrong.

Agile acknowledges that change is inevitable and actually _embraces_ it. Instead of trying to predict the future perfectly, you make your best guess, build a little, learn from it, and adjust.

### Common Agile Frameworks

#### Scrum

**Scrum** is the most popular Agile framework, especially for CSC Dev Lab projects. It organizes work into **sprints**—fixed time periods (usually 1-2 weeks for Dev Lab) where you complete a set of work and then review what you've done.

**Key Roles in Scrum:**
- **Product Owner:** Represents the user/customer and decides what features to build
- **Scrum Master:** Facilitates the process and removes blockers
- **Development Team:** The people actually building the software

> In Dev Lab projects, you might not have formal roles, but understanding them helps. Someone usually acts as the "product owner" (defining requirements), and you'll all be on the development team.

**Sprints** are the heartbeat of Scrum. Sprint planning is really just "what are we doing this week?" You pick work from the backlog, commit to completing it, and then you're off to the races.

#### Kanban

**Kanban** is a visual system for managing work. Instead of fixed sprints, work flows continuously through stages (like "To Do," "In Progress," "Done"). You'll use Kanban boards on GitHub Projects for Dev Lab.

The main principle is to **limit work in progress (WIP)**—don't start too many things at once. Finish what you're working on before picking up something new.

![Kanban Board](/images/kanbanboard.png)

<p style="text-align: center; font-size: 0.875em; color: #666; margin-top: 0.5em;">Example of Kanban board</p>

## Agile Ceremonies for Dev Lab

"Ceremonies" might sound formal, but they're really just team meetings with specific purposes:

### Sprint Planning

**What it is:** The team decides what work to complete during the upcoming sprint.

**How it works:**
1. Review the product backlog (list of all potential work)
2. Discuss each item: What does it involve? How long will it take?
3. Team commits to a realistic amount of work for the sprint

**For Dev Lab:** For a 1-2 week sprint, spend 30-45 minutes deciding which features to tackle. "We'll finish the login page, implement the search functionality, and write tests for the API."

### Daily Standups (Daily Scrum)

**What it is:** A quick daily or regular sync where everyone shares what they're working on.

**The classic format:**
1. What did I do yesterday?
2. What will I do today?
3. Do I have any blockers?

**Important:** Standups should be 15 minutes max.

**For Dev Lab:** Daily might be overkill. Try 2-3 times per week, maybe as quick async updates in the Discord: "Today: finishing the database schema. Blocked on: needing the API keys from Shreyash."

### Sprint Review / Demo

**What it is:** Show what you built during the sprint.

**How it works:**
- Team demonstrates completed work
- Stakeholders (project mentor, users) give feedback
- NOT a status meeting—you should actually demo working software

**For Dev Lab:** Present to your project mentor or team. Show the features running, walk through the code if relevant.

### Sprint Retrospective

**What it is:** The team reflects on how the sprint went and identifies improvements.

**The classic questions:**
1. What went well?
2. What didn't go well?
3. What should we change?

**Example outcomes:**
- "We spent too much time in meetings—let's combine sprint planning and backlog grooming."
- "The build kept breaking because we weren't running tests locally first—let's set up pre-commit hooks."
- "Great job unblocking each other quickly on Slack—keep it up!"

**For Dev Lab:** 15-20 minutes after your sprint review. Keep it simple: what worked, what didn't, one thing to change.

> Don't skip retrospectives. They're how you get better at working together.

## Agile Artifacts

These are the "documents" or "lists" that teams maintain:

### Product Backlog

The **product backlog** is the master list of everything that _might_ get built: features, bug fixes, technical improvements. It's prioritized, with the most important items at the top.

For Dev Lab, your backlog might be GitHub Issues.

### Sprint Backlog

The **sprint backlog** is the subset of items the team committed to completing in the current sprint.

Think of it as: Product backlog = "everything we could do someday," Sprint backlog = "what we're doing this week."

### User Stories

**User stories** are a common way to describe features from the user's perspective:

**Format:** "As a [type of user], I want [goal] so that [reason]."

**Examples:**
- "As a student, I want to search for courses by department so that I can plan my schedule."
- "As an admin, I want to export usage data to CSV so that I can analyze it in Excel."

User stories include **acceptance criteria**—how do we know it's done?

Example:
```
Story: As a user, I want to reset my password if I forget it.

Acceptance Criteria:
- [ ] "Forgot password" link on login page
- [ ] User enters email and receives reset link
- [ ] Reset link expires after 24 hours
- [ ] User can set new password via link
- [ ] User is logged in after resetting password
```

## Using Agile in Dev Lab Projects

**What works for Dev Lab:**
- Short sprints (1-2 weeks) with clear goals
- Regular check-ins (even async)
- Demo your progress periodically
- Retrospect and adjust
- Use GitHub Issues and Projects for tracking

**Don't over-engineer:**
- Skip formal roles if your team is small
- Don't stress about story pointing if it feels like overhead

The goal is to work iteratively and communicate well, not to follow a process perfectly.

## Recommended Resources

- [Agile Manifesto](https://agilemanifesto.org/) - The original 4 values and 12 principles
- [Atlassian's Agile Guide](https://www.atlassian.com/agile) - Excellent free resource with great visuals
- [Scrum Guide](https://scrumguides.org/) - Official guide to Scrum (short read)
- [Mountain Goat Software](https://www.mountaingoatsoftware.com/blog) - Mike Cohn's practical Agile advice
- **Tools:** [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects), [Trello](https://trello.com/), [Linear](https://linear.app/)

## Next Steps

- Read [DevLab 5: Code Review Best Practices](/guides/skills/csc-dev-lab/5-code-review) to learn how to review each other's work
- Set up your project board on [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects)
- Schedule your first sprint planning session
