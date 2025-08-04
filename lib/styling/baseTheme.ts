import { CSSObject } from '@emotion/react';

export const screenSizes = {
  xs: '360px', // Adjusted for a more common mobile breakpoint
  sm: '480px',
  md: '640px',
  lg: '768px',
  xl: '1024px',
  '2xl': '1280px',
  '3xl': '1536px'
};

// Media query utilities
export const mediaQueries = {
  // Min-width media queries (mobile-first approach)
  minWidth: {
    xs: `@media (min-width: ${screenSizes.xs})`,
    sm: `@media (min-width: ${screenSizes.sm})`,
    md: `@media (min-width: ${screenSizes.md})`,
    lg: `@media (min-width: ${screenSizes.lg})`,
    xl: `@media (min-width: ${screenSizes.xl})`,
    '2xl': `@media (min-width: ${screenSizes['2xl']})`
  },

  // Max-width media queries (desktop-first approach)
  maxWidth: {
    xs: `@media (max-width: ${parseInt(screenSizes.xs) - 1}px)`,
    sm: `@media (max-width: ${parseInt(screenSizes.sm) - 1}px)`,
    md: `@media (max-width: ${parseInt(screenSizes.md) - 1}px)`,
    lg: `@media (max-width: ${parseInt(screenSizes.lg) - 1}px)`,
    xl: `@media (max-width: ${parseInt(screenSizes.xl) - 1}px)`,
    '2xl': `@media (max-width: ${parseInt(screenSizes['2xl']) - 1}px)`
  },

  // Range media queries (between two breakpoints)
  between: {
    xsToSm: `@media (min-width: ${screenSizes.xs}) and (max-width: ${
      parseInt(screenSizes.sm) - 1
    }px)`,
    smToMd: `@media (min-width: ${screenSizes.sm}) and (max-width: ${
      parseInt(screenSizes.md) - 1
    }px)`,
    mdToLg: `@media (min-width: ${screenSizes.md}) and (max-width: ${
      parseInt(screenSizes.lg) - 1
    }px)`,
    lgToXl: `@media (min-width: ${screenSizes.lg}) and (max-width: ${
      parseInt(screenSizes.xl) - 1
    }px)`,
    xlTo2xl: `@media (min-width: ${screenSizes.xl}) and (max-width: ${
      parseInt(screenSizes['2xl']) - 1
    }px)`
  },

  // Common device queries
  mobile: `@media (max-width: ${parseInt(screenSizes.md) - 1}px)`,
  tablet: `@media (min-width: ${screenSizes.md}) and (max-width: ${
    parseInt(screenSizes.lg) - 1
  }px)`,
  desktop: `@media (min-width: ${screenSizes.lg})`,

  // Orientation queries
  portrait: '@media (orientation: portrait)',
  landscape: '@media (orientation: landscape)',

  // High DPI queries
  retina:
    '@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',

  // Hover capability
  hover: '@media (hover: hover)',
  noHover: '@media (hover: none)'
};

// Helper function for creating responsive styles
export const createResponsiveStyle = (styles: {
  base?: CSSObject;
  xs?: CSSObject;
  sm?: CSSObject;
  md?: CSSObject;
  lg?: CSSObject;
  xl?: CSSObject;
  '2xl'?: CSSObject;
}): CSSObject => {
  const responsiveStyle: CSSObject = {};

  // Base styles (mobile-first)
  if (styles.base) {
    Object.assign(responsiveStyle, styles.base);
  }

  // Apply breakpoint-specific styles
  if (styles.xs) {
    responsiveStyle[mediaQueries.minWidth.xs] = styles.xs;
  }
  if (styles.sm) {
    responsiveStyle[mediaQueries.minWidth.sm] = styles.sm;
  }
  if (styles.md) {
    responsiveStyle[mediaQueries.minWidth.md] = styles.md;
  }
  if (styles.lg) {
    responsiveStyle[mediaQueries.minWidth.lg] = styles.lg;
  }
  if (styles.xl) {
    responsiveStyle[mediaQueries.minWidth.xl] = styles.xl;
  }
  if (styles['2xl']) {
    responsiveStyle[mediaQueries.minWidth['2xl']] = styles['2xl'];
  }

  return responsiveStyle;
};

export const baseColors = {
  primary: {
    50: '#F0F2F5', // Very light blue-gray
    100: '#D9DEE6', // Light blue-gray
    200: '#B8C3D1', // Medium-light blue-gray
    300: '#8A9BAE', // Medium blue-gray
    400: '#4A5F7A', // Dark blue-gray
    500: '#0B1828', // Base primary
    600: '#081320', // Darker primary
    700: '#060E18', // Very dark primary
    800: '#04090F', // Almost black
    900: '#020407' // Nearly black
  },
  secondary: {
    50: '#E6F7F6', // Very light teal
    100: '#B3E8E5', // Light teal
    200: '#80D9D4', // Medium-light teal
    300: '#4DCAC3', // Medium teal
    400: '#2AA39B', // Dark teal
    500: '#146B68', // Base secondary (darker for better contrast)
    600: '#125A57', // Darker secondary
    700: '#0F4A47', // Very dark teal
    800: '#0C3835', // Almost black teal
    900: '#081F1C' // Nearly black teal
  },
  tertiary: {
    50: '#F7F4F0', // Very light beige
    100: '#EEDECC', // Light beige
    200: '#E5C8A8', // Medium-light beige
    300: '#DCB184', // Medium beige
    400: '#D19B60', // Dark beige
    500: '#BFA081', // Base tertiary
    600: '#A68965', // Darker tertiary
    700: '#7D6748', // Very dark beige
    800: '#54442C', // Almost brown
    900: '#2B2216' // Nearly black brown
  },
  accent: {
    50: '#FEE6E6', // Very light red
    100: '#FBB3B3', // Light red
    200: '#F88080', // Medium-light red
    300: '#F54D4D', // Medium red
    400: '#F21A1A', // Bright red
    500: '#9F0001', // Base accent
    600: '#800001', // Darker accent
    700: '#600001', // Very dark red
    800: '#400000', // Almost black red
    900: '#200000' // Nearly black red
  }
};

// Additional bright and vibrant colors
export const baseVibrantColors = {
  primary: {
    300: '#8AB6FF', // Light vibrant blue
    500: '#4F86F7', // Base vibrant blue
    700: '#255AFF' // Dark vibrant blue
  },
  secondary: {
    300: '#75DAC7', // Light vibrant teal
    500: '#1ABC9C', // Base vibrant teal
    700: '#138F6E' // Dark vibrant teal
  },
  tertiary: {
    300: '#F7C873', // Light vibrant orange
    500: '#F39C12', // Base vibrant orange
    700: '#C9780E' // Dark vibrant orange
  },
  accent: {
    300: '#F48A6F', // Light vibrant red
    500: '#E74C3C', // Base vibrant red
    700: '#C0392B' // Dark vibrant red
  }
};

export const baseTypography = {
  // Predefined text styles

  // Headings
  h1: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '36px',
    fontWeight: 300, // normal
    lineHeight: 1.25,
    letterSpacing: '-0.025em',
    color: baseColors.tertiary[50]
  },
  h2: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '30px',
    fontWeight: 600, // semibold
    lineHeight: 1.25,
    letterSpacing: '-0.025em'
  },
  h3: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '24px',
    fontWeight: 600, // semibold
    lineHeight: 1.25,
    letterSpacing: 'normal'
  },
  h4: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '20px',
    fontWeight: 600, // semibold
    lineHeight: 1.25,
    letterSpacing: 'normal'
  },
  h5: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '18px',
    fontWeight: 600, // semibold
    lineHeight: 1.25,
    letterSpacing: 'normal'
  },
  h6: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '16px',
    fontWeight: 600, // semibold
    lineHeight: 1.25,
    letterSpacing: 'normal'
  },
  a: {
    textDecoration: 'none',
    color: baseColors.primary
  },

  // Body text
  bodyLarge: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 1.625,
    letterSpacing: 'normal'
  },
  body: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: 'normal'
  },
  bodySmall: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: 'normal'
  }
};

export const baseTheme = {
  button: ({
    kind,
    size,
    iconOnly
  }: {
    kind?: string;
    size?: string;
    iconOnly?: boolean;
  }): CSSObject => {
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: size === 'small' ? 1.1 : 1.2, // Match input field line height for small size
      fontSize:
        (size === 'small' && '0.875rem') ||
        (kind === 'ghost' || kind === 'ghostOnDark' ? '18px' : '1rem'),
      borderRadius: '5px',
      cursor: 'pointer',
      gap: '10px',
      padding: !iconOnly
        ? (size === 'large' && kind === 'primary' && '10px 40px') ||
          (size === 'large' && kind === 'secondary' && '8px 34px') ||
          (size === 'large' && kind === 'tertiary' && '8px 34px') ||
          (size === 'large' && kind === 'ghost' && '10px 40px') ||
          (size === 'large' && kind === 'ghostOnDark' && '10px 40px') ||
          (size === 'medium' && kind === 'primary' && '8px 15px') ||
          (size === 'medium' && kind === 'secondary' && '8px 15px') ||
          (size === 'medium' && kind === 'ghost' && '8px 15px') ||
          (size === 'medium' && kind === 'ghostOnDark' && '8px 15px') ||
          (size === 'small' && kind === 'primary' && '6px 15px') ||
          (size === 'small' && kind === 'secondary' && '6px 15px') ||
          (size === 'small' && kind === 'ghost' && '6px 15px') ||
          (size === 'small' && kind === 'ghostOnDark' && '6px 15px') ||
          undefined
        : (kind === 'primary' && '8px') ||
          (kind === 'secondary' && '8px') ||
          (kind === 'ghost' && '8px') ||
          (kind === 'ghostOnDark' && '8px') ||
          undefined,
      border:
        (kind === 'primary' && 'none') ||
        (kind === 'secondary' && 'none') ||
        (kind === 'tertiary' && `3px solid ${baseColors.primary[600]}`) ||
        (kind === 'ghost' && 'none') ||
        (kind === 'ghostOnDark' && 'none') ||
        undefined,
      color:
        (kind === 'primary' && 'white') ||
        (kind === 'tertiary' && 'black') ||
        (kind === 'secondary' && baseColors.primary[500]) ||
        (kind === 'ghost' && 'inherit') ||
        (kind === 'ghostOnDark' && baseColors.tertiary[50]) ||
        'inherit',
      backgroundColor:
        (kind === 'primary' && baseColors.primary[500]) ||
        (kind === 'secondary' && baseColors.tertiary[500]) ||
        (kind === 'ghost' && 'transparent') ||
        (kind === 'ghostOnDark' && 'transparent') ||
        (kind === 'secondary' &&
          `color-mix(in srgb, ${baseColors.primary[500]} 75%, black)`) ||
        undefined,
      '&:hover': {
        ...(iconOnly
          ? {
              filter: `drop-shadow(0 0 1px ${baseColors.primary[400]})`
            }
          : { boxShadow: `0 0 3px black` })
      },
      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
        pointerEvents: 'none'
      }
    };
  },
  buttonGroup: ({
    direction = 'horizontal',
    gap = 'medium'
  }: {
    direction?: 'horizontal' | 'vertical';
    gap?: 'small' | 'medium' | 'large';
  } = {}): CSSObject => {
    const gapSize =
      (gap === 'small' && '10px') ||
      (gap === 'medium' && '20px') ||
      (gap === 'large' && '30px') ||
      '20px';

    return {
      display: 'flex',
      flexDirection: direction === 'vertical' ? 'column' : 'row',
      gap: gapSize,
      alignItems: 'center',
      justifyContent: 'flex-start'
    };
  },
  img: () => ({
    border: `1px solid ${baseColors.primary[500]}`,
    borderRadius: '5px'
  }),
  modal: {
    position: 'absolute' as const,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${baseColors.primary[100]}`,
    flexDirection: 'column' as const
  },
  modalContentWrapper: {
    backgroundColor: baseColors.tertiary[100],
    padding: '20px',
    boxShadow: `0 0 4px black`,
    display: 'flex',
    flexDirection: 'column' as const,
    width: '400px'
  },
  modalHeading: {
    alignSelf: 'end'
  },
  modalCloseButton: {
    cursor: 'pointer'
  },
  modalContent: {} as Record<string, unknown>
};
