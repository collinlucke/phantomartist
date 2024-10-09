import { FC, ReactElement } from 'react';

type TwoColumn = {
  left: ReactElement;
  right: ReactElement;
};
export const TwoColumn: FC<TwoColumn> = ({ left, right }) => {
  return (
    <div css={[baseStyles.columnWrapper]}>
      <div css={[baseStyles.column]}>{left}</div>
      <div css={[baseStyles.column]}>{right}</div>
    </div>
  );
};

const baseStyles = {
  columnWrapper: {
    gap: '50px',
    display: 'flex',
    flexDirection: 'row' as 'row',
    '@media (max-width: 740px)': {
      flexDirection: 'column' as 'column',
      gap: '0'
    }
  },
  column: {
    width: '100%'
  }
};
