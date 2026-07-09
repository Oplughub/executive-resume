# Executive Resume

A source-controlled resume and portfolio publishing system for **Joseph Jeremy Michael Walker, MBA**.

This repository treats a resume as a reproducible professional publication rather than a one-off word processor file.

It is also intended as a beginner-friendly example of how professionals can use Git to keep version history of meaningful work produced with AI systems.

## Why This Repository Exists

Many professionals now use AI systems to draft, analyze, plan, code, research, summarize, and publish work.

That work often disappears into chat history, downloads folders, email drafts, or scattered documents.

Git solves a different problem:

> Git lets you preserve the history of how your work changed over time.

A resume is an ideal first repository because almost everyone understands the object being maintained. You do not need to be a software engineer to benefit from version history.

If you can update a document, you can learn to update a repository.

## What This Repository Teaches

This project demonstrates how to:

- keep a resume under version control
- use structured data as the source of truth
- generate a polished HTML resume
- render a PDF from HTML/CSS
- preserve meaningful work history through commits
- use GitHub as a public portfolio page
- publish `index.html` as a simple website
- treat AI-assisted work as evidence that should be reviewed, edited, and preserved

## Design Thesis

The resume is structured around one evidence chain:

**Research -> Architecture -> Implementation -> Deployment -> Validation**

The goal is not to create a flashy resume. The goal is to present professional evidence with clarity, restraint, and reproducibility.

## Core Idea

Do not wait until you need a job to remember what you did.

At the end of each noteworthy sprint, update the evidence.

```text
work sprint
    -> evidence
    -> resume data
    -> commit
    -> HTML / PDF / portfolio page
```

Over time, the commit history becomes a professional provenance trail.

## For People New to Git

Git is a version history system.

A commit is a saved checkpoint.

A repository is a folder with memory.

GitHub is a place where that folder can live online.

You can use this pattern even if your work is not code:

- designers can track portfolio updates
- teachers can track curriculum work
- researchers can track publications
- writers can track drafts
- consultants can track case studies
- healthcare and technical professionals can track credentials and projects
- AI users can track work that began in chat but became a real artifact

## Publishing as a Portfolio Page

Because the resume is HTML, it can become a portfolio page.

You can host `index.html` through GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any simple web server.

That means one source can produce:

- a PDF resume
- a web resume
- a portfolio landing page
- a machine-readable professional record
- future CV, biography, or project pages

## Principles

- Evidence before claims
- Truthful metrics only
- Research before buzzwords
- Structured data is the source of truth for content
- HTML/CSS controls presentation
- AI can assist, but the human remains responsible for truth
- The work should be readable by humans and useful to machines
- The repository should teach the practice, not only store the artifact

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
│   ├── build-html.mjs
│   └── render-pdf.mjs
├── .github/
│   └── workflows/
│       └── render-pdf.yml
├── DESIGN.md
├── SPRINT_WORKFLOW.md
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

## Suggested Workflow

1. Do meaningful work.
2. Ask what evidence the work produced.
3. Update `data/resume.json`.
4. Generate the HTML and PDF.
5. Review the result.
6. Commit the update with a clear message.

Example commit messages:

```text
Add Hermeneia validation milestone
Add Technical Disclosure Commons publication
Update systems portfolio with OCR pipeline
Add IBM AI Engineering certificate
```

## Positioning

This version emphasizes trustworthy AI systems, provenance-aware computing, AI governance, systems architecture, and production software.

The broader pattern can be adapted by anyone who wants to preserve professional progress, communicate clearly with AI systems, and publish a living portfolio from structured evidence.
