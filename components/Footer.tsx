import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <motion.footer
      className="py-8 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">© {new Date().getFullYear()} Hamza Mounir. {t('footer.rights')}</p>
          </div>
          <div className="flex space-x-6">
            <Link href="mailto:hamza@pixldev.be" legacyBehavior>
              <motion.a
                className="text-gray-600 hover:text-primary"
                whileHover={{ scale: 1.05, color: '#5DD170' }}
              >
                hamza@pixldev.be
              </motion.a>
            </Link>
            <Link href="https://www.pixldev.be" legacyBehavior>
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary"
                whileHover={{ scale: 1.05, color: '#5DD170' }}
              >
                pixldev.be
              </motion.a>
            </Link>
            <Link href="https://github.com/hamzaPixl" legacyBehavior>
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary"
                whileHover={{ scale: 1.05, color: '#5DD170' }}
              >
                GitHub
              </motion.a>
            </Link>
            <Link href="https://www.linkedin.com/in/hamza-mounir-0a7bb6139/" legacyBehavior>
              <motion.a
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary"
                whileHover={{ scale: 1.05, color: '#5DD170' }}
              >
                LinkedIn
              </motion.a>
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
