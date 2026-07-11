import { readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const dataPath = resolve(root, 'data', 'resume.json');
const outputPath = resolve(root, 'index.html');

const resume = JSON.parse(await readFile(dataPath, 'utf8'));

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const join = (items = []) => items.map(escapeHtml).join(' • ');

const paragraphs = (items = []) => items.map((item) => `<p>${escapeHtml(item)}</p>`).join('\n');

const publicationItems = (resume.publications?.technicalDisclosureCommons ?? [])
  .map((item) => `<li>${escapeHtml(item)}</li>`)
  .join('\n');

const bookItems = (resume.publications?.books ?? [])
  .map((item) => `<p><em>${escapeHtml(item)}</em></p>`)
  .join('\n');

const capabilityItems = (resume.capabilities ?? [])
  .map(
    (capability) => `
          <div>
            <h3>${escapeHtml(capability.group)}</h3>
            <p>${join(capability.items)}</p>
          </div>`
  )
  .join('\n');

const achievementItems = (resume.achievements ?? [])
  .map((item) => `<li>${escapeHtml(item)}</li>`)
  .join('\n');

const systemCards = (resume.systems ?? [])
  .map((system, index) => {
    const isHero = index === 0;
    const validation = system.validation
      ? `<p class="validation">${escapeHtml(system.validation)}</p>`
      : '';
    return `
        <article class="system-card${isHero ? ' system-card-hero' : ''}">
          <div class="system-title-row">
            <div>
              <h3>${escapeHtml(system.name)}</h3>
              <p class="subtitle">${escapeHtml(system.subtitle)}</p>
            </div>
            ${validation}
          </div>
          <p>${escapeHtml(system.summary)}</p>
          <p class="highlights"><strong>Highlights:</strong> ${join(system.highlights)}</p>
        </article>`;
  })
  .join('\n');

const educationItems = (resume.education ?? [])
  .map((item) => {
    const year = item.year ? ` <span class="year">${escapeHtml(item.year)}</span>` : '';
    return `<p><strong>${escapeHtml(item.institution)}</strong> — ${escapeHtml(item.credential)}${year}<br />${escapeHtml(item.details)}</p>`;
  })
  .join('\n');

const techItems = Object.entries(resume.technicalEnvironment ?? {})
  .map(([key, values]) => `<dt>${escapeHtml(key)}</dt><dd>${join(values)}</dd>`)
  .join('\n');

const principleItems = (resume.principles ?? [])
  .map((item) => `<li>${escapeHtml(item)}</li>`)
  .join('\n');

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(resume.identity?.name ?? '')} — ${escapeHtml(resume.identity?.documentLabel ?? '')}</title>
  <link rel="stylesheet" href="styles/screen.css" />
  <link rel="stylesheet" href="styles/print.css" media="print" />
</head>
<body>
  <main class="resume" id="resume" aria-label="Executive technical resume">
    <section class="page page-one" aria-label="Executive summary">
      <header class="masthead">
        <div class="document-label">${escapeHtml(resume.identity?.documentLabel ?? '')}</div>
        <div class="masthead-grid">
          <div>
            <h1>${escapeHtml(resume.identity?.name ?? '')}</h1>
            <p class="role">${escapeHtml(resume.identity?.title ?? '')}</p>
            <p class="positioning">${escapeHtml(resume.identity?.positioning ?? '')}</p>
          </div>
          <address class="contact" aria-label="Contact information">
            <span>${escapeHtml(resume.contact?.location ?? '')}</span>
<span>${escapeHtml(resume.contact?.phone ?? '')}</span>

<a href="mailto:${escapeHtml(resume.contact?.email ?? '')}">
  ${escapeHtml(resume.contact?.email ?? '')}
</a>

${resume.contact?.linkedin
  ? `<a href="${escapeHtml(resume.contact.linkedin)}">LinkedIn</a>`
  : ''}

${resume.contact?.github
  ? `<a href="${escapeHtml(resume.contact.github)}">GitHub</a>`
  : ''}

${resume.contact?.tdc
  ? `<a href="${escapeHtml(resume.contact.tdc)}">Technical Disclosure Commons</a>`
  : ''}
          </address>
        </div>
      </header>

      <section class="block profile-block">
        <h2>Executive Profile</h2>
        <div class="profile-grid">
          ${paragraphs(resume.executiveProfile)}
        </div>
      </section>

      <section class="block publications-block">
        <div class="section-heading-row">
          <h2>Research & Technical Publications</h2>
          <p class="section-note">Original architecture formalized through peer-discoverable technical disclosures and books.</p>
        </div>
        <div class="publication-grid">
          <div class="publication-main">
            <h3>Technical Disclosure Commons</h3>
            <ol class="compact-list publication-list">
              ${publicationItems}
            </ol>
          </div>
          <aside class="publication-aside">
            <h3>Books</h3>
            ${bookItems}
            <p class="focus">
  <strong>Focus:</strong>
  ${escapeHtml(resume.publications?.focus ?? '')}
</p>
          </aside>
        </div>
      </section>

      ${resume.edgeAI
  ? `
<section class="block callout edge-callout">
  <h2>${escapeHtml(resume.edgeAI.title ?? '')}</h2>
  <p>${escapeHtml(resume.edgeAI.summary ?? '')}</p>
</section>
`
  : ''}

      <section class="block capabilities-block">
        <h2>Engineering Capabilities</h2>
        <div class="capability-grid">
          ${capabilityItems}
        </div>
      </section>

      <section class="block achievements-block">
        <h2>Selected Achievements</h2>
        <ul class="achievement-grid">
          ${achievementItems}
        </ul>
      </section>
    </section>

    <section class="page page-two" aria-label="Evidence portfolio">
      <header class="evidence-header">
        <div>
          <div class="document-label">Evidence Portfolio</div>
          <h2>Selected Systems Engineering Portfolio</h2>
        </div>
        <p>${escapeHtml(resume.footer)}</p>
      </header>

      <section class="systems-grid">
        ${systemCards}
      </section>

      <section class="lower-grid">
        <div class="block education-block">
          <h2>Education & Credentials</h2>
          <div class="education-list">
            ${educationItems}
          </div>
        </div>

        <aside class="side-stack">
          <section class="block technical-block">
            <h2>Technical Environment</h2>
            <dl>
              ${techItems}
            </dl>
          </section>

          <section class="block principles-block">
            <h2>Engineering Principles</h2>
            <ul>
              ${principleItems}
            </ul>
          </section>
        </aside>
      </section>

      <footer class="resume-footer">
  <span>
    Built from source:
    <a href="${escapeHtml(resume.repository?.url ?? '#')}">
      ${escapeHtml(resume.repository?.url ?? '')}
    </a>
  </span>
</footer>
    </section>
  </main>
</body>
</html>
`;

await writeFile(outputPath, html, 'utf8');
console.log(`Wrote ${outputPath}`);
