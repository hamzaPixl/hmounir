import { useTranslation as useNextTranslation } from 'next-i18next';
import { useCallback } from 'react';

type TranslationOptions = Record<string, string | number | boolean | null | undefined>;

/**
 * Hook personnalisé pour gérer les traductions
 * @param namespace Namespace de traduction (par défaut: 'common')
 * @returns Fonctions et données liées aux traductions
 */
export const useTranslate = (namespace = 'common') => {
  const { t, i18n } = useNextTranslation(namespace);

  /**
   * Traduit une clé avec interpolation de variables
   * @param key Clé de traduction
   * @param options Options d'interpolation
   * @returns Texte traduit
   */
  const translate = useCallback(
    (key: string, options?: TranslationOptions) => {
      return t(key, options);
    },
    [t]
  );

  /**
   * Traduit une clé et retourne un tableau d'objets
   * @param key Clé de traduction
   * @returns Tableau d'objets traduits
   */
  const translateArray = useCallback(
    <T>(key: string): T[] => {
      return t(key, { returnObjects: true }) as T[];
    },
    [t]
  );

  /**
   * Vérifie si une clé de traduction existe
   * @param key Clé de traduction
   * @returns Vrai si la clé existe
   */
  const hasTranslation = useCallback(
    (key: string): boolean => {
      return i18n.exists(key);
    },
    [i18n]
  );

  return {
    t: translate,
    translateArray,
    hasTranslation,
    i18n,
  };
};

export default useTranslate;
