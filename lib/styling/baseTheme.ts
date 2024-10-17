export const baseTheme = {
  h2: {
    color: () => baseTheme.colors.primary
  },
  colors: {
    primary: '#02000d',
    primaryLight: 'color-mix(in srgb, #02000d, white)',
    primaryDark: 'color-mix(in srgb, #02000d, black)',
    secondary: '#07203f',
    secondaryLight: 'color-mix(in srgb, #07203f, white)',
    secondaryDark: 'color-mix(in srgb, #07203f, black)',
    tertiary: '#f1d2b6',
    tertiaryLight: '#f8e9db',
    tertiaryDark: '#79695b',
    accentLight: '#D9AA90',
    accentDark: '#A65e46'
  },
  buttons: ({ kind, size }: { kind: string; size: string }) => {
    return {
      fontWeight: '500',
      borderRadius: '5px',
      padding:
        (size === 'large' && kind === 'primary' && '10px 40px') ||
        (size === 'large' && kind === 'secondary' && '8px 34px') ||
        (size === 'large' && kind === 'tertiary' && '8px 34px') ||
        (size === 'medium' && kind === 'primary' && '8px 15px') ||
        (size === 'small' && kind === 'primary' && '5px 10px') ||
        undefined,
      border:
        (kind === 'primary' && 'none') ||
        // (kind === 'secondary' &&
        //   `3px solid color-mix(in srgb, ${baseTheme.colors.primary} 50%, white)`) ||
        (kind === 'secondary' && `2px solid ${baseTheme.colors.primaryDark}`) ||
        (kind === 'tertiary' && `3px solid ${baseTheme.colors.primaryDark}`) ||
        // (kind === 'tertiary' && `1px solid ${baseTheme.colors.tertiary}`) ||
        undefined,
      color:
        (kind === 'primary' && 'white') ||
        (kind === 'tertiary' && 'black') ||
        (kind === 'secondary' && baseTheme.colors.primary) ||
        'inherit',
      backgroundColor:
        (kind === 'primary' && baseTheme.colors.secondary) ||
        (kind === 'secondary' && baseTheme.colors.tertiary) ||
        // (kind === 'secondary' &&
        //   `color-mix(in srgb, ${baseTheme.colors.primary} 75%, black)`) ||
        undefined,
      '&:hover': {
        boxShadow: `0 0 7px black`
      }
    };
  },
  img: () => ({
    border: `1px solid ${baseTheme.colors.primary}`,
    borderRadius: '5px'
  }),
  buttonGroup: {
    display: 'flex',
    gap: '20px'
  }
};

export const testTheme = {
  h2: {
    color: baseTheme.colors.primary
  }
};
