import { NavLink } from 'react-router-dom';
import { colors } from '../../styling/tokens.stylex';
import { StyleXStyles } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';
import { ReactElement } from 'react';

type PANavLink = {
  to: string;
  children: ReactElement | string;
  style?: 'primaryButton' | 'secondaryButton' | 'tertiaryButton';
  className?: {
    paNavLink?: StyleXStyles;
  };
};

export const PANavLink: React.FC<PANavLink> = ({
  to,
  children,
  className,
  style
}) => {
  return (
    <NavLink
      to={to}
      {...stylex.props(
        baseStyles.paNavLink,
        style === 'primaryButton' && baseStyles.primaryButton,
        className && className.paNavLink
      )}
    >
      {children}
    </NavLink>
  );
};

const baseStyles = stylex.create({
  paNavLink: {
    textDecoration: 'none',
    color: {
      default: colors.primary,
      ':hover': `color-mix(in srgb-linear, ${colors.secondary} 50%, black)`
    }
  },
  primaryButton: {
    color: 'black',
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
