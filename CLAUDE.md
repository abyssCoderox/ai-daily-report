# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VitePress-based static blog system for AI learning records. The project uses Vue 3 and TypeScript, focused on documenting AI-related content and tutorials.

## Commands

### Development Commands
```bash
# Install dependencies
npm install

# Start development server (runs on port 3000)
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

### Deployment
```bash
# Run the deployment script (includes install and build)
./deploy.sh
```

## Project Structure

```
ai-daily-report/
├── docs/                           # VitePress documentation source
│   ├── .vitepress/                 # VitePress configuration and build output
│   │   ├── config.js               # Site configuration
│   │   ├── dist/                   # Production build output
│   │   └── cache/                  # Build cache
│   ├── posts/                      # Blog posts directory
│   │   ├── index.md               # Posts listing page
│   │   └── getting-started.md     # Example post
│   ├── index.md                   # Homepage
│   └── about.md                   # About page
├── package.json                    # Project dependencies and scripts
├── deploy.sh                       # Deployment automation script
└── CLAUDE.md                       # This file
```

## Configuration

The main configuration file is `docs/.vitepress/config.js` which controls:
- Site title and description
- Navigation menu structure
- Sidebar configuration
- Theme settings
- Development server settings (port 3000)

## Content Management

### Adding New Posts
1. Create new Markdown files in `docs/posts/`
2. Use YAML frontmatter for metadata:
```markdown
---
title: Post Title
date: 2026-03-09
---
```
3. Update the sidebar in `docs/.vitepress/config.js` to include new posts

### Post Organization
- Posts are organized in the `docs/posts/` directory
- The sidebar configuration in `config.js` controls the navigation structure
- Each post should have appropriate frontmatter for title and date

## Build Output

- Production builds are output to `docs/.vitepress/dist/`
- This directory can be deployed to GitHub Pages, Vercel, or other static hosting services
- The `deploy.sh` script automates the build process

## Development Notes

- Uses VitePress for fast development and build times
- Supports Markdown with Vue components
- Includes syntax highlighting and mathematical formula support
- Responsive design with mobile support
- Full-text search functionality included

## Dependencies

Key dependencies include:
- `vitepress`: Static site generator
- `vue`: Frontend framework (v3)
- `@types/node`: TypeScript definitions
- `typescript`: TypeScript support

Dev dependencies are minimal, keeping the project lightweight and focused on content delivery.