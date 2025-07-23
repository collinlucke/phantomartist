import { ReactNode } from 'react';
import { CSSObject } from '@emotion/react';

type InnerWidthSize = 'small' | 'medium' | 'large' | 'full';

type InnerWidthProps = {
  children?: ReactNode;
  size?: InnerWidthSize;
  className?: {
    innerWidth: CSSObject;
  };
};

export const InnerWidth: React.FC<InnerWidthProps> = ({
  children,
  size = 'medium',
  className
}) => {
  const sizeStyles = getSizeStyles(size);

  return (
    <div
      css={[baseStyles.innerWidth, sizeStyles, className?.innerWidth]}
      className="pa-inner-width"
    >
      {children}
    </div>
  );
};

const getSizeStyles = (size: InnerWidthSize): CSSObject => {
  switch (size) {
    case 'small':
      return {
        width: 'calc(100% - 2 * 20px)',
        '@media (min-width: 634px)': {
          width: '594px'
        },
        '@media (min-width: 720px)': {
          width: 'calc(100% - 160px)'
        },
        '@media (min-width: 1000px)': {
          width: '640px'
        },
        '@media (min-width: 1100px)': {
          width: 'calc(100% - 360px)'
        },
        '@media (min-width: 1250px)': {
          width: '720px'
        }
      };

    case 'medium':
      return {
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
      };

    case 'large':
      return {
        width: 'calc(100% - 2 * 40px)',
        '@media (min-width: 634px)': {
          width: 'calc(100% - 2 * 40px)'
        },
        '@media (min-width: 720px)': {
          width: 'calc(100% - 2 * 50px)'
        },
        '@media (min-width: 1000px)': {
          width: 'calc(100% - 2 * 50px)'
        },
        '@media (min-width: 1100px)': {
          width: 'calc(100% - 2 * 55px)'
        },
        '@media (min-width: 1250px)': {
          width: 'calc(100% - 2 * 60px)'
        }
      };

    case 'full':
      return {
        width: 'calc(100% - 2 * 60px)',
        padding: '0 60px',
        boxSizing: 'border-box'
      };

    default:
      return {};
  }
};

const baseStyles = {
  innerWidth: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignSelf: 'center'
  } as CSSObject
};
