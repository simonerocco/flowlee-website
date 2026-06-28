# Flowlee Website

The marketing website for [Flowlee](https://flowlee.com) — an AI-powered work management platform that transforms team activity into organised tasks, timelines, and priorities automatically.

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| [Bun](https://bun.com) | ≥ 1.2 | Runtime, bundler, package manager |
| [React](https://react.dev) | 19 | UI framework |
| [React Router](https://reactrouter.com) | 7 | Client-side routing |
| [TailwindCSS](https://tailwindcss.com) | 4 | Utility-first styling |
| [TypeScript](https://www.typescriptlang.org) | 5 | Type safety |
| [ESLint](https://eslint.org) | 10 | Linting |
| [Prettier](https://prettier.io) | 3 | Code formatting |
| [Husky](https://typicode.github.io/husky) | 9 | Git hooks |
| [commitlint](https://commitlint.js.org) | - | Conventional commit enforcement |

## Prerequisites

- **Bun ≥ 1.2** — install from [bun.sh](https://bun.sh)

## Local Setup

```bash
git clone https://github.com/simonerocco/flowlee-website.git
cd flowlee-website
bun install
```

## Development

The dev workflow requires two terminal sessions:

**Terminal 1 — CSS watcher** (generates Tailwind output on file changes):
```bash
bun css:dev
```

**Terminal 2 — Dev server** (hot-reloading Bun server):
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
bun run build   # compiles CSS + bundles everything into dist/
bun start       # serves the production build
```

## Scripts Reference

| Script | Description |
|---|---|
| `bun dev` | Start hot-reloading dev server |
| `bun css:dev` | Watch and compile Tailwind CSS |
| `bun css:build` | Compile and minify Tailwind CSS |
| `bun run build` | Full production build |
| `bun start` | Start production server |
| `bun run lint` | Run ESLint |
| `bun run lint:fix` | Run ESLint with auto-fix |
| `bun run format` | Format all source files with Prettier |
| `bun run format:check` | Check formatting without writing |
| `bun run type-check` | TypeScript type check (no emit) |

## Project Structure

```
src/
├── index.ts              # Bun HTTP server entry
├── index.html            # HTML shell
├── frontend.tsx          # React DOM mount
├── bun-env.d.ts          # Type declarations for assets
├── App.tsx               # Router + top-level layout
├── styles/
│   └── index.css         # Tailwind entry point
├── pages/
│   ├── Home.tsx          # Landing page (/)
│   └── ChiSiamo.tsx      # About page (/chi-siamo)
├── components/
│   ├── Navbar.tsx
│   ├── Gifpart.tsx
│   ├── FaqSection.tsx
│   ├── FooterSection.tsx
│   └── Card.tsx
└── assets/               # Images, SVGs, GIFs
```

## Commit Conventions

This repo enforces [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) via commitlint on every commit.

Valid prefixes:

| Prefix | When to use |
|---|---|
| `feat:` | New feature or page section |
| `fix:` | Bug fix |
| `style:` | Visual/CSS changes only |
| `refactor:` | Code restructure, no behaviour change |
| `chore:` | Tooling, config, dependency updates |
| `docs:` | Documentation only |
| `build:` | Build system or script changes |
| `ci:` | CI/CD configuration |

Example: `feat: add pricing section to home page`
