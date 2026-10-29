# The Dragon's Atlas

Krishnakumar Mandal's illustrated, keyboard-accessible fantasy portfolio. Open `dist/index.html` from a static web server. No build step or dependencies are required.

## Experience

- Original animated SVG paper dragon, fire and embers
- WASD / arrow-key warrior movement, Enter to inspect nearby landmarks
- Clickable landmarks, touch direction buttons and a searchable project index
- Escape / close button to dismiss project details
- Reduced-motion preference and a manual pause control
- GitHub and LinkedIn links

## GitHub updates

The page requests only public repositories for `krishmannadal` through GitHub's REST API. It refreshes descriptions, topics, languages, source and homepage links, and adds new public, non-fork, non-archived project repositories. Results are cached in the visitor's browser for 15 minutes. README notes are fetched only on request. If GitHub is unavailable or rate-limited, the curated project descriptions remain available; a cached copy is used when present. No token or private repository data is shipped.

Featured project contributions and lessons are intentionally curated in `dist/app.js`. They are not inferred from commit counts. New source code cannot automatically invent new portfolio claims; update the curated text for changes to personal contributions or project outcomes.

The same static files live under `public/dragon-atlas/` in the connected `krishmannadal/portfolio` GitHub repository. Its root route redirects to this experience. Changes pushed to that repository use the project's existing Vercel Git deployment integration.

## Files

- `dist/index.html`: semantic content and original vector illustrations
- `dist/styles.css`: responsive layout and animation
- `dist/app.js`: navigation, public GitHub refresh, project index and motion

Copyright 2026 Krishnakumar Mandal. External project repositories retain their own licenses and attribution.
