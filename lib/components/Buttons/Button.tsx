import { MouseEventHandler, ReactElement } from 'react';
import { CSSObject, useTheme } from '@emotion/react';
import { ConsumerThemeTypes } from '../../CustomTypes.types';
import { baseTheme, mediaQueries } from '../../styling/baseTheme';

interface ButtonProps {
  children?: ReactElement | string;
  className?: {
    button?: CSSObject;
  };
  type?: HTMLButtonElement['type'];
  kind?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'ghostOnDark';
  size?: 'small' | 'medium' | 'large';
  iconOnly?: boolean;
  icon?: ReactElement | string;
  dataTestId?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  disabled?: boolean;

  onClick?: MouseEventHandler<HTMLButtonElement>;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type,
  kind = 'primary',
  size = 'large',
  icon,
  iconOnly,
  dataTestId,
  ariaLabel,
  ariaDescribedBy,
  disabled = false,
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
      disabled={disabled}
      css={[
        baseTheme.button({ kind, size, iconOnly }),
        consumerTheme?.button && consumerTheme.button({ kind, size, iconOnly }),
        className?.button
      ]}
      className={`pa-button ${kind} ${size}`}
      data-testid={dataTestId}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
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
