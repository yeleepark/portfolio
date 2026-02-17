# Portfolio

A retro-style portfolio website inspired by classic Mac OS 9 aesthetics.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwind-css)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (required)

### Installation

```bash
# Install pnpm (if not installed)
npm install -g pnpm

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Available Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm format       # Format all files with Prettier
pnpm format:check # Check formatting without changes
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
└── components/
    └── ui/                # UI components
        ├── Button/        # Button component
        ├── Header/        # Navigation header
        ├── WindowCard/    # Main window container
        └── WindowTitleBar/ # Window title bar with controls
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **UI Library**: React 19.2.3
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion 12.34.0
- **3D Graphics**: Three.js 0.182.0
- **Linting**: ESLint 9 with `eslint-config-prettier`
- **Formatting**: Prettier 3.8.1
- **Package Manager**: pnpm

## 📝 Development Guidelines

- Use absolute imports with `@/` prefix: `import Button from "@/components/ui/Button"`
- Follow [Conventional Commits](https://www.conventionalcommits.org/) format
- Code is formatted with Prettier and linted with ESLint
- TypeScript strict mode is enabled

See [CLAUDE.md](./CLAUDE.md) for detailed development guidelines.

## 📄 License

MIT
