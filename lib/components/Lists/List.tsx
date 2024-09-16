import { ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';
import { colors } from '../../styling/tokens.stylex';

type ListProps = {
  children?: ReactNode;
  className?: StyleXStyles;
};

export const List: React.FC<ListProps> = ({ className, children }) => {
  return <ul {...stylex.props(className, baseStyles.ul)}>{children}</ul>;
};

const baseStyles = stylex.create({
  ul: {
    borderRadius: '6px',
    backgroundColor: `color-mix(in srgb, ${colors.primary} 35%, white)`,
    minHeight: '5px',
    fontWeight: '500',
    padding: '20px',
    margin: 0
  }
});
