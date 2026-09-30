# Edit content without changing the layout

Edit `src/site.json`, or ask Codex to edit it. Keep valid JSON: double quotes, no comments and no trailing commas. `npm run dev` rebuilds changes automatically. Errors appear in the terminal and retry after correction.

| Field | What it controls |
|---|---|
| `name`, `tagline`, `location`, `headline`, `description` | Business identity and hero copy |
| `services` | Service cards: each entry needs `name` and `description` |
| `copy.navServices`, `copy.navProcess`, `copy.navContact` | Navigation labels; destinations stay connected to their sections |
| `copy.cta`, `copy.serviceCta` | Main and service button/link labels |
| `copy.heroSteps` | Short hero summary list |
| `copy.servicesEyebrow`, `copy.servicesHeading` | Service section headings |
| `copy.processEyebrow`, `copy.processHeading` | Process section headings |
| `copy.processSteps` | List of objects with `title` and `description` |
| `copy.faqHeading`, `copy.faqs` | FAQ heading and objects with `question` and `answer` |
| `copy.contactEyebrow`, `copy.contactHeading` | Contact section headings |
| `contactMode`, `email`, `bookingUrl`, `siteUrl` | Contact destination and production origin |

All section fields are required in this starter. To remove a whole section, ask Codex to update its template, navigation and validation together. Keep process/FAQ lists nonempty. Copy is plain text: HTML is escaped, so `<br>` prints as text. Use CSS or the template to change layout.

Demo labels and notices stay in the template/client so changing sales copy cannot hide the fact that nothing is submitted. Do not describe an inquiry link as a confirmed appointment.

`npm run setup` prepares neutral section copy when replacing the fictional example. Running setup again preserves your existing section copy; it still regenerates the brief after confirmation and keeps backups. Review the content with the owner before publication.

## Codex prompt

```text
Read BUSINESS-BRIEF.md and docs/EDITING-CONTENT.md. Update src/site.json, including all copy fields, for my business using only confirmed facts. Preserve the current layout and contact destination. Write useful FAQs and process steps without inventing prices, testimonials, credentials or availability. Run npm run verify and show the local preview. Do not publish.
```
