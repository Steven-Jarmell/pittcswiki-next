---
title: "[DevLab] 5. Code Review Best Practices"
author: "Shreyash Ranjan"
date: "2025-01-14"
search_tags: ["code review", "pull request", "pr", "github", "collaboration", "feedback", "devlab"]
---

Code review is the practice of having someone else look at your code before it gets merged into the main codebase. In CSC Dev Lab projects, code review is essential for maintaining quality, sharing knowledge across your team, and catching bugs early.

While it might feel intimidating at first—someone critiquing your code!—code review is one of the best ways to improve as a programmer. You'll learn by reading others' code, get valuable feedback on your own, and catch bugs before they reach production.

## Code Review Overview

### What is Code Review?

**Code review** is the process of having teammates examine your code changes before they're merged into the shared codebase. In Dev Lab, this happens through **pull requests (PRs)** on GitHub.

The workflow looks like:
1. You write code on a feature branch (see [DevLab 2: Version Control](/guides/skills/csc-dev-lab/2-version-control))
2. You open a pull request asking to merge your branch
3. Teammates review your code, leave comments, and suggest changes
4. You address the feedback
5. Once approved, your code gets merged

### Why Code Review Matters for Dev Lab

**Benefits for the team:**
- **Catches bugs:** A second set of eyes spots issues you might have missed
- **Shares knowledge:** Reviewers learn about new code, authors learn better approaches
- **Maintains quality:** Ensures code follows team standards and patterns
- **Prevents bus factor:** Multiple people understand each part of the codebase

**Benefits for you personally:**
- **Improves your code:** Feedback makes you a better programmer
- **Expands your knowledge:** Reviewing others' code exposes you to new techniques
- **Builds communication skills:** Learning to give and receive technical feedback professionally

## The Pull Request Workflow

### Creating a Good Pull Request

Before asking for review, make your PR as clear and easy to review as possible:

**Write a descriptive title:**
- "Fix bug"
- "Fix login timeout on mobile Safari"

**Write a helpful PR description:**
```markdown
## What Changed
Added password reset functionality

## Why
Users who forget their password currently have to email support.
This was our #2 support request.

## How to Test
1. Go to /login
2. Click "Forgot Password?"
3. Enter your email
4. Check your email for reset link
5. Click the link and set a new password
6. Verify you can log in with the new password

## Screenshots
[Screenshot of the forgot password form]

Closes #247
```

**Use draft PRs for early feedback:**
GitHub lets you create "draft" pull requests. Use these when you want feedback on your approach before you've finished.

## Being a Good Code Author

### Before Submitting Your PR

**1. Review your own code first**

Before asking others to review, read through your own changes. You'll often catch:
- Debug statements you forgot to remove
- Confusing variable names
- Missing edge case handling
- Comments that don't match the code anymore

**2. Keep PRs small and focused**

Large PRs are hard to review and take longer to get feedback. Aim for:
- **200-400 lines changed:** The sweet spot for thorough review
- **One logical change:** Don't mix refactoring with new features
- **Single purpose:** Each PR should do one thing well

If your work is large, break it into multiple PRs.

**3. Make sure tests pass**

Don't send a PR with failing tests. Run your test suite locally and ensure all checks pass before requesting review.

**4. Follow your team's code style**

Use the linter and formatter your Dev Lab project has set up (Prettier, ESLint, Black, etc.). Consistent style makes reviews focus on logic, not formatting.

### Responding to Feedback

Getting feedback on your code can feel personal, but remember: **reviewers are critiquing the code, not you.**

**Do:**
- **Assume good intent:** Reviewers are trying to help
- **Ask clarifying questions:** "Can you elaborate on what you mean by 'too complex'?"
- **Distinguish must-fix from nice-to-have:** Not all feedback requires action
- **Push back respectfully:** If you disagree, explain your reasoning
- **Acknowledge reviewers:** "Good catch!" or "Thanks, fixed!"
- **Respond to every comment:** Either with a fix, an explanation, or a question

**Don't:**
- **Take it personally:** "You're always criticizing my code!"
- **Get defensive:** "This is the only way to do it."
- **Ignore feedback:** Address comments or explain why you're not addressing them

**Example of good responses:**

> Reviewer: "This function is doing too many things. Can we split it up?"
>
> You: "Good point! I broke it into `validateInput()` and `processData()`. Does that look better?"

> Reviewer: "Consider using a hash map here for O(1) lookup."
>
> You: "I thought about that, but the array is always <10 items so the complexity difference is negligible, and the array approach is more readable. What do you think?"

## Being a Good Code Reviewer

### What to Look For

When reviewing code, consider multiple dimensions:

**1. Correctness**
- Does it work? Does it solve the problem?
- Are there edge cases or bugs?
- Will it handle unexpected inputs gracefully?

**2. Design**
- Is this the right approach?
- Does it fit with the existing architecture?
- Is it solving the right problem?

**3. Complexity**
- Is it understandable? Could another developer maintain it?
- Is it overly complex or "clever"?
- Could it be simpler?

**4. Testing**
- Are there tests? Do they cover the important cases?
- Do the tests actually test what they claim to?

**5. Naming**
- Are variables, functions, and classes well-named?
- Is the naming consistent with the rest of the codebase?

**6. Documentation**
- Are complex parts explained?
- Would someone unfamiliar with this code understand it?

**7. Style**
- Does it follow the project's coding conventions?

### How to Give Feedback

The _how_ of code review matters as much as the _what_. Your goal is to help your teammate improve, not to show off.

#### Tone and Language

**Use "we" and "I" language:**
- "I find this confusing, can we clarify?"
- "This is confusing."

**Ask questions instead of commands:**
- "What do you think about extracting this into a separate function?"
- "Extract this into a separate function."

**Explain the "why" behind suggestions:**
- "Let's add a check for null here because the API sometimes returns null for missing users"
- "Add a null check"

**Praise good patterns:**
- "Nice abstraction here! This will make testing much easier."
- "Great error messages—these will be helpful for debugging."

**Label nitpicks:**
If something is minor, say so:
- "Nit: extra whitespace on line 42"
- "Minor: could use a const here instead of let"

#### Comment Types

**Blocking comments:** Must be addressed before merging
- "This will throw an error if the array is empty"
- "This breaks the user authentication flow"

**Non-blocking suggestions:** Nice-to-have improvements
- "Consider adding a comment explaining this regex"
- "This could be simplified using Array.reduce()"

**Questions:** Seeking understanding
- "Why did we choose this approach over using the existing utility?"

**Learning comments:** Sharing knowledge
- "TIL: JavaScript's sort() mutates the array!"
- "Cool use of destructuring here"

### Review Checklist

- [ ] Does the code do what the PR description says?
- [ ] Are there obvious bugs or unhandled edge cases?
- [ ] Is the code readable and maintainable?
- [ ] Are there tests that actually test the behavior?
- [ ] Are names clear and consistent?
- [ ] Are there security issues (SQL injection, XSS, exposed secrets)?
- [ ] Does it follow the project's style guide?
- [ ] Could this be simpler?

## Dev Lab Code Review Process

### Recommended Workflow

**1. Require at least 1 approval before merging**
- Set up branch protection on your main branch
- Configure it to require at least one approving review

**2. Review within 24 hours**
- Set a team expectation: PRs should be reviewed within one day
- Use GitHub notifications to stay updated

**3. Small, frequent PRs**
- Encourage team members to submit smaller PRs more often
- Easier to review, faster feedback, less painful to rebase

**4. Use PR templates**
Create a `.github/pull_request_template.md`:
```markdown
## What Changed


## Why


## How to Test


## Checklist
- [ ] Tests pass
- [ ] Linter/formatter run
- [ ] Documentation updated (if needed)
```

**5. Review your own team's code first**
- Prioritize reviewing your Dev Lab teammates' PRs over external projects
- Keeps your project moving forward
- 
## Tools and Setup

### GitHub PR Features

**Request specific reviewers:**
- Assign teammates who know the relevant code

**Use inline suggestions:**
GitHub lets you suggest code changes reviewers can apply with one click:
```suggestion
const result = array.filter(x => x > 0)
```

**Resolve conversations:**
Mark comment threads as "resolved" once addressed

**Link issues:**
Use "Closes #123" in PR description to auto-close issues

### Optional: Conventional Comments

Use [Conventional Comments](https://conventionalcomments.org/) to structure feedback:
- `praise:` Positive feedback
- `nitpick:` Minor style suggestion
- `suggestion:` Proposed improvement
- `issue:` Must be addressed
- `question:` Seeking clarification

Example: `nitpick: This variable name could be more descriptive`

## Recommended Resources

- [Google's Code Review Developer Guide](https://google.github.io/eng-practices/review/) - Comprehensive guide
- [How to Make Your Code Reviewer Fall in Love with You](https://mtlynch.io/code-review-love/) - Practical PR tips
- [The Art of Giving and Receiving Code Reviews Gracefully](https://www.alexandra-hill.com/2018/06/25/the-art-of-giving-and-receiving-code-reviews/) - The human side
- [How to Write the Perfect Pull Request](https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request/) - GitHub's advice
- [Conventional Comments](https://conventionalcomments.org/) - Structured comment format

## Next Steps

- Set up branch protection on your main branch requiring PR reviews
- Create a PR template for your Dev Lab project
- Review the next PR from your teammate using the checklist in this guide
- Read [DevLab 6: Writing Design Docs](/guides/skills/csc-dev-lab/6-design-docs) for planning larger features
