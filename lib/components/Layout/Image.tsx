import { CSSObject } from '@emotion/react';
import React from 'react';
import { baseTheme } from '../../styling/baseTheme';

type ImageTypes = {
  src: string;
  className?: CSSObject;
  propStyles?: CSSObject;
};

export const Image: React.FC<ImageTypes> = ({ src, className }) => {
  return (
    <img src={src} css={[baseTheme.img, className?.img]} className="pa-image" />
  );
};
