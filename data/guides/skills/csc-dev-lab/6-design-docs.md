---
title: "[DevLab] 6. Writing Design Docs"
author: "Shreyash Ranjan"
date: "2025-01-14"
search_tags: ["design doc", "technical design", "TDD", "technical design document", "RFC", "architecture", "planning", "documentation", "devlab"]
---

Ever started coding a Dev Lab feature only to realize halfway through that your approach won't work, and now you need to rewrite everything? Or finished building something only to have your team say, "Wait, that's not what we needed"?

This is what **design docs** help prevent. A **design doc** (short for technical design document, sometimes called TDD—not to be confused with Test-Driven Development) is a written plan you create _before_ implementing a feature. This guide will show you how to write effective design docs for CSC Dev Lab projects.

## Design Docs Overview

### What is a Design Doc?

A **design doc** is a written technical plan that describes:
- **What problem** you're solving
- **How** you propose to solve it
- **Why** this approach over alternatives
- **What could go wrong** and how to mitigate it

Think of it as the blueprint before building. You wouldn't start building a house without plans, and you shouldn't start coding complex features without a design.

Design docs are different from:
- **Requirements documents:** Those describe _what_ to build, design docs describe _how_
- **Project plans:** Those focus on timelines, design docs focus on technical approach
- **API documentation:** That documents finished code, design docs are written before coding

**Important:** Design docs are **living documents**—they can evolve as you learn more.

### Why Write Design Docs in Dev Lab?

**1. Catch problems early**

Finding issues in a design doc takes minutes. Finding them in code after you've spent a week building takes hours or days to fix. You might discover:
- Your approach won't scale
- You're missing a critical edge case
- There's an existing solution you didn't know about
- Your API design is confusing

**2. Align team understanding**

Ever had a teammate build something that doesn't work with your code because you were imagining different approaches? Design docs get everyone on the same page _before_ coding starts.

**3. Document decision-making**

Two months from now, someone (maybe you!) will ask, "Why did we build it this way?" The design doc has the answer.

**4. Get feedback early**

It's easier to get feedback on a document than on code. Your project mentor or teammates can spot problems in your design quickly and suggest better approaches.

**5. Onboard new team members**

When someone joins your Dev Lab project mid-semester, design docs help them understand the architecture and decisions.

### When to Write a Design Doc

**Write a design doc for:**
- **Large features:** Anything that will take more than a week to implement
- **Architectural changes:** Changing how systems interact or adding new components
- **Multiple valid approaches:** When there are several ways to solve the problem
- **Unclear requirements:** When you need to clarify _what_ you're building

**Don't write a design doc for:**
- **Bug fixes:** Just fix the bug
- **Small UI tweaks:** Changing button colors doesn't need a design doc
- **Well-understood patterns:** If you're adding another API endpoint just like the existing 20, you probably don't need a doc

> When in doubt, write a short design doc. It forces you to think through your approach.

## Anatomy of a Design Doc

### Essential Sections

#### Title and Metadata

```markdown
# User Password Reset Flow

**Author:** Shreyash Ranjan
**Date:** January 10, 2025
**Status:** In Review
**Reviewers:** Jayden, Insiah
```

Clear, descriptive title. Include who wrote it, when, and what state it's in (Draft / In Review / Approved / Implemented).

#### Background / Context

**What problem are we solving?**
- What's the current state?
- Why are we doing this now?
- Who is affected?

**Example (Dev Lab project):**
> Currently, users who forget their password have no way to reset it. They have to contact us manually. Our last user testing showed this was the #2 complaint. We need a self-service password reset flow before the demo next month.

#### Goals and Non-Goals

**Goals:** What are we trying to achieve?
- Support password reset via email link
- Complete the flow in under 5 minutes
- Secure against common attacks (link expiry, rate limiting)

**Non-Goals:** What are we explicitly _not_ doing?
- Not supporting SMS-based password reset (future feature)
- Not adding two-factor authentication (separate project)
- Not migrating existing users (they keep their current passwords)

Success metrics help too:
- 95% of password resets complete successfully
- Reset flow takes < 3 minutes on average

#### Proposed Solution

Describe your approach at multiple levels:

**High-level overview:**
> We'll add a "Forgot Password" link on the login page. When clicked, users enter their email address. We'll send an email with a unique, time-limited reset token. Clicking the link takes them to a password reset form. After submitting a new password, the token is invalidated and the user is logged in.

**Architecture / Components:**

Use diagrams. You can draw on paper and take a photo, or use tools like [draw.io](https://draw.io/), [Excalidraw](https://excalidraw.com/):

```
User → Frontend → Backend API → Database
                          ↓
                    Email Service
```

**API contracts:**

```javascript
POST /api/auth/request-reset
Body: { email: "user@example.com" }
Response: { success: true, message: "Check your email" }

POST /api/auth/reset-password
Body: { token: "abc123...", newPassword: "..." }
Response: { success: true, sessionToken: "xyz..." }
```

**Data models:**

```sql
CREATE TABLE password_reset_tokens (
    id UUID PRIMARY KEY,
    user_id INT REFERENCES users(id),
    token_hash VARCHAR(255),
    expires_at TIMESTAMP,
    used BOOLEAN DEFAULT false
);
```

**Key algorithms:**

```
When reset is requested:
1. Generate random token (32 bytes)
2. Hash the token and store with expiry (24 hours)
3. Send email with unhashed token in URL
4. Rate limit: max 3 requests per hour per email

When password is reset:
1. Look up token_hash in database
2. Verify token hasn't expired and hasn't been used
3. Hash the new password
4. Update user's password
5. Mark token as used
6. Log the user in
```

#### Alternative Approaches

What other solutions did you consider? Why didn't you choose them?

**Alternative 1: Security questions**
- Pros: No email dependency
- Cons: Security questions are insecure; users forget answers
- Decision: Rejected due to security concerns

**Alternative 2: Admin-only password reset**
- Pros: Simpler to implement
- Cons: Doesn't scale; frustrates users
- Decision: Rejected; we want self-service

#### Security Considerations

**Example:**
> - Reset tokens are hashed in database (attacker with DB access can't use them)
> - Tokens expire after 24 hours
> - Rate limiting prevents brute force
> - Reset email doesn't confirm if account exists (prevents enumeration)

#### Testing Plan

How will you verify it works?

**Manual testing:**
- Happy path: User requests reset, receives email, resets password, logs in
- Token expires after 24 hours
- Using the same token twice fails
- Request reset for non-existent email

**Automated tests:**
- Unit tests for token generation and validation
- Integration test for full reset flow
- Security test: expired and used tokens are rejected

#### Open Questions

What are you still unsure about? Invite feedback:
- Should tokens expire after 1 hour, 24 hours, or 7 days?
- Do we need to log password resets for audit purposes?
- Should we invalidate other active sessions when password is reset?

### Optional Sections

- **Timeline:** When will each part be done?
- **Dependencies:** What does this depend on? What depends on this?
- **Monitoring:** What metrics will you track?

## The Design Doc Process

### 1. Draft Phase (30-60 minutes)

Write your first draft. Get it to ~80% complete—don't perfect it before sharing.

**Tip:** If you're stuck, start with the problem statement and proposed solution. You can always add more later.

### 2. Review Phase (Async + Meeting)

Share your doc with:
- Your Dev Lab team
- Your project mentor
- Anyone who'll be affected by this work

**Review can happen in two ways:**
- **Async comments:** People read and comment in Google Docs
- **Design review meeting:** 30 minutes to walk through the doc and discuss

### 3. Approval Phase

Get sign-off from:
- Your project mentor
- Team lead (if you have one)

Mark the doc as "Approved" and note the date.

### 4. Implementation Phase

Start coding! Reference your design doc as you build. If you discover your implementation needs to diverge:
- Update the doc to reflect reality
- Note why you deviated

Link to pull requests from the design doc.

### 5. Retrospective (Optional)

After you finish and ship:
- Add a "Lessons Learned" section
- What went well? What didn't?
- What would you do differently?

## Design Docs for Dev Lab Projects

### Recommended Approach

**Keep it lightweight but thorough:**
- A shared Google Doc works great
- Include essential sections (problem, solution, alternatives, testing)
- Don't stress about perfection—focus on clarifying your approach
- 2-4 pages is typical for Dev Lab features

**When to write design docs:**
- At the start of each major milestone
- When adding a new system component
- When you're unsure how to approach a problem

**Share early:**
- Don't wait until it's perfect
- Label it "Draft" and share at 70-80% complete
- Get feedback before you've committed to an approach

### Example Design Doc Structure for Dev Lab

```markdown
# [Feature Name]

**Author:** Your Name
**Date:** Date
**Status:** Draft/In Review/Approved
**Project:** Your Dev Lab Project Name

## Problem
A brief TL;DR of what arw we solving? Why now?

## Goals
- Goal 1
- Goal 2

## Non-Goals
- What we're not doing

## Proposed Solution
### High-Level Approach
[Paragraph description]

### Architecture
[Diagram using draw.io or excalidraw]

### API Design
[If applicable]

### Data Model
[If applicable]

## Alternative Approaches
### Alternative 1
- Pros:
- Cons:
- Decision:

## Testing Plan
- How we'll verify it works

## Open Questions
- Questions for reviewers

## Timeline (Optional)
- Week 1: ...
- Week 2: ...
```

## Templates and Examples

**Google Doc Template:**
Make a copy of this [Design Doc Template](https://docs.google.com) (I'll create this in a little)

**Real-world examples:**
- [Rust RFCs](https://github.com/rust-lang/rfcs) - See how Rust evolves through RFCs
- [Python PEPs](https://peps.python.org/) - Python Enhancement Proposals

## Recommended Resources

- [Design Docs at Google](https://www.industrialempathy.com/posts/design-docs-at-google/) - How Google uses design docs
- [A guide on how to write TDDs](https://medium.com/@kevinmwita7/a-guide-on-how-to-write-technical-design-documentations-tdds-be818da550c2) - Medium Article
- [How to Write a Technical Spec](https://stackoverflow.blog/2020/04/06/a-practical-guide-to-writing-technical-specs/) - Stack Overflow's guide
- **Diagram Tools:** [draw.io](https://draw.io/), [Excalidraw](https://excalidraw.com/), [Mermaid](https://mermaid-js.github.io/)

## Next Steps

- Create a design doc template for your Dev Lab project
- Write a design doc for your next major feature
- Share it with your team and get feedback
- Read [DevLab 7: Team Workflows](/guides/skills/csc-dev-lab/7-team-workflows) for managing communication and meetings
