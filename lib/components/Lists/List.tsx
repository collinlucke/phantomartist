import { ReactNode } from 'react';
import { colors } from '../../styling/baseTheme';
import { CSSObject } from '@emotion/react';

type ListProps = {
  children?: ReactNode;
  className?: CSSObject;
};

export const List: React.FC<ListProps> = ({ className, children }) => {
  return <ul css={[baseStyles.ul, className?.ul]}>{children}</ul>;
};

const baseStyles = {
  ul: {
    borderRadius: '6px',
    backgroundColor: `color-mix(in srgb, ${colors.primary} 35%, white)`,
    minHeight: '5px',
    fontWeight: '500',
    padding: '20px',
    margin: 0,
    width: '100%'
  }
};
