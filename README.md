# Pitt Computer Science Wiki

A modern, community-driven knowledge platform for University of Pittsburgh Computer Science students. This resource provides comprehensive guides on academics, careers, technical skills, and student life.

**[Live Website](https://pittcswiki.com)** | **[Report Issues](https://github.com/pittcsc/pittcswiki-next/issues)** | **[Contributing Guide](docs/contributing.md)**

## About

The Pitt CS Wiki is a comprehensive resource with 57+ guides covering:

- **Academics**: Majors, minors, course planning, and degree requirements
- **Career Development**: Internship strategies, resume tips, and interview prep
- **Technical Skills**: Getting started with programming languages, frameworks, and tools
- **Student Life**: Academic integrity, graduate school applications, and networking

Rebuilt from the ground up with modern tools for better maintainability, performance, and user experience.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) 14, [React](https://react.dev/) 18, [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [PostCSS](https://postcss.org/)
- **Content**: Markdown with [Gray Matter](https://github.com/jonschlinkert/gray-matter), [Remark GFM](https://github.com/remarkjs/remark-gfm)
- **Code Quality**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)
- **Hosting**: [Netlify](https://netlify.com/)

## Getting Started

### Prerequisites

- Node.js 20+ (see `.nvmrc`)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/pittcsc/pittcswiki-next.git
cd pittcswiki-next

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm start                # Start production server
npm run lint             # Run ESLint
npm run format           # Check code formatting
npm run format:fix       # Auto-format code with Prettier
npm run generate-metadata # Generate guide metadata
```

## Project Structure

```
src/
├── app/          # Next.js 13+ App Router
├── components/   # React components
├── data/         # Content guides and course data
├── context/      # React context (theme, etc.)
├── hooks/        # Custom React hooks
├── enums/        # TypeScript enums
└── public/       # Static assets
```

Guides are stored as Markdown in `data/guides/` and organized by category:

- `data/guides/academics/` - Academic planning guides
- `data/guides/career/` - Career development resources
- `data/guides/skills/` - Technical skill guides

## Contributing

We welcome contributions! Whether you're adding new guides, fixing bugs, or improving the site:

1. **Check the [Contributing Guide](docs/contributing.md)** for detailed instructions
2. **For new guides**: Add markdown files to `data/guides/` with YAML frontmatter
3. **For code changes**: Follow our formatting standards (ESLint + Prettier)
4. **Submit a PR** with a clear description of your changes

### Code Quality

All code must pass:

```bash
npm run lint    # ESLint validation
npm run format  # Prettier formatting
npm run build   # Production build
```

## Features

- 📚 **57+ Comprehensive Guides** organized by category
- 🌙 **Dark Mode Support** with user preference persistence
- 📱 **Responsive Design** optimized for mobile and desktop
- 🔍 **Search Functionality** across all guides
- 📖 **Auto-generated Table of Contents** for every guide
- 📥 **PDF Export** for offline reading
- 👥 **Git-based Author Attribution** from commit history
- 📊 **Interactive Course Explorer** with degree requirements
- 🔗 **Edit on GitHub** links for easy contributions
- 📈 **Reading Time Estimates** and word counts

## Deployment

The site is automatically deployed to Netlify when changes are pushed to the `main` branch. The CI/CD pipeline runs on every commit to ensure code quality.

## License

This project is open source and available under the MIT License.

## Contact & Support

- **Questions or Ideas?** [Open a GitHub Issue](https://github.com/pittcsc/pittcswiki-next/issues)
- **Reach Out**: [PittCSC@gmail.com](mailto:PittCSC@gmail.com)
- **Original Wiki**: [Legacy Repository](https://github.com/pittcsc/pittcswiki)
