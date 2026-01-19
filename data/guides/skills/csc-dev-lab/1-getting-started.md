---
title: "[DevLab] 1. Getting Started: Project Setup"
author: "Liam Brem"
date: "2026-01-05"
---

One of the nonobvious gaps between coursework and real-world software engineering is **getting a project running locally**.

In class, you are usually given starter code, a predefined environment, clear instructions, and maybe even a few test cases. In industry-like environments, you are expected to take an existing codebase, understand how it works, and set it up yourself.

This guide walks through _a general workflow_ that you will use in (hopefully) many more software projects:

- Forking a repository
- Cloning code locally
- Preparing the project for development
- Understanding common development environments

---

## 1. Forking: Creating Your Own Copy

Most Dev Lab projects live in CSC-owned GitHub repositories. You **do not** push directly to these repositories.

Instead, you start by **forking** the project.

### What Is a Fork?

A fork is your personal copy of a repository under _your_ GitHub account. It allows you to:

- Experiment and make changes freely without breaking the main project
- Work at your own pace
- Submit your changes for review via a **Pull Request (PR)**

> _Don't worry,_ We'll dive deeper into how GitHub works in the next section!

### How to Fork

1. Navigate to the project’s GitHub repository.
2. Click the **Fork** button in the top-right corner.
3. Select your personal GitHub account.

You now have your own version of the project that you own and fully control.

> This is the same workflow used for contributing to open-source projects like React, VSCode, or Python.

---

## 2. Getting the Code: Cloning Your Fork

Once you’ve forked the repository, you need to actually get the code on your local machine. I mean, how else are you going to write code? (_Please_ don't use the built-in GitHub editor.)

### What Is Cloning?

Cloning downloads the repository to your computer and connects it to Git so you can:

- Edit files locally
- Track changes
- Push commits back to your fork on GitHub

### Clone via HTTPS or SSH

From your fork’s GitHub page:

```bash
git clone https://github.com/YOUR_USERNAME/project-name.git
```

Or, if you have SSH set up:

```bash
git clone git@github.com:YOUR_USERNAME/project-name.git
```

This creates a new directory containing the full codebase.

---

## 3. Understanding the Repository Structure

Before writing code, **take some time to explore the codebase**.

A typical project might look like this:

```text
project-name/
├── README.md
├── CONTRIBUTING.md
├── package.json / pyproject.toml / requirements.txt
├── src/
├── tests/
└── .gitignore
```

Key files to read first:

- **README.md** – What the project does and how to run it
- **CONTRIBUTING.md** – Rules for contributing (required reading)
- **Config files** – Tell you how the project is built and run

---

## 4. Getting the Project Ready Locally

Once cloned, almost every project will require some setup before it can be run.

This usually includes:

- Installing dependencies
- Setting up environment variables
- Running database migrations or setup scripts

Below are two common environments you’ll encounter in Dev Lab:

---

## 5. Development Environment Examples

### Node.js (JavaScript / TypeScript)

Node projects typically include a `package.json` file.

#### Setup Steps

1. Ensure Node.js is installed:

   ```bash
   node --version
   npm --version
   ```

   If this doesn't work, [install it here](https://nodejs.org/en/download).

2. Install project dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   npm start
   ```

Dependencies are installed into a `node_modules/` folder, which should **never** be committed to Git. (More on that later!)

---

### Python

Python projects usually rely on **virtual environments** to isolate dependencies.

#### Setup Steps

1. Ensure Python is installed:

   ```bash
   python3 --version
   ```

   If this doesn't work, [install it here](https://www.python.org/downloads/).

2. Create a virtual environment:

   ```bash
   python3 -m venv venv
   ```

3. Activate it:

   ```bash
   source venv/bin/activate
   ```

4. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

5. Run the application:

   ```bash
   python main.py
   ```

   or via a framework-specific command (Flask, Django, FastAPI, etc.)

> **Why virtual environments matter:** They prevent dependency conflicts between projects—an essential habit for real engineering work.

Read more about Python virtual enviroments [here](https://docs.python.org/3/library/venv.html).

---

## 6. Contributing.md: The Rules of Contributing

Most collaborative projects on GitHub have a `CONTRIBUTING.md` file. This document defines:

- Branch naming conventions
- Commit message format
- Code style rules
- How to submit a Pull Request
- How reviews are handled

Before writing **any** code, read this file.

Ignoring contributing guidelines is one of the fastest ways to get a PR rejected.

Many Contributing.md files also have helpful tips on setting your project up.

---

## 7. The Workflow

Putting it all together, your workflow should look like this:

1. Fork the repository
2. Clone your fork locally
3. Read the README and CONTRIBUTING docs
4. Set up the development environment
5. Create a new branch
6. Make changes and commit them
7. Push to your fork
8. Open a Pull Request

---

## Final Thoughts

Setting up a project can often seem daunting, but that’s normal.

The goal of Dev Lab is not just to improve your programming skills, but to teach you how to **operate inside a real codebase**. Once you are comfortable with this workflow, you will feel much more confident going into internships, research projects, or open-source communities.
