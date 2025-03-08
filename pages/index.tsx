import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { EnvelopeIcon, MapPinIcon, PhoneIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';
import SkillCard from '../components/SkillCard';
import ExperienceCard from '../components/ExperienceCard';
import SEO from '../components/SEO';
import { useTranslate, useScrollPosition } from '../hooks';
import EducationCard from '../components/EducationCard';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Blur data URLs for image placeholders
const profileImagePlaceholder = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAIAAgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigD/2Q==';
const logoImagePlaceholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMC0wNy0wNlQxMTozOToxOCswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjAtMDctMDZUMTE6NDA6MzkrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDctMDZUMTE6NDA6MzkrMDE6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzZjMjBiN2ItZmQ4ZC0zODQ0LWIyZWMtNDFjOTVhMGE5NzlmIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc2YzIwYjdiLWZkOGQtMzg0NC1iMmVjLTQxYzk1YTBhOTc5ZiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjc2YzIwYjdiLWZkOGQtMzg0NC1iMmVjLTQxYzk1YTBhOTc5ZiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NzZjMjBiN2ItZmQ4ZC0zODQ0LWIyZWMtNDFjOTVhMGE5NzlmIiBzdEV2dDp3aGVuPSIyMDIwLTA3LTA2VDExOjM5OjE4KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgEk4u4AAAAiSURBVBiVY/j//z8DEIAoIICJAQqgNENVVRVcAe0UAADpfQwLUHj2vgAAAABJRU5ErkJggg==';

const Home: React.FC = () => {
  const { t } = useTranslate();
  const { scrollToSection } = useScrollPosition();

  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="top" className="py-16 md:py-24 bg-gradient-to-r from-dark to-dark/90 text-white">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                className="md:w-1/2 mb-8 md:mb-0"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <div className="relative w-64 h-64 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-primary">
                  <Image
                    src="/profile.jpeg"
                    alt="Hamza Mounir"
                    width={256}
                    height={256}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    placeholder="blur"
                    blurDataURL={profileImagePlaceholder}
                    priority
                  />
                </div>
              </motion.div>
              <motion.div
                className="md:w-1/2 text-center md:text-left"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.h1
                  className="text-4xl md:text-5xl font-bold mb-4"
                  variants={fadeInUp}
                >
                  Hamza Mounir
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl text-gray-200 mb-6"
                  variants={fadeInUp}
                >
                  {t('hero.title')}
                </motion.p>

                <motion.div
                  className="flex flex-col space-y-3 mb-8 items-center md:items-start"
                  variants={staggerContainer}
                >
                  <motion.div className="flex items-center" variants={fadeInUp}>
                    <MapPinIcon className="h-5 w-5 text-primary mr-2" />
                    <span>Brussels, Belgium</span>
                  </motion.div>
                  <motion.div className="flex items-center" variants={fadeInUp}>
                    <PhoneIcon className="h-5 w-5 text-primary mr-2" />
                    <Link href="tel:+32488203567" legacyBehavior>
                      <a className="hover:text-primary transition-colors">+32 488 20 35 67</a>
                    </Link>
                  </motion.div>
                  <motion.div className="flex items-center" variants={fadeInUp}>
                    <EnvelopeIcon className="h-5 w-5 text-primary mr-2" />
                    <Link href="mailto:hamza@pixldev.be" legacyBehavior>
                      <a className="hover:text-primary transition-colors">hamza@pixldev.be</a>
                    </Link>
                  </motion.div>
                  <motion.div className="flex items-center" variants={fadeInUp}>
                    <GlobeAltIcon className="h-5 w-5 text-primary mr-2" />
                    <div className="space-x-3">
                      <Link href="https://www.pixldev.be" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">pixldev.be</a>
                      </Link>
                      <span>|</span>
                      <Link href="https://github.com/hamzaPixl" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
                      </Link>
                      <span>|</span>
                      <Link href="https://www.linkedin.com/in/hamza-mounir-0a7bb6139/" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
                  variants={fadeInUp}
                >
                  <motion.button
                    onClick={() => scrollToSection('contact')}
                    className="btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('hero.contactMe')}
                  </motion.button>
                  <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-white text-dark border border-primary hover:bg-gray-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('header.downloadCV')}
                  </motion.a>
                </motion.div>

                {/* Business Card */}
                <motion.div
                  className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20"
                  variants={fadeInUp}
                >
                  <div className="flex items-center flex-col mb-2">
                    <div className="w-12 h-12 relative mr-3">
                      <Image
                        src="/logo-inverted.png"
                        alt="Pixl Logo"
                        width={48}
                        height={48}
                        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                        placeholder="blur"
                        blurDataURL={logoImagePlaceholder}
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <h3 className="text-lg font-bold text-primary">Pixl SRL</h3>
                      <p className="text-sm text-gray-300">BE 0805.449.693</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <Section id="about" title={t('about.title')}>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.p className="text-lg" variants={fadeInUp}>
              {t('about.paragraph1')}
            </motion.p>
            <motion.p className="text-lg" variants={fadeInUp}>
              {t('about.paragraph2')}
            </motion.p>
          </motion.div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title={t('skills.title')} className="bg-gray-50">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <SkillCard
                title={t('skills.softwareArchitecture')}
                skills={[
                  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
                  { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original-wordmark.svg' },
                  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
                  { name: 'REST APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
                  { name: 'Microservices', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
                ]}
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SkillCard
                title={t('skills.businessCritical')}
                skills={[
                  { name: 'System Design' },
                  { name: 'Cloud Architecture' },
                  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
                  { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
                  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
                  { name: 'CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
                  { name: 'DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
                ]}
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SkillCard
                title={t('skills.leadership')}
                skills={[
                  { name: 'Team Leadership' },
                  { name: 'Mentoring' },
                  { name: 'Code Reviews' },
                  { name: 'Agile/Scrum' },
                  { name: 'Technical Planning' },
                  { name: 'Process Improvement' }
                ]}
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <SkillCard
                title={t('skills.keyStrengths')}
                skills={[
                  { name: 'Problem Solving' },
                  { name: 'System Architecture' },
                  { name: 'Performance Optimization' },
                  { name: 'Security Best Practices' },
                  { name: 'Technical Documentation' },
                  { name: 'Cross-team Collaboration' }
                ]}
              />
            </motion.div>
          </motion.div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" title={t('experience.title')}>
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <ExperienceCard
                title={t('experience.greenomy.title')}
                company="Greenomy"
                period={t('experience.greenomy.period')}
                description={t('experience.greenomy.description')}
                achievements={[t('experience.greenomy.achievement1'), t('experience.greenomy.achievement2'), t('experience.greenomy.achievement3')]}
                logoUrl="https://media.licdn.com/dms/image/v2/C560BAQGU7o1EN5JDUQ/company-logo_200_200/company-logo_200_200/0/1673380747522/greenomysaas_logo?e=1749686400&v=beta&t=fDfN06AP3AznwOUjHK9LbV0PYKtLh33PwS2Hbp1if2w"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ExperienceCard
                title={t('experience.qover.title')}
                company="Qover"
                period={t('experience.qover.period')}
                description={t('experience.qover.description')}
                achievements={[t('experience.qover.achievement1'), t('experience.qover.achievement2'), t('experience.qover.achievement3')]}
                logoUrl="https://media.licdn.com/dms/image/v2/D4E0BAQGEsJyigI91Sg/company-logo_100_100/company-logo_100_100/0/1689084960988/qover_logo?e=1749686400&v=beta&t=6WHm6E4N-EmRm7_kj6q_FuzUE4x4t0Cux86UXiKYGQI"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ExperienceCard
                title={t('experience.pixldev.title')}
                company="Pixl Srl"
                period={t('experience.pixldev.period')}
                description={t('experience.pixldev.description')}
                achievements={[t('experience.pixldev.achievement1'), t('experience.pixldev.achievement2'), t('experience.pixldev.achievement3')]}
                logoUrl="https://media.licdn.com/dms/image/v2/D4E0BAQFWnHcZFARs5g/company-logo_100_100/company-logo_100_100/0/1727201326461?e=1749686400&v=beta&t=vphmjRvbOuudR-SQ3x48NALH1MwSOjI_41HoGwcrmJs"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <ExperienceCard
                title={t('experience.emakina.title')}
                company="Emakina"
                period={t('experience.emakina.period')}
                description={t('experience.emakina.description')}
                achievements={[t('experience.emakina.achievement1'), t('experience.emakina.achievement2'), t('experience.emakina.achievement3')]}
                logoUrl="https://media.licdn.com/dms/image/v2/C4E0BAQFLOvNsYTLcbw/company-logo_100_100/company-logo_100_100/0/1658851368707/emakina_logo?e=1749686400&v=beta&t=jEWKx3oU6VG_nbBRHqcwp979ccQK-A5Ddhvj18ZorUg"
              />
            </motion.div>
          </motion.div>
        </Section>

        {/* Education Section */}
        <Section id="education" title={t('education.title')} className="bg-gray-50">
          <motion.div
            className="max-w-2xl mx-auto md:mx-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <EducationCard
                degree={t('education.degree')}
                institution={t('education.institution')}
                logoUrl="https://media.licdn.com/dms/image/v2/C4D0BAQGTSVQ57TLryQ/company-logo_200_200/company-logo_200_200/0/1630543401547/haute_ecole_l_onard_de_vinci_logo?e=1749686400&v=beta&t=krzyk54vyHJqwbsBtZOVQzwMaVhwb2QyIxrqtzg-t5M"
              />
            </motion.div>
          </motion.div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title={t('contact.title')}>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <p className="text-lg mb-6">
                {t('contact.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <EnvelopeIcon className="h-5 w-5 text-primary mr-3" />
                  <Link href="mailto:hamza@pixldev.be" legacyBehavior>
                    <a className="hover:text-primary transition-colors">hamza@pixldev.be</a>
                  </Link>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 text-primary mr-3" />
                  <Link href="tel:+32488203567" legacyBehavior>
                    <a className="hover:text-primary transition-colors">+32 488 20 35 67</a>
                  </Link>
                </div>
                <div className="flex items-center">
                  <GlobeAltIcon className="h-5 w-5 text-primary mr-3" />
                  <div className="space-x-3">
                    <Link href="https://www.pixldev.be" legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">pixldev.be</a>
                    </Link>
                    <span>|</span>
                    <Link href="https://github.com/hamzaPixl" legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
                    </Link>
                    <span>|</span>
                    <Link href="https://www.linkedin.com/in/hamza-mounir-0a7bb6139/" legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <form className="card">
                <h3 className="text-xl font-semibold mb-6">{t('contact.form.title')}</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="btn w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('contact.form.send')}
                  </motion.button>
                </div>
              </form>
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
