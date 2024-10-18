import { MouseEventHandler, ReactElement } from 'react';
import { CSSObject, useTheme } from '@emotion/react';
import { ConsumerThemeTypes } from '../../styling/consumerTheme.types';
import { baseTheme } from '../../styling/baseTheme';

type Button = {
  children: ReactElement | string;
  className?: {
    button?: CSSObject;
  };
  type?: HTMLButtonElement['type'];
  kind?: 'primary' | 'secondary' | 'tertiary';
  size?: 'large' | 'medium' | 'small';

  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FC<Button> = ({
  children,
  className,
  type,
  kind = 'primary',
  size = 'large',
  onClick
}) => {
  const consumerTheme = useTheme() as ConsumerThemeTypes;

  const onClickHandler: MouseEventHandler<HTMLButtonElement> = e => {
    onClick?.(e);
  };

  return (
    <button
      type={type}
      onClick={onClickHandler}
      css={[
        baseTheme.button({ kind, size }),
        consumerTheme?.button && consumerTheme.button({ kind, size }),
        className?.button
      ]}
      className={`pa-button ${kind} ${size}`}
    >
      {children}
    </button>
  );
};
