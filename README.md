# Rohan Komirishetty Portfolio

An interview‑ready personal portfolio built with React.  This project showcases
your résumé, skills, professional experience and projects in a modern single
page application.  The content is data‑driven and modular to encourage reuse
and easy updates.

## Overview

This portfolio uses the **Create React App** base template and organizes
your résumé data in a dedicated module (`src/data/resumeData.js`).  The UI
components consume this data to render the various sections of your site:

* **Hero** – introduces you and links to your résumé.
* **About** – summarizes your professional background and lists your education.
* **Skills** – breaks down your technical stack into categories.
* **Experience** – presents your employment history with bullet point
  accomplishments.
* **Projects** – highlights selected projects with descriptions, tech stack and
  links to source and demos.
* **Contact** – shows how to reach you and includes a basic contact form.

## Features

* **Fully responsive** layout that adapts to mobile, tablet and desktop.
* **Data‑driven** content with a single source of truth (`resumeData.js`).
* **Modular components** for easy maintenance and extension.
* **PDF résumé** included in the `public` folder; users can download directly.
* **GitHub Pages ready** via the `gh-pages` package and deploy script.

## Getting Started

### Prerequisites

You should have **Node.js >= 14** and **npm >= 6** installed on your machine.
Create React App requires Node 14 or newer【541296896188864†L74-L77】, and this project has been tested
against Node 14.17.3.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/USERNAME/portfolio.git
cd portfolio
npm install
```

Replace `USERNAME` with your GitHub username.  The first time you run
`npm install` it will install React, React DOM and the other dependencies.

### Running Locally

To start the development server on `http://localhost:3000` run:

```bash
npm start
```

The page will automatically reload when you make changes.  Linting and
build errors will surface in the console for quick debugging.

### Testing

This project uses the default testing setup provided by Create React App.
To run the test watcher:

```bash
npm test
```

You can add Jest or React Testing Library tests under the `src` directory.

### Building

Generate an optimized production build:

```bash
npm run build
```

The compiled output will be written to the `build` directory.  You can serve
this folder with any static site host (Netlify, Vercel, S3, etc.).

### Deployment

This project is preconfigured to deploy to **GitHub Pages** using the
`gh-pages` package.  To deploy:

1. Replace `USERNAME` in the `homepage` property of `package.json` with your GitHub username.
2. Commit and push your code to a GitHub repository named `portfolio` (or
   adjust the path accordingly).
3. Run the deployment script:

   ```bash
   npm run deploy
   ```

The `predeploy` script will build the project and `gh-pages` will push the
`build` directory to the `gh-pages` branch.  GitHub will then serve your
portfolio at `https://USERNAME.github.io/portfolio`.

Alternatively, you can host the contents of the `build` folder on any static
hosting provider (Netlify, Vercel, CloudFront, etc.).

## Customization

This repository uses a data‑first approach.  To customize your site:

1. **Update résumé data:**  Edit `src/data/resumeData.js` to change your name,
   contact information, summary, skills, education, experience and projects.
   Replace placeholder project entries with real projects and update the
   `image`, `repoLink` and `demoLink` fields as needed.
2. **Replace images:**  The hero section uses `src/assets/profile.png` as a
   placeholder headshot and the projects use images from `public/images`.
   Replace these files with your own photos or diagrams.  Keep the file
   names or update the paths in `resumeData.js` accordingly.
3. **Tweak styling:**  Component styles live alongside their JavaScript in
   `.css` files.  Modify these files to adjust colours, fonts, spacing and
   layouts.  You can also introduce a CSS framework or utility classes.
4. **Extend functionality:**  Add new sections or components under
   `src/components` and import them into `App.js`.  Use the existing
   components as templates for building custom features.

## Next Steps

1. **Review the résumé PDF:**  A PDF copy of your résumé is included at
   `public/resume.pdf`.  Swap in your own résumé or generate a fresh PDF from
   your latest Word document.  For example, you can convert a DOCX file to
   PDF with LibreOffice:

   ```bash
   libreoffice --headless --convert-to pdf --outdir public your_resume.docx
   ```

2. **Fill in the blanks:**  Search for high‑quality images or icons for your
   projects and update the `projects` array.  Upload these images to
   `public/images`.

3. **Implement form submission:**  The contact form currently logs the input
   and shows a thank‑you alert.  Hook it up to an email service or API (for
   example, EmailJS or a serverless function) to receive real enquiries.

4. **Analytics and SEO:**  Consider adding Google Analytics, Open Graph tags
   and structured data to improve discoverability.  You can edit
   `public/index.html` to include meta tags for SEO and social sharing.

5. **Continuous deployment:**  Configure a CI/CD pipeline on GitHub Actions,
   Netlify or Vercel to automatically build and deploy your portfolio
   whenever you push to the repository.

Enjoy building your interview‑ready portfolio!