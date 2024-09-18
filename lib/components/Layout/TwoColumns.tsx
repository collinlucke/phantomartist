import { FC, ReactElement } from 'react';
import { InnerWidth } from './InnerWidth';
import * as stylex from '@stylexjs/stylex';

type TwoColumn = {
  left: ReactElement;
  right: ReactElement;
};
export const TwoColumn: FC<TwoColumn> = ({ left, right }) => {
  return (
    <div {...stylex.props(baseStyles.columnWrapper)}>
      <div {...stylex.props(baseStyles.column)}>{left}</div>
      <div {...stylex.props(baseStyles.column)}>{right}</div>
    </div>
  );
};

const baseStyles = stylex.create({
  columnWrapper: {
    display: 'flex',
    flexDirection: {
      default: 'row',
      '@media (max-width: 580px)': 'column'
    },
    gap: {
      default: '50px',
      '@media (max-width: 580px)': '0'
    }
  },
  column: {
    width: '100%'
  }
});
