import { ReactNode } from 'react';
import { StyleXStyles } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';

type BlockProps = {
  children?: ReactNode;
  className?: StyleXStyles;
};

export const Block: React.FC<BlockProps> = ({ children, className }) => {
  return <div {...stylex.props(baseStyles.block, className)}>{children}</div>;
};

const baseStyles = stylex.create({
  block: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
});
