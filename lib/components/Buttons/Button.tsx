import { ReactElement } from 'react';
import * as stylex from '@stylexjs/stylex';
import { colors } from '../../styling/tokens.stylex';

type Button = {
  children: ReactElement | string;
  type: HTMLButtonElement['type'];
};

export const Button: React.FC<Button> = ({ children, type }) => {
  return (
    <button type={type} {...stylex.props(baseStyles.button)}>
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

      ':hover': `0 0 5px color-mix(in srgb, ${colors.secondary} 58%, rgba(255,255,255,.8) )`
    }
  }
});
