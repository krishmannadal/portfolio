# Krishnakumar Mandal — portfolio interface

A Next.js/React presentation site for project dossiers, experiment notes and contact links. This repository is the **portfolio UI**, not the Mini-R1 training implementation or Nullius evaluation harness.

[View deployed site](https://portfolio-five-alpha-65.vercel.app/) · [Mini-R1 source](https://github.com/krishmannadal/mini-r1) · [Nullius source](https://github.com/krishmannadal/Nullius)

**TypeScript · Next.js 16 · React 19 · Tailwind CSS 4 · Lucide**

## Implemented

The single-page interface includes project dossiers, expandable research notes, light/dark switching, interactive model-concept illustrations, a resume modal and an “Ask the Lab” component. The latter reads a local Q&A dataset; this repository has no live LLM chat backend. Illustrations are explanatory UI, not runtime measurements of a GPU or model.

Project content lives in `src/data/`; presentation components in `src/components/`; the App Router entry, metadata and styles in `src/app/`. There is no database or model checkpoint in this application.

## Run locally

Use Node.js **20.9+** (Next.js 16 baseline) and npm:

```bash
git clone https://github.com/krishmannadal/portfolio.git
cd portfolio
npm ci
npm run dev
```

Open `http://localhost:3000`. For a production build:

```bash
npm run build
npm start
```

No application environment variables or API credentials are required. Fonts are loaded through `next/font/google`, so building requires font-download access. The production build passed during the 23 October 2026 documentation audit. The deployed landing page also loaded; linked projects and all interactive flows were not fully tested.

## Content accuracy backlog

The deployed site contains older assertions that should be corrected before using it as the primary research evidence:

- Mini-R1's source/release configuration is **width 512, 8 heads, vocabulary 8,000**. Some portfolio copy says 384/6 or 8,192.
- The 50%-versus-25% replay comparison changes composition and dose. It does not confirm that composition dominates dose.
- “Within stochastic variance” requires repeated-run evidence; one seed per arm does not estimate variance.
- Some skill/project entries refer to repositories not exposed as public evidence in this audit. Do not infer verified implementation from a portfolio label.
- `metadataBase` and OpenGraph URL use a different domain from the observed Vercel deployment.

These are recorded as content issues; this documentation-only branch does not change application behavior or page content. Read the linked source reports/configurations for technical facts. Next: reconcile the data files with those sources, qualify personal-role labels, and add verified working demo links.

## Credits and licensing

Portfolio for Krishnakumar Mandal; repository commits use the author name `krish956`. No repository-level license file is present; no license is added by this update.
