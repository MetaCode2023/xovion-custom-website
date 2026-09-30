# Build status

Version 0.1: working static homepage and demo dialog; editable content; Cloudflare Worker; preview/production configuration; launch gates; documentation and local tests.

Added guided setup (`npm run setup`) with validation, confirmation and local backups; automatic source rebuilding and Wrangler live reload (`npm run dev`). Ten automated tests pass, covering cancellation, backups, file additions/deletions, failed-build recovery and local-only CSP allowances.

Local Wrangler startup in the build environment failed with `uv_interface_addresses`; browser reload and visual behavior still require a normal local-machine check. No claim of browser verification is made.

No hosted website or Cloudflare account resources are provisioned. No custom CRM, database, server intake or live integrations are implemented. Browser visual checks remain a release review item.

Next prompt: Read START-HERE.md and BUSINESS-BRIEF.md. Customize this repo for my business, run checks and give me a local preview before deploying.

Added npm run doctor and validated, escaped homepage copy fields. New-business setup uses neutral section copy and retains previously customized copy on subsequent runs. Fifteen automated tests pass. Doctor reproduces the network-interface blocker in this environment; local server/browser review remains unverified.

Added seven reusable UI/UX request prompts and a Chromium browser suite for desktop/phone viewports using the actual Wrangler preview Worker. GitHub Actions installs browsers and runs the suite. Local Wrangler startup remains blocked by network-interface lookup; rely on the recorded CI result for automated browser evidence, and retain owner visual review and Safari checks before launch.

First browser CI exposed an asset-response cloning bug: body/status were not preserved by the Worker. Fixed by forwarding the asset body and response init; added a regression test for HTML body, content type and 404 status. Rerun browser CI for verification.
