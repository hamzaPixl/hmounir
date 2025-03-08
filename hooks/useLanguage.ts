import { useRouter } from 'next/router';
import { useCallback } from 'react';

export interface LanguageOption {
  code: string;
  name: string;
  flag: string;
}

/**
 * Hook personnalisé pour gérer les fonctionnalités liées à la langue
 * @returns Fonctions et données liées à la langue
 */
export const useLanguage = () => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;

  // Options de langue disponibles
  const languageOptions: LanguageOption[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  ];

  // Langue actuelle
  const currentLanguage = languageOptions.find(lang => lang.code === locale) || languageOptions[0];

  /**
   * Change la langue de l'application
   * @param newLocale Code de la nouvelle langue
   */
  const changeLanguage = useCallback((newLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
  }, [router, pathname, asPath, query]);

  return {
    currentLanguage,
    languageOptions,
    changeLanguage,
    locale,
  };
};

export default useLanguage;
