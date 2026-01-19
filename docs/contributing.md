# Contributing to the Pitt CS Wiki

Thank you for your interest in contributing to the Pitt CS Wiki! We welcome contributions from the community, whether it's adding new guides, fixing bugs, or improving the codebase.

## How to Contribute

### Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/your-username/pittcswiki-next.git
   cd pittcswiki-next
   ```
3. **Create a new branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Adding or Editing Guides

1. Navigate to the appropriate directory in `data/guides/`:

   - `data/guides/academics/` - Academic planning guides
   - `data/guides/career/` - Career development resources
   - `data/guides/skills/` - Technical skill guides

2. Create or edit a `.md` file with the following frontmatter:

   ```yaml
   ---
   title: Your Guide Title
   author: Your Name
   search_tags:
     - tag1
     - tag2
   ---
   ```

3. Write your content in Markdown (supports GitHub-flavored markdown syntax)

### Code Changes

1. Follow the existing code style (TypeScript, React best practices)
2. Ensure your code passes linting and formatting:
   ```bash
   npm run lint      # Check for linting errors
   npm run format:fix # Auto-format your code
   ```
3. Test your changes locally:
   ```bash
   npm run build     # Build for production
   npm run dev       # Run development server
   ```

## Pull Request Process

1. **Push** your branch to your fork
2. **Create a Pull Request** on GitHub with:
   - A clear title describing your changes
   - A description of what you added/changed and why
   - References to any related issues (e.g., "Closes #123")
3. **Wait for review** - The maintainers will review your PR and provide feedback
4. **Address feedback** if requested
5. **Merge** - Once approved, your changes will be merged into main

## Guidelines

- **Check existing issues first** - Make sure the task you're working on isn't already assigned
- **Test before submitting** - Run `npm run build` and `npm run lint` locally
- **Write clear commits** - Use descriptive commit messages
- **Be respectful** - Treat other contributors with kindness and respect

## Questions?

- Open an issue on GitHub for questions or feature requests
- Reach out to the team at [PittCSC@gmail.com](mailto:PittCSC@gmail.com)

Thank you for helping improve the Pitt CS Wiki!
