import React from 'react';
import { colors } from '../../styling/tokens.stylex';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

type ListItemProps = {
  children?: JSX.Element;
  className?: {
    li: StyleXStyles;
    liHover: StyleXStyles;
  };
  useHover?: boolean;
};

export const ListItem: React.FC<ListItemProps> = ({
  children,
  className,
  useHover
}) => {
  return (
    <li
      {...stylex.props(
        baseStyles.li,
        useHover && baseStyles.liHover,
        className && className.li,
        className && useHover && className.liHover
      )}
    >
      {children}
    </li>
  );
};

const baseStyles = stylex.create({
  li: {
    borderRadius: '6px',
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: colors.tertiary
  },
  liHover: {
    ':hover': {
      boxShadow: `0 0 7px color-mix(in srgb-linear, ${colors.tertiary} 30%, black)`
    }
  }
});
