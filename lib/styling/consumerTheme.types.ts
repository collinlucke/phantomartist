import { CSSObject, Theme } from '@emotion/react';

export type ConsumerThemeTypes = Theme & {
  button?: (params: { kind: string; size: string }) => CSSObject;
};
