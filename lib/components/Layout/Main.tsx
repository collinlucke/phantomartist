import * as stylex from '@stylexjs/stylex';
import { StyleXStyles } from '@stylexjs/stylex';
import { ReactNode } from 'react';

type MainProps = {
  children?: ReactNode;
  className?: StyleXStyles;
};

export const Main: React.FC<MainProps> = ({ children, className }) => {
  return <main {...stylex.props(baseStyles.page, className)}>{children}</main>;
};

const baseStyles = stylex.create({
  page: {}
});
