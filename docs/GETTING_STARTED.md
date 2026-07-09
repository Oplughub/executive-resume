# Getting Started

This guide is for people who may be new to Git, GitHub, HTML, and resume-as-code workflows.

You do not need to be a software engineer to use this repository.

The goal is simple:

> Keep a version-controlled record of your professional evidence and generate a resume or portfolio from it.

## 1. Create a GitHub Account

Go to GitHub and create an account.

GitHub is where your repository can live online.

A repository is a folder with memory.

## 2. Make Your Own Copy

Use this repository as a starting point.

You can either fork it or download it and create your own repository.

A fork is your own copy of someone else's repository.

## 3. Edit the Resume Data

The most important file is:

```text
data/resume.json
```

That file is the source of truth.

Start by changing:

- name
- title
- contact information
- profile
- projects
- education
- skills
- publications
- achievements

Do not worry about perfect wording at first. Focus on preserving truthful evidence.

## 4. Use AI Carefully

You can ask an AI system to help you improve wording, organize sections, or explain Git commands.

But the human remains responsible for truth.

A good prompt:

```text
Help me rewrite this resume entry clearly, without exaggerating. Keep the claim truthful and specific.
```

A better prompt:

```text
Here is what I actually did. Turn it into a concise resume entry and tell me what evidence I should preserve.
```

## 5. Make a Commit

A commit is a saved checkpoint.

After you make a meaningful change, commit it with a clear message.

Examples:

```text
Update profile summary
Add teaching portfolio project
Add certification from July 2026
Add publication record
```

A good commit message explains the evidence that changed.

## 6. Generate the Resume

If you are using the local build system:

```bash
npm install
npm run render
```

This generates a PDF in:

```text
dist/
```

If you are not ready to use Node.js yet, you can still edit `index.html` directly and open it in a browser.

## 7. Publish the HTML

Because the resume is HTML, it can become a simple website.

Options include:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- any basic web server

For beginners, GitHub Pages is usually the easiest place to start.

## 8. Repeat After Meaningful Work

Do not wait until you need a job.

At the end of each noteworthy sprint, ask:

> What changed that future readers should know about?

If the work created evidence, update the repository.

That is the practice.
