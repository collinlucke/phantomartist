import { MouseEventHandler, ReactElement } from 'react';
import { CSSObject, useTheme } from '@emotion/react';
import { ConsumerThemeTypes } from '../../CustomTypes.types';
import { baseTheme } from '../../styling/baseTheme';

type Button = {
  children: ReactElement | string;
  className?: {
    button?: CSSObject;
  };
  type?: HTMLButtonElement['type'];
  kind?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  iconOnly?: boolean;
  icon?: ReactElement | string;
  dataTestId?: string;

  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FC<Button> = ({
  children,
  className,
  type,
  kind = 'primary',
  size = 'large',
  icon,
  iconOnly,
  dataTestId,
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
        baseTheme.button({ kind, size, iconOnly }),
        consumerTheme?.button && consumerTheme.button({ kind, size, iconOnly }),
        className?.button
      ]}
      className={`pa-button ${kind} ${size}`}
      data-testid={dataTestId}
    >
      {icon ? (
        <>
          {icon}
          {children}
        </>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};
