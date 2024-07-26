import { ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';
import { colors } from '../../styling/tokens.stylex';

type ListProps = {
  children?: ReactNode;
  className?: StyleXStyles;
};

export const List: React.FC<ListProps> = ({ className, children }) => {
  return <ul {...stylex.props(baseStyles.ul, className)}>{children}</ul>;
};

const baseStyles = stylex.create({
  ul: {
    border: `1px solid ${colors.secondaryColor}`,
    borderRadius: '6px',
    color: colors.primaryColor,
    margin: '20px',
    padding: '20px',
    minHeight: '5px'
  }
});
