import { CSSObject } from '@emotion/react';

export const baseColors = {
  primary: '#02000d',
  secondary: '#07203f',
  tertiary: '#f1d2b6',
  accentLight: '#D9AA90',
  accentDark: '#A65e46'
};

export const shadesAndTints = {
  primaryLight: `color-mix(in srgb, ${baseColors.primary}, white)`,
  primaryDark: `color-mix(in srgb, ${baseColors.primary}, color)`,
  secondaryLight: `color-mix(in srgb, ${baseColors.secondary}, white)`,
  secondaryDark: `color-mix(in srgb, ${baseColors.secondary}, black)`,
  tertiaryLight: `color-mix(in srgb, ${baseColors.tertiary}, white)`,
  tertiaryDark: `color-mix(in srgb, ${baseColors.tertiary}, black)`
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
      alignItems: 'end',
      fontWeight: '500',
      borderRadius: '5px',
      cursor: 'pointer',
      gap: '10px',
      width: 'fit-content',
      padding: !iconOnly
        ? (size === 'large' && kind === 'primary' && '10px 40px') ||
          (size === 'large' && kind === 'secondary' && '8px 34px') ||
          (size === 'large' && kind === 'tertiary' && '8px 34px') ||
          (size === 'medium' && kind === 'primary' && '8px 15px') ||
          (size === 'small' && kind === 'primary' && '5px 10px') ||
          undefined
        : (kind === 'primary' && '8px') ||
          (size === 'large' && kind === 'ghost' && '0') ||
          undefined,
      border:
        (kind === 'primary' && 'none') ||
        // (kind === 'secondary' &&
        //   `3px solid color-mix(in srgb, ${baseColors.primary} 50%, white)`) ||
        (kind === 'secondary' && `2px solid ${shadesAndTints.primaryDark}`) ||
        (kind === 'tertiary' && `3px solid ${shadesAndTints.primaryDark}`) ||
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
        boxShadow: kind === 'ghost' ? '' : `0 0 7px black`,
        textShadow: kind === 'ghost' ? `0 0 2px rgba(0,0,0,.75)` : ''
      }
    };
  },
  buttonGroup: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'end',
    marginTop: '20px'
  },
  img: () => ({
    border: `1px solid ${baseColors.primary}`,
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
    // backgroundColor: baseColors.secondary,
    backgroundColor: `${shadesAndTints.primaryLight}`,
    flexDirection: 'column' as const
  },
  modalContentWrapper: {
    backgroundColor: shadesAndTints.tertiaryLight,
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
  modalContent: {}
};

export const testTheme = {
  h2: {
    color: baseColors.primary
  }
};
