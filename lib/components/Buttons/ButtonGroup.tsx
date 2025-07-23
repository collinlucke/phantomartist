import React, { ReactElement } from 'react';
import { CSSObject, useTheme } from '@emotion/react';
import { ConsumerThemeTypes } from '../../CustomTypes.types';
import { baseTheme } from '../../styling/baseTheme';

interface ButtonGroupProps {
  children: ReactElement | ReactElement[];
  className?: {
    buttonGroup?: CSSObject;
  };
  direction?: 'horizontal' | 'vertical';
  gap?: 'small' | 'medium' | 'large';
  dataTestId?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className,
  direction = 'horizontal',
  gap = 'medium',
  dataTestId
}) => {
  const consumerTheme = useTheme() as ConsumerThemeTypes;

  return (
    <div
      css={[
        baseTheme.buttonGroup({ direction, gap }),
        consumerTheme?.buttonGroup &&
          consumerTheme.buttonGroup({ direction, gap }),
        className?.buttonGroup
      ]}
      className={`pa-button-group ${direction} ${gap}`}
      data-testid={dataTestId}
    >
      {children}
    </div>
  );
};
