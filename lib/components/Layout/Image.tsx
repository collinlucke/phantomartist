import { CSSObject } from '@emotion/react';
import React, { useState } from 'react';
import { baseTheme } from '../../styling/baseTheme';

type ImageTypes = {
  src: string;
  className?: CSSObject;
  propStyles?: CSSObject;
};

export const Image: React.FC<ImageTypes> = ({ src, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  return (
    <img
      src={src}
      css={[baseTheme.img, className?.img]}
      className="pa-image"
      onLoad={handleImageLoad}
      style={{ display: isLoaded ? 'block' : 'none' }}
    />
  );
};
