import { ReactElement } from 'react';
import { ModifyPropsTypes } from '../../CustomTypes.types';
import { baseColors, shadesAndTints } from '../../styling/baseTheme';
import { CSSObject } from '@emotion/react';

type HeaderModifyProps = ModifyPropsTypes & {
  children: ReactElement;
  useInnerWidth?: boolean;
  dataTestId?: string;
  className?: {
    header?: CSSObject;
    useInnerWidth?: CSSObject;
    innerWidth?: CSSObject;
  };
};

export const Header: React.FC<HeaderModifyProps> = ({
  children,
  className,
  dataTestId
}) => {
  return (
    <header
      css={[baseStyles.header, className?.header]}
      className="pa-header"
      data-testid={dataTestId}
    >
      {children}
    </header>
  );
};

const baseStyles = {
  header: {
    display: 'flex',
    marginBottom: '25px',
    padding: '20px 0',
    color: baseColors.secondary,
    justifyContent: 'center',
    height: '115px',
    borderBottom: `2px solid ${baseColors.primary}`,
    backgroundColor: shadesAndTints.tertiaryLight,
    '@media (max-width: 580px)': {
      height: '75px'
    }
  }
};
