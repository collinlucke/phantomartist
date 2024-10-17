import { ReactElement } from 'react';
import { ModifyProps } from '../../sharedTypes/ModifyProps.types';
import { baseTheme } from '../../styling/baseTheme';
import { CSSObject } from '@emotion/react';

type HeaderModifyProps = ModifyProps & {
  children: ReactElement;
  useInnerWidth?: boolean;
  isHeading?: boolean;
  propStyles?: CSSObject;
  className?: {
    header?: CSSObject;
    useInnerWidth?: CSSObject;
    innerWidth?: CSSObject;
  };
};

export const Header: React.FC<HeaderModifyProps> = ({
  children,
  className,
  propStyles
}) => {
  return (
    <header css={[baseStyles.header, propStyles]} className="pa-header">
      {children}
    </header>
  );
};

const baseStyles = {
  header: {
    display: 'flex',
    marginBottom: '25px',
    padding: '20px 0',
    color: baseTheme.colors.secondary,
    justifyContent: 'center',
    height: '135px',
    borderBottom: `2px solid ${baseTheme.colors.primary}`,
    backgroundColor: baseTheme.colors.tertiaryLight,
    '@media (max-width: 580px)': {
      height: '75px'
    }
  }
};
