import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage, useScrollPosition, useTheme } from '../hooks';

const UserIcon = () => (
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
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const LayersIcon = () => (
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
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const ZapIcon = () => (
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
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const BriefcaseIcon = () => (
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
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const MailIcon = () => (
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
);

const GlobeIcon = () => (
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
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const SunIcon = () => (
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
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
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
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  section: string;
  onClick: (section: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, section, onClick }) => (
  <button
    onClick={() => onClick(section)}
    title={label}
    className="p-2.5 rounded-xl text-gray-500 dark:text-gray-400 hover:text-accent hover:bg-gray-100/80 dark:hover:bg-white/5 transition-colors cursor-pointer"
  >
    {icon}
  </button>
);

const Header: React.FC = () => {
  const { currentLanguage, languageOptions, changeLanguage } = useLanguage();
  const { scrollToSection } = useScrollPosition();
  const { theme, toggleTheme, mounted } = useTheme();

  const navigate = (section: string) => scrollToSection(section);

  const cycleLanguage = () => {
    const idx = languageOptions.findIndex(l => l.code === currentLanguage.code);
    changeLanguage(languageOptions[(idx + 1) % languageOptions.length].code);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        className="flex items-center gap-0.5 px-2 py-1.5 rounded-2xl bg-white/60 dark:bg-[#111]/60 backdrop-blur-2xl border border-gray-200/40 dark:border-gray-700/30 shadow-lg shadow-black/5 dark:shadow-black/30"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 180, damping: 22 }}
      >
        <NavItem icon={<UserIcon />} label="About" section="about" onClick={navigate} />
        <NavItem icon={<LayersIcon />} label="Projects" section="projects" onClick={navigate} />
        <NavItem icon={<ZapIcon />} label="Skills" section="skills" onClick={navigate} />
        <NavItem
          icon={<BriefcaseIcon />}
          label="Experience"
          section="experience"
          onClick={navigate}
        />
        <NavItem icon={<MailIcon />} label="Contact" section="contact" onClick={navigate} />

        <div className="w-px h-5 bg-gray-200/60 dark:bg-gray-700/40 mx-1" />

        <button
          onClick={cycleLanguage}
          title={currentLanguage.name}
          className="flex items-center gap-1 px-2 py-2 rounded-xl text-gray-500 dark:text-gray-400 hover:text-accent hover:bg-gray-100/80 dark:hover:bg-white/5 transition-colors cursor-pointer"
        >
          <GlobeIcon />
          <span className="text-[10px] font-semibold">{currentLanguage.code.toUpperCase()}</span>
        </button>

        <button
          onClick={toggleTheme}
          title={mounted && theme === 'dark' ? 'Light mode' : 'Dark mode'}
          className="p-2.5 rounded-xl text-gray-500 dark:text-gray-400 hover:text-accent hover:bg-gray-100/80 dark:hover:bg-white/5 transition-colors cursor-pointer"
        >
          {mounted && theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </motion.div>
    </div>
  );
};

export default Header;
