import { useState, useEffect, useCallback, useRef } from 'react';

export interface ScrollPosition {
  x: number;
  y: number;
}

export interface ScrollInfo {
  position: ScrollPosition;
  isScrolling: boolean;
  isScrollingUp: boolean;
  isScrollingDown: boolean;
  isAtTop: boolean;
  isAtBottom: boolean;
  scrollPercentage: number;
}

/**
 * Hook personnalisé pour suivre la position de défilement
 * @param throttleMs Délai de throttle en millisecondes (par défaut: 100ms)
 * @returns Informations sur la position de défilement
 */
export const useScrollPosition = (throttleMs = 100) => {
  const [scrollInfo, setScrollInfo] = useState<ScrollInfo>({
    position: { x: 0, y: 0 },
    isScrolling: false,
    isScrollingUp: false,
    isScrollingDown: false,
    isAtTop: true,
    isAtBottom: false,
    scrollPercentage: 0,
  });

  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const throttleTimer = useRef<NodeJS.Timeout | null>(null);

  /**
   * Défile vers une section spécifique
   * @param sectionId ID de la section
   * @param options Options de défilement
   */
  const scrollToSection = useCallback(
    (sectionId: string, options: ScrollIntoViewOptions = { behavior: 'smooth' }) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView(options);
        // Mettre à jour l'URL sans recharger la page
        window.history.pushState({}, '', `#${sectionId}`);
      }
    },
    []
  );

  /**
   * Défile vers le haut de la page
   * @param options Options de défilement
   */
  const scrollToTop = useCallback((options: ScrollIntoViewOptions = { behavior: 'smooth' }) => {
    window.scrollTo({
      top: 0,
      left: 0,
      ...options,
    });
  }, []);

  /**
   * Défile vers le bas de la page
   * @param options Options de défilement
   */
  const scrollToBottom = useCallback((options: ScrollIntoViewOptions = { behavior: 'smooth' }) => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      left: 0,
      ...options,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;

      const currentScrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      // Calculer le pourcentage de défilement
      const percentage = Math.min(Math.max(currentScrollY / maxScroll, 0), 1) * 100;

      // Mettre à jour les informations de défilement
      setScrollInfo({
        position: { x: window.scrollX, y: currentScrollY },
        isScrolling: true,
        isScrollingUp: currentScrollY < lastScrollY.current,
        isScrollingDown: currentScrollY > lastScrollY.current,
        isAtTop: currentScrollY <= 0,
        isAtBottom: Math.abs(maxScroll - currentScrollY) < 5,
        scrollPercentage: percentage,
      });

      lastScrollY.current = currentScrollY;

      // Réinitialiser le timeout de défilement
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Définir un nouveau timeout pour détecter quand le défilement s'arrête
      scrollTimeout.current = setTimeout(() => {
        setScrollInfo(prev => ({ ...prev, isScrolling: false }));
      }, 200);
    };

    const throttledHandleScroll = () => {
      if (throttleTimer.current === null) {
        throttleTimer.current = setTimeout(() => {
          handleScroll();
          throttleTimer.current = null;
        }, throttleMs);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', throttledHandleScroll);
      // Initial call to set initial values
      handleScroll();
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', throttledHandleScroll);
      }
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      if (throttleTimer.current) {
        clearTimeout(throttleTimer.current);
      }
    };
  }, [throttleMs]); // Only throttleMs is needed in deps array

  return {
    ...scrollInfo,
    scrollToSection,
    scrollToTop,
    scrollToBottom,
  };
};

export default useScrollPosition;
