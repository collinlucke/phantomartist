import React, { ReactNode } from 'react';
import { colors } from '../../styling/tokens.stylex';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

type ListItemProps = {
  children: ReactNode;
  className?: StyleXStyles;
};

export const ListItem: React.FC<ListItemProps> = ({ children, className }) => {
  // As stylex doesn't support child targeting, user-agent styles will be applied to all children by
  // default. They can only be changed by the consuming component based on what they use inside of
  // the <ListItem> component
  return <li {...stylex.props(baseStyles.li, className)}>{children}</li>;
};

const baseStyles = stylex.create({
  li: {
    borderRadius: '6px',
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: colors.lightText,
    boxShadow: {
      default: 'none',
      ':hover': '1px 1px 3px'
    }
  }
});
