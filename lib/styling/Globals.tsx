/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import { testTheme } from './baseTheme';

export default () => (
  <Global
    styles={[
      css`
        @import url('./styling/normalizer.css');
      `,
      testTheme
    ]}
  />
);
