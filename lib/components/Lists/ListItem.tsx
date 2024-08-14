import React from 'react';
import { colors } from '../../styling/tokens.stylex';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

type ListItemProps = {
  children?: JSX.Element;
  className?: StyleXStyles;
};

export const ListItem: React.FC<ListItemProps> = ({ children, className }) => {
  let newChildren;

  // TODO: Make a recursive function to find certain element types to pass styles to
  if (children?.type.displayName === 'NavLink') {
    newChildren = React.cloneElement(children, {
      className: { ...stylex.props(baseStyles.a, className) }.className
    });
  }

  return (
    <li {...stylex.props(baseStyles.li, className)}>
      {newChildren || children}
    </li>
  );
};

const baseStyles = stylex.create({
  li: {
    borderRadius: '6px',
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: colors.lightText,
    boxShadow: {
      default: 'none',
      ':hover': `1px 1px 3px color-mix(in srgb-linear, ${colors.lightText} 50%, black)`
    }
  },
  a: {
    color: colors.tertiary
  }
});
