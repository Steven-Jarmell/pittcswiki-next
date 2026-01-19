---
title: "[DevLab] 2. Version Control: Git & GitHub"
author: "Liam Brem"
date: "2026-01-06"
---

For many people, Git can feel like a collection of commands or buttons in your IDE that can be used without knowing exactly what they do.  

While this may work at first, it quickly breaks down in real projects where actually understanding Git is essential to collaborating safely and effectively.

This guide is intentionally detailed. If you follow it carefully, you should walk away understanding **what Git is doing**, **how GitHub fits in**, and **how to contribute to almost any repository**.

---

## 1. Why Version Control Exists (The Real Problem It Solves)

Imagine three people editing the same file:
- Who changed what?
- What if I'm trying to work on the same feature as someone else?
- How do you experiment without braking everything?

Version control answers all of these questions.

Git provides:
- A complete history of changes
- Safe experimentation via branches
- A structured way to collaborate

This is why Git and other version control systems are so foundational professional engineering.

---

## 2. Git vs GitHub (A Practical Mental Model)

### Git: Local History 

Git lives **entirely on your computer**.

It is responsible for:
- Tracking file changes
- Creating commits
- Managing branches
- Merging and rebasing code

Even without GitHub, Git still works.

### GitHub: Shared Collaboration 

GitHub is a **remote service** that:
- Stores repositories online
- Hosts forks
- Enables Pull Requests and reviews
- Runs CI checks
- Centralizes collaboration

---

## 3. Core Git Concepts 

What does Git *actually* do

### Working Directory → Staging Area → Commit

Git tracks changes in three steps:

1. **Working Directory**  
   Files you are actively editing (that have been saved)

2. **Staging Area**  
   Changes you have *explicitly* selected

3. **Commit**  
   A permanent snapshot of staged changes

Commands:

```bash
git status        # See current state
git add file.py   # Stage a file
git add .         # Stage all changed files
git commit -m "Explain why this change exists"
````

If a change is not committed, Git **won't remember it**.

---

## 4. Commits: Writing Readable History 

A commit is more than just saving your work; it's also documentation.

### Making a Solid Commit

* Focused (one idea)
* Descriptive message
* Explains *why*, not just *what*

Bad:

> fix bug

Good:

> Fix null pointer error when user profile is missing

Your future teammates, coworkers, and even *you* will read this history.

---

## 5. Branching 🪾

According to the git docs, a branch is a movable pointer to a commit.

### What dose this mean?

Branches allow you to:

* Work independently
* Avoid breaking `main`
* Submit changes for review

### Standard Branch Practice

* `main` is stable
* ALL your work should happen on feature branches

```bash
git checkout -b feature/user-auth
```

You can delete branches safely after merging. They are lightweight and disposable:

```bash
git checkout -b main
git branch -d feature/user-auth
```

---

## 6. Understanding GitHub Remotes (Origin vs Upstream)

When contributing to an existing project, you usually have:

* **origin** → your fork
* **upstream** → original project

Why this matters:

* You pull updates from upstream (usually features others have added to the main repo)
* You push changes to origin (your fork)

```bash
git remote -v
git fetch upstream
git rebase upstream/main
```

This keeps your work up-to-date and minimizes conflicts.

---

## 7. Pull Requests

A Pull Request (PR) is firstly, a request for feedback and secondly, a request to merge.

### What Happens in a PR

* Reviewers read your code
* Automated checks run
* Changes are discussed
* Improvements are suggested

This process improves:

* Code quality
* Team alignment
* Knowledge sharing

---

## 8. How to Open a Pull Request (Step-by-Step)

1. Push your branch to your fork

   ```bash
   git push origin feature/user-auth
   ```

2. Open the repository in GitHub → “Compare & Pull Request”

3. Fill out the PR template carefully

4. Submit and wait for feedback

Be descriptive in your PRs. Similarly to commits, never open one just saying "pls review."

---

## 9. What Makes a Great Pull Request (In Practice)

A great Pull Request is one that a reviewer can understand, reason about, and confidently approve.

---

### How Big Should a Pull Request Be?

There is no strict rule, but there *is* a strong guideline.

**Aim for ~100–200 lines of code changed.**

This may sound surprisingly small, but that's the point.

#### Why Smaller PRs Are Better

Smaller PRs:
- Are easier and faster to review
- Reduce the chance of bugs slipping through
- Make intent clearer
- Minimize merge conflicts
- Keep project history clean and understandable

When a reviewer sees a 150-line PR, they can usually:
- Read every line
- Understand the change fully
- Give meaningful feedback

When a PR is 500, 700, 1,000 + lines, even experienced engineers would have a hard time reviewing it.

---

### “But My Feature Is Bigger Than That”

This is normal, especially early in a project.

However, context matters.

#### Early-Stage Projects
When a project is brand new:
- Initial setup PRs may be larger
- Scaffolding and base architecture often require more code
- Larger PRs are sometimes unavoidable

This is acceptable **early on**.

#### Mature Projects
As a project grows:
- Large PRs should be avoided
- Changes affect more systems and areas of the project
- Review complexity increases exponentially

At this stage, large features should be **broken into multiple PRs**, for example:
- One PR for data models
- One PR for API endpoints
- One PR for UI 

Each PR should still stand on its own and be reviewable independently.

---

### How to Keep PRs Small

If your PR feels too large, ask:
- Can I split this down into logical steps?
- Are there refactors mixed with the feature changes?
- Am I solving more than one problem at once?

---

### Reviewer Perspective

Remember: reviewers are often:
- Context-switching
- Reviewing multiple PRs
- Trying to protect the stability of the codebase

---

### Summary Rule of Thumb

- **100–200 lines:** Ideal
- **300–500 lines:** Acceptable with good structure
- **500+ lines:** Should be questioned and likely split
- **Early project setup:** Larger PRs are understandable
- **Growing projects:** Smaller PRs are essential



## 10. Rebasing Without Fear

Rebasing keeps history clean by replaying your commits.

### When to Rebase

* Before opening a PR
* When upstream `main` changes

```bash
git fetch upstream
git rebase upstream/main
```

If conflicts occur:

* Git pauses
* You resolve files manually
* You continue the rebase

```bash
git rebase --continue
```

Read more [here](https://git-scm.com/book/en/v2/Git-Branching-Rebasing).

---

## 11. Merge Conflicts: Don't Be Scared

Merge conflicts occur when Git cannot decide which change is correct.

This is common when:

* Two people edit the same lines
* A branch falls behind main

### How to Resolve Conflicts

1. Open the conflicted file
2. Read both versions carefully
3. Choose or combine changes
4. Remove conflict markers
5. Commit the resolution

Read more [here](https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts).

---

## 12. A Solid Contribution Workflow

Follow this *almost* every time:

1. Fork the repository
2. Clone your fork locally
3. Add upstream
4. Create a branch
5. Make small commits
6. Rebase on upstream/main
7. Push to origin
8. Open a PR
9. Respond to reviews
10. Merge

---

## 14. Resources to Learn More

### Learn Git Visually

* [https://learngitbranching.js.org](https://learngitbranching.js.org)
* [https://git-school.github.io/visualizing-git/](https://git-school.github.io/visualizing-git/)

### Official Documentation

* Git Docs: [https://git-scm.com/docs](https://git-scm.com/docs)
* GitHub Docs: [https://docs.github.com](https://docs.github.com)

### Best Practices

* [https://chris.beams.io/posts/git-commit/](https://chris.beams.io/posts/git-commit/)
* [https://google.github.io/eng-practices/review/](https://google.github.io/eng-practices/review/)

---

## Final Thoughts

If Git feels overwhelming, that is a sign you are learning it *properly*.

Once these concepts click, contributing to a GitHub project stops feeling risky and starts feeling routine. Dev Lab exists to help you reach that point.

>Editor's note: most IDEs have built in Git & GitHub features, where you can simply click a button to commit, create a new branch, etc. However, I strongly suggest you learn and get familiar with the terminal commands. It really helps you understand what you're *actually* doing. Plus, it's a lot easier to learn what the buttons in your IDE are doing once you know the commands than the other way around!



