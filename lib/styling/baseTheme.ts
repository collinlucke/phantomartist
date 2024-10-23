import { CSSObject } from '@emotion/react';

export const baseColors = {
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
      fontWeight: '500',
      borderRadius: '5px',
      cursor: 'pointer',
      padding: !iconOnly
        ? (size === 'large' && kind === 'primary' && '10px 40px') ||
          (size === 'large' && kind === 'secondary' && '8px 34px') ||
          (size === 'large' && kind === 'tertiary' && '8px 34px') ||
          (size === 'medium' && kind === 'primary' && '8px 15px') ||
          (size === 'small' && kind === 'primary' && '5px 10px') ||
          undefined
        : (size === 'large' && kind === 'primary' && '5px 5px') ||
          (size === 'large' && kind === 'ghost' && '0') ||
          undefined,
      border:
        (kind === 'primary' && 'none') ||
        // (kind === 'secondary' &&
        //   `3px solid color-mix(in srgb, ${baseColors.primary} 50%, white)`) ||
        (kind === 'secondary' && `2px solid ${baseColors.primaryDark}`) ||
        (kind === 'tertiary' && `3px solid ${baseColors.primaryDark}`) ||
        (kind === 'ghost' && 'none') ||
        // (kind === 'tertiary' && `1px solid ${baseColors.tertiary}`) ||
        undefined,

      color:
        (kind === 'primary' && 'white') ||
        (kind === 'tertiary' && 'black') ||
        (kind === 'secondary' && baseColors.primary) ||
        'inherit',
      backgroundColor:
        (kind === 'primary' && baseColors.secondary) ||
        (kind === 'secondary' && baseColors.tertiary) ||
        (kind === 'ghost' && 'transparent') ||
        // (kind === 'secondary' &&
        //   `color-mix(in srgb, ${baseColors.primary} 75%, black)`) ||
        undefined,
      '&:hover': {
        boxShadow: kind === 'ghost' ? '' : `0 0 7px black`
      }
    };
  },
  buttonGroup: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'end'
  },
  img: () => ({
    border: `1px solid ${baseColors.primary}`,
    borderRadius: '5px'
  }),
  modal: {
    position: 'absolute' as 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: baseColors.secondary,
    flexDirection: 'column' as 'column'
  },
  modalContentWrapper: {
    backgroundColor: baseColors.tertiaryLight,
    padding: '20px',
    boxShadow: `0 0 4px black`,
    display: 'flex',
    flexDirection: 'column' as 'column'
  },
  modalHeading: {
    alignSelf: 'end'
  },
  modalCloseButton: {
    cursor: 'pointer'
  },
  modalContent: {}
};

export const testTheme = {
  h2: {
    color: baseColors.primary
  }
};
