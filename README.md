# Bright Digital Agency Website

A modern, conversion-focused marketing agency experience built with React, Vite, Tailwind CSS, and Framer Motion. The site includes multi-page navigation, animated hero, testimonials slider, pricing tables, blog, case studies, contact form with validation, newsletter popup, cookie banner, and dark mode support.

## Getting Started

> **Prerequisite:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server (hot reload on http://localhost:5173 by default):
   ```bash
   npm run dev
   ```
   > Need to access the dev server from a cloud IDE or VM? Append `-- --host` to expose it on all interfaces: `npm run dev -- --host`.
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build locally (serves the optimized build on http://localhost:4173):
   ```bash
   npm run preview
   ```

## Previewing the Site Without Installing Globally

If you only want to check out the UI without installing anything globally, clone the repo and run everything with the bundled npm scripts:

```bash
git clone <repo-url>
cd digitalmarketing
npm install
npm run dev
```

Alternatively, to verify the exact production output that will be deployed, run:

```bash
npm run build
npm run preview
```

This launches a local static server so you can click through every page exactly as it will appear when hosted on Vercel, Netlify, or any static host.

## Features

- Animated hero section with compelling CTAs and stat highlights
- Full services catalog, case studies with deep dives, and pricing tables
- Blog with individual article pages and related content
- Contact page featuring validated form, FAQ, and multiple support touchpoints
- Floating WhatsApp and consultation buttons, cookie consent, and newsletter popup
- Dark mode toggle, smooth scrolling, SEO meta tags, and responsive Tailwind design

Deploy effortlessly to Vercel, Netlify, or your preferred static host.

## Pushing This Code to Your Own Git Repository

Want to back up the project or share it with your team? Use the following Git workflow (replace the bracketed values with your own repo details):

1. Create a new repository on GitHub/GitLab/Bitbucket (without adding a README so you avoid merge conflicts).
2. In this project folder, point Git to that remote:
   ```bash
   git remote add origin git@github.com:<your-username>/<your-repo>.git
   ```
   > Prefer HTTPS? Use `https://github.com/<your-username>/<your-repo>.git` instead of the SSH URL.
3. Verify the remote was added correctly:
   ```bash
   git remote -v
   ```
4. Commit any outstanding work (the repo already includes an initial commit, but you can capture further edits):
   ```bash
   git add .
   git commit -m "feat: polish Bright Digital Agency site"
   ```
5. Push the branch up to your remote:
   ```bash
   git push -u origin work
   ```
   Replace `work` with whatever branch name you are using. The `-u` flag stores the upstream so subsequent pushes only require `git push`.

If you ever need to sync new local commits, just rerun `git push`. To pull updates from teammates, use `git pull origin <branch>`.
