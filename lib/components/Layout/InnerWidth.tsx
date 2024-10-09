import { ReactNode } from 'react';
import { CSSObject } from '@emotion/react';

type InnerWidthProps = {
  children?: ReactNode;
  className?: {
    innerWidth: CSSObject;
  };
};

export const InnerWidth: React.FC<InnerWidthProps> = ({
  children,
  className
}) => {
  return (
    <div
      css={[baseStyles.innerWidth, className?.innerWidth]}
      className="pa-inner-width"
    >
      {children}
    </div>
  );
};

const baseStyles = {
  innerWidth: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    '@media (max-width: 769px)': {
      width: 'calc(100% - 40px)'
    },
    '@media (min-width: 770px)': {
      minWidth: '720px'
    },
    '@media (min-width: 920px)': {
      minWidth: '870px'
    },
    '@media (min-width: 1024px)': {
      minWidth: '900px'
    },
    '@media (min-width: 1200px)': {
      minWidth: '1024px'
    }
  }
};
