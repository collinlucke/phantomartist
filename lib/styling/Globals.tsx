/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import { testTheme } from './baseTheme';

const PhantomGlobals = () => (
  <Global
    styles={[
      css`
        @import url('./styling/normalizer.css');
      `,
      testTheme
    ]}
  />
);

export default PhantomGlobals;
