import { ReactNode } from 'react';
import { StyleXStyles } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';
import { colors } from '../../styling/tokens.stylex';

type InnerWidthProps = {
  children?: ReactNode;
  className?: StyleXStyles;
};

export const InnerWidth: React.FC<InnerWidthProps> = ({
  children,
  className
}) => {
  return <div {...stylex.props(baseStyles.base, className)}>{children}</div>;
};

// const width = screenWidths.xlg;

const baseStyles = stylex.create({
  base: {
    alignSelf: 'start',
    backgroundColor: `color-mix(in srgb, ${colors.primaryColor} 35%, white)`,
    width: {
      default: 'calc(100% - 20px)',
      '@media  (min-width: 320px)': 'calc(100% - 20px)',
      '@media (min-width: 420px)': 'calc(100% - 40px)',
      '@media  (min-width: 780px)': '720px',
      '@media  (min-width: 1024px)': '900px',
      '@media  (min-width: 1200px)': '1024px'
    },
    padding: '0 20px'
  }
});
