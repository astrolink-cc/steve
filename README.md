# HologramSteve Portfolio

Personal portfolio site built with React 19, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Linting:** Oxlint
- **Package Manager:** Bun

## Getting Started

```bash
bun install
bun run dev
```

## Scripts

| Command | Description |
|---|---|
| `bun run dev` | Start dev server with HMR |
| `bun run build` | Type-check and build for production |
| `bun run preview` | Preview production build |
| `bun run lint` | Run Oxlint |

## Project Structure

```
src/
├── App.tsx              # Root layout (left + right panels)
├── main.tsx             # Entry point
├── index.css            # Global styles & Tailwind
├── components/
│   ├── LeftPanel.tsx    # Name, bio, social links
│   ├── RightPanel.tsx   # Skills, projects, FAQ
│   └── ui/              # Reusable UI components
├── data/
│   ├── projects.ts      # Projects data
│   └── skills.ts        # Skills data
└── lib/
    └── utils.ts         # cn() helper
```

## Features

- Two-panel dark-themed layout
- Animated SVG background
- Skills showcase with categories
- Project cards
- FAQ accordion
- Social links (GitHub & Discord)
- Responsive design
