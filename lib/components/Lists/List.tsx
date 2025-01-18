import { ReactNode } from 'react';
import { shadesAndTints } from '../../styling/baseTheme';
import { CSSObject } from '@emotion/react';

type ListProps = {
  children?: ReactNode[];
  className?: CSSObject;
};

export const List: React.FC<ListProps> = ({ className, children }) => {
  return (
    <ul css={[baseStyles.ul, className?.ul]} className="pa-list">
      {children}
    </ul>
  );
};

const baseStyles: CSSObject = {
  unOList: {
    borderRadius: '6px',
    backgroundColor: shadesAndTints.tertiaryLight,
    fontWeight: '500',
    padding: '20px',
    margin: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    listStyleType: 'none'
  }
};
