import { MouseEventHandler, ReactElement } from 'react';
import { colors } from '../../styling/baseTheme';
import { CSSObject } from '@emotion/react';

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
  const onClickHandler: MouseEventHandler<HTMLButtonElement> = e => {
    onClick?.(e);
  };
  return (
    <button
      type={type}
      onClick={onClickHandler}
      css={[baseStyles.button(kind, size), className && className.button]}
      className={`pa-button ${kind} ${size}`}
    >
      {children}
    </button>
  );
};

const baseStyles = {
  button: (kind: string, size: string) => ({
    fontWeight: '500',
    borderRadius: '5px',
    marginLeft: '10px',
    padding:
      (size === 'large' && kind === 'primary' && '10px 40px') ||
      (size === 'large' && kind === 'secondary' && '8px 34px') ||
      (size === 'large' && kind === 'tertiary' && '8px 34px') ||
      // To Do: Add other sizes and kinds
      undefined,
    border:
      (kind === 'primary' && 'none') ||
      (kind === 'secondary' &&
        `3px solid color-mix(in srgb, ${colors.primary} 50%, white)`) ||
      (kind === 'tertiary' && `1px solid ${colors.tertiary}`) ||
      undefined,
    color:
      (kind === 'primary' && 'black') ||
      (kind === 'tertiary' && 'black') ||
      (kind === 'secondary' && 'white') ||
      'inherit',
    backgroundColor:
      (kind === 'primary' &&
        `color-mix(in srgb, ${colors.secondary} 85%, white)`) ||
      (kind === 'secondary' &&
        `color-mix(in srgb, ${colors.primary} 75%, black)`) ||
      undefined,
    '&:hover': {
      boxShadow: `0 0 3px black`
    }
  })
};
