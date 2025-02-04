import { CSSObject } from '@emotion/react';
import { ReactElement } from 'react';

type TwoColumn = {
  left: ReactElement;
  right: ReactElement;
};
export const TwoColumn: React.FC<TwoColumn> = ({ left, right }) => {
  return (
    <div css={[baseStyles.columnWrapper]}>
      <div css={[baseStyles.column]}>{left}</div>
      <div css={[baseStyles.column]}>{right}</div>
    </div>
  );
};

const baseStyles: CSSObject = {
  columnWrapper: {
    gap: '50px',
    display: 'flex',
    flexDirection: 'row',
    '@media (max-width: 740px)': {
      flexDirection: 'column',
      gap: '0'
    }
  },
  column: {
    width: '100%'
  }
};
