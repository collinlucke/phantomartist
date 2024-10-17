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
    flexDirection: 'column' as 'column',
    width: 'calc(100% - 2 * 20px)',
    '@media (min-width: 634px)': {
      width: '594px'
    },
    '@media (min-width: 720px)': {
      width: 'calc(100% - 126px)'
    },
    '@media (min-width: 1000px)': {
      width: '874px'
    },
    '@media (min-width: 1100px)': {
      width: 'calc(100% - 226px)'
    },
    '@media (min-width: 1250px)': {
      width: '1024px'
    }
  }
};
