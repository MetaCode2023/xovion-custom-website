# Build your own custom website with Codex

A working website starter from [Xovion Labs](https://xovionlabs.com), packaged with the context, prompts and launch steps to make it yours.

**You own the code.** Use Codex to customize your pages, review them locally, then deploy through GitHub to Cloudflare. Come back to the same project whenever you want to change something.

## Start here

1. Make your own copy of this repo: fork it, or download the ZIP and extract it. Keep your business copy in your own repository.
2. Open that folder in a local Codex app, editor or CLI. A browser-only chat cannot run the project without a connected development environment.
3. Run `npm run setup` after installing dependencies for a guided questionnaire, or fill in [BUSINESS-BRIEF.md](BUSINESS-BRIEF.md), or paste your business details into Codex.
4. Paste the first prompt in [START-HERE.md](START-HERE.md).
5. Review the preview. Use [CLOUDFLARE-SETUP.md](CLOUDFLARE-SETUP.md) when you are ready to launch.

## What is included

- Responsive homepage with services, process, FAQs and an interactive demo form.
- Guided setup with a business brief, content validation and local backups.
- Automatic local rebuilding and browser reload when you edit source files.
- Editable business content, navigation, button labels, process steps and FAQs in `src/site.json`.
- Read-only environment troubleshooting with `npm run doctor`.
- Cloudflare Worker and Static Assets configuration.
- Production checks that reject fictional content, demo contact mode and missing domain settings.
- Codex project instructions, business worksheet, launch and maintenance prompts.
- Unit tests and Chromium browser checks in GitHub Actions; deployment is manual until you choose automation.
- Copy-paste UI/UX improvement prompts that preserve your own visual identity.

The sample business **Good Neighbor** is fictional. No client data, photography or paid assets are included. The demo form sends and saves nothing. Live contact options are an email link or your existing HTTPS scheduling/request link; custom forms and integrations are optional later work.

## Run it

Install Node.js 22 or newer (a supported LTS is recommended), then:

```sh
npm ci
npm run setup
npm run dev
```

Open the local address Wrangler prints. This development server stays on your computer. Edits in `src/` and `public/` rebuild automatically and reload the preview. Invalid content prints an error; fix it and the watcher retries. Restart the server after changing build scripts or Wrangler configuration. `npm run verify` runs checks, tests and a preview build.

The setup command asks for business facts and a contact method, then asks before saving. It updates `src/site.json` and `BUSINESS-BRIEF.md`, with ignored local backups of both. Review the generated brief and service descriptions before launch. Skip setup to explore the fictional demo.

If setup or preview fails, run `npm run doctor`. It checks Node, the lockfile, installed Wrangler, source files, content and local network-interface support, then prints specific fixes. Production warnings are expected for the fictional demo. It does not check Cloudflare login, contact delivery or browser behavior.

## Customize

| File | Purpose |
|---|---|
| `BUSINESS-BRIEF.md` | Your business facts and design goals |
| `src/site.json` | Business facts, `copy` section text, services, contact mode and website origin |
| `src/index.html` | Homepage structure |
| `public/style.css` | Colors, typography and layout |
| `src/client.js` | Demo dialog/form interaction |
| `src/worker.js` | Asset serving, security headers, preview indexing controls |
| `wrangler.jsonc` | Separate preview and production Workers |

Ask Codex to keep edits in source files; `dist/` is generated. The lightweight HTML/CSS/JavaScript stack keeps the first version easy to understand. Codex can add routes or migrate to a framework later if your needs justify it.

## Scope and costs

This is a starter, not an automatic guarantee of a launch-ready business site. You review the design and copy, own the accounts, choose the contact flow, approve publication and verify the result. Codex access, domain registration and hosting may have costs; check current limits before purchasing.

Start with a working homepage. Add booking, CRM, payments or voice only after documenting who owns each record and how failures are handled. See [docs/OPTIONAL-INTEGRATIONS.md](docs/OPTIONAL-INTEGRATIONS.md).

MIT licensed. See [LICENSE](LICENSE). Contributions: [CONTRIBUTING.md](CONTRIBUTING.md).

Content field examples: [docs/EDITING-CONTENT.md](docs/EDITING-CONTENT.md). Troubleshooting: [docs/TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md).

## Improve the experience

Use [docs/UI-UX-PROMPTS.md](docs/UI-UX-PROMPTS.md) to ask Codex for clearer content, visual polish, better mobile usability, simpler contact journeys or an accessibility review. Choose an outcome and add your audience and constraints.

To run browser checks locally:

```sh
npx playwright install chromium
npm run test:browser
```

Browser checks start the actual local Wrangler Worker on port 8791 and cover navigation, FAQs, demo validation/reset, keyboard access, overflow and Worker responses. Live email/booking modes check configured links without contacting the provider. Chromium runs at desktop and phone viewport sizes; this is not Safari/iPhone hardware verification or a complete accessibility audit. GitHub Actions installs required Linux browser dependencies. On Linux, use `npx playwright install --with-deps chromium` if system libraries are missing. Keep `npm run verify` for the lightweight checks; browser checks run separately and are required in CI.
