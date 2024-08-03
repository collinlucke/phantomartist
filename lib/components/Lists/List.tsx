import { ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

type ListProps = {
  children?: ReactNode;
  className?: StyleXStyles;
};

export const List: React.FC<ListProps> = ({ className, children }) => {
  return <ul {...stylex.props(baseStyles.ul, className)}>{children}</ul>;
};

const baseStyles = stylex.create({
  ul: {
    borderRadius: '6px',
    minHeight: '5px',
    fontWeight: '500',
    padding: '20px 0',
    margin: 0
  }
});
