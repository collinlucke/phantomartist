import { ReactNode } from 'react';
import { StyleXStyles } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';

type InnerWidthProps = {
  children?: ReactNode;
  className?: {
    innerWidth: StyleXStyles;
  };
};

export const InnerWidth: React.FC<InnerWidthProps> = ({
  children,
  className
}) => {
  return (
    <div
      {...stylex.props(
        baseStyles.innerWidth,
        className && className.innerWidth
      )}
    >
      {children}
    </div>
  );
};

const baseStyles = stylex.create({
  innerWidth: {
    alignSelf: 'start',
    minWidth: {
      default: 'calc(100% - 40px)',
      '@media (min-width: 420px)': 'calc(100% - 40px)',
      '@media  (min-width: 780px)': '720px',
      '@media  (min-width: 1024px)': '900px',
      '@media  (min-width: 1200px)': '1024px'
    },
    width: {
      default: '0',
      '@media (max-width: 420px)': 'calc(100% - 40px)'
    }
  }
});
