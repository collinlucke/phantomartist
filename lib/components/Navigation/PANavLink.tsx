import { NavLink } from 'react-router-dom';
import { colors } from '../../styling/tokens.stylex';
import { StyleXStyles } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';
import { ReactElement } from 'react';

type PANavLink = {
  to: string;
  children: ReactElement;
  className?: {
    innerWidth?: StyleXStyles;
  };
};

export const PANavLink: React.FC<PANavLink> = ({ to, children, className }) => {
  return (
    <NavLink
      to={to}
      {...stylex.props(baseStyles.paNavLink, className && className.innerWidth)}
    >
      {children}
    </NavLink>
  );
};

const baseStyles = stylex.create({
  paNavLink: {
    color: colors.secondary,
    textDecoration: 'none'
  }
});
