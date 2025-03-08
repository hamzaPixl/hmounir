# 🚀 Hamza Mounir Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases professional experience, skills, and projects with a clean, minimal design and smooth animations.

![Portfolio Preview](public/og-image.jpg)

## ✨ Features

- 🌐 **Multilingual Support** - Available in English, French, and Dutch
- 📱 **Fully Responsive** - Looks great on all devices
- 🎨 **Modern Design** - Clean, minimal UI with smooth animations
- 🔍 **SEO Optimized** - Meta tags, OpenGraph, Twitter cards, sitemap, and robots.txt
- 📊 **Analytics Ready** - Google Analytics integration
- 🚀 **Performance Optimized** - Fast loading with image optimization and code splitting
- 🌙 **Accessibility** - WCAG compliant for better user experience
- 🔄 **i18n Support** - Internationalization with next-i18next

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Heroicons](https://heroicons.com/)
- **i18n**: [next-i18next](https://github.com/isaachinman/next-i18next)
- **Linting**: ESLint, Prettier
- **Analytics**: Google Analytics

## 📂 Project Structure

```
hmounir-portfolio/
├── components/         # Reusable UI components
├── lib/                # Utility functions and libraries
├── pages/              # Next.js pages
├── public/             # Static assets
│   ├── favicon/        # Favicon files
│   ├── locales/        # i18n translation files
│   └── ...             # Other static assets
├── scripts/            # Build and utility scripts
├── styles/             # Global styles
├── types/              # TypeScript type definitions
├── .env.example        # Environment variables example
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hmounir-portfolio.git
   cd hmounir-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file based on `.env.example`:
   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Environment Variables

- `NEXT_PUBLIC_GA_ID`: Google Analytics measurement ID
- `NEXT_PUBLIC_SITE_URL`: Your website URL for SEO purposes

### i18n

Translations are stored in `public/locales/{language}/common.json`. To add a new language:

1. Create a new folder in `public/locales/` with the language code
2. Copy the structure from an existing language folder
3. Translate the strings in the JSON files
4. Add the language to the `i18n.locales` array in `next-i18next.config.js`

## 📦 Build and Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Start Production Server

```bash
npm run start
# or
yarn start
```

### Deployment

This project can be deployed to any platform that supports Next.js, such as:

- [Vercel](https://vercel.com/) (recommended)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

## 🧪 Testing

```bash
npm run lint
npm run type-check
# or
yarn lint
yarn type-check
```

## 🔍 Troubleshooting

### Redirect Loop Issues

If you encounter a redirect loop error (`ERR_TOO_MANY_REDIRECTS`), follow these steps:

1. Run the troubleshooting script:
   ```bash
   npm run troubleshoot
   ```

2. Clear your browser cookies for localhost.

3. Make sure the i18n configuration is correct:
   - Set `localeDetection: false` in `next-i18next.config.js`
   - Ensure `trailingSlash` is set consistently in `next.config.js`

4. Restart with a clean cache:
   ```bash
   npm run dev:clean
   ```

### Common Issues

- **i18n Redirect Loops**: Usually caused by automatic language detection. Disable it by setting `localeDetection: false`.
- **Cache Issues**: Clear the Next.js cache with `npm run clean`.
- **Cookie Problems**: Clear your browser cookies for localhost.

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Heroicons](https://heroicons.com/)

---

Made with ❤️ by Hamza Mounir
