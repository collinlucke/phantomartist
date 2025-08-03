import { ReactNode } from 'react';
import { CSSObject } from '@emotion/react';

type ListProps = {
  children?: ReactNode[];
  className?: CSSObject;
};

export const List: React.FC<ListProps> = ({ className, children }) => {
  return (
    <ul css={[localStyles.ul, className?.ul]} className="pa-list">
      {children}
    </ul>
  );
};

const localStyles: CSSObject = {
  ul: {
    borderRadius: '6px',
    fontWeight: '500',
    padding: '20px',
    margin: 0,
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    listStyleType: 'none'
  }
};
