# CI/CD Pipeline Setup

This repository uses GitHub Actions for Continuous Integration. The pipeline is defined in `.github/workflows/ci.yml`.

## Overview

The CI pipeline runs on every push to the `main` branch and on every Pull Request targeting `main`. It performs the following checks:

1.  **Linting**: Checks for code quality issues using ESLint (`npm run lint`).
2.  **Formatting**: Verifies code formatting using Prettier (`npm run format`).
3.  **Testing**: Runs unit tests using Jest (`npm test`).
4.  **Building**: Builds the Next.js application (`npm run build`).

## Running Locally

To ensure your changes will pass CI, you can run the following commands locally:

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Tests

```bash
npm test
```

To run tests in watch mode:

```bash
npm run test:watch
```

### 3. Linting

```bash
npm run lint
```

### 4. Formatting

Check formatting:

```bash
npm run format
```

Fix formatting issues:

```bash
npm run format:fix
```

### 5. Build

```bash
npm run build
```

## Troubleshooting

- **Linting Errors**: Run `npm run lint` to see the errors. Many can be fixed automatically, but some may require manual intervention.
- **Formatting Errors**: Run `npm run format:fix` to automatically format your code.
- **Test Failures**: Run `npm test` to see which tests are failing. Check the output for details.
- **Build Failures**: Ensure you have all dependencies installed and that there are no type errors.
