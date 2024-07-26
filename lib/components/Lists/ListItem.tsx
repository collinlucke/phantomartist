import React, { ReactNode } from 'react';
import { colors } from '../../styling/tokens.stylex';
import * as stylex from '@stylexjs/stylex';
import type { StyleXStyles } from '@stylexjs/stylex';

type ListItemProps = {
  children: ReactNode;
  id: React.Key;
  className?: StyleXStyles;
};

export const ListItem: React.FC<ListItemProps> = ({
  children,
  id,
  className
}) => {
  return (
    <li key={id} {...stylex.props(baseStyles.li, className)}>
      {children}
    </li>
  );
};

const baseStyles = stylex.create({
  li: {
    border: `1px solid ${colors.secondaryColor}`,
    borderRadius: '6px',
    color: colors.primaryColor,
    marginBottom: '10px',
    padding: '10px'
  }
});
