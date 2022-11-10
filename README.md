<h1 align="center">mstrow.dev Website</h1>
<p>This is a fork from: </p> <h2><a href="https://files.community">files.community</a></h2>


---

# Overview

This repository contains the source code for the new [Files website](https://files.community). The site is written using [SvelteKit](https://svelte.dev), [TypeScript](https://typescriptlang.org/) and [SCSS](https://sass-lang.com), and deployed with Vercel.

## Codebase Structure

```
.
├──static                 // Contains static assets including branding, images, fonts, etc...
|  ├──branding            // Branding media (logos, banners, etc...)
|  ├──fonts               // Static font files loaded by the website.
|  ├──preview-samples     // Sample files used in the preview pane in the features section.
|  ├──screenshots         // Screenshots and renders of the app used in the website.
|  └──ui                  // Images other than branding used in the website's user interface.
└──src                    // The website's source code.
   ├──lib                 // Re-usable Svelte components used within the website.
   ├──layout              // Components responsible for defining page layout, such as headers, footers, page sections, etc...
   ├──routes              // SvelteKit's filesystem-based routes. Anything in the folder is registered as a URL on build time.
   |  ├──docs             // Documentation and associated files.
   |  └──blog             // Blog page and associated files.
   |     └──posts         // Folder containing blog posts in Markdown format.
   ├──data                // Data storage used across various components and routes. NOT stores, just exported variables.
   └──styles              // SCSS styles that are NOT tied to components in /lib.
```

---

# Development

## Prerequisites

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/) with `npm`.
- [`pnpm`](https://pnpm.io)
- Command line of your choice.

## Building

### 1: Clone the repository.

```ps
git clone https://github.com/files-community/Website && cd Website
```

This will create a local copy of this repository and navigate you to the root folder of the repository.

### 2: Install Dependencies

Run this command at the root folder to install dependencies:

```ps
pnpm i
```

### 3: Run Build Script

To build the site in development mode, simply run the following command:

```ps
pnpm run dev
```

