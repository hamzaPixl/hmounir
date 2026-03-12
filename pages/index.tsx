import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import EducationCard from '../components/EducationCard';
import ExperienceCard from '../components/ExperienceCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Section from '../components/Section';
import SEO from '../components/SEO';
import { useScrollPosition, useTranslate } from '../hooks';

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const Home: React.FC = () => {
  const { t } = useTranslate();
  const { scrollToSection } = useScrollPosition();
  const router = useRouter();
  const [, setProfileClickCount] = React.useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Header />

      <main className="flex-grow">
        {/* Hero — centered, modern */}
        <section id="top" className="py-24 md:py-32">
          <div className="container">
            <motion.div
              className="flex flex-col items-center text-center"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div className="mb-8" variants={fadeIn}>
                <div className="relative w-28 h-28 rounded-full overflow-hidden ring-2 ring-accent ring-offset-4 ring-offset-white dark:ring-offset-[#0a0a0a]">
                  <Image
                    src="/profile.jpeg"
                    alt="Hamza Mounir"
                    width={112}
                    height={112}
                    style={{ objectFit: 'cover', width: '100%', height: '100%', cursor: 'pointer' }}
                    priority
                    onClick={() => {
                      setProfileClickCount(c => {
                        if (c + 1 === 7) router.push('/dev');
                        return c + 1;
                      });
                    }}
                  />
                </div>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl font-bold tracking-tight mb-3"
                variants={fadeIn}
              >
                Hamza Mounir
              </motion.h1>

              <motion.p
                className="text-lg text-gray-500 dark:text-gray-400 max-w-lg mb-8"
                variants={fadeIn}
              >
                {t('hero.title')}
              </motion.p>

              <motion.div className="flex flex-wrap justify-center gap-3 mb-8" variants={fadeIn}>
                <button onClick={() => scrollToSection('contact')} className="btn">
                  {t('hero.contactMe')}
                </button>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  {t('header.downloadCV')}
                </a>
              </motion.div>

              {/* Social row */}
              <motion.div className="flex items-center gap-4 mb-8" variants={fadeIn}>
                <a
                  href="mailto:hamza@pixldev.be"
                  className="p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-accent transition-colors"
                  title="Email"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
                <a
                  href="tel:+32488203567"
                  className="p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-accent transition-colors"
                  title="Phone"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/hamzaPixl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-accent transition-colors"
                  title="GitHub"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/hamza-mounir-0a7bb6139/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-accent transition-colors"
                  title="LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.pixldev.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-accent transition-colors text-xs font-medium"
                  title="Website"
                >
                  pixldev.be
                </a>
              </motion.div>

              {/* Pixl badge */}
              <motion.div
                className="inline-flex items-center gap-3 border border-gray-200/60 dark:border-gray-800 rounded-full px-5 py-2.5"
                variants={fadeIn}
              >
                <div className="w-7 h-7 relative">
                  <Image
                    src="/logo-inverted.png"
                    alt="Pixl Logo"
                    width={28}
                    height={28}
                    className="invert dark:invert-0"
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium leading-tight">Pixl SRL</p>
                  <p className="text-[10px] text-gray-400 dark:text-gray-600">BE 0805.449.693</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <Section id="about" title={t('about.title')}>
          <motion.div
            className="space-y-4 max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            {[1, 2, 3, 4, 5].map(i => (
              <motion.p
                key={i}
                className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                variants={fadeIn}
              >
                {t(`about.paragraph${i}`)}
              </motion.p>
            ))}
          </motion.div>
        </Section>

        {/* Projects */}
        <Section id="projects" title={t('projects.title')}>
          <motion.div
            className="space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            {/* Feen */}
            <motion.div variants={fadeIn}>
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {t('projects.feen.name')}
                </h3>
                <span className="text-sm text-accent">{t('projects.feen.subtitle')}</span>
              </div>
              <a
                href="https://www.feen.be"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-accent transition-colors"
              >
                feen.be
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-4 mb-4 max-w-2xl">
                {t('projects.feen.description')}
              </p>
              <ul className="space-y-1.5 mb-5">
                {[1, 2, 3, 4, 5, 6, 7].map(i => (
                  <li key={i} className="text-sm text-gray-500 dark:text-gray-400 flex items-start">
                    <span className="w-1 h-1 bg-accent/60 rounded-full mr-2.5 mt-1.5 flex-shrink-0" />
                    <span>{t(`projects.feen.achievement${i}`)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Python',
                  'TypeScript',
                  'Next.js',
                  'AI/LLM APIs',
                  'Vector DBs',
                  'Microservices',
                ].map(tech => (
                  <span
                    key={tech}
                    className="text-[11px] border border-gray-200 dark:border-gray-800 rounded-full px-2.5 py-0.5 text-gray-400 dark:text-gray-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Synq */}
            <motion.div variants={fadeIn}>
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {t('projects.synq.name')}
                </h3>
                <span className="text-sm text-accent">{t('projects.synq.subtitle')}</span>
              </div>
              <a
                href="https://synq.pixldev.be"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-accent transition-colors"
              >
                synq.pixldev.be
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-4 mb-4 max-w-2xl">
                {t('projects.synq.description')}
              </p>
              <ul className="space-y-1.5 mb-5">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                  <li key={i} className="text-sm text-gray-500 dark:text-gray-400 flex items-start">
                    <span className="w-1 h-1 bg-accent/60 rounded-full mr-2.5 mt-1.5 flex-shrink-0" />
                    <span>{t(`projects.synq.feature${i}`)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'TypeScript',
                  'AI Agents',
                  'DAG Engine',
                  'Plugin Architecture',
                  'Multi-Provider',
                ].map(tech => (
                  <span
                    key={tech}
                    className="text-[11px] border border-gray-200 dark:border-gray-800 rounded-full px-2.5 py-0.5 text-gray-400 dark:text-gray-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </Section>

        {/* Skills — text columns, no cards */}
        <Section id="skills" title={t('skills.title')}>
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={fadeIn}>
              <h4 className="text-sm font-semibold text-accent mb-3">{t('skills.backend')}</h4>
              <ul className="space-y-1.5">
                {[
                  'TypeScript',
                  'Python',
                  'Node.js',
                  'NestJS',
                  'FastAPI',
                  'gRPC',
                  'REST',
                  'GraphQL',
                  'Microservices',
                  'Event-Driven',
                ].map(s => (
                  <li key={s} className="text-sm text-gray-500 dark:text-gray-400">
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeIn}>
              <h4 className="text-sm font-semibold text-accent mb-3">
                {t('skills.aiEngineering')}
              </h4>
              <ul className="space-y-1.5">
                {[
                  'LLM Integration',
                  'RAG',
                  'Vector Search',
                  'Prompt Engineering',
                  'Agent Orchestration',
                  'Streaming',
                  'Token Optimization',
                  'Guardrails',
                ].map(s => (
                  <li key={s} className="text-sm text-gray-500 dark:text-gray-400">
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeIn}>
              <h4 className="text-sm font-semibold text-accent mb-3">{t('skills.frontend')}</h4>
              <ul className="space-y-1.5">
                {['React', 'Next.js', 'TailwindCSS', 'SSR / ISR', 'WCAG / ARIA', 'Responsive'].map(
                  s => (
                    <li key={s} className="text-sm text-gray-500 dark:text-gray-400">
                      {s}
                    </li>
                  )
                )}
              </ul>
            </motion.div>
            <motion.div variants={fadeIn}>
              <h4 className="text-sm font-semibold text-accent mb-3">{t('skills.devops')}</h4>
              <ul className="space-y-1.5">
                {[
                  'Azure',
                  'GCP',
                  'Docker',
                  'AKS',
                  'CI/CD',
                  'Git',
                  'PostgreSQL',
                  'MongoDB',
                  'Redis',
                ].map(s => (
                  <li key={s} className="text-sm text-gray-500 dark:text-gray-400">
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </Section>

        {/* Experience */}
        <Section id="experience" title={t('experience.title')}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={fadeIn}>
              <ExperienceCard
                title={t('experience.belfius.title')}
                company="Belfius"
                period={t('experience.belfius.period')}
                description={t('experience.belfius.description')}
                achievements={[1, 2, 3, 4].map(i => t(`experience.belfius.achievement${i}`))}
                logoUrl="/logos/belfius.jpeg"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ExperienceCard
                title={t('experience.cohabs.title')}
                company="Cohabs"
                period={t('experience.cohabs.period')}
                description={t('experience.cohabs.description')}
                achievements={[1, 2, 3, 4].map(i => t(`experience.cohabs.achievement${i}`))}
                logoUrl="/logos/cohabs.jpeg"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ExperienceCard
                title={t('experience.greenomy.title')}
                company="Greenomy"
                period={t('experience.greenomy.period')}
                description={t('experience.greenomy.description')}
                achievements={[1, 2, 3, 4].map(i => t(`experience.greenomy.achievement${i}`))}
                logoUrl="/logos/greenomy.jpeg"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ExperienceCard
                title={t('experience.qover.title')}
                company="Qover"
                period={t('experience.qover.period')}
                description={t('experience.qover.description')}
                achievements={[1, 2, 3, 4, 5].map(i => t(`experience.qover.achievement${i}`))}
                logoUrl="/logos/qover.jpeg"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ExperienceCard
                title={t('experience.emakina.title')}
                company="Emakina"
                period={t('experience.emakina.period')}
                description={t('experience.emakina.description')}
                achievements={[1, 2, 3].map(i => t(`experience.emakina.achievement${i}`))}
                logoUrl="/logos/emakina.jpeg"
              />
            </motion.div>
          </motion.div>
        </Section>

        {/* Education & Languages */}
        <Section id="education" title={t('education.title')}>
          <motion.div
            className="space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={fadeIn}>
              <EducationCard
                degree={t('education.degree')}
                institution={t('education.institution')}
                period={t('education.period')}
                logoUrl="/logos/vinci.jpeg"
              />
            </motion.div>

            <motion.div variants={fadeIn}>
              <h3 className="text-sm font-semibold text-accent mb-4">{t('languages.title')}</h3>
              <div className="flex gap-8">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {t('languages.french')}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {t('languages.frenchLevel')}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {t('languages.english')}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {t('languages.englishLevel')}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Section>

        {/* Contact — centered CTA, action buttons */}
        <Section id="contact" title={t('contact.title')}>
          <motion.div
            className="text-center max-w-lg mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.p className="text-gray-500 dark:text-gray-400 mb-8" variants={fadeIn}>
              {t('contact.description')}
            </motion.p>

            <motion.div className="flex flex-wrap justify-center gap-3" variants={fadeIn}>
              <a href="mailto:hamza@pixldev.be" className="btn">
                <span className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  hamza@pixldev.be
                </span>
              </a>
              <a
                href="https://github.com/hamzaPixl"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/hamza-mounir-0a7bb6139/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </span>
              </a>
              <a href="tel:+32488203567" className="btn-secondary">
                <span className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +32 488 20 35 67
                </span>
              </a>
            </motion.div>
          </motion.div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common'])),
    },
  };
};

export default Home;
