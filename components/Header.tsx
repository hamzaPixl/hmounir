import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useLanguage, useTranslate, useScrollPosition } from '../hooks';

const Header: React.FC = () => {
  const { t } = useTranslate();
  const { currentLanguage, languageOptions, changeLanguage } = useLanguage();
  const { scrollToSection, isAtTop } = useScrollPosition();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <motion.header
      className={`py-6 border-b sticky top-0 z-10 transition-all duration-300 ${
        isAtTop ? 'bg-white border-transparent' : 'bg-white/95 backdrop-blur-sm border-gray-100 shadow-sm'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <motion.a
            className="text-2xl font-bold cursor-pointer"
            onClick={(e) => handleNavClick(e, 'top')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hamza Mounir
          </motion.a>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" legacyBehavior>
            <motion.a
              className="nav-link"
              onClick={(e) => handleNavClick(e, 'about')}
              whileHover={{ scale: 1.1, color: '#5DD170' }}
              whileTap={{ scale: 0.95 }}
            >
              {t('header.about')}
            </motion.a>
          </Link>
          <Link href="#skills" legacyBehavior>
            <motion.a
              className="nav-link"
              onClick={(e) => handleNavClick(e, 'skills')}
              whileHover={{ scale: 1.1, color: '#5DD170' }}
              whileTap={{ scale: 0.95 }}
            >
              {t('header.skills')}
            </motion.a>
          </Link>
          <Link href="#experience" legacyBehavior>
            <motion.a
              className="nav-link"
              onClick={(e) => handleNavClick(e, 'experience')}
              whileHover={{ scale: 1.1, color: '#5DD170' }}
              whileTap={{ scale: 0.95 }}
            >
              {t('header.experience')}
            </motion.a>
          </Link>
          <Link href="#education" legacyBehavior>
            <motion.a
              className="nav-link"
              onClick={(e) => handleNavClick(e, 'education')}
              whileHover={{ scale: 1.1, color: '#5DD170' }}
              whileTap={{ scale: 0.95 }}
            >
              {t('header.education')}
            </motion.a>
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <motion.button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center space-x-1 px-3 py-2 rounded-md border border-gray-200 hover:border-primary cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl mr-1">{currentLanguage.flag}</span>
              <span>{currentLanguage.code.toUpperCase()}</span>
              <ChevronDownIcon className="h-4 w-4 ml-1" />
            </motion.button>

            {isLangMenuOpen && (
              <motion.div
                className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-20"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="py-1">
                  {languageOptions.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`flex items-center w-full px-4 py-2 text-sm cursor-pointer ${
                        currentLanguage.code === lang.code ? 'bg-gray-100 text-primary' : 'text-gray-700'
                      } hover:bg-gray-100`}
                    >
                      <span className="text-xl mr-2">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <motion.a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-dark text-white hover:bg-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('header.downloadCV')}
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
