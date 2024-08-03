import { ReactNode } from 'react';
import { StyleXStyles } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';

type HeaderProps = {
  children?: ReactNode;
  className?: StyleXStyles;
};

export const Header: React.FC<HeaderProps> = ({ children, className }) => {
  // TODO: Make a recursive function to find certain element types to pass styles to

  return (
    <header {...stylex.props(baseStyles.header, className)}>{children}</header>
  );
};
const baseStyles = stylex.create({
  header: {
    display: 'flex',
    justifyContent: 'center'
  }
});
