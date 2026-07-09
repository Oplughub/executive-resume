# Executive Resume

A source-controlled executive resume publishing system for Joseph Jeremy Michael Walker, MBA.

This repository treats the resume as a reusable technical document rather than a one-off word processor file.

## Purpose

The resume is structured to present a senior AI systems architect profile through a clear evidence chain:

**Scientific Foundation → Original Research → Systems Engineering → Production Deployment → Public Validation**

## Files

- `index.html` — primary resume document
- `styles/screen.css` — browser preview styling
- `styles/print.css` — print/PDF styling
- `data/resume.json` — canonical structured resume data
- `scripts/render-pdf.mjs` — local PDF export script using Playwright
- `.github/workflows/render-pdf.yml` — GitHub Actions PDF export workflow

## Local PDF Export

```bash
npm install
npm run render
```

The generated PDF is written to `dist/Joseph-Walker-Executive-Resume.pdf`.

## Design Direction

The document is designed to read less like a generic resume template and more like a compact executive technical dossier: dense, auditable, senior, and suitable for AI architecture, AI governance, research engineering, and public-sector technology roles.
