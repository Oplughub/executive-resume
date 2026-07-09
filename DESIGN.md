# Design Principles

This repository optimizes for **truth, reproducibility, and clarity** over visual novelty.

The resume is not treated as a static document. It is treated as a publication generated from structured professional evidence.

## 1. Truth Over Embellishment

Every claim should be defensible in conversation, traceable to public work, education, production systems, or documented experience.

Metrics remain literal. If Hermeneia has 998 passing automated tests at the time of publication, the document says 998.

## 2. Evidence Before Claims

The document should not ask the reader to accept broad claims without nearby evidence.

Publications, disclosures, production systems, shipped applications, credentials, and validation metrics carry the argument.

## 3. Structured Data Is the Source of Truth

`data/resume.json` is the canonical source for resume content.

HTML, PDF, CV, biography, portfolio pages, and future formats should be generated from the same structured evidence rather than rewritten independently.

## 4. Presentation Layers Are Replaceable

The content should outlive any single template, styling preference, rendering engine, or document format.

A future version may generate a federal resume, technical CV, speaker biography, portfolio site, or Markdown profile without changing the underlying evidence model.

## 5. Design Should Reduce Friction

The typography should not compete with the work.

The visual system should make the evidence easier to scan, understand, and trust. Decorative elements are rejected unless they improve comprehension.

## 6. Research -> Architecture -> Implementation -> Deployment -> Validation

This is the governing narrative.

The resume should show how original ideas become systems, how systems become deployed artifacts, and how deployed artifacts become validated work.

## 7. The Repository Is Also Evidence

This repository should demonstrate the same engineering principles the resume describes:

- separation of content and presentation
- reproducible builds
- version-controlled artifacts
- clear documentation
- restrained design
- auditable changes

A reader should be able to understand not only what the document says, but how and why it was produced.
