import { ReactNode } from 'react';
import { CSSObject } from '@emotion/react';

type ListProps = {
  children?: ReactNode[];
  className?: CSSObject;
};

export const List: React.FC<ListProps> = ({ className, children }) => {
  return (
    <ul css={[localStyles.ul, className?.ui]} className="pa-list">
      {children}
    </ul>
  );
};

const localStyles: CSSObject = {
  ul: {
    fontWeight: '500',
    margin: 0,
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    listStyleType: 'none',
    paddingInlineStart: '0' // Remove default padding
  }
};
