import { CSSObject, Theme } from '@emotion/react';

export type ConsumerThemeTypes = Theme & {
  buttons?: (params: { kind: string; size: string }) => CSSObject;
};
