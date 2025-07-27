import { CSSObject, Theme } from '@emotion/react';

export type ConsumerThemeTypes = Theme & {
  button?: (params: {
    kind?: string;
    size?: string;
    iconOnly?: boolean;
  }) => CSSObject;
  buttonGroup?: (params: {
    direction?: 'horizontal' | 'vertical';
    gap?: 'small' | 'medium' | 'large';
  }) => CSSObject;
};
