# WESTERN CLOTHES Final Submission Plan

## Goal

Prepare the completed WESTERN CLOTHES React project for college submission in the two requested formats:

1. A clean source-code ZIP named `western-clothes-final-submission.zip`.
2. A public GitHub repository and shareable GitHub URL.

The ZIP and GitHub repository will contain the same clean project source. Generated dependencies, build output, Figma Make internals, agent instructions, temporary inspection data, and unused assignment-reference files will not be included.

## Confirmed Decisions

- Submission type: source code, not a ZIP containing `node_modules` or generated `dist` output.
- GitHub destination: create a new public repository in the user’s connected GitHub account.
- Preferred repository name: `western-clothes`.
- Preserve the existing Figma-managed `origin`; do not replace it or push submission work to it.
- Publish a clean export with a fresh submission commit rather than exposing Figma Make internals and planning artifacts in the public repository.
- Include a concise project README without personal/student data because no student name, roll number, or college details were provided.

## Current Repository Facts

- Current branch: `main`.
- Current working tree: clean.
- Current `origin`: a Figma-managed API repository, not GitHub.
- GitHub CLI is installed, but `gh auth status` currently reports that `GH_TOKEN` is invalid.
- The app source, local photography, configuration, and lockfile are tracked and complete.
- The current repository also tracks platform-only files under `.figma/` and `.figaro/`, planning documents, agent instructions, and the unused uploaded assignment photo at `src/imports/image.png`; these should not appear in the final submission export.
- The runtime project is approximately 6 MB before excluding platform files and the unused upload.

## Authentication Prerequisite

Before GitHub publication, GitHub access for this workspace must be reconnected or reauthorized outside the chat. Do not paste a GitHub token, password, or other credential into the conversation.

At execution time:

1. Run `gh auth status` again.
2. If authentication is valid, continue with repository creation and push.
3. If authentication remains invalid, still complete and verify the ZIP, but stop before GitHub creation and report the exact authentication blocker. Do not modify the Figma-managed `origin`, embed credentials in a URL, or attempt to bypass authentication.

## Clean Submission Contents

Create a temporary clean staging directory containing only the files required to install, run, and review the application:

```text
western-clothes/
├── .gitignore
├── .mise.toml
├── README.md
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── vite.config.ts
├── public/
│   └── assets/
│       └── western-clothes/
│           └── [16 local JPG assets]
└── src/
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    └── vite-env.d.ts
```

Explicitly exclude:

- `.git/`
- `.figma/`
- `.figaro/`
- `AGENTS.md`
- `CLAUDE.md`
- `plans/`
- `src/imports/image.png` because it is an unused assignment-reference photograph
- `node_modules/`
- `dist/`
- caches, logs, environment files, editor metadata, and temporary screenshots
- the final ZIP itself

Do not delete or rewrite these files in the authoritative Figma Make repository merely to produce the export. Build the clean submission from an explicit allowlist in a temporary staging directory.

## README

Add `README.md` only to the clean submission staging directory, not to the current Figma-managed project unless needed for the public repository workflow. It should include:

- Project title: WESTERN CLOTHES.
- A short description: responsive monochrome e-commerce wireframe presentation for a college project.
- Technology stack: React 19, TypeScript, Vite, Tailwind CSS v4, IBM Plex Sans.
- List of all 11 screens.
- Features: responsive client/admin pages, local grayscale photography, original brand mark, JavaScript validation, cart/checkout wireframes, and admin dashboard.
- Installation commands using pnpm:
  - `pnpm install`
  - `pnpm dev`
  - `pnpm build`
  - `pnpm preview`
- Note that the UI is a front-end demonstration and does not connect to a backend or payment service.
- Note that photography is bundled locally and displayed in grayscale.

Do not include fabricated deployment links, credentials, student information, screenshots, or claims of backend functionality.

## Final Verification Before Packaging

### Authoritative project check

1. Confirm the main working tree is clean before export.
2. Run `pnpm build` in the authoritative project.
3. Confirm all 11 numbered screens still exist.
4. Confirm the five JavaScript-validated forms remain present: Customer Login, Checkout, Register, Contact, and Admin Login.
5. Confirm all 16 local image assets are valid, non-empty files.
6. Confirm application code contains no remote Unsplash image URLs or temporary paths.

### Clean export check

After copying the allowlisted files to a temporary staging directory:

1. Inspect the staging tree and verify excluded files/directories are absent.
2. Run `pnpm install --frozen-lockfile` in the staging directory.
3. Run `pnpm build` in the staging directory.
4. Confirm the generated build completes successfully and resolves every local asset.
5. Remove staging `node_modules` and `dist` before ZIP creation and before the clean Git commit.
6. Confirm no `.env` files, credentials, tokens, or secrets exist in the staging tree.

## ZIP Creation

Create `western-clothes-final-submission.zip` from the clean staging directory so the archive has one top-level folder named `western-clothes/`.

Requirements:

- The ZIP contains source, configuration, lockfile, README, and all local image assets.
- It does not contain `.git`, `node_modules`, `dist`, platform metadata, plans, or the unused uploaded assignment photo.
- Use deterministic path selection from the allowlist rather than zipping the workspace root.
- Run `unzip -l` to inspect archive contents.
- Run `unzip -t` to validate archive integrity.
- Extract the ZIP into a second temporary directory and verify the expected top-level folder and required files exist.
- Store the final ZIP at the workspace root as `western-clothes-final-submission.zip` for retrieval, but do not add it to Git or the GitHub repository.

## GitHub Repository Creation

Once `gh auth status` succeeds:

1. Resolve the authenticated account with `gh api user --jq .login`.
2. Check whether `<account>/western-clothes` already exists.
3. Repository naming policy:
   - Use `western-clothes` if available.
   - If it already exists and is not an empty repository intended for this submission, do not overwrite it. Use `western-clothes-college-project` if available.
   - If both names exist, stop and ask the user for a repository name rather than modifying an existing repository.
4. Initialize a fresh Git repository inside the clean staging directory with branch `main`.
5. Stage only the clean export files.
6. Inspect the staged file list and ensure the ZIP, credentials, build artifacts, Figma internals, and unused uploaded image are absent.
7. Create one initial commit with a clear message such as `Initial commit: Western Clothes project`.
8. Create a public GitHub repository with `gh repo create`, set the clean staging repository as its source, and push `main`.
9. Do not alter the authoritative workspace’s Figma-managed `origin`.
10. Verify publication with:
    - `gh repo view <account>/<repo> --json url,visibility,defaultBranchRef`
    - `git ls-remote` against the new GitHub URL
11. Confirm the repository is public, the default branch is `main`, and the README renders on the repository page.

## Failure and Safety Handling

- **Invalid GitHub authentication:** complete the ZIP, do not attempt a push, and report that GitHub reconnection is required.
- **Repository name collision:** use the documented fallback only when it is available; never delete, force-push, or overwrite an existing repository.
- **Build failure:** diagnose and fix only project issues within scope, then recreate the ZIP from the corrected clean export.
- **Archive verification failure:** delete the failed archive and recreate it; never deliver an unverified ZIP.
- **Missing asset:** stop packaging, restore the required local asset from the authoritative project, rerun the build, and then recreate the export.
- **Secret detection:** stop publication and remove the sensitive file from staging before committing or packaging.
- Do not force-push, rewrite the current repository history, or modify Git configuration.

## Final Deliverables

Report exactly these outputs when complete:

- ZIP filename and workspace path: `western-clothes-final-submission.zip`.
- ZIP integrity result and concise contents summary.
- Public GitHub repository URL, if authentication allowed publication.
- Verification results for the authoritative build, clean-export build, archive integrity, and GitHub visibility.
- If GitHub publication is blocked, clearly distinguish the completed ZIP from the missing GitHub link and state that reauthorizing GitHub is the only remaining action.
