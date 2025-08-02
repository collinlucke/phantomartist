# Media Query System

This document explains how to use the responsive media query system in phantomartist.

## Overview

The media query system provides a consistent, easy-to-use set of breakpoints and utilities for creating responsive designs using Emotion CSS-in-JS.

## Breakpoints

```typescript
export const screenSizes = {
  xs: '480px', // Extra small devices (phones)
  sm: '640px', // Small devices (large phones)
  md: '768px', // Medium devices (tablets)
  lg: '1024px', // Large devices (desktops)
  xl: '1280px', // Extra large devices (large desktops)
  '2xl': '1536px' // 2X large devices (larger desktops)
};
```

## Media Query Types

### 1. Min-Width Queries (Mobile-First)

Use these for progressive enhancement from small to large screens:

```typescript
import { mediaQueries } from './styling/baseTheme';

const component = css`
  padding: 10px;

  ${mediaQueries.minWidth.sm} {
    padding: 20px; // Apply from 640px and up
  }

  ${mediaQueries.minWidth.lg} {
    padding: 30px; // Apply from 1024px and up
  }
`;
```

### 2. Max-Width Queries (Desktop-First)

Use these for graceful degradation from large to small screens:

```typescript
const component = css`
  padding: 30px;

  ${mediaQueries.maxWidth.lg} {
    padding: 20px; // Apply up to 1023px
  }

  ${mediaQueries.maxWidth.sm} {
    padding: 10px; // Apply up to 639px
  }
`;
```

### 3. Range Queries

Target specific screen size ranges:

```typescript
const component = css`
  ${mediaQueries.between.mdToLg} {
    // Only apply between tablet and desktop sizes
    display: flex;
  }
`;
```

### 4. Device-Specific Queries

Convenient shortcuts for common device categories:

```typescript
const component = css`
  ${mediaQueries.mobile} {
    // Phones and small tablets (up to 767px)
  }

  ${mediaQueries.tablet} {
    // Tablets (768px to 1023px)
  }

  ${mediaQueries.desktop} {
    // Desktops and larger (1024px+)
  }
`;
```

### 5. Special Queries

```typescript
const component = css`
  ${mediaQueries.portrait} {
    // Portrait orientation
  }

  ${mediaQueries.landscape} {
    // Landscape orientation
  }

  ${mediaQueries.retina} {
    // High DPI displays
  }

  ${mediaQueries.hover} {
    // Devices that support hover
    &:hover {
      background-color: blue;
    }
  }

  ${mediaQueries.noHover} {
    // Touch devices
    &:active {
      background-color: blue;
    }
  }
`;
```

## Helper Function: createResponsiveStyle

For complex responsive designs, use the `createResponsiveStyle` helper:

```typescript
import { createResponsiveStyle } from './styling/baseTheme';

const responsiveComponent = createResponsiveStyle({
  base: {
    padding: '10px',
    fontSize: '14px',
    display: 'block'
  },
  sm: {
    padding: '15px',
    fontSize: '16px'
  },
  md: {
    padding: '20px',
    fontSize: '18px',
    display: 'flex'
  },
  lg: {
    padding: '25px',
    fontSize: '20px'
  },
  xl: {
    padding: '30px',
    fontSize: '22px'
  }
});
```

## Usage in React Components

### With styled-components syntax:

```typescript
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

const MobileHidden = styled.div`
  display: block;

  ${mediaQueries.mobile} {
    display: none;
  }
`;
```

### With css prop:

```typescript
import { css } from '@emotion/react';
import { mediaQueries } from './styling/baseTheme';

function MyComponent() {
  return (
    <div
      css={css`
        padding: 10px;

        ${mediaQueries.minWidth.md} {
          padding: 20px;
        }

        ${mediaQueries.minWidth.lg} {
          padding: 30px;
        }
      `}
    >
      Content
    </div>
  );
}
```

## Best Practices

1. **Use Mobile-First**: Start with mobile styles and use `minWidth` queries to enhance for larger screens
2. **Be Consistent**: Use the predefined breakpoints rather than arbitrary values
3. **Consider Touch**: Use `hover` and `noHover` queries for interactive elements
4. **Test on Real Devices**: Breakpoints are guidelines - always test on actual devices
5. **Performance**: Use the `createResponsiveStyle` helper for complex responsive objects to improve readability

## Available Exports

```typescript
import {
  screenSizes,
  mediaQueries,
  createResponsiveStyle
} from './styling/baseTheme';
```

## Examples

See `mediaQueryExamples.ts` for comprehensive usage examples and patterns.
