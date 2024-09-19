import { MouseEventHandler, ReactElement } from 'react';
import type { StyleXStyles } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';
import { colors } from '../../styling/tokens.stylex';

type Button = {
  children: ReactElement | string;
  className?: {
    button?: StyleXStyles;
  };
  type: HTMLButtonElement['type'];

  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FC<Button> = ({
  children,
  className,
  type,
  onClick
}) => {
  const onClickHandler: MouseEventHandler<HTMLButtonElement> = e => {
    onClick?.(e);
  };
  return (
    <button
      type={type}
      onClick={onClickHandler}
      {...stylex.props(baseStyles.button, className && className.button)}
    >
      {children}
    </button>
  );
};

const baseStyles = stylex.create({
  button: {
    padding: '10px 40px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: `color-mix(in srgb, ${colors.secondary} 85%, white)`,
    fontWeight: '500',
    boxShadow: {
      default: 'inherit',
      ':hover': `0 0 3px black`
    }
  }
});
