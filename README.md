# Build your own custom website with Codex

A working website starter from [Xovion Labs](https://xovionlabs.com), packaged with the context, prompts and launch steps to make it yours.

**You own the code.** Use Codex to customize your pages, review them locally, then deploy through GitHub to Cloudflare. Come back to the same project whenever you want to change something.

## Start here

1. Make your own copy of this repo: fork it, or download the ZIP and extract it. Keep your business copy in your own repository.
2. Open that folder in a local Codex app, editor or CLI. A browser-only chat cannot run the project without a connected development environment.
3. Fill in [BUSINESS-BRIEF.md](BUSINESS-BRIEF.md), or paste your business details into Codex.
4. Paste the first prompt in [START-HERE.md](START-HERE.md).
5. Review the preview. Use [CLOUDFLARE-SETUP.md](CLOUDFLARE-SETUP.md) when you are ready to launch.

## What is included

- Responsive homepage with services, process, FAQs and an interactive demo form.
- Editable business content in `src/site.json`.
- Cloudflare Worker and Static Assets configuration.
- Production checks that reject fictional content, demo contact mode and missing domain settings.
- Codex project instructions, business worksheet, launch and maintenance prompts.
- Tests and GitHub Actions checks; deployment is manual until you choose automation.

The sample business **Good Neighbor** is fictional. No client data, photography or paid assets are included. The demo form sends and saves nothing. Live contact options are an email link or your existing HTTPS scheduling/request link; custom forms and integrations are optional later work.

## Run it

Install Node.js 22 or newer (a supported LTS is recommended), then:

```sh
npm ci
npm run dev
```

Open the local address Wrangler prints. This development server stays on your computer. After editing source files, restart `npm run dev` to rebuild HTML and styles. `npm run verify` runs checks, tests and a preview build.

## Customize

| File | Purpose |
|---|---|
| `BUSINESS-BRIEF.md` | Your business facts and design goals |
| `src/site.json` | Business name, copy, services, contact mode and website origin |
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
