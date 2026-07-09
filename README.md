# Executive Resume

A source-controlled executive resume publishing system for **Joseph Jeremy Michael Walker, MBA**.

This repository treats the resume as a reproducible professional publication rather than a one-off word processor file.

## Design Thesis

The resume is structured around one evidence chain:

**Research -> Architecture -> Implementation -> Deployment -> Validation**

The goal is not to create a flashy resume. The goal is to present a senior AI systems architect profile with the restraint and clarity of an IBM-classic technical document.

## Principles

- Evidence before claims
- Research before buzzwords
- Truthful metrics only
- No headshot or decorative filler
- Text remains selectable, printable, and version-controlled
- HTML/CSS is the source of truth for layout
- Structured data remains the source of truth for content

## Repository Structure

```text
.
├── index.html
├── data/
│   └── resume.json
├── styles/
│   ├── screen.css
│   └── print.css
├── scripts/
│   └── render-pdf.mjs
├── .github/
│   └── workflows/
│       └── render-pdf.yml
└── package.json
```

## Local Development

```bash
npm install
npm run render
```

The generated PDF is written to:

```text
dist/Joseph-Walker-Executive-Resume.pdf
```

## Positioning

This resume emphasizes trustworthy AI systems, provenance-aware computing, AI governance, systems architecture, and production software. It is designed for senior AI engineering, AI governance, research engineering, public-sector technology, and principal systems architecture roles.
