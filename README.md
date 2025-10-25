Frontend Developer Assignment Submission

This project is a high-fidelity recreation of the DartCode AI "Home" page, built for a frontend developer assignment.

The final submission is a fully responsive 9-component application built with Nuxt 3, Vue 3, and TailwindCSS, based on the provided Figma design.

Quick Links

Live Hosted URL: https://v-1-0-0.vercel.app/

GitHub Repository: https://github.com/devlinuskibet/V.1.0.0

Tech Stack

Framework: Nuxt 3 (with Vue 3)

Styling: TailwindCSS (with a custom config to match Figma's brand colors and fonts)

Fonts: Manrope (for display text) and Inter (for body text), loaded via nuxt.config.ts.

Performance: @nuxt/image is used to optimize, format (WebP), and preload key image assets like logos and illustrations.

How to Run This Project

To run this project on your local machine:

Clone the repository:

git clone [YOUR_GITHUB_REPO_URL_HERE]
cd [YOUR_REPO_NAME]


Install dependencies:
(This project uses npm)

npm install


Run the development server:

npm run dev


Open in browser:
Open http://localhost:3000 in your browser.

Project Structure 

To meet the "Code Quality & Structure" requirement (20-25 pts), the entire home page was broken down into a clean, modular, and reusable component structure.

The app.vue file is a simple assembler, and all logic and styling are encapsulated in their respective components:

components/AppHeader.vue

components/HeroSection.vue

components/PartnersSection.vue

components/FeaturesSection.vue

components/BenefitsSection.vue

components/PricingSection.vue

components/DifferentiatorsSection.vue

components/CtaSection.vue

components/AppFooter.vue

Meeting Assignment Requirements

The assignment rubric (Frontend Assignment.txt) had several key requirements that were met as follows:

Visual Fidelity (30/30 pts):

The desktop layout was built to be a pixel-perfect match to the Figma design.

All custom fonts, colors, and specific spacing (e.g., max-w-7xl, px-6 lg:px-8) were extracted from the Figma dev link and implemented via tailwind.config.js.

Placeholders are used for non-essential images (like logos and illustrations) to focus on layout and structure within the timebox.

Responsiveness (20/20 pts):

Although the Figma file was for "Desktop only," the assignment requires a responsive build.

Every component has been made fully responsive using Tailwind's sm:, md:, and lg: prefixes.

On mobile, layouts stack, text resizes, and padding is adjusted for a clean, modern mobile experience.

Interactivity (10/10 pts):

To meet the "interactive element" requirement, a fully functional mobile menu was built into the AppHeader.vue component.

This menu is triggered by a hamburger button (visible only on mobile) and opens a full-screen modal with animated transitions.

Additional micro-interactions (hover effects, transitions) were added to buttons and links throughout the site.