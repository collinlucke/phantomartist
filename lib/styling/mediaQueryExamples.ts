/*
 * Media Query System Usage Examples
 *
 * This file demonstrates how to use the media query system from baseTheme.ts
 * in your Emotion-styled components.
 */

import { css } from '@emotion/react';
import { mediaQueries, createResponsiveStyle } from './baseTheme';

// Example 1: Using individual media queries
export const exampleComponent1 = css`
  padding: 10px;

  ${mediaQueries.minWidth.sm} {
    padding: 20px;
  }

  ${mediaQueries.minWidth.lg} {
    padding: 30px;
  }
`;

// Example 2: Using the responsive helper function
export const exampleComponent2 = createResponsiveStyle({
  base: {
    padding: '10px',
    fontSize: '14px'
  },
  sm: {
    padding: '20px',
    fontSize: '16px'
  },
  lg: {
    padding: '30px',
    fontSize: '18px'
  }
});

// Example 3: Common device queries
export const mobileOnlyStyle = css`
  display: block;

  ${mediaQueries.tablet} {
    display: none;
  }

  ${mediaQueries.desktop} {
    display: none;
  }
`;

// Example 4: Range queries
export const tabletOnlyStyle = css`
  display: none;

  ${mediaQueries.tablet} {
    display: block;
  }
`;

// Example 5: Hover-specific styles
export const interactiveButton = css`
  background-color: blue;
  transition: background-color 0.2s;

  ${mediaQueries.hover} {
    &:hover {
      background-color: darkblue;
    }
  }

  ${mediaQueries.noHover} {
    &:active {
      background-color: darkblue;
    }
  }
`;

// Example 6: Complex responsive layout
export const responsiveGrid = createResponsiveStyle({
  base: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '10px'
  },
  sm: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px'
  },
  md: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px'
  },
  lg: {
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '25px'
  },
  xl: {
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '30px'
  }
});

// Example 7: Using in a React component with Emotion
/*
import styled from '@emotion/styled';
import { mediaQueries, createResponsiveStyle } from './styling/baseTheme';

const ResponsiveContainer = styled.div`
  ${createResponsiveStyle({
    base: {
      padding: '10px',
      backgroundColor: 'lightgray'
    },
    md: {
      padding: '20px',
      backgroundColor: 'lightblue'
    },
    lg: {
      padding: '30px',
      backgroundColor: 'lightgreen'
    }
  })}
`;

const MobileHiddenDiv = styled.div`
  display: block;
  
  ${mediaQueries.mobile} {
    display: none;
  }
`;
*/

// Example 8: Advanced usage with orientation and retina
export const advancedResponsiveStyle = css`
  width: 100%;

  ${mediaQueries.minWidth.md} {
    width: 50%;
  }

  ${mediaQueries.portrait} {
    flex-direction: column;
  }

  ${mediaQueries.landscape} {
    flex-direction: row;
  }

  ${mediaQueries.retina} {
    image-rendering: -webkit-optimize-contrast;
  }
`;
