import { MouseEventHandler, ReactElement } from 'react';
import type { StyleXStyles } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';
import { colors } from '../../styling/tokens.stylex';

type Button = {
  children: ReactElement | string;
  className?: {
    button?: StyleXStyles;
  };
  type?: HTMLButtonElement['type'];
  kind?: 'primary' | 'secondary';

  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FC<Button> = ({
  children,
  className,
  type,
  kind = 'primary',
  onClick
}) => {
  const onClickHandler: MouseEventHandler<HTMLButtonElement> = e => {
    onClick?.(e);
  };
  return (
    <button
      type={type}
      onClick={onClickHandler}
      {...stylex.props(baseStyles.button(kind), className && className.button)}
    >
      {children}
    </button>
  );
};

const baseStyles = stylex.create({
  button: kind => ({
    padding:
      (kind === 'primary' && '10px 40px') ||
      (kind === 'secondary' && '8px 38px'),
    border:
      (kind === 'primary' && 'none') ||
      (kind === 'secondary' && `1px solid ${colors.primary}`),
    borderRadius: '5px',
    color: (kind === 'primary' && 'black') || (kind === 'secondary' && 'white'),
    backgroundColor:
      (kind === 'primary' &&
        `color-mix(in srgb, ${colors.secondary} 85%, white)`) ||
      (kind === 'secondary' &&
        `color-mix(in srgb, ${colors.primary} 80%, white)`),
    fontWeight: '500',
    marginRight: '10px',
    boxShadow: {
      default: 'inherit',
      ':hover': `0 0 3px black`
    }
  })
});
