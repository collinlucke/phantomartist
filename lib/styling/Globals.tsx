import { Global, css } from '@emotion/react';
import { baseTypography } from './baseTheme';

export const Globals = () => (
  <Global
    styles={css`
      @import url('./styling/normalizer.css');
      h1 {
        ${css(baseTypography.h1)}
      }
      h2 {
        ${css(baseTypography.h2)}
      }
      h3 {
        ${css(baseTypography.h3)}
      }
      h4 {
        ${css(baseTypography.h4)}
      }
      h5 {
        ${css(baseTypography.h5)}
      }
      h6 {
        ${css(baseTypography.h6)}
      }
      a {
        ${css(baseTypography.a)}
      p {
        ${css(baseTypography.body)}
      }
    `}
  />
);
