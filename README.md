# 🚀 Hamza Mounir Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases professional experience, skills, and projects with a clean, minimal design and smooth animations.

## ✨ Features

- 🌐 **Multilingual Support** - Available in English (🇬🇧), French (🇫🇷), and Dutch (🇳🇱)
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 🎨 **Modern Design** - Clean UI with smooth animations using Framer Motion
- 🔍 **SEO Optimized** - Meta tags, OpenGraph, Twitter cards, sitemap, and robots.txt
- 📊 **Analytics Ready** - Google Analytics integration
- 🚀 **Performance Optimized** - Image optimization, code splitting, and lazy loading
- 🌙 **Accessibility** - WCAG compliant with semantic HTML
- 🔄 **i18n Support** - Internationalization with next-i18next
- 💼 **Professional Sections** - About, Skills, Experience, Education, and Contact
- 🎯 **Interactive Elements** - Smooth scrolling, animations, and hover effects

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15.2.1
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5.1.3
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.3.2
- **Animations**: [Framer Motion](https://www.framer.com/motion/) 10.12.16
- **Icons**: [Heroicons](https://heroicons.com/) 2.0.18
- **i18n**: [next-i18next](https://github.com/isaachinman/next-i18next) 14.0.0
- **Linting**: ESLint, Prettier
- **Analytics**: Google Analytics

## 📂 Project Structure

```
hmounir-portfolio/
├── components/           # Reusable UI components
│   ├── Header.tsx       # Navigation and language selection
│   ├── Footer.tsx       # Site footer with social links
│   ├── Section.tsx      # Section wrapper component
│   ├── SkillCard.tsx    # Skills display component
│   ├── ExperienceCard.tsx # Experience item component
│   ├── EducationCard.tsx # Education item component
│   └── SEO.tsx          # SEO meta tags component
├── hooks/               # Custom React hooks
│   ├── useLanguage.ts   # Language management
│   ├── useTranslate.ts  # Translation utilities
│   └── useScrollPosition.ts # Scroll handling
├── pages/               # Next.js pages
│   ├── _app.tsx        # App wrapper
│   ├── _document.tsx   # Document customization
│   ├── index.tsx       # Homepage
│   ├── 404.tsx         # Not found page
│   └── _error.tsx      # Error handling
├── public/              # Static assets
│   ├── favicon/        # Favicon files
│   ├── locales/        # Translation files
│   └── images/         # Site images
├── styles/             # Global styles
├── types/              # TypeScript types
└── lib/                # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hamzaPixl/hmounir.git
   cd hmounir
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create environment files:

   ```bash
   cp .env.example .env
   cp .env.local.example .env.local
   ```

4. Update the environment variables in `.env` and `.env.local` with your values:

   - `NEXT_PUBLIC_GA_ID`: Google Analytics measurement ID
   - `NEXT_PUBLIC_SITE_URL`: Your website URL

5. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript checks
- `npm run analyze` - Analyze bundle size
- `npm run clean` - Clear cache and node_modules
- `npm run dev:clean` - Clear cache and start dev server
- `npm run troubleshoot` - Run troubleshooting script

## 🌐 Internationalization

The site supports three languages:

- 🇬🇧 English (default)
- 🇫🇷 French
- 🇳🇱 Dutch

Translation files are located in `public/locales/{lang}/common.json`.

## 📱 Responsive Design

The site is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔍 SEO

- Dynamic meta tags
- OpenGraph images
- Twitter cards
- Structured data
- Sitemap
- Robots.txt

## 🚀 Deployment

The site can be deployed to:

- [Vercel](https://vercel.com/) (recommended)
- [Netlify](https://www.netlify.com/)
- Any platform supporting Next.js

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

**Hamza Mounir**

- Website: [pixldev.be](https://www.pixldev.be)
- GitHub: [@hamzaPixl](https://github.com/hamzaPixl)
- LinkedIn: [Hamza Mounir](https://www.linkedin.com/in/hamza-mounir-0a7bb6139/)

---

Made with ❤️ by Hamza Mounir
