# 🎮 Retro Game Portfolio

An interactive, retro game-style portfolio website where visitors can explore different sections by moving a character through a pixel art world.

![Retro Portfolio](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

- 🕹️ **Keyboard-Controlled Movement** - Use arrow keys (or WASD) to move your character
- 🎨 **Pixel Art Aesthetic** - Retro 8-bit/16-bit inspired design with custom fonts
- 🌍 **Explorable World** - Navigate through different zones to discover portfolio sections
- 💬 **RPG-Style Dialogs** - Interactive dialogs with typewriter effects
- 🎯 **Interactive Zones** - 5 unique zones: About, Skills, Projects, Career, Contact
- 🎬 **Smooth Animations** - Powered by Framer Motion for delightful transitions

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install
# or
bun install

# Run development server
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🎮 Controls

- **⬆️ ⬇️ ⬅️ ➡️ Arrow Keys** - Move character
- **W A S D** - Alternative movement keys
- **SPACE / Enter** - Interact with zones
- **ESC** - Close content overlay

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
├── components/
│   ├── game/              # Game engine components
│   ├── ui/                # Reusable UI components
│   └── content/           # Portfolio content sections
└── lib/
    ├── data/              # Data and configuration
    └── game/              # Game logic utilities
```

## 🎨 Customization

### Update Portfolio Content

Edit `/src/lib/data/portfolio.ts` to add your:
- Personal information
- Skills and tech stack
- Projects and achievements
- Work experience
- Contact details

### Modify Game World

Edit `/src/lib/game/zones.ts` to customize:
- Zone positions and sizes
- Colors and icons
- Entry dialogs

### Styling

Edit `/src/app/globals.css` to customize the retro theme.

# Tech Stack

- **Next.js** 16.1.6
- **React** 19.2.3
- **TypeScript** 5
- **Tailwind CSS** 4
- **Framer Motion** 12.34.0
- **ESLint** 9
- **Prettier** 3.8.1

---

Made with ❤️ and nostalgia for retro games
