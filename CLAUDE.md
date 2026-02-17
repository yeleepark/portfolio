# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A portfolio website for a frontend developer.

## Development Commands

```bash
# Development
pnpm dev          # Start dev server at http://localhost:3000

# Build & Production
pnpm build        # Production build
pnpm start        # Start production server

# Code Quality
pnpm lint              # Run ESLint
pnpm format            # Format all files with Prettier
pnpm format:check      # Check formatting without changes
```

## Tech Stack

- **Next.js 16.1.6** (App Router)
- **React 19.2.3**
- **TypeScript 5** with strict mode enabled
- **Tailwind CSS v4** (latest version)
- **Framer Motion 12.34.0** for animations
- **Three.js 0.182.0** for 3D graphics (if needed)
- **Package Manager**: pnpm (required)

## Architecture

### TypeScript Configuration

- Path alias: `@/*` maps to `./src/*`
- **Import Rules**: Always use absolute path with `@/` prefix for all component imports
  - ✅ Correct: `import Button from "@/components/ui/Button"`
  - ✅ Correct: `import WindowTitleBar from "@/components/ui/WindowTitleBar"`
  - ❌ Wrong: `import Button from "./Button"` (relative path)
  - ❌ Wrong: `import Button from "../Button"` (relative path)

## Development Guidelines

### Code Style

- ESLint and Prettier are configured with `eslint-config-prettier` to avoid conflicts
- Language: Korean (`<html lang="ko">` in layout)
- TypeScript strict mode is enabled
- **Clean Code**: Follow clean code principles - meaningful names, small functions, single responsibility
- **Git Conventions**: Commit messages must follow conventional commit format:
  - `feat:` new features
  - `fix:` bug fixes
  - `refactor:` code refactoring
  - `style:` formatting, missing semi-colons, etc.
  - `docs:` documentation changes
  - `test:` adding tests
  - `chore:` maintenance tasks
