---
title: "[DevLab] 3. Writing Clean Code"
author: "Liam Brem"
date: "2026-01-08"
---

Software engineering isn't only about making something that _works_, it’s about making something that is **easy to read, easy to maintain, and easy to build upon**. Writing clean code improves collaboration, reduces bugs, and is usually a priority in large-scale environments.

In this guide we cover:

- Why clean code matters
- Coding standards + Dev Lab-specific expectations
- Formatting and linting
- Effective naming
- The DRY principle
- Resources to learn more

---

## 1. Why Clean Code Matters

On a solo project with limited scope, it's easy to remember what a variable means or why a function exists.

When working on a team, this isn't as straightforward.

Clean code:

- Reduces cognitive load for you and your teammates
- Makes bugs easier to find
- Makes features easier to add
- Improves performance of reviews

Clean code != “perfect code” - it’s **communicative code**.

---

## 2. Coding Standards (CSC Dev Lab Expectations)

Coding standards are an organization/team’s agreed conventions for how code should look and behave.

While languages have their own idioms, Dev Lab expects:

- Consistent indentation and spacing
- Clear structure of code blocks and functions
- Comments only where they add clarity (not restating the obvious)
- Meaningful commit messages and PR descriptions

> Dev Lab may share specific linting rules and configs for each project. Be sure to read the project’s CONTRIBUTING.md or docs folder.

---

## 3. Code Formatting and Linting

Different languages use different conventions. For example, Python emphasizes readability and uses indentation for blocks; JavaScript has stylistic variations between spaces and semicolons.

Rather than arguing about style, professional teams use **automated tooling** to enforce consistency.

### What Linting/Formatting Tools Do

- Catch potential bugs (unused variables, unreachable code)
- Enforce style rules (indentation, quotes, semicolons)
- Standardize formatting (line length, spacing)

### Common Tools by Language

| Language                | Formatting         | Linting               |
| ----------------------- | ------------------ | --------------------- |
| JavaScript / TypeScript | Prettier           | ESLint                |
| Python                  | Black              | Flake8 / Pylint       |
| Java                    | Google Java Format | Checkstyle / SpotBugs |
| Go                      | gofmt / goimports  | built-in tooling      |

### Typical Workflow

1. Install the tooling in your project (often via config files).
2. Run formatting before commits.
3. Address warnings/errors before opening a PR.

Example: running Prettier on a JavaScript project:

```bash
npm install --save-dev prettier
npx prettier --write .
```

And running ESLint:

```bash
npx eslint .
```

Automated tooling reduces the need to manually keep formatting in mind when writing code.

---

## 4. Effective Naming Conventions

Naming matters more than you may realize. Poor names force readers to mentally decode meaning; good names _convey your intent_.

### Principles of Good Naming

- **Be descriptive:** `calculateWeeklyRevenue` > `calcRev`
- **Be consistent:** choose patterns and stick to them

### Examples

Bad:

```python
def handle(x, y):
    return x * y
```

Good:

```python
def calculate_area(width: float, height: float) -> float:
    return width * height
```

Even simple utilities benefit from clear names.

---

## 5. The DRY Principle (Don’t Repeat Yourself)

Writing repetitive code can be tedious, but that isn't the only reason to avoid it; it can also lead to many issues in the future.

### Why DRY Matters

Duplicated logic means:

- Fixing a bug in one place but forgetting the other
- Changing behavior in some places but not others
- Increasing cognitive load for you or future engineers

### How to Apply DRY

- Extract repeated logic into a function/module
- Use abstractions where appropriate (but avoid over-abstraction)
- Refactor when patterns emerge

Example (bad repetition):

```javascript
const taxNY = amount * 0.08875
const taxCA = amount * 0.0725
```

Better:

```javascript
function calculateTax(amount, rate) {
  return amount * rate
}
```

DRY doesn’t mean _never repeat anything_; It means avoiding repetition that will hurt the project over time.

---

## 6. Clean Code in the Review Process

Clean code is easier to **approve**.

When reviewing, ask:

- Does this follow the project’s style?
- Are names clear?
- Is the change focused?
- Are there unnecessary comments, unused code, or repetition?

During a review, you aren't just judging _does it work_, but _will it scale_.

---

## 7. Resources to Learn More

### General Clean Code

- **Clean Code: A Handbook of Agile Software Craftsmanship** (book by Robert C. Martin)
- **Refactoring: Improving the Design of Existing Code** (book by Martin Fowler)

### Naming, Style, and Best Practices

- _The Art of Readable Code_ (book + free excerpts online)
- _Chris Beams on Git Commit Messages_ (covers naming _in commits_, but applies to code too): [https://chris.beams.io/posts/git-commit/](https://chris.beams.io/posts/git-commit/)

### Language-Specific Style Guides

- JavaScript: [https://eslint.org/docs/latest/rules/](https://eslint.org/docs/latest/rules/)
- Python: [https://peps.python.org/pep-8/](https://peps.python.org/pep-8/) (PEP 8 is the canonical style guide)
- Go: [https://pkg.go.dev/fmt](https://pkg.go.dev/fmt)

### Tools and Tutorials

- Learn to configure Prettier + ESLint: [https://prettier.io/docs](https://prettier.io/docs)
- Python Black and Flake8 setup: [https://github.com/psf/black](https://github.com/psf/black)
