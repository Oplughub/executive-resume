# Professional Provenance Resume Template

A beginner-friendly, source-controlled resume and portfolio publishing system for professionals working in the AI era.

This repository began as the executive technical resume for **Joseph Jeremy Michael Walker, MBA**, but the pattern is intentionally reusable:

> Your resume should not be the place where you remember your career. It should be generated from a version-controlled record of the work you have already preserved.

## What This Is

This is a resume-as-code template.

It uses Git, GitHub, structured data, HTML, CSS, and optional AI assistance to help professionals preserve their work history, update their resume after meaningful sprints, and publish a living portfolio page.

The resume itself is only one output.

The deeper purpose is professional provenance: keeping track of what you did, when you did it, how it changed, and what evidence exists.

## Why This Repository Exists

Many professionals now use AI systems to draft, analyze, plan, code, research, summarize, and publish work.

That work often disappears into chat history, downloads folders, email drafts, screenshots, or scattered documents.

Git solves a different problem:

> Git lets you preserve the history of how your work changed over time.

A resume is an ideal first repository because almost everyone understands the object being maintained. You do not need to be a software engineer to benefit from version history.

If you can update a document, you can learn to update a repository.

## Who This Is For

This pattern can help:

- professionals who use AI and want to preserve the work that becomes real
- students building a public portfolio
- teachers tracking curriculum work
- researchers tracking publications and disclosures
- writers preserving drafts and finished work
- designers tracking portfolio updates
- consultants tracking case studies
- healthcare, technical, legal, business, and public-sector professionals tracking credentials and projects
- anyone who wants a practical first GitHub repository

## What This Repository Teaches

This project demonstrates how to:

- keep a resume under version control
- use structured data as the source of truth
- generate a polished HTML resume
- render a PDF from HTML/CSS
- preserve meaningful work history through commits
- use GitHub as a public portfolio page
- publish `index.html` as a simple website
- communicate with AI systems using structured career evidence
- treat AI-assisted work as evidence that should be reviewed, edited, and preserved

## The Core Workflow

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

You can start simply:

1. Change one file.
2. Save the change.
3. Commit the change.
4. Write a short message explaining what changed.
5. Repeat whenever meaningful work creates new evidence.

You do not need to understand all of Git on day one. A resume is a good first repository because the object is familiar and the updates are meaningful.

## Publishing as a Portfolio Page

Because the resume is HTML, it can become a portfolio page.

You can host `index.html` through GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any simple web server.

That means one source can produce:

- a PDF resume
- a web resume
- a portfolio landing page
- a machine-readable professional record
- future CV, biography, speaker page, or project pages

## Design Thesis

The Joseph Walker version is structured around one evidence chain:

**Research -> Architecture -> Implementation -> Deployment -> Validation**

The broader template can be adapted to any field. The goal is not to create a flashy resume. The goal is to present professional evidence with clarity, restraint, and reproducibility.

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

## Suggested Sprint Closeout

At the end of a noteworthy sprint, ask:

> What evidence did this sprint produce that future readers should be able to verify, understand, or ask about?

Then:

1. Do meaningful work.
2. Identify the evidence the work produced.
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

## Positioning of This Version

This version emphasizes trustworthy AI systems, provenance-aware computing, AI governance, systems architecture, and production software.

That is Joseph Walker's professional evidence model.

Your version may emphasize teaching, design, clinical practice, legal writing, public service, consulting, research, ministry, operations, art, engineering, or another field.

The pattern remains the same:

```text
meaningful work
    -> preserved evidence
    -> structured professional record
    -> published resume / portfolio
```

## Official Project Rule

This repository optimizes for truth, reproducibility, and clarity over visual novelty.
