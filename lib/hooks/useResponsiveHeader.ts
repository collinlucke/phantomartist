import { useState, useEffect } from 'react';

export type ScreenSize = 'small' | 'medium' | 'large';

export const useResponsiveHeader = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>('large');

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 580) {
        setScreenSize('small');
      } else if (width < 1024) {
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return {
    screenSize,
    isSmall: screenSize === 'small',
    isMedium: screenSize === 'medium',
    isLarge: screenSize === 'large',
    showCompactNav: screenSize === 'small',
    showFullNav: screenSize !== 'small'
  };
};
