# Connect Web

Frontend codebase for Connect's client projects.

---

## Tech Stack

### Core Framework

* Next.js 15+
* React 19+
* TypeScript

### Styling

* Tailwind CSS
* DaisyUI

### Code Quality

* ESLint
* Prettier (recommended)

### Version Control

* Git
* GitHub

---

## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/connect-tech-source/connect-web.git
cd connect-web
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
npm start
```

---

## Recommended Folder Structure

```text
src/
├── app/                # Next.js App Router pages and layouts
├── components/         # Reusable UI components
├── features/           # Feature-specific modules
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and helpers
├── services/           # API calls and integrations
├── types/              # Global TypeScript types
├── constants/          # Static constants
└── styles/             # Additional styling files
```

---

## Coding Standards

### General Guidelines

* Use TypeScript for all new code.
* Prefer functional components.
* Use named exports when practical.
* Keep components small and focused.
* Avoid hardcoded values; use constants.
* Reuse components instead of duplicating UI.
* Remove unused code before creating a pull request.

### Naming Conventions

| Item             | Convention                  | Example                   |
| ---------------- | --------------------------- | ------------------------- |
| Components       | PascalCase                  | `UserCard.tsx`            |
| Hooks            | camelCase with `use` prefix | `useAuth.ts`              |
| Utilities        | camelCase                   | `formatCurrency.ts`       |
| Constants        | UPPER_SNAKE_CASE            | `API_BASE_URL`            |
| Types/Interfaces | PascalCase                  | `User`, `ApiResponse`     |
| CSS Classes      | Tailwind utility classes    | `flex items-center gap-2` |

### Component Best Practices

* One component should solve one responsibility.
* Keep business logic outside UI where possible.
* Use props interfaces for all component props.
* Memoize only when there is a measurable benefit.

### Styling Guidelines

* Use Tailwind CSS utilities.
* Use DaisyUI for standard components such as buttons, cards, and modals.
* Keep custom CSS to a minimum.

---

## Git Workflow

We follow a branch-based workflow.

### Branch Purpose

| Branch        | Purpose                                           |
| ------------- | ------------------------------------------------- |
| `main`        | Production-ready code                             |
| `development` | Active integration branch for ongoing development |
| `feature/*`   | Individual feature work                           |
| `bugfix/*`    | Bug fixes                                         |
| `hotfix/*`    | Urgent production fixes                           |

### Important Rules

* **Never commit directly to `main`.**
* **Never commit directly to `development`.**
* Always create your branch from `development`.
* All pull requests should target `development`.
* Only tested and approved code is merged into `main`.

### Creating a Feature Branch

```bash
git checkout development
git pull origin development
git checkout -b feature/login-page
```

### Pushing Your Branch

```bash
git push -u origin feature/login-page
```

### Creating a Pull Request

* Open a PR from your feature branch to `development`.
* Request review from relevant team members.
* Address review comments before merging.

---

## Git Commit Convention

We follow a simplified Conventional Commits format.

### Format

```text
<type>: <short description>
```

### Common Types

| Type       | Usage                                      |
| ---------- | ------------------------------------------ |
| `feat`     | New feature                                |
| `fix`      | Bug fix                                    |
| `refactor` | Code restructuring without behavior change |
| `style`    | Formatting only                            |
| `docs`     | Documentation changes                      |
| `test`     | Tests added or updated                     |
| `chore`    | Maintenance tasks                          |

### Examples

```bash
feat: add login page
fix: resolve navbar mobile menu issue
refactor: simplify authentication hook
docs: update README
chore: upgrade dependencies
```

---

## Pull Request Guidelines

Before opening a PR, ensure:

* Code builds successfully.
* ESLint passes.
* No debug code or `console.log` statements remain.
* Feature has been tested locally.
* PR title follows commit convention.
* PR description clearly explains the change.

---

## Code Review Checklist

Reviewers should verify:

* Code readability and maintainability.
* Correctness and edge case handling.
* Consistency with project architecture.
* No unnecessary complexity.
* Proper TypeScript typing.
* Responsive UI behavior.

---

## Branch Promotion Flow

```text
feature/*  →  development  →  main
```

1. Developer creates a branch from `development`.
2. Developer opens a PR into `development`.
3. After QA/testing, `development` is merged into `main`.
4. `main` is deployed to production.

---

## Useful Commands

### Start Development

```bash
npm run dev
```

### Lint Code

```bash
npm run lint
```

### Build Project

```bash
npm run build
```

---

## Team Collaboration Rules

* Pull the latest `development` branch before starting work.
* Keep branches focused on one task.
* Write meaningful commit messages.
* Resolve conflicts locally before requesting review.
* Communicate blockers early.

---

## Environment Variables

Store environment variables in:

```text
.env.local
```

Never commit secrets to the repository.

---

## Deployment Strategy

* `development` → Staging/UAT environment
* `main` → Production environment

---

## Maintainers

Frontend Team at Connect.
