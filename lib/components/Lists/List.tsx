import { ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

type ListProps = {
  children?: ReactNode;
  className?: StyleXStyles;
};

const baseStyles = stylex.create({
  base: {
    fontSize: '5rem',
    padding: '20px',
    backgroundColor: 'yellow',
    color: {
      default: 'red',
      ':hover': 'aqua'
    }
  }
});
console.log('sdf');

export const List: React.FC<ListProps> = ({ className, children }) => {
  return (
    <ul {...stylex.props(baseStyles.base, className)}>
      {children}
      words!
    </ul>
  );
};
