# Resume Build Procedure

This resume is built from source.

That phrase is intentional.

It means the final PDF is not treated as the source of truth. The PDF is an output generated from version-controlled files.

## Source Files

The primary source files are:

```text
data/resume.json
styles/screen.css
styles/print.css
scripts/build-html.mjs
scripts/render-pdf.mjs
```

## Build Pipeline

```text
structured resume data
    -> generated HTML
    -> print-specific CSS
    -> rendered PDF
    -> visual review
    -> committed source history
```

## Expected Procedure

1. Update the structured resume data.
2. Generate the HTML resume.
3. Render the PDF from the HTML and print CSS.
4. Visually inspect both pages.
5. Confirm there is no clipped text, overlap, or accidental layout breakage.
6. Confirm factual claims still match the evidence.
7. Commit the source changes with a clear message.

## Local Commands

```bash
npm install
npm run render
```

The rendered PDF is written to:

```text
dist/Joseph-Walker-Executive-Resume.pdf
```

## Engineering Intent

The repository demonstrates the same discipline the resume claims:

- structured source of truth
- deterministic publication pipeline
- human review before use
- version history for meaningful changes
- reproducible artifacts

The PDF is the submitted document.

The repository is the evidence that the document was engineered.
