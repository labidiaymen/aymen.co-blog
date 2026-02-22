# CLAUDE.md

## Project Overview

Personal tech blog for aymen.co — a Gatsby 4 static site with 58+ markdown blog posts covering web development topics (JavaScript, Vue.js, React, Angular, etc.). Deployed to GitHub Pages via GitHub Actions.

## Tech Stack

- **Framework:** Gatsby 4.14.1 (React 17)
- **Styling:** TailwindCSS 3.0.24, PostCSS, Autoprefixer
- **Content:** Markdown files with YAML frontmatter, transformed by gatsby-transformer-remark
- **Code Highlighting:** PrismJS
- **Analytics:** Segment.js
- **Comments:** Disqus
- **Deployment:** GitHub Pages (gh-pages package), automated via GitHub Actions on push to `master`

## Commands

```bash
npm start          # Start dev server at localhost:8000
npm run build      # Production build
npm run serve      # Serve production build locally
npm run deploy     # Build with prefix-paths + deploy to GitHub Pages
npm run clean      # Clear Gatsby cache and public/
npm run format     # Prettier formatting
```

## Project Structure

```
content/blog/          # Markdown blog posts (frontmatter + content)
src/components/        # React components (ArticleListItem, TopMenu, bio, layout, seo)
src/pages/             # Page components (index, 404)
src/templates/         # Templates (blog-post.js, CategoryList.jsx)
src/images/            # Source images (processed by gatsby-plugin-sharp)
static/images/         # Static images referenced in blog posts
gatsby-config.js       # Gatsby plugins, site metadata, feed config
gatsby-node.js         # Dynamic page creation (posts + category pages)
gatsby-browser.js      # Browser APIs, CSS imports
```

## Blog Post Format

Posts live in `content/blog/` as `.md` files with this frontmatter:

```yaml
---
title: "Article Title"
author: "Aymen"
date: "YYYY-MM-DD"
categories:
  - category-name
tags: "optional"
cover: ../images/image.png
description: "SEO description"
---
```

## Page Generation (gatsby-node.js)

- Post routes: `/{category}/{slug}` (slug derived from file path)
- Category index pages: `/{category}`
- Posts include previous/next navigation links
- Default category is `"none"` if not specified

## Code Style

- Prettier: no semicolons, arrow parens avoided when possible
- File types: `.js`, `.jsx` (one `.tsx` example page exists)
- TailwindCSS utility classes in components

## Key Config

- **Site URL:** https://aymen.co
- **Custom domain:** configured via `static/CNAME`
- **Path prefix:** `/`
- **Node version:** 16.x (per CI config)
- **Branch:** `master` is the main/deploy branch
