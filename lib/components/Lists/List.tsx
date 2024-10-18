import { ReactNode } from 'react';
import { baseColors } from '../../styling/baseTheme';
import { CSSObject } from '@emotion/react';

type ListProps = {
  children?: ReactNode;
  className?: CSSObject;
};

export const List: React.FC<ListProps> = ({ className, children }) => {
  return (
    <ul css={[baseStyles.ul, className?.ul]} className="pa-list">
      {children}
    </ul>
  );
};

const baseStyles = {
  ul: {
    borderRadius: '6px',
    backgroundColor: baseColors.tertiaryLight,
    minHeight: '5px',
    fontWeight: '500',
    padding: '20px',
    margin: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    listStyleType: 'none'
  }
};
