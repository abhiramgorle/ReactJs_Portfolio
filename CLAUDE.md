# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Dev server at http://localhost:3000
npm run build    # Production build to /build
npm run deploy   # Build + push to gh-pages branch (GitHub Pages)
npm test         # Run tests (React Testing Library + Jest)
npm test -- --testPathPattern=App  # Run a single test file
```

## Architecture

Single-page React 17 app bootstrapped with Create React App. **No React Router** — all sections live on one scrollable page. Deployed to GitHub Pages at `https://abhiramgorle.github.io/ReactJs_Portfolio`.

**Sections (scroll-based, identified by `id`):**
- `#home` → `Home` (hero with Three.js icosahedron via `HeroScene`)
- `#about` → `Home2` bio + `About` (bio card, tech/tool stacks, GitHub calendar)
- `#experience` → `Experience` (timeline)
- `#projects` → `Projects` (project cards grid)
- `#contact` → `Footer`

**All sections rendered directly in `App.js`** in this order: `Home → Home2 → About → Experience → Projects → Footer`.

**Special App-level features (defined inline in `App.js`):**
- `ScrollProgress` — thin progress bar at the top tracking page scroll %
- `CatCursor` — custom cat emoji cursor that chases a yarn-ball cursor (desktop only); skips on `pointer:coarse` devices
- Ambient overlays: `grain-overlay`, `ambient-top`, `ambient-bottom` divs for visual texture

**Navbar (`src/components/Navbar.js`):**
- No routing — uses `IntersectionObserver` to highlight the active section
- Smooth-scrolls to section `id` on link click
- Sections tracked: `home`, `about`, `experience`, `projects`, `contact`

**Three.js scene (`src/components/Hero/HeroScene.js`):**
- Renders a wireframe icosahedron + inner rotating icosahedron + particle field
- Mouse parallax moves the camera
- Accent color `#ff5a36` throughout

**Styling:** Global dark theme in `src/style.css` (CSS variables `--section-background-color`, `--imp-text-color: #ff4533`). Per-section overrides live alongside each component (e.g., `Experience.css`). Bootstrap 5 + React Bootstrap for layout/UI. Custom cursor styles in `App.css`.

**Key dependencies:** `three` (Three.js WebGL), `react-tsparticles`, `framer-motion`, `typewriter-effect`, `react-parallax-tilt`, `react-github-calendar`, `react-icons`.

**Deployment:** GitHub Pages via `gh-pages` package. `package.json` has `"homepage": "https://abhiramgorle.github.io/ReactJs_Portfolio"`. Run `npm run deploy` to publish. No `_redirects` needed (single-page, no client-side routing).
