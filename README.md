# Suindra Groups Website

[![Built with Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![EmailJS](https://img.shields.io/badge/EmailJS-4.4.1-FF3366?style=for-the-badge&logo=maildotru&logoColor=white)](https://www.emailjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **Suindra Groups** — the official corporate website of Suindra Groups. A modern, responsive platform built to showcase the company's vision, services, ventures, partners, team, and provide a seamless way for clients and collaborators to get in touch.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Sections & Navigation](#-sections--navigation)
- [Components](#-components)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Animations & UI](#-animations--ui)
- [Deployment](#-deployment)
- [Future Improvements](#-future-improvements)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 📖 Overview

The Suindra Groups website acts as the digital identity for the company, highlighting its mission to build impactful digital products and empower businesses through technology. 

It presents a clean, high-converting landing experience with dedicated sections for services, ventures, partners, about, team, and contact — all optimized for speed, accessibility, and a smooth user experience across devices.

---

## ✨ Features

- **Modern Landing Experience** – A bold hero section with a strong brand presence and clear call-to-actions.
- **Services Showcase** – Highlights the core areas of expertise and value offerings of Suindra Groups.
- **Venture Products** – Showcases flagship ventures with live and upcoming statuses. Currently features **[BuyNow](https://buynow.suindragroups.com.np/)** (Live) and **SellNow** (Launching Soon).
- **Strategic Partners** – Displays trusted partners to build credibility and brand trust.
- **About Us** – Concisely communicates the vision, mission, and purpose of Suindra Groups.
- **Meet The Team** – Introduces key members with roles, education, profile images, LinkedIn, and portfolio links.
- **Contact Form** – Integrated with **EmailJS** to allow visitors to send inquiries directly from the website.
- **Smooth Animations** – Subtle, elegant transitions powered by **Framer Motion** for an engaging feel.
- **Fully Responsive** – Optimized for desktops, tablets, and mobile devices.
- **App Router Architecture** – Built using Next.js 16's App Router for better performance and scalability.
- **Clean Navigation** – Sticky navbar with smooth in-page scrolling to relevant sections.

---

## 🗺 Sections & Navigation

| Section | Route/Link | Description |
| --- | --- | --- |
| **Home** | `/` / `#hero` | Introductory hero section with branding and primary CTA. |
| **Services** | `#services` | Overview of services offered by Suindra Groups. |
| **Ventures** | `#ventures` | Showcase of digital products and ventures under the group. |
| **Partners** | `#partners` | Logos and names of associated partners. |
| **About** | `#about` | Company overview, values, and mission. |
| **Team** | `#team` | Core team members with profiles and social links. |
| **Contact** | `#contact` | Inquiry form powered by EmailJS with direct outreach. |

---

## 🧩 Components

All reusable UI blocks are organized under `app/components/`.

| Component | Description |
| --- | --- |
| `Navbar.tsx` | Sticky, responsive navigation bar with section links. |
| `Hero.tsx` | Hero banner with headline, tagline, and call-to-action buttons. |
| `Services.tsx` | Grid layout displaying Suindra Groups' core services. |
| `VentureProducts.tsx` | Card-based display for ventures with status badges (`Live` / `Launching Soon`) and external links. |
| `Partners.jsx` | Clean partner showcase section. |
| `About.tsx` | Informative section outlining the group's identity and goals. |
| `Team.tsx` | Team member cards with images, roles, education, and external links. |
| `Contact.tsx` | Contact form integrated with EmailJS for email delivery. |
| `Footer.tsx` | Footer with brand info, quick links, and copyright. |

---

## 🛠 Tech Stack

### Core Framework
| Technology | Purpose |
| --- | --- |
| **[Next.js 16.2.4](https://nextjs.org/)** | React framework with App Router, optimized for performance and SEO. |
| **[React 19.2.4](https://react.dev/)** | Modern UI library with concurrent features. |
| **[TypeScript 5](https://www.typescriptlang.org/)** | Type-safe development with better maintainability. |

### Styling & UI
| Technology | Purpose |
| --- | --- |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Utility-first CSS framework for rapid, modern styling. |
| **[Framer Motion 12.38.0](https://www.framer.com/motion/)** | Declarative animations and smooth page transitions. |
| **[Lucide React](https://lucide.dev/)** | Clean, consistent SVG icon set. |

### Utilities & Integrations
| Technology | Purpose |
| --- | --- |
| **[@emailjs/browser](https://www.emailjs.com/docs/sdk/installation/)** | Client-side email sending without a custom backend for the contact form. |

---

## 📁 Project Structure

```bash
suindragroups-website/
├── app/
│   ├── components/        # All page sections & reusable UI components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Partners.jsx
│   │   ├── Services.tsx
│   │   ├── Team.tsx
│   │   └── VentureProducts.tsx
│   ├── layout.tsx         # Root layout with fonts, metadata & global structure
│   └── page.tsx           # Home page assembling all sections
│
├── constants/
│   └── index.ts           # Centralized data: NAV_LINKS, PRODUCTS, TEAM_MEMBERS
│
├── public/                # Static assets (logos, banners, team profiles)
│   ├── raviprofile.jpeg
│   ├── ashwaniprofile.png
│   ├── suindrabanner.png
│   ├── suindracover.png
│   └── ...
│
├── .nvmrc                 # Node.js version lock
├── eslint.config.mjs      # ESLint configuration
├── next.config.mjs        # Next.js configuration
├── package.json           # Dependencies & scripts
├── postcss.config.mjs     # PostCSS configuration for Tailwind
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) `v20+` (see `.nvmrc` for recommended version)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ravipajiyar/suindragroups-website.git
   cd suindragroups-website
   ```

2. **Install dependencies**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory (see [Environment Variables](#-environment-variables) below).

4. **Run the development server**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

5. **Open in browser**

   Visit [http://localhost:3000](http://localhost:3000) to view the site locally.

### Available Scripts

| Script | Description |
| --- | --- |
| `yarn dev` / `npm run dev` | Starts the Next.js development server with hot reload. |
| `yarn build` / `npm run build` | Creates an optimized production build. |
| `yarn start` / `npm run start` | Runs the production build locally. |
| `yarn lint` / `npm run lint` | Lints the codebase using Next.js ESLint config. |

---

## 🔐 Environment Variables

The contact form uses [EmailJS](https://www.emailjs.com/). Create a `.env.local` file in the project root with the following keys:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

> **Note:** Only variables prefixed with `NEXT_PUBLIC_` are exposed to the browser in Next.js. Never expose any private/secret keys here.

---

## 🎨 Animations & UI

- **Framer Motion** – Used for entrance animations, fade-ins, and smooth reveals as users scroll through sections.
- **Lucide Icons** – Lightweight and consistent icons for links, buttons, and UI elements.
- **Responsive Grid System** – Tailwind CSS utilities ensure clean layouts across all breakpoints.
- **Modern Typography** – Optimized using Next.js' built-in font handling for crisp, readable text.
- **Subtle Hover States** – Interactive elements feature polished hover effects for better UX.

---

## 🌐 Deployment

The recommended way to deploy this website is via [Vercel](https://vercel.com/), as it's built by the creators of Next.js and offers seamless integration.

### Steps to Deploy

1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel will auto-detect **Next.js** as the framework. No custom build settings are required.
4. Add the EmailJS environment variables under `Project Settings > Environment Variables`.
5. Click **Deploy** and your site will be live in seconds.

You can also deploy to other platforms like Netlify, Render, or Cloudflare Pages, but Vercel is the most optimized for Next.js App Router projects.

---

## 🔮 Future Improvements

- [ ] **Dark/Light Mode** – Add theme toggle for better user preference support.
- [ ] **SEO Enhancements** – Implement structured data (JSON-LD), OpenGraph, and dynamic metadata per section.
- [ ] **Contact Form Validation** – Add stronger client-side validation with user feedback toasts.
- [ ] **Blog/News Section** – Showcase company updates, news, or announcements.
- [ ] **SellNow Launch Page** – Create a dedicated landing page once the SellNow app is ready.
- [ ] **Gallery/Project Showcase** – Add a portfolio of completed projects and case studies.
- [ ] **Multilingual Support** – Expand reach with Nepali and English language options.

---

## 🤝 Contributing

Contributions, issues, and feature requests are always welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'Add: awesome new feature'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request

Please follow the existing code style and keep changes clean and focused.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

## 👨‍💻 Author

**Ravi Pajiyar**

- GitHub: [@ravipajiyar](https://github.com/ravipajiyar)
- LinkedIn: [Ravi Pajiyar](https://www.linkedin.com/in/ravi-pajiyar-a4a5512ba/)
- Portfolio: [pajiyarravi.com.np](https://pajiyarravi.com.np)

---

**Built with ❤️ — Contributed by Ravi Pajiyar on behalf of Suindra Groups Pvt. Ltd.**
